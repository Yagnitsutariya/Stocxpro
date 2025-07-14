import React from "react";

function CreateTicket() {
  const sections = [
    {
      icon: "fa-plus-circle",
      title: "Account Opening",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Opening",
        "NRI Account Opening",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      icon: "fa-user",
      title: "Your Account",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "NRI Account Opening",
        "Transfer and conversion of securities",
      ],
    },
    {
      icon: "fa-chart-simple",
      title: "Kite",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      icon: "fa-hard-drive",
      title: "Fund",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      icon: "fa-circle-check",
      title: "Console",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      icon: "fa-circle",
      title: "Coin",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container my-5">
      <div className="row px-3">
        <div className="col-12 mb-4">
          <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        </div>

        {sections.map((section, idx) => (
          <div
            className="col-12 col-md-6 col-lg-4 mb-4"
            key={idx}
          >
            <h5 className="mb-3 fw-normal text-dark">
              <i className={`fa ${section.icon} me-2`} aria-hidden="true"></i>
              {section.title}
            </h5>
            <div className="d-flex flex-column gap-2">
              {section.links.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-decoration-none"
                  style={{ lineHeight: "1.8", fontSize: "14px" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
