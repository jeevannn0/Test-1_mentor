import Link from "next/link";
import { Button } from "../../../public/ui/button";
import Prt1 from "../main/prt1";
import Prt2 from "../main/prt2";
import Prt3 from "../main/prt3";
import Prt4 from "../main/prt4";
import Pricing from "../main/pricing";
import Courses from "../main/courses";
import Services from "../main/services";
import Footer from "../main/footer";


export default function Main() {
  return (
    <div cla>
    <div className=" flex-1 ml-16 mr-16 items-center justify-center">
      <header className="px-4 lg:px-6 h-14  bg-background border-b flex items-center justify-center">
        <Link href="#" className="flex items-center ml-30" prefetch={false}>
          <img src="/The-Mentor-logo.png" alt="Logo" className="h-10" /> {/* Update the path and size as needed */}
        </Link>
        <nav className="flex gap-4 sm:gap-10 items-center mx-auto">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Courses
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
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

      <section className="w-full pt-12 flex items-center justify-center ">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-4 pt-24">
            <h1 className="text-3xl ml-16 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Unlock Your Potential <br/> with The Mentor
            </h1>
            <p className="max-w-[600px] ml-28 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-sl/relaxed">
              Scaler offers world-class online courses and programs to help you achieve your career goals. Learn from
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
          <img
            src="/placeholder.svg"
            
            alt="Hero"
            className=" -ml-12 h-120 w-auto rounded-xl  object-center" />
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      
    <Services/>
    <Prt1/>
    <Courses/>
    <Prt2/>
    <Prt3/>
    <Prt4/>
    <Pricing/>
    </div>
    <Footer/>
    </div>
    
   
      

      

      
   
  );
}
