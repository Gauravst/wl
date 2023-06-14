import React from "react";
import  styles from "@/app/styles/loading.module.css"

export default function loading() {
  return (
    <section className={styles.loading_section}>
      <div className={styles.loading}>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
