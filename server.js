import express from 'express'
import './db/connection.js'
import productRoutes from './routes/productRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('Server is listening on port: ', PORT)
})



