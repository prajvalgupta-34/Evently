require('dotenv').config();
const express = require('express');
const cors = require('cors');
const supabase = require('./supabase');
const { OpenAI } = require('openai');

const app = express();
const port = process.env.PORT || 3001;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/api/registerParticipant', async (req, res) => {
  const { name, skills, wallet } = req.body;
  const { data, error } = await supabase
    .from('participants')
    .insert([{ name, skills, wallet }]);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json({ data });
});

app.post('/api/createEvent', async (req, res) => {
  const { title, prize, description } = req.body;
  const { data, error } = await supabase
    .from('events')
    .insert([{ title, prize, description }]);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json({ data });
});

app.get('/api/matchmake', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant that recommends teammates for a hackathon. Based on the user's skills, recommend 3 teammates with complementary skills. For the purpose of this MVP, please return a JSON array of 3 teammates with their names and skills." }],
      model: "gpt-3.5-turbo",
    });
    const recommendations = JSON.parse(completion.choices[0].message.content);
    res.status(200).json({ data: recommendations });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recommendations from OpenAI' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});