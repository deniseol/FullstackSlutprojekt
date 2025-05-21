/* import express from 'express'
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
});
app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.render('products', { products: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});


// Starta servern
app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`)
})
 */
import express from 'express'

import cors from 'cors'

import pg from 'pg'

import dotenv from 'dotenv'

dotenv.config() // Laddar .env-filen

const { Pool } = pg

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

// Testa anslutning

pool

  .connect()

  .then((client) => {

    console.log('✅ Connected to database')

    client.release()

  })

  .catch((err) => {

    console.error('❌ Database connection error:', err)

  })

// API: Test-endpoint

app.get('/api', async (req, res) => {

  try {

    const result = await pool.query('SELECT NOW()')

    res.json(result.rows[0])

  } catch (err) {

    console.error('❌ Error in /api:', err)

    res.status(500).json({ error: 'Server error' })

  }

})

// API: Hämta alla produkter

app.get('/products', async (req, res) => {

  try {

    const result = await pool.query('SELECT * FROM products')

    res.json(result.rows)

  } catch (err) {

    console.error('❌ Error in /products:', err)

    res.status(500).json({ error: 'Database error or table "products" does not exist' })

  }

})

// Starta servern

app.listen(port, () => {

  console.log(`🚀 Server listening on port ${port}`)

})
 
