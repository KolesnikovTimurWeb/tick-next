"use client"
import axios from 'axios'
import React, {memo, useMemo, useState } from 'react'
import Post from './components/Post'
import styles from "@/app/styles/News.module.scss"
import useGetPosts from '../hooks/useGetPosts'

const MemoizedPost = memo(Post)
export default function News() {
   const [loading,setLoading] = useState(true)
   const [fetch,setFetch] = useState(true)
   const {data,isLoading} = useGetPosts()

  return (
    <div style={{marginTop:150}}>
      <div className="container">
      <button onClick={()=>setLoading(!loading)}>Press</button>
         {!isLoading && data?.map((post) => (
        <Post key={post.title} item={post} />
      ))}
      </div>
 
    </div>
  )
}