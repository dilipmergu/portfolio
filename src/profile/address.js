import React from "react";
import "../css/profile.css";

function address(props) {
  // console.log(props);
  return (
    <div className="address">
      <p>
        <label style={{ fontWeight: "bold" }}>Email ID:</label>{" "}
        merugudilipreddy@gmail.com
      </p>
      {/* <p>Street: {props.address.street1}</p>
      <p>City: {props.address.city}</p>
      <p>Province: {props.address.province}</p> */}
      <p>
        <label style={{ fontWeight: "bold" }}>Phone Number:</label>{" "}
        {props.address.phonenumber}
      </p>
      <div>
        <h4>Personal Projects</h4>
        <a href="https://netflix-clone-6a5a3.web.app/">Netflix Clone</a>
      </div>
    </div>
  );
}

export default address;
