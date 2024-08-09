/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R9ohkMuoG3d
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/public/ui/button"

export default function Placement() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center text-primary">Placement Preparation</h1>
      <p className="mt-2 text-lg text-center text-muted-foreground">
        Choose from 50+ customizable resume templates that are built to meet your career needs.
      </p>
      <div className="mt-8">
        <img
          src="/placeholder.svg"
          alt="Video call with mentors"
          className="rounded-lg"
          style={{ aspectRatio: "500/300", objectFit: "cover" }}
          width="500"
          height="300"
        />
      </div>
      <p className="mt-4 text-center text-muted-foreground">Mentors</p>
      <h2 className="mt-2 text-2xl font-bold text-center text-primary">
        Get your <span className="text-blue-500">Dream Job</span> !!
      </h2>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
        <div className="text-center">
          <h3 className="text-lg font-bold text-blue-500">Technical Tests</h3>
          <p className="mt-2 text-muted-foreground">
            Discover the platform that gives you the freedom to create, design, manage and develop your web presence.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-blue-500">Interview Prep</h3>
          <p className="mt-2 text-muted-foreground">
            Discover the platform that gives you the freedom to create, design, manage and develop your web presence.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-blue-500">Job Links</h3>
          <p className="mt-2 text-muted-foreground">
            Discover the platform that gives you the freedom to create, design, manage and develop your web presence.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 space-x-4">
        <Button className="bg-blue-500 text-white">Book now</Button>
        <Button variant="outline">Read More</Button>
      </div>
    </div>
  )
}