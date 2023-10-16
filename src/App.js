import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import ReactDOM from "react-dom/client";
import NavBar from './components/NavBar';
import { useState } from 'react';
import Footer from './components/Footer';


function App()  {
  const [pageNum, setPageNum] = useState(1);
  return (
    <>
    <BrowserRouter> 
      <NavBar pageNum = {pageNum} setPageNum = {setPageNum}/>
      <Routes>
        <Route path="/" element={<Homepage/>}>
        </Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;

