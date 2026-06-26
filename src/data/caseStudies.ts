export interface CaseStudyMetric {
  value: string;
  label: string;
  sub?: string;
  subDim?: string;
}

export interface CaseStudy {
  slug: string;
  industry: string;
  eyebrow: string;
  title: string;
  /** Substring of `title` rendered in the primary accent color. */
  highlight?: string;
  summary: string;
  metrics: CaseStudyMetric[];
  challenge: string;
  approach: string;
  pullQuote: { heading: string; body: string };
  poweredBy: { product: string; tagline: string; description: string; path: string };
  /** Short proof shown on the listing row. */
  listingMetric: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'logistics-operator',
    industry: 'LOGISTICS',
    eyebrow: 'AI AUTOMATION · IN PRODUCTION',
    title: '300 people redeployed from data entry. $2M saved in year one — with no process overhaul.',
    highlight: '$2M saved',
    summary:
      "How one of India's largest logistics companies put production-grade AI to work inside its existing operations — automating high-volume data entry and the smarter, judgment-heavy tasks around it, with humans kept in the loop where it counts.",
    metrics: [
      { value: '300', label: 'People redeployed', sub: 'in year one', subDim: '700 targeted in year two' },
      { value: '$2M', label: 'Operating cost saved', sub: 'in year one', subDim: '$10M targeted in year two' },
      { value: '0', label: 'Process changes', sub: 'no system overhaul', subDim: 'zero force-fitting' },
    ],
    challenge:
      "A logistics leader operating at national scale was spending hundreds of people-hours on high-volume data entry and document handling — not just keying, but judgment-heavy tasks that off-the-shelf tools couldn't handle.",
    approach:
      "We didn't force-fit AI. We went into the system, mapped how work actually flowed, and decided where AI genuinely fit — then used it to run the existing process far more efficiently, with no rip-and-replace.",
    pullQuote: {
      heading: 'No overhaul. No process change. No force-fitting.',
      body: 'AI was layered onto the operation as it already ran — with human-in-the-loop control retained wherever judgment was required.',
    },
    poweredBy: {
      product: 'Operator',
      tagline: 'AI-powered, self-improving automation engine',
      description:
        'Operator learns the process, automates the repetitive and the smart tasks alike, and gets better the longer it runs — deployed inside your stack, no overhaul.',
      path: '/products/operator',
    },
    listingMetric: '$2M saved · 300 redeployed',
  },
  {
    slug: 'insurance-extract',
    industry: 'INSURANCE / BFSI',
    eyebrow: 'DOCUMENT AI · ON-PREM · FINE-TUNED',
    title:
      'Policy extraction, brought in-house. 10× cheaper. 99% accurate. Zero data leaving the building.',
    highlight: '99% accurate.',
    summary:
      "India's largest insurance broker was sending sensitive policy documents to an expensive third-party parser — accurate less than 60% of the time, so every output still needed manual review. We replaced it with a model fine-tuned on their own data, running entirely on their infrastructure.",
    metrics: [
      { value: '99%', label: 'Extraction accuracy', sub: 'fields right, first time', subDim: 'up from <60%' },
      { value: '10×', label: 'Cost per document', sub: 'lower than the old vendor', subDim: '~$2M / year projected savings' },
      { value: '0', label: 'Third-party data exposure', sub: 'data leaves their environment', subDim: 'fully on-prem and private' },
    ],
    challenge:
      "A third-party service parsed every policy document — expensive, and accurate under 60% of the time, so staff had to re-check the output. Worse, sensitive policyholder data had to leave the business to reach the vendor.",
    approach:
      "We fine-tuned a model on the broker's own policy data and deployed it entirely on their infrastructure — in four weeks. Nothing leaves their environment, accuracy reached 99%, and cost fell to a tenth of the vendor's.",
    pullQuote: {
      heading: 'A cost cut today — an in-house AI capability for everything next.',
      body: "The same fine-tuned model now runs as the broker's in-house AI foundation — reused across new projects without paying a vendor or exposing data again.",
    },
    poweredBy: {
      product: 'Extract',
      tagline: 'document AI on a fine-tuned, on-prem model',
      description:
        'Extract turns policy documents, forms and unstructured files into clean, structured data — fine-tuned on your own data, deployed in your environment, with no third party in the loop.',
      path: '/products/extract',
    },
    listingMetric: '99% accurate · 10× cheaper',
  },
];

export function getCaseStudy(slug: string | undefined): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
