import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <div className="hero-text">
            <p className="quote-label">Let us remember:</p>
            <h1 className="main-quote">
              “One book, one pen, one child<br />
              and one teacher can <span className="highlight">change the world</span>.”
            </h1>
            <p className="author">- Malala Yousafzai</p>
          </div>
          
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800" 
              alt="Child reading" 
            />
          </div>
        </div>
      </div>

      {/* Three Cards */}
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">📚</div>
          <h3>Free book</h3>
          <p>Browse your Free book</p>
          <a href="#" className="service-link">→</a>
        </div>

        <div className="service-card">
          <div className="service-icon">🔄</div>
          <h3>Rent books</h3>
          <p>Browse your Rent books</p>
          <a href="#" className="service-link">→</a>
        </div>

        <div className="service-card">
          <div className="service-icon">🛒</div>
          <h3>Buy books</h3>
          <p>Browse your Buy books</p>
          <a href="#" className="service-link">→</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;