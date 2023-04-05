import '@/styles/globals.css'
import { Inter, Poppins, Cutive_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"]
})

const cutive_mono = Cutive_Mono({
  subsets: ["latin"],
  weight: ["400"]
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
