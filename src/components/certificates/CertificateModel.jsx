import styles from "./certificatemodal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import {  AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export const CertificateModel = ({
  modalContent,
  certificateLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  tech,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <img
          className={styles.modalImage}
          src={imgSrc}
          alt={`An image of the ${title} certificate.`}
        />
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Certificate Links<span>.</span>
            </p>
            <div className={styles.links}>
              <Link to={certificateLink} target="_blank" rel="noopener noreferrer">
                <AiOutlineExport size="2.8rem" />
                
                </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.getElementById("root"));
};
