import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import { Search } from "pages/Search";

export const Menu = () => {
  const [search, setSearch] = useState("");

  return (
    <main>
      <nav className={styles.menus}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da Massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
      </section>
    </main>
  );
};
