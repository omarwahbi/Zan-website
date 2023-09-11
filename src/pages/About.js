import React, { useEffect, useState } from "react";
import {
  MDBTypography,
  MDBIcon,
  MDBRipple,
  MDBSpinner,
} from "mdb-react-ui-kit";
import LocationCard from "../Components/LocationCard";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "../firebase";
export default function About() {
  const [loading, setLoading] = useState(true);
  const [doorImage, setDoorImage] = useState("");
  useEffect(() => {
    async function getImage(downloadPath) {
      try {
        const imageRef = ref(storage, downloadPath);
        const imageUrl = await getDownloadURL(imageRef);
        setDoorImage(imageUrl); // Set doorImage inside the function
        setLoading(false);
      } catch (error) {
        console.error("Error getting image:", error);
        throw error; // You can handle the error as needed
      }
    }

    getImage("/others/door lock.jpeg");
  }, []);
  if (loading) {
    return (
      <div className="spinner">
        <MDBSpinner />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 d-flex justify-content-center">
          <MDBRipple rippleTag="a">
            <img src={doorImage} className="about-img" alt="door with lock" />
          </MDBRipple>
        </div>
        <div className="col-md-8 d-flex justify-content-center flex-column">
          <h1 className="text-start about-company-name">Zan Doors</h1>
          <p className="about-us-text">
            Welcome to Zan, where craftsmanship meets innovation! With our
            experience in the industry, we are your trusted partner for all your
            door needs. Our passion for creating stunning and durable doors has
            driven us to become a leading name in the business. Whether you're
            seeking timeless elegance, modern functionality, or customized
            solutions, our team of experts is dedicated to delivering the
            perfect door for your space. We take pride in our commitment to
            quality, sustainability, and customer satisfaction. Discover the
            perfect entrance to your world with Zan doors.
          </p>
          <div className="text-start">
            <MDBTypography listUnStyled className="mb-0 ">
              <li className="mb-1">
                <MDBIcon icon="check-circle" className="me-2 icon-color" />
                Unrivaled Selection
              </li>
              <li className="mb-1">
                <MDBIcon icon="check-circle" className="me-2 icon-color" />
                Cutting-Edge Technology
              </li>
              <li className="mb-1">
                <MDBIcon icon="check-circle" className="me-2 icon-color" />
                Exceptional Service
              </li>
            </MDBTypography>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-md-6 d-flex justify-content-center">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13339.389681316681!2d44.4410675!3d33.2966545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557810a587a6d1d%3A0x7eb285067d6c5c6c!2z2LLYp9mGINmE2YTYp9io2YjYp9io!5e0!3m2!1sen!2siq!4v1693943082984!5m2!1sen!2siq"
            width="90%"
            height="400"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-6 mt-4">
          <div className="row">
            <div className="col-md-6 mobile-card">
              <LocationCard
                province={"بغداد"}
                location={"الكرادة - تقاطع عقبة شارع كراج ٢٠٠٠"}
                number={"07732800200"}
              />
            </div>
            <div className="col-md-6 mobile-card ">
              <LocationCard
                province={"البصرة"}
                location={"شارع الوفود - تقاطع الدويد"}
                number={"07732800200"}
              />
            </div>
            <div className="col-md-6 mobile-card">
              <LocationCard
                province={"ذي قار"}
                location={"الموحية قرب المدينة المائية"}
                number={"07801148019"}
              />
            </div>
            <div className="col-md-6 mobile-card">
              <LocationCard
                province={"ميسان"}
                location={" عواشة شارع الدوريات"}
                number={"07730006669"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
