
import { prisma } from "@/lib/prisma";
import styles from "@/app/styles/Product.module.scss";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";
import { getOwnerProducts } from "@/lib/server-actions";
import CustomMotionDiv from "@/app/CustomMotionDiv";


export default async function Products() {
   const authenticatedUser = await auth();

   const products =await getOwnerProducts()
  return (
   <div className={styles.product}>
      <div className="container">
         <h2 className={styles.product_title}>📁My products</h2>
         <p className={styles.product_desc}>
            Looks like you have not created any products yet, click the button
            below to get started
          </p>
         {products.length === 0 ? (
        <div className={styles.product_nofound}>
          <h1 className="text-3xl font-bold">No products found </h1>
          <p className="text-gray-500">
            Looks like you have not created any products yet, click the button
            below to get started
          </p>
        </div>
      ) : (
         <div className={styles.product_block}>
            {products.map((item)=>(
               <div className={styles.product_card}>
                  <h2>{item.name}</h2>
                  
                  <div
                  className={styles.product_card_category}>
                  {item.categories.map(item => (
                     <CustomMotionDiv
                     whileTap={{scale:.8}}
                     whileHover={{scale:.9}}
                     >
                        {item.name}
                     </CustomMotionDiv>
                  ))}
                  </div>

               </div>
            ))}
         </div>
       
   
      )}
      </div>
   </div>
 
 
  );
}
