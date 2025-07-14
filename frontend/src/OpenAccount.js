import React from "react";

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-8">
          <h1 className="mb-3 text-muted fw-semibold">
            Open a Zerodha account
          </h1>
          <p className="mb-4 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <a
            href="/signup"
            className="btn btn-primary fs-5 px-4 py-2"
          >
            Signup Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
