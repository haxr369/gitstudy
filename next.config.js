/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
    images: {
        domains: ['static.wanted.co.kr'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
