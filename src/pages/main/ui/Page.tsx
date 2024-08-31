import styles from "./Main.module.css";
import NewsByFilters from "./NewsByFilters/NewsByFilters";
import LatestNews from "./LatestNews/LatestNews";
import { useTheme } from "@/app/providers/ThemeProvider";

function Page() {
  const { isDark } = useTheme();
  return (
    <main className={`${styles.main} ${isDark ? styles.dark : styles.light}`}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}

export default Page;
