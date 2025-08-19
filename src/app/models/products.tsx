import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g. "Skincare", "Makeup"
  brand: { type: String },
  images: [{ type: String }], // Array of image URLs
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  reviews: [{ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: String,
    rating: Number,
    date: { type: Date, default: Date.now }
  }],
  ingredients: [{ type: String }],
  tags: [{ type: String }],
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});


const Product = mongoose.model("Product", productSchema);
export default Product;