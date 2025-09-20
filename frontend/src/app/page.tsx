import Link from 'next/link';
import ConnectWallet from '../components/ConnectWallet';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">EvenTly</h1>
        <nav>
          <Link href="/dashboard" className="text-lg hover:text-gray-400 mr-4">Dashboard</Link>
          <Link href="/create-event" className="text-lg hover:text-gray-400 mr-4">Create Event</Link>
          <Link href="/login" className="text-lg hover:text-gray-400">Login</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4">The Future of Event Management</h2>
        <p className="text-xl mb-8">Create, manage, and attend events with ease.</p>
        <div className="flex justify-center">
          <ConnectWallet />
        </div>
      </main>

      <section className="container mx-auto px-4 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-2">Easy Event Creation</h4>
            <p>Create and customize your events in minutes with our intuitive interface.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-2">Seamless Ticketing</h4>
            <p>Sell tickets and manage attendees effortlessly with our integrated system.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-2">Real-time Analytics</h4>
            <p>Track your event's performance with our comprehensive analytics dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 EvenTly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}