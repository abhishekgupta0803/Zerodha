import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container border-top " style={{ marginTop: "7rem" }}>
      <div
        className="row  mt-5 p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6  p-5">
          <p className="mb-3">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="mb-4">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6  p-5  ">
          <p className="mb-3">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="mb-3">
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>

      <div className="row ">
        <div className="col-1"></div>
        <div className="col-5 text-center" style={{ padding: "5rem" }}>
          <img
            src="media/images/nithinKamath.jpg"
            alt="nithinKamath"
            className="rounded-circle mb-3"
            style={{ width: "80%" }}
          />
          <p className="mb-3 fs-5">Nithin Kamath</p>
          <p>Founder, CEO</p>
        </div>
        <div className="col-5">
          <h1 className="mb-5">People</h1>
          <p className="mb-3 text-muted">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            <br /> hurdles he faced during his decade long stint as a trader.
            Today,
            <br /> Zerodha has changed the landscape of the Indian broking
            industry.
          </p>
          <p className="mb-3 text-muted">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mb-3 text-muted">Playing basketball is his zen.</p>
          <p className="text-muted"> Connect on &nbsp;
            <Link aria-current="page" to="/" style={{textDecoration:"none"}}>
                Homepage / TradingQnA / Twitter
            </Link>
          </p>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row " style={{ marginBottom: "5rem" }}>
        <div className="col-1"></div>
        <div className="col text-center">
          <img
            src="https://zerodha.com/static/images/Nikhil.jpg"
            alt="nithinKamath.jpg"
            className="rounded-circle mb-3"
            style={{ width: "60%" }}
          />
          <p className="mb-1 fs-5">Nithin Kamath</p>
          <p className="text-muted">Co-founder & CFO</p>
        </div>

        <div className="col text-center">
          <img
            src="https://zerodha.com/static/images/Kailash.jpg"
            alt="nithinKamath.jpg"
            className="rounded-circle mb-3"
            style={{ width: "60%" }}
          />
          <p className="mb-1 fs-5">Dr. Kailash Nadh</p>
          <p className="text-muted">CTO</p>
        </div>
        <div className="col text-center">
          <img
            src="https://zerodha.com/static/images/Venu.jpg"
            alt="nithinKamath.jpg"
            className="rounded-circle mb-3"
            style={{ width: "60%" }}
          />
          <p className="mb-1 fs-5">Venu Madhav</p>
          <p className="text-muted">COO</p>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row ">
        <div className="col-1"></div>
        <div className="col text-center">
          <img
            src="https://zerodha.com/static/images/Hanan.jpg"
            alt="nithinKamath.jpg"
            className="rounded-circle mb-3"
            style={{ width: "60%" }}
          />
          <p className="mb-1 fs-5">Hanan Delvi</p>
          <p className="text-muted">CCO</p>
        </div>

        <div className="col text-center">
          <img
            src="https://zerodha.com/static/images/Austin.jpg"
            alt="AustinPrakesh"
            className="rounded-circle mb-3"
            style={{ width: "60%" }}
          />
          <p className="mb-1 fs-5">Austin Prakesh</p>
          <p className="text-muted">Director Strategy</p>
        </div>
        <div className="col text-center">
          <img
            src="https://zerodha.com/static/images/Seema.jpg"
            alt="Seema.jpg"
            className="rounded-circle mb-3"
            style={{ width: "60%" }}
          />
          <p className="mb-1 fs-5">Seema Patil</p>
          <p className="text-muted">Director</p>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row" style={{ marginTop: "5rem" }}>
        <div className="col-1"></div>
        <div className="col text-center">
          <img
            src="https://zerodha.com/static/images/karthik.jpg "
            alt="karthik.jpg"
            className="rounded-circle mb-3"
            style={{ width: "60%" }}
          />
          <p className="mb-1 fs-5">Karthik Rangappa</p>
          <p className="text-muted">Chief of Education</p>
        </div>

        <div className="col"></div>
        <div className="col"></div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Team;
