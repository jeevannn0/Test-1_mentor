/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gegYBLM7F4i
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../../public/ui/card"
import { Label } from "../../../public/ui/label"
import { Input } from "../../../public/ui/input"
import { Button } from "../../../public/ui/button"
import Cards from "./live/cards";
import Footer from "../main/footer";
import Prt1 from "./jobs/prt3";
import Placement from "./jobs/placement";



export default function Jobs() {
  return (
    <div>
<div className=" flex-1 ml-16 mr-16 items-center justify-center">
<header className="px-4 lg:px-6 h-14  bg-background border-b flex items-center justify-center">
        <Link href="#" className="flex items-center ml-30" prefetch={false}>
          <img src="/The-Mentor-logo.png" alt="Logo" className="h-10" /> {/* Update the path and size as needed */}
        </Link>
        <nav className="flex gap-4 sm:gap-10 items-center mx-auto">
        <Link href="/components/llj/live" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Live
          </Link>
          <Link href="/components/llj/learn" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Learn
          </Link>
          <Link href="/components/llj/jobs" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Jobs
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Community
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="/components/pages/admin" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Admin
          </Link>
        </nav>
        <div className="flex gap-2 mr-30">
          <Link href="/components/pages/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/components/pages/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </header>



      <section className="flex items-center justify-center min-h-screen p-8 bg-white">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center w-full h-full bg-black">
          <img
            src="/placeholder.svg"
            alt="Placeholder"
            className="object-cover w-full h-full"
            width="400"
            height="400"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col items-center justify-center -mt-20 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">LIVE</h1> {/* Reduced font size */}
      <p className="text-center text-sm text-muted-foreground"> {/* Reduced font size */}
        Build your professional profile with our professional researched and experimented layouts
      </p>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl -mt-4">Get in Touch</CardTitle> {/* Reduced font size */}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full-name" className="text-sm">Full Name</Label> {/* Reduced font size */}
            <Input id="full-name" placeholder="Full Name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm">Email</Label> {/* Reduced font size */}
            <Input id="email" placeholder="Email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact" className="text-sm">Contact</Label> {/* Reduced font size */}
            <Input id="contact" placeholder="Contact" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-500 text-white">Register</Button>
        </CardFooter>
      </Card>
    </div>
      </div>
    </section>
   
   <Cards/>
    <Prt1/>
    <Placement/>

    
    <section>
      
    <div className="flex items-center justify-between mt-80 p-8 bg-[#2f2462] rounded-lg sm:hidden">
      <div className="space-y-4 text-white ml-52">
        <h1 className="text-3xl font-bold">Free 1:1 Consultation</h1>
        <p className="text-lg">
          Discover the platform that gives you the freedom to create, design, <br/>manage and develop your web presence
          exactly the <br/>way you want.
        </p>
        <div className="flex items-center space-x-4">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Start Now
            <ArrowRightIcon className="ml-2" />
          </Button>
          <Link href="#" className="text-white underline" prefetch={false}>
            Browse Templates
          </Link>
        </div>
      </div>
      <div className="relative mr-52">
        <img
          src="/placeholder.svg"
          alt="Person"
          className="h-64"
          width="200"
          height="300"
          style={{ aspectRatio: "200/200", objectFit: "cover" }}
        />
      </div>
    </div>
    </section>
  


<br/>
<br/>
<br/>

    </div>
    <div>
    <Footer/>
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