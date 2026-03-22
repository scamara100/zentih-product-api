import express from 'express'
import Product from '../models/Product.js'

const router = express.Router()

// POST /api/products (Create a Product)
router.post('/', async (req, res) => {
    try{
        // create a new document and save it in DB
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
    } catch(e){
        res.status(400).json({message: e.message})
    }
})

// GET /api/products/:id (Read a Single Product)
router.get('/:id', async (req, res) => {
    try{   
        const oneProduct = await Product.findById(req.params.id)
        res.status(200).json(oneProduct)
    } catch(e){
        res.status(404).json({message: e.message})
    }
})

// PUT /api/products/:id (Update a Product)
router.put('/:id', async (req, res) => {
    try{
        // store the resquest parameter in a variable called id
        const id = req.params.id
        // pass the id to the method for finding and updateing a document
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true})
        if(!updatedProduct){
            res.status(404).json()
        }
        res.status(201).json({message: `Product with ${id} updated successfully`})
    } catch(e){
        res.status(400).json({message: e.message})
    }
})

// DELETE /api/products/:id (Delete a Product)
router.delete('/:id', async (req, res) => {
    try{
        const deleteProduct = Product.findByIdAndDelete(req.params.id)
        if(!deleteProduct){
            res.status(404).json({message: 'Product no found'})
        }
        res.status(200).json({message: `Product with ${id} deleted successfully`})
    } catch(e){
        res.status(400).json({message: e.message})
    }
})

// GET /api/products (Read All Products with Advanced Querying)
router.get('/', async (req, res) => {
    try{
        const page = 1
        const limit = 10
        const allProduct = await Product.find({category: 'Electronics', price: { $gte: 50, $lte: 100}}).sort({ price: 1}).skip((page - 1) * limit).limit(limit).then(result => {
            console.log(`Showing page ${page} of result: `, result)
        })
    } catch(e){
        res.status(400).json({message: e.message})
    }
})

export default router