// next.config.js
const nextConfig = {
  env: {
    NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY: 'AIzaSyB_cDZhT9nX-JdST5zJqGtDr4H4eak9DQQ',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'saogithubpage-79366.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_DATABASE_URL: 'https://console.firebase.google.com/project/saogithubpage-79366/database',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'saoGithubPage',
  },
  experimental: {
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },
  trailingSlash: true,
  assetPrefix: "./",
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }
    }
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}

module.exports = nextConfig