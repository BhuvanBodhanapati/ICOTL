import React, { useEffect, useState } from "react";

const CountDown = () => {

    const deadline = "December, 7, 2023";
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const leading0 = (num) => {
      return num < 10 ? "0" + num : num;
    };

    const getTimeUntil = (deadline) => {
      const time = Date.parse(deadline) - Date.parse(new Date());
      if (time < 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      }
    };

    useEffect(() => {
      setInterval(() => getTimeUntil(deadline), 1000);

      return () => getTimeUntil(deadline);
    }, [deadline]);

   return (
     <div className="countDownDiv">
       <div className="Clock">
           <label>{leading0(days)} Days</label> <span>:</span>
       </div>
       <div className="Clock">
           <label>{leading0(hours)} Hours</label> <span>:</span>
       </div>
       <div className="Clock">
           <label>{leading0(minutes)} Min</label> <span>:</span>
       </div>
       <div className="Clock">
           <label>{leading0(seconds)} Sec</label>
       </div>
     </div>
   );
};

export default CountDown
