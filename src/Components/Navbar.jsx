import React from "react";
import vp from "./vppt.jpeg";
const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "50rem", width: "100%" }}>
      <div>
        <img
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
          src={vp}
          alt="vp"
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div>Home</div>
        <div>About</div>
        <div>Skills</div>
        <div>Project</div>
        <div>Contact</div>
        <div>Resume</div>
      </div>
    </div>
  );
};

export default Navbar;
