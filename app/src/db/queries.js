import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
//DB config
const { Pool } = pg;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

export async function validateDbConnection() {
  try {
    await pool.query("SELECT 1");
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
}

export const GetBooks = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM books ORDER BY id ASC");

    res.status(200).json(rows);
  } catch (error) {
    console.error("Couldn't find books:", error);
    res.status(500).json({ error: "Can not find books!" });
  }
};

export const InsertBook = async (req, res) => {
  try {
    const { name, author, description } = req.body;

    const book = await pool.query(
      "INSERT INTO books (name, author, description) VALUES ($1, $2, $3)",
      [name, author, description],
    );

    res.status(200).json({
      message: "Successfully inserted book!",
      book: book.rows[0],
    });
  } catch (error) {
    console.error("Couldn't insert book:", error);
    res.status(500).json({ error: "Can not insert book!" });
  }
};
