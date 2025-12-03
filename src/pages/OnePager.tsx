import BrandLogo from "../components/BrandLogo";

const OnePager = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8 gap-8">
      {/* Page 1 - Company Overview */}
      <div className="w-[210mm] h-[280mm] bg-white border border-gray-300 shadow-2xl p-12 overflow-hidden">

        {/* Header */}
        <div className="border-b-2 border-blue-600 pb-4 mb-6">
          {/* <h1 className="text-4xl font-bold tracking-tight text-blue-600">Rhobots</h1> */}
          <BrandLogo className="mb-8" variant="sm" align="start" />
          <p className="text-sm mt-1 font-medium text-gray-700">Enterprise AI, Engineered for Reality</p>
        </div>

        {/* Who We Are */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Who We Are</h2>
          <p className="text-xs leading-relaxed">
            Rhobots delivers production-grade AI for enterprises — purpose-built to integrate securely into your systems,
            drive efficiency, and operationalize AI at scale. We don't experiment — we ship reliable AI in days, not months.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">What We Do</h2>
          <p className="text-xs leading-relaxed mb-2">We help enterprises:</p>
          <ul className="text-xs space-y-0.5 ml-4">
            <li>• Understand their processes</li>
            <li>• Identify where AI generates measurable lift</li>
            <li>• Deploy hardened, secure, scalable solutions</li>
            <li>• Mature internal AI capability over time</li>
          </ul>
          <p className="text-xs mt-2 italic">We operate through productized services—pre-built platforms customized to your context, not one-off projects.</p>
        </section>

        {/* Enterprise AI Suite */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Our Enterprise AI Suite</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
            <div><span className="font-bold text-blue-700">Studio</span> — Custom AI Training</div>
            <div><span className="font-bold text-blue-700">Operator</span> — AI Automation Platform</div>
            <div><span className="font-bold text-blue-700">DocumentLM</span> — Talk to Your Unstructured Data</div>
            <div><span className="font-bold text-blue-700">Wiser</span> — Query Databases in English</div>
            <div><span className="font-bold text-blue-700">TechSpec</span> — AI for Product & Engineering Teams</div>
            <div><span className="font-bold text-blue-700">Robo</span> — AI Workflow Builder</div>
          </div>
        </section>

        {/* Why Enterprises Choose Us */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Why Enterprises Choose Us</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xs font-bold mb-1">Built for Reality</h3>
              <p className="text-xs leading-tight">Security, governance, compliance — not PoCs, not prototypes.</p>
            </div>
            <div>
              <h3 className="text-xs font-bold mb-1">Productized but Modular</h3>
              <p className="text-xs leading-tight">Pick what matters — extend as you scale.</p>
            </div>
            <div>
              <h3 className="text-xs font-bold mb-1">Security First</h3>
              <ul className="text-xs space-y-0.5">
                <li>• On-prem & air-gapped options</li>
                <li>• Your data stays inside</li>
                <li>• SOC 2 Type II practices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold mb-1">Fast Time to Value</h3>
              <p className="text-xs leading-tight mb-1">Go from need → working production AI in days.</p>
              <h3 className="text-xs font-bold mb-1 mt-2">Human in the Loop</h3>
              <p className="text-xs leading-tight">AI that knows when to ask for help — no rogue behavior.</p>
            </div>
          </div>
        </section>

        {/* Outcomes We Deliver */}
        <section className="mb-4">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Outcomes We Deliver</h2>
          <ul className="text-xs space-y-0.5 ml-4 columns-2">
            <li>• Cost reduction through automation</li>
            <li>• Scalability without hiring spikes</li>
            <li>• Faster decision-making</li>
            <li>• Knowledge unlocking across departments</li>
            <li>• Compliance and auditability built-in</li>
          </ul>
        </section>

        {/* Footer */}
        <div className="border-t border-blue-600 pt-3 mt-6 text-center">
          <p className="text-xs font-medium text-gray-700">Contact: tech@rhobots.ai | www.rhobots.ai</p>
        </div>
      </div>

      {/* Page 2 - Ashish Gupta Profile */}
      <div className="w-[210mm] min-h-[280mm] bg-white border border-gray-300 shadow-2xl p-4 overflow-hidden">

        {/* Header */}
        <div className="border-b-2 border-blue-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold tracking-tight text-blue-600">Ashish Gupta</h1>
          <p className="text-lg mt-1 font-medium text-gray-700">CTO & CPO, Progcap</p>
          <div className="text-xs mt-3 space-y-1">
            <p>✉️ <a href="mailto:ag@rhobots.ai" className="text-blue-600 hover:underline">ag@rhobots.ai</a></p>
            <p>🔗 LinkedIn: ashishgupta97065</p>
          </div>
        </div>

        {/* Profile Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Profile Summary</h2>
          <p className="text-xs leading-relaxed">
            Ashish Gupta is a seasoned technology leader with deep experience in <strong>fintech, digital health, insurance, and e-commerce</strong>.
            Over two decades, he has built and scaled digital platforms, led product and engineering teams, driven innovations, and operated at C-suite
            level across market-leading organizations.
          </p>
          <p className="text-xs leading-relaxed mt-2">
            He currently serves as <strong>CTO & CPO at Progcap</strong>, a mission-driven fintech empowering millions of micro and small enterprises
            through digital supply chain financing.
          </p>
        </section>

        {/* Experience Highlights */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide text-blue-600">Experience Highlights</h2>

          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-bold">Progcap — CTO & CPO (2021–Present)</h3>
              <p className="text-xs leading-relaxed mt-1">
                Leading product and technology for an inclusive financing tech firm digitizing MSME supply chains and enabling affordable credit.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">Max Bupa Health Insurance — Chief Technology Officer (2020–2021)</h3>
              <p className="text-xs leading-relaxed mt-1">
                Driving digital innovation, customer experience, and market share expansion for India's leading health insurer.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">PolicyBazaar Group (2015–2020)</h3>
              <ul className="text-xs space-y-1 mt-1 ml-4">
                <li>• <strong>CEO, Docprime</strong> — Built India's largest digital healthcare network and teleconsultation ecosystem, scaling to 30K+ doctors and 5,000+ daily consults.</li>
                <li>• <strong>CTO, CPO & Head of Digital Marketing</strong> — Led technology, product, and growth for India's top insurance marketplace with 20M+ annual policy sales and over 90% category share.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold">HealthKart — VP & CTO (2015)</h3>
              <p className="text-xs leading-relaxed mt-1">
                Led engineering for India's premier e-health and medical products marketplace.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">Couponvoodoo.com — Founder & CEO (2013–2015)</h3>
              <p className="text-xs leading-relaxed mt-1">
                Built pricing intelligence tech enabling "One Product, One Price" aggregation across commerce platforms.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">Tekriti Software — Partner (2007–2013)</h3>
              <p className="text-xs leading-relaxed mt-1">
                Scaled web and mobile development services before its acquisition into Kellton Tech.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">ICI India — Marketing & Project Leadership (2001–2007)</h3>
              <p className="text-xs leading-relaxed mt-1">
                Held roles in product development, Six Sigma project management (Black Belt certified), business development, and sales.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Education</h2>
          <p className="text-xs">
            🎓 <strong>Bachelor of Technology, Chemical Engineering</strong><br />
            Indian Institute of Technology Delhi (1997–2001)
          </p>
        </section>

        {/* Top Skills */}
        <section className="mb-4">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Top Skills</h2>
          <ul className="text-xs space-y-0.5 ml-4">
            <li>• Business Development</li>
            <li>• Product Management</li>
            <li>• Product Development</li>
          </ul>
        </section>

        {/* Footer */}
        <div className="border-t border-blue-600 pt-3 mt-6 text-center">
          <p className="text-xs font-medium text-gray-700">Contact: tech@rhobots.ai | www.rhobots.ai</p>
        </div>
      </div>

      {/* Page 3 - Ravi Piplani Profile */}
      <div className="w-[210mm] min-h-[280mm] bg-white border border-gray-300 shadow-2xl p-4 overflow-hidden">

        {/* Header */}
        <div className="border-b-2 border-blue-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold tracking-tight text-blue-600">Ravi Piplani</h1>
          <p className="text-lg mt-1 font-medium text-gray-700">Co-Founder, MayvionAI</p>
          <div className="text-xs mt-3 space-y-1">
            <p>✉️ <a href="mailto:ravi@rhobots.ai" className="text-blue-600 hover:underline">ravi@rhobots.ai</a></p>
            <p>🔗 LinkedIn: ravipiplani</p>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Summary</h2>
          <p className="text-xs leading-relaxed mb-2">
            Ravi builds AI products that move beyond demos and <strong>transform real business operations</strong>.
          </p>
          <p className="text-xs leading-relaxed">
            At <strong>MayvionAI</strong>, he leads the architecture and vision behind platforms such as Studio, Operator, Document, and Voice —
            bringing <strong>production-grade enterprise AI</strong> into mission-critical workflows at scale.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide text-blue-600">Experience</h2>

          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-bold">Mayvion AI — Co-Founder (Oct 2025 – Present)</h3>
              <p className="text-xs leading-relaxed mt-1">
                Building next-gen enterprise automation platforms. Responsibilities include:
              </p>
              <ul className="text-xs space-y-0.5 mt-1 ml-4">
                <li>• Product architecture for Studio, Operator, Document, and Voice solutions</li>
                <li>• AI strategy, model fine-tuning, and integrations</li>
                <li>• Translating complex processes into automated workflows</li>
                <li>• Driving enterprise adoption with embedded AI</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold">Progcap (2021–2025, 4 yrs 8 mo)</h3>
              <ul className="text-xs space-y-0.5 mt-1 ml-4">
                <li>• <strong>Senior Vice President of Engineering</strong></li>
                <li>• <strong>VP of Engineering</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold">Toffee Insurance (2017–2021, 3 yrs 8 mo)</h3>
              <p className="text-xs leading-relaxed mt-1">Roles included:</p>
              <ul className="text-xs space-y-0.5 mt-1 ml-4">
                <li>• <strong>Head of Engineering</strong></li>
                <li>• <strong>Solutions Architect</strong></li>
                <li>• <strong>Technology Lead</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold">Kalaage Creations — Co-Founder (2014–2018)</h3>
              <p className="text-xs leading-relaxed mt-1">
                Built a publishing platform enabling creators to reach audiences via online and print channels.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">Earlier Engineering Roles</h3>
              <ul className="text-xs space-y-0.5 mt-1 ml-4">
                <li>• <strong>Tech Mahindra</strong> — Senior Software Engineer</li>
                <li>• <strong>FCS</strong> — Senior Consultant</li>
                <li>• <strong>Wipro</strong> — Senior Systems Engineer</li>
                <li>• <strong>Infosys</strong> — Senior System Engineer</li>
              </ul>
              <p className="text-xs leading-relaxed mt-1">
                Specialized in <strong>Oracle BPM process design and development</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <p className="text-xs">
            <strong>Bachelor of Engineering, CSE</strong><br />
            CITM, Faridabad (2005–2009)
          </p>
        </section>

        {/* Top Skills */}
        <section className="mb-4">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Top Skills</h2>
          <ul className="text-xs space-y-0.5 ml-4">
            <li>• Technology Consulting</li>
            <li>• Artificial Intelligence</li>
            <li>• Enterprise Software</li>
          </ul>
        </section>

        {/* Footer */}
        <div className="border-t border-blue-600 pt-3 mt-6 text-center">
          <p className="text-xs font-medium text-gray-700">Contact: tech@rhobots.ai | www.rhobots.ai</p>
        </div>
      </div>

      {/* Page 4 - Gulshan Yadav Profile */}
      <div className="w-[210mm] min-h-[280mm] bg-white border border-gray-300 shadow-2xl p-4 overflow-hidden">

        {/* Header */}
        <div className="border-b-2 border-blue-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold tracking-tight text-blue-600">Gulshan Yadav</h1>
          <p className="text-lg mt-1 font-medium text-gray-700">Co-Founder | Enterprise AI | AI Researcher</p>
          <div className="text-xs mt-3 space-y-1">
            <p>✉️ <a href="mailto:gulshan@rhobots.ai" className="text-blue-600 hover:underline">gulshan@rhobots.ai</a></p>
            <p>🔗 LinkedIn: gulshany01</p>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Summary</h2>
          <p className="text-xs leading-relaxed">
            Full-stack software engineer and AI researcher with deep interest in <strong>problem-solving, algorithms, data structures, databases, and competitive programming</strong>.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide text-blue-600">Experience</h2>

          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-bold">Mayvion AI — Co-Founder (Oct 2025 – Present)</h3>
              <p className="text-xs leading-relaxed mt-1">
                Working on enterprise-grade AI platforms and automation solutions.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">Progcap (2021–2025, 4 yrs 1 mo)</h3>
              <ul className="text-xs space-y-1.5 mt-1 ml-4">
                <li>
                  • <strong>Senior Software Engineer (Apr 2024 – Oct 2025)</strong>
                </li>
                <li>
                  • <strong>Software Engineer (Jun 2022 – Mar 2024)</strong>
                  <ul className="ml-4 mt-0.5 space-y-0.5">
                    <li>- Developed Progcap's "One App" supply chain financing solution</li>
                    <li>- Built flexible scheme engine for neo-banking product</li>
                  </ul>
                </li>
                <li>
                  • <strong>Software Engineer Intern (Oct 2021 – May 2022)</strong>
                  <ul className="ml-4 mt-0.5 space-y-0.5">
                    <li>- Built credit underwriting rules engine (BRE) from scratch</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Education</h2>
          <div className="space-y-2 text-xs">
            <p>
              🎓 <strong>M.Tech — Artificial Intelligence & Machine Learning</strong><br />
              Indian Institute of Technology Jodhpur
            </p>
            <p>
              🎓 <strong>B.Tech — Computer Science</strong><br />
              Lovely Professional University
            </p>
            <p>
              🏫 <strong>Higher Secondary — PCM</strong><br />
              RSS International School, Noida
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Skills</h2>
          <ul className="text-xs space-y-0.5 ml-4">
            <li>• C++</li>
            <li>• C</li>
            <li>• JavaScript</li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Certifications</h2>
          <ul className="text-xs space-y-0.5 ml-4">
            <li>• C++ Tutorial for Beginners</li>
            <li>• Google Kickstart Certificate</li>
            <li>• Data Structures and Algorithms</li>
          </ul>
        </section>

        {/* Honors & Achievements */}
        <section className="mb-4">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Honors & Achievements</h2>
          <ul className="text-xs space-y-0.5 ml-4">
            <li>⭐ <strong>5-Star in C++ — HackerRank</strong></li>
            <li>⭐ <strong>5-Star in Problem Solving — HackerRank</strong></li>
          </ul>
        </section>

        {/* Footer */}
        <div className="border-t border-blue-600 pt-3 mt-6 text-center">
          <p className="text-xs font-medium text-gray-700">Contact: tech@rhobots.ai | www.rhobots.ai</p>
        </div>
      </div>

      {/* Page 5 - Rudresh Narwal Profile */}
      <div className="w-[210mm] min-h-[280mm] bg-white border border-gray-300 shadow-2xl p-4 overflow-hidden">

        {/* Header */}
        <div className="border-b-2 border-blue-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold tracking-tight text-blue-600">Rudresh Narwal</h1>
          <p className="text-lg mt-1 font-medium text-gray-700">Tech & Product Leader | FinTech | AI/ML | Enterprise Automation</p>
          <div className="text-xs mt-3 space-y-1">
            <p>✉️ <a href="mailto:rudresh@rhobots.ai" className="text-blue-600 hover:underline">rudresh@rhobots.ai</a></p>
            <p>🔗 LinkedIn: rudresh-narwal</p>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Summary</h2>
          <p className="text-xs leading-relaxed mb-2">
            Tech and product leader with <strong>6+ years in fintech, insuretech, and startups</strong>, specializing in:
          </p>
          <ul className="text-xs space-y-0.5 ml-4 mb-2">
            <li>• AI/ML-powered product development</li>
            <li>• LLM integrations (OpenAI, Claude, Gemini, Llama)</li>
            <li>• Flutter mobile apps</li>
            <li>• Python/Django/Flask platforms</li>
          </ul>
          <p className="text-xs leading-relaxed mt-2">
            Key strengths include leadership, system architecture, AI-enabled experiences, strategic product development, and cross-functional collaboration.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide text-blue-600">Experience</h2>

          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-bold">Progcap — 4 yrs 3 months</h3>

              <div className="mt-2 space-y-2">
                <div>
                  <h4 className="text-xs font-bold">Tech Lead (Oct 2021 2025)</h4>
                  <ul className="text-xs space-y-0.5 mt-1 ml-4">
                    <li>• Built ML-based bank statement analyzer</li>
                    <li>• Developed AI-driven approval system reducing onboarding time by <strong>70%</strong></li>
                    <li>• Implemented LangChain-based RAG systems for document intelligence</li>
                    <li>• Built neo-banking suite via Python microservices</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">UnoMoney — Co-Founder (Aug 2022–Nov 2023)</h3>
              <p className="text-xs leading-relaxed mt-1">
                Built a financial "Super App" enabling wealth tracking and investment automation.
              </p>
              <ul className="text-xs space-y-0.5 mt-1 ml-4">
                <li>• Acquired <strong>90,000+ users in 3 months</strong></li>
                <li>• Generated <strong>$45,000 revenue in Year 1</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold">Toffee Insurance — Full Stack Developer (May 2020–Oct 2021)</h3>
              <ul className="text-xs space-y-0.5 mt-1 ml-4">
                <li>• Micro-insurance distribution system issuing <strong>25K+ policies/day</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold">Housr — Software Developer (2018–2020)</h3>
              <ul className="text-xs space-y-0.5 mt-1 ml-4">
                <li>• Flutter app used by <strong>10K+ users</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold">Study Panda — Co-Founder (2017–2018)</h3>
              <p className="text-xs leading-relaxed mt-1">Built an overseas medical admissions consultancy: $30K revenue</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Education</h2>
          <p className="text-xs">
            🎓 <strong>B.Tech, Computer Science</strong><br />
            Amity University (2014–2018)
          </p>
        </section>

        {/* Top Skills */}
        <section className="mb-4">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide text-blue-600">Top Skills</h2>
          <ul className="text-xs space-y-0.5 ml-4">
            <li>• Product Strategy</li>
            <li>• Growth Hacking</li>
          </ul>
        </section>

        {/* Footer */}
        <div className="border-t border-blue-600 pt-3 mt-6 text-center">
          <p className="text-xs font-medium text-gray-700">Contact: tech@rhobots.ai | www.rhobots.ai</p>
        </div>
      </div>
    </div>
  );
};

export default OnePager;
