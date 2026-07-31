import { ConversationDemo } from 'rhobots-website';

// The component is timer-driven: it waits 800ms after mount, then 600ms before the
// first line, then walks `steps` on their own delays (~11s end to end). A static
// card is screenshotted long before any of that, so it would always capture
// "WAITING FOR CONVERSATION…". Collapsing the card's own timers makes the playback
// finish immediately, so the card shows the conversation in its resolved state.
const realSetTimeout = window.setTimeout.bind(window);
window.setTimeout = ((fn: TimerHandler, ms?: number, ...rest: unknown[]) =>
  realSetTimeout(fn, Math.min(ms ?? 0, 1), ...rest)) as typeof window.setTimeout;

// The component's built-in script runs on realistic conversational delays
// (~11s end to end), which a static card never reaches. Same content, compressed
// timing, so the card shows the resolved conversation instead of "WAITING…".
const FAST = [
  {
    type: 'customer' as const,
    content:
      "My package was supposed to arrive yesterday but the tracking hasn't updated. AWB #9928341. What's going on?",
    delay: 10,
  },
  {
    type: 'reasoning' as const,
    content: '> INTENT: tracking_status_inquiry\n> SENTIMENT: frustrated [0.87]\n> ACTION: lookup_awb(#9928341)',
    delay: 10,
  },
  {
    type: 'ai' as const,
    content: 'I completely understand your frustration. Let me check on the status of AWB #9928341 right now.',
    delay: 10,
  },
  {
    type: 'reasoning' as const,
    content:
      '> RESULT: weather_delay_hub | est_delivery: today_by_8pm\n> POLICY_CHECK: proactively_notify = true\n> ACTION: setup_sms_tracking, generate_apology_credit',
    delay: 10,
  },
  {
    type: 'ai' as const,
    content:
      "I found your package — there was a brief weather delay at our transit hub, but it's out for delivery and will arrive by 8 PM today. I've set up real-time SMS updates for you and applied a $15 credit to your account for the inconvenience.",
    delay: 10,
  },
  { type: 'customer' as const, content: "Oh wow, that's actually great. Thanks!", delay: 10 },
  {
    type: 'reasoning' as const,
    content: '> SENTIMENT_SHIFT: frustrated → satisfied\n> OUTCOME: resolved | escalation: none\n> CSAT_PREDICTED: 4.8/5',
    delay: 10,
  },
];

/** Split view: the customer chat on the left, the agent's reasoning trace on the right. */
export const ResolvedConversation = () => (
  <div className="bg-background p-6">
    <ConversationDemo steps={FAST} />
  </div>
);

/** A short escalation script — the same two panels driven by custom steps. */
export const CustomScript = () => (
  <div className="bg-background p-6">
    <ConversationDemo
      steps={[
        { type: 'customer', content: 'I want to cancel my policy renewal before it charges.', delay: 10 },
        {
          type: 'reasoning',
          content: '> INTENT: cancel_renewal\n> POLICY: POL2001\n> ACTION: check_cooling_off_window',
          delay: 10,
        },
        {
          type: 'ai',
          content:
            "You're still inside the 15-day cooling-off window, so I can stop the renewal now with no charge. Confirming for policy POL2001.",
          delay: 10,
        },
        {
          type: 'reasoning',
          content: '> OUTCOME: renewal_stopped | refund: none_due\n> ESCALATION: none',
          delay: 10,
        },
      ]}
    />
  </div>
);
