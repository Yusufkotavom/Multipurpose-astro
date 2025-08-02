export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  language: string;
  timezone: string;
  currency: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    whatsapp?: string;
  };
  seo: {
    googleAnalytics?: string;
    googleTagManager?: string;
  };
}

export const siteConfig: SiteConfig = {
  title: "Multi-Purpose Business Website Indonesia",
  description: "Website profesional untuk berbagai bisnis di Indonesia dengan fitur lengkap dan SEO-friendly",
  url: "https://your-domain.com",
  author: "Your Company Name",
  language: "id",
  timezone: "Asia/Jakarta",
  currency: "IDR",
  socials: {
    facebook: "https://facebook.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    youtube: "https://youtube.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany"
  },
  contact: {
    phone: "+62 812-3456-7890",
    email: "info@yourcompany.com",
    address: "Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 12345",
    whatsapp: "+62 812-3456-7890"
  },
  seo: {
    googleAnalytics: "G-XXXXXXXXXX",
    googleTagManager: "GTM-XXXXXXX"
  }
};

export default siteConfig;