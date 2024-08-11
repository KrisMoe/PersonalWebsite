
 import { Link } from 'react-router-dom';
import styles from "../css/navbar.module.css"

function NavBar() {
  return (
    <div className={styles.navContainer}>
    <div className={styles.navBar} >
        <Link  to="/" className={styles.navBrand}>GenderSurvey</Link>
        <Link  to="/survey"  className={styles.navLink}>Survey</Link>
        {/* <Link  to="/results"  className={styles.navLink}>Results</Link> */}
        <Link  to="/random"  className={styles.navLink}>Random</Link>
        <Link  to="/aboutme"  className={styles.navLink}>About Me</Link>
       
       
    </div>
    </div>
  );
}

export default NavBar;