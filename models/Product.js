import mongoose from 'mongoose'

// create a schema for data validation
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        $gt: 0
    },
    category: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
    tags: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// create a model that our app uses to interact with our user data
const Product = mongoose.model('Product', productSchema)

export default Product