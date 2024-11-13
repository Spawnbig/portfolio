"use client";
import { useTheme } from "@/context/theme_context";
import styles from "./style.module.css";

const HeaderComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="w-full flex justify-end">
      <input
        type="checkbox"
        className={`toggle toggle-lg ${styles.toggle_icon}`}
        onChange={toggleTheme}
        checked={!isDarkMode}
      />
    </header>
  );
};

export default HeaderComponent;
