'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function DashboardPage() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('events').select('*');
      if (error) {
        console.error('Error fetching events:', error);
      } else {
        setEvents(data);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Event Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p>{event.description}</p>
            <p className="font-bold">Prize: {event.prize} ETH</p>
            <button className="bg-blue-500 text-white p-2 rounded mt-2">
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}