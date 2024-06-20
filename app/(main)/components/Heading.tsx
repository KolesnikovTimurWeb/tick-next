import React from 'react'
import styles from "@/app/styles/Main.module.scss";
import Button from "@/components/Button";
import OpenAi  from '@/assets/Open AI.svg';
import StackBlitz  from '@/assets/Stack Blitz.svg';
import Github  from '@/assets/github.svg';
import Image from 'next/image';

const Heading = () => {
  return (
    <div className={styles.heading}>
      <div className="container">
          <div className={styles.heading_text}>
          <h1 className={styles.heading_h1}>
          React tasks that&apos;s will bring you offer.
          </h1>
          <h2 className={styles.heading_h2}>Powerful, flexible and data-driven, Attio makes it easy to build the exact CRM your business needs.</h2>
          </div>

          <div className={styles.heading_buttons}>
            <Button variant="white">Start now</Button>
            <Button variant="white-lined">Start now</Button>
          </div>
          <div className={styles.heading_sponsors}>
              <Image src={OpenAi} alt='Sponsors'/>
              <Image src={StackBlitz} alt='Sponsors'/>
              <Image src={Github} alt='Sponsors'/>
          </div>
      </div>
    </div>

  )
}

export default Heading
