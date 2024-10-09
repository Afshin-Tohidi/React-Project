import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BurgerMenuContextProvider } from "./store/BurgerMenuContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BurgerMenuContextProvider>
    <App />
  </BurgerMenuContextProvider>
);
