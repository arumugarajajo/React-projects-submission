import React from "react";
import "./RatingsAndReviews.css"
function RatingsAndReviews() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Ratings</h5>
              <div className="rating-area">
                <div className="ra1">
                  <div className="ra">4.6</div>
                  <div className="ra">*</div>
                </div>
                <div className="ra2">
                  <div className="ra">2,44,312</div>
                  <div className="ra">Ratings</div>
                </div>
                <div>&</div>
                <div className="ra3">
                  <div className="ra">9,386</div>
                  <div className="ra">Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Rating Bar</h5>
              <div className="progress">
                <div className="progress-bar bg-secondary" style={{ width: '30%' }}></div>
                <div className="progress-bar bg-danger" style={{ width: '25%' }}></div>
                <div className="progress-bar bg-success" style={{ width: '20%' }}></div>
                <div className="progress-bar bg-info" style={{ width: '10%' }}></div>
                <div className="progress-bar bg-warning" style={{ width: '15%' }}></div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div>5*</div>
                <div>4*</div>
                <div>3*</div>
                <div>2*</div>
                <div>1*</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>1,93,345</div>
                <div>1,345</div>
                <div>1,345</div>
                <div>93,345</div>
                <div>10,124</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingsAndReviews;
