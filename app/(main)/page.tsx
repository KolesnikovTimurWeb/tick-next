
import Image from "next/image";
import styles from "@/app/styles/Main.module.scss";
import { prisma } from "../../lib/prisma";
import About from "./components/About";
import Heading from "./components/Heading";
import Steps from "./components/Steps";
import More from "./components/More";
import Modeled from "./components/Modeled";
import { auth } from "@/auth";


export default async function Home() {
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
