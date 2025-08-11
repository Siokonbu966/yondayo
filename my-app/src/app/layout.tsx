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

        <header className="fixed top-0 left-0 w-full z-50 grid grid-cols-3 items-center border-b px-4 h-16 bg-[#ffeee2]">
          <h2 className="col-start-2 text-center p-4 text-2xl font-bold">よんだよ</h2>
          <div className="col-start-3 justify-self-end w-12 h-12">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth={3} />r
            </svg>
          </div>
        </header>

        <main className="flex-1 pt-16">{children}</main>

        <footer className="fixed bottom-0 left-0 w-full border-t z-50">
          <div className="flex justify-center space-x-10 p-4">
            <Image
            src="/Icon_home.svg"
            alt="home icon"
            width={34}
            height={34}
            className="w-15 h-15 sm:w-17 sm:h-17 lg:w-20 lg:h-20"
            />
            <Image
              src="/Icon_memo.svg"
              alt="memo icon"
              width={34}
              height={34}
              className="w-15 h-15 sm:w-17 sm:h-17 lg:w-20 lg:h-20"
            />
            <Image
              src="/Icon_grid.svg"
              alt="grid icon"
              width={34}
              height={34}
              className="w-15 h-15 sm:w-17 sm:h-17 lg:w-20 lg:h-20"
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
