import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovies from "./pages/SearchMovies";
import DetailMovie from "./pages/DetailMovie";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchMovies />} />
        <Route path="/details/:movieId" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
