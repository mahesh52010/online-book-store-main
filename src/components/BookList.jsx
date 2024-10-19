// src/components/BookList.jsx

import React from 'react';

const BookList = ({ title }) => {
  // Sample book data (you would typically fetch this from an API)
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: 'https://cdn.kobo.com/book-images/f37f5bc2-8171-475a-99fb-2f807813e085/353/569/90/False/the-great-gatsby-deluxe-hardbound-edition.jpg', rating: 4.5, price: '$12.99' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg', rating: 4.8, price: '$14.99' },
    { id: 3, title: '1984', author: 'George Orwell', cover: 'https://www.maplepress.co.in/cdn/shop/products/9789352230761_700x700.jpg?v=1624804888', rating: 4.6, price: '$11.99' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', cover: 'https://m.media-amazon.com/images/I/61B9xYXF3ZL._AC_UF350,350_QL50_.jpg', rating: 4.7, price: '$10.99' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', cover: 'https://rukminim2.flixcart.com/image/850/1000/kufuikw0/book/p/a/q/the-catcher-in-the-rye-original-imag7jttju9vfuxa.jpeg?q=20&crop=false', rating: 4.3, price: '$13.99' },
    { id: 6, title: 'To the Lighthouse', author: 'Virginia Woolf', cover: 'https://www.maplepress.co.in/cdn/shop/files/9_512x512.jpg?v=1692257403', rating: 4.4, price: '$15.99' },
    // Add more books as needed
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
              <img 
                src={book.cover} 
                alt={book.title} 
                className="w-full h-80 object-cover object-center"
              />
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">{book.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{book.author}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0  00-.363-1.118L6.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{book.rating} / 5</span>
                  </div>
                  <span className="text-lg font-bold text-gray-800 dark:text-white">{book.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;