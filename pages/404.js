import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <section>
        <h1>404</h1>
        <h2>I couldn't find the page you're looking for</h2>
        <p>
          <Link href="/">
            <a>Click here</a>
          </Link>{" "}
          to go back home
        </p>
      </section>
      <style jsx>{`
        h1 {
          font-size: 20vw;
        }
        h2 {
          font-size: 2rem;
        }
        p {
          padding-top: 1rem;
          font-size: 1.5rem;
        }
        section {
          background: #fcdb86;
          height: 100vh;
          text-align: center;
          padding: 2rem;
          color: #391a96;
        }
      `}</style>
    </>
  );
}
