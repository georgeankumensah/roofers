import React from "react";
import "./Hero.css";
import { FaRegCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-text">
        <h4>quality roofing solutions</h4>
        <h1>Expert roofers at your command</h1>
        <p>
          Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum.
          Elit <br />
          adipiscing massa diam in dignissim. Risus tellus libero elementum
          aliquam <br />
          etiam. Lectus adipiscing est auctor mi quisque nunc non viverra est.
        </p>
        <div className="checkers">
          <span>
            <FaRegCheckCircle className="check-circle" color="white" />
            legal licensed and insured
          </span>
          <span>
            <FaRegCheckCircle className="check-circle" color="white" />
            100% trustworthy company
          </span>
          <span>
            <FaRegCheckCircle className="check-circle" color="white" />
            Most Genuine and transparent
          </span>
        </div>
      </div>
      <div className="form">
        <form className="form">
          <h1>Get started</h1>
          <div className="field">
            <label htmlFor="firstname">First Name</label>
            <input name="fistname" type="text"></input>
          </div>
          <div className="field">
            <label htmlFor="lastname">Last Name</label>
            <input name="lastname" type="text"></input>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input name="email" type="email"></input>
          </div>{" "}
          <div className="field">
            <label htmlFor="phonenumber">Phone</label>
            <input name="phonenumber" type="number"></input>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" cols="2" />
          </div>
          <button>Let’s get started</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
