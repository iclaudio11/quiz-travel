import React from 'react';
import './FinalScreen.css';

interface FinalScreenProps {
  score: number; 
  skillLevel: string; 
  onRestartClick: () => void; 
}

interface QuizAttempt {
  date: string;
  score: number;
  totalQuestions: number;
}

const FinalScreen: React.FC<FinalScreenProps> = ({
  score,
  skillLevel,
  onRestartClick,
}) => {
  const quizHistory: QuizAttempt[] = JSON.parse(localStorage.getItem('quizHistory') || '[]');

  return (
    <div className="final-screen">
      <h2 className='quiz-completed'>Congratulations! You have completed the quiz!</h2>
      <p className='score'>Your score is: {score}</p>
      <p className='skill-level'>Your skill level is: {skillLevel}</p>

      <div className="quiz-history">
        <h3 className='quiz-history-title'>Quiz History:</h3>
        <ul>
          {quizHistory.map((attempt, index) => (
            <li key={index}>
              <p className='date'>Date: {attempt.date}</p>
              <p className='score-history'>Score: {attempt.score}/{attempt.totalQuestions}</p>
            </li>
          ))}
        </ul>
      </div>

      <button className='restart-quiz-button' onClick={onRestartClick}>Restart the quiz</button>
    </div>
  );
};

export default FinalScreen;

