import React, { useState } from 'react';
import '../Style/WeightTracking.css';

const WeightTracking = () => {
  const [entries, setEntries] = useState([
    { date: 'Today', time: '07:02', weight: '52.7 kg', change: '+0.1 kg', status: 'up' },
    { date: '2021-11-13', time: '08:46', weight: '52.6 kg', change: '-0.3 kg', status: 'down' },
    { date: '2021-11-14', time: '09:22', weight: '52.9 kg', change: '+0.2 kg', status: 'up' },
    { date: '2021-11-15', time: '06:50', weight: '52.7 kg', change: '-0.2 kg', status: 'down' },
    { date: '2021-11-16', time: '07:40', weight: '52.9 kg', change: '-0.1 kg', status: 'down' },
  ]);

  const [newEntry, setNewEntry] = useState({
    date: '',
    time: '',
    weight: '',
    change: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setNewEntry({
      ...newEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (!newEntry.date || !newEntry.time || !newEntry.weight || !newEntry.change) return;
  
    const status = newEntry.change.includes('+') ? 'up' : 'down';
  
    setEntries([{ ...newEntry, status }, ...entries]);
  
    // Reset form
    setNewEntry({ date: '', time: '', weight: '', change: '' });
    setShowForm(false);
  };
  

  const handleDelete = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
  };

  return (
    <div className="weight-tracking-card">
      <div className="weight-header">
        <h3>Weight tracking</h3>
        <button onClick={() => setShowForm(!showForm)} className="add-link">
          {showForm ? 'Cancel' : 'Add'}
        </button>
      </div>

      {showForm && (
        <div className="add-form">
          <input type="date" name="date" value={newEntry.date} onChange={handleChange} />
          <input type="text" name="time" value={newEntry.time} onChange={handleChange} />
          <input type="text" name="weight" placeholder="Weight (e.g. 53.1 kg)" value={newEntry.weight} onChange={handleChange} />
          <input type="text" name="change" placeholder="Change (e.g. +0.2 kg)" value={newEntry.change} onChange={handleChange} />
          <button onClick={handleSave} className="save-btn">Save</button>
        </div>
      )}

      <ul className="weight-list">
        {entries.map((entry, index) => (
          <li key={index} className="weight-entry">
            <div className="left">
              <p className="weight-date">{entry.date}</p>
              <p className="weight-value">{entry.weight}</p>
            </div>
            <div className="right">
              <p className={`weight-change ${entry.status}`}>{entry.change}</p>
              <span className="weight-time">{entry.time}</span>
              <button onClick={() => handleDelete(index)} className="delete-btn">✖</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeightTracking;
