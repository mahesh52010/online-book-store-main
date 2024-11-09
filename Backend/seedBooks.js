// Backend/seedBooks.js

import mongoose from "mongoose";
import Book from "./model/book.model.js";  // Changed from ./models/book.model.js
import dotenv from "dotenv";

dotenv.config();

const books = [
    {
        name: "BEGINING OF MERN STACK",
        price: 24.99,
        category: "BASIC",
        image: "https://m.media-amazon.com/images/I/71saawJytPL._UF1000,1000_QL80_.jpg",
        description: "LEARN BASICS OF MERN STACK"
      },
  {
    name: "PRO MERN STACK",
    price: 29.99,
    category: "ADVANCED",
    image: "https://m.media-amazon.com/images/I/71YNqR4it9L._UF1000,1000_QL80_.jpg",
    description: "ADVANCED LERANING OF MERN STACK"
  },
 
  {
    name: "BASIC WEB DEVELOPMENT",
    price: 19.99,
    category: "BASIC",
    image: "https://m.media-amazon.com/images/I/61W13gbk3pS._AC_UF1000,1000_QL80_.jpg",
    description: "BASIC WEB DEVELOPMENT"
  },
  {
    name: "ADVANCED WEB DEVELOPMENT",
    price: 34.99,
    category: "ADVANCED",
    image: "https://m.media-amazon.com/images/I/610s7SZsSeL._AC_UF1000,1000_QL80_.jpg",
    description: "ADVANCED WEB DEVELOPMENT"
  },
  {
    name: "ADVANCED JAVA PROGRAMMING",
    price: 31.99,
    category: "ADVANCED",
    image: "https://rukminim2.flixcart.com/image/850/1000/kjswia80/book/7/h/u/advanced-java-programming-for-gtu-18-course-vi-cse-prof-elec-iii-original-imafzajd5f8yywma.jpeg?q=90&crop=false",
    description: "ADVANCED JAVA PROGRAMMING"
  },
  {
    name: "JAVA FOR BEGINNERS ",
    price: 27.99,
    category: "Thriller",
    image: "https://m.media-amazon.com/images/I/811dBvMt8XL._UF1000,1000_QL80_.jpg",
    description: "LEARN JAVA FROM BASICS"
  },
  
];

// MongoDB connection using environment variable
mongoose.connect(process.env.MongoDBURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Function to seed books
const seedBooks = async () => {
  try {
    // Delete existing books
    await Book.deleteMany({});
    
    // Insert new books
    await Book.insertMany(books);
    
    console.log("Books seeded successfully!");
  } catch (error) {
    console.log("Error seeding books:", error);
  } finally {
    mongoose.disconnect();
  }
};

// Run the seeding function
seedBooks();