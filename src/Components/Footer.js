import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: "#1e1e1e" }}
      className="text-center text-lg-start text-muted"
    >
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        style={{ width: "81%", margin: "auto" }}
      >
        <div className="me-5 d-none d-lg-block" style={{ color: "#eae9e8" }}>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/Zandoors/photos?locale=ar_AR"
            className="me-4 text-reset"
            target="_blank"
          >
            <MDBIcon fab icon="facebook-f" style={{ color: "#eae9e8" }} />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" style={{ color: "#eae9e8" }} />
          </a>
          <a href="#" className="me-4 text-reset" target="_blank">
            <MDBIcon fab icon="google" style={{ color: "#eae9e8" }} />
          </a>
          <a
            href="https://www.instagram.com/zandoorsiraq/"
            target="_blank"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" style={{ color: "#eae9e8" }} />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" style={{ color: "#eae9e8" }} />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="6" lg="6" xl="6" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Zan Doors
              </h6>
              <p>
                Zan Doors was founded on a legacy of excellence and passion for
                superior craftsmanship. Our journey began in 2000, under the
                visionary leadership of Mr. Zaid, whose dedication and expertise
                propelled us to become one of the foremost companies in the
                doors industry.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                بغداد - الكرادة - تقاطع عقبة
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                doorszan@gmail.com
              </p>
              <p>
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
