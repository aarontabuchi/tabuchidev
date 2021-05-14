import Head from "next/head";
import Link from "next/link";

export default function Success() {
  return (
    <>
      <Head>
        <title>Message received</title>
      </Head>
      <section>
        <h1>Success</h1>
        <h2>Thank you, we received your message</h2>
        <p>
          <Link href="/">
            <a>Back to home page</a>
          </Link>
        </p>
      </section>
      <style jsx>{`
        h1 {
          font-size: 15vw;
          background: linear-gradient(
            to right,
            rgba(57, 26, 150, 1) 0%,
            rgba(134, 48, 196, 1) 50%,
            rgba(255, 0, 228, 1) 100%
          );
          background-size: 400% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: flow 3s ease-in-out infinite alternate-reverse;
        }
        @keyframes flow {
          to {
            background-position: 75%;
          }
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
          font-family: "Work Sans", sans-serif;
        }
      `}</style>
    </>
  );
}
