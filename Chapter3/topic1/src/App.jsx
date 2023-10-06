import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PComparison from "./pages/PComparison";
import Home from "./pages/Home";
import Header from "./components/Header";
import ModuleStyles from "./pages/ModuleStyles";
import Students from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PComparison" element={<PComparison />} />
        <Route path="/module-styles" element={<ModuleStyles />} />
        <Route path="/Students" element={<Students />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
