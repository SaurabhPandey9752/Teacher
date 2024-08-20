import React, { useState } from 'react';
import Rating from 'react-rating';
import 'react-rating';

const FeedbackForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && feedback && rating) {
      onSubmit({ name, feedback, rating });
      setName('');
      setFeedback('');
      setRating(0);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-3xl w-full md:w-[400px] mx-auto">
      <h3 className="text-white text-xl mb-4">Give Feedback</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-white block mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2">Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-2 rounded"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2">Rating:</label>
          <Rating
            fractions={2}
            fullSymbol="★"
            emptySymbol="☆"
            onChange={(value) => setRating(value)}
            className="text-yellow-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
