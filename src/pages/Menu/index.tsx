import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import { Search, Filters } from "./Components";

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
      <section className={styles.menus}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters />
        </div>
      </section>
    </main>
  );
};
