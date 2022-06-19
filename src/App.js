import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quizz from './pages/Quizz/Quizz';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='quizz' element={<Quizz />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
