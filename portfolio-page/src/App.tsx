import "@/scss/index.scss";

import { BrowserRouter as Routes, Route } from "react-router-dom";
import { Top } from "./pages/top";


function App() {
  return (
    <Routes>
      <Top />
    </Routes>
  );
}

export default App;

