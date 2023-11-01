import React, { useEffect, useState } from "react";
import Form from "../Components/Form";
import { ref, getDownloadURL, listAll, getMetadata } from "firebase/storage";
import storage from "../firebase";
import { Link } from "react-router-dom";
import { MDBSpinner } from "mdb-react-ui-kit";
export default function Projects() {
  const [assistanceImg, setAssistanceImage] = useState();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getImage(downloadPath) {
      try {
        const imageRef = ref(storage, downloadPath);
        const imageUrl = await getDownloadURL(imageRef);
        setAssistanceImage(imageUrl); // Set doorImage inside the function
      } catch (error) {
        console.error("Error getting image:", error);
        throw error; // You can handle the error as needed
      }
    }

    getImage("/others/assistance.png");
  }, []);
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
  let windowsImage;
  let windowsImageUrl;
  if (images) {
    indoorImage = images.find((image) => image.name === "indoor.png");
    indoorImageUrl = indoorImage ? indoorImage.url : null;
    outdoorImage = images.find((image) => image.name === "outdoor.png");
    outdoorImageUrl = outdoorImage ? outdoorImage.url : null;
    gateImage = images.find((image) => image.name === "gates.png");
    gateImageUrl = gateImage ? gateImage.url : null;
    windowsImage = images.find((image) => image.name === "window.png");
    windowsImageUrl = windowsImage ? windowsImage.url : null;
  }
  if (loading) {
    return (
      <div className="spinner">
        <MDBSpinner />
      </div>
    );
  }

  return (
    <div>
      <div className="menu-container container">
        <div className="row categories-container">
          <div className="row m-auto d-md-none">
            <div className="col-6 mb-4 p-0">
              <Link to={"./windows"} className="d-flex category-scale">
                <img
                  src={windowsImageUrl}
                  alt="Windows projects"
                  className="project-categories"
                />
              </Link>
            </div>
            <div className="col-6 mb-4 p-0">
              <Link to={"./indoor"} className="d-flex category-scale">
                <img
                  src={indoorImageUrl}
                  alt="indoor doors"
                  className="project-categories"
                />
              </Link>
            </div>
          </div>
          <div className="row m-auto d-md-none">
            <div className="col-6 mb-4 p-0">
              <Link to={"./outdoor"} className="d-flex category-scale">
                <img
                  src={outdoorImageUrl}
                  alt="outdoor doors"
                  className="project-categories"
                />
              </Link>
            </div>
            <div className="col-6 mb-4 p-0">
              <Link to={"./gates"} className="d-flex category-scale">
                <img
                  src={gateImageUrl}
                  alt="gate doors"
                  className="project-categories"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-3 mb-4 p-0 d-none d-md-flex">
            <Link to={"./windows"} className="d-flex category-scale">
              <img
                src={windowsImageUrl}
                alt="Windows projects"
                className="project-categories"
              />
            </Link>
          </div>
          <div className="col-md-3 mb-4 p-0 d-none d-md-flex">
            <Link to={"./indoor"} className="d-flex category-scale">
              <img
                src={indoorImageUrl}
                alt="indoor doors"
                className="project-categories"
              />
            </Link>
          </div>
          <div className="col-md-3 mb-4 p-0 d-none d-md-flex">
            <Link to={"./outdoor"} className="d-flex category-scale">
              <img
                src={outdoorImageUrl}
                alt="outdoor doors"
                className="project-categories"
              />
            </Link>
          </div>
          <div className="col-md-3 mb-4 p-0 d-none d-md-flex">
            <Link to={"./gates"} className="d-flex category-scale">
              <img
                src={gateImageUrl}
                alt="gate doors"
                className="project-categories"
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="fw-bold fs-1 text-center">
          Have any question or free consultancy?
        </h2>
        <div className="row container m-auto">
          <div className="col-md-6">
            <Form />
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              className="assistance-img"
              src={assistanceImg}
              alt="Female Assistance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
