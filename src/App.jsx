import {} from "react";
import "./App.css";
import Home from "./views/Home";
import Technologys from "./views/Technologys";
import NotFound from "./views/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Technology from "./views/Technology";
import NewTechnologyForm from "./views/NewTechnologyForm";
import Register from "./views/Register";
import Login from "./views/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/technologys" element={<Technologys />} />
          <Route path="/technologys/:name" element={<Technology />} />
          <Route path="/post-technology" element={<NewTechnologyForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={NotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
