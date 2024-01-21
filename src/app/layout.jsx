import { Inria_Serif } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import Link from "next/link";
import logoPic from '../../public/logo.png'
import NavLink from '@/components/NavLink';
 
const inria_serif = Inria_Serif({
  subsets: ['latin'],
  variable: '--font-inria-serif',
  display: 'swap',
  weight: ["300", "400", "700"]
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inria_serif.variable}`}>
      <body>
        <GlobalNavigationBar />
        {children}
      </body>
    </html>
  )
}

function GlobalNavigationBar() {
  return (
      <section className={'flex justify-center'}>
          <nav className={'flex justify-between items-center w-full max-w-[1200px] py-7'}>
              <LogoLink />
              <div className={'flex gap-20'}>
                  <NavLink href={'/about'}>About</NavLink>
                  <NavLink href={'/portfolio'}>Portfolio</NavLink>
                  <NavLink href={'/contact'}>Contact</NavLink>
              </div>
          </nav>
      </section>
  )
}

function LogoLink() {
  return (
    <Link href={'/'} className={'english text-4xl font-bold underline underline-offset-[5px]'}>
      <Image src={logoPic} className={'w-[73px]'} priority alt="logo" />
    </Link>
  )
}

