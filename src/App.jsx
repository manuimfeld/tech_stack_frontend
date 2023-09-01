import {} from "react";
import "./App.css";
import Home from "./views/Home";
import Technologys from "./views/Technologys";
import NotFound from "./views/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Technology from "./views/Technology";
import NewTechnologyForm from "./views/CreatePost";
import Register from "./views/Register";
import Login from "./views/Login";
import EditTechnologyForm from "./views/EditPost";
import MyPosts from "./views/MyPosts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/technologys" element={<Technologys />} />
          <Route path="/technology/:name" element={<Technology />} />
          <Route path="/post-technology" element={<NewTechnologyForm />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/my-posts/edit/:id" element={<EditTechnologyForm />} />
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
