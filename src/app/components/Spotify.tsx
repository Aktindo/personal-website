"use client";

import { Button, Card, CardBody, Slider, Image } from "@nextui-org/react";
import React, { FC } from "react";
import { BiHeart } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { useLanyard } from "react-use-lanyard";

interface IProps {}

/**
 * @author
 * @function @Spotify
 **/

export const Spotify: FC<IProps> = (props) => {
  const lanyard = useLanyard({
    userId: "683879319558291539",
  });

  const lanyardData = lanyard.data?.data;

  return !lanyard.isValidating && lanyardData?.listening_to_spotify ? (
    <div>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 md:ml-16 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-12 gap-4 items-center justify-center">
            <div className="relative col-span-4">
              <Image
                alt="Album cover"
                className="object-cover"
                shadow="md"
                src={lanyardData.spotify?.album_art_url}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <p className="flex items-center font-bold text-xs md:text-sm uppercase text-foreground/90">
                    <FaSpotify size="24" className="mr-1.5" /> Listening to
                    Spotify
                  </p>
                  <h1 className="text-large font-medium md:mt-20">
                    {lanyardData.spotify?.song}
                  </h1>
                  <p className="text-small mt-1 text-foreground/80">
                    On {lanyardData.spotify?.album}
                  </p>
                  <p className="text-small text-foreground/80">
                    By {lanyardData.spotify?.artist}
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
