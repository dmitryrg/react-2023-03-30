import React, { useContext } from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";
import Link from "next/link";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.root, className)}>
      <Image src="/images/logo.png" width={115} height={18} alt="" />
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Главная
        </Link>
        <Link href="/restaurants" className={styles.link}>
          Рестораны
        </Link>
        <Link href="/cart" className={styles.link}>
          Корзина
        </Link>
      </div>
    </header>
  );
};
