import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedby/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((cards) => (
          <CatCard key={cards.id} item={cards} />
        ))}
      </Slide>

      {/* featured */}

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelancer talent at your fingertips</h1>
            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find hiht-quality services at every price point, No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find hiht-quality services at every price point, No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find hiht-quality services at every price point, No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find hiht-quality services at every price point, No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video
              src="./images/video.mp4"
              controls
              autoplay
              type="vedio/mp4"
              loop
            >
              {" "}
            </video>
          </div>
        </div>
      </div>
      {/* featured end */}

      {/* fiverr business */}

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to business
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancer with proven business experience
            </div>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancer with proven business experience
            </div>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancer with proven business experience
            </div>
            <button>Explore Liverr Business</button>
          </div>

          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*  fiver business end */}

      {/* gigs start slider */}

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
