"use client"
import { prisma } from "@/lib/prisma";
import { createProduct } from "@/lib/server-actions";
import { useState } from "react";
import { format } from "date-fns";
import styles from "@/app/styles/Product.module.scss"

export default function NewProduct() {
   const name = "new sf"
   const [slug, setSlug] = useState("bwe");
   const submitProduct = async () => {
      try {
        const product = createProduct({
          name,
          slug
        })
        console.log({product})
      } catch (error) {
        console.log(error);
      }
    };
  return (
   <div className={styles.product}>
      <div className="container">
         <form className={styles.product_form}>
             <input type="email" placeholder="Enter your email" />
             <input type="Title" placeholder="Enter your titlte for a post" />
             <button onClick={submitProduct}>asdasda</button>
         </form>
      </div>
   </div>
 
 
  );
}
 