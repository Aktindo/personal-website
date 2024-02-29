import React, { FC } from "react";

interface IProps {}

/**
 * @author
 * @function @Footer
 **/

export const Footer: FC<IProps> = (props) => {
  return (
    <div className="footer fixed text-sm right-0 bottom-0 m-5">
      <p className="opacity-60 font-bold">
        aktindo. {new Date().getFullYear()}
      </p>
    </div>
  );
};
