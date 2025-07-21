import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
  title: "Wonderlust",
  imgSrc: "assets/img/wonderlust.png", // Replace with your actual image path
  code: "https://github.com/shezzy7/wonderlust",
  projectLink: "https://wonderlust-6tpj.onrender.com/listings",
  tech: ["MongoDB Atlas", "Express.js", "Node.js", "EJS", "Cloudinary", "Google Maps", "Passport.js", "Render"],
  description:
    "A full-stack MERN project inspired by Airbnb, where users can list and book places to stay with advanced filtering, map views, authentication, and more.",
  modalContent: (
    <>
      <p>
        <strong>Wonderlust</strong> is a feature-rich Airbnb-like web application built using the MERN stack. Users can add their own listings, explore available stays, apply filters, view map locations, and post reviews.
      </p>
      <p>
        The app uses <strong>MongoDB Atlas</strong> for scalable cloud-based database storage and <strong>Cloudinary</strong> for image management. Each listing integrates <strong>Google Maps</strong> for geolocation, and user authentication is handled via <strong>Passport.js</strong>.
      </p>
      <p>
        The frontend is developed with <strong>EJS templates</strong> for dynamic UI rendering. Backend APIs are managed using <strong>Express.js</strong> and <strong>Node.js</strong>. Deployed live using <strong>Render</strong>.
      </p>
      <p>
        Features include user authorization, review system, booking connectivity, and responsive UI—making it a complete demonstration of practical MERN stack application.
      </p>
    </>
  ),
},
  {
    title: "Automated Invoice Sender",
    imgSrc: 'assets/img/n8n.png',
    code: "https://github.com/shezzy7",
    projectLink: "#",
    tech: ["n8n", "Simple Memory", "Gmail", 'Gemini'],
    description:
      "A no-code/low-code data pipeline that automates incoming bills only to your company's emails,reads them and then send an email of invoice details to company's finance managment system.",
    modalContent: (
      <>
        <p>
          Designed and implemented a comprehensive no-code/low-code data pipeline using n8n to automate receipt receiving and invoice generating and sending this through gmail to finance management.
        </p>
      </>
    ),
  },
  {
    title: "Talk with Your PDF",
    imgSrc: "assets/img/talkpdf.png",
    code: "https://github.com/numanabubakar",
    projectLink: "https://askfrompdf.streamlit.app/",
    tech: ["Python", "FastAPI", "Streamlit", "LangChain", "FAISS", "OpenAI"],
    description:
      "A PDF-based AI assistant enabling users to upload documents and interact with them conversationally using semantic search.",
    modalContent: (
      <>
        <p>
          Developed a sophisticated PDF-based AI assistant that enables users to upload documents and interact with them conversationally, providing instant access to document content through natural language queries.
        </p>
        <p>
          Built with Streamlit for an intuitive and responsive user interface, combined with FastAPI for robust backend processing. Utilized LangChain for sophisticated prompt orchestration and OpenAI models for natural language responses.
        </p>
        <p>
          Integrated FAISS (Facebook AI Similarity Search) for efficient document embedding and semantic retrieval, enabling fast and accurate search across large document collections.
        </p>
        <p>
          Implemented a conversational chat interface that allows users to ask questions directly from uploaded PDFs, with the system providing contextually relevant answers based on document content.
        </p>
        <p>
          The system supports multiple document formats and provides real-time processing, making it ideal for research, document analysis, and knowledge extraction from large text corpora.
        </p>
      </>
    ),
  },
  {
    title: "AI Roaster",
    imgSrc: "assets/img/roast.png",
    code: "https://github.com/shezzy7/roastbot",
    projectLink: "https://roastbott.onrender.com/",
    tech: ["Chainlit", "OpenAI SDK", "Gemini", "Python", "UV"],
    description:
      "An engaging AI-based conversation app that playfully 'roasts' users with humorous and witty responses using multiple LLMs.",
    modalContent: (
      <>
        <p>
          Created an engaging AI-based conversation app designed to playfully "roast" users with humorous and witty responses, providing entertainment through intelligent AI interactions.
        </p>
        <p>
          Built using Chainlit for real-time chat UI, providing a smooth and responsive conversational experience with instant message delivery and dynamic interface updates.
        </p>
        <p>
          Integrated both OpenAI and Gemini models to dynamically generate diverse and entertaining outputs, ensuring varied and creative responses that keep conversations engaging and unpredictable.
        </p>
        <p>
          Implemented real-time conversational roasting using advanced LLMs, with sophisticated prompt engineering to ensure responses are humorous while maintaining appropriate boundaries and user safety.
        </p>
        <p>
          The application demonstrates advanced AI integration capabilities, showcasing how multiple language models can be orchestrated to create engaging and interactive user experiences.
        </p>
      </>
    ),
  },
  
];
