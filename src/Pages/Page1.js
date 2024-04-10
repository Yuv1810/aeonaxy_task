import { Tile } from "../components/Tile.js";
import Button from "../components/Buttons.js";
import { useRecoilValue, useRecoilState } from "recoil";
import { pagecount } from "../components/atoms.js";
import one from "../assets/one.jpeg";
import two from "../assets/two.jpeg";
import three from "../assets/three.jpeg";
import four from "../assets/four.jpeg";
import five from "../assets/five.jpeg";
import six from "../assets/six.jpeg";

export default function Page1() {
  var [position, setposition] = useRecoilState(pagecount);
  function fun1() {
    setposition((cn) => {
      return cn + 1;
    });
  }

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-semibold mt-10">
        Which describe you the best ?
      </h1>
      <h5 className="text-base mt-8 font-light">
        This will help us personalize your experience.
      </h5>
      <Tile
        switch={0}
        desc={"Student"}
        image={one}
        title={"or soon to be enrolled"}
      />
      <Tile
        switch={0}
        desc={"Professional"}
        image={two}
        title={"pursuing a career"}
      />
      <Tile
        switch={0}
        desc={"Planner"}
        image={three}
        title={"of a school age child"}
      />
      <Tile switch={0} desc={"Parent"} image={four} />
      <Tile switch={0} desc={"Lifelong Learner"} image={five} />
      <Tile switch={0} desc={"Teacher"} image={six} />

      <Button onClick={fun1} />
    </>
  );
}
