import Image from "next/image";
import styles from "@/app/styles/Main.module.scss";
import { prisma } from "../../lib/prisma";
import About from "./components/About";
import Heading from "./components/Heading";
import Steps from "./components/Steps";


export default async function Home() {

  const getStaticProps = async () => {
    const feed = await prisma.post.findMany();
    console.log(feed)
    return {
      props: { feed },
      revalidate: 10,
    };
  };

  const posts = await getStaticProps()


  return (
   <div >
           <Heading/>
           <About/>
           <Steps/>
   </div>
 
 
  );
}
