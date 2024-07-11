   import React, { memo, useState } from 'react'
import styles from "@/app/styles/News.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import CustomMotionDiv from '@/app/CustomMotionDiv'

   interface PostProps{
      item: any,
      index: number,
      ref?:any
   }

   const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }
   const Post = ({item,index , ref}:PostProps) => {
     return (
       <CustomMotionDiv 
       ref={ref}
       variants={variants}
       initial='hidden'
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
       transition={{
          delay: 0.15 * index,
          ease: "easeInOut",
          duration: 0.5,
       }}
       
       className={styles.news_post}>  
         <div className={styles.news_post_text}>
            <Link href={item.url}><span>{item.source.name}</span></Link>
            <Link href={item.url}><h2 >{item.title}</h2></Link>
         
         <p>{item.description}</p>
         </div>
       </CustomMotionDiv>
     )
   }
   export default memo(Post)
   