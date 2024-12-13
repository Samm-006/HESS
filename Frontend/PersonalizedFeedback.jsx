import React, { useState } from "react";
import "../styles/PersonalizedFeedback.css";

const PersonalizedFeedback = () => {
  const studentData = {
    studentId: "2539401",
    studentName: "Ethan Brooks",
  };

  const overallScore = 85;

  const assignmentData = {
    moduleTitle: "Introduction to Programming",
    assignmentTitle: "Assignment 2",
  };

  const [isTagOn, setIsTagOn] = useState(false);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const handleTagToggle = () => {
    setIsTagOn(!isTagOn);
  };

  const handleViewAssignment = () => {
    setIsFeedbackVisible(!isFeedbackVisible);
  };

  return (
    <div className="feedback-container">
      <header className="feedback-header">
        <h1>Personalized Feedback</h1>
        <div className="module-details">
          <h2>{assignmentData.moduleTitle}</h2>
          <h3>{assignmentData.assignmentTitle}</h3>
        </div>
      </header>

      <div className="student-info">
        <p><strong>Student ID:</strong> {studentData.studentId}</p>
        <p><strong>Name:</strong> {studentData.studentName}</p>
      </div>

      <div className="score-container">
        <h4>Overall Score</h4>
        <div className="score-box">
          <p>{overallScore}%</p>
        </div>
      </div>

      <button className="view-assignment-btn" onClick={handleViewAssignment}>
        {isFeedbackVisible ? 'Hide Feedback' : 'View Assignment'}
      </button>

      {isFeedbackVisible && (
        <div className="feedback-message">
          <p>Excellent job! You demonstrated a clear understanding of the material.</p>
        </div>
      )}

      <div className="tag-toggle">
        <label>
          <strong>Tag On/Off: </strong>
          <input
            type="checkbox"
            checked={isTagOn}
            onChange={handleTagToggle}
          />
        </label>
      </div>
    </div>
  );
};

export default PersonalizedFeedback
