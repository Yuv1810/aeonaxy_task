import React from "react";
import Tasks from "./components/Tasks.js";
import Page1 from "./Pages/Page1.js";
import Page2 from "./Pages/Page2.js";
import Page3 from "./Pages/Page3.js";
import Page4 from "./Pages/Page4.js";
import Page5 from "./Pages/Page5.js";
import Page6 from "./Pages/Page6.js";
import Loaders from "./Pages/Loaders.js";
import { useRecoilValue } from "recoil";
import { pagecount } from "./components/atoms.js";
import { useState } from "react";

const obj = {
  1: <Page1 />,
  2: <Page2 />,
  3: <Page3 />,
  4: <Page4 />,
  5: <Page5 />,
  6: <Loaders />,
  7: <Page6 />,
};

const DemoComponent = () => {
  var position = useRecoilValue(pagecount);
  var index = 1;
  function changePage() {
    index++;
  }

  const [ind, setind] = useState(0);

  var cn = 0;
  return (
    <div className=" flex flex-col justify-top items-center mt-16 pl-6 pr-6">
      <div className="flex flex-row justify-center items-center w-full">
        <div className="w-2"></div>
        {position < 6 ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="pr-2"
              onClick={changePage()}
            >
              <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
            </svg>
            <Tasks />
          </>
        ) : (
          <div></div>
        )}
      </div>
      {obj[position]}
    </div>
  );
};

export default DemoComponent;
