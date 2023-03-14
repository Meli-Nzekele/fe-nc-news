import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Articles from "./Components/Articles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
