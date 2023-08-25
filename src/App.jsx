import {} from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Languages from "./views/Languages";
import Stack from "./views/Stack";
import About from "./views/About";
import NotFound from "./views/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={Home} />
          <Route path="home" Component={Home} />
          <Route path="nav" Component={Nav} />
          <Route path="languages" Component={Languages} />
          <Route path="stack" Component={Stack} />
          <Route path="about" Component={About} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
