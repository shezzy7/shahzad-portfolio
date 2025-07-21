import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";
import { Certificate } from "./Certificate";
import styles from "./certificates.module.scss";
export const Certificates = () => {
  return (
    <section className="section-wrapper" id="certificates">
      <SectionHeader title="Certificates" dir="r" />

      <div className={styles.certificates}>
        {certificates.map((certificate) => {
          return <Certificate key={certificate.title} {...certificate} />;
        })}
      </div>
    </section>
  );
};

const certificates = [
  {
  title: "Develop Generative AI Applications: Get Started",
  imgSrc: "assets/img/GEN_AI_Course.png", // Replace with your actual image path
  certificateLink: "https://www.coursera.org/account/accomplishments/verify/NQ71P40AVV5W",
  tech: ["python" , "gemini-2.5-flash"],
  description:
    "Coursera's Course taught by IBM.",
  modalContent: (
    <> 
      <p>This course enabled me to develop Generative AI Application</p>
      <p>It developed my foundations in the field of AI</p>
      <p>I used python and llms api keys to build Gen AI Application</p>
    </>
  ),
} , 
  {
  title: "Build RAG Applications ",
  imgSrc: "assets/img/RAG_certificate.png", // Replace with your actual image path

  certificateLink: "https://www.coursera.org/account/accomplishments/verify/U706GCPE2OBY",
  tech: ["python" , "gemini-2.5-flash" , 'Vector Databases'],
  description:
    "Coursera's Course taught by IBM.",
  modalContent: (
    <> 
      <p>This course enabled me to develop RAG Base GEN AI application </p>
      <p>In this course i have seen that how things are being work at core</p>
      <p>I used python  , vector databases and llms api keys to build RAG base Gen AI Application</p>
    </>
  ),
}
  
];
