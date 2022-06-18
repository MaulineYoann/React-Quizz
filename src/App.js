import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EndScore from './components/EndScore/EndScore';
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
        <Route path='/end' element={<EndScore />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
