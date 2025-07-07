const express = require('express');
const cors = require('cors'); 
const { Pool } = require('pg');
const { PrismaClient } = require('@prisma/client');

require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();


app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Connect to my PostgreSQL using the DATABASE_URL from .env
});

app.get('/api/test', (req, res) => {  // Sample API endpoint for testing
  res.json({ message: "Test API!" });
});

app.get('/api/plants', async (req, res) => {
  try {
    const plants = await prisma.plant.findMany();
    res.json(plants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
