/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mono/auth", "@mono/billing", "@mono/teams", "@mono/flags", "@mono/audit", "@mono/notify", "@mono/support"],
  webpack: (config) => {
    config.resolve.extensionAlias = { ".js": [".ts", ".tsx", ".js", ".jsx"] };
    return config;
  },
};
export default nextConfig;
