   import React from 'react'
import styles from "@/app/styles/News.module.scss"

   interface PostProps{
      title:string,
   }
   const Post = ({title}:PostProps) => {
     return (
       <div>  
         <div className={styles.news_post_text}>
         {title}

         </div>
       </div>
     )
   }
   
   export default Post
   