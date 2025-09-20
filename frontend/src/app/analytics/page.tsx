'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<any[]>([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      // This is a simplified query. In a real application, you would likely
      // have a table that tracks event registrations.
      const { data, error } = await supabase
        .from('events')
        .select('title, participants:participants(count)');
      if (error) {
        console.error('Error fetching analytics:', error);
      } else {
        setAnalytics(data);
      }
    };
    fetchAnalytics();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Event Analytics</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Event</th>
            <th className="border p-2">Participants</th>
          </tr>
        </thead>
        <tbody>
          {analytics.map((event) => (
            <tr key={event.title}>
              <td className="border p-2">{event.title}</td>
              <td className="border p-2">{event.participants[0]?.count || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}