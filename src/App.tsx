import { Routes } from "react-router";
import Lab from "./Labs/Lab1"
import { HashRouter, Route, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas/"

export function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Lab />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
