import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartScreen.css';
import planeImage from '../../images/airplane.png';


function StartScreen() {
  const navigate = useNavigate();

  const onStartClick = () => {
    navigate("/quiz");
  };

  return (
    <div className='start-screen'>
      <div className='title'>
        <h1 className='quiz-travel'>Quiz Travel</h1>
        <img src={planeImage} alt="airplane" className='plane'/>
      </div>
      <p className='quiz-rules'>Test your eco-travel knowledge in this quiz. Answer questions, score points, and become a sustainable traveler! Click "Start" to begin.</p>
      <button className='button-init' onClick={onStartClick}>Start</button>
    </div>
  );
}

export default StartScreen;
