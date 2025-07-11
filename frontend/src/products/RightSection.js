import React from "react";

function RightSection({
  imageURl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5 text-center text-md-start">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn More
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            src={imageURl}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto"}}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
