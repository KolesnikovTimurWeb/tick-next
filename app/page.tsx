import Image from "next/image";
import styles from "./page.module.css";
import { prisma } from "../lib/prisma";

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
  console.log({ posts })
  return (
    <main className={styles.main}>
      <button>Click</button>
    </main>
  );
}
