import React, { useEffect } from "react";
import "./products.css";
import "./ProductsCarousel.css";
import "./ProductsCarouselScript";
import { useLocation } from "react-router-dom";
const Products = () => {
  const location = useLocation();

  useEffect(() => {
    // Define the key to store the last visited timestamp
    const lastVisitedKey = "productsPageLastVisited";

    // Get the current timestamp
    const now = new Date().getTime();

    // Retrieve the last visited timestamp from sessionStorage
    const lastVisited = sessionStorage.getItem(lastVisitedKey);

    // Define a timeout period (in milliseconds)
    const timeoutPeriod = 5000; // 5 seconds, adjust as needed

    // Check if the last visited timestamp is within the timeout period
    if (!lastVisited || now - lastVisited > timeoutPeriod) {
      // Set the current timestamp in sessionStorage
      sessionStorage.setItem(lastVisitedKey, now.toString());

      // Reload the page
      window.location.reload();
    }
  }, [location]);
  return (
    // <div className="products-container">
    //   <div className="product-item">
    //     <img src="./icon-meal-trans.png" alt="icon-meal-trans" />
    //     <div className="product-data">
    //       <h6>Restaurant Management System POS</h6>
    //       <p>
    //         POS is a point of sale system with Manu Group, Retail Management,
    //         User Preferences, Maintenance, and POS delivers a fast...
    //       </p>
    //     </div>
    //   </div>
    //   <div className="product-item">
    //     <img src="./check.png" alt="check" />
    //     <div className="product-data">
    //       <h6>Check (financial) Management</h6>
    //       <p>
    //         Manages the Consolidation of user’s Check Book with the bank and/or
    //         automatically set any transaction’s cleared property...
    //       </p>
    //     </div>
    //   </div>
    //   <div className="product-item">
    //     <img src="./assets.png" alt="assets" />
    //     <div className="product-data">
    //       <h6>Asset Management System</h6>
    //       <p>
    //         Broadly defined, refers to any system whereby things that are of
    //         value to an entity or group are monitored and maintained...
    //       </p>
    //     </div>
    //   </div>
    //   <div className="product-item">
    //     <img src="./CRM.png" alt="CRM" />
    //     <div className="product-data">
    //       <h6>Customer Relationship Management System</h6>
    //       <p>
    //         is a widely implemented strategy for managing a company’s
    //         interactions with customers, clients and sales prospects...
    //       </p>
    //     </div>
    //   </div>
    //   <div className="product-item">
    //     <img src="./icon-payroll.png" alt="icon-payroll" />
    //     <div className="product-data">
    //       <h6>Payroll Management System</h6>
    //       <p>
    //         The payroll management system let the employee prepare the pay slip
    //         that states the salary of the employee based on his time card...
    //       </p>
    //     </div>
    //   </div>
    //   <div className="product-item">
    //     <img src="./users.png" alt="personnel" />
    //     <div className="product-data">
    //       <h6>Personnel Management System</h6>
    //       <p>
    //         Personnel management system provides the user with a friendly
    //         interface to manage employee's records and files...
    //       </p>
    //     </div>
    //   </div>
    //   <div className="product-item">
    //     <img src="./contact.png" alt="contact" />
    //     <div className="product-data">
    //       <h6>Contact Management System</h6>
    //       <p>
    //         Contact Management let users Mange all contacts and classifies them
    //         all in one system...
    //       </p>
    //     </div>
    //   </div>
    //   <div className="product-item">
    //     <img src="./doctor.png" alt="doctor" />
    //     <div className="product-data">
    //       <h6>MedX a Complete Clinic Management System</h6>
    //       <p>
    //         MedX is a Clinic Management System including an Accounting Module,
    //         Medical Management Tools, Patients data, Clinic Data...
    //       </p>
    //     </div>
    //   </div>
    //   <div className="product-item">
    //     <img src="./accounting.png" alt="accounting" />
    //     <div className="product-data">
    //       <h6>Accounting Management System</h6>
    //       <p>
    //         Accounting Information System is a system of collection, storage and
    //         processing of financial and accounting data that is used by decision
    //         makers...
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div id="contentContainer" className="trans3d">
      <section id="carouselContainer" className="trans3d">
        <figure id="item1" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">
            <div className="product-item">
              <img src="./icon-meal-trans.png" alt="icon-meal-trans" />
              <div className="product-data">
                <h6>Restaurant Management System POS</h6>
                <p>
                  POS is a point of sale system with Manu Group, Retail
                  Management, User Preferences, Maintenance, and POS delivers a
                  fast...
                </p>
              </div>
            </div>
          </div>
        </figure>
        <figure id="item2" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">
            <div className="product-item">
              <img src="./check.png" alt="check" />
              <div className="product-data">
                <h6>Check (financial) Management</h6>
                <p>
                  Manages the Consolidation of user’s Check Book with the bank
                  and/or automatically set any transaction’s cleared property...
                </p>
              </div>
            </div>
          </div>
        </figure>
        <figure id="item3" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">
            <div className="product-item">
              <img src="./assets.png" alt="assets" />
              <div className="product-data">
                <h6>Asset Management System</h6>
                <p>
                  Broadly defined, refers to any system whereby things that are
                  of value to an entity or group are monitored and maintained...
                </p>
              </div>
            </div>
          </div>
        </figure>
        <figure id="item4" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">
            <div className="product-item">
              <img src="./CRM.png" alt="CRM" />
              <div className="product-data">
                <h6>Customer Relationship Management System</h6>
                <p>
                  is a widely implemented strategy for managing a company’s
                  interactions with customers, clients and sales prospects...
                </p>
              </div>
            </div>
          </div>
        </figure>
        <figure id="item5" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">
            <div className="product-item">
              <img src="./icon-payroll.png" alt="icon-payroll" />
              <div className="product-data">
                <h6>Payroll Management System</h6>
                <p>
                  The payroll management system let the employee prepare the pay
                  slip that states the salary of the employee based on his time
                  card...
                </p>
              </div>
            </div>
          </div>
        </figure>
        <figure id="item6" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">
            <div className="product-item">
              <img src="./users.png" alt="personnel" />
              <div className="product-data">
                <h6>Personnel Management System</h6>
                <p>
                  Personnel management system provides the user with a friendly
                  interface to manage employee's records and files...
                </p>
              </div>
            </div>
          </div>
        </figure>
        <figure id="item7" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">
            <div className="product-item">
              <img src="./contact.png" alt="contact" />
              <div className="product-data">
                <h6>Contact Management System</h6>
                <p>
                  Contact Management let users Mange all contacts and classifies
                  them all in one system...
                </p>
              </div>
            </div>
          </div>
        </figure>
        <figure id="item8" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">
            <div className="product-item">
              <img src="./doctor.png" alt="doctor" />
              <div className="product-data">
                <h6>MedX a Complete Clinic Management System</h6>
                <p>
                  MedX is a Clinic Management System including an Accounting
                  Module, Medical Management Tools, Patients data, Clinic
                  Data...
                </p>
              </div>
            </div>
          </div>
        </figure>
        <figure id="item9" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">
            <div className="product-item">
              <img src="./accounting.png" alt="accounting" />
              <div className="product-data">
                <h6>Accounting Management System</h6>
                <p>
                  Accounting Information System is a system of collection,
                  storage and processing of financial and accounting data that
                  is used by decision makers...
                </p>
              </div>
            </div>
          </div>
        </figure>
        <figure id="item10" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">10</div>
        </figure>
        <figure id="item11" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">11</div>
        </figure>
        <figure id="item12" className="carouselItem trans3d">
          <div className="carouselItemInner trans3d">12</div>
        </figure>
      </section>
    </div>
  );
};

export default Products;
