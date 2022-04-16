import "./App.css";
import Header from "./Components/Header/Header";
import UpperWrapper from "../src/UpperWrapper/UpperWrapper";
import LowerWrapper from "../src/LowerWrapper/LowerWrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <UpperWrapper />
      <LowerWrapper />
    </div>
  );
}

export default App;
