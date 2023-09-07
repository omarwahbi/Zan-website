import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import storage from "../firebase";
import { MDBSpinner } from "mdb-react-ui-kit";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GallerySlider() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getImages() {
      const storageRef = ref(storage, "/Gallery/");
      const listResult = await listAll(storageRef);

      const filePromises = listResult.items.map(async (fileRef) => {
        const original = await getDownloadURL(fileRef);
        const metadata = await getMetadata(fileRef);
        const name = metadata.name;
        const thumbnail = original;
        return { name, original, thumbnail };
      });

      // Wait for all promises to settle (resolve or reject)
      const settledPromises = await Promise.allSettled(filePromises);

      // Check if all promises have resolved successfully
      const allPromisesResolved = settledPromises.every(
        (result) => result.status === "fulfilled"
      );

      if (allPromisesResolved) {
        // All promises have resolved, set loading to false
        setImages(settledPromises.map((result) => result.value));
        setLoading(false);
      } else {
        // Handle the case where one or more promises have rejected
        // You can add error handling logic here if needed
        console.log("error with image fetch");
      }
    }

    getImages();
  }, []);

  if (loading) {
    return (
      <div className="images-holder">
        <MDBSpinner className="mx-2" color="warning">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    );
  } else {
    return (
      <div className="gallery-slidshow mt-5 mb-5">
        <ImageGallery
          items={images}
          thumbnailPosition={"left"}
          showPlayButton={false}
          autoPlay={true}
          slideDuration={1200}
          slideInterval={4000}
          showNav={false}
        />
      </div>
    );
  }
}
