import React from "react";

function Brokerage() {
  return (
    <div className="conatiner">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize:"15px" }}
            className="text-muted"
          >
            <li>
              {" "}
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>
              {" "}
              Options - ₹50 per crore + GST traded value (premium value).
            </li>
            <li>
              {" "}
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
            <li>
              {" "}
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF.
            </li>
            <li>
              {" "}
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>
            <li> MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            <h3 className="fs-5">Lists of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
