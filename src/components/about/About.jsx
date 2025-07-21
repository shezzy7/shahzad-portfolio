import { MyLinks } from "../nav/components/MyLinks";
import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Shahzad, I&apos;m an AI Full Stack Engineer with a passion for building intelligent applications and AI-powered solutions. I specialize in integrating cutting-edge AI technologies like Large Language Models (LLMs), RAG-based systems, and custom AI pipelines into full-stack applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My expertise spans the entire AI development stack - from budilding AI agents using LLMs  to building robust RAG (Retrieval-Augmented Generation) systems that provide contextually relevant responses. I enjoy crafting intelligent applications that leverage AI to solve real-world problems, whether it's automating data pipelines, creating conversational AI assistants, or building document analysis systems.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              On the full-stack side, I work with modern technologies like MERN, FastAPI, Python, and various AI frameworks including LangChain, OpenAI SDK, and vector databases. I have experience building scalable architectures that seamlessly integrate AI capabilities with traditional web applications, ensuring both performance and user experience are optimized.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
  

I&apos;m excited to take on new projects and collaborate with teams to bring innovative ideas to life. If you have any questions or would like to discuss potential opportunities, please feel free to reach out. Let&apos;s build something amazing together!"
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
