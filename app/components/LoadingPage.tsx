import styles from "@/app/styles/Loader.module.scss"
import Loader from "./Loader"
const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
         <Loader/>
    </div>
  )
}

export default LoadingPage
