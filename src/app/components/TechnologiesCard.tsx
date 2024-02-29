import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { FC } from "react";
import Image from "next/image";
import { DiJavascript } from "react-icons/di";
import { MdJavascript } from "react-icons/md";
import {
  SiArduino,
  SiElectron,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNextui,
  SiPostman,
  SiPug,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaJava, FaReact } from "react-icons/fa6";
import { FaCss3Alt, FaHtml5, FaMarkdown } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { merriweather } from "../helpers/fonts";

interface IProps {}

/**
 * @author
 * @function @TechnologiesCard
 **/

export const TechnologiesCard: FC<IProps> = (props) => {
  return (
    <div>
      <Card className="mt-10 md:ml-10 mx-auto w-96 h-[300px] bg-zinc-950">
        <CardHeader className="z-10 flex-col text-primary bg-primary bg-opacity-20 !items-start">
          <p className="text-tiny flex items-center opacity-100 uppercase font-bold">
            Technologies
          </p>
          <h4
            className={"font-medium mt-2 opacity-100 " + merriweather.className}
          >
            What I use to create next-gen apps.
          </h4>
        </CardHeader>
        <CardBody className="grid grid-cols-6 grid-rows-6 gap-y-5 text-primary">
          <BiLogoJavascript size="35" />
          <BiLogoTypescript size="35" />
          <FaHtml5 size="35" />
          <FaCss3Alt size="35" />
          <FaJava size="35" />
          <SiMongodb size="35" />
          <FaMarkdown size="35" />
          <SiPostman size="35" />
          <SiExpress size="35" />
          <FaReact size="35" />
          <SiNextdotjs size="35" />
          <SiNextui size="35" />
          <SiElectron size="35" />
          <SiPug size="35" />
          <SiTailwindcss size="35" />
          <FiFigma size="35" />
          <SiArduino size="35" />
        </CardBody>
      </Card>
    </div>
  );
};
