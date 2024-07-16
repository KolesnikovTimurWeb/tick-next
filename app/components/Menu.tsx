import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import logOut from '@/assets/icons/log-out.svg'
import settings from '@/assets/icons/settings.svg'
import style from '@/app/styles/Header.module.scss'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

// ICONS
import { GoPlus } from "react-icons/go";
import { LuBox } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDropboxLogo } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
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
                           <Image  src={session.user?.image || settings} width={40} height={40} alt='avatar'/>
                           <h3>{session.user?.name}</h3>
                        </div>
                     )}
                </div>
                <div className={style.header_menu_mobile}>
                <Link className={style.header_menu_link} href={'/news'}>
                     <PiDropboxLogo size={20}/>
                        Products
                </Link>
                <Link className={style.header_menu_link} href={'/news'}>
                     <FaRegNewspaper size={20}/>
                        News
                </Link>
                </div>
                <Link className={style.header_menu_link} href={'/new-product'}>
                     <GoPlus size={20}/>
                        New Product
                </Link>
                <Link className={style.header_menu_link} href={'/my-products'}>
                     <LuBox size={20}/>

                       My Products
                </Link>
                <Link className={style.header_menu_link} href={'/setings'}>
                     <IoSettingsOutline size={20}/>
                     Settings
                </Link>

                 <button className={style.header_menu_signOut} onClick={()=> signOut()}>
                       <IoLogOutOutline size={20}/>
                        
                        Sign Out
                 </button>
          </div>
  )
}

export default Menu
