import { useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
// import styles from "./Theme.module.scss";

interface THEME {
  setTheme: () => void;
  themeDark: boolean;
}

export const Theme = ({ setTheme, themeDark }: THEME) => {
  return (
    <div onClick={() => setTheme()}>
      {themeDark ? <MdDarkMode size={20} /> : <MdOutlineDarkMode size={20} />}
    </div>
  );
};
