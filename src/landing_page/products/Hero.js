import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container border-bottom  mt-5">
      <div className="row  text-center p-5">
        <h1 className="mb-3" style={{ color: "#424242" }}>
          Zerodha Products
        </h1>
        <p className=" mb-3 fs-5" style={{ color: "#424242" }}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p style={{ color: "#424242" }} className="mb-5">
          Check out our &nbsp;
          <Link aria-current="page" to="/" style={{ textDecoration: "none" }}>
            investment offerings →
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
