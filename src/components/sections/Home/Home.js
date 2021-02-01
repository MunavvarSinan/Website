import React from "react";

import Section from "../../../HOC/Section";
import bgImage from "../../../assets/img/home_bg.jpg";
import Link from "../../ui/Link/Link";

const home = () => {
  return (
    <Section id="home">
      <div>
        <div
          className="home-content p-5"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div
            className="intro container text-center "
            style={{ color: "#000000" }}
          >
            <h1 className="title">
              "It is possible for ordinary people to choose to be extraordinary."
             
            </h1>
            <h2 className="sub-title mb-4" style={{ color: "#" }}>
            - Elon Musk
            </h2>

            {/* <Link target="about" classes="btn btn-primary  rounded-0 mr-2">
                Learn More
              </Link> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
