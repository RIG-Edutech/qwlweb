import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ReactDOM from "react-dom/client";


function App()  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;

