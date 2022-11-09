import React from "react";
import "./Home.css";
import IMAGE1 from "../../Assets/about-photos/About-photo-1.jpeg";
import IMAGE2 from "../../Assets/about-photos/About-photo-2.jpeg";
import IMAGE3 from "../../Assets/about-photos/About-photo-3.jpeg";
import IMAGE4 from "../../Assets/about-photos/About-photo-4.jpeg";
import IMAGE5 from "../../Assets/about-photos/About-photo-5.jpeg";
import IMAGE6 from "../../Assets/about-photos/About-photo-6.jpeg";
import IMAGE7 from "../../Assets/about-photos/About-photo-7.jpeg";
import IMAGE8 from "../../Assets/about-photos/About-photo-8.jpeg";
import IMAGE9 from "../../Assets/about-photos/About-photo-9.jpeg";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <section className="home-section-left">
          <div className="home-title-container">
            <h1 className="home-title-h1">Dream Come True</h1>
            <h3 className="home-title-h3">Character Parties LLC.</h3>
          </div>
          <div className="home-hero-container">
            <p className="home-hero-p1">
              Call to book your awesome Character Party!!
            </p>
            <p className="home-hero-p2">
              Make Magical Memories for your little one by inviting your little
              one's favorite princesses, superheros and other fun loving
              characters to join them on their birthday.
            </p>
            <h4 className="home-hero-h4">
              We are booking in Medford, Klamath Falls and all surrounding
              areas.
            </h4>
          </div>
        </section>
        <section className="home-section-right">
          <div className="home-contact-container">
            <p className="home-contact-phone">Phone: (541) 301-7448</p>
            <p className="home-contact-email">Email: Dctc.Parties@gmail.com</p>
          </div>
        </section>
      </div>
      <div>
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
                src={IMAGE2}
                alt="ice princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div3">
              <img
                src={IMAGE3}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div4">
              <img
                src={IMAGE4}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div5">
              <img
                src={IMAGE5}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div6">
              <img
                src={IMAGE6}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div7">
              <img
                src={IMAGE7}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div8">
              <img
                src={IMAGE8}
                alt="ice-princess"
                width="250px"
                height="300px"
              />
            </div>
            <div class="div9">
              <img
                src={IMAGE9}
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
                From Dream Come True -Character Parties llc "Dream Come True
                -Character Parties LLC is a Children's Entertainment Company.
                Invite your child's favorite princess or character and make
                their birthday dreams come true! From balloon twisting, face
                painting, magic tricks, song and dance -your child will never
                forget their "special day!" Brought to you by a team of
                performers who never forgot the magic of being a child! We are a
                licensed and insured LLC and we do more than birthday parties.
                Just send a request for your next children's event.. We make
                party planning easy. As our slogan says.... "You bring the cake
                and the guests & let US do the rest!""
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
