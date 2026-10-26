export const SITE_NAME = "Mining Consultants";
export const SITE_EMAIL = "info@miningconsultants.com.au";
export const SITE_DESCRIPTION =
  "Technology consulting for mine sites: site networks, IoT operations, operational data and the mobile apps crews use every shift.";

// Vercel provides VERCEL_PROJECT_PRODUCTION_URL automatically. Set SITE_URL
// (e.g. https://miningconsultants.com.au) once the custom domain is live.
export const SITE_URL =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
