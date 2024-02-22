import React, { useState, useEffect } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import FinalScreen from '../FinalScreen/FinalScreen';
import questions from '../../questions'; 
import { getSkillLevel } from '../../utils';
import { Link } from 'react-router-dom';
import './Quiz.css';


const TOTAL_QUESTIONS = questions.length; 

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const [score, setScore] = useState(0); 
  const [gameOver, setGameOver] = useState(false); 

  const startQuiz = () => {
    setGameOver(false); 
  };

  const handleAnswerClick = (answerIndex: number) => {
    const isCorrect = Number(answerIndex) === questions[currentQuestionIndex].correctAnswer;

    setScore((prevScore) => (prevScore + (isCorrect ? 1 : 0)));
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % TOTAL_QUESTIONS);

    if (currentQuestionIndex === TOTAL_QUESTIONS - 1) {
      setGameOver(true); 
    }
  };

  return (
    <div>
      <Link to="/" className="custom-link">
        <h1 className="quiz-travel-quiz">Quiz Travel</h1>
      </Link>
      {!gameOver && (
        <QuestionCard
          questionNumber={currentQuestionIndex + 1} 
          totalQuestions={TOTAL_QUESTIONS} 
          question={questions[currentQuestionIndex].question} 
          answers={questions[currentQuestionIndex].answers}
          onAnswerClick={handleAnswerClick} 
        />
      )}
      {gameOver && (
        <FinalScreen
          score={score}
          skillLevel={getSkillLevel(score)}
          onRestartClick={startQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;
