import { Header } from "@/components/Header/Header";
import React from "react";

import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <Link href="/contacts/about-us" className={styles.link}>
          Info about us
        </Link>
        <Link href="/contacts/addresses" className={styles.link}>
          Addresses
        </Link>
      </footer>
    </div>
  );
};
