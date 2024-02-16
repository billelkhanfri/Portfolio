import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";

import timelineData from "../education.json";

const Education = () => {
  let schoolStyle = { background: "var(--bs-blue" };
  return (
    <VerticalTimeline>
      {timelineData.map((event) => (
        <VerticalTimelineElement
          key={event.id}
          date={event.date}
          dateClassName="vertical-timeline-element-date"
          icon={<IoSchoolSharp className="icon" />}
          iconStyle={schoolStyle}
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          {event.id === 3 && event.description && (
            <div className="vertical-timeline-element-description">
              <ul>
                {event.description.split("-").map((item, index) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ul>
            </div>
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Education;
