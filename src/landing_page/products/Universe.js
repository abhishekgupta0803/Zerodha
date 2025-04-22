import React from "react";

function Universal() {
  return (
    <div className="container p-5">
      <div className="row text-center ">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col-4 p-5 ">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="zerodhaFundhouse"
            style={{ width: "60%", marginLeft: "15%" }}
            className="mb-3"
          />
          <p className="text-center  text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5 ">
          <img
            src="media/images/sensibullLogo.svg"
            alt="zerodhaFundhouse"
            style={{ width: "60%", marginLeft: "15%" }}
            className="mb-3"
          />
          <p className="text-center text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5 ">
          <img
            src="media/images/streakLogo.png"
            alt="streakLogo"
            style={{ width: "60%", marginLeft: "15%" }}
            className="mb-3"
          />
          <p className="text-center text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5 ">
          <img
            src="media/images/dittoLogo.png"
            alt="dittoLogo"
            style={{ width: "60%", marginLeft: "15%" }}
            className="mb-3"
          />
          <p className="text-center text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 p-5 ">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcaseLogo"
            style={{ width: "60%", marginLeft: "15%" }}
            className="mb-3"
          />
          <p className="text-center text-muted">
            Our asset management venture
            <br />
            that is creating simple and transparent index funds to help you save
            for your goals.
          </p>
        </div>
        <div className="col-4 p-5 ">
          <img
            src="https://zerodha.com/static/images/partners/tijori.svg"
            alt="zerodhaFundhouse"
            style={{ width: "60%", marginLeft: "15%" }}
            className="mb-3"
          />
          <p className="text-center text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button
          className="p-2 btn-primary fs-5 mb-5 rounded"
          style={{ width: "20%", margin: " 0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universal;
