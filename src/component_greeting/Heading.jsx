import React from "react";
import ReactDOM from "react-dom";
import "/public/styles.css";

function Heading() {
  var date = new Date(2021, 5, 2, 23, 36, 15);
  var time = date.getHours();
  var x;
  var classPic;
  if (time < 12) {
    x = "Good Morning";
    classPic = "morning";
  } else if (time < 18) {
    x = "Good Afternoon";
    classPic = "afternoon";
  } else {
    x = "Good Night";
    classPic = "night";
  }
  return <h1 className={classPic}>{x}</h1>;
}

export default Heading;
