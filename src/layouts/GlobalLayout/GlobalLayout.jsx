import styles from './GlobalLayout.module.css';
import { useLocation } from "react-router-dom";

function GlobalLayout({ children }) {
  const isDesktop = window.innerWidth > 992;
  const currentPage = useLocation().pathname.split("/")[1];

  return (
    <div className={styles.container}>
      <div style={{width: isDesktop && (
          currentPage!=="inventary" ) ?
            "90%" : "100%",
        marginLeft: isDesktop ? 
          "auto" : undefined,
        marginRight: isDesktop ?
          "auto" : undefined 
        }}
        className={currentPage!==""?styles.mainContent:""}
      >
        {children}
      </div>
    </div>
  );
}

export default GlobalLayout;