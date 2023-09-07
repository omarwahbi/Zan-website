import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import storage from "../firebase";
import learnMoreLine from "../assets/learnMoreLine.svg";
import { MDBSpinner } from "mdb-react-ui-kit";
import indoor from "../assets/indoor.png";
import outdoor from "../assets/outdoor.png";

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
  // if (loading) {
  //   return (
  //     <div className="images-holder">
  //       <MDBSpinner className="mx-2" color="warning">
  //         <span className="visually-hidden">Loading...</span>
  //       </MDBSpinner>
  //     </div>
  //   );
  // } else {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 header-div">
          <h1 className="header-title">Zan Doors</h1>
          <p className="header-text">
            Zan Doors, We Craft Quality Exterior and Interior Doors
          </p>
          <div className="learn-more-img">
            <img src={learnMoreLine} style={{ width: "240px" }} />
          </div>
          <div className=" mobile-learn-more-div">
            <button className="mobile-learn-more font">Learn More</button>
          </div>
        </div>
        <div className="col-md-6 d-flex mt-4">
          <div className="col-md-6">
            <img src={indoor} className="m-0" style={{ maxWidth: "95%" }} />
          </div>
          <div className="col-md-6">
            <img src={outdoor} className="m-0" style={{ maxWidth: "95%" }} />
          </div>
        </div>
      </div>
      <hr className="mt-5 navbar-line" style={{ opacity: "0.2" }} />
    </div>
  );
}
// }

{
  /* <div className="container">
  <div
    id="carouselExampleAutoplaying"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className={`carousel-item image-container ${
              index === 0 ? "active" : ""
            }`}
          >
            <img
              src={image.url}
              className="d-block w-100"
              alt={image.name}
            />
          </div>
        );
      })}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div> */
}
