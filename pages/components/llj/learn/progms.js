/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sQUQNyFsjpV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/public/ui/card"
import { Button } from "@/public/ui/button"

export default function Progms() {
  return (
    <div className="flex flex-col items-center mr-16 ml-16 justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="mb-8 text-4xl font-bold text-center text-blue-700">COURSES</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-blue-700">Digital Marketing</CardTitle>
            <div className="w-12 h-1 mx-auto my-2 bg-blue-700 rounded" />
            <CardDescription className="text-gray-600">
              Master digital marketing essentials with practical skills for success
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4 space-y-2 text-gray-600">
            <ul className="list-disc list-inside">
              <li className="font-bold">Fundamentals of Digital Marketing</li>
              <li className="font-bold">Performance Marketing</li>
              <li className="font-bold">SEO Fundamentals</li>
              <li className="font-bold">Social Media Marketing</li>
              <li className="font-bold">Marketing Automation</li>
              <li className="font-bold">Capstone Project</li>
              <li className="font-bold">Job Preparation</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center mt-4">
            <Button className="px-4 py-2 text-white bg-blue-700 rounded-full">Learn More &gt;</Button>
          </CardFooter>
        </Card>
        <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <CardHeader className="text-center text-white">
            <CardTitle className="text-xl font-semibold">MTP</CardTitle>
            <div className="w-12 h-1 mx-auto my-2 bg-white rounded" />
            <CardDescription className="text-gray-200">
              Mentor Training Program
              <br />
              One course designed for all college grads to teach you everything useful for Next Gen
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4 space-y-2 text-gray-200">
            <ul className="list-disc list-inside">
              <li className="font-bold">Marketing</li>
              <li className="font-bold">Analytics</li>
              <li className="font-bold">Tech</li>
              <li className="font-bold">Law</li>
              <li className="font-bold">Accounting & Finance</li>
              <li className="font-bold">AI</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center mt-4">
            <Button className="px-4 py-2 text-white bg-transparent border border-white rounded-full">
              Learn More &gt;
            </Button>
          </CardFooter>
        </Card>
        <Card className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-blue-700">Data Analytics</CardTitle>
            <div className="w-12 h-1 mx-auto my-2 bg-blue-700 rounded" />
            <CardDescription className="text-gray-600">
              Master Data Analytics fundamentals & prepare for a successful career
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4 space-y-2 text-gray-600">
            <ul className="list-disc list-inside">
              <li className="font-bold">Excel and Spreadsheets</li>
              <li className="font-bold">Data Visualization</li>
              <li className="font-bold">SQL & Power BI</li>
              <li className="font-bold">Statistical Analysis</li>
              <li className="font-bold">Capstone Project</li>
              <li className="font-bold">Job Preparation</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center mt-4">
            <Button className="px-4 py-2 text-white bg-blue-700 rounded-full">Learn More &gt;</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}