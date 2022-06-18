import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'

const Home = () => {
  return (
    <main className="home">
      <div className="content">
        <h1>Bienvenue dans le Dev-Quizz</h1>
        <p>
          Répondez aux question de culture général est partager fièrement vos
          résultats à vos amis
        </p>
        <small> en cas de bonne réponse vos points s'afficherons à droite de l'écran</small>
        <Link to='/quizz'>
          <button className='button'>Commencer</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
