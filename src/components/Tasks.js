import { useRecoilValue } from "recoil";
import { pagecount } from "./atoms";

const style = {
  1: "h-1.5 w-1/12 bg-green-700 rounded-md",
  2: "h-1.5 w-3/12 bg-green-700 rounded-md",
  3: "h-1.5 w-5/12 bg-green-700 rounded-md",
  4: "h-1.5 w-7/12 bg-green-700 rounded-md",
  5: "h-1.5 w-full bg-green-700 rounded-md",
};

export default function Tasks() {
  const cnt = useRecoilValue(pagecount);
  console.log(cnt);

  return (
    <div className="h-1.5 w-5/6 bg-zinc-500 rounded-md">
      <div className={style[cnt]}></div>
    </div>
  );
}
