import React from "react";

function Award() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src="images/largestBroker.svg" alt="awards"></img>
        </div>

        <div className="col-6 p-5 mt-2">
          <h1>Largest stock broker in India</h1>

          <p className="mb-2">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row"> 
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Stocks &amp; IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Bonds and Govt.Securities</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="images\pressLogos.png" style={{width:"90%"}} alt="Award Img"></img>
        </div>
      </div>
    </div>
  );
}
export default Award;