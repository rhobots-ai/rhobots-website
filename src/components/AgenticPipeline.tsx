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
            handoff required.
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
              style={{ display: 'block', width: '100%', minWidth: 820, height: 'auto' }}
              viewBox="0 0 900 1220"
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
                      /* Retry lines already have strokeDasharray="4 4" inline */
                      animation: flow-path 0.5s linear infinite;
                    }
                  `}
                </style>
                <marker
                  id="alime"
                  viewBox="0 0 10 10"
                  refX={9}
                  refY={5}
                  markerWidth={5}
                  markerHeight={5}
                  orient="auto"
                >
                  <path
                    d="M1 1.5L8.5 5L1 8.5"
                    fill="none"
                    stroke="#C8FF00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
                <marker
                  id="awht-rev"
                  viewBox="0 0 10 10"
                  refX={1}
                  refY={5}
                  markerWidth={5}
                  markerHeight={5}
                  orient="auto"
                >
                  <path
                    d="M9 1.5L1.5 5L9 8.5"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>

              {/* Column labels */}
              <text
                x="350"
                y="40"
                textAnchor="middle"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="10"
                fontWeight="600"
                fill="#333"
                letterSpacing="3"
              >
                PIPELINE STAGE
              </text>
              <line
                x1="185"
                y1="46"
                x2="300"
                y2="46"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />
              <line
                x1="400"
                y1="46"
                x2="515"
                y2="46"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />
              <text
                x="695"
                y="40"
                textAnchor="middle"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="10"
                fontWeight="600"
                fill="#2a2a00"
                letterSpacing="3"
              >
                RETRY / BLOCKED PATHS
              </text>
              <line
                x1="540"
                y1="46"
                x2="615"
                y2="46"
                stroke="rgba(200,255,0,0.07)"
                strokeWidth="0.5"
              />
              <line
                x1="775"
                y1="46"
                x2="845"
                y2="46"
                stroke="rgba(200,255,0,0.07)"
                strokeWidth="0.5"
              />

              {/* S1: ISSUE CREATED */}
              <rect
                x="185"
                y="65"
                width="330"
                height="56"
                fill="#161616"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="0.5"
              />
              <rect x="185" y="65" width="3" height="56" fill="#555" />
              <rect
                x="198"
                y="78"
                width="28"
                height="28"
                fill="#1c1c1c"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="0.5"
              />
              <circle cx="212" cy="92" r="6" fill="none" stroke="#555" strokeWidth="1.5" />
              <circle cx="212" cy="92" r="2" fill="#555" />
              <text
                x="238"
                y="87"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#fff"
                letterSpacing="1.5"
              >
                ISSUE CREATED
              </text>
              <text
                x="238"
                y="105"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="11"
                fill="#555"
              >
                GitHub Issue · Backlog label applied
              </text>
              <text
                x="178"
                y="93"
                textAnchor="end"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#2a2a2a"
                letterSpacing="1"
              >
                [backlog]
              </text>

              {/* Arrow S1→S2 */}
              <line
                x1="350"
                y1="121"
                x2="350"
                y2="168"
                stroke="#C8FF00"
                strokeWidth="1.5"
                markerEnd="url(#alime)"
                className="flow-main"
              />

              {/* S2: TECH-PRODUCT REVIEWER */}
              <rect
                x="185"
                y="172"
                width="330"
                height="68"
                fill="#161616"
                stroke="rgba(200,255,0,0.14)"
                strokeWidth="0.5"
              />
              <rect x="185" y="172" width="3" height="68" fill="#C8FF00" />
              <rect
                x="198"
                y="185"
                width="28"
                height="28"
                fill="#111a00"
                stroke="rgba(200,255,0,0.18)"
                strokeWidth="0.5"
              />
              <line
                x1="205"
                y1="195"
                x2="220"
                y2="195"
                stroke="#C8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="205"
                y1="201"
                x2="217"
                y2="201"
                stroke="#C8FF00"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.5"
              />
              <rect
                x="462"
                y="182"
                width="44"
                height="16"
                fill="#111a00"
                stroke="rgba(200,255,0,0.28)"
                strokeWidth="0.5"
              />
              <text
                x="484"
                y="190"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#C8FF00"
                letterSpacing="1"
              >
                AGENT
              </text>
              <text
                x="238"
                y="198"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#fff"
                letterSpacing="1.5"
              >
                TECH-PRODUCT REVIEWER
              </text>
              <text
                x="238"
                y="216"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="11"
                fill="#555"
              >
                Spec refinement · Architecture alignment · Acceptance criteria
              </text>
              <text
                x="178"
                y="206"
                textAnchor="end"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#333300"
                letterSpacing="1"
              >
                [tech-review]
              </text>

              {/* Arrow S2→S3 */}
              <line
                x1="350"
                y1="240"
                x2="350"
                y2="287"
                stroke="#C8FF00"
                strokeWidth="1.5"
                markerEnd="url(#alime)"
                className="flow-main"
              />

              {/* S3: CTO REVIEW */}
              <rect
                x="185"
                y="291"
                width="330"
                height="68"
                fill="#161616"
                stroke="rgba(200,255,0,0.14)"
                strokeWidth="0.5"
              />
              <rect x="185" y="291" width="3" height="68" fill="#C8FF00" />
              <rect
                x="198"
                y="304"
                width="28"
                height="28"
                fill="#111a00"
                stroke="rgba(200,255,0,0.18)"
                strokeWidth="0.5"
              />
              <polygon
                points="212,307 219,315 212,323 205,315"
                fill="none"
                stroke="#C8FF00"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <rect
                x="462"
                y="301"
                width="44"
                height="16"
                fill="#111a00"
                stroke="rgba(200,255,0,0.28)"
                strokeWidth="0.5"
              />
              <text
                x="484"
                y="309"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#C8FF00"
                letterSpacing="1"
              >
                AGENT
              </text>
              <text
                x="238"
                y="317"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#fff"
                letterSpacing="1.5"
              >
                CTO REVIEW
              </text>
              <text
                x="238"
                y="335"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="11"
                fill="#555"
              >
                Business fit · Technical feasibility · Scope approval
              </text>
              <text
                x="178"
                y="325"
                textAnchor="end"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#333300"
                letterSpacing="1"
              >
                [cto-review]
              </text>

              {/* Arrow S3→S4 with label */}
              <line
                x1="350"
                y1="359"
                x2="350"
                y2="444"
                stroke="#C8FF00"
                strokeWidth="1.5"
                markerEnd="url(#alime)"
                className="flow-main"
              />
              <rect
                x="358"
                y="392"
                width="108"
                height="18"
                fill="#0a1400"
                stroke="rgba(200,255,0,0.28)"
                strokeWidth="0.5"
              />
              <text
                x="412"
                y="401"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#C8FF00"
                letterSpacing="1.5"
              >
                {'READY-FOR-DEV →'}
              </text>

              {/* S4: DEVELOPER AGENT */}
              <rect
                x="185"
                y="448"
                width="330"
                height="68"
                fill="#161616"
                stroke="rgba(200,255,0,0.14)"
                strokeWidth="0.5"
              />
              <rect x="185" y="448" width="3" height="68" fill="#C8FF00" />
              <rect
                x="198"
                y="461"
                width="28"
                height="28"
                fill="#111a00"
                stroke="rgba(200,255,0,0.18)"
                strokeWidth="0.5"
              />
              <text
                x="212"
                y="475"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="#C8FF00"
              >
                {'</>'}
              </text>
              <rect
                x="462"
                y="458"
                width="44"
                height="16"
                fill="#111a00"
                stroke="rgba(200,255,0,0.28)"
                strokeWidth="0.5"
              />
              <text
                x="484"
                y="466"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#C8FF00"
                letterSpacing="1"
              >
                AGENT
              </text>
              <text
                x="238"
                y="474"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#fff"
                letterSpacing="1.5"
              >
                DEVELOPER AGENT
              </text>
              <text
                x="238"
                y="492"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="11"
                fill="#555"
              >
                Writes code · Opens PR · References issue · Follows conventions
              </text>
              <text
                x="178"
                y="482"
                textAnchor="end"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#333300"
                letterSpacing="1"
              >
                [in-dev]
              </text>

              {/* Arrow S4→S5 */}
              <line
                x1="350"
                y1="516"
                x2="350"
                y2="560"
                stroke="#C8FF00"
                strokeWidth="1.5"
                markerEnd="url(#alime)"
                className="flow-main"
              />

              {/* S5: CI/CD TESTING */}
              <rect
                x="185"
                y="564"
                width="330"
                height="52"
                fill="#131313"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />
              <rect x="185" y="564" width="3" height="52" fill="#444" />
              <rect
                x="198"
                y="575"
                width="28"
                height="28"
                fill="#1a1a1a"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.5"
              />
              <text
                x="212"
                y="589"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="#666"
              >
                CI
              </text>
              <text
                x="238"
                y="583"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#888"
                letterSpacing="1.5"
              >
                CI / CD PIPELINE
              </text>
              <text
                x="238"
                y="601"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="11"
                fill="#3a3a3a"
              >
                Standard tests · Build verification · Auto-triggered
              </text>
              <text
                x="178"
                y="590"
                textAnchor="end"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#282828"
                letterSpacing="1"
              >
                [testing]
              </text>

              {/* Arrow S5→S6 */}
              <line
                x1="350"
                y1="616"
                x2="350"
                y2="655"
                stroke="#C8FF00"
                strokeWidth="1.5"
                markerEnd="url(#alime)"
                className="flow-main"
              />

              {/* S6: QA AGENT */}
              <rect
                x="185"
                y="659"
                width="330"
                height="68"
                fill="#161616"
                stroke="rgba(200,255,0,0.14)"
                strokeWidth="0.5"
              />
              <rect x="185" y="659" width="3" height="68" fill="#C8FF00" />
              <rect
                x="198"
                y="672"
                width="28"
                height="28"
                fill="#111a00"
                stroke="rgba(200,255,0,0.18)"
                strokeWidth="0.5"
              />
              <rect
                x="203"
                y="677"
                width="18"
                height="18"
                fill="none"
                stroke="#C8FF00"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <polyline
                points="206,686 210,691 220,681"
                fill="none"
                stroke="#C8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="462"
                y="669"
                width="44"
                height="16"
                fill="#111a00"
                stroke="rgba(200,255,0,0.28)"
                strokeWidth="0.5"
              />
              <text
                x="484"
                y="677"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#C8FF00"
                letterSpacing="1"
              >
                AGENT
              </text>
              <text
                x="238"
                y="685"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#fff"
                letterSpacing="1.5"
              >
                QA AGENT
              </text>
              <text
                x="238"
                y="703"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="11"
                fill="#555"
              >
                Edge cases · Regressions · Acceptance criteria validation
              </text>
              <text
                x="178"
                y="693"
                textAnchor="end"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#333300"
                letterSpacing="1"
              >
                [qa-review]
              </text>

              {/* Arrow S6→S7 with label */}
              <line
                x1="350"
                y1="727"
                x2="350"
                y2="810"
                stroke="#C8FF00"
                strokeWidth="1.5"
                markerEnd="url(#alime)"
                className="flow-main"
              />
              <rect
                x="358"
                y="758"
                width="90"
                height="18"
                fill="#0a1400"
                stroke="rgba(200,255,0,0.28)"
                strokeWidth="0.5"
              />
              <text
                x="403"
                y="767"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#C8FF00"
                letterSpacing="1.5"
              >
                {'QA-PASSED →'}
              </text>

              {/* S7: CTO FINAL REVIEW */}
              <rect
                x="185"
                y="814"
                width="330"
                height="68"
                fill="#161616"
                stroke="rgba(200,255,0,0.14)"
                strokeWidth="0.5"
              />
              <rect x="185" y="814" width="3" height="68" fill="#C8FF00" />
              <rect
                x="198"
                y="827"
                width="28"
                height="28"
                fill="#111a00"
                stroke="rgba(200,255,0,0.18)"
                strokeWidth="0.5"
              />
              <polygon
                points="212,830 219,838 212,846 205,838"
                fill="none"
                stroke="#C8FF00"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <rect
                x="444"
                y="824"
                width="66"
                height="16"
                fill="#111a00"
                stroke="rgba(200,255,0,0.28)"
                strokeWidth="0.5"
              />
              <text
                x="477"
                y="832"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#C8FF00"
                letterSpacing="1"
              >
                AGENT · FINAL
              </text>
              <text
                x="238"
                y="840"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#fff"
                letterSpacing="1.5"
              >
                CTO FINAL REVIEW
              </text>
              <text
                x="238"
                y="858"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="11"
                fill="#555"
              >
                Final approval · Business sign-off · Merge clearance
              </text>
              <text
                x="178"
                y="848"
                textAnchor="end"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#333300"
                letterSpacing="1"
              >
                [cto-final]
              </text>

              {/* Arrow S7→S8 */}
              <line
                x1="350"
                y1="882"
                x2="350"
                y2="920"
                stroke="#C8FF00"
                strokeWidth="1.5"
                markerEnd="url(#alime)"
                className="flow-main"
              />

              {/* S8: SECURITY REVIEWER */}
              <rect
                x="185"
                y="924"
                width="330"
                height="68"
                fill="#161616"
                stroke="rgba(200,255,0,0.14)"
                strokeWidth="0.5"
              />
              <rect x="185" y="924" width="3" height="68" fill="#C8FF00" />
              <rect
                x="198"
                y="937"
                width="28"
                height="28"
                fill="#111a00"
                stroke="rgba(200,255,0,0.18)"
                strokeWidth="0.5"
              />
              <path
                d="M212,940 L220,943 L220,952 Q212,958 212,958 Q204,952 204,952 L204,943 Z"
                fill="none"
                stroke="#C8FF00"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <rect
                x="462"
                y="934"
                width="44"
                height="16"
                fill="#111a00"
                stroke="rgba(200,255,0,0.28)"
                strokeWidth="0.5"
              />
              <text
                x="484"
                y="942"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#C8FF00"
                letterSpacing="1"
              >
                AGENT
              </text>
              <text
                x="238"
                y="950"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#fff"
                letterSpacing="1.5"
              >
                SECURITY REVIEWER
              </text>
              <text
                x="238"
                y="968"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="11"
                fill="#555"
              >
                OWASP top 10 · Code quality · Test coverage analysis
              </text>
              <text
                x="178"
                y="958"
                textAnchor="end"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#333300"
                letterSpacing="1"
              >
                [sec-review]
              </text>

              {/* Arrow S8→S9 with label */}
              <line
                x1="350"
                y1="992"
                x2="350"
                y2="1055"
                stroke="#C8FF00"
                strokeWidth="1.5"
                markerEnd="url(#alime)"
                className="flow-main"
              />
              <rect
                x="358"
                y="1013"
                width="134"
                height="18"
                fill="#0a1400"
                stroke="rgba(200,255,0,0.28)"
                strokeWidth="0.5"
              />
              <text
                x="425"
                y="1022"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#C8FF00"
                letterSpacing="1.5"
              >
                {'SECURITY-PASSED →'}
              </text>

              {/* S9: DONE */}
              <rect
                x="183"
                y="1057"
                width="334"
                height="72"
                fill="none"
                stroke="rgba(200,255,0,0.18)"
                strokeWidth="1"
              />
              <rect
                x="185"
                y="1059"
                width="330"
                height="68"
                fill="#0f1a00"
                stroke="rgba(200,255,0,0.4)"
                strokeWidth="1"
              />
              <rect x="185" y="1059" width="3" height="68" fill="#C8FF00" />
              <rect
                x="198"
                y="1072"
                width="28"
                height="28"
                fill="#182000"
                stroke="rgba(200,255,0,0.28)"
                strokeWidth="0.5"
              />
              <polyline
                points="203,1086 210,1093 224,1077"
                fill="none"
                stroke="#C8FF00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="446" y="1069" width="62" height="18" fill="#C8FF00" />
              <text
                x="477"
                y="1078"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="10"
                fontWeight="800"
                fill="#000"
                letterSpacing="2"
              >
                COMPLETE
              </text>
              <text
                x="238"
                y="1085"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="15"
                fontWeight="700"
                fill="#C8FF00"
                letterSpacing="1.5"
              >
                TICKET COMPLETE
              </text>
              <text
                x="238"
                y="1103"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="11"
                fill="#555"
              >
                Creator notified · PR merged · Issue closed · Board updated
              </text>
              <text
                x="178"
                y="1093"
                textAnchor="end"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#3a4a00"
                letterSpacing="1"
              >
                [done]
              </text>

              {/* Creator notify */}
              <line
                x1="185"
                y1="1143"
                x2="515"
                y2="1143"
                stroke="rgba(200,255,0,0.08)"
                strokeWidth="0.5"
              />
              <text
                x="350"
                y="1158"
                textAnchor="middle"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="10"
                fontWeight="600"
                fill="#2a3a00"
                letterSpacing="2.5"
              >
                ✉ ISSUE CREATOR NOTIFIED VIA GITHUB ACTIONS COMMENT
              </text>

              {/* ═══ RETRY PATHS ═══ */}

              {/* RETRY A: CTO → Tech-Product — needs-revision */}
              <text
                x="519"
                y="320"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#444"
                letterSpacing="1"
              >
                NEEDS-REVISION
              </text>
              <line
                x1="515"
                y1="325"
                x2="596"
                y2="325"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <line
                x1="598"
                y1="323"
                x2="598"
                y2="208"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <line
                x1="598"
                y1="206"
                x2="517"
                y2="206"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                strokeDasharray="4 3"
                markerEnd="url(#awht-rev)"
                className="flow-retry"
              />
              <rect
                x="604"
                y="248"
                width="100"
                height="40"
                fill="#161616"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
              />
              <rect x="604" y="248" width="3" height="40" fill="rgba(255,255,255,0.2)" />
              <text
                x="655"
                y="261"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="#888"
                letterSpacing="1.5"
              >
                ↩ RETRY
              </text>
              <text
                x="655"
                y="278"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="9"
                fill="#444"
              >
                Max 1 attempt
              </text>
              <rect
                x="610"
                y="215"
                width="84"
                height="20"
                fill="#1a1a1a"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="1;0.35;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>
              <text
                x="652"
                y="225"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="700"
                fill="#666"
                letterSpacing="1.5"
              >
                ⊘ BLOCKED
              </text>

              {/* RETRY B: QA → Developer — qa-failed */}
              <text
                x="519"
                y="688"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#444"
                letterSpacing="1"
              >
                QA-FAILED
              </text>
              <line
                x1="515"
                y1="693"
                x2="618"
                y2="693"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <line
                x1="620"
                y1="691"
                x2="620"
                y2="484"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <line
                x1="620"
                y1="482"
                x2="517"
                y2="482"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                strokeDasharray="4 3"
                markerEnd="url(#awht-rev)"
                className="flow-retry"
              />
              <rect
                x="626"
                y="565"
                width="100"
                height="40"
                fill="#161616"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
              />
              <rect x="626" y="565" width="3" height="40" fill="rgba(255,255,255,0.2)" />
              <text
                x="677"
                y="578"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="#888"
                letterSpacing="1.5"
              >
                ↩ RETRY
              </text>
              <text
                x="677"
                y="595"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="9"
                fill="#444"
              >
                Max 1 attempt
              </text>
              <rect
                x="634"
                y="492"
                width="84"
                height="20"
                fill="#1a1a1a"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="1;0.35;1"
                  dur="2.3s"
                  repeatCount="indefinite"
                />
              </rect>
              <text
                x="676"
                y="502"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="700"
                fill="#666"
                letterSpacing="1.5"
              >
                ⊘ BLOCKED
              </text>

              {/* RETRY C: Security → Developer — security-failed */}
              <text
                x="519"
                y="953"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#444"
                letterSpacing="1"
              >
                SECURITY-FAILED
              </text>
              <line
                x1="515"
                y1="958"
                x2="640"
                y2="958"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <line
                x1="642"
                y1="956"
                x2="642"
                y2="498"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <line
                x1="642"
                y1="497"
                x2="517"
                y2="497"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
                strokeDasharray="4 3"
                markerEnd="url(#awht-rev)"
                className="flow-retry"
              />
              <rect
                x="648"
                y="705"
                width="100"
                height="40"
                fill="#161616"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.5"
              />
              <rect x="648" y="705" width="3" height="40" fill="rgba(255,255,255,0.15)" />
              <text
                x="699"
                y="718"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="#666"
                letterSpacing="1.5"
              >
                ↩ RETRY
              </text>
              <text
                x="699"
                y="735"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow',sans-serif"
                fontSize="9"
                fill="#3a3a3a"
              >
                Max 1 attempt
              </text>
              <rect
                x="654"
                y="660"
                width="84"
                height="20"
                fill="#1a1a1a"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="1;0.35;1"
                  dur="1.9s"
                  repeatCount="indefinite"
                />
              </rect>
              <text
                x="696"
                y="670"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="700"
                fill="#555"
                letterSpacing="1.5"
              >
                ⊘ BLOCKED
              </text>

              {/* Watermark */}
              <text
                x="450"
                y="1205"
                textAnchor="middle"
                fontFamily="'Barlow Condensed',sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#1a1a0a"
                letterSpacing="3"
              >
                RHOBOTS.AI · AGENTIC PIPELINE · GITHUB COPILOT · GITHUB ACTIONS ORCHESTRATED
              </text>
            </svg>
          </div>

          {/* Diagram footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 24px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            <span style={{ fontWeight: 700, color: '#C8FF00' }}>RHOBOTS.AI</span>
            <span style={{ letterSpacing: 2, color: '#444' }}>
              9 Pipeline Stages &nbsp;·&nbsp; 5 AI Agents &nbsp;·&nbsp; 3 Retry Gates
              &nbsp;·&nbsp; Zero Human Handoffs
            </span>
            <span style={{ fontWeight: 700, color: '#C8FF00' }}>AGENTIC WORKFLOW v1</span>
          </div>
        </div>

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 28,
            marginTop: 36,
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
            Automated (Non-Agent)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 24,
                height: 0,
                borderTop: '2px dashed #C8FF00',
                flexShrink: 0,
              }}
            />
            Happy Path
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 24,
                height: 0,
                borderTop: '2px dashed rgba(255,255,255,0.3)',
                flexShrink: 0,
              }}
            />
            Retry Loop (max 1 attempt)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11 }}>
            <span style={{ fontSize: 14, color: '#555' }}>⊘</span>
            Blocked if retry fails
          </div>
        </div>
      </div>
    </section>
  );
}
