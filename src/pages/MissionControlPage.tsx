import { useEffect, useRef } from 'react';
import { useDeviceCapabilities } from '../components/mission-control/hooks/useDeviceCapabilities';
import { SolutionsHub } from '../components/mission-control/three/SolutionsHub';
import { ScrollIndicator } from '../components/mission-control/ui/ScrollIndicator';
import { MobileHubFallback } from '../components/mission-control/ui/MobileHubFallback';
import { HeroSection } from '../components/mission-control/sections/HeroSection';
import { SolutionDeepDive } from '../components/mission-control/sections/SolutionDeepDive';
import { CTASection } from '../components/mission-control/sections/CTASection';
import { FooterSection } from '../components/mission-control/sections/FooterSection';
import Lenis from 'lenis';

export default function MissionControlPage() {
  const { tier, isReducedMotion } = useDeviceCapabilities();
  const lenisRef = useRef<Lenis | null>(null);

  // Setup smooth scroll (only for non-static tiers)
  useEffect(() => {
    if (tier === 'static' || isReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [tier, isReducedMotion]);

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* 3D Hub Section */}
      <section className="relative h-screen">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        {/* 3D Hub or Mobile Fallback */}
        {tier === 'static' ? (
          <MobileHubFallback />
        ) : (
          <>
            <div className="absolute inset-0">
              <SolutionsHub tier={tier} />
            </div>

            {/* Top-left branding */}
            <div className="absolute top-8 left-8 z-10 pointer-events-none">
              <div className="flex items-baseline gap-1 mb-0.5">
                <span
                  className="text-2xl font-black tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa, #3b82f6, #818cf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Rho
                </span>
                <span className="text-2xl font-black tracking-tight text-white">bots</span>
              </div>
              <p className="text-blue-400/60 text-[10px] font-medium tracking-[0.2em] uppercase">
                Enterprise AI OS
              </p>
            </div>

            {/* Instruction overlay for 3D Hub */}
            <div className="absolute bottom-12 left-0 right-0 z-10 pointer-events-none text-center">
              <p className="text-gray-500 text-sm tracking-wider uppercase mb-2">
                Click a node to explore
              </p>
              <div className="flex gap-2 justify-center">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-blue-500/50 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>

            <ScrollIndicator />
          </>
        )}
      </section>

      {/* Hero Section - now independent fold */}
      <HeroSection />

      {/* Deep-dive sections */}
      <SolutionDeepDive />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
