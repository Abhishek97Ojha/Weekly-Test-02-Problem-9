import React from "react";
import "./Rating.css";
import Button from "./Button";
const Rating = () => {
  return (
    <div className="rating">
      <div className="app">
        <div className="ios">
          <div className="ios-rating">
            <div>
              <h1>4.8</h1>
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                alt=""
              />
            </div>
            <div className="ios-store">
              <h2>app</h2>
              <h2>store</h2>
            </div>
          </div>
          <Button buttonName="Download the app" />
        </div>
        <div className="android">
          <div className="android-rating">
            <div>
              <h1>4.7</h1>
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                alt=""
              />
            </div>
            <div className="play-store">
              <h2>play</h2>
              <h2>store</h2>
            </div>
          </div>
          <Button buttonName="Download the app" />
        </div>
      </div>
      <div className="review">
        <p>"great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred."</p>
        <p>sanjeev kataria</p>
      </div>
    </div>
  );
};

export default Rating;
