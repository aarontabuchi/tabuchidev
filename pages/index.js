import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
import React from "react";
import Search from "../components/Search";
import Contact from "../components/Contact";
import { ExternalLink, ArrowDown } from "../components/svgs";
import Image from "next/image";

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
  const scrollToSearch = () => {
    gsap.to(window, { duration: 0.75, scrollTo: "#search" });
    searchInput.focus({ preventScroll: true });
  };

  useEffect(() => {
    const scrollButton = document.getElementById("scrollButton");
    const projects = document.getElementById("projects");
    const search = document.getElementById("search");
    const client = document.getElementById("client");
    const contact = document.getElementById("contact");

    gsap.defaults({ duration: 0.5 });

    const scrollDown = () => {
      if (projects.getBoundingClientRect().top > 10) {
        return gsap.to(window, {
          duration: 0.75,
          scrollTo: { y: "#projects" },
        });
      }
      if (search.getBoundingClientRect().top > 10) {
        return gsap.to(window, {
          duration: 0.75,
          scrollTo: { y: "#search" },
        });
      }
      if (client.getBoundingClientRect().top > 10) {
        return gsap.to(window, {
          duration: 0.75,
          scrollTo: { y: "#client" },
        });
      }
      if (contact.getBoundingClientRect().top > 10) {
        return gsap.to(window, {
          duration: 0.75,
          scrollTo: { y: "#contact", offsetY: -100 },
        });
      }
    };

    const scrollTop = () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: "#hello",
        onComplete: addScrollDown,
      });
    };

    const addScrollUp = () => {
      scrollButton.removeEventListener("click", scrollDown);
      scrollButton.addEventListener("click", scrollTop);
    };

    const addScrollDown = () => {
      scrollButton.removeEventListener("click", scrollTop);
      scrollButton.addEventListener("click", scrollDown);
    };

    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("click", scrollToSearch);
    addScrollDown();

    gsap.set("html", {
      "--background": colors["bg-yellow"],
      "--color": colors["font-purple"],
    });

    gsap.to("html", {
      "--background": colors["bg-green"],
      "--color": colors["font-yellow"],
      scrollTrigger: {
        trigger: "#prettywiki",
        start: "top 80%",
        end: "+=100",
        toggleActions: "none play none reverse",
      },
    });

    gsap.to("html", {
      immediateRender: false,
      "--background": "#FFF",
      "--color": "#222",
      scrollTrigger: {
        trigger: "#search",
        start: "top 60%",
        end: "+=200",
        toggleActions: "none play none reverse",
      },
    });

    gsap.to("html", {
      immediateRender: false,
      "--background": colors["bg-beige"],
      "--color": colors["font-indigo"],
      scrollTrigger: {
        trigger: "#client",
        end: "+=100",
        toggleActions: "none play none reverse",
      },
    });

    gsap.to("html", {
      immediateRender: false,
      "--background": colors["bg-olive"],
      "--color": colors["font-dark-blue"],
      scrollTrigger: {
        trigger: "#contact",
        start: "top 90%",
        end: "+=200",
        toggleActions: "none play none reverse",
      },
    });

    gsap.to("#scrollButton", {
      rotate: 180,
      onComplete: addScrollUp,
      scrollTrigger: {
        trigger: "#send",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to("#scrollButton", {
      onComplete: addScrollDown,
      scrollTrigger: {
        trigger: "#send",
        toggleActions: "reset none none play",
      },
    });

    gsap.from("#prettywikicontent", {
      duration: 1,
      yPercent: 100,
      scrollTrigger: {
        trigger: "#projects",
        start: "bottom 70%",
        end: "+=100",
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
        <img
            src="/laptop.png"
            alt="Aaron using his laptop"
            width="2851"
            height="1621"
          />
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
            <ExternalLink />
          </a>
          ), as well as laboriously hand-coding my résumé in HTML and CSS (
          <a
            href="https://github.com/aarontabuchi/resume"
            target="_blank"
            rel="noopener"
            role="button"
            tabIndex={0}
          >
            Github
            <ExternalLink />
          </a>
          ). I'm seeking a position that challenges me to learn and grow every
          day.
        </p>
      </section>
      <button id="scrollButton" className={styles.scrollButton} aria-label="Scroll Button">
        <ArrowDown />
      </button>
      <h1 id="projects">Projects</h1>
      <section className={styles.prettywiki} id="prettywiki">
        <div id="prettywikicontent">
          <h2>PrettyWiki</h2>
          <p>
            A Wikipedia redesign. It sports a search bar with 23+ features
            replicated from Google's search bar and Wikipedia article pages in
            the styles and feel of Medium.
          </p>
          <div className={styles.buttons}>
            <button type="button" onClick={scrollToSearch}>
              Test it live
              <ArrowDown />
            </button>
            <a
              href="https://github.com/aarontabuchi/prettywiki"
              target="_blank"
              rel="noopener"
              className={styles.fakeButton}
            >
              Learn more
              <ExternalLink />
            </a>
          </div>
        </div>
      </section>
      <section className={styles.searchContainer} id="search">
        <Search />
      </section>
      <section id="client" className={styles.client}>
        <h2>Client Website</h2>
        <p>
          I leveraged Next.js's static site generation to pre-render this React
          website, maximizing performance and SEO to achieve a perfect 100
          Lighthouse score.
        </p>
        <a
          href="https://akashachamberlain.com/portfolio/"
          target="_blank"
          rel="noopener"
          className={styles.fakeButton}
        >
          See it live
          <ExternalLink />
        </a>
        <div className={styles.image}>
          <img
            src="/clientsiterecording.gif"
            alt="Client site laptop version"
            layout="responsive"
            width="800"
            height="645"
          />
        </div>
      </section>
      <h1 id="contact">Contact</h1>
      <section id="end" className={styles.contact}>
        <Contact />
      </section>
      <footer>
        <span>
          Designed and Coded by Aaron Tabuchi |{" "}
          <a
            href="https://github.com/aarontabuchi/tabuchidev"
            target="_blank"
            rel="noopener"
          >
            Github
            <ExternalLink />
          </a>
        </span>
      </footer>
    </div>
  );
}
