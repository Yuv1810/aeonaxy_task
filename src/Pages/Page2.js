import { Tile } from "../components/Tile.js";
import Button from "../components/Buttons.js";
import { useRecoilValue, useRecoilState } from "recoil";
import { pagecount } from "../components/atoms.js";
import one2 from "../assets/one2.jpeg";
import two2 from "../assets/two2.jpeg";
import three2 from "../assets/three2.jpeg";
import four2 from "../assets/four2.jpeg";

export default function Page2() {
  var [position, setposition] = useRecoilState(pagecount);
  // var position = useRecoilValue(pagecount);
  function fun1() {
    setposition((cn) => {
      return cn + 1;
    });
  }

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-semibold mt-10">
        Which are you most intrested in ?
      </h1>
      <h5 className="text-sm font-light mt-8">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </h5>
      <Tile
        switch={0}
        desc={"Learning specific skills to advance my career"}
        image={one2}
      />
      <Tile
        switch={0}
        desc={"Exploring new topics I'm interested in"}
        image={three2}
      />
      <Tile switch={0} desc={"Refreshing my math foundations"} image={two2} />
      <Tile
        switch={0}
        desc={"Exercising my brain to stay sharp"}
        image={four2}
      />
      <Button onClick={fun1} />
    </>
  );
}
