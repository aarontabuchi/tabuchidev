import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <section>
        <h1>404</h1>
        <h2>I'm sorry but I couldn't find the page you're looking for</h2>
        <p>
          <Link href="/">
            <a>Back to home page</a>
          </Link>
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
          background: #F59D91;
          height: 100vh;
          text-align: center;
          padding: 2rem;
          color: #7A2244;
        }
      `}</style>
    </>
  );
}
