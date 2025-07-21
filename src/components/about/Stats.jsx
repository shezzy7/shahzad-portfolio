import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "../utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">FastAPI</span>
            <span className="chip">React</span>
            <span className="chip">LangChain</span>
            <span className="chip">OpenAI</span>
            <span className="chip">Vector DBs</span>
            <span className="chip">RAG</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Streamlit</span>
            <span className="chip">Chainlit</span>
            <span className="chip">Gemini</span>
            <span className="chip">FAISS</span>
            <span className="chip">n8n</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
