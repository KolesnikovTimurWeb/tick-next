import Image from "next/image";
import styles from "./page.module.css";
import prisma from "../lib/prisma";
import { GetStaticProps } from "next";

const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.user.findMany();
  console.log(feed)
  return {
    props: { feed },
    revalidate: 10,
  };
};
export default async function Home() {
  const posts = await getStaticProps()
  console.log({ posts })
  return (
    <main className={styles.main}>
      <button>Click</button>
    </main>
  );
}
