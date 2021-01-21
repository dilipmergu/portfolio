import React, { Component } from "react";
import "./css/techno.css";

class Technologies extends Component {
  state = { technologies: {} };
  componentDidMount() {
    this.setState({ technologies: this.props.tech });
  }
  render() {
    const backend =
      this.state.technologies["Backend Technologies"] &&
      this.state.technologies["Backend Technologies"].map((tech, k) => (
        <span key={k} className="spanLabel">
          {tech}
        </span>
      ));
    const frontend =
      this.state.technologies["Front End Technologies"] &&
      this.state.technologies["Front End Technologies"].map((tech, k) => (
        <span className="spanLabel" key={k}>
          {tech}
        </span>
      ));
    const mobile =
      this.state.technologies["Mobile"] &&
      this.state.technologies["Mobile"].map((tech, k) => (
        <span className="spanLabel" key={k}>
          {tech}
        </span>
      ));
    const versiontools =
      this.state.technologies["Versioning Tools"] &&
      this.state.technologies["Versioning Tools"].map((tech, k) => (
        <span className="spanLabel" key={k}>
          {tech}
        </span>
      ));
    const devtools =
      this.state.technologies["Development tools"] &&
      this.state.technologies["Development tools"].map((tech, k) => (
        <span className="spanLabel" key={k}>
          {tech}
        </span>
      ));
    const otherroles =
      this.state.technologies["Other"] &&
      this.state.technologies["Other"].map((tech, k) => (
        <span className="spanLabel" key={k}>
          {tech}
        </span>
      ));
    const database =
      this.state.technologies["Database"] &&
      this.state.technologies["Database"].map((tech, k) => (
        <span className="spanLabel" key={k}>
          {tech}
        </span>
      ));
    const testing =
      this.state.technologies["Testing"] &&
      this.state.technologies["Testing"].map((tech, k) => (
        <span className="spanLabel" key={k}>
          {tech}
        </span>
      ));
    // console.log(this.state.technologies);
    return (
      <div className="technohead">
        <h3>Technologies</h3>
        <div className="techno">
          <div className="technoroot">
            <h4 style={{ marginTop: "-5px" }}>Backend Technologies</h4>
            <div
              style={{
                marginTop: "-15px",
              }}
            >
              {backend}
            </div>
          </div>
          <div className="technoroot">
            <h4 style={{ marginTop: "-5px" }}>Front end Technologies</h4>
            <div
              style={{
                marginTop: "-15px",
              }}
            >
              {frontend}
            </div>
          </div>
          <div className="technoroot">
            <h4 style={{ marginTop: "-5px" }}>Mobile</h4>
            <div
              style={{
                marginTop: "-15px",
              }}
            >
              {mobile}
            </div>
          </div>
          <div className="technoroot">
            <h4 style={{ marginTop: "-5px" }}>Versioning Tools</h4>
            <div
              style={{
                marginTop: "-15px",
              }}
            >
              {versiontools}
            </div>
          </div>
          <div className="technoroot">
            <h4 style={{ marginTop: "-5px" }}>Developement Tools</h4>
            <div
              style={{
                marginTop: "-15px",
              }}
            >
              {devtools}
            </div>
          </div>
          <div className="technoroot">
            <h4 style={{ marginTop: "-5px" }}>Other</h4>
            <div
              style={{
                marginTop: "-15px",
              }}
            >
              {otherroles}
            </div>
          </div>
          <div className="technoroot">
            <h4 style={{ marginTop: "-5px" }}>Database</h4>
            <div
              style={{
                marginTop: "-15px",
              }}
            >
              {database}
            </div>
          </div>
          <div className="technoroot">
            <h4 style={{ marginTop: "-5px" }}>Testing</h4>
            <div
              style={{
                marginTop: "-15px",
              }}
            >
              {testing}
            </div>
          </div>

          {/* <h6>Front End Technologies</h6>
          <p>{this.state.technologies["Front End Technologies"]}</p>
          <h6>Mobile</h6>
          <p>{this.state.technologies.Mobile}</p>
          <h6>Versioning Tools</h6>
          <p>{this.state.technologies["Versioning Tools"]}</p>
          <h6>Development tools</h6>
          <p>{this.state.technologies["Development tools"]}</p>
          <h6>Other</h6>
          <p>{this.state.technologies["Other"]}</p>
          <h6>Database</h6>
          <p>{this.state.technologies["Database"]}</p>
          <h6>Testing</h6>
          <p>{this.state.technologies["Testing"]}</p> */}
        </div>
      </div>
    );
  }
}

export default Technologies;

// <Card style={{ height: "100px" }}>
//             <CardContent>
//               <h4 style={{ marginTop: "-5px" }}>Backend Technologies</h4>
//               <div style={{ display: "flex" }}>
//                 {this.state.technologies["Backend Technologies"] &&
//                   this.state.technologies[
//                     "Backend Technologies"
//                   ].map((tech) => <label className="techLabel">{tech}</label>)}
//               </div>
//             </CardContent>
//           </Card>
//           <Card style={{ height: "fit-content", paddingBottom: "0" }}>
//             <CardContent>
//               <h4 style={{ marginTop: "-5px" }}>Other</h4>
//               {/* <p>{this.state.technologies["Backend Technologies"]}</p> */}
//               <div
//                 style={{
//                   marginTop: "-15px",
//                 }}
//               >
//                 {otherroles}
//               </div>
//             </CardContent>
//           </Card>
