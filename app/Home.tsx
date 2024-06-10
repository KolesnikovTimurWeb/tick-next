import styles from "./page.module.css";
import { getStaticProps } from "./page";

export default function Home() {
   const posts = getStaticProps();
   console.log(posts);
   return (
      <main className={styles.main}>

      </main>
   );
}
