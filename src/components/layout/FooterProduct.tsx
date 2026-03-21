export default function FooterProduct() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-8 bg-[#0E0E0E] border-t border-[#393939]/20 font-mono text-[10px] uppercase tracking-widest gap-6">
      <div className="text-[#393939]">
        &copy; 2024 RHOBOTS KINETIC ENGINE. ALL RIGHTS RESERVED.
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <a className="text-[#393939] hover:text-[#D2F000] transition-colors hover:underline underline-offset-4" href="#">SYSTEM_STATUS</a>
        <a className="text-[#393939] hover:text-[#D2F000] transition-colors hover:underline underline-offset-4" href="#">TERMINAL_LOGS</a>
        <a className="text-[#393939] hover:text-[#D2F000] transition-colors hover:underline underline-offset-4" href="#">SECURITY_PROTOCOL</a>
      </div>
      <div className="flex gap-4">
        <span className="text-[#393939]">LATENCY: <span className="text-white">12ms</span></span>
        <span className="text-[#393939]">UPTIME: <span className="text-[#D2F000]">99.99%</span></span>
      </div>
    </footer>
  );
}
