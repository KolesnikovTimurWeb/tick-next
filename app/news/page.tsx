"use client"
import axios from 'axios'
import React, {memo, useEffect, useMemo, useRef, useState } from 'react'
import Post from '../components/Post'
import styles from "@/app/styles/News.module.scss"
import useGetPosts from '../hooks/useGetPosts'
import { useIntersection } from '@mantine/hooks'
import { signIn, signOut } from "next-auth/react";
import { auth } from '@/auth'

const SkeletonPost =() =>{
  return (
    <div className={styles.news_skeleton}>
          <span></span>
          <span></span>
          <span></span>
    </div>
  )
}
export default function News() {
   const [loading,setLoading] = useState(true)
   const [fetch,setFetch] = useState(true)
   const {data,isLoading,fetchNextPage} = useGetPosts()
   const lastPostRef = useRef<Element>(null)

   const {ref,entry} = useIntersection({
    root:lastPostRef.current,
    threshold:1,
   })
   useEffect(()=> {
    if(entry?.isIntersecting) fetchNextPage()

   }, [entry])
   
    const posts = data?.pages.flatMap((page)=>page)
  return (
    <div style={{marginTop:150}}>
      <div className="container">
      {isLoading && new Array(6).fill(2).map((item,index) => (
        <SkeletonPost key={index}/>
      ))}
      {!isLoading && posts?.map((post,index)=> {
          if(post === null) return null
          if(index === posts?.length - 1) {
            return (
              <div ref={ref} key={index}> 
              <Post  item={post}  index={index}/>
               </div>
            )
          }
            
        return (
          <Post item={post} key={index} index={index}/> 
        )
      })}

      </div>
 
    </div>
  )
}


