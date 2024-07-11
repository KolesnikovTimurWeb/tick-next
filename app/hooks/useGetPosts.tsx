"use client"

import axios from "axios"
import { useInfiniteQuery, useQuery } from "react-query"

const useGetPosts =() => {

   const {data,isLoading,fetchNextPage} = useInfiniteQuery({
      queryKey:['news'],
      queryFn: async({pageParam = 1})=>{
         const {data} = await  axios.get(`https://newsapi.org/v2/everything?q=REACT.js&page=${pageParam}&language=en&sortBy=relevancy&pageSize=10&apiKey=501d70ab741c433b99e394a6d8129295`)
         if(data.articles < 1) return null
         return data.articles
      },
      initialPageParam:1,
      getNextPageParam:(_,pages) => {
         return pages.length + 1
      },
      staleTime: 1000 * 30, // 30s 
      refetchOnWindowFocus: false,
    refetchOnMount: false,
   })
   // const {data,isLoading} = useQuery({
   //    queryKey:['news'],
   //    queryFn: async()=>{
   //       const {data} = await  axios.get('https://newsapi.org/v2/everything?q=REACT.js&page=2&language=en&sortBy=relevancy&pageSize=10&apiKey=501d70ab741c433b99e394a6d8129295')
   //       return data.articles
   //    },
   //    staleTime: 1000 * 30, // 30s 
   //    refetchOnWindowFocus: false,
   //  refetchOnMount: false,
   // })
   console.log(data)
   return {data,isLoading,fetchNextPage}
}

export default useGetPosts