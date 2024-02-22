import React from 'react';
import './FinalScreen.css';

interface FinalScreenProps {
  score: number; 
  skillLevel: string; 
  onRestartClick: () => void; 
}

const FinalScreen: React.FC<FinalScreenProps> = ({
  score,
  skillLevel,
  onRestartClick,
}) => {
  return (
    <div className="final-screen">
      <h2 className='quiz-completed'>Congratulations! You have completed the quiz!</h2>
      <p className='score'>Your score is: {score}</p>
      <p className='skill-level'>Your skill level is: {skillLevel}</p>
      <button className='restart-quiz-button' onClick={onRestartClick}>Restart the quiz</button>
    </div>
  );
};

export default FinalScreen;
