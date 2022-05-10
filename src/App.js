import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "router/appRoute.js";
import { MovieDetailsProvider } from "context/movieContext";

function App() {
  return (
    <MovieDetailsProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </MovieDetailsProvider>
  );
}

export default App;
