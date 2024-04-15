import React, { useState } from 'react';
import axios from 'axios';

function ConfirmationDialog({ open, onConfirm, onCancel, responseData }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[750px] h-[360px] p-8 relative">
        <div className="h-[300px] p-4 overflow-y-auto">
          {responseData.explanation}
        </div>
        <button
          className="absolute top-4 right-4 w-[30px] h-[30px] hover:bg-gray-200 text-black rounded-full"
          onClick={onCancel}
        >
          X
        </button>
      </div>
    </div>
  );
}

function Explanation({ responseData }) {
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const handleCancel = () => {
    setShowConfirmationDialog(false);
  };

  const handleSubmit = () => {
    setShowConfirmationDialog(true);
  };

  const handleConfirm = () => {
    // Handle confirmation logic here
  };

  return (
    <>
      <button className="w-[82px] h-[30px] bg-teal-700 hover:bg-teal-900 rounded-full" onClick={handleSubmit}>
        <div className="submit-text mb-1">Explain</div>
      </button>
      <ConfirmationDialog open={showConfirmationDialog} onConfirm={handleConfirm} onCancel={handleCancel} responseData={responseData} />
    </>
  );
}

export default Explanation;