import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const GitCalender = () => {
  return (
    <div style={{ width: "100%", marginLeft: "auto" }}>
      <GitHubCalendar username="svijaym">
        <ReactTooltip html />
      </GitHubCalendar>
    </div>
  );
};

export default GitCalender;
