import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="text-decoration-none fw-semibold"
          >
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Pricing Cards Section */}
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <div className="border rounded p-4 flex-fill text-center">
              <h1 className="mb-2">₹0</h1>
              <p className="mb-0">
                Free equity delivery<br />
                & direct mutual funds
              </p>
            </div>
            <div className="border rounded p-4 flex-fill text-center">
              <h1 className="mb-2">₹20</h1>
              <p className="mb-0">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
