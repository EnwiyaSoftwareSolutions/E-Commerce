import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';

if(!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    );
}
let isConnected = false;

export const connectToDatabase = async () => {
    if (isConnected) {
        console.log('=> Using existing database connection');
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI);
        isConnected = true;
        console.log('=> New database connection established');
    } catch (error) {
        console.error('=> Error connecting to the database:', error);
        throw error;
    }
}