import Link from "next/link";
import { useRef, useState } from "react";

export default function Quiz() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollLeftFunc = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRightFunc = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const onMouseDown = (e) => {
    e.preventDefault(); // Prevent default behavior like text selection
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const onMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default behavior
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex-1 ml-28 mr-28 items-center justify-center ">
      <div className="flex items-center justify-between mb-6">
      <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Quiz</h1>
          <p className="text-lg text-gray-600">Upscale your Knowladge</p>
          
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeftFunc}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRightFunc}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 md:-mx-6 pb-4 cursor-grab"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="flex gap-4 md:gap-6">
          <TestCard
            image="/placeholder.svg"
            heading="Test 1"
            tags={['React', 'Java']}
            time="30 mins"
            description="A short description of the test."
          />
          <TestCard
            image="/placeholder.svg"
            heading="Test 2"
            tags={['Python', 'Django']}
            time="45 mins"
            description="A short description of the test."
          />
          <TestCard
            image="/placeholder.svg"
            heading="Test 3"
            tags={['JavaScript', 'Node.js']}
            time="60 mins"
            description="A short description of the test."
          />
          <TestCard
            image="/placeholder.svg"
            heading="Test 4"
            tags={['HTML', 'CSS']}
            time="20 mins"
            description="A short description of the test."
          />
          <TestCard
            image="/placeholder.svg"
            heading="Test 4"
            tags={['HTML', 'CSS']}
            time="20 mins"
            description="A short description of the test."
          />
          <TestCard
            image="/placeholder.svg"
            heading="Test 4"
            tags={['HTML', 'CSS']}
            time="20 mins"
            description="A short description of the test."
          />
          <TestCard
            image="/placeholder.svg"
            heading="Test 4"
            tags={['HTML', 'CSS']}
            time="20 mins"
            description="A short description of the test."
          />
        </div>
      </div>
    </div>
  );
}

function TestCard({ image, heading, tags, time, description }) {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[340px] snap-center">
      <Link
        href=" "
        className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        prefetch={false}
      >
        <img
          src={image}
          width={340}
          height={240}
          alt={heading}
          className="w-full h-[240px] md:h-[280px] object-cover"
          style={{ aspectRatio: "340/240", objectFit: "cover" }}
        />
        <div className="p-4 bg-white dark:bg-gray-950">
          <h3 className="text-lg font-semibold">{heading}</h3>
          <div className="flex flex-wrap gap-2 my-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">Time: {time}</p>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
            Start Test
          </button>
        </div>
      </Link>
    </div>
  );
}


function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 7-7-7-7" />
    </svg>
  );
}
