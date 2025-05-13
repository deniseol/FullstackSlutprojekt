//Denna kod startar en Express-server, ansluter till PostgreSQL och skapar ett APIendpoint på /api.
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const pool = new pg.Pool({
 connectionString: process.env.DATABASE_URL,
 ssl: { rejectUnauthorized: false },
});
app.get("/api", async (req, res) => {
 const result = await pool.query("SELECT NOW()");
 res.json(result.rows[0]);
});
app.listen(port, () => {
 console.log(`Server listening on port ${port}`);
});
