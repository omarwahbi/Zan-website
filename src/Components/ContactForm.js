import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Form from "./Form";

export default function ContactForm() {
  const [hovering, setHovering] = useState({
    tools: false,
    cogs: false,
    city: false,
    award: false,
  });

  return (
    <div className="dark-theme">
      <div className="container">
        <h2 className="text-start mt-4 mb-0 pb-3 ms-5 get-estimate">
          Get Estimate
        </h2>
        <div className="row m-0">
          <div className="col-md-6">
            <Form />
          </div>
          <div className="col-md-6" style={{ marginTop: "25px" }}>
            <section className="text-center">
              <div className="row ">
                <div className="col-6 col-md-6 mb-5 mb-md-5 mt-3 mb-lg-5 position-relative">
                  <div
                    style={{ display: "inline" }}
                    onMouseEnter={() => {
                      setHovering({ ...hovering, tools: true });
                    }}
                    onMouseLeave={() => {
                      setHovering({ ...hovering, tools: false });
                    }}
                  >
                    <MDBIcon
                      className={`icon-color fas fa-3x mb-2  ${
                        hovering.tools ? "fa-bounce" : ""
                      }`}
                      fas
                      icon="tools"
                      size="3x"
                    />
                  </div>
                  <h5 className=" fw-bold mb-1 icon-color">+100</h5>
                  <h6 className="fw-normal mb-0 fw-bold font-color">
                    Expert Technician
                  </h6>
                  <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                </div>

                <div className="col-6 col-md-6 mb-5 mt-3 mb-md-5 mb-lg-0 position-relative">
                  <div
                    style={{ display: "inline" }}
                    onMouseEnter={() => {
                      setHovering({ ...hovering, cogs: true });
                    }}
                    onMouseLeave={() => {
                      setHovering({ ...hovering, cogs: false });
                    }}
                  >
                    <MDBIcon
                      fas
                      icon="cogs"
                      size="4x"
                      className={`fas fa-3x mb-2 icon-color ${
                        hovering.cogs ? "fa-beat" : ""
                      }`}
                    />
                  </div>
                  <h5 className=" fw-bold mb-1 icon-color">+900</h5>
                  <h6 className="fw-normal mb-0 fw-bold font-color">
                    Projects
                  </h6>
                  <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                </div>
                <hr className="hr hr-blurry" />
                <div className="col-6 col-md-6 mb-5 mt-3 mb-md-0 position-relative">
                  <div
                    style={{ display: "inline" }}
                    onMouseEnter={() => {
                      setHovering({ ...hovering, city: true });
                    }}
                    onMouseLeave={() => {
                      setHovering({ ...hovering, city: false });
                    }}
                  >
                    <MDBIcon
                      fas
                      icon="city"
                      size="3x"
                      className={`fas fa-3x mb-2 icon-color ${
                        hovering.city ? "fa-bounce" : ""
                      }`}
                    />
                  </div>
                  <h5 className=" fw-bold mb-1 icon-color">+5</h5>
                  <h6 className="fw-normal mb-0 fw-bold font-color">
                    Branches
                  </h6>
                  <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                </div>

                <div className="col-6 col-md-6 mb-5 mt-3 mb-md-0 position-relative">
                  <div
                    style={{ display: "inline" }}
                    onMouseEnter={() => {
                      setHovering({ ...hovering, award: true });
                    }}
                    onMouseLeave={() => {
                      setHovering({ ...hovering, award: false });
                    }}
                  >
                    <MDBIcon
                      className={`icon-color fas fa-3x mb-2 ${
                        hovering.award ? "fa-bounce" : ""
                      }`}
                      style={{ scale: "1.2" }} // Set the color to your desired color
                      fas
                      icon="award"
                      size="3x"
                    />
                  </div>
                  <h5 className=" fw-bold mb-1 icon-color">+1000</h5>
                  <h6 className="fw-normal mb-0 fw-bold font-color">
                    Happy customers
                  </h6>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
