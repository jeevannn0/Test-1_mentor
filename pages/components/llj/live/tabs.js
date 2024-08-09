"use client";

import { Button } from "../../../../public/ui/button"
import Link from "next/link"
import { Tabs } from "./tabss";

export default function TabsDemo() {
  const tabs = [
    {
      title: "ORIENT",
      value: "ORIENT",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>ORIENT</p>
          <ORIENT />
        </div>
      ),
    },
    {
      title: "EMERGE",
      value: "EMERGE",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>EMERGE</p>
          <EMERGE />
        </div>
      ),
    },
    {
      title: "ELEVATE",
      value: "ELEVATE",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>ELEVATE</p>
          <ELEVATE />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const ORIENT = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-6xl mt-7 bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-[#212121]">ORIENT</h1>
      <div className="text-[#999999] text-[13px]">Choose from 50+ customizable resume templates that are built to</div>
      <div className="text-[#999999] text-[13px] -mt-5">meet your career needs.</div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Placeholder"
            className="object-cover w-full h-full"
            width="400"
            height="400"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <h3 className="text-sm text-[#6b7280]">Mentors</h3>
          <h1 className="mt-2 text-[27px] text-[#1f2937]">
            Stop procrastinating and let's build your professional <span className="text-[#4169e1]">LinkedIn</span>{" "}
            presence today!
          </h1>
          <p className="mt-4 text-sm text-[#6b7280]">
            This is the course process you will go through if you subscribe to our platform.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <Button className="bg-[#4169e1] text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <span>Book now</span>
              <ArrowRightIcon className="h-4 w-4 text-white" />
            </Button>
            <Link href="#" className="text-[#1f2937] text-sm underline" prefetch={false}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const EMERGE = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-6xl mt-7 bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-[#212121]">EMERGE</h1>
      <div className="text-[#999999] text-[13px]">Choose from 50+ customizable resume templates that are built to</div>
      <div className="text-[#999999] text-[13px] -mt-5">meet your career needs.</div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Placeholder"
            className="object-cover w-full h-full"
            width="400"
            height="400"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <h3 className="text-sm text-[#6b7280]">Mentors</h3>
          <h1 className="mt-2 text-[27px] text-[#1f2937]">
            Stop procrastinating and let's build your professional <span className="text-[#4169e1]">LinkedIn</span>{" "}
            presence today!
          </h1>
          <p className="mt-4 text-sm text-[#6b7280]">
            This is the course process you will go through if you subscribe to our platform.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <Button className="bg-[#4169e1] text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <span>Book now</span>
              <ArrowRightIcon className="h-4 w-4 text-white" />
            </Button>
            <Link href="#" className="text-[#1f2937] text-sm underline" prefetch={false}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ELEVATE = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-6xl mt-7 bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-[#212121]">ELEVATE</h1>
      <div className="text-[#999999] text-[13px]">Choose from 50+ customizable website templates that are built to</div>
      <div className="text-[#999999] text-[13px] -mt-5">meet your career needs.</div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Placeholder"
            className="object-cover w-full h-full"
            width="400"
            height="400"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <h3 className="text-sm text-[#6b7280]">Mentors</h3>
          <h1 className="mt-2 text-[27px] text-[#1f2937]">
            Stop procrastinating and let's build your professional <span className="text-[#4169e1]">LinkedIn</span>{" "}
            presence today!
          </h1>
          <p className="mt-4 text-sm text-[#6b7280]">
            This is the course process you will go through if you subscribe to our platform.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <Button className="bg-[#4169e1] text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <span>Book now</span>
              <ArrowRightIcon className="h-4 w-4 text-white" />
            </Button>
            <Link href="#" className="text-[#1f2937] text-sm underline" prefetch={false}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
    );
  };
