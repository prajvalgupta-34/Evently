# Evently - Decentralized Event Management Platform

Evently is a modern, decentralized platform for creating, managing, and attending events. It leverages blockchain technology for secure and transparent ticketing and prize distribution.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm
*   Git

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/prajvalgupta-34/Evently.git
    ```
2.  **Install frontend dependencies**
    ```sh
    cd frontend
    npm install
    ```
3.  **Install backend dependencies**
    ```sh
    cd ../backend
    npm install
    ```
4.  **Install contract dependencies**
    ```sh
    cd ../contracts
    npm install
    ```
5.  **Set up environment variables**
    *   Create a `.env.local` file in the `frontend` directory and add your Supabase URL and anonymous key:
        ```
        NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
        NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
        ```
    *   Create a `.env` file in the `backend` directory and add your OpenAI API key and Supabase credentials:
        ```
        OPENAI_API_KEY=your_openai_api_key
        SUPABASE_URL=your_supabase_url
        SUPABASE_ANON_KEY=your_supabase_anon_key
        ```

### Running the Application

1.  **Start the backend server**
    ```sh
    cd backend
    npm start
    ```
2.  **Start the frontend development server**
    ```sh
    cd frontend
    npm run dev
    ```
3.  **Deploy the smart contract (optional)**
    ```sh
    cd contracts
    npx hardhat run scripts/deploy.js --network localhost
    ```

The application will be available at `http://localhost:3000`.