'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contract } from '../lib/ethers';

export default function ConnectWallet() {
  const [account, setAccount] = useState<string | null>(null);
  const [currentState, setCurrentState] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        const state = await contract.currentState();
        setCurrentState(state.toString());
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const depositPrize = async () => {
    try {
      const tx = await contract.depositPrize({ value: ethers.parseEther("0.01") });
      await tx.wait();
      const state = await contract.currentState();
      setCurrentState(state.toString());
    } catch (error) {
      console.error("Error depositing prize:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      {account ? (
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">Connected Account</p>
          <p className="text-sm text-gray-600 truncate max-w-xs mt-1">{account}</p>
          <p className="text-lg font-semibold text-gray-800 mt-4">Contract State</p>
          <p className="text-sm text-gray-600">{currentState}</p>
          <button
            onClick={depositPrize}
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200"
          >
            Deposit Prize (0.01 ETH)
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Connect with MetaMask
        </button>
      )}
    </div>
  );
}