"use client";

import { CircularProgress } from "@nextui-org/react";
import React, { FC } from "react";
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
  return (
    <div>
      {!lanyard.isValidating ? (
        <div className="flex items-center">
          <div
            className={`presence rounded-full w-3 h-3 ${
              discordStatus[lanyard.data?.data.discord_status || "offline"]
                .color
            }`}
          ></div>{" "}
          <p className="font-bold ml-2">
            {discordStatus[lanyard.data?.data.discord_status || "offline"].name}
          </p>
        </div>
      ) : (
        <CircularProgress classNames={{ svg: "w-5 h-5" }} />
      )}
    </div>
  );
};
