import React from "react";
import "./ticker.css";
import "./ticker.js";
import './navbar.css';

const HomeBody = () => {
  return (
    <div>
      <div className="body-container">
        <div className="box">
          <div className="box-heading">
            <img src="./about.png" alt="about" />
            <h2>Who are we?</h2>
          </div>
          <h6>
            Founded in 1992, BIT Solutions is an independent software vendor and
            IT services organization with offices in the USA and Beirut Lebanon.
          </h6>
          <p>
            We are a leading business and technology solution provider,
            developing business solutions, training, IT resources, and
            consultancy across any size organization.
          </p>
        </div>
        <div className="box">
          <div className="box-heading">
            <img src="./missionStatement.png" alt="about" />
            <h2>Mission Statement</h2>
          </div>
          <h6>
            In today's complex business world, competitive advantage is harder
            to achieve – and even more difficult to maintain than it ever has
            been.
          </h6>
          <p>
            In a time of instant global communication and pervasive information,
            the ability to respond with speed, knowledge and confidence to the
            shifting needs of your business and the changing strategies of
            global market is critical.
          </p>
        </div>
      </div>

      <div className="ticker">
        <div className="ticker__list">
          <div className="ticker__item">
            <div className="ticker__image-container">
              <img src="./img1.jpg" alt="img1" />
            </div>
          </div>
          <div className="ticker__item">
            <div className="ticker__image-container">
              <img src="./img2.jpg" alt="img2" />
            </div>
          </div>
          <div className="ticker__item">
            <div className="ticker__image-container">
              <img src="./img3.jpg" alt="img3" />
            </div>
          </div>
          <div className="ticker__item">
            <div className="ticker__image-container">
              <img src="./img4.jpg" alt="img4" />
            </div>
          </div>
          <div className="ticker__item">
            <div className="ticker__image-container">
              <img src="./img5.jpg" alt="img5" />
            </div>
          </div>
        </div>
      </div>

      <div className="body-container">
        <div className="box">
          <h2>What We Do</h2>
          <h6>
            BIT Solutions have been offering IT Services since 1992, with
            offices in USA and Lebanon. BITS provide:
          </h6>
          <div
            className="box-heading"
            style={{ justifyContent: "space-around", paddingTop: "3%" }}
          >
            <ul>
              <li>Consulting</li>
              <li>Training</li>
              <li>Custom Solutions</li>
            </ul>
            <img
              src="./Three-icon.png"
              alt="services"
              style={{ width: "100px", height: "114px" }}
            />
          </div>
        </div>
        <div className="box">
          <h2>Happy Clients</h2>
          <div className="clients">
            <img src="./ccc.png" alt="about" />
            <img src="./kanaan.png" alt="about" />
            <img src="./logo_IP_small.png" alt="about" />
          </div>
          <div className="clients">
            <img src="./shaalan.png" alt="about" />
            <img src="./ul.jpg" alt="about" />
            <img src="./usf.png" alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
