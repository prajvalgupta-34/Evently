'use client';

import Link from 'next/link';
import { useState } from 'react';
import ConnectWallet from './ConnectWallet';
import UserProfile from './UserProfile';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Evently
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/dashboard" className="text-gray-300 hover:text-white transition duration-300">Dashboard</Link>
          <Link href="/matchmaking" className="text-gray-300 hover:text-white transition duration-300">Matchmaking</Link>
          <Link href="/leaderboard" className="text-gray-300 hover:text-white transition duration-300">Leaderboard</Link>
          <Link href="/create-event" className="text-gray-300 hover:text-white transition duration-300">Create Event</Link>
        </div>
        <div className="flex items-center space-x-4">
          <UserProfile />
          <ConnectWallet />
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4">
          <Link href="/dashboard" className="block text-gray-300 hover:text-white py-2">Dashboard</Link>
          <Link href="/matchmaking" className="block text-gray-300 hover:text-white py-2">Matchmaking</Link>
          <Link href="/leaderboard" className="block text-gray-300 hover:text-white py-2">Leaderboard</Link>
          <Link href="/create-event" className="block text-gray-300 hover:text-white py-2">Create Event</Link>
        </div>
      )}
    </nav>
  );
}