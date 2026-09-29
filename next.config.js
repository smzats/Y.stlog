/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ビルド時のTypeScriptエラーを無視して強制デプロイする
    ignoreBuildErrors: true,
  },
  eslint: {
    // ビルド時のESLintエラーを無視する
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
