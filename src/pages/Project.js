import React from "react";
import GallerySlider from "../Components/GallerySlider";

export default function Project(props) {
  return (
    <div>
      <GallerySlider category={props.category} />
    </div>
  );
}
