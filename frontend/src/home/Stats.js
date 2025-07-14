import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="fs-2 mb-4 text-muted">Trust with confidence</h1>

          <div className="mb-4">
            <h2 className="fs-5 text-muted">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 text-muted">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 text-muted">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your needs.
            </p>
          </div>

          <div>
            <h2 className="fs-5 text-muted">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Image & Links */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="images/ecosystem.png"
            className="img-fluid"
            style={{ maxWidth: "400px" }}
            alt="Ecosystem"
          />

          <div className="mt-4 d-flex flex-column flex-md-row justify-content-center gap-3">
            <a
              href="#"
              className="text-decoration-none fw-semibold"
            >
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href="#"
              className="text-decoration-none fw-semibold"
            >
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
