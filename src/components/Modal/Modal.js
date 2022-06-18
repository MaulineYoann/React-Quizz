import React from 'react'
import { Link } from 'react-router-dom'
import './Modal.scss'

const Modal = ({score, length}) => {
    const points = score > 1 ? 'points' : 'point'
  return (
    <section className='modal'>
        <div className="content">
            <h1>Bravo vous avez terminé le quizz avec <span className='score'>{score}</span> {points} sur <span className='score'>{length}</span></h1>
            <button>
                <Link to='/'>Rejouer</Link>
            </button>
        </div>
    </section>
  )
}

export default Modal