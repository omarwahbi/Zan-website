import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../assets/emptyWhiteLogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted footer-background-color pb-3">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom section-style container">
        <div className="me-md-5 d-none d-lg-block footer-text-color">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/Zandoors/photos?locale=ar_AR"
            className="me-4 text-reset"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDBIcon
              fab
              icon="facebook-f"
              className="footer-text-color icon-hover"
            />
          </a>
          <a
            href="https://www.instagram.com/zandoorsiraq/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <MDBIcon
              fab
              icon="instagram"
              className="footer-text-color icon-hover"
            />
          </a>
        </div>
      </section>

      <section className="section-style footer-text-color">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="6" lg="6" xl="6" className="ms-md-3">
              <h6 className="fw-bold mb-4">
                <img
                  src={logo}
                  alt="footer-logo"
                  className="me-1 footer-logo"
                />
                Zan Doors
              </h6>
              <p>
                Zan Doors was founded on a legacy of excellence and passion for
                superior craftsmanship. Our journey began in 2018, under the
                visionary leadership of Mr. Asaad, whose dedication and
                expertise propelled us to become one of the foremost companies
                in the doors industry.
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="ms-auto mb-md-0 mb-4 contact-info"
            >
              <h6 className=" fw-bold mb-4">Contact</h6>
              <Link to="https://goo.gl/maps/8VkdePGFYAp8HwVp6" target="_blank">
                <p className="icon-hover arabic-font">
                  <MDBIcon icon="home" className="me-2 " />
                  بغداد - الكرادة - تقاطع عقبة
                </p>
              </Link>
              <p className="icon-hover">
                <MDBIcon icon="envelope" className="me-3" />
                doorszan@gmail.com
              </p>
              <p className="icon-hover">
                <MDBIcon icon="phone" className="me-3" />
                07732800200
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
