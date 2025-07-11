import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./component/Header/App.tsx";
import { Photo } from "./component/photo/Photo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Photo />
  </StrictMode>
);
