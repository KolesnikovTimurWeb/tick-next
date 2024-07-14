"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../widgets/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { Next13ProgressBar } from 'next13-progressbar';
import Footer from "@/widgets/Footer";
import { auth } from "@/auth";
import AuthProvider from "./AuthProvider";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });
const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});
export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className }>
        
       <Suspense fallback={"Loading"}>    
        <QueryClientProvider client={queryClient}>

        <Next13ProgressBar height="2px" color="#111" options={{ showSpinner: false }} showOnShallow />

            <AuthProvider>
            <Header/>
              {children}
              <Footer/>

          </AuthProvider>

        </QueryClientProvider>
       </Suspense>
       
      </body>
    </html>
  );
}
