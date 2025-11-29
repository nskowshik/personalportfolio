import React from "react";
import { TextStyle } from "../components";
import { PROFILE_INFO } from "../constants";

const Intro = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <TextStyle size="26">Hello, it's me </TextStyle>
        <TextStyle size="42">{PROFILE_INFO.name}</TextStyle>
        <TextStyle size="18" color="#d0d0d0eb" className="underline">
          {PROFILE_INFO.about}
        </TextStyle>
    </div>
  );
};

export default Intro;
