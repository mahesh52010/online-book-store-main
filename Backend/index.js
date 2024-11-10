import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Updated MongoDB connection string
const mongoURI = 'mongodb://atlas-sql-672e3eba670bbb2724fa746d-rqj18.a.query.mongodb.net/online-book-store-main?ssl=true&authSource=admin';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Middleware and routes would go here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
