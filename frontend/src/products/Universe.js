import React from "react";

function Universe() {
  return (
     <div className="container mt-5">
      <div className="row text-center">
        <h1 className="w-100">The Zerodha Universe</h1>
        <p className="w-100">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center">
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" className="img-fluid" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" className="img-fluid" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" className="img-fluid" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" className="img-fluid" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" className="img-fluid" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" className="img-fluid" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <button
            className="p-2 btn btn-primary fs-5 mb-5 mt-4"
            style={{ width: "60%", maxWidth: "300px", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
