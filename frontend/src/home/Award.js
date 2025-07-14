import React from "react";

function Award() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="images/largestBroker.svg"
            alt="Award"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text Content Column */}
        <div className="col-12 col-md-6 p-md-5 mt-2 text-center text-md-start">
          <h1 className="mb-3">Largest stock broker in India</h1>

          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Futures and Options</li>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Bonds and Govt. Securities</li>
                <li>Currency derivatives</li>
                <li>Commodity derivatives</li>
              </ul>
            </div>
          </div>

          <img
            src="images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Award;
