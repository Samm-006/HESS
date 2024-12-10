import React from 'react';
import PersonalizedFeedback from './PersonalizedFeedback'; 

const studentData = {
  studentId: '2539401',
  studentName: 'Ethan Brooks',
};

const overallScore = 85;

const assignmentData = {
  moduleTitle: 'Introduction to Programming', 
  assignmentTitle: 'Assignment 2',
};

function App() {
  return (
    <div>
      <PersonalizedFeedback
        studentData={studentData}
        overallScore={overallScore}
        assignmentData={assignmentData}
      />
    </div>
  );
}

export default App;
