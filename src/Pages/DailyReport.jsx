import React, { useState, useEffect } from 'react';
import '../Style/DailyReport.css';

const DailyReport = () => {
  const [reports, setReports] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  // ✅ Load from localStorage or default
  useEffect(() => {
    const savedReports = localStorage.getItem('dailyReports');
    if (savedReports && JSON.parse(savedReports).length > 0) {
      setReports(JSON.parse(savedReports));
    } else {
      const defaultReports = [
        {
          date: '2025-04-10',
          workouts: [
            { title: 'Morning Cardio', time: '07:00 - 07:45' },
            { title: 'Stretching', time: '08:00 - 08:30' },
          ],
        },
        {
          date: '2025-04-09',
          workouts: [
            { title: 'Strength Training', time: '06:30 - 07:30' },
          ],
        },
      ];
      setReports(defaultReports);
      localStorage.setItem('dailyReports', JSON.stringify(defaultReports));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem('dailyReports', JSON.stringify(reports));
  }, [reports]);

  // ➕ Add new workout to date
  const handleAddReport = () => {
    if (!date || !title || !time) return;

    const updated = [...reports];
    const index = updated.findIndex((r) => r.date === date);

    if (index !== -1) {
      updated[index].workouts.push({ title, time });
    } else {
      updated.push({ date, workouts: [{ title, time }] });
    }

    setReports(updated);
    setDate('');
    setTitle('');
    setTime('');
    setShowForm(false);
  };

  // 🗑 Remove entire report
  const deleteReport = (index) => {
    const updated = [...reports];
    updated.splice(index, 1);
    setReports(updated);
  };

  return (
    <div className="daily-report">
      <div className="report-header-bar">
        <h3>Daily Report</h3>
        <button onClick={() => setShowForm(!showForm)} className="add-btn">
          {showForm ? 'Cancel' : 'Add'}
        </button>
      </div>

      {showForm && (
        <div className="add-form">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Workout Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Time (e.g. 08:30 - 09:15)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button onClick={handleAddReport} className="save-btn">
            Save
          </button>
        </div>
      )}

      {reports
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((report, index) => (
          <div key={index} className="report-entry">
            <div className="report-header">
              <p className="report-date">{report.date}</p>
              <button
                onClick={() => deleteReport(index)}
                className="delete-btn"
                title="Remove"
              >
                🗑
              </button>
            </div>

            {report.workouts.map((workout, i) => (
              <div key={i} className="workout-item">
                <p className="workout-title">{workout.title}</p>
                <span className="workout-time">{workout.time}</span>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default DailyReport;
