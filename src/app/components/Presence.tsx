"use client";

import { CircularProgress } from "@nextui-org/react";
import React, { FC, useEffect, useState } from "react";
import { useLanyard } from "react-use-lanyard";

interface IProps {}

/**
 * @author
 * @function @Presence
 **/

const discordStatus = {
  online: {
    name: "Online",
    color: "bg-success",
  },
  offline: {
    name: "Offline",
    color: "bg-gray-700",
  },
  dnd: { name: "Do not disturb", color: "bg-danger" },
  idle: { name: "Idle", color: "bg-warning" },
};

export const Presence: FC<IProps> = (props) => {
  const lanyard = useLanyard({
    userId: "683879319558291539",
  });

  const [time, setTime] = useState<string>("");

  const getTime = () => {
    const currentTime = new Date();

    const currentOffset = currentTime.getTimezoneOffset();

    const ISTOffset = 330; // IST offset UTC +5:30

    const ISTTime = new Date(
      currentTime.getTime() + (ISTOffset + currentOffset) * 60000
    );

    // ISTTime now represents the time in IST coordinates

    const hoursIST = ISTTime.getHours();
    const minutesIST = ISTTime.getMinutes();

    return setTime(
      `${hoursIST < 10 ? `0${hoursIST}` : hoursIST}:${
        minutesIST < 10 ? `0${minutesIST}` : minutesIST
      }`
    );
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {!lanyard.isValidating ? (
        <div className="flex items-center">
          <div className="flex items-center">
            <div
              className={`presence rounded-full w-3 h-3 ${
                discordStatus[lanyard.data?.data.discord_status || "offline"]
                  .color
              }`}
            ></div>{" "}
            <p className="font-bold ml-2">
              {
                discordStatus[lanyard.data?.data.discord_status || "offline"]
                  .name
              }
            </p>
          </div>
          <div className="presence bg-gray-700 rounded-full w-2 h-2 ml-2"></div>{" "}
          <p className="flex items-center font-bold ml-2">{time} IST</p>
        </div>
      ) : (
        <CircularProgress classNames={{ svg: "w-5 h-5" }} />
      )}
    </div>
  );
};
