import React from 'react'
import styles from "@/app/styles/Main.module.scss";
import LineDraw from './LineDraw';
import Image from 'next/image';
import build from '@/assets/about/build.svg';

const Steps = () => {
  return (
    <div className={styles.steps}>
      <div className="container" style={{position:"relative"}}>
         <div className={styles.steps_div}>
            <Image src={build} alt='icon'/>
              <Image src={build} alt='icon'/>
              <Image src={build} alt='icon'/>
              <Image src={build} alt='icon'/>
         </div>
         <div className={styles.steps_bacround}>
         <LineDraw/>

         </div>
      </div>
    </div>
  )
}

export default Steps
