import { useState, useEffect } from 'react';

export type ExperienceTier = 'full' | 'reduced' | 'static';

interface DeviceCapabilities {
  tier: ExperienceTier;
  isMobile: boolean;
  isReducedMotion: boolean;
  screenWidth: number;
  hasWebGL: boolean;
}

export function useDeviceCapabilities(): DeviceCapabilities {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    tier: 'full',
    isMobile: false,
    isReducedMotion: false,
    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 1920,
    hasWebGL: true
  });

  useEffect(() => {
    const checkCapabilities = () => {
      const screenWidth = window.innerWidth;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Check WebGL support
      let hasWebGL = false;
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        hasWebGL = !!gl;

        if (gl) {
          // Check GPU tier
          const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            // Integrated graphics detection
            if (/Intel|Mali|Adreno [34]|PowerVR/.test(renderer)) {
              setCapabilities(prev => ({ ...prev, tier: 'reduced' }));
            }
          }
        }
      } catch {
        hasWebGL = false;
      }

      // Determine tier
      let tier: ExperienceTier = 'full';

      if (!hasWebGL || isReducedMotion) {
        tier = 'static';
      } else if (isMobile && screenWidth < 768) {
        tier = 'static';
      } else if (isMobile || screenWidth < 1024) {
        tier = 'reduced';
      }

      // Memory check (if available)
      if ('deviceMemory' in navigator && (navigator as { deviceMemory?: number }).deviceMemory) {
        const memory = (navigator as { deviceMemory: number }).deviceMemory;
        if (memory < 4 && tier === 'full') {
          tier = 'reduced';
        }
      }

      setCapabilities({
        tier,
        isMobile,
        isReducedMotion,
        screenWidth,
        hasWebGL
      });
    };

    checkCapabilities();

    const handleResize = () => {
      setCapabilities(prev => ({
        ...prev,
        screenWidth: window.innerWidth
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return capabilities;
}
