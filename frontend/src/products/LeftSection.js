import React from "react";

function LeftSection({
  imageURl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-item-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0 text-center ">
          <img src={imageURl} alt="img" className="img-fluid"/>
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5 text-center text-md-start">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="images/googlePlayBadge.svg" alt="googleplay" />
            </a>
            <a href={appStore}>
              <img
                src="images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
