

import { prisma } from "../../lib/prisma";
import styles from "@/app/styles/Startups.module.scss";
import StartupsCard from "../components/StartupsCard";



export default async function Startups() {

  const getStaticProps = async () => {
    const products = await prisma.product.findMany();
    return products;
  };
 const users = getStaticProps()
 getStaticProps()

  return (
   <div className={styles.startups}>
      <div className="container">
         <StartupsCard/>
      </div>
   </div>
 
 
  );
}
