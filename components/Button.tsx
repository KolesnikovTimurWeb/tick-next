import Link from 'next/link'
import React from 'react'
import '@/app/styles/Button.scss'

interface ButtonProps {
   children: React.ReactNode,
   link?: string | null,
   variant: 'black' | "white" | "white-lined" | "black-lined",
   size: 'big' | "small" | "normal",

}
const Button = ({ children, link = null, variant = "white" , size = 'normal' }: ButtonProps) => {

   if (link !== null) return (
      <Link className={"button " + variant +" " + size} href={`${link}`}>
         {children}
      </Link>
   )

   return (
      <button className={"button " + variant +" " + size}>
         {children}
      </button>
   )
}

export default Button
