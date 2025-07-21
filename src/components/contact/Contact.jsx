import { Reveal } from "../utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              to="https://www.linkedin.com/in/shahzad-hussain-57672725b/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link
            to="https://mail.google.com/mail/?view=cm&fs=1&to=shahzadhussain72242@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>shahzadhussain72242@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
