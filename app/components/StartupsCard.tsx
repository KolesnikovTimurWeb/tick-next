'use client';
import styles from "@/app/styles/Startups.module.scss";
import Image from "next/image";

const StartupsCard = () => {
  return (
    <div className={styles.startups_card}>
      <div className={styles.startups_content}>
        <Image width={40} height={40} src='https://product-hunt-clone-final.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fe44b3b6a-ace9-4a09-8c26-379eef27d03d-z68ggi.ico&w=1080&q=75' alt="logo"/>
       <div className={styles.startups_card_title}>
        <h2>Title</h2>      
        <p>Desc</p>
        </div>
      </div>
      <div className={styles.startups_button}>
        <button>Like</button>


      </div>
    </div>
  )
}

export default StartupsCard
