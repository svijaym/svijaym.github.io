import React from "react";
import styles from "./GitCommon.css";
const GitStats = () => {
  return (
    <div className={styles.git}>
      <div style={{ width: "40%", margin: "auto" }}>
        <a href="https://github.com/svijaym">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=svijaym"
          />
        </a>
      </div>
      <div
        style={{
          width: "60%",
          height: "300px",
          display: "flex",
          margin: "auto",
        }}
      >
        <a href="https://github.com/svijaym">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=svijaym" 
          />
        </a>
        <a href="https://github.com/svijaym">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=svijaym&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default GitStats;
