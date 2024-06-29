const nextConfig = {
   images: {
     remotePatterns: [
       {
         protocol: "https", // or http
         hostname: "**", // if your website has no www, drop it
       },
     ],
   },
 };
 module.exports = nextConfig;