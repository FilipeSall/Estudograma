import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainSection from "./components/MainSection/MainSection";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
