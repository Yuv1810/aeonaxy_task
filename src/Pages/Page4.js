import Button from "../components/Buttons";
import Card from "../components/Card";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { useRecoilValue, useRecoilState } from "recoil";
import { pagecount } from "../components/atoms.js";

export default function Page4() {
  var [position, setposition] = useRecoilState(pagecount);
  function fun1() {
    setposition((cn) => {
      return cn + 1;
    });
    // console.log(position);
  }
  return (
    <>
      <div className="flex justify-center items-center mr-4 ml-4"></div>
      <h1 className="text-xl sm:text-3xl font-semibold mt-4 sm:mt-24 mb-10">
        What is you math comfort level ?
      </h1>
      <h5 className="text-lg mt-2 font-light">
        Choose the highest level you feel confident in - you can always adjust
        later.
      </h5>

      <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-4 lg:grid-cols-4 md:grid-rows-1 mb-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Button onClick={fun1} />
    </>
  );
}
