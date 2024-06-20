import React, { ReactElement } from 'react'
import styles from "@/app/styles/Main.module.scss";
import Image from 'next/image';
import build from '@/assets/about/build.svg';
import aboutImg from '@/assets/about-img.webp';
import Column from '@/assets/Column-about.svg';
import CustomMotionDiv from '@/app/CustomMotionDiv';

interface AboutCardProps{
  icon:any,
  title:string,
  children:React.ReactNode
}
const AboutCard = ({icon , title , children}:AboutCardProps) =>{
  return(
    <div className={styles.about_card}>
      <div>
      <Image src={icon} alt='icon'/>
        <h2>{title}</h2>
      </div>

      {children}
    </div>
  )
}

const About = () => {
  return (
    <div className={styles.about}>
      <div className='container' style={{display:"flex" }}>
        <div className={styles.about_linediv}>
          <CustomMotionDiv
          initial='hidden'
          className="box"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <Image src={Column} alt='column'/>

        </CustomMotionDiv>
          <div className={styles.about_line}></div>
        </div>
        <div className={styles.about_div}>
          <div className={styles.about_text}>
              <h2>A CRM created to be your own.</h2>
              <p>Tweak anything and everything to ensure Attio fits your business, not the other way around.</p>
          </div>
          <div className={styles.about_image}>
            <div className={styles.about_cards}>
              <AboutCard icon={build} title={"Card"}>
              Create your dream CRM with powerful, flexible templates for every use case.
              </AboutCard>
              <AboutCard icon={build} title={"Card"}>
              Create your dream CRM with powerful, flexible templates for every use case.
              </AboutCard>
              <AboutCard icon={build} title={"Card"}>
              Create your dream CRM with powerful, flexible templates for every use case.
              </AboutCard>
              <AboutCard icon={build} title={"Card"}>
              Create your dream CRM with powerful, flexible templates for every use case.
              </AboutCard>
            </div>
            <Image src={aboutImg} alt='aboutImg'/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About
