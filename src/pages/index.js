import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainPage from '../../components/Main/MainPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main
        className={`flex flex-col items-center justify-between py-10 h-[80vh] overflow-y-auto relativ`}
      >
        <MainPage />
      </main>
  )
}
