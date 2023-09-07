import React, { useEffect, useState } from "react";
import GallerySlider from "../Components/GallerySlider";
import Form from "../Components/Form";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "../firebase";
export default function Projects() {
  const [assistanceImg, setAssistanceImage] = useState();
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
  return (
    <div>
      <h2 className="text-center fw-bold fs-1">Gallery</h2>
      <GallerySlider />
      <h2 className="fw-bold fs-1 text-center">
        Have any question or free consultacy?
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
  );
}
