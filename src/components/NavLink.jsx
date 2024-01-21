'use client'
import Link from "next/link";
import { twJoin } from 'tailwind-merge';
import { usePathname } from "next/navigation"

export default function NavLink ({className, children, href='', ...rest}) {
  const pathname = usePathname();

  return (
    <Link className={twJoin(
      'english font-bold', 
      'hover:underline hover:underline-offset-[5px]',
      pathname===href && 'underline underline-offset-[5px]',
      )} href={href} {...rest}>
      &nbsp;{children}&nbsp;
    </Link>
  )
}