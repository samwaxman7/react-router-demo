import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
