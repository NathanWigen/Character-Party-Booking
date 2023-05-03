import React from "react";
import "./Home.css";
//Photo by Lydia Turner from Unsplash
import IMAGE1 from "../../Assets/about-photos/photo.jpg";



export default function Home() {
  return (
    <>
      <div className="home-container">
        <section className="home-section-left">
          <div className="home-title-container">
            <h1 className="home-title-h1">Character Party Booking</h1>
            <h3 className="home-title-h3">Character Parties</h3>
          </div>
          <div className="home-hero-container">
            <p className="home-hero-p1">
              Call to book your awesome Character Party!!
            </p>
            <p className="home-hero-p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. A iaculis at erat pellentesque.
            </p>
            <h4 className="home-hero-h4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
          </div>
        </section>
        <section className="home-section-right">
          <div className="home-contact-container">
            <p className="home-contact-phone">Phone: (202)-555-0183</p>
            <p className="home-contact-email">Email: Charcterpartys@gmail.com</p>
          </div>
        </section>
      </div>
      <>
        <section className="about-section">
          <div className="about-photos">
            <div class="div1">
              <img
                src={IMAGE1}
                alt="ice princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div2">
              <img
                src={IMAGE1}
                alt="ice princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div3">
              <img
                src={IMAGE1}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div4">
              <img
                src={IMAGE1}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div5">
              <img
                src={IMAGE1}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div6">
              <img
                src={IMAGE1}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div7">
              <img
                src={IMAGE1}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div8">
              <img
                src={IMAGE1}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div9">
              <img
                src={IMAGE1}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
          </div>
          <div className="about-us-story-container">
            <div className="about-us-header">
              <h1 className="about-us-h1">About Us</h1>
            </div>
            <div className="about-us-story">
              <p className="about-us-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Leo urna molestie at elementum eu facilisis sed odio morbi. Porttitor leo a diam sollicitudin tempor id eu. Massa tempor nec feugiat nisl pretium fusce id velit ut. Urna nec tincidunt praesent semper feugiat nibh sed.
              </p>
            </div>
          </div>
        </section>
        <div className="disclaimer-container">
          <p className="disclaimer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus.
          </p>
        </div>
      </>
    </>
  );
}
