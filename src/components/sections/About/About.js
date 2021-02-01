import React from "react";

import Section from "../../../HOC/Section";
import aboutImage from "../../../assets/img/about.jpg";

const about = () => {
  return (
    <Section id="about">
      <div className="container pt-2 pb-5">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImage">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title">ABOUT</h3>
              <div className="about-description">
                <p>
                  Iam a web developer from kerala. I enjoy building everything
                  from small business to rich interactive web apps.If you are a
                  business seeking a web presence or an employer looking to
                  hire,you can get in touch with me
                </p>
                <p>
                  HTML,CSS,JS ,building small and medium web apps with REACT
                  ,custom plugins,features,animations,and coding interactive
                  layouts
                </p>
                <p>
                  Intrested in fullstack development and working on ambitious
                  projects with positive people
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
