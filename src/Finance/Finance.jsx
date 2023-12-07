import React from "react";
import "./Finance.css";
import { FaFire } from "react-icons/fa6";
import cardimg from "../Assets/card.png";
function Finance() {
  return (
    <div className="finance">
      <div className="container">
        <div className="left">
          <h1>One app the world loves.</h1>
          <p>
            open a free account in minutes from right your phone, and make your
            money go further.
          </p>
          <div className="btn">
            <button>Get started</button>
            <div className="free">
              <span className="icon">
                <FaFire />
              </span>
              <span>Now its free.</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={cardimg} alt="cardimg" />
        </div>
      </div>
    </div>
  );
}

export default Finance;
