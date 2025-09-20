'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/utils/supabase';
import { User } from '@supabase/supabase-js';

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error);
      } else {
        setUser(data.user);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <div className="flex items-center">
          <span className="text-white text-sm font-medium mr-4">Welcome, {user.email}</span>
          <button
            onClick={() => supabase.auth.signOut()}
            className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Link href="/login" className="text-gray-300 hover:text-white transition duration-300">
          Login
        </Link>
      )}
    </div>
  );
}