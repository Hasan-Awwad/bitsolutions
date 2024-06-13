import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-4 pb-4">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>
                    <a
                      href="geo:33.8277427,35.5231261?q=33.8277427,35.5231261"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Baabda, Mount Lebanon
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>
                    <a
                      href="tel:+9613418485"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      +961 (03) 418-485
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>
                    <a
                      href="mailto:h.awwad@progrouplb.com"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      h.awwad@progrouplb.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-4 pb-4">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="#logo">
                    <img src="./BitsLogo.png" className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>Experience The Difference</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://www.facebook.com/profile.php?id=100011058845861">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#logo">
                    <i className="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#logo">
                    <i className="fab fa-google-plus-g google-bg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/cyber-hasan-awwad">
                    <i
                      className="fab fa-linkedin-in linkedin-in-bg"
                      style={{ background: "#0077b5" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" style={{ textDecoration: "none" }}>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:h.awwad@progrouplb.com"
                      style={{ textDecoration: "none" }}
                    >
                      Mail
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/cyber-hasan-awwad"
                      style={{ textDecoration: "none" }}
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="geo:33.8277427,35.5231261?q=33.8277427,35.5231261(Bitsolutions)"
                      style={{ textDecoration: "none" }}
                    >
                      location
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+9613418485"
                      style={{ textDecoration: "none" }}
                    >
                      Mobile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
