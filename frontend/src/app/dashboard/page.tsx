'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

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
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Event Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <Card key={event.id}>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-white">{event.title}</h2>
                <p className="text-gray-400 mb-4 h-24 overflow-hidden">{event.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Prize: {event.prize} ETH</p>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                    New
                  </span>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                  Register Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}