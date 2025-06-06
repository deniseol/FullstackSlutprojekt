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
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products')

    res.json(result.rows)
  } catch (err) {
    console.error('❌ Error in /products:', err)

    res
      .status(500)
      .json({ error: 'Database error or table "products" does not exist' })
  }
})
app.get('/api/products/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [
      id
    ])
    if (result.rows.length > 0) {
      res.json(result.rows[0])
    } else {
      res.status(404).json({ error: 'Product not found' })
    }
  } catch (err) {
    console.error('❌ Error in /products/:id:', err)
    res.status(500).json({ error: 'Database error' })
  }
})

app.get('/api/categories', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories')

    res.json(result.rows)
  } catch (err) {
    console.error('❌ Error in /categories:', err)

    res
      .status(500)
      .json({ error: 'Database error or table "categories" does not exist' })
  }
})

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products')

    res.json(result.rows)
  } catch (err) {
    console.error('❌ Error in /products:', err)

    res
      .status(500)
      .json({ error: 'Database error or table "products" does not exist' })
  }
})

// API: Hämta kundvagn
app.get('/api/cart', async (req, res) => {
  try {
    console.log('🔍 Trying to get cart...')
    const result = await pool.query(`
      SELECT c.id, c.quantity, p.name, p.price, p.id as product_id
      FROM cart c
      JOIN products p ON c.product_id = p.id
    `)
    console.log('✅ Cart query successful:', result.rows)
    res.json(result.rows)
  } catch (err) {
    console.error('❌ Error getting cart:', err.message)
    console.error('❌ Full error:', err)
    res.status(500).json({ error: 'Server error', details: err.message })
  }
})

// API: Lägg till produkt i kundvagn
app.post('/api/cart', async (req, res) => {
  const { product_id, quantity = 1 } = req.body

  try {
    // Kolla om produkten redan finns i kundvagnen
    const existing = await pool.query(
      'SELECT * FROM cart WHERE product_id = $1',
      [product_id]
    )

    if (existing.rows.length > 0) {
      // Uppdatera quantity om produkten redan finns
      const result = await pool.query(
        'UPDATE cart SET quantity = quantity + $1 WHERE product_id = $2 RETURNING *',
        [quantity, product_id]
      )
      res.json(result.rows[0])
    } else {
      // Lägg till ny produkt
      const result = await pool.query(
        'INSERT INTO cart (product_id, quantity) VALUES ($1, $2) RETURNING *',
        [product_id, quantity]
      )
      res.json(result.rows[0])
    }
  } catch (err) {
    console.error('❌ Error adding to cart:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

// API: Ta bort från kundvagn
app.delete('/api/cart/:id', async (req, res) => {
  const { id } = req.params

  try {
    await pool.query('DELETE FROM cart WHERE id = $1', [id])
    res.json({ message: 'Item removed from cart' })
  } catch (err) {
    console.error('❌ Error removing from cart:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Starta servern

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`)
})
