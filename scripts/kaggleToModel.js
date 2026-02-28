import fs from 'fs'
import csv from 'csv-parser'

const usersMap = {}
const productsMap = {}

let count = 0
const LIMIT = 100 // PEGA SÓ 100 LINHAS

fs.createReadStream('./data/online_retail.csv')
.pipe(csv({
  headers: [
    'index',
    'InvoiceNo',
    'StockCode',
    'Description',
    'Quantity',
    'InvoiceDate',
    'UnitPrice',
    'CustomerID',
    'Country'
  ],
  skipLines: 1
}))
.on('data', row => {

  if (count >= LIMIT) return
  if (!row.CustomerID) return

  const userId = row.CustomerID
  const productId = row.StockCode

  // 🟣 PRODUTO
  if (!productsMap[productId]) {
    productsMap[productId] = {
      id: productId,
      name: row.Description || `Product_${productId}`,
      category: row.Country || "general",
      price: parseFloat(row.UnitPrice) || 1,
      color: "default" // seu modelo precisa
    }
  }

  // 🟣 USUÁRIO
  if (!usersMap[userId]) {
    usersMap[userId] = {
      id: userId,
      name: `User_${userId}`,
      age: 18 + Math.floor(Math.random() * 40),
      purchases: []
    }
  }

  usersMap[userId].purchases.push(productsMap[productId])

  count++
})
.on('end', () => {

  const users = Object.values(usersMap)
    .filter(u => u.purchases.length >= 2)

  const products = Object.values(productsMap)


  fs.writeFileSync('./data/products.json', JSON.stringify(products, null, 2))
  fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2))

  console.log(" Mock substituído por Kaggle!")
  console.log(`Users gerados: ${users.length}`)
  console.log(`Products gerados: ${products.length}`)
})