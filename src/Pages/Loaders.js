import circle from "../assets/circle.png";
import { useRecoilValue, useRecoilState } from "recoil";
import { pagecount } from "../components/atoms.js";
import { useEffect } from "react";

export default function Loaders() {
  var [position, setposition] = useRecoilState(pagecount);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setposition((cn) => {
        return cn + 1;
      });
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <img
          src={circle}
          alt="Pulley_image"
          style={{ height: "20%" }}
          className="w-24 sm:w-36 mt-32 sm:mt-36"
        />
        <h1 className="text-xl sm:text-xl font-semibold mt-2 mb-10 px-9">
          Finding learning path recommendations for you based on your responses
        </h1>
      </div>
    </>
  );
}
