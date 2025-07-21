import { useState } from "react";
import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../Button/OutlineButton";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Heading = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.heading}>
      <div className={styles.desktop}>
        <div className={styles.left}>
          <MyLinks />
        </div>

        <div className={styles.right}>
          <OutlineButton onClick={() => window.open('/assets/img/shahzad-hussain_resume.pdf', '_blank')}>
            My resume
          </OutlineButton>
        </div>
      </div>

      <div className={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <MyLinks />
          <OutlineButton onClick={() => window.open('/assets/img/shahzad-hussain_resume.pdf', '_blank')}>
            My resume
          </OutlineButton>
        </div>
      )}
    </header>
  );
};
