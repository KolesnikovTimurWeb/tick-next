"use client"

import axios from "axios"
import { useQuery } from "react-query"

const useGetPosts =() => {
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

   return {data,isLoading}
}

export default useGetPosts