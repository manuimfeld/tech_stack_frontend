import {} from "react";
import "./App.css";
import Home from "./views/Home";
import Languages from "./views/Languages";
import Stack from "./views/Stack";
import About from "./views/About";
import NotFound from "./views/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/languages/:id" element={Languages} />
          <Route path="/stack" element={Stack} />
          <Route path="/about" element={About} />
          <Route path="*" element={NotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
