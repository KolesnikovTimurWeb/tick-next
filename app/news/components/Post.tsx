   import React from 'react'
import styles from "@/app/styles/News.module.scss"

   interface PostProps{
      title:string,
   }
   const Post = ({title}:PostProps) => {
     return (
       <div className={styles.news_post}>  
         <div className={styles.news_post_text}>
         <h2>{title}</h2>
         <h4>{title}</h4>

         </div>
       </div>
     )
   }
   
   export default Post
   