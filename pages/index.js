import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
import React from "react";
import Search from "./components/Search";

export default function Home() {
  const colors = {
    "bg-yellow": "#FCDB86",
    "font-purple": "#391A96",
    "bg-green": "#356563",
    "font-yellow": "#FEF3C2",
    "bg-olive": "#7DABA3",
    "font-dark-blue": "#00116A",
    "bg-light-yellow": "#EBE8B6",
    "font-pale-blue": "#2252F5",
    "bg-salmon": "#F59D91",
    "font-burgundy": "#7A2244",
    "bg-beige": "#E4D3B9",
    "font-indigo": "#00116A",
  };

  
  useEffect(() => {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("click", () => {
      gsap.to(window, { duration: 1, scrollTo: "#search"});
      searchInput.focus({ preventScroll: true });
    });

    gsap.to("#main", {
      backgroundColor: colors["bg-green"],
      color: colors["font-yellow"],
      scrollTrigger: {
        trigger: "#prettywiki",
        start: "top 80%",
        end: "+=100",
        toggleActions: "none play none reverse",
      },
    });

    // gsap.from("#hello", {
    //   opacity: 0,
    //   y:100,
    //   duration: .5,
    // })

    // gsap.from("#laptop", {
    //   opacity: 0,
    //   duration: 1,
    //   y: 100,
    //   x: -50,
    // });

    gsap.from("#prettywikicontent", {
      y: 500,
      scrollTrigger: {
        trigger: "#prettywiki",
        end: "+=500",
        scrub: 0.5,
      },
    });

    gsap.to("#main", {
      immediateRender: false,
      backgroundColor: "#FFF",
      color: "#222",
      scrollTrigger: {
        trigger: "#search",
        start: "top 60%",
        end: "+=200",
        toggleActions: "none play none reverse",
      },
    });
  }, []);

  return (
    <div className={styles.main} id="main">
      <Head>
        <title>Aaron Tabuchi · Web Developer</title>
        <meta
          name="Description"
          content="Aaron Tabuchi web developer. Meticulous software engineer who takes pride in his work and mastering his skills."
        ></meta>
      </Head>
      <section className={styles.header}>
        <h1 id="hello">
          Hello!<br></br>
          I'm Aaron
        </h1>
        <div className="hero">
          <img src="./laptop.png" alt="Aaron using his laptop" id="laptop" />
        </div>
        <p>
          I'm a meticulous software developer who takes pride in my work and
          mastering my skills. My exacting nature led me to finding a live bug
          on Google's homepage (
          <a
            href="https://github.com/aarontabuchi/prettywiki#bonus-google-homepage-visual-bug"
            target="_blank"
            rel="noopener"
          >
            details here
          </a>
          ), as well as laboriously hand-coding my résumé in HTML and CSS (
          <a
            href="https://github.com/aarontabuchi/resume"
            target="_blank"
            rel="noopener"
          >
            Github
          </a>
          ). I'm seeking a position that challenges me to learn and grow every
          day.
        </p>
      </section>
      <section className={styles.prettywiki} id="prettywiki">
        <div id="prettywikicontent">
          <h1 id="h1">PrettyWiki</h1>
          <p>
            A Wikipedia redesign. It sports a search bar with 23+ features
            replicated from Google's search bar and Wikipedia article pages in
            the styles and feel of Medium.
          </p>
          <p>Scroll down to test it out live, or click here to learn more.</p>
        </div>
      </section>
      <div className={styles.searchContainer} id="search">
        <Search />
      </div>
      <section>
        <h1>Some content</h1>
      </section>
    </div>
  );
}
