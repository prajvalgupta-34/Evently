# Next-Generation Event Management MVP

This project is a full-stack event management application built with Next.js, Node.js/Express, Supabase, OpenAI, and blockchain technologies.

## Setup Instructions

### Prerequisites

- Node.js and npm
- A Supabase project with the `events` and `participants` tables
- An OpenAI API key
- MetaMask browser extension

### Environment Variables

Create a `.env.local` file in the `frontend` directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Create a `.env` file in the `backend` directory with the following variables:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_service_key
OPENAI_API_KEY=your_openai_api_key
```

### Frontend

To run the frontend application, navigate to the `frontend` directory and run the following commands:

```bash
npm install
npm run dev
```

### Backend

To run the backend server, navigate to the `backend` directory and run the following commands:

```bash
npm install
npm start
```

### Blockchain

To deploy the smart contract, navigate to the `contracts` directory and run the following commands:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Compile the contract:**
   ```bash
   npx hardhat compile
   ```

3. **Deploy the contract:**
   - Update the `judgeAddress` in `scripts/deploy.js` with the desired judge's wallet address.
   - Run the deployment script:
     ```bash
     npx hardhat run scripts/deploy.js --network <your_network>