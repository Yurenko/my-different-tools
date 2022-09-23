import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreaditCard from "./components/CreditCard/CreaditCard";
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
      <Route path="/words/counter" element={<WordsCharectersCounter />} />
      <Route path="/calculator" element={<ScientificCalculator />} />
      <Route path="/quize" element={<Quiz />} />
      <Route path="/toggle/button" element={<ToggleButton />} />
      <Route path="/credit/card" element={<CreaditCard />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
