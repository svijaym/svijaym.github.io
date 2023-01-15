import React from "react";
import styles from "./GitCommon.css";
const GitStats = () => {
  return (
    <div className={styles.git}>
      <div style={{ width: "40%", margin: "auto", marginTop: "30px" }}>
        <a href="https://github.com/svijaym">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=svijaym&theme=dark"
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <a href="https://github.com/svijaym">
            <img
              // align="center"
              // src="https://github-readme-stats.vercel.app/api/top-langs/?username=svijaym"
              src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=svijaym&theme=2077"
              alt="stats-short"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/svijaym">
            <img
              // align="left"
              // src="https://github-readme-stats.vercel.app/api?username=svijaym&count_private=true&show_icons=true"
              src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=svijaym&theme=2077"
              alt="stats-long"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitStats;
