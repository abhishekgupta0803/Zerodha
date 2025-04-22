import React from "react";

function OpenAccount() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h1 className="mb-2 ">Open a Zerodha account</h1>
        <p className="text-modern ">
          Modern platforms and apps,₹0 investments, and flat ₹20 intraday and
          F&Q tradesmm.{" "}
        </p>
        <button
          className="p-2 btn-primary fs-5 mb-5 rounded"
          style={{ width: "20%", margin: " 0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
