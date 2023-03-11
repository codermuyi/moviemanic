import styles from '@/styles/Page.module.css'
import Navbar from "./Navbar"
import Search from "../Search"
import Footer from "./Footer"

const PageLayout = (props: any) => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.col1}>
          <Navbar />
        </div>
        <div className={styles.col2}>
          <div className={styles.content}>
            <Search />
            {props.children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PageLayout
