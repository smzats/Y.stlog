import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '塾管理システム',
  description: '学習ログ・スケジュール管理',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}