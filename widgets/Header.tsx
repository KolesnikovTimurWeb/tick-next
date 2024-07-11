
import React, { useState } from 'react'
import style from '@/app/styles/Header.module.scss'
import Link from 'next/link'
import Button from '../components/Button'
import Image from 'next/image'
import svg from '@/assets/logo.svg'

import { signOut, useSession } from 'next-auth/react'
import Menu from '@/app/components/Menu'



export default function Header() {
   const [showPopup, setShowPopup] = useState(false);

   const togglePopup = () => {
     setShowPopup(!showPopup);
   };
   const { data: session,status } = useSession() 

   return (
      <div className={style.header}>
         <div className="container">
            <div className={style.header_div}>
               <Link href={'/'} className={style.header_logo}>
                  <Image src={svg} width={24} height={24} alt='logo' />
                  <p>tick</p>
               </Link>
               <div className={style.header_navigation}>
                  <Link href={'/news'}>News</Link>
                  <Link href={'/tasks'}>Tasks</Link>
               </div>
               <div className={style.header_registration}>
               {session && status === 'authenticated' && (
                  <div  className={style.header_registration}>
                     {session.user?.id}
                     <Image onClick={togglePopup} src={session.user?.image || svg} width={40} height={40} alt='avatar'/>
                  </div>
               )}
                {!session && status === 'unauthenticated'  && (
                  <div className={style.header_registration}>
                     <Button variant='black' size='small' link={'/sign-in'}>Log In</Button>
                     <Button variant='black-lined' size='small' link={'/sign-in'}>Sing Up</Button>
                  </div>
               )}
                  {status === 'loading'  && (
                  <div>
                        Loading...
                  </div>
               )}
                  <Menu show={showPopup} onClose={() => setShowPopup(false)} />
        
               </div>
            </div>
         </div>
        
   
      </div>
   )
}

