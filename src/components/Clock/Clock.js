import React, { useEffect, useState } from "react";
import "./clock.css";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

function Clock() {
  const [time, setTime] = useState(new Date());

  const SUNRISE_HOUR = 7;
  const SUNSET_HOUR = 18;

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return `${hours}:${minutes}`;
  };

  const getClockIcon = (hours) => {
    if (hours < SUNRISE_HOUR || hours >= SUNSET_HOUR) {
      return <BsMoonFill className="clock-icon" size={28} />;
    } else {
      return <BsFillSunFill className="clock-icon" size={28} />;
    }
  };
  const clockIcon = getClockIcon(time.getHours());

  return (
    <div className="clock-container fit">
      <h1 className="clock">
        {clockIcon}
        {formatTime(time)}
      </h1>
    </div>
  );
}

export default Clock;