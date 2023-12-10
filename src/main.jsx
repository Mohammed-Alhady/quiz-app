import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";
import "./style/css/main.min.css";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
