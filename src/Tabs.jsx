import React, { useState } from "react";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { SiWindows11 } from "react-icons/si";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="bg-rd1 sm:rightBoxes flex items-start gap-3 p-2">
      <div className="flex flex-col items-center gap-[105px] text-rd1text">
        <IoMdHelpCircleOutline className="size-8" />
        <SiWindows11 className="size-5 " />
      </div>
      <div className="space-y-4">
        <div className=" box flex justify-between p-1.5 ">
          <button
            onClick={() => setActiveTab("1")}
            className={`${
              activeTab === "1" ? "bg-rd1 rounded-[16px] shadow-custom-xl shadow-black/95" : "text-text"
            }  py-[10px] px-[24px] font-semibold `}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab("2")}
            className={`${
              activeTab === "2" ? "bg-rd1 rounded-[16px] shadow-custom-xl shadow-black/95 " : "text-text"
            }  py-[10px] px-[24px] font-semibold `}
          >
            Experiences
          </button>
          <button
            onClick={() => setActiveTab("3")}
            className={`${
              activeTab === "3" ? "bg-rd1 rounded-[16px] shadow-custom-xl shadow-black/95 " : "text-text"
            }  py-[10px] px-[24px] font-semibold`}
          >
            Recommended{" "}
          </button>
        </div>
        <div className=" h-[175px] pt-5 text whitespace-pre-wrap overflow-y-scroll pr-3">
          {activeTab === "1" && (
            <p className="">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
              <br/>
              <br/>
               I was born and
              raised in Albany, NY& have been living in Santa Carla for the past
              10 years my wife Tiffany and my 4 year old twin daughters- Emma
              and Ella. Both of them are just starting school, so my calender is
              usually blocked between 9-10 AM. This is a
              raised in Albany, NY& have been living in Santa Carla for the past
              10 years my wife Tiffany and my 4 year old twin daughters- Emma
              and Ella. Both of them are just starting school, so my calender is
              usually blocked between 9-10 AM.

            </p>
          )}
          {activeTab === "2" && (
            <p className="">
              I was born and
              raised in Albany, NY& have been living in Santa Carla for the past
              10 years my wife Tiffany and my 4 year old twin daughters- Emma
              and Ella. Both of them are just starting school, so my calender is
              usually blocked between 9-10 AM. This is a...
            </p>
          )}
          {activeTab === "3" && (
            <p className="">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default Tabs;
