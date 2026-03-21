export default function PrivacyPage() {
  return (
    <main>
      <section className="py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">COMPANY // PRIVACY</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Privacy <span className="text-primary-fixed">Policy.</span>
          </h1>
          <p className="text-on-surface text-sm opacity-50">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline max-w-4xl">
        <div className="space-y-12">
          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Information We Collect</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>We collect information you provide directly to us, such as when you request a demo, create an account, or contact us for support. This may include your name, email address, company name, job title, and phone number.</p>
              <p>We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our services.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">How We Use Your Information</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send communications, and comply with legal obligations.</p>
              <p>We do not sell your personal information to third parties. We may share information with service providers who assist us in operating our services, subject to confidentiality agreements.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Data Security</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits. Our infrastructure is SOC 2 Type II certified.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Your Rights</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at <span className="text-primary-fixed">tech@rhobots.ai</span></p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Contact</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70">
              <p>For privacy-related inquiries, contact our Data Protection Officer at <span className="text-primary-fixed">tech@rhobots.ai</span></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
