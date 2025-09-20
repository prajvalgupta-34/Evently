'use client';

import { useState, useEffect } from 'react';
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
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}