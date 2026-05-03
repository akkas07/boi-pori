import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Icons */}
      <div className="social-icons">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-google-plus-g"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-vimeo-v"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>

      <hr />

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © BoiPori. All Rights Reserved.</p>
        <div className="payment-icons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/2checkout_logo.png" alt="2CO" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Skrill_logo.svg" alt="Moneybookers" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Cirrus_logo.svg" alt="Cirrus" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
