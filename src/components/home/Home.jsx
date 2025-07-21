import React from "react";
import { SideBar } from "../nav/SideBar";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { Hero } from "../hero/Hero";
import { About } from "../about/About";
import { Projects } from "../projects/Projects";

import { Experience } from "../experience/Experience";
import { Certificates } from "../certificates/Certificates";
import { Contact } from "../contact/Contact";

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />

          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};
