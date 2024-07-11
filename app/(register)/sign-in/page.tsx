
"use client"
import { prisma } from "@/lib/prisma";
import styles from "@/app/styles/Startups.module.scss";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
   <div className={styles.startups}>
      <div className="container">
        <button onClick={()=> signIn('google',{redirect:false})}>CLick</button>
      </div>
   </div>
 
 
  );
}
