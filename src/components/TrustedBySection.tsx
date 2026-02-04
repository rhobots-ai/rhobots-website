const trustedBy = [
  { name: 'PB Partners', logo: 'https://www.pbpartners.com/images/logo.svg' },
  { name: 'Safexpress', logo: 'https://www.safexpress.com/assets/images/new-logo-white.png' }
];

const TrustedBySection = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-200 hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-8">
          <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-6">Trusted by enterprises across</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustedBy.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
