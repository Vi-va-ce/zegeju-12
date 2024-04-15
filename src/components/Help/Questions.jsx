import React, { useState } from 'react';

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
    },
    {
      question: 'Question 5',
      answer: 'Answer 5',
    },
  ];

  return (
    <div className='pl-[40px] md:pl-[130px] pr-[40px] md:pr-[130px] pb-[40px]'>
    <div className="bg-gray-200 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-lg cursor-pointer ${
              activeIndex === index ? 'bg-gray-100' : ''
            }`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="font-semibold">{q.question}</div>
            {activeIndex === index && <div className="mt-2">{q.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Questions;