import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainSection from "./components/MainSection/MainSection";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainSection />
      </div>
      <Routes>
        
        <Route path='/front-end'  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
