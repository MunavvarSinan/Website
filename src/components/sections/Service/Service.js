import React from "react";

import Section from "../../../HOC/Section";

const Service = () => {
  return (
    <Section id="services">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Our </span>Services
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            LISTED DOWN ARE THE SERVICES WE PROVIDE
          </h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-icon mr-4" style={{ color: "black" }}>
                  <i className="fas fa-briefcase" />
                </div>
                <div className="service-body">
                  <h5 className="service-title">WEB DISIGNING</h5>
                  <p className="service-description">
                    Clean moderate designs-optimized for performance,search
                    enginesand converting users to consumers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-icon mr-4" style={{ color: "black" }}>
                  <i className="fas fa-chart-bar" />
                </div>
                <div className="service-body">
                  <h5 className="service-title">WEB DEVELOPMENT</h5>
                  <p className="service-description">
                    Integration of ecommerce platform,payment gateways,custom
                    product templates and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-icon mr-4" style={{ color: "black" }}>
                  <i className="fas fa-fist-raised" />
                </div>
                <div className="service-body">
                  <h5 className="service-title">CONTENT MANAGEMENT</h5>
                  <p className="service-description">
                    Custom WordPress theme and pligin development.Easily update
                    content without knowing how to code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
