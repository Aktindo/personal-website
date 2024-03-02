"use client";

import {
  Button,
  Card,
  CardBody,
  Slider,
  Image,
  Progress,
} from "@nextui-org/react";
import React, { FC, useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { useLanyard } from "react-use-lanyard";
import { merriweather } from "../helpers/fonts";
import { useRouter } from "next/navigation";

interface IProps {}

/**
 * @author
 * @function @Spotify
 **/

export const Spotify: FC<IProps> = (props) => {
  let lanyard = useLanyard({
    userId: "683879319558291539",
  });
  const [now, setNow] = useState<any>(0);
  const [dateNow, setDateNow] = useState<Date>();
  const router = useRouter();

  const lanyardData = lanyard.data?.data;

  const { end, start } = lanyardData?.spotify?.timestamps || {};

  const endTime = new Date(end || 0);
  const startTime = new Date(start || 0);
  const currentTime = new Date();

  function timeDifference(date1: Date, date2: Date) {
    var difference = date1.getTime() - date2.getTime();
    var minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    var secondsDifference = Math.floor(difference / 1000);

    return `${minutesDifference}:${
      secondsDifference < 10 ? `0${secondsDifference}` : secondsDifference
    }`;
  }

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (currentTime.getTime() < endTime.getTime()) {
        setNow(timeDifference(currentTime, startTime));
        setDateNow(currentTime);
      } else if (!lanyard.isValidating && lanyardData?.listening_to_spotify) {
        window.location.reload();
      }
    }, 1000);

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  });

  return !lanyard.isValidating && lanyardData?.listening_to_spotify ? (
    <div>
      <Card
        className="border-none bg-[#1DB954] bg-opacity-50 md:ml-16 max-w-xl"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-12 md:grid-cols-10 gap-4 items-center justify-center">
            <div className="relative col-span-4 md:col-span-2">
              <p className="font-bold mb-3 w-48 flex items-center text-xs md:text-sm uppercase text-foreground/90">
                <FaSpotify size="24" className="mr-1.5" /> Listening to Spotify
              </p>
              <Image
                alt="Album cover"
                className="object-cover w-30 h-24"
                src={lanyardData.spotify?.album_art_url}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-8 mt-auto">
              <div>
                <div className="flex flex-col gap-1">
                  <Progress
                    aria-label="Music progress"
                    classNames={{
                      track: "bg-default-500/30",
                      indicator: "bg-white",
                    }}
                    value={Number(
                      (
                        ((currentTime.getTime() - startTime.getTime()) /
                          (endTime.getTime() - startTime.getTime())) *
                        100
                      ).toFixed(2)
                    )}
                    size="sm"
                  />
                  <div className="flex justify-between">
                    <p className="text-small text-foreground/50">
                      {now ? now : "00:00"}
                    </p>
                    <p className="text-small">
                      {timeDifference(endTime, startTime)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start whitespace-nowrap text-ellipsis overflow-x-hidden">
                <div className="flex flex-col gap-0">
                  <p
                    className={`md:text-large font-medium ${merriweather.className}`}
                  >
                    {lanyardData.spotify?.song}
                  </p>
                  <p className="text-xs md:text-small text-foreground/80">
                    On{" "}
                    <span className="font-medium">
                      {lanyardData.spotify?.album}
                    </span>
                  </p>
                  <p className="text-xs md:text-small text-foreground/80">
                    By{" "}
                    <span className="font-medium">
                      {lanyardData.spotify?.artist}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  ) : (
    <></>
  );
};
