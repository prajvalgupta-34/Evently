'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function AdminDashboardPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prize, setPrize] = useState('');

  const handleCreateEvent = async () => {
    const { error } = await supabase.from('events').insert([
      {
        title,
        description,
        prize: parseFloat(prize),
      },
    ]);
    if (error) {
      alert(error.message);
    } else {
      alert('Event created successfully!');
      setTitle('');
      setDescription('');
      setPrize('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <h2 className="text-xl font-bold mb-2">Create Event</h2>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      />
      <input
        type="number"
        placeholder="Prize (ETH)"
        value={prize}
        onChange={(e) => setPrize(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <button
        onClick={handleCreateEvent}
        className="bg-green-500 text-white p-2 rounded"
      >
        Create Event
      </button>
    </div>
  );
}