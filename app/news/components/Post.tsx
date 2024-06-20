   import React from 'react'
import styles from "@/app/styles/News.module.scss"

   interface PostProps{
      item: Array<Object>,
   }
   const Post = ({item}:PostProps) => {
     return (
       <div className={styles.news_post}>  
         <div className={styles.news_post_text}>
         <h2>{item.title}</h2>

         </div>
       </div>
     )
   }
   
   export default Post
   