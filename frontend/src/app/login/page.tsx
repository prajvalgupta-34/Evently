'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert('Logged in successfully!');
    }
  };

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert('Signed up successfully! Please check your email to verify.');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Login / Register</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-700 text-white p-3 rounded-lg"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-700 text-white p-3 rounded-lg"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleLogin}
            className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mr-2"
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="w-1/2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg ml-2"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}