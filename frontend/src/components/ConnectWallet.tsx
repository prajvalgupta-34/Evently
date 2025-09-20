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
    <div>
      {account ? (
        <div>
          <p>Connected: {account}</p>
          <p>Contract State: {currentState}</p>
          <button onClick={depositPrize} className="bg-blue-500 text-white p-2 rounded mt-2">
            Deposit Prize (0.01 ETH)
          </button>
        </div>
      ) : (
        <button onClick={connectWallet} className="bg-orange-500 text-white p-2 rounded">
          Connect Wallet
        </button>
      )}
    </div>
  );
}