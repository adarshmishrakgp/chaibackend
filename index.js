require('dotenv').config()

console.log('Chai Aur Code By Pandit Ji');

const express = require('express')
//import express from 'express'
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send(' mishirJitutobanibadabadathandha ')
})
app.get('/login', (req, res) => {
  res.send('<h1> please login at chai aur code </h1>')
})
app.get('/twitter', (req, res) => {
  res.send('mishirJitutobanibadabadathandha')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
