import Link from "next/link";
import styles from "./header.module.css"
export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Ryu's Portfolio</span>
      <div className={styles.menu}>    
          <div className={styles.menu_item}>
            About me
          </div>
          <div className={styles.menu_item}>
            Skills
          </div>
          <div className={styles.menu_item}>
            Projects
          </div>
      </div>
    </header>
  );
}
