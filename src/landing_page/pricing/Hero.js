import React from "react";

function Hero() {
  return (
    <div className="container text-center  mt-5">
      <div className="row border-bottom">
        <h1 className="mb-3">Charges</h1>
        <p className="text-muted fs-5 mb-5">List of all charges and taxes</p>
      </div>

      <div className="row  mt-5 text-center p-5">
        <div className="col-4 ">
          <img
            src="media/images/pricing0.svg"
            alt="pricing0.svg"
            style={{ width: "70%" }}
          />
          <h1 className="mt-3  fs-3">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="pricing0.svg"
            style={{ width: "70%" }}
          />
          <h1 className="mt-3 fs-3 ">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/pricing0.svg"
            alt="pricing0.svg"
            style={{ width: "70%" }}
          />
          <h1 className="mt-3 fs-3">Free direct MF</h1>
          <p className="text-muted mt-3 mb-5">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
        <div className="row text-center mt-5">
          <h1>Open a Zerodha account</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="p-2 btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: " 0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      
    </div>
  );
}

export default Hero;
