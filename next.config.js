/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['wiki.pokexgames.com', 'raw.githubusercontent.com', 'img.pokemondb.net'],
    },
}

module.exports = nextConfig