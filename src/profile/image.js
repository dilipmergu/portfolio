import React from "react";
import img from "./image1.JPG";
import "../css/profile.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    alignContent: "left",
    width: theme.spacing(25),
    height: theme.spacing(20),
  },
}));

const Imagesrc = () => {
  const classes = useStyles();
  return (
    <div className="image">
      <Avatar alt="Dilp Reddy" src={img} className={classes.large} />
    </div>
  );
};

export default Imagesrc;
