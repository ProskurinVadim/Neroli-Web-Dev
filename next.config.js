/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "_shared.scss";`
    },
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig
