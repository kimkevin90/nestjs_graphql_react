import React, { useEffect } from "react";

interface ICountdown {
  hours: number;
  minutes: number;
  seconds: number;
}

interface GameOver {
  gameOver: Boolean;
}

const CountDownTimer = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
  gameOver = false,
}: any) => {
  const [time, setTime] = React.useState<ICountdown>({
    hours,
    minutes,
    seconds,
  });

  const tick = () => {
    // if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) reset();
    if (time.seconds === 59 && time.minutes === 59) {
      setTime({ hours: time.hours + 1, minutes: 0, seconds: 0 });
    } else if (time.seconds === 59) {
      setTime({ hours: time.hours, minutes: time.minutes + 1, seconds: 0 });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds + 1,
      });
    }
  };

  useEffect(() => {
    let timerId: any = undefined;
    if (!gameOver) {
      timerId = setInterval(() => tick(), 1000);
      // console.log(timerId);
    }
    return () => clearInterval(timerId);
  }, [gameOver, time]);
  // console.log(gameOver);
  return (
    <div>
      <p>{`경과시간 : ${time.hours.toString().padStart(2, "0")}:${time.minutes
        .toString()
        .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</p>
    </div>
  );
};

export default CountDownTimer;
