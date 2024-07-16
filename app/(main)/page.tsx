
import Image from "next/image";
import styles from "@/app/styles/Main.module.scss";
import { prisma } from "../../lib/prisma";
import About from "./components/About";
import Heading from "./components/Heading";
import Steps from "./components/Steps";
import More from "./components/More";
import Modeled from "./components/Modeled";
import { auth } from "@/auth";
import { getActiveProducts } from "@/lib/server-actions";
import { useSession } from "next-auth/react";


export default async function Home() {
  const products = await getActiveProducts()
  return (
   <div >
    
           <Heading/>
           <About/>
           {/* <Steps/> */}
           <More/>
           <Modeled/>
   </div>
 
 
  );
}
