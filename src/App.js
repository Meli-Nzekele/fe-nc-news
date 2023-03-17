import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Users from "./Components/Users/Users";
import Articles from "./Components/Articles/Articles";
import SingleArticle from "./Components/Articles/SingleArticle";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Users />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:topic" element={<Articles />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
