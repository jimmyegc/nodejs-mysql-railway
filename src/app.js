import express from 'express'
import { pool } from './db.js'
import { PORT } from './config.js'

const app = express()

app.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users')
  res.send(rows)
})

app.get('/create', async (req, res) => {
  const result = await pool.query(`INSERT INTO users(name) VALUES ("Jimbo")`)
  res.send(result)
})

app.get('/ping', async (req, res) => {
  const [result] = await pool.query(`SELECT "HelloWorld" AS RESULT`)
  //const result = "Hi"
  res.send(result[0])
})

app.listen(PORT,() => {
  console.log('Server running on port ' + PORT)
})