import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
export default function LocationCard(props) {
  return (
    <div className="mt-2 arabic-font">
      <MDBCard className="text-white text-end h-100 card-color">
        <MDBCardHeader className="fw-bold p-2">
          {props.province}
          <LocationOnOutlinedIcon />
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle className="fs-6">{props.location}</MDBCardTitle>
          <MDBCardText>رقم الهاتف : {props.number}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
