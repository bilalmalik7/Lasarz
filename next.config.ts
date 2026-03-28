import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/lasar', destination: '/lasar/index.html' },
      { source: '/lasar/partner', destination: '/lasar/partner/index.html' },
      { source: '/lasar/urteilssammlung-zur-afa-und-nutzungsdauer-von-immobilien', destination: '/lasar/urteilssammlung-zur-afa-und-nutzungsdauer-von-immobilien/index.html' },
      { source: '/lasar/afa-rechner', destination: '/lasar/afa-rechner/index.html' },
      { source: '/lasar/blog', destination: '/lasar/blog/index.html' },
      { source: '/lasar/rechtsschutz', destination: '/lasar/rechtsschutz/index.html' },
      { source: '/lasar/kosten', destination: '/lasar/kosten/index.html' },
      { source: '/lasar/karriere', destination: '/lasar/karriere/index.html' },
      { source: '/lasar/partner/', destination: '/lasar/partner/index.html' },
      { source: '/lasar/urteilssammlung-zur-afa-und-nutzungsdauer-von-immobilien/', destination: '/lasar/urteilssammlung-zur-afa-und-nutzungsdauer-von-immobilien/index.html' },
      { source: '/lasar/afa-rechner/', destination: '/lasar/afa-rechner/index.html' },
      { source: '/lasar/blog/', destination: '/lasar/blog/index.html' },
      { source: '/lasar/rechtsschutz/', destination: '/lasar/rechtsschutz/index.html' },
      { source: '/lasar/kosten/', destination: '/lasar/kosten/index.html' },
      { source: '/lasar/karriere/', destination: '/lasar/karriere/index.html' },
    ];
  },
};

export default nextConfig;
