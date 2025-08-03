import type { Metadata } from "next"
import Image from 'next/image'
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body style={{ backgroundColor: '#ffeee2'}}>

        <header className="flex justify-center p-4">
          <h2 className="text-2xl font-bold">よんだよ</h2>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="fixed bottom-0 left-0 w-full border-t z-50">
          <div className="flex justify-center space-x-5 p-4">
            <Image
            src="/Icon_home.svg"
            alt="home icon"
            width={34}
            height={34}
            className="w-15 h-15 sm:w-30 sm:h-30 lg:w-40 lg:h-40"
            />
            <Image
              src="/Icon_memo.svg"
              alt="memo icon"
              width={34}
              height={34}
              className="w-15 h-15 sm:w-30 sm:h-30 lg:w-40 lg:h-40"
            />
            <Image
              src="/Icon_grid.svg"
              alt="grid icon"
              width={34}
              height={34}
              className="w-15 h-15 sm:w-30 sm:h-30 lg:w-40 lg:h-40"
            />
          </div>
        </footer>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'test',
  description: 'test app',
}
