import React from "react";
import "./footer.css";
const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      <div className="col-xl-4 col-md-4 mb-30" style={{ background: "black" ,padding:"10px",margin:"10px"}}>
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
      <div className="col-xl-4 col-md-4 mb-30" style={{ background: "black" ,padding:"10px",margin:"10px"}}>
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
      <div className="col-xl-4 col-md-4 mb-30" style={{ background: "black" ,padding:"10px",margin:"10px"}}>
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
  );
};

export default Contact;
