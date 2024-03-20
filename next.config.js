/** @type {import('next').NextConfig} */

const cspHeader = `
    frame-ancestors 'self' https://app.contentful.com;
    `;

const nextConfig = {
   // disabling strict mode since the examples use
   // useEffect with no dependencies to ensure the function
   // is only run once and only run on the client.
   reactStrictMode: false,
   swcMinify: true,
   images: {
      dangerouslyAllowSVG: true,
      domains: ["static.ably.dev"],
   },
   webpack: (config) => {
      config.externals.push({
         "utf-8-validate": "commonjs utf-8-validate",
         bufferutil: "commonjs bufferutil",
      });
      return config;
   },
   images: {
      formats: ["image/avif", "image/webp"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "images.ctfassets.net",
         },
      ],
   },
   async headers() {
      return [
         {
            source: "/(.*)",
            headers: [
               {
                  key: "Content-Security-Policy",
                  value: cspHeader.replace(/\n/g, ""),
               },
               {
                  key: "X-Frame-Options",
                  value: "false",
               },
            ],
         },
      ];
   },
};

module.exports = nextConfig;
