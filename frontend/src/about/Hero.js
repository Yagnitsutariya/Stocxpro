import React from "react";

function Hero() {
  return (
    <div className="container my-5">
      {/* Heading Section */}
      <div className="row justify-content-center text-center px-3">
        <div className="col-12 col-md-10">
          <h1 className="fs-2">
            We pioneered the discount broking model in India
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="row border-top text-muted fs-6 mt-5 pt-5 px-3">
        <div className="col-12 col-md-6 mb-4 mb-md-0 px-md-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-md-6 px-md-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a
              href="#"
              className="text-decoration-none fw-semibold"
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
