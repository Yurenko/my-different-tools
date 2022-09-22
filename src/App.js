import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import NoMatch from "./components/NoMatch/NoMatch";
import Quiz from "./components/Quiz/Quiz";
import ScientificCalculator from "./components/ScientificCalculator/ScientificCalculator";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import WordsCharectersCounter from "./components/WordsCharectersCounter/WordsCharectersCounter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/wordscounter" element={<WordsCharectersCounter />} />
      <Route path="/calculator" element={<ScientificCalculator />} />
      <Route path="/quize" element={<Quiz />} />
      <Route path="/togglebutton" element={<ToggleButton />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
