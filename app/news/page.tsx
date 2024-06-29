"use client"
import axios from 'axios'
import React, {memo, useMemo, useState } from 'react'
import Post from './components/Post'
import styles from "@/app/styles/News.module.scss"
import { useQuery } from 'react-query'
import { PostsList } from './components/PostsList'

const MemoizedPost = memo(Post)
export const page =() => {
   const [loading,setLoading] = useState(true)
   const [fetch,setFetch] = useState(true)
   console.log("news")
   const {data,isLoading} = useQuery({
      queryKey:['news'],
      queryFn: async()=>{
         console.log("feta")
         const {data} = await  axios.get('https://newsapi.org/v2/everything?q=REACT.js&page=2&language=en&sortBy=relevancy&pageSize=10&apiKey=501d70ab741c433b99e394a6d8129295')
         return data.articles
      },
      staleTime: 1000 * 30, // 30s 
   refetchOnWindowFocus: false,
   refetchOnMount: false,

   })
   const memoizedCommunityPosts = useMemo(() => {
      return data?.map((post) => (
        <MemoizedPost key={post.title} item={post} />
      ));
    }, [data]);
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
export default page