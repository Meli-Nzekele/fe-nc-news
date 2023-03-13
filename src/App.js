import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Articles from "./Components/Articles";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header>
        <Header />
      </Header>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
