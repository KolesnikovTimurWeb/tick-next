import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import logOut from '@/assets/icons/log-out.svg'
import settings from '@/assets/icons/settings.svg'
import product from '@/assets/icons/product.svg'
import newProduct from '@/assets/icons/plus.svg'
import style from '@/app/styles/Header.module.scss'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Menu = ({ show, onClose }:{show:any , onClose:any}) => {
   const { data: session,status } = useSession() 

   const ref = useRef<HTMLInputElement>(null)

   useEffect(() => {
     const handleClickOutside = (event:any) => {
       if (ref.current && !ref.current.contains(event.target)) {
         onClose();
       }
     };
 
     if (show) {
       document.addEventListener('mousedown', handleClickOutside);
     } else {
       document.removeEventListener('mousedown', handleClickOutside);
     }
 
     return () => {
       document.removeEventListener('mousedown', handleClickOutside);
     };
   }, [show, onClose]);
 
   if (!show) return null;

  return (
       <div className={style.header_menu} ref={ref}>
                 <div > 
                     {session && status === 'authenticated' && (
                        <div className={style.header_menu_account}>
                           <Image src={session.user?.image || settings} width={40} height={40} alt='avatar'/>
                           <h3>{session.user?.name}</h3>
                        </div>
                     )}
                </div>
                <Link className={style.header_menu_link} href={'/products'}>
                        <Image src={newProduct} alt='icon' width={20} height={20}/>
                        New Product
                </Link>
                <Link className={style.header_menu_link} href={'/products'}>
                        <Image src={product} alt='icon' width={20} height={20}/>
                        Products
                </Link>
                <Link className={style.header_menu_link} href={'/setings'}>
                     <Image src={settings} alt='icon' width={20} height={20}/>

                     Settings
                </Link>

                 <button className={style.header_menu_signOut} onClick={()=> signOut()}>
                    <Image src={logOut} alt='icon' width={20} height={20}/>
                        
                        Sign Out
                 </button>
          </div>
  )
}

export default Menu
