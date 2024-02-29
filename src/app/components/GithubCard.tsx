import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React, { FC } from "react";
import { FaGithub } from "react-icons/fa6";
import { merriweather } from "../helpers/fonts";
import codeGif from "../images/code.gif";

interface IProps {}

/**
 * @author
 * @function @GithubCard
 **/

export const GithubCard: FC<IProps> = (props) => {
  return (
    <div>
      <a href="https://github.com/Aktindo" target="_blank">
        <Card isPressable className="mt-10 h-[300px]">
          <CardHeader className="absolute z-10 flex-col bg-black bg-opacity-80 !items-start">
            <p className="text-tiny flex items-center text-white opacity-100 uppercase font-bold">
              <FaGithub size="20" className="mr-1" /> GitHub
            </p>
            <h4
              className={
                "text-white font-medium mt-2 opacity-100 " +
                merriweather.className
              }
            >
              Check out my open-source contributions here.
            </h4>
          </CardHeader>
          <Image
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={codeGif}
          />
        </Card>
      </a>
    </div>
  );
};
