import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row text-center mt-5">
          <h1>404 Not Found</h1>
          <p>
            Sorry,this page you are looking for does not exist. {" "}
            <Link aria-current="page" to="/" style={{textDecoration:"none"}}>
              HomePage
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
