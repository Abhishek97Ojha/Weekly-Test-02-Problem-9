import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="left">
            <img
            className='img1'
            src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png"
            alt=""
          />
          <img
            className='img2'
            src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png"
            alt=""
          />
          <h2>complete security. no asterisks.</h2>
          <p>CRED encrypts all data and transactions to ensure a completely secure experience for our members.</p>
            </div>
            <div className="middle">
                <div className="products">
                    <h4>products</h4>
                    <a href='https://cred.club/cred-pay?source=footer'>CRED pay</a>
                    <a href='https://cred.club/check-your-credit-score'>credit score check</a>
                </div>
                <div className='resources'>
                    <h4>resources</h4>
                    <a href="https://cred.club/articles">articles</a>
                    <a href="https://blog.cred.club/">blogs</a>
                    <a href="https://cred.club/calculators">calculators</a>
                    <a href="https://cred.club/credit-card-bill-payment-online/articles">credit card payment guide</a>
                    <a href="https://cred.club/check-your-credit-score/articles">credit score guide</a>
                </div>
            </div>
            <div className="right">
                <div className="rightUp">
                    <h4>CRED</h4>
                    <a href='https://cred.club/about'>about</a>
                    <a href="https://careers.cred.club/">careers</a>
                    <a href="https://cred.club/ipl?source=footer">IPL</a>
                    <a href="https://cred.club/customer-care">customer care</a>
                </div>
                <div className="rightDown">
                    <h4>policy</h4>
                    <a href="https://cred.club/security">security</a>
                    <a href="https://cred.club/transaction-and-user-verification-policy">transaction & user verification</a>
                    <a href="https://cred.club/privacy#compliance-with-google-oauth-api-scopes">google API disclosure</a>
                    <a href="https://cred.club/upi-faqs">UPI faq & grievances</a>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="copyright">
                <p>copyright © 2020-22 Dreamplug Technologies Pvt Ltd.</p>
            </div>
            <div className="privacy">
                <a href='https://cred.club/privacy'>privacy policy</a>
                <a href='https://cred.club/terms' className='term'>terms and conditions</a>
                <a href='https://cred.club/return-policy'>returns and refund</a>
            </div>
        </div>
    </div>
  )
}

export default Footer