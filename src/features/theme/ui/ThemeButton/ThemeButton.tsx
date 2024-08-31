import { themeIcons } from "@/shared/assets";
import { useTheme } from "@/app/providers/ThemeProvider";

function ThemeButton() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={30}
      onClick={toggleTheme}
      alt="icon"
    />
  );
}

export default ThemeButton;
