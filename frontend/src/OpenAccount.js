import React from "react";

function OpenAccount() {
  return (
    <div className="conatainer p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5  text-muted" style={{ fontWeight: "500" }}>
          Open a Zerodha account
        </h1>
        <p className="mb-4 mt-2 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <a
          href="/signup"
          className="btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </a>
      </div>
    </div>
  );
}

export default OpenAccount;
