import React from "react";
import Tabs from "./Tabs";
import ImageWidget from "./ImageWidget";

const App = () => {
  return (
    <div className="md:flex-row flex flex-col gap-10 pl-[30px] px-[40px] py-[90px] bg-gradient-to-b from-mainTGrad to-mainBGrad text-white min-h-screen">
      <div className="bg-ld1 bg-opacity-80 rounded-[27px] border border-blue-200 w-full sm:h-[100vh] h-[50vh] md:flex-1"></div>
      <div className="flex flex-col items-center gap-6">
        <Tabs />
        <span className="bottomSpan w-[70vw] lg:w-[612px] h-1.5" />
        <ImageWidget />
        <span className="bottomSpan w-[70vw] lg:w-[612px] h-1.5" />
      </div>
    </div>

  );
};

export default App;
