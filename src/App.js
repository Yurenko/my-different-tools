import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import WordsCharectersCounter from "./components/WordsCharectersCounter/WordsCharectersCounter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/wordscounter" element={<WordsCharectersCounter />} />
    </Routes>
  );
}

export default App;
