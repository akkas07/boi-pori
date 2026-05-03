import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Icons */}
      <div className="social-icons">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>

      {/* Quick Links */}
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Books</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>

      <hr />

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© BoiPori. All Rights Reserved.</p>
        <div className="payment-icons">
          {/* International Payments */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" />

          {/* Bangladeshi Mobile Banking */}
          <img src="https://download.logo.wine/logo/BKash/BKash-Logo.wine.png" alt="bKash" />
          <img src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" alt="Nagad" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
