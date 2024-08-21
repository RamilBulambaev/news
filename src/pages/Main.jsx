import styles from "./Main.module.css";
import LatestNews from "../components/LatestNews/LatestNews";
import NewsByFilters from "../components/NewsByFilters/NewsByFilters";

function Main() {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}

export default Main;
