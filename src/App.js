import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import NoMatch from "./components/NoMatch/NoMatch";
import ScientificCalculator from "./components/ScientificCalculator/ScientificCalculator";
import WordsCharectersCounter from "./components/WordsCharectersCounter/WordsCharectersCounter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/wordscounter" element={<WordsCharectersCounter />} />
      <Route path="/calculator" element={<ScientificCalculator />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
