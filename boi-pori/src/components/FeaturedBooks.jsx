import { useState } from "react";
import "./FeaturedBooks.css";

const FeaturedBooks = () => {
  const [cart, setCart] = useState([]);

  const categories = [
    {
      title: "NEW",
      books: [
        { title: "The Great Gatsby", img: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg" },
        { title: "Pride and Prejudice", img: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg" },
        { title: "1984", img: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg" },
        { title: "War and Peace", img: "https://covers.openlibrary.org/b/isbn/9780199232765-L.jpg" }
      ],
    },
    {
      title: "FREE",
      books: [
        { title: "To Kill a Mockingbird", img: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg" },
        { title: "Moby Dick", img: "https://covers.openlibrary.org/b/isbn/9781503280786-L.jpg" },
        { title: "The Catcher in the Rye", img: "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg" },
        { title: "Jane Eyre", img: "https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg" }
      ],
    },
    {
      title: "50% DISCOUNT",
      books: [
        { title: "Brave New World", img: "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg" },
        { title: "The Power of Habit", img: "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg" },
        { title: "Rich Dad Poor Dad", img: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg" },
        { title: "Atomic Habits", img: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg" }
      ],
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    if (!cartItems.find((item) => item.title === book.title)) {
      setCartItems([...cartItems, book]);
    }
  };

  const removeFromCart = (book) => {
    setCartItems(cartItems.filter((item) => item.title !== book.title));
  };

  return (
    <div className="featured-section">
      {categories.map((cat, index) => (
        <div key={index} className="category-block">
          <h2 className="category-title">{cat.title}</h2>
          <div className="books-grid">
            {cat.books.map((book, i) => (
              <div key={i} className="book-card">
                <img src={book.img} alt={book.title} className="book-cover" />
                <p className="book-title">{book.title}</p>
                {cartItems.find((item) => item.title === book.title) ? (
                  <button className="remove-btn" onClick={() => removeFromCart(book)}>
                    Remove
                  </button>
                ) : (
                  <button className="add-btn" onClick={() => addToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Cart Section */}
      <div className="cart-section">
        <h2 className="cart-title">🛒 My Cart ({cartItems.length})</h2>
        <div className="cart-items">
          {cartItems.map((book, i) => (
            <div key={i} className="cart-item">
              <img src={book.img} alt={book.title} className="cart-cover" />
              <p>{book.title}</p>
              <button className="remove-btn" onClick={() => removeFromCart(book)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
