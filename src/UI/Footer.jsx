
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="back-to-top">Back to top</div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Amazon</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Amazon Devices</a></li>
            <li><a href="#">Amazon Science</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#">Sell products on Amazon</a></li>
            <li><a href="#">Sell on Amazon Business</a></li>
            <li><a href="#">Sell apps on Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise Your Products</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li><a href="#">Amazon Business Card</a></li>
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">Amazon Currency Converter</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href="#">Amazon and COVID-19</a></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Returns & Replacements</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>


      <div className="footer-bottom">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="footer-logo" />
        <div className="footer-settings">
          <button>🌐 English</button>
          <button>💲 USD - U.S Dollar</button>
          <button>🇺🇸 United States</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
