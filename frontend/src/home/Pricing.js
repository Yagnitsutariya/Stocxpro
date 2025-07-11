import React from "react";

function Pricing() {
  return (
    <div className="container p-3">
      <div className="row align-items-center p-5">
        <div className="col-md-6">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none", fontWeight: 500 }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-6">
          <div className="row text-center justify-content-center">
            <div className="col border p-4 m-2">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col border p-4 m-2">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
