import { useTheme } from "@/app/providers/ThemeProvider";
import { Page } from "@/pages/main";
import { Header } from "@/widgets/header";

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Page />
      </div>
    </div>
  );
}

export default BaseLayout;
