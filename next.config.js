/* @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "weblukas.github.io",
                port: "",
                pathname: "/react-store",
            },
            {
                protocol: "https",
                hostname: "www.imperatordrazka.pl",
                port: "",
             
            },
            {
                protocol: "https",
                hostname: "www.zamiastowi.pl",
                port: "",
              
            },
        ],
    },
};

module.exports = nextConfig
