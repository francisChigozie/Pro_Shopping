import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel.js";
const router = express.Router()
import product from '../models/ProductModel.js'

//@desc Fetch all products
//@route GET /api/products
//@access Public
router.get(
    '/', 
    asyncHandler(async (req, res) => {
    const products = await Product.find({})
    //throw new Error('Some error')
    res.json(products)
}))

//@desc Fetch single product
//@route GET /api/product/:id
//@access Public
router.get(
    '/:id',
     asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    }else {
        res.status(404)
        throw new Error('Product not found')
    }
  })
)

export default router