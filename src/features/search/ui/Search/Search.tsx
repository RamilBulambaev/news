import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./Search.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

function Search({ keywords, setKeywords }: Props) {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={styles.input}
        placeholder="JavaScript"
      />
    </div>
  );
}

export default Search;
