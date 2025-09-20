'use client';

import Link from 'next/link';
import ConnectWallet from './ConnectWallet';
import UserProfile from './UserProfile';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Evently
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
          <Link href="/matchmaking" className="text-gray-300 hover:text-white">
            Matchmaking
          </Link>
          <Link href="/leaderboard" className="text-gray-300 hover:text-white">
            Leaderboard
          </Link>
          <Link href="/admin" className="text-gray-300 hover:text-white">
            Admin
          </Link>
          <Link href="/analytics" className="text-gray-300 hover:text-white">
            Analytics
          </Link>
          <Link href="/create-event" className="text-gray-300 hover:text-white">
            Create Event
          </Link>
          <Link href="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <UserProfile />
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
}