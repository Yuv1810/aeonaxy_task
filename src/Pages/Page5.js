import Button from "../components/Buttons";
import Image2 from "../assets/Image2.png";
import { useRecoilValue, useRecoilState } from "recoil";
import { pagecount } from "../components/atoms.js";

export default function Page5() {
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
            src={Image2}
            alt="Pulley_image"
            style={{ height: "100%" }}
            className="w-64 sm:w-96 "
          />
        </div>
        <div className="bg-white h-80 flex justify-center items-center flex-col sm:justify-center sm:items-start ">
          <h1 className="text-xl sm:text-3xl font-semibold mt-2 sm:mt-16 mb-10">
            You're on your way!
          </h1>
          <h5 className="text-base mt-2 font-light">⭐ ⭐ ⭐ ⭐ ⭐</h5>
          <h5 className="text-base mt-2 font-light">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </h5>
          <h5 className="text-base mt-2 font-light mt-6"> -Jacob S. </h5>
        </div>
      </div>
      <Button onClick={fun1} />
    </>
  );
}
