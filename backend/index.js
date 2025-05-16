import express from 'express'
import cors from 'cors'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config() // Laddar .env-filen

const { Pool } = pg // Extraherar Pool ur pg
const app = express()
const port = process.env.PORT || 5050

// Middleware
app.use(cors())
app.use(express.json())

// Databasanslutning
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

// Testa anslutning + visa tabeller
pool
  .connect()
  .then((client) => {
    console.log('✅ Connected to database')

    return client
      .query(
        `
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public';
    `
      )
      .then((result) => {
        console.log('📋 Available tables:')
        result.rows.forEach((row) => console.log('- ' + row.table_name))
        client.release() // Viktigt!
      })
  })
  .catch((err) => {
    console.error('❌ Database connection error:', err)
  })

// API: Test-endpoint , KOLLA ATT SERVERN är uppe!
app.get('/api', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')
    res.json(result.rows[0])
  } catch (err) {
    console.error('❌ Error in /api:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Starta servern
app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`)
})
