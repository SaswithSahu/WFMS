


import './index.css'; 

const DashboardReadings = () => {
  
  const readings = [
    { label: 'Food', value: '25' },
    { label: 'Takeaways', value: '6' },
    { label: 'Rejected Request', value: '10' },
    { label: 'All Request', value: '23' },
    { label: 'new Request', value: '15' },
  ];

  return (
    <div className="dashboard">
      {readings.map((reading, index) => (
        <div key={index} className="card">
          <h3>{reading.label}</h3>
          <p>{reading.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardReadings;
