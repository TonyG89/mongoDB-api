const express = require('express')
const { connectToDb, getDb } = require('./db')

const PORT = 3000

const app = express()

let db

console.log('start')

connectToDb(err => {
  console.log('sa')
  console.log(err)
  if (!err) {
    app.listen(PORT, (error) => {
      error ? console.log(error) : console.log('started server in port: ' + PORT)
      db = getDb()
    })
  } else {
    console.log('db connection error ' + err)
  }
})

app.get('/blank_clothes', (req, res) => {
  const clothes = []
  db.collection('blank_clothes')
    .find()
    .forEach(item => clothes.push(item))
    .then(()=>{
      res.status(200).json(clothes)
    })
})


