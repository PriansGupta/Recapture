import * as React from "react";
import ApplicationItem from "./ApplicationItem";
import NotFound from "./NotFound";

export default function ApplicationsList(props) {
  const Applied = props.props;
  console.log(Applied);
  return (
    <div className="Applications">
      {Applied.map((item) => (
        <ApplicationItem
          title={item.props.title}
          organisation={item.props.organisation}
        ></ApplicationItem>
      ))}
    </div>
  );
}
