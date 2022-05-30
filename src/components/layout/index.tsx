import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@styles/Home.module.css";
import Button from "@components/button";
import { useRecoilValue } from "recoil";
import { cartAtom } from "@context/cart";

type LayoutProps = {
  title: string;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, title } = props;
  const cart = useRecoilValue(cartAtom);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css"
        />
      </Head>

      <main className="container mx-auto max-w-4xl">
        <Link href="/">
          <a>Home </a>
        </Link>
        <Link href="/cart">
          <Button>
            Cart <b>{cart.length}</b>
          </Button>
        </Link>
        <div style={{ minHeight: "80vh" }}>{children}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
