import React from "react";
import Pulley_image from "../assets/Pulley_image.png";
import Button from "../components/Buttons";
import { useRecoilValue, useRecoilState } from "recoil";
import { pagecount } from "../components/atoms.js";

export default function Page3() {
  var [position, setposition] = useRecoilState(pagecount);
  function fun1() {
    setposition((cn) => {
      return cn + 1;
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 w-full mt-16 flex-row pl-6 pr-6 sm:pr-56">
        <div className="bg-white flex justify-center items-center bg-contain">
          <img
            src={Pulley_image}
            alt="Pulley_image"
            style={{ height: "100%" }}
            className="w-64 sm:w-96 "
          />
        </div>
        <div className="bg-white h-80 flex justify-center items-center flex-col sm:justify-center sm:items-start ">
          <h1 className="text-xl sm:text-3xl font-semibold mt-2 sm:mt-16 mb-10">
            You're in the right place
          </h1>
          <h5 className="text-base mt-2 font-light">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </h5>
        </div>
      </div>
      <Button onClick={fun1} />
    </>
  );
}
