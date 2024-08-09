/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7P5Uce7WnVq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "../../../../public/ui/card"
import { Button } from "../../../../public/ui/button"

export default function Cards() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 p-8 bg-[#e9e9e9]">
      <Card className="max-w-xs bg-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
        <CardHeader className="flex justify-center p-8">
          <div className="flex items-center justify-center ml-10 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Hero"
            className=" -ml-12 h-120 w-auto rounded-xl  object-center" />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <CardTitle className="text-xl font-semibold ">Orient</CardTitle>
          <CardDescription className="mt-2 ">
            Get an Industry ready resume made by experts.
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-center p-4">
          <Button className="bg-[#3f71ed] text-white shadow-lg">Learn More</Button>
        </CardFooter>
      </Card>

      <Card className="max-w-xs bg-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
        <CardHeader className="flex justify-center p-8">
          <div className="flex items-center justify-center ml-10 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Hero"
            className=" -ml-12 h-120 w-auto rounded-xl  object-center" />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <CardTitle className="text-xl font-semibold ">Emerge</CardTitle>
          <CardDescription className="mt-2 ">
            Create a great website to showcase your work.
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-center p-4">
          <Button className="bg-[#3f71ed] text-white shadow-lg">Learn More</Button>
        </CardFooter>
      </Card>

      <Card className="max-w-xs bg-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
        <CardHeader className="flex justify-center p-8">
          <div className="flex items-center justify-center ml-10 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Hero"
            className=" -ml-12 h-120 w-auto rounded-xl  object-center" />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <CardTitle className="text-xl font-semibold ">Elevate</CardTitle>
          <CardDescription className="mt-2 ">
            Optimise your Profile and grow your network.
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-center p-4">
          <Button className="bg-[#3f71ed] text-white shadow-lg">Learn More</Button>
        </CardFooter>
      </Card>
      
    </div>
  )
}

