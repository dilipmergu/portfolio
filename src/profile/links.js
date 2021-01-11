import React from "react";
import "../css/profile.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Card, CardContent } from "@material-ui/core";

function links(props) {
  return (
    <div className="linkedin">
      <Card>
        <CardContent>
          <LinkedInIcon />
          <br></br>
          <a href="https://www.linkedin.com/in/dilipreddy-mergu-131a48a5">
            {props.links.linkedin}
          </a>
        </CardContent>
      </Card>
      <br></br>
      <Card>
        <CardContent>
          <GitHubIcon />
          <br></br>
          <a href="https://github.com/dilipmergu">{props.links.github}</a>
        </CardContent>
      </Card>
    </div>
  );
}

export default links;
