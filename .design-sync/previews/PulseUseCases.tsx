import { PulseUseCases } from 'rhobots-website';

/** Logistics: the tracking / delivery queries a shipping contact centre actually gets. */
export const Logistics = () => (
  <div className="bg-background p-6">
    <PulseUseCases industry="logistics" />
  </div>
);

/** Fintech: account, card and dispute queries. */
export const Fintech = () => (
  <div className="bg-background p-6">
    <PulseUseCases industry="fintech" />
  </div>
);

/** Insurance: policy and claim queries. */
export const Insurance = () => (
  <div className="bg-background p-6">
    <PulseUseCases industry="insurance" />
  </div>
);

/** No industry selected yet — the generic support set, with the prompt to pick one. */
export const NoIndustrySelected = () => (
  <div className="bg-background p-6">
    <PulseUseCases industry="" />
  </div>
);
