import styles from './GlobalLoader.module.css'

export default function GlobalLoader() {
  return (
    <div className={styles.loaderOverlay}>
      <span className={styles.loader}></span> 
    </div>
  )
}

