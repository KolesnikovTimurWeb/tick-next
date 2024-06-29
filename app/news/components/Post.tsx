   import React, { memo, useState } from 'react'
import styles from "@/app/styles/News.module.scss"
import Image from 'next/image'

   interface PostProps{
      item: any,
   }
   const Post = ({item}:PostProps) => {
      const [img,setImage] = useState(item.urlToImage)
     return (
       <div className={styles.news_post}>  
         <div className={styles.news_post_text}>
         <h2 onClick={()=> console.log(img)}>{item.title}</h2>
         <p>{item.description}</p>
         </div>
       </div>
     )
   }
   
   export default memo(Post)
   