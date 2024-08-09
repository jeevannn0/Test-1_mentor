/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hRvHh4L94Vq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Button } from "../../../public/ui/buttons"
import { Badge } from "../../../public/ui/badge"
import { Card, CardContent } from "../../../public/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "../../../public/ui/avatar"
import Link from "next/link"

export default function Component() {
  const [activeFilter, setActiveFilter] = useState("all")
  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }
  const filteredCourses = () => {
    if (activeFilter === "beginner") {
      return [
        {
          title: "Generative AI Fundamentals",
          provider: "IBM",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "Beginner",
        },
        {
          title: "AI for Good",
          provider: "DeepLearning.AI",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "Beginner",
        },
      ]
    } else if (activeFilter === "popular") {
      return [
        {
          title: "Generative AI Fundamentals",
          provider: "IBM",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "Popular",
        },
        {
          title: "Navigating Generative AI for Leaders",
          provider: "Coursera",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "Popular",
        },
      ]
    } else if (activeFilter === "new") {
      return [
        {
          title: "AI for Good",
          provider: "DeepLearning.AI",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "New",
        },
        {
          title: "Navigating Generative AI for Leaders",
          provider: "Coursera",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "New",
        },
      ]
    } else if (activeFilter === "tools") {
      return [
        {
          title: "Generative AI Fundamentals",
          provider: "IBM",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "Tools",
        },
        {
          title: "AI for Good",
          provider: "DeepLearning.AI",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "Tools",
        },
        {
          title: "Navigating Generative AI for Leaders",
          provider: "Coursera",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "Tools",
        },
      ]
    } else {
      return [
        {
          title: "Generative AI Fundamentals",
          provider: "IBM",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "Beginner",
        },
        {
          title: "AI for Good",
          provider: "DeepLearning.AI",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "Popular",
        },
        {
          title: "Navigating Generative AI for Leaders",
          provider: "Coursera",
          type: "Specialization",
          image: "/placeholder.svg?height=200&width=300",
          badge: "New",
        },
      ]
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ml-16 mr-16 bg-blue-50">
      <div className="flex flex-col w-full max-w-7xl p-8 space-y-8 bg-white rounded-lg shadow-lg animate-slide-in">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Get started with GenAI</h1>
          <p className="text-lg text-gray-600">Identify, develop and execute impactful GenAI business strategies.</p>
          
        </div>
        <div className="flex justify-center space-x-4">
          <Badge
            variant={activeFilter === "all" ? "primary" : "default"}
            onClick={() => handleFilterClick("all")}
            className="px-6 py-2 text-base"
          >
            All
          </Badge>
          <Badge
            variant={activeFilter === "beginner" ? "primary" : "default"}
            onClick={() => handleFilterClick("beginner")}
            className="px-6 py-2 text-base"
          >
            Beginner
          </Badge>
          <Badge
            variant={activeFilter === "popular" ? "primary" : "default"}
            onClick={() => handleFilterClick("popular")}
            className="px-6 py-2 text-base"
          >
            Popular
          </Badge>
          <Badge
            variant={activeFilter === "new" ? "primary" : "default"}
            onClick={() => handleFilterClick("new")}
            className="px-6 py-2 text-base"
          >
            New
          </Badge>
          <Badge
            variant={activeFilter === "tools" ? "primary" : "default"}
            onClick={() => handleFilterClick("tools")}
            className="px-6 py-2 text-base"
          >
            Tools
          </Badge>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-4">
            {filteredCourses().map((course, index) => (
              <Card key={index} className="w-[300px] flex-shrink-0 animate-slide-in">
                <img src="/placeholder.svg" alt={course.title} className="w-full h-48 rounded-t-lg object-cover" />
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt={course.provider} />
                      <AvatarFallback>{course.provider.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium">{course.provider}</p>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold">{course.title}</h2>
                  <p className="text-sm text-gray-500">{course.type}</p>
                  <Badge variant="secondary" className="mt-2">
                    {course.badge}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-start">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            All Courses
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
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
  )
}