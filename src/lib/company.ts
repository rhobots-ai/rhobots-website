/**
 * Legal entity details. Single source of truth for the footer, About, Contact,
 * legal pages and Organization JSON-LD. These must match Meta Business Manager
 * exactly. Optional fields render only when non-empty.
 */
export const company = {
  legalName: 'MayvionAI Intelligence Private Limited',
  brand: 'Rhobots',
  cin: 'U62090HR2024PTC126993',
  gstin: '' as string, // TODO: fill in GSTIN
  phone: '' as string, // TODO: fill in phone, e.g. '+91 98xxxxxxxx'
  email: 'tech@rhobots.ai',
  address: {
    street: '628, 2nd Floor, Sector 9A, Neki Ram Marg, Sadar Bazar',
    locality: 'Gurgaon',
    region: 'Haryana',
    postalCode: '122001',
    country: 'India',
  },
};

export const companyAddress = () => {
  const a = company.address;
  return `${a.street}, ${a.locality} ${a.postalCode}, ${a.region}, ${a.country}`;
};

export const companyTel = () => company.phone.replace(/[^\d+]/g, '');

export const INSAC_URL = 'https://insac.rhobots.ai';
