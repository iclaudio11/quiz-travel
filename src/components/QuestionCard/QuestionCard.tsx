import React from 'react';
import './QuestionCard.css';

interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number; 
  question: string; 
  answers: string[]; 
  onAnswerClick: (answerIndex: number) => void; 
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  totalQuestions,
  question,
  answers,
  onAnswerClick,
}) => {
  return (
    <div className="question-card">
      <p className='question-number'>Domanda {questionNumber} di {totalQuestions}</p>
      <h3 className='question'>{question}</h3>
      <ul className='answers'>
        {answers.map((answer, index) => (
          <li key={index}>
            <button className='button-answer' onClick={() => onAnswerClick(index)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;

