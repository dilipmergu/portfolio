import React, { Component } from "react";
import ImageSrc from "./profile/image";
import Address from "./profile/address";
import Links from "./profile/links";
import data from "./data/data.json";
import "./css/profile.css";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="profile">
        <ImageSrc />
        <h3 style={{ textAlign: "center" }}>Dilip Reddy Mergu</h3>
        <Links links={data.links} />
        <Address address={data.address} />
      </div>
    );
  }
}

export default Profile;
