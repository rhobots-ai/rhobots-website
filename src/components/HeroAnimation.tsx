import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type LogEntry = {
  id: string;
  module: string;
  action: string;
  status: string;
  time: string;
};

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(true);
  const [dataStream, setDataStream] = useState<LogEntry[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 }); // Initially off-screen

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { rootMargin: "100px", threshold: 0 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, []);

  // Generate inference-like data stream logs
  useEffect(() => {
    const modules = ['EXTRACT', 'COPILOT', 'SAGE', 'PULSE', 'CORE'];
    const actions = [
      'Parsing document context', 
      'Analyzing syntax tree', 
      'Querying semantic DB', 
      'Structuring extracted data', 
      'Syncing model weights', 
      'Optimizing inference graph'
    ];
    const statuses = ['OK', 'PASS'];

    const generateLog = (): LogEntry => {
      const mod = modules[Math.floor(Math.random() * modules.length)];
      const act = actions[Math.floor(Math.random() * actions.length)];
      const stat = statuses[Math.floor(Math.random() * statuses.length)];
      const ms = Math.floor(Math.random() * 30 + 5) + 'ms';
      const uniqueId = Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      return { id: uniqueId, module: mod, action: act, status: stat, time: ms };
    };

    // Pre-fill
    setDataStream(Array.from({length: 4}, generateLog));

    const interval = setInterval(() => {
      setDataStream(prev => {
        return [generateLog(), ...prev].slice(0, 4);
      });
    }, 1200); // Slower, readable terminal speed
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
        initParticles(parent.clientWidth, parent.clientHeight);
      }
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
      size: number;
      colorAlpha: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 2.5;
        this.vy = (Math.random() - 0.5) * 2.5;
        this.size = Math.random() * 2 + 0.5;
        this.colorAlpha = Math.random() * 0.5 + 0.3;
      }

      update(width: number, height: number, mouseInfo: {x: number, y: number}) {
        this.baseX += this.vx;
        this.baseY += this.vy;

        if (this.baseX < 0 || this.baseX > width) this.vx *= -1;
        if (this.baseY < 0 || this.baseY > height) this.vy *= -1;

        const dx = mouseInfo.x - this.baseX;
        const dy = mouseInfo.y - this.baseY;
        const distSq = dx * dx + dy * dy;
        
        const interactionRadius = 200;
        const interactionRadiusSq = 40000; // 200^2
        
        if (distSq < interactionRadiusSq) {
          const distance = Math.sqrt(distSq);
          const force = (interactionRadius - distance) / interactionRadius;
          const pushX = (dx / distance) * force * 40;
          const pushY = (dy / distance) * force * 40;
          
          this.x += (this.baseX + pushX - this.x) * 0.1;
          this.y += (this.baseY + pushY - this.y) * 0.1;
          this.colorAlpha = 1;
        } else {
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
          this.colorAlpha = Math.max(0.3, this.colorAlpha - 0.02);
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        if (this.size > 1.8) {
          ctx.rect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        } else {
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        }
        ctx.fillStyle = `rgba(210, 240, 0, ${this.colorAlpha})`;
        ctx.fill();
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(210, 240, 0, ${this.colorAlpha})`;
      }
    }

    const initParticles = (width: number, height: number) => {
      particles = [];
      // Increase density and cap the maximum number of particles to avoid jank on large screens
      const isMobile = window.innerWidth <= 768;
      const density = isMobile ? 12000 : 9000;
      const numParticles = Math.min(isMobile ? 80 : 250, Math.floor((width * height) / density));
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisibleRef.current) return;

      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      
      ctx.fillStyle = 'rgba(19, 19, 19, 0.4)';
      ctx.fillRect(0, 0, width, height);
      
      const mouseInfo = mouseRef.current;

      particles.forEach((particle, i) => {
        particle.update(width, height, mouseInfo);
        particle.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 28900) { // 170^2
            const distance = Math.sqrt(distSq);
            ctx.beginPath();
            const opacity = (1 - distance / 170) * Math.min(particle.colorAlpha, particles[j].colorAlpha);
            ctx.strokeStyle = `rgba(210, 240, 0, ${opacity * 0.8})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        const mdx = particle.x - mouseInfo.x;
        const mdy = particle.y - mouseInfo.y;
        const mDistSq = mdx * mdx + mdy * mdy;
        if (mDistSq < 22500) { // 150^2
            const mDistance = Math.sqrt(mDistSq);
            ctx.beginPath();
            const opacity = (1 - mDistance / 150) * 0.3;
            ctx.strokeStyle = `rgba(210, 240, 0, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseInfo.x, mouseInfo.y);
            ctx.stroke();
        }
      });

      if (mouseInfo.x > 0 && mouseInfo.y > 0) {
        ctx.beginPath();
        ctx.arc(mouseInfo.x, mouseInfo.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(210, 240, 0, 0.8)';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mouseInfo.x, mouseInfo.y, 150, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(210, 240, 0, 0.05)';
        ctx.stroke();
      }
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-50" />
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Futuristic UI Overlays */}
      <div className="absolute inset-0 z-20 pointer-events-none p-6 md:p-12 flex flex-col justify-between">
        
        {/* Top Right Platform Status Group */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.5 },
            x: { duration: 1, delay: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="self-end text-right relative bg-background/60 backdrop-blur-md border border-outline/30 p-5 rounded-sm shadow-2xl w-64 hidden md:block"
        >
          <div className="flex items-center justify-end gap-3 text-primary-fixed mb-4">
            <span className="material-symbols-outlined text-base animate-spin" style={{ animationDuration: '4s' }}>autorenew</span>
            <span className="text-[11px] font-label tracking-[0.2em] font-bold uppercase">Platform Status</span>
          </div>
          
          <div className="space-y-3 text-left">
            <div className="flex justify-between items-center border-b border-outline/30 pb-2">
              <span className="text-[10px] font-mono text-outline uppercase tracking-widest">Integration</span>
              <span className="text-[10px] font-mono text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse"></span>
                ACTIVE
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-outline/30 pb-2">
              <span className="text-[10px] font-mono text-outline uppercase tracking-widest">Inference Latency</span>
              <span className="text-[10px] font-mono text-primary-fixed font-bold">12ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-outline uppercase tracking-widest">Accuracy</span>
              <span className="text-[10px] font-mono text-white">99.8%</span>
            </div>
          </div>
        </motion.div>

        {/* Decorator Grid Lines */}
        <div className="absolute bottom-[30%] right-0 w-[40%] border-t border-primary-fixed/10 border-dashed hidden md:block" />
        <div className="absolute top-[20%] left-[30%] h-[40%] border-l border-primary-fixed/10 border-dashed hidden md:block" />

        {/* Center Intricate Scanning Assembly */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 md:opacity-30 mix-blend-screen -z-10 md:z-auto">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 md:w-80 md:h-80 border border-primary-fixed/20 rounded-full"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50%25' cy='50%25' r='49%25' fill='none' stroke='%23d2f000' stroke-width='1' stroke-dasharray='4 12'/%3E%3C/svg%3E")` }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[15%] border border-primary-fixed/40 rounded-full"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50%25' cy='50%25' r='49%25' fill='none' stroke='%23d2f000' stroke-width='2' stroke-dasharray='1 40'/%3E%3C/svg%3E")` }}
          />
          {/* Target Reticle Crosshairs */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary-fixed/30 -translate-y-1/2" />
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-primary-fixed/30 -translate-x-1/2" />
        </div>

        {/* Inference Data Stream Log (Left Side) */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 5, 0] }}
            transition={{
                opacity: { duration: 1, delay: 1.5 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="absolute bottom-[20%] left-6 md:left-12 bg-background/60 backdrop-blur-md p-5 border border-outline/30 rounded-sm shadow-xl w-[300px] hidden md:block"
        >
            <div className="text-[10px] text-primary-fixed font-label tracking-widest mb-4 border-b border-primary-fixed/20 pb-2 uppercase flex justify-between items-center">
              <span>LLM Inference Logs</span>
              <span className="material-symbols-outlined text-[12px] animate-pulse">terminal</span>
            </div>
            
            <div className="space-y-3">
              {dataStream.map((log, i) => (
                  <motion.div 
                      key={log.id}
                      layout
                      initial={{ opacity: 0, x: -10, y: -10 }}
                      animate={{ opacity: Math.max(0.2, 1 - i * 0.25), x: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="font-mono flex flex-col gap-1"
                  >
                      <div className="flex justify-between items-center w-full text-[9px]">
                        <span className="text-primary-fixed font-bold tracking-widest">[{log.module}]</span>
                        <span className="text-outline">{log.id}</span>
                      </div>
                      <div className="flex justify-between items-center w-full text-[10px]">
                        <span className="truncate text-white/90 max-w-[190px]">{log.action}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-outline">{log.time}</span>
                          <span className="text-primary-fixed w-6 text-right font-bold">{log.status}</span>
                        </div>
                      </div>
                  </motion.div>
              ))}
            </div>
        </motion.div>

        {/* Bottom Left Rhobots Intelligence Engine Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -3, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 1 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          className="self-start mt-auto bg-background/60 backdrop-blur-md p-5 border-l-4 border-primary-fixed rounded-sm shadow-2xl border-y border-r border-y-outline/30 border-r-outline/30 hidden md:flex"
        >
          <div className="flex items-center gap-3 text-white mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-fixed"></span>
            </span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-label">Rhobots Intelligence</span>
          </div>
          <div className="flex gap-1.5 items-end h-8">
            {[0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4].map((delay, i) => (
              <motion.div 
                key={i}
                animate={{ height: ['4px', `${Math.random() * 20 + 8}px`, '4px'] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: delay }}
                className="w-1 bg-primary-fixed/80 rounded-t-sm"
              />
            ))}
            <div className="ml-4 text-[10px] font-mono text-outline self-center uppercase leading-tight tracking-widest bg-surface/50 px-2 py-1 rounded-sm">
                Neural Accel<br/>
                <span className="text-white text-[9px]">Processing...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
