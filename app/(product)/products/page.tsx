
import { prisma } from "@/lib/prisma";
import styles from "@/app/styles/Product.module.scss";
import { getActiveProducts, getActiveUsers } from "@/lib/server-actions";


export default async function Products() {
   const products = await getActiveProducts()
  return (
   <div className={styles.allproduct}>
      <div className="container">
         <div className={styles.allproduct_block}>
            {products.map((item,index)=> (
               <div className={styles.allproduct_card}>
                  <h2>{item.name}</h2>
                  
                  <div className={styles.allproduct_card_date}>
                  
                  <span>{item.createdAt.toDateString()}</span>
                 

                  </div>

                  <div className={styles.allproduct_categories}>
                     {item.categories.map((item, index)=> (
                        <div className={styles.allproduct_card} key={index}>
                           <p>{item.name}</p>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
     
      </div>   
   </div>
 
 
  );
}
