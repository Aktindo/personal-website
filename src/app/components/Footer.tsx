"use client";

import { Button } from "@nextui-org/react";
import React, { FC, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";

interface IProps {}

/**
 * @author
 * @function @Footer
 **/

export const Footer: FC<IProps> = (props) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const getTheme = () => {
    return localStorage.getItem("theme") || "dark";
  };

  const changeTheme = () => {
    document.getElementsByTagName("html")[0].setAttribute("class", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <main className="footer">
      <div className="footer__left fixed left-0 bottom-0 m-5 text-sm">
        <p className="opacity-60 font-bold mr-3">
          aktindo. {new Date().getFullYear()}
        </p>
      </div>
      <div className="footer__right flex items-center fixed right-0 bottom-0 m-5">
        <Button
          variant="flat"
          isIconOnly
          onPress={() => {
            setTheme(theme == "light" ? "dark" : "light");
            changeTheme();
          }}
        >
          {getTheme() == "light" ? <FiMoon size="24" /> : <FiSun size="24" />}
        </Button>
      </div>
    </main>
  );
};
