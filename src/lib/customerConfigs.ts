export interface DemoStep {
  type: 'customer' | 'ai' | 'reasoning';
  content: string;
  delay: number;
}

export interface CustomerConfig {
  displayName: string;
  seoTitle?: string;
  industry?: string;
  hero?: {
    headline?: string;
    subheadline?: string;
  };
  demoSteps?: DemoStep[];
}

export const CUSTOMER_CONFIGS: Record<string, CustomerConfig> = {
  safexpress: {
    displayName: 'Safexpress',
    seoTitle: 'AI Customer Support for Safexpress - Pulse',
    industry: 'logistics',
    hero: {
      headline: 'SUPPORT AT THE SPEED OF YOUR SHIPMENTS.',
      subheadline:
        "Every ticket resolved — automatically. Pulse connects directly to your TMS, CRM, and WMS to pull shipment data, trigger priority flags, and close tickets before your agents even see them.",
    },
    demoSteps: [
      {
        type: 'customer',
        content: "My shipment AWB#SFX-8842917 was supposed to arrive yesterday but there's been no update since it left the Delhi hub 3 days ago. I urgently need it for a trade show tomorrow.",
        delay: 1200,
      },
      {
        type: 'reasoning',
        content: '> INTENT: shipment_delay_inquiry\n> SENTIMENT: anxious [0.91]\n> ACTION: lookup_shipment(AWB#SFX-8842917)',
        delay: 1800,
      },
      {
        type: 'ai',
        content: "I understand the urgency. Let me pull up the latest status on AWB#SFX-8842917 right away.",
        delay: 1400,
      },
      {
        type: 'reasoning',
        content:
          '> RESULT: shipment_held_at_Mumbai_hub_customs_inspection\n> POLICY_CHECK: priority_release_eligible = true\n> ACTION: flag_priority, notify_hub_operations, send_eta_update',
        delay: 2000,
      },
      {
        type: 'ai',
        content:
          "Your shipment is currently held at our Mumbai hub for a routine customs inspection — that's why tracking hasn't updated. I've flagged it as priority and notified the hub operations team. Based on current queue, it should clear within 4 hours and be out for delivery by this evening. You'll receive real-time SMS updates from here.",
        delay: 1800,
      },
      {
        type: 'customer',
        content: "Thank you so much — that's a relief. Please make sure it reaches me before 6 PM.",
        delay: 1200,
      },
      {
        type: 'reasoning',
        content: '> SENTIMENT_SHIFT: anxious → reassured\n> OUTCOME: escalated_to_ops | customer_notified\n> CSAT_PREDICTED: 4.7/5',
        delay: 1500,
      },
    ],
  },
  acmecorp: {
    displayName: 'Acme Corp',
    seoTitle: 'AI Customer Support for Acme Corp - Pulse',
    industry: 'fintech',
    hero: {
      headline: 'BUILT FOR\nACME CORP.',
      subheadline:
        "Acme Corp's customers get instant, accurate answers across every channel — chat, email, voice, and social. Your agents get freed from repetitive tickets to handle what actually needs a human.",
    },
    demoSteps: [
      {
        type: 'customer',
        content: "My invoice #INV-20481 shows a charge I don't recognize — $349 for an Enterprise Add-on I never activated. Can you fix this?",
        delay: 1200,
      },
      {
        type: 'reasoning',
        content: '> INTENT: billing_dispute\n> SENTIMENT: frustrated [0.84]\n> ACTION: lookup_invoice(#INV-20481)',
        delay: 1800,
      },
      {
        type: 'ai',
        content: "I'm sorry to hear about that charge. Let me pull up invoice #INV-20481 and investigate immediately.",
        delay: 1400,
      },
      {
        type: 'reasoning',
        content:
          '> RESULT: add_on_auto_enabled_by_trial_expiry\n> POLICY_CHECK: eligible_for_full_refund = true\n> ACTION: issue_credit, downgrade_plan, send_confirmation_email',
        delay: 2000,
      },
      {
        type: 'ai',
        content:
          "Found it — the Enterprise Add-on was automatically activated when your free trial of that feature expired last week. Since you didn't intend to keep it, I've issued a full $349 credit to your account and removed the add-on. You'll receive a confirmation email shortly.",
        delay: 1800,
      },
      {
        type: 'customer',
        content: "That was fast. Really appreciate it, thank you!",
        delay: 1200,
      },
      {
        type: 'reasoning',
        content: '> SENTIMENT_SHIFT: frustrated → satisfied\n> OUTCOME: resolved | escalation: none\n> CSAT_PREDICTED: 4.9/5',
        delay: 1500,
      },
    ],
  },
};

export function getCustomerConfig(slug: string): CustomerConfig | null {
  return CUSTOMER_CONFIGS[slug.toLowerCase()] ?? null;
}
