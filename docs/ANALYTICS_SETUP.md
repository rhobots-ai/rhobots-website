# Analytics, Ad Pixels & Consent — Setup Guide

This site loads **no tracking until the visitor accepts cookies** (opt-in, GDPR/PECR-safe).
The code plumbing is already in place. You only need to (1) create a GTM container,
(2) add your pixels inside GTM, and (3) set one env var. No code changes required.

---

## How it works (already built)

- **Consent banner** (`src/components/ConsentBanner.tsx`) shows on first visit, site-wide.
  Mounted in `src/components/layout/Layout.tsx`.
- On **Accept**, `src/lib/consent.ts` injects Google Tag Manager. On **Reject**, nothing loads.
- Choice is stored in `localStorage` (`rh_consent_v1`). Returning visitors who accepted get
  GTM auto-loaded on boot; others stay clean.
- Users can **withdraw/change consent** any time via the **Manage cookie consent** button on
  the `/cookie` page (it re-opens the banner).
- **Conversion events** are pushed to `window.dataLayer` so GTM can bind triggers to them:
  | Event name | Fires when |
  |---|---|
  | `partner_lead_submit` | partner form submitted successfully (carries `region`, `firm_type`) |
  | `partner_lead_thank_you` | `/partners/thank-you` page loads (the robust conversion endpoint) |

Because GTM only loads after consent, pixels never fire for visitors who reject. Events
pushed before GTM loads are replayed by GTM on init.

---

## Step 1 — Create a GTM container

1. Go to https://tagmanager.google.com → **Create Account**.
2. Account name: `Rhobots`. Container name: `rhobots.ai`. Target platform: **Web**.
3. Copy the container ID — it looks like `GTM-XXXXXXX`.

## Step 2 — Set the env var

Add to `.env.local` for local testing and to **Vercel → Project → Settings → Environment Variables** for production:

```
VITE_GTM_ID=GTM-XXXXXXX
```

That's the only code-side switch. With it unset, no GTM loads at all (safe default).

> Already present in this project: `VITE_WEB3FORMS_ACCESS_KEY` (lead form). Make sure that
> one is set in Vercel too, or the form shows the "email us" fallback.

## Step 3 — Add your ad pixels inside GTM (web UI, no code)

In the GTM container, add each platform as a **Tag**. Recommended set for partner ads:

### Google Analytics 4 (traffic)
- **Tag type:** Google Analytics: GA4 Configuration → your Measurement ID (`G-XXXX`).
- **Trigger:** All Pages.

### LinkedIn Insight Tag (B2B partner ads — primary)
- GTM has a built-in **LinkedIn Insight** tag template (Community Templates), or use Custom HTML with your **Partner ID** from LinkedIn Campaign Manager → Account Assets → Insight Tag.
- **Trigger:** All Pages.
- **Conversion:** in LinkedIn Campaign Manager create a conversion that fires on the
  `partner_lead_thank_you` event (see Step 4) or the `/partners/thank-you` URL.

### Meta Pixel (optional)
- Custom HTML tag with your Pixel base code, **Trigger:** All Pages.
- Add a second tag firing `fbq('track','Lead')` on the `partner_lead_thank_you` trigger.

### Google Ads (optional)
- Google Ads Conversion Tracking tag with your Conversion ID/Label, **Trigger:** the
  `partner_lead_thank_you` event.

## Step 4 — Wire the conversion trigger

1. GTM → **Triggers → New → Custom Event**.
2. Event name: `partner_lead_thank_you`. (Add a second for `partner_lead_submit` if you want
   submit-time tracking too.)
3. Attach this trigger to each platform's conversion tag.
4. **Submit / Publish** the container.

Alternative trigger: a **Page View** trigger where Page Path equals `/partners/thank-you`.

## Step 5 — Test

1. `VITE_GTM_ID=GTM-XXXX npm run dev`, open `/partners`.
2. Accept the cookie banner → confirm `gtm.js` loads (Network tab) and GTM **Preview** mode
   connects.
3. Submit the form → land on `/partners/thank-you` → confirm `partner_lead_thank_you` fires
   in GTM Preview and each conversion tag triggers.
4. Reject cookies in a fresh session → confirm **no** `googletagmanager.com` request is made.

---

## Lead routing — autoresponder & CRM (Web3Forms dashboard, no code)

The form posts to Web3Forms with all fields + UTM attribution. Configure delivery in the
Web3Forms dashboard (https://web3forms.com) for the access key in `VITE_WEB3FORMS_ACCESS_KEY`:

- **Autoresponder:** dashboard → enable Autoresponder, set subject/body (e.g. "Thanks — a
  Rhobots partnerships lead will reach out within one business day"). Sends to the lead's email
  automatically. (Requires a paid Web3Forms plan.)
- **CRM routing:** dashboard → Integrations / Webhooks. Point a webhook at your CRM (HubSpot,
  Salesforce, Pipedrive) or Zapier/Make to create the lead record. The UTM fields
  (`utm_source/medium/campaign/term/content`, `gclid`, `fbclid`, `li_fat_id`) are included in
  every submission for attribution.
- **Recipient:** set the destination inbox (currently routes to the key owner; point it at a
  monitored alias e.g. `partnerships@rhobots.ai` with an SLA owner).

---

## Compliance notes

- Marketing/analytics pixels load **only after consent** → GDPR/PECR opt-in satisfied for UK/EU.
- `/cookie` page lists Essential, Analytics, Marketing cookies accurately and offers consent
  withdrawal.
- Keep the GTM container's tags gated through this consent flow — do **not** add raw pixel
  `<script>` tags to `index.html`, which would fire before consent.
