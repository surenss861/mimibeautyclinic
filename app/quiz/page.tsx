"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "What is your primary skin concern?",
    options: [
      "Fine lines and wrinkles",
      "Acne or acne scars",
      "Dull or uneven skin tone",
      "Loss of volume or sagging",
      "Unwanted hair",
    ],
  },
  {
    id: 2,
    question: "What area would you like to treat?",
    options: [
      "Face",
      "Neck and décolletage",
      "Body",
      "Multiple areas",
    ],
  },
  {
    id: 3,
    question: "What is your skin type?",
    options: [
      "Dry",
      "Oily",
      "Combination",
      "Sensitive",
      "Normal",
    ],
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const getRecommendation = () => {
    // Simple recommendation logic based on answers
    if (answers[0]?.includes("Fine lines")) {
      return {
        treatment: "Anti-Wrinkle Injections (Botox)",
        description: "Perfect for smoothing fine lines and preventing wrinkles.",
        href: "/services/botox",
      };
    }
    if (answers[0]?.includes("Acne")) {
      return {
        treatment: "Laser Facial Treatments",
        description: "Ideal for treating acne and improving skin texture.",
        href: "/services/laser-facials",
      };
    }
    if (answers[1]?.includes("Unwanted hair")) {
      return {
        treatment: "Laser Hair Removal",
        description: "Permanent solution for unwanted hair.",
        href: "/services/laser-hair-removal",
      };
    }
    return {
      treatment: "Consultation Recommended",
      description: "Book a consultation to find the perfect treatment for you.",
      href: "/contact",
    };
  };

  if (completed) {
    const recommendation = getRecommendation();
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Your Perfect Treatment
            </h1>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">
                {recommendation.treatment}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {recommendation.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={recommendation.href}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn More
              </a>
              <button
                onClick={() =>
                  window.open(
                    "https://www.vagaro.com/mimibeautyclinics",
                    "_blank"
                  )
                }
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 font-serif">
              Discover Your Perfect Beauty Treatment!
            </h1>
            <p className="text-xl text-gray-600">
              Take our quick quiz to find out which beauty treatment is best for
              you.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
                className="bg-primary-600 h-2 rounded-full"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all font-medium text-gray-700"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

