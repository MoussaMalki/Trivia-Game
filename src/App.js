import "./App.css";
import Header from "./components/Header.js";
import Question from "./components/Question.js";
import TruthODare from "./components/TruthODare";

function App() {
  return (
    <>
      <Header />
      <div>
        <Question />
      </div>
      <TruthODare />
    </>
  );
}

export default App;
