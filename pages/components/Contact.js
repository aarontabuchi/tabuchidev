import styles from "../../styles/Contact.module.css";
import {LinkedinIcon, MailIcon, GithubIcon} from "./svgs";

export default function Contact() {
  return (
    <>
      <div className={styles.icons}>
        <a href="mailto:aaronbuchi@gmail.com">
          <MailIcon />
        </a>
        <a
          href="https://github.com/aarontabuchi/"
          target="_blank"
          rel="noopener"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/aarontabuchi/"
          target="_blank"
          rel="noopener"
        >
          <LinkedinIcon />
        </a>
      </div>
      <form
        className={styles.contact}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <legend>
          <h3>Message me</h3>
        </legend>
        <label>
          Name
          <input type="text" name="name" placeholder="Roger Federer" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="roger@rf.com" />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="Let's play!"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
