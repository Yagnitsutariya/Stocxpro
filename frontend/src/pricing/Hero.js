import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-4 border-bottom text-center ">
        <h1 style={{fontWeight:"600"}}>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-3 mt-2 text-center" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <div className="col-12 col-md-4 p-4">
            <img src="images/pricingEquity.svg" alt="img" className="img-fluid" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted ">All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.</p>
        </div>

         <div className="col-12 col-md-4 p-4">
            <img src="images/intradayTrades.svg" alt="img" className="img-fluid" />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="text-muted "> Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.</p>
        </div>

         <div className="col-12 col-md-4 p-4">
            <img src="images/pricingEquity.svg" alt="img" className="img-fluid" />
            <h1 className="fs-3">Free direct MF</h1>
            <p className="text-muted ">All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
