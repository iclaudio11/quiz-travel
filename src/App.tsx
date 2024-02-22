import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen/StartScreen';
import Quiz from './components/Quiz/Quiz';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
