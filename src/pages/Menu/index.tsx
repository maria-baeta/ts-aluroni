import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export const Menu = () => {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
    </main>
  );
};
