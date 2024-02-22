export interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    "question": "Which of the following is NOT a characteristic of sustainable tourism?",
    "answers": [
      "Respect for the environment and local cultures",
      "Minimization of economic impact",
      "Maximization of profit for tourism businesses",
      "Active involvement of local communities"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a NON-sustainable mode of transportation for travel?",
    "answers": [
      "Train",
      "Airplane",
      "Bicycle",
      "Electric car"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is NOT a good practice for a sustainable tourist?",
    "answers": [
      "Respect for local rules and customs",
      "Purchase of locally produced souvenirs",
      "Refusal to use excessively packaged products",
      "Leaving a trace of your passage in nature"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Which type of accommodation is generally considered more sustainable?",
    "answers": [
      "Luxury hotel with a pool and air conditioning",
      "Family-run farmhouse or B&B",
      "All-inclusive tourist village",
      "Apartment rental in a large city"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which tourism activity can have a negative impact on the marine environment?",
    "answers": [
      "Snorkeling and diving with eco-friendly operators",
      "Cruises with large cruise ships",
      "Sailing boat rides with local crew",
      "Visiting protected marine reserves"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which of these actions does NOT contribute to reducing your travel impact?",
    "answers": [
      "Offsetting the carbon emissions of your flight",
      "Traveling in the low season to avoid crowds",
      "Buying packaged and imported food products",
      "Choosing tour operators that support local development projects"
    ],
    "correctAnswer": 2
  },
  {
    "question": "How can sustainable tourism contribute to local development?",
    "answers": [
      "Creation of jobs and economic opportunities",
      "Enhancement of local resources and products",
      "Promotion of the protection of natural and cultural heritage",
      "Improvement of the quality of life for local communities"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is NOT a consequence of uncontrolled mass tourism?",
    "answers": [
      "Environmental degradation and pollution",
      "Exploitation of local resources",
      "Increase in the economic well-being of local communities",
      "Loss of cultural identity and local traditions"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Which is NOT a problem associated with uncontrolled mass tourism?",
    "answers": [
      "Increase in the cost of living for local residents",
      "Overcrowding and congestion",
      "Damage to the environment and infrastructure",
      "Preservation of local cultures and traditions"
    ],
    "correctAnswer": 3
  },
  {
    "question": "What can you do to reduce your environmental impact during a trip?",
    "answers": [
      "Use sustainable means of transportation",
      "Stay in eco-friendly accommodations",
      "Consume local food and drinks",
      "Inform yourself and choose eco-responsible tour operators and activities"
    ],
    "correctAnswer": 3
  }
];

export default questions;
