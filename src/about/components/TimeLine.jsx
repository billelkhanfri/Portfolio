import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import timelineData from "../timeline.json";

const Timeline = () => {
  let schoolStyle = { background: "var(--primary-color)" };
  return (
    <VerticalTimeline>
      {timelineData.map((event) => (
        <VerticalTimelineElement
          key={event.id}
          date={event.date}
          dateClassName="vertical-timeline-element-date"
          icon={<AiOutlineFundProjectionScreen className="icon" />}
          iconStyle={schoolStyle}
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          <div className="vertical-timeline-element-description">
            {" "}
            {event.description}
          </div>

          <div>
            <button
              className=" btn btn-experience btn-primary"
              onClick={event.onClick}
            >
              {event.buttonText}
            </button>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
