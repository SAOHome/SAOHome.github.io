// next.config.js
const nextConfig = {
  env: {
    NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY: 'AIzaSyB_cDZhT9nX-JdST5zJqGtDr4H4eak9DQQ',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'saogithubpage-79366.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_DATABASE_URL: 'https://saogithubpage-79366-default-rtdb.firebaseio.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'saogithubpage-79366',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'saogithubpage-79366.appspot.com',
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
  images: {
    loader: "imgix",
    path: "",
    domains: ['firebasestorage.googleapis.com']
  }
}

module.exports = nextConfig