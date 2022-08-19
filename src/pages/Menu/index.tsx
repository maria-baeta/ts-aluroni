import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export const Menu = () => {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da Massa</div>
      </header>
    </main>
  );
};
