"use client"

import axios from "axios"
import { Group } from "next/dist/shared/lib/router/utils/route-regex"
import { useInfiniteQuery, useQuery } from "react-query"

interface News {

   id: number;
   name: string;
 }

const useGetPosts =() => {
   const fetchNews = async ({ pageParam = 1 }) => {
      const { data } = await axios.get(`https://newsapi.org/v2/everything?q=REACT.js&page=${pageParam}&language=en&sortBy=relevancy&pageSize=10&apiKey=501d70ab741c433b99e394a6d8129295`);
      if (data.articles.length < 1) return null;
      return data.articles;
    };
   const { data, isLoading, fetchNextPage } = useInfiniteQuery(
      'news',
      fetchNews,
      {
        getNextPageParam: (_, pages) => pages.length + 1,
        staleTime: 1000 * 30, // 30 seconds
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      }
    )
   return {data,isLoading,fetchNextPage}
}

export default useGetPosts