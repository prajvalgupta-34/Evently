import ConnectWallet from '@/components/ConnectWallet';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectWallet />
      <h1 className="text-4xl font-bold">Welcome to the Event Management MVP</h1>
    </main>
  );
}