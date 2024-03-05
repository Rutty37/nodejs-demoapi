const express = require('express')
const app = express()

const province = require('./public/province.json')
const province_polygon = require('./public/province_polygon.json')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/province', (req, res) => {
    res.json(province)
})

app.get('/province_polygon', (req, res) => {
    res.json(province_polygon)
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})