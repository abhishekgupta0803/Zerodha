import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appstore,
}) {
  return (
    <div className="container  mt-5 mb-5">
      <div className="row mt-5 ">
        <div className="col-6 p-5">
          <img src={imageURL} alt="img" />
        </div>
        <div className="col-6 mt-5 p-5">
          <h1 className="mb-4">{productName}</h1>
          <p >{productDesription}</p>
          <div className="mb-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo&nbsp;<i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "75px", textDecoration: "none" }}
            >
              LearnMore &nbsp;<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img
                src="https://zerodha.com/static/images/google-play-badge.svg"
                alt="img"
              />
            </a>
            <a href={appstore}>
              <img
                src="https://zerodha.com/static/images/appstore-badge.svg"
                alt="img"
                style={{ marginLeft: "20px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
