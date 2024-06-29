"use client"
import React, { useRef } from 'react'
import styles from "@/app/styles/Main.module.scss";
import LineDraw from './LineDraw';
import Image from 'next/image';
import build from '@/assets/about/build.svg';

const Steps = () => {

  return (
    <div className={styles.steps}>
      <div className="container" style={{position:"relative"}}>
         <div className={styles.steps_div}>
            <div  className={styles.steps_item}>
              <Image src={build} alt='icon'/>
              <p>Start from register</p>
            </div>
            <div
             className={styles.steps_item}>
              <Image src={build} alt='icon'/>
              <p>Create your account</p>
            </div>
            <div className={styles.steps_item}>
              <Image src={build} alt='icon'/>
              <p>Solve tasks</p>
            </div>
            <div className={styles.steps_item}>
              <Image src={build} alt='icon'/>
              <p>Get a job offer</p>
            </div>
         </div>
         <div className={styles.steps_bacround}>
         <LineDraw/>

         </div>
      </div>
    </div>
  )
}

export default Steps
