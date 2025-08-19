import mongoose from 'mongoose'

const catagorySchema = new mongoose.Schema({
    catagory_name: { type: String, required: true, unique: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Catagory = mongoose.model('Catagory', catagorySchema);
export default Catagory;