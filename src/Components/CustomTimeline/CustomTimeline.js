import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import "./CustomTimeline.css";

const CustomTimeline = (props) => {
  const info = props.info;
  return (
    <Timeline>
      <div className="resume_timeline_header">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              style={{
                background: "#ffb100",
                color: "#333",
                padding: "8px",
              }}
            >
              <MenuBookIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
      </div>
      {info.map((level) => (
        <div className="resume_timeline">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  background: "#ffb100",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className="level_title">{level.title}</h3>
              <p className="level_year">{level.year}</p>
              <p className="level_content">{level.content}</p>
            </TimelineContent>
          </TimelineItem>
        </div>
      ))}
      {/* <CustomTimeline className="resume_timeline_content"></CustomTimeline> */}
    </Timeline>
  );
};

export default CustomTimeline;
