'use client';

import { useEffect, useState } from 'react';

export default function LeaderboardPage() {
  const [ranking, setRanking] = useState<any[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this from your backend
    // For this MVP, we'll use dummy data
    setRanking([
      { id: 1, name: 'Team Alpha', score: 950 },
      { id: 2, name: 'Team Beta', score: 870 },
      { id: 3, name: 'Team Gamma', score: 820 },
      { id: 4, name: 'Team Delta', score: 780 },
      { id: 5, name: 'Team Epsilon', score: 750 },
    ]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Rank</th>
            <th className="border p-2">Team</th>
            <th className="border p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((team, index) => (
            <tr key={team.id}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{team.name}</td>
              <td className="border p-2">{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}