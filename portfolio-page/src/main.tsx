import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { CustomParticles } from "./js/particles.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <CustomParticles />

    <script src="js/simpleParallax.js"></script>
    <script src="js/smoothScroll.js"></script>
    <script src="js/scrollBlue.js"></script>
  </React.StrictMode>
);
