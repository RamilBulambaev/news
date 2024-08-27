import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(ThemeProvider, { children: _jsx(Provider, { store: store, children: _jsx(App, {}) }) }) }));
