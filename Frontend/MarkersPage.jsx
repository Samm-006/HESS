import React, { useState } from "react";
import "../styles/Marker.css";

const MarkersPage = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Student 1", submissionStatus: "Submitted", markerStatus: "Marked", score: 90 },
    { id: 2, name: "Student 2", submissionStatus: "Submitted Late", markerStatus: "In Progress", score: "-" },
    { id: 3, name: "Student 3", submissionStatus: "Missing", markerStatus: "Unmarked", score: "-" },
    { id: 4, name: "Student 4", submissionStatus: "Not Submitted", markerStatus: "Unmarked", score: "" },
    { id: 5, name: "Student 5", submissionStatus: "Not Submitted", markerStatus: "Unmarked", score: "" },
    { id: 6, name: "Student 6", submissionStatus: "Not Submitted", markerStatus: "Unmarked", score: "" },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [filter, setFilter] = useState({ submissionStatus: "all", markerStatus: "all" });

  const filteredStudents = students.filter((student) => {
    const matchesSubmissionStatus =
      filter.submissionStatus === "all" || student.submissionStatus === filter.submissionStatus;
    const matchesMarkerStatus =
      filter.markerStatus === "all" || student.markerStatus === filter.markerStatus;

    return matchesSubmissionStatus && matchesMarkerStatus;
  });

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="marker-page-container">
      <div className="header">
        <div className="module-info">
          <span>Module Name/ID: <strong>2539401</strong></span>
          <span>Assignment ID: <strong>34259</strong></span>
        </div>
        <div className="filter">
          <label htmlFor="submission-status">Student Submission:</label>
          <select
            id="submission-status"
            onChange={(e) => setFilter({ ...filter, submissionStatus: e.target.value })}
          >
            <option value="all">All</option>
            <option value="Submitted">Submitted</option>
            <option value="Submitted Late">Submitted Late</option>
            <option value="Missing">Missing</option>
          </select>
          <label htmlFor="marker-status">Marker Status:</label>
          <select
            id="marker-status"
            onChange={(e) => setFilter({ ...filter, markerStatus: e.target.value })}
          >
            <option value="all">All</option>
            <option value="Marked">Marked</option>
            <option value="Unmarked">Unmarked</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
      </div>

      <div className="main-content">
        <div className="student-list">
          <table>
            <thead>
              <tr>
                <th>Student Name/ID</th>
                <th>Submission Status</th>
                <th>Marker Status</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} onClick={() => handleStudentClick(student)}>
                  <td>{student.name}</td>
                  <td>{student.submissionStatus}</td>
                  <td>{student.markerStatus}</td>
                  <td>{student.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="feedback-panel">
          {selectedStudent ? (
            <>
              <div className="assignment-preview">
                <div className="assignment-header">
                  <h3>Student {selectedStudent.id}</h3>
                  <div className="score-display">
                    <strong>Score:</strong> {selectedStudent.score}
                  </div>
                </div>
                <div className="assignment-box">
                  <p></p>
                </div>
              </div>
              <textarea placeholder="Write feedback here..." className="feedback-textarea"></textarea>
              <button className="upload-feedback-btn">Upload Feedback</button>
            </>
          ) : (
            <p>Select a student to view their assignment and provide feedback.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarkersPage;
