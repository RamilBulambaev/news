import styles from "./Main.module.css";
import LatestNews from "../components/LatestNews/LatestNews";
import NewsByFilters from "../components/NewsByFilters/NewsByFilters";
import { useTheme } from "../context/ThemeContext";

function Main() {
  const { isDark } = useTheme();
  return (
    <main className={`${styles.main} ${isDark ? styles.dark : styles.light}`}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}

export default Main;
