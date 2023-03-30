import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainSection from "./components/MainSection/MainSection";
import Header from "./components/Header/Header";
import { GlobalProvider } from "./GlobalContext";

function App() {
  return (
      <GlobalProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <MainSection />
          </div>
        </BrowserRouter>
      </GlobalProvider>
  );
}

export default App;
