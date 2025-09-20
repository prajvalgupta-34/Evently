'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function CreateEventPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prize, setPrize] = useState('');

  const handleCreateEvent = async () => {
    const { error } = await supabase.from('events').insert([
      { title, description, prize: parseFloat(prize) },
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
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Create a New Event</h1>
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg">
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-bold mb-2">Event Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-bold mb-2">Event Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg h-32"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="prize" className="block text-lg font-bold mb-2">Prize (ETH)</label>
            <input
              type="number"
              id="prize"
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg"
            />
          </div>
          <button
            onClick={handleCreateEvent}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
}