import React from 'react'
import styles from '@/app/styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import svg from '@/assets/logo-white.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
      <Link href={'/'} className={styles.footer_logo}>
            <Image src={svg} width={24} height={24} alt='logo' />
            <p>tick</p>
      </Link>
       <div className={styles.footer_block}>
        <div className={styles.footer_column}>
          <h2>Product</h2>
          <Link href={'/news'}>News</Link>
          <Link href={'/task'}>Task</Link>
        </div>
        </div>
      </div>  
      <div className={styles.footer_policy}>
        <div className="container">
        <span>© 2023 Attio Ltd. All rights reserved.</span>

          <span>Terms & Conditions ∙ Privacy Policy</span>
        </div>
   
      </div>
    </div>
  )
}

export default Footer
