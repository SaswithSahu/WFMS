


import './index.css'; 

const AdminDashboardReadings = () => {
  
  const readings = [
    { label: 'list of donating', value: '25' },
    { label: 'list of receiving Org', value: '6' },
    { label: 'Currently Available food', value: '10' },
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

export default AdminDashboardReadings;
