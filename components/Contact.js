import styles from "../styles/Contact.module.css";
import { LinkedinIcon, MailIcon, GithubIcon } from "./svgs";

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
        name="contact-form"
        method="POST"
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <legend>
          <h2>Message me</h2>
        </legend>
        <label>
          Name
          <input type="text" name="name" placeholder="Roger Federer" required/>
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="thegoat@tennis.com" required/>
        </label>
        <label>
          Message
          <textarea name="message" placeholder="Let's play!" required></textarea>
        </label>
        <button type="submit" id="send">Send</button>
      </form>
    </>
  );
}
