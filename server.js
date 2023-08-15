const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.get('/products', (req, res) => {
  res.send([
    {
      "id": 1,
      "name": "Laptop",
      "category": "Electronics",
      "price": 999.99,
      "stock": 50
    },
    {
      "id": 2,
      "name": "Smartphone",
      "category": "Electronics",
      "price": 699.00,
      "stock": 100
    },
    {
      "id": 3,
      "name": "Bookshelf",
      "category": "Furniture",
      "price": 149.95,
      "stock": 25
    },
    {
      "id": 4,
      "name": "Running Shoes",
      "category": "Sports",
      "price": 89.99,
      "stock": 75
    },
    {
      "id": 5,
      "name": "Coffee Maker",
      "category": "Appliances",
      "price": 49.50,
      "stock": 40
    }
  ])
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
