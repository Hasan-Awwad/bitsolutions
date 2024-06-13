import React from "react";

const Careers = () => {
  return (
    <div className="careers-container" style={{marginBottom:"3%"}}>
      <div
        style={{
          display: "flex",
          padding: "3%",
          justifyContent: "space-around",
        }}
      >
        <img
          src="./career.png"
          alt="career"
          style={{ width: "175px", padding: "2%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <h2>Careers at Bit Solutions</h2>
          <h4>
            Founded in 1992, BIT Solutions is an independent software vendor and
            IT services organization with offices in the USA and Beirut Lebanon.
          </h4>
          <h6>
            We are a leading business and technology solution provider,
            developing business solutions , training, IT resources, and
            consultancy across any size organization.
          </h6>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "3%",
          justifyContent: "space-around",
        }}
      >
        <img
          src="./work.png"
          alt="work"
          style={{ width: "175px", padding: "2%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <h2>Why work at Bit Solutions </h2>
          <h4>
            We at BIT Solutions are in the business of helping organizations
            improve their business process by providing highly scalable and
            flexible software management solution in a secure, collaborative
            work environment.
          </h4>
          <h6>
            We are a leading business and technology solution provider,
            developing business solutions , training, IT resources, and
            consultancy across any size organization.
          </h6>
        </div>
      </div>
      <div>
        <button style={{marginLeft:"45%"}}>Upload Your Resume</button>
      </div>
    </div>
  );
};

export default Careers;
