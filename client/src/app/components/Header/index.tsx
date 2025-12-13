"use client";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>
          Your health. <br />
          Our mission.
        </h1>
        <p className={styles.headerSubtitle}>Our organizational tree</p>
      </div>
      
      <div className={styles.headerImageContainer}>
        <Image
          src="/img.png"
          alt="Health care people walking"
          width={700}
          height={500}
          style={{
            position: "absolute",
            top: "-170px",
            left: "50%",
            transform: "translateX(-40%)",
            objectFit: "contain",
          }}
        />
      </div>
    </header>
  );
}