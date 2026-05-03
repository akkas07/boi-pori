import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      {/* Left - Image */}
      <div className="banner-image">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" 
          alt="Child reading book"
        />
      </div>

      {/* Right - Quote + Buttons */}
      <div className="banner-content">
        <h2 className="quote">
          Let us remember: <br />
          <span className="highlight">
            "One book, one pen, one child and one teacher can change the world."
          </span>
          <br />– Malala Yousafzai
        </h2>

        <div className="banner-buttons">
          <button className="btn free">📖 Free book</button>
          <button className="btn rent">📚 Rent books</button>
          <button className="btn buy">📕 Buy books</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
