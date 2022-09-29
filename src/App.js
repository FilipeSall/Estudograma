import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Box from './components/box/Box';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Box />} />
          <Route path='BoxHtml/*' element={<Box page='html'/>} />
          <Route path='BoxCss/*' element={<Box page='css'/>} />
          <Route path='BoxJs/*' element={<Box page='javascript'/>} />
          <Route path='BoxTs/*' element={<Box page='typescript'/>} /> 
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
