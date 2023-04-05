import '@/styles/globals.css'
import { Inter, Poppins, Cutive_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-poppins'
})

const cutive_mono = Cutive_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-terminal'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${cutive_mono.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
