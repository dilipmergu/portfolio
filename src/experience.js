import React, { Component, useEffect, useState } from "react";
import data from "./data/data.json";
import "./css/experience.css";
import Collapsible from "react-collapsible";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightRegular,
    overflow: "scroll",
    height: "325px",
    fontFamily: "Times New Roman",
    width: "100%",
  },
  header: {
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  accordin: {
    height: "80%",
  },
}));
function Experience() {
  const [accenture, setAccenture] = useState([]);
  const [summary, setSummary] = useState([]);
  const [freelancereact, setFreelanceReact] = useState([]);
  const [freelanceMobile, setFreelanceMobile] = useState([]);
  useEffect(() => {
    setAccenture(data.accenture);
    setSummary(data.summary);
    setFreelanceReact(data.freelance.Reactjs);
    setFreelanceMobile(data.freelance.mobile);
  });
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const styles = useStyles();
  const accroles = accenture.map((role, i) => <li key={i}>{role}</li>);
  const freeroles = freelancereact.map((role, i) => <li key={i}>{role}</li>);
  const sumroles = summary.map((role, i) => <li key={i}>{role}</li>);
  // const freerolesMobile = freelanceMobile.map((role) => <li>{role}</li>);
  return (
    <div className="experience">
      <h3>Professional Experience</h3>
      {/* <Collapsible trigger="Summary" open="true">
          <div className="exproles">
            <ul>{sumroles}</ul>
          </div>
        </Collapsible>
        <Collapsible trigger="Accenture: Dec 2016 - May 2019">
          <div className="exproles">
            <ul>{accroles}</ul>
          </div>
        </Collapsible>

        <Collapsible trigger="FreeLance: Sept 2019 - Oct 2020">
          <div className="exproles">
            <ul>{freeroles}</ul>
          </div>
        </Collapsible> */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.header}>Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.heading}>{sumroles}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.header}>
            Fiverr: Jun 2019 - Nov 2020
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.heading}>
            {freeroles}
            {/* <h5>Mobile</h5>
            {freerolesMobile} */}
          </Typography>
          {/* <h5>Mobile</h5>
          <Typography className={styles.heading}>{freelanceMobile}</Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.header}>
            Accenture: Dec 2016 - May 2019
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.heading}>{accroles}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Experience;
