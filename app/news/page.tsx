"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './components/Post'
import styles from "@/app/styles/News.module.scss"

export default function News() {
   const [data,setData] = useState([])
   const [loading,setLoading] = useState(true)
   useEffect(()=>{
      axios.get('https://newsapi.org/v2/everything?q=REACT&page=2&sortBy=relevancy&pageSize=10&apiKey=501d70ab741c433b99e394a6d8129295')
      .then((res)=> setData(res.data.articles))
      .then((res)=> setLoading(false))
      .catch((err)=> console.log(err))
      console.log(data)
   },[])
  return (
    <div style={{marginTop:150}}>
         <button onClick={()=>console.log(...data)}>Press</button>
         {!loading && data !== null && data.map((item,index)=>(
            <Post key={index} item={item}/>
         ))}
    </div>
  )
}
