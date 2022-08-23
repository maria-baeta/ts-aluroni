import styles from "./Order.module.scss";
import options from "./options.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const Order = () => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={styles.order}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>Ordenar por</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.order__options]: true,
          [styles["order__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div className={styles.order__option} key={option.value}>
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
};
