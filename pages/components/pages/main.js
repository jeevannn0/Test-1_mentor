import Link from "next/link";
import { Button } from "../../../public/ui/button";

import Courses from "../main/courses";
import Services from "../main/services";
import Footer from "../main/footer";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../../public/ui/card"
import { Input } from "../../../public/ui/input"
import { Label } from "../../../public/ui/label"
import Testimonial from "../main/testom";
import Quiz from "../main/quizs";
import Mentors from "../main/mentors";
import Mtp from "../main/mtp";
import LogoSlider from "../main/logocarousel";

export default function Main() {
  

  return (
    <div>
    <div className=" flex-1 ml-16 mr-16 items-center justify-center">
      <header className="px-4 lg:px-6 h-14    border-b flex items-center justify-center">
        <Link href="#" className="flex items-center ml-[80px]" prefetch={false}>
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
          <Link href="/components/main/profile" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Profile
          </Link>
          <Link href="/components/pages/sidebar" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sidebar
          </Link>
          <Link href="/components/pages/admin" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Admin
          </Link>
        </nav>
        <div className="flex gap-2 mr-[80px]">
          <Link href="/components/pages/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/components/pages/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </header>
      </div>

     

      <section className="w-full flex items-center min-h-[100dvh] bg-gradient-to-r from-[#578eb6] to-[#156ab0] justify-center">

        <div className="container grid gap-6 px-4 mr-16 ml-16 -mt-32 md:px-6 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-4 pt-24">
            <h1 className="text-3xl ml-16 font-bold text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Unlock Your Potential <br/> with The Mentor
            </h1>
            <p className="max-w-[600px] text-green-50 ml-16 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-sl/relaxed">
              TheMentor offers world-class online courses and programs to help you achieve your career goals. Learn from
              industry experts and transform your future.
            </p>
            <br/>
            <br/>
            <div className="flex flex-col gap-9 min-[400px]:flex-row ml-36 ">
              <Link
                href=""
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Explore Courses
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-14 space-y-8">
      
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
          <Button className="w-full bg-blue-500 text-white">Start Learning</Button>
        </CardFooter>
      </Card>
    </div>
        </div>
      </section>

      <div className=" flex-1 ml-16 mr-16 items-center justify-center">

      <br/>
      <br/>
      <br/>
      
      <LogoSlider/>
      
      
    <Services/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    
    <Quiz/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Courses/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Mtp/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Mentors/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Testimonial/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    </div>
    <Footer/> 
    </div>
   
  );
}
