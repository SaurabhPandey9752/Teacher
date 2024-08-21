import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm";

const FeedbackButton = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setShowForm(true)}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Give Feedback
      </button>

      {showForm && (
        <FeedbackForm
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default FeedbackButton;
