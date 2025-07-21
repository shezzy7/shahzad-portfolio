import { OutlineButton } from "../Button/OutlineButton";
import { Reveal } from "../utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I'm Shahzad<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m an <span>AI Full Stack Engineer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;ve spent the last 2 years building AI-powered applications and full-stack solutions. I specialize in AI integration, RAG-based systems, and creating intelligent applications that bridge the gap between cutting-edge AI technology and practical business solutions😉
            Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <OutlineButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </OutlineButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
