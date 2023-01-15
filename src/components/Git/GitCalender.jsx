import { Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const GitCalender = () => {
  // const selectLastHalfYear = (contributions) => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const shownMonths = 10;

  //   return contributions.filter((day) => {
  //     const date = new Date(day.date);
  //     const monthOfDay = date.getMonth();

  //     return (
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - shownMonths &&
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Heading color="#322659">Github Calender and Stats</Heading>
      </div>
      <br />
      <GitHubCalendar
        style={{ margin: "auto" }}
        username="svijaym"
        // transformData={selectLastHalfYear}
        // blockSize={20}
        fontSize={14}
        blockMargin={4}
        blockRadius={5}
        blockSize={16}
        showWeekdayLabels
      >
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
    </div>
  );
};

export default GitCalender;
