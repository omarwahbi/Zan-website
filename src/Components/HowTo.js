import {
  faHandHoldingDollar,
  faHouseLaptop,
  faNetworkWired,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function HowTo() {
  return (
    <div>
      <div className="how-to-container">
        <hr className="dash" />
        <h2 className="d-inline-block how-text-color">How it works</h2>
        <hr className="dash" />
      </div>
      <div className="how-to-head-text mb-5">
        <h3 style={{ fontWeight: "400", color: "#1e1e1e" }}>
          Experience our dedicated client service that goes beyond your
          expectations, ensuring your door needs are met with expertise and
          care, we are here to help you find the best doors.
        </h3>
      </div>
      <div className="how-to-head-text-mobile mb-4">
        <h3 style={{ fontWeight: "400", color: "#1e1e1e", fontSize: "20px" }}>
          Experience our dedicated client service that goes beyond your
          expectations
        </h3>
      </div>

      <div className="icons-container">
        <div className="row">
          <div className="col-md-3 icon-container">
            <FontAwesomeIcon
              icon={faHouseLaptop}
              size="2xl"
              style={{ color: "#b78364" }}
              className="icon"
            />
            <h6 className="icon-text">Send Project Charts</h6>
            <p className="text">
              The plans are studied by a team of specialized engineers who have
              sufficient skill
            </p>
          </div>
          <div className="col-md-3 icon-container">
            <FontAwesomeIcon
              icon={faHandHoldingDollar}
              size="2xl"
              style={{ color: "#b78364" }}
              className="icon"
            />
            <h6 className="icon-text">Pricing</h6>
            <p className="text">
              The project pricing process is carried out by a specialized team
              that provides a competitive price in the region with high product
              quality
            </p>
          </div>
          <div className="col-md-3 icon-container">
            <FontAwesomeIcon
              icon={faUserTie}
              size="2xl"
              style={{ color: "#b78364" }}
              className="icon"
            />
            <h6 className="icon-text">Technical Support Visit</h6>
            <p className="text">
              A team of technicians specialized in studying the reality of the
              project and building a clear and accurate work plan for the
              project
            </p>
          </div>
          <div className="col-md-3 icon-container">
            <FontAwesomeIcon
              icon={faNetworkWired}
              size="2xl"
              style={{ color: "#b78364" }}
              className="icon"
            />
            <h6 className="icon-text">Installation</h6>
            <p className="text">
              The installation stage is the result of all the above work and
              planning, to end with providing a product with very high
              specifications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
