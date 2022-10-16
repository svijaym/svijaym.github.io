import React from "react";
import vp from "./vppt.jpeg";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        marginTop: "20px",
        width: "80%",
        margin: "auto",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div>Hello i am s vijayaprasad </div>
        <br />
        <div>A Full stack web developer</div>
        <div>
          A Skilled full stack developer and quick learner who can quickly adapt
          to new environments. Looking for a challenging role in the industry to
          utilize skills and learn.
        </div>
      </div>
      <div>
        <img
          style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          src={vp}
          alt="vp"
        />
      </div>
    </div>
  );
};

export default Home;
