'use client';

import { useState } from 'react';

export default function MatchmakingPage() {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleMatchmake = async () => {
    setLoading(true);
    // In a real application, you would fetch this from your backend
    // For this MVP, we'll use dummy data
    setTimeout(() => {
      setRecommendations([
        { id: 1, name: 'Alice', skills: 'Frontend, UI/UX' },
        { id: 2, name: 'Bob', skills: 'Backend, Databases' },
        { id: 3, name: 'Charlie', skills: 'Blockchain, Solidity' },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Matchmaking</h1>
      <button
        onClick={handleMatchmake}
        className="bg-purple-500 text-white p-2 rounded mb-4"
        disabled={loading}
      >
        {loading ? 'Finding Teammates...' : 'Find Top 3 Teammates'}
      </button>
      {recommendations.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-2">Recommended Teammates:</h2>
          <ul>
            {recommendations.map((rec) => (
              <li key={rec.id} className="border p-2 rounded mb-2">
                <p className="font-bold">{rec.name}</p>
                <p>Skills: {rec.skills}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}