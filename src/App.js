import "./App.css";
import Home from "./Home";
import Find from "./Find";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<Find />} />
          {/* <Route path="/movieInfo" element={<MovieInfo />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
