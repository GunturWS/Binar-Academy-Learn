import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovies from "./pages/SearchMovies";
import DetailMovie from "./pages/DetailMovie";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import NoAccessToken from "./components/NoAccessToken";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/search"
            element={
              <Protected>
                <SearchMovies />
              </Protected>
            }
          />
          <Route
            path="/details/:movieId"
            element={
              <Protected>
                <DetailMovie />
              </Protected>
            }
          />

          {/* Authentication */}
          <Route
            path="/login"
            element={
              <NoAccessToken>
                <Login />
              </NoAccessToken>
            }
          />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
