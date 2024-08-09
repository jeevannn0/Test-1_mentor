/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HT6MagXCPCC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Button } from "@/public/ui/button"

export default function Prt2() {
  const [activeIndex, setActiveIndex] = useState(null)
  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <div className=" mx-auto mr-16 ml-16 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">MTP – Mentor Training Program</h1>
      <hr className="border-t-2 border-gray-200 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="/placeholder.svg"
            alt="Mentor Training Program"
            className="rounded-lg w-full"
            width="400"
            height="300"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-4">Suitable for : College Grads</h2>
          <p className="text-gray-600 mb-4">
            One course that covers important practical concepts from All Important subjects which will make you
            Personally and Professionally ready for the future
          </p>
          <div className="space-y-4">
            <div
              className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleDescription(0)}
            >
              <MinusIcon className="w-6 h-6 text-blue-700 mr-4" />
              <span className="text-gray-700">Month 1- 4 : Overview - Marketing , HR , Tech , Law , Finance ,</span>
            </div>
            {activeIndex === 0 && (
              <div className="ml-10 text-gray-700">
                This section covers the overview of important subjects like marketing, HR, technology, law, and finance.
              </div>
            )}
            <div
              className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleDescription(1)}
            >
              <MinusIcon className="w-6 h-6 text-blue-700 mr-4" />
              <span className="text-gray-700">Month 5 : Case Studies & Mentor Discussions</span>
            </div>
            {activeIndex === 1 && (
              <div className="ml-10 text-gray-700">
                This section focuses on case studies and discussions with experienced mentors.
              </div>
            )}
            <div
              className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleDescription(2)}
            >
              <MinusIcon className="w-6 h-6 text-blue-700 mr-4" />
              <span className="text-gray-700">Month 6 : Live Projects & Internships</span>
            </div>
            {activeIndex === 2 && (
              <div className="ml-10 text-gray-700">
                This section involves hands-on experience through live projects and internships.
              </div>
            )}
          </div>
          <div className="mt-8">
            <Button className="bg-blue-700 text-white px-6 py-3 rounded-full">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MinusIcon(props) {
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
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M12 5v14" />
    </svg>
  )
}