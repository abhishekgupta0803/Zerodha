import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row  mb-5 p-5">
        <h2 className="fs-5 text-muted  mb-5">
          To create a ticket, select a relevant topic
        </h2>
        <div className="col-4 ">
          <h3 className="fs-5 text-muted mb-4">
            <i class="fa-solid fa-circle-plus"></i> Account Opening
          </h3>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Resident individual</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Minor</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Non Resident Indian (NRI)</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Company, Partnership, HUF and LLP</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Glossary</p>
          </a>
        </div>

        <div className="col-4 ">
          <h3 className="fs-5 text-muted mb-4 ">
            <i class="fa-solid fa-user-plus"></i> Your Zerodha Account
          </h3>
          <a href="" style={{ textDecoration: "none" }}>
            <p> Your Profile </p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p> Account modification </p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p> Client Master Report (CMR) and Depository </p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p> Participant (DP)</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p> Transfer and conversion of securities </p>
          </a>
        </div>

        <div className="col-4 ">
          <h3 className="fs-5 text-muted mb-4">
            <i class="fa-solid fa-chart-simple"></i> Kite
          </h3>
          <a href="" style={{ textDecoration: "none" }}>
            <p>IPOl</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Trading FAQs</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Margin Trading Facility (MTF) and Margins(NRI)</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Charts and orders</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>General</p>
          </a>
        </div>
      </div>

      <div className="row  mb-5 p-5">
        <div className="col-4 ">
          <h3 className="fs-5 text-muted mb-4">
            <i class="fa-solid fa-circle-plus"></i> Funds
          </h3>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Add money</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Withdraw money</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Add bank accounts (NRI)</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>eMandates</p>
          </a>
        </div>

        <div className="col-4 ">
          <h3 className="fs-5 text-muted mb-4 ">
            <i class="fa-solid fa-chart-pie"></i> Console
          </h3>
          <a href="" style={{ textDecoration: "none" }}>
            <p> Your Profile </p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p> Corporate actions </p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p> Funds statement </p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p> Reports</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p> Profile </p>
          </a>
        </div>

        <div className="col-4 ">
          <h3 className="fs-5 text-muted mb-4">
            <i class="fa-brands fa-nfc-directional"></i> Coin
          </h3>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Understanding mutual funds and Coin</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Coin app</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Coin web</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>Transactions and reports</p>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            <p>National Pension Scheme (NPS)</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
