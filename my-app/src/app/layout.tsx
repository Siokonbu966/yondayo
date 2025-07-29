import type { Metadata } from "next"
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <header>
          <h2>よんだよ</h2>
        </header>
        <main>{children}</main>
        <footer>
          <Image
            src="/Icon_home.svg"
            alt="home icon"
            width={34}
            height={34}
          />
          <Image
            src="/Icon_memo.svg"
            alt="memo icon"
            width={34}
            height={34}
          />
          <Image
            src="/Icon_grid.svg"
            alt="grid icon"
            width={34}
            height={34}
          />
        </footer>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'test',
  description: 'test app',
}
