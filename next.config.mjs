import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js"

/** @param {string} phase @returns {import("next").NextConfig} */
const nextConfig = (phase) => ({
  // Building production must not overwrite assets used by a running dev server.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  // Framer serves images from its CDN; allow them until you localise the assets.
  images: { remotePatterns: [{ protocol: "https", hostname: "framerusercontent.com" }] },
})

export default nextConfig
