import React, { useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: '🏖️ Visit Kuta Beach',
      date: '2025-04-25',
      time: '10:00 AM',
      description: 'Relax and enjoy beach activities at Kuta.',
    },
    {
      id: 2,
      title: '🛕 Explore Uluwatu Temple',
      date: '2025-04-26',
      time: '4:00 PM',
      description: 'Visit the famous cliffside temple at sunset.',
    },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = { ...formData, id: Date.now() };
    setActivities([...activities, newActivity]);
    setFormData({ title: '', date: '', time: '', description: '' });
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="bg-blue-600 text-white p-6 rounded-lg mb-6 shadow-md">
        <h1 className="text-3xl font-bold">🌴 Travel Planner Activities</h1>
        <p className="text-sm mt-1">Organize your adventure, one activity at a time!</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Activity Title"
            required
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-1/2 p-2 border rounded"
            />
          </div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            + Add Activity
          </button>
        </form>

        {/* Activity List */}
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-bold">{activity.title}</h3>
              <p className="text-sm text-gray-500">
                Date: {activity.date} | Time: {activity.time}
              </p>
              <p className="mt-2 text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
