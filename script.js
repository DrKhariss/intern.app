import React from 'react';
import './App.css';

const internsData = [
  {
    name: 'John Doe',
    picture: 'https://via.placeholder.com/150',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et bibendum lacus.',
    grades: [90, 85, 88, 92, 87]
  },
  // Add data for other interns
];

const InternCard = ({ intern }) => {
  const calculateOverallGrading = () => {
    const total = intern.grades.reduce((acc, curr) => acc + curr, 0);
    return Math.round(total / intern.grades.length);
  };

  return (
    <div className="intern-card">
      <img src={intern.picture} alt={intern.name} />
      <div className="intern-info">
        <h3>{intern.name}</h3>
        <p>{intern.info}</p>
        <p><strong>Overall Grading:</strong> {calculateOverallGrading()}%</p>
      </div>
    </div>
  );
};

const App = () => {
  const highestGradingIntern = internsData.reduce((prev, current) => {
    const prevGrading = prev.grades.reduce((acc, curr) => acc + curr, 0);
    const currentGrading = current.grades.reduce((acc, curr) => acc + curr, 0);
    return prevGrading > currentGrading ? prev : current;
  });

  return (
    <div className="App">
      <h1>Intern Management</h1>
      <div className="interns-container">
        {internsData.map(intern => (
          <InternCard key={intern.name} intern={intern} />
        ))}
      </div>
      <div className="highest-gradings">
        <h2>Highest Grading Intern</h2>
        <InternCard intern={highestGradingIntern} />
      </div>
    </div>
  );
};

export default App;
