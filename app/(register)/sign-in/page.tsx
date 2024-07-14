
"use client"
import { prisma } from "@/lib/prisma";
import styles from "@/app/styles/SignIn.module.scss";
import { signIn } from "next-auth/react";
import Image from "next/image";
import google from "@/assets/google.svg";
import github from "@/assets/github.svg";

export default function SignIn() {
  return (
   <div className={styles.signIn}>
      <div className="container">
      <div className={styles.signIn_text}>
        <h2>See what's new in tech</h2>
        <p>Join our community of friendly folks discovering and sharing the latest product in tech</p>
      </div>
      <div className={styles.signIn_buttons}>

         <button onClick={()=> signIn('google',{redirect:false})}>
          <Image src={google} width={24} height={24} alt="icon"/>
          Sign in with Google
        </button>
        <button onClick={()=> signIn('github',{redirect:false})}>
          <Image src={github} width={24} height={24} alt="icon"/>
          Sign in with Github
          </button>
      </div>

 
      </div>
   </div>
 
 
  );
}
