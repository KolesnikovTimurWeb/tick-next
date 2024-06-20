import Link from 'next/link'
import React from 'react'
import '@/app/styles/Button.scss'

interface ButtonProps {
   children: React.ReactNode,
   link?: string | null,
   variant: 'black' | "white" | "white-lined" | "black-lined"
}
const Button = ({ children, link = null, variant = "white" }: ButtonProps) => {

   if (link !== null) return (
      <Link className={"button " + variant} href={`${link}`}>
         {children}
      </Link>
   )

   return (
      <button className={"button " + variant}>
         {children}
      </button>
   )
}

export default Button
