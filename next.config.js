/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development
    register: true,
    skipWaiting: true,
});

const nextConfig = withPWA({
    reactStrictMode: false,
    trailingSlash: true,
    basePath: '',
    publicRuntimeConfig: {
        contextPath: '',
    },
    images: {
        domains: [''],
    },
});

module.exports = nextConfig;
