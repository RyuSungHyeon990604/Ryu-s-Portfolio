"use client";
import React from "react";
import styles from "./header.module.css"
export default function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Ryu's Portfolio</span>
      <div className={styles.menu}>    
          <div className={styles.menu_item}
          onClick={()=>handleScroll("aboutMe_position")}>
            About me
          </div>
          <div className={styles.menu_item}
          onClick={()=>handleScroll("skills_position")}>
            Skills
          </div>
          <div className={styles.menu_item}
          onClick={()=>handleScroll("projects_position")}>
            Projects
          </div>
      </div>
    </header>
  );
}
