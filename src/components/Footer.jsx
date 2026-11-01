import { Mail, Phone, MapPin } from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">ShopEase.</h2>

          <p>
            Discover the latest trends and shop your
            favourite products at the best prices.
          </p>

          <div className="social-links">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="GitHub">GH</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">My Cart</Link>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Return Policy</a>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Information</h3>

          <p><Mail size={17} /> support@shopease.com</p>
          <p><Phone size={17} /> +91 9876543210</p>
          <p><MapPin size={17} /> New Delhi, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ShopEase. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;