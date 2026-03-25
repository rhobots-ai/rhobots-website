export default function AgenticPipeline() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div
            style={{
              display: 'inline-block',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#C8FF00',
              marginBottom: 20,
            }}
          >
            Product: Copilot · Agentic Workflow
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: -1,
              lineHeight: 0.95,
              color: '#ffffff',
            }}
          >
            FROM TICKET
            <br />
            TO <span style={{ color: '#C8FF00' }}>PRODUCTION CODE</span>
            <br />
            AUTONOMOUSLY
          </h2>
          <p
            style={{
              marginTop: 20,
              fontSize: 15,
              color: '#888888',
              maxWidth: 560,
              lineHeight: 1.6,
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            A fully orchestrated multi-agent pipeline where GitHub Issues flow through AI
            reviewers, developer agents, QA, and security — landing as merged PRs. No human
            handoff required, with seamless human-in-the-loop escalation.
          </p>
        </div>

        {/* Diagram */}
        <div
          style={{
            border: '1px solid rgba(255,255,255,0.08)',
            background: '#111111',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <svg
              style={{ display: 'block', width: '100%', minWidth: 940, height: 'auto' }}
              viewBox="0 0 940 1465"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>
                  {`
                    @keyframes flow-path {
                      to { stroke-dashoffset: -12; }
                    }
                    .flow-main {
                      stroke-dasharray: 6 6;
                      animation: flow-path 0.5s linear infinite;
                    }
                    .flow-retry {
                      animation: flow-path 0.5s linear infinite;
                    }
                  `}
                </style>
                <marker id="alime" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={5} markerHeight={5} orient="auto">
                  <path d="M1 1.5L8.5 5L1 8.5" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="awht-rev" viewBox="0 0 10 10" refX={1} refY={5} markerWidth={5} markerHeight={5} orient="auto">
                  <path d="M9 1.5L1.5 5L9 8.5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="acyan" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={5} markerHeight={5} orient="auto">
                  <path d="M1 1.5L8.5 5L1 8.5" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="acyan-rev" viewBox="0 0 10 10" refX={1} refY={5} markerWidth={5} markerHeight={5} orient="auto">
                  <path d="M9 1.5L1.5 5L9 8.5" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>

              {/* Column labels */}
              <text x="120" y="40" textAnchor="middle" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#333" letterSpacing="3">QUICK OUTCOME</text>
              <text x="350" y="40" textAnchor="middle" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#333" letterSpacing="3">PIPELINE STAGE</text>
              <line x1="185" y1="46" x2="300" y2="46" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              <line x1="400" y1="46" x2="515" y2="46" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              
              <text x="700" y="40" textAnchor="middle" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#2244aa" letterSpacing="3">ESCALATION PATHS</text>


              {/* Stage: ISSUE CREATED */}
              <rect x="185" y="65" width="330" height="68" fill="#161616" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
              <rect x="185" y="65" width="3" height="68" fill="#555" />
              
              <rect x="198" y="78" width="28" height="28" fill="#1c1c1c" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
              <g transform="translate(198, 78)">
                <circle cx="14" cy="14" r="6" fill="none" stroke="#555" strokeWidth="1.5" /><circle cx="14" cy="14" r="2" fill="#555" />
              </g>
              
              <text x="238" y="88" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#888" letterSpacing="1.5">ISSUE CREATED</text>
              <text x="238" y="106" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">GitHub Issue · Backlog label applied</text>
              
              <text x="178" y="99" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">Product Brief</text>
  
              <line x1="350" y1="138" x2="350" y2="180" stroke="#C8FF00" strokeWidth="1.5" markerEnd="url(#alime)" className="flow-main" />
    
              {/* Stage: TECH-PRODUCT AGENT */}
              <rect x="185" y="185" width="330" height="68" fill="#161616" stroke="rgba(200,255,0,0.14)" strokeWidth="0.5" />
              <rect x="185" y="185" width="3" height="68" fill="#C8FF00" />
              
              <rect x="198" y="198" width="28" height="28" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <g transform="translate(198, 198)">
                <line x1="7" x2="22" y1="10" y2="10" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round"/><line x1="7" x2="19" y1="16" y2="16" stroke="#C8FF00" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round"/>
              </g>
              
              <text x="238" y="208" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="1.5">TECH-PRODUCT AGENT</text>
              <text x="238" y="226" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">Spec refinement · Architecture alignment</text>
              
              <text x="178" y="219" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">AI Enhanced Spec</text>
  
              <rect x="460" y="195" width="46" height="16" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="483" y="203" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1">AGENT</text>
    
              <line x1="350" y1="258" x2="350" y2="300" stroke="#C8FF00" strokeWidth="1.5" markerEnd="url(#alime)" className="flow-main" />
    
              {/* Stage: CTO AGENT */}
              <rect x="185" y="305" width="330" height="68" fill="#161616" stroke="rgba(200,255,0,0.14)" strokeWidth="0.5" />
              <rect x="185" y="305" width="3" height="68" fill="#C8FF00" />
              
              <rect x="198" y="318" width="28" height="28" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <g transform="translate(198, 318)">
                <polygon points="14,3 21,11 14,19 7,11" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinejoin="round"/>
              </g>
              
              <text x="238" y="328" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="1.5">CTO AGENT</text>
              <text x="238" y="346" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">Architecture review · Technical alignment</text>
              
              <text x="178" y="339" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">Arch Review</text>
  
              <rect x="460" y="315" width="46" height="16" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="483" y="323" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1">AGENT</text>
    
              <line x1="350" y1="378" x2="350" y2="420" stroke="#C8FF00" strokeWidth="1.5" markerEnd="url(#alime)" className="flow-main" />
    
              {/* Stage: HUMAN LOOP */}
              <rect x="185" y="425" width="330" height="68" fill="#161616" stroke="rgba(0, 229, 255, 0.14)" strokeWidth="0.5" />
              <rect x="185" y="425" width="3" height="68" fill="#00E5FF" />
              
              <rect x="198" y="438" width="28" height="28" fill="#001a1f" stroke="rgba(0, 229, 255, 0.28)" strokeWidth="0.5" />
              <g transform="translate(198, 438)">
                <circle cx="14" cy="9" r="4" fill="none" stroke="#00E5FF" strokeWidth="1.5"/><path d="M7 21 C7 17, 21 17, 21 21" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/>
              </g>
              
              <text x="238" y="448" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="1.5">HUMAN LOOP</text>
              <text x="238" y="466" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">Review spec · Approve scope · Provide context</text>
              
              <text x="178" y="459" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">Approved Spec</text>
  
              <rect x="460" y="435" width="46" height="16" fill="#001a1f" stroke="rgba(0, 229, 255, 0.28)" strokeWidth="0.5" />
              <text x="483" y="443" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#00E5FF" letterSpacing="1">HUMAN</text>
    
              <line x1="350" y1="498" x2="350" y2="540" stroke="#C8FF00" strokeWidth="1.5" markerEnd="url(#alime)" className="flow-main" />
    
              <rect x="358" y="510" width="108" height="18" fill="#0a1400" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="412" y="519" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1.5">READY-FOR-DEV →</text>
      
              {/* Stage: DEVELOPER AGENT */}
              <rect x="185" y="545" width="330" height="68" fill="#161616" stroke="rgba(200,255,0,0.14)" strokeWidth="0.5" />
              <rect x="185" y="545" width="3" height="68" fill="#C8FF00" />
              
              <rect x="198" y="558" width="28" height="28" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <g transform="translate(198, 558)">
                <text x="14" y="14" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="13" fontWeight="800" fill="#C8FF00">{'</>'}</text>
              </g>
              
              <text x="238" y="568" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="1.5">DEVELOPER AGENT</text>
              <text x="238" y="586" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">Writes code · Opens PR · Follows conventions</text>
              
              <text x="178" y="579" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">Pull Request</text>
  
              <rect x="460" y="555" width="46" height="16" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="483" y="563" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1">AGENT</text>
    
              <line x1="350" y1="618" x2="350" y2="660" stroke="#C8FF00" strokeWidth="1.5" markerEnd="url(#alime)" className="flow-main" />
    
              {/* Stage: CI / CD PIPELINE */}
              <rect x="185" y="665" width="330" height="68" fill="#131313" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
              <rect x="185" y="665" width="3" height="68" fill="#555" />
              
              <rect x="198" y="678" width="28" height="28" fill="#1c1c1c" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
              <g transform="translate(198, 678)">
                <text x="14" y="14" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="11" fontWeight="700" fill="#666">CI</text>
              </g>
              
              <text x="238" y="688" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#888" letterSpacing="1.5">CI / CD PIPELINE</text>
              <text x="238" y="706" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">Standard tests · Build verification</text>
              
              <text x="178" y="699" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">Test Results</text>
  
              <line x1="350" y1="738" x2="350" y2="780" stroke="#C8FF00" strokeWidth="1.5" markerEnd="url(#alime)" className="flow-main" />
    
              {/* Stage: QA AGENT */}
              <rect x="185" y="785" width="330" height="68" fill="#161616" stroke="rgba(200,255,0,0.14)" strokeWidth="0.5" />
              <rect x="185" y="785" width="3" height="68" fill="#C8FF00" />
              
              <rect x="198" y="798" width="28" height="28" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <g transform="translate(198, 798)">
                <rect x="5" y="5" width="18" height="18" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinejoin="round"/><polyline points="8,14 12,19 22,9" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              <text x="238" y="808" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="1.5">QA AGENT</text>
              <text x="238" y="826" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">Edge cases · Regressions · Acceptance criteria</text>
              
              <text x="178" y="819" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">QA Passed</text>
  
              <rect x="460" y="795" width="46" height="16" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="483" y="803" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1">AGENT</text>
    
              {/* Retry Loop (to Dev) */}
              <polyline
                points="515,819 520,819 520,579 515,579"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
                strokeDasharray="4 3"
                markerEnd="url(#awht-rev)"
                className="flow-retry"
              />
              <rect x="505" y="811" width="30" height="16" rx="8" fill="#111" stroke="#333" strokeWidth="1" />
              <text x="520" y="819" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="8" fontWeight="700" fill="#999">1 RETRY</text>
    
              {/* Escalate (to Human Loop) */}
              <polyline
                points="535,819 680,819 680,459 515,459"
                fill="none"
                stroke="rgba(0,229,255,0.5)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                markerEnd="url(#acyan-rev)"
                className="flow-retry"
              />
              <rect x="545" y="811" width="16" height="16" rx="8" fill="#001a1f" stroke="#00E5FF" strokeWidth="0.5" />
              <text x="553" y="818" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10" fill="#00E5FF">⊘</text>
      
              <line x1="350" y1="858" x2="350" y2="900" stroke="#C8FF00" strokeWidth="1.5" markerEnd="url(#alime)" className="flow-main" />
    
              <rect x="358" y="870" width="108" height="18" fill="#0a1400" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="412" y="879" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1.5">QA-PASSED →</text>
      
              {/* Stage: SECURITY AGENT */}
              <rect x="185" y="905" width="330" height="68" fill="#161616" stroke="rgba(200,255,0,0.14)" strokeWidth="0.5" />
              <rect x="185" y="905" width="3" height="68" fill="#C8FF00" />
              
              <rect x="198" y="918" width="28" height="28" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <g transform="translate(198, 918)">
                <path d="M14 4 L22 8 V14 C22 18.5 14 24 14 24 C14 24 6 18.5 6 14 V8 Z" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="14" cy="12" r="2" fill="#C8FF00"/>
              </g>
              
              <text x="238" y="928" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="1.5">SECURITY AGENT</text>
              <text x="238" y="946" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">Vulnerabilities · Dependency check · Secret scan</text>
              
              <text x="178" y="939" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">Security Cleared</text>
  
              <rect x="460" y="915" width="46" height="16" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="483" y="923" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1">AGENT</text>
    
              {/* Retry Loop (to Dev) */}
              <polyline
                points="515,939 550,939 550,579 515,579"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
                strokeDasharray="4 3"
                markerEnd="url(#awht-rev)"
                className="flow-retry"
              />
              <rect x="535" y="931" width="30" height="16" rx="8" fill="#111" stroke="#333" strokeWidth="1" />
              <text x="550" y="939" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="8" fontWeight="700" fill="#999">1 RETRY</text>
    
              {/* Escalate (to Human Loop) */}
              <polyline
                points="565,939 680,939 680,459 515,459"
                fill="none"
                stroke="rgba(0,229,255,0.5)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                markerEnd="url(#acyan-rev)"
                className="flow-retry"
              />
              <rect x="575" y="931" width="16" height="16" rx="8" fill="#001a1f" stroke="#00E5FF" strokeWidth="0.5" />
              <text x="583" y="938" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10" fill="#00E5FF">⊘</text>
      
              <line x1="350" y1="978" x2="350" y2="1020" stroke="#C8FF00" strokeWidth="1.5" markerEnd="url(#alime)" className="flow-main" />
    
              <rect x="358" y="990" width="108" height="18" fill="#0a1400" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="412" y="999" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1.5">SEC-PASSED →</text>
      
              {/* Stage: CTO AGENT */}
              <rect x="185" y="1025" width="330" height="68" fill="#161616" stroke="rgba(200,255,0,0.14)" strokeWidth="0.5" />
              <rect x="185" y="1025" width="3" height="68" fill="#C8FF00" />
              
              <rect x="198" y="1038" width="28" height="28" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <g transform="translate(198, 1038)">
                <polygon points="14,3 21,11 14,19 7,11" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinejoin="round"/>
              </g>
              
              <text x="238" y="1048" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="1.5">CTO AGENT</text>
              <text x="238" y="1066" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">Final architecture review · Merge approval</text>
              
              <text x="178" y="1059" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">Approved PR</text>
  
              <rect x="460" y="1035" width="46" height="16" fill="#111a00" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="483" y="1043" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1">AGENT</text>
    
              {/* Retry Loop (to Dev) */}
              <polyline
                points="515,1059 580,1059 580,579 515,579"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
                strokeDasharray="4 3"
                markerEnd="url(#awht-rev)"
                className="flow-retry"
              />
              <rect x="565" y="1051" width="30" height="16" rx="8" fill="#111" stroke="#333" strokeWidth="1" />
              <text x="580" y="1059" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="8" fontWeight="700" fill="#999">1 RETRY</text>
    
              {/* Escalate (to Human Loop) */}
              <polyline
                points="595,1059 680,1059 680,459 515,459"
                fill="none"
                stroke="rgba(0,229,255,0.5)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                markerEnd="url(#acyan-rev)"
                className="flow-retry"
              />
              <rect x="605" y="1051" width="16" height="16" rx="8" fill="#001a1f" stroke="#00E5FF" strokeWidth="0.5" />
              <text x="613" y="1058" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10" fill="#00E5FF">⊘</text>
      
              <line x1="350" y1="1098" x2="350" y2="1140" stroke="#C8FF00" strokeWidth="1.5" markerEnd="url(#alime)" className="flow-main" />
    
              <rect x="358" y="1110" width="108" height="18" fill="#0a1400" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="412" y="1119" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1.5">CODE-MERGED →</text>
      
              {/* Stage: HUMAN REVIEW */}
              <rect x="185" y="1145" width="330" height="68" fill="#161616" stroke="rgba(0, 229, 255, 0.14)" strokeWidth="0.5" />
              <rect x="185" y="1145" width="3" height="68" fill="#00E5FF" />
              
              <rect x="198" y="1158" width="28" height="28" fill="#001a1f" stroke="rgba(0, 229, 255, 0.28)" strokeWidth="0.5" />
              <g transform="translate(198, 1158)">
                <circle cx="14" cy="9" r="4" fill="none" stroke="#00E5FF" strokeWidth="1.5"/><path d="M7 21 C7 17, 21 17, 21 21" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/>
              </g>
              
              <text x="238" y="1168" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#fff" letterSpacing="1.5">HUMAN REVIEW</text>
              <text x="238" y="1186" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">Final sign-off · Deployment authorization</text>
              
              <text x="178" y="1179" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">Deploy Auth</text>
  
              <rect x="460" y="1155" width="46" height="16" fill="#001a1f" stroke="rgba(0, 229, 255, 0.28)" strokeWidth="0.5" />
              <text x="483" y="1163" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#00E5FF" letterSpacing="1">HUMAN</text>
    
              <line x1="350" y1="1218" x2="350" y2="1260" stroke="#C8FF00" strokeWidth="1.5" markerEnd="url(#alime)" className="flow-main" />
    
              <rect x="358" y="1230" width="108" height="18" fill="#0a1400" stroke="rgba(200,255,0,0.28)" strokeWidth="0.5" />
              <text x="412" y="1239" textAnchor="middle" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="600" fill="#C8FF00" letterSpacing="1.5">DEPLOY →</text>
      
              {/* Stage: TICKET COMPLETE */}
              <rect x="185" y="1265" width="330" height="68" fill="#111a00" stroke="rgba(200,255,0,0.3)" strokeWidth="0.5" />
              <rect x="185" y="1265" width="3" height="68" fill="#C8FF00" />
              
              <rect x="198" y="1278" width="28" height="28" fill="#1c1c1c" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
              <g transform="translate(198, 1278)">
                <circle cx="14" cy="14" r="10" fill="#C8FF00"/><polyline points="9,14 13,18 19,10" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              <text x="238" y="1288" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="14" fontWeight="700" fill="#C8FF00" letterSpacing="1.5">TICKET COMPLETE</text>
              <text x="238" y="1306" dominantBaseline="central" fontFamily="'Barlow',sans-serif" fontSize="11" fill="#555">Merged to main · Deployed to production</text>
              
              <text x="178" y="1299" textAnchor="end" dominantBaseline="central" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fontWeight="600" fill="#666" letterSpacing="1">Production Code</text>
  
              
              {/* Watermark */}
              <text
                x="470"
                y="1445"
                textAnchor="middle"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#1a1a0a"
                letterSpacing="3"
              >
                RHOBOTS.AI · AGENTIC PIPELINE · GITHUB COPILOT · HUMAN IN THE LOOP
              </text>
            </svg>
          </div>

          {/* Diagram footer */}
          <div
            style={{
              padding: '24px 32px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              background: '#0a0a0a',
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 14,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span style={{ color: '#C8FF00', fontSize: 18 }}>✦</span>
              <strong>6 AI AGENTS</strong> working in parallel to accelerate your dev lifecycle.
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 28,
                marginTop: 24,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: '#666',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 3, height: 18, background: '#C8FF00', flexShrink: 0 }} />
                AI Agent Stage
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 3, height: 18, background: '#555', flexShrink: 0 }} />
                Automated
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 3, height: 18, background: '#00E5FF', flexShrink: 0 }} />
                Human Loop
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 24, height: 0, borderTop: '2px dashed #C8FF00', flexShrink: 0 }} />
                Happy Path
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 24, height: 0, borderTop: '2px dashed rgba(255,255,255,0.3)', flexShrink: 0 }} />
                Retry Loop (max 1)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11 }}>
                <span style={{ fontSize: 14, color: '#00E5FF' }}>⊘</span>
                Escalates on fail
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
