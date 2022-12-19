import React from "react";
import styles from "./GitCommon.css";
const GitStats = () => {
  return (
    <div className={styles.git}>
      <div style={{ width: "40%", margin: "auto", marginTop: "30px" }}>
        <a href="https://github.com/svijaym">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=svijaym"
            alt="stre-short"
          />
        </a>
      </div>
      <br />
      <div
        style={{
          width: "60%",
          height: "200px",
          display: "flex",
          margin: "auto",
        }}
      >
        <div>
          <a href="https://github.com/svijaym">
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=svijaym"
              alt="stats-short"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/svijaym">
            <img
              align="left"
              src="https://github-readme-stats.vercel.app/api?username=svijaym&count_private=true&show_icons=true"
              alt="stats-long"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitStats;
