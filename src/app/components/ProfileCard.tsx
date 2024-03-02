import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import pfp from "../images/pfp.jpg";
import { merriweather } from "../helpers/fonts";
import { Presence } from "./Presence";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { Spotify } from "./Spotify";

interface IProps {}

/**
 * @author
 * @function @ProfileCard
 **/

const socialsList = [
  {
    name: "GitHub",
    url: "https://github.com/Aktindo",
    icon: <FaGithub size={24} />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/akshxsingla",
    icon: <FaInstagram size={24} />,
  },
  {
    name: "X",
    url: "https://twitter.com/Aktindo",
    icon: <FaXTwitter size={24} />,
  },
  {
    name: "Discord",
    url: "https://discord.gg/YqyU6qA4",
    icon: <FaDiscord size={24} />,
  },
];

export const ProfileCard: FC<IProps> = (props) => {
  return (
    <div className="profile-card mx-10 md:mx-auto">
      <div className="md:flex md:items-center md:justify-center">
        <div>
          <div className="flex justify-center items-center">
            <Image
              src={pfp}
              className="w-16 rounded-full"
              alt="Profile Picture"
              height="200"
              width="200"
            />
            <div className="ml-3 profile-card__main">
              <p className={merriweather.className + " text-xl md:text-2xl"}>
                Akshit Singla
              </p>
              <p className="text-primary text-sm md:text-base font-bold">
                Full-stack developer / student
              </p>
            </div>
          </div>
          <div className="profile-card__bio mx-auto w-72 md:w-96 text-center mt-2">
            <p className="text-sm md:text-base font-bold">
              I build scalable web-applications, design on the front-end and
              destroy my will to live.
            </p>
          </div>
          <div className="profile-card__status text-sm md:text-base flex justify-center items-center mt-5">
            <Presence />
          </div>
        </div>
        <div className="my-5 spotify">
          <Spotify />
        </div>
      </div>

      <div className="socials flex justify-center items-center mt-5">
        {socialsList.map((social, i) => (
          <Tooltip key={i} showArrow content={social.name}>
            <Link href={social.url} target="_blank">
              <Button
                className="mr-2"
                color="primary"
                isIconOnly
                variant="flat"
              >
                {social.icon}
              </Button>
            </Link>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
