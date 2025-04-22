import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 p-5 " style={{marginTop:"7rem"}}>
          <h1>{productName}</h1>
          <p >{productDesription}</p>
          <div>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More &nbsp;  <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;