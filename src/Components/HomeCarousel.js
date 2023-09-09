import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import storage from "../firebase";
import learnMoreLine from "../assets/learnMoreLine.svg";
import { MDBSpinner } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function HomeCarousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getImages() {
      const storageRef = ref(storage, "/Home slide show/");
      const listResult = await listAll(storageRef);

      const filePromises = listResult.items.map(async (fileRef) => {
        const url = await getDownloadURL(fileRef);
        const metadata = await getMetadata(fileRef);
        const name = metadata.name;
        return { name, url };
      });

      const files = await Promise.all(filePromises);
      setImages(files);
      setLoading(false);
    }

    getImages();
  }, []);
  let indoorImage;
  let indoorImageUrl;
  let outdoorImage;
  let outdoorImageUrl;
  let gateImage;
  let gateImageUrl;
  if (images) {
    indoorImage = images.find((image) => image.name === "indoor.png");
    indoorImageUrl = indoorImage ? indoorImage.url : null;
    outdoorImage = images.find((image) => image.name === "outdoor.png");
    outdoorImageUrl = outdoorImage ? outdoorImage.url : null;
    gateImage = images.find((image) => image.name === "gates.png");
    gateImageUrl = gateImage ? gateImage.url : null;
  }
  if (loading) {
    return (
      <div className="spinner">
        <MDBSpinner />
      </div>
    );
  }

  return (
    <div className="container mt-md-4">
      <div className="row">
        <div className="col-md-4 header-div">
          <h1 className="header-title">Zan Doors</h1>
          <p className="header-text">
            Zan Doors, We Craft Quality Exterior and Interior Doors
          </p>
          <div className="learn-more-img">
            <Link to={"./about"}>
              <img
                src={learnMoreLine}
                alt="learn more"
                style={{ width: "240px" }}
              />
            </Link>
          </div>
          <div className="mobile-learn-more-div">
            <Link to={"./about"}>
              <button className="mobile-learn-more font">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="col-md-8 d-flex mt-4">
          <div className="col-md-4">
            <Link to={"projects/indoor"}>
              <img
                alt="indoor doors"
                src={indoorImageUrl}
                className="m-0 menu-item-img category-scale"
              />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"projects/outdoor"}>
              <img
                alt="outdoor doors"
                src={outdoorImageUrl}
                className="m-0 menu-item-img category-scale"
              />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"projects/indoor"}>
              <img
                alt="gate doors"
                src={gateImageUrl}
                className="m-0 menu-item-img category-scale"
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-5 navbar-line" style={{ opacity: "0.2" }} />
    </div>
  );
}
