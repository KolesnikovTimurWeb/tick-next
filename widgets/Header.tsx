import React from 'react'
import style from '@/app/styles/Header.module.scss'
import Link from 'next/link'
import Button from '../components/Button'
import Image from 'next/image'
import svg from '@/assets/logo.svg'

const Header = () => {
   return (
      <div className={style.header}>
         <div className={style.header_logo}>
            <Image src={svg} width={24} height={24} alt='logo' />
            <p>tick</p>
         </div>
         <div className={style.header_navigation}>
            <Link href={'/'}>Tasks</Link>
            <Link href={'/'}>Tasks</Link>
         </div>
         <div className={style.header_registration}>
            <Button variant='black' link={'/asd'}>Text</Button>
            <Button variant='black' link={'/asd'}>Text</Button>
         </div>
      </div>
   )
}

export default Header
