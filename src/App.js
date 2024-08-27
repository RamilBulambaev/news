import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./components/Header/Header";
import { useTheme } from "./context/ThemeContext";
import Main from "./pages/Main";
function App() {
    const { isDark } = useTheme();
    return (_jsxs("div", { className: `app ${isDark ? "dark" : "light"}`, children: [_jsx(Header, {}), _jsx("div", { className: "container", children: _jsx(Main, {}) })] }));
}
export default App;
