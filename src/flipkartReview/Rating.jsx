import React from "react";
import "./RatingsAndReviews.css";
import { FaStar } from "react-icons/fa";

function Rating() {
  return (
    <div className="rating">
      <div className="container">
        <div className="left-container col-md-6">
          <div className="rating-container col-md-2">
            <div className="lr d-flex col-md-4">
              <div>4.6</div>    
              <div className="star-icon"><FaStar/></div>
            </div>
            <div className="lr d-flex">
              <div>2,44,312</div>
              <div>Ratings</div>
            </div>
            <div className="lr">&</div>
            <div className="lr d-flex">
              <div>9,386</div>
              <div>Reviews</div>
            </div>
          </div>
          <div className="progress-container d-flex">
            <div className="rating-star" style={{ flex: "2" }}>
              <ul>
                <li>5<FaStar /></li>
                <li>4<FaStar /></li>
                <li>3<FaStar /></li>
                <li>2<FaStar /></li>
                <li>1<FaStar /></li>
              </ul>
            </div>
            <div className="progressbars" style={{ flex: "4" }}>
              <div className="progress">
                <div className="progress-bar bg-success" style={{ width: "100%" }}></div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-secondary" style={{ width: "80%" }}></div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: "60%" }}></div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-warning" style={{ width: "35%" }}></div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-danger" style={{ width: "10%" }}></div>
              </div>
            </div>
            <div className="review-count" style={{ flex: "3" }}>
              <div className="div">1,93,345</div>
              <div className="div">29,194</div>
              <div className="div">6,680</div>
              <div className="div">3,361</div>
              <div className="div">11,732</div>
            </div>
          </div>
        </div>
        <div className="right-container col-md-6">
          <div className="right-rating-container">
            <div className="row col-3-12">
              <div className="review-circle">
                <div className="percentage">
                  85<span>%</span>
                </div>
                <span className="text">Rating</span>
              </div>
            </div>
            <div className="row col-3-12">
              <div className="review-circle">
                <div className="percentage">
                  65<span>%</span>
                </div>
                <span className="text">Battery</span>
              </div>
            </div>
            <div className="row col-3-12">
              <div className="review-circle">
                <div className="percentage">
                  45<span>%</span>
                </div>
                <span className="text">Display</span>
              </div>
            </div>
            <div className="row col-3-12">
              <div className="review-circle">
                <div className="percentage">
                  25<span>%</span>
                </div>
                <span className="text">Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;