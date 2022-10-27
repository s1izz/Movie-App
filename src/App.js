import "./App.css";
import Home from "./Home";
import Find from "./Find";
import MovieInfo from "./MovieInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={":homeSearchTerm" || "/searchPage"} element={<Find />} />
          <Route path=":id" element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;