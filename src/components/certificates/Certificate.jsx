import { Reveal } from "../utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import {Link} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {  AiOutlineExport } from "react-icons/ai";
import { CertificateModel } from "./CertificateModel";
import styles from "./certificates.module.scss";

export const Certificate = ({
  modalContent,
  description,
  certificateLink,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.certificateImage}
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} certificate.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.certificateCopy}>
          <Reveal width="100%">
            <div className={styles.certificateTitle}>
              <h4>{title}</h4>
              <div className={styles.certificateTitleLine} />


             
              <a href={certificateLink} target="_blank" rel="noopener noreferrer">
                <AiOutlineExport size="2.8rem" />
                </a>

            </div>
          </Reveal>
          <Reveal>
            <div className={styles.certificateTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.certificateDescription}>
              {description}{" "}
              <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <CertificateModel
        modalContent={modalContent}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
