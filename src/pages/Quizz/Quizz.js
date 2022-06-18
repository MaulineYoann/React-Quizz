import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { questions } from '../../data/Questions';
import './Quizz.scss';

const Quizz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  let current = currentQuestion + 1;
  const calc =  currentQuestion / questions.length + .1;


  const getResponse = (res) => {
    setResponse(res);
  }

  const handleError = () => {
    !response ? setError('Veuillez selectionner une réponse') : setError('');
  };

  const handleSubmit = () => {
    if (current === questions.length && response) {
      response.isCorrect === true && setScore((prevValue) => prevValue + 1);
      handleModal()
    } else {
      handleError();
      response && setCurrentQuestion((previousValue) => previousValue + 1);
      response.isCorrect === true && setScore((prevValue) => prevValue + 1);
      setResponse('');
    }
  };

  const showScore = () => (score > 1 ? 'Points' : 'Point');

  const handleModal = () => setShowModal(!showModal)
  return (
    <main className="quizz">
      <button className='back'>
        <Link to='/'>
          Retour
        </Link>
      </button>
      <section className="question">
        <div className="progress">
          <div 
          className="bar"
          style={{transform: `scaleX(${calc})`}}
          ></div>
        </div>
        <div className="info">
          <div className="length" >
            Question {current}/{questions.length}
          </div>
          <div className="score">
            <p className="point">
               {score} 
            </p>
            <span>
              {showScore()}
            </span>
          </div>
        </div>
        <aside className='content'>
        <h2 className="title">
          {questions[currentQuestion].text}
        </h2>
        <form>
          {questions[currentQuestion].option.map((response) => (
            <input 
            key={response.id}
            type="text" 
            value={response.text} 
            className="option"
            onClick={() => getResponse(response)}  
            />
          ))}
          <p className="error">
            {error}
          </p>
        </form>
        <button onClick={handleSubmit}>valider</button>
        </aside>
      </section>
      {
        showModal && <Modal score={score} length={questions.length}/>
      }
    </main>
  );
};

export default Quizz;
