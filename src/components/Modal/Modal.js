import React from 'react'
import { Link } from 'react-router-dom'
import './Modal.scss'

const Modal = ({score}) => {
  return (
    <section className='modal'>
        <div className="content">
            <h1>Bravo vous avez terminer le quizz avec <span className='score'>{score}</span> points</h1>
            <button>
                <Link to='/'>Rejouer</Link>
            </button>
        </div>
    </section>
  )
}

export default Modal