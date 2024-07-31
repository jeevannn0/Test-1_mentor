import Link from "next/link";
import { Button } from "../../../public/ui/button";
import { Card, CardHeader, CardContent } from "../../../public/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../../public/ui/avatar";

export default function Main() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-background border-b">
        <Link href="#" className="flex items-center ml-6" prefetch={false}>
          <img src="/The-Mentor-logo.png" alt="Logo" className="h-10" /> {/* Update the path and size as needed */}
        </Link>
        <nav className="flex gap-4 sm:gap-6 items-center mx-auto">
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
          <Link href="/components/pages/component" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Admin
          </Link>
        </nav>
        <div className="flex gap-2 mr-20">
          <Link href="/components/pages/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/components/pages/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </header>

      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Unlock Your Potential with Scaler
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Scaler offers world-class online courses and programs to help you achieve your career goals. Learn from
              industry experts and transform your future.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
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
            width="800"
            height="600"
            alt="Hero"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center" />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Courses</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Top Courses</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Scaler offers a wide range of online courses and programs to help you achieve your career goals. Explore
                our top courses and find the perfect fit for you.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Course"
                  className="rounded-t-md object-cover" />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-lg font-bold">Introduction to Data Science</h3>
                <p className="text-muted-foreground">
                  Learn the fundamentals of data science and how to extract insights from data.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">$99</span>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Enroll
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Course"
                  className="rounded-t-md object-cover" />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-lg font-bold">Full-Stack Web Development</h3>
                <p className="text-muted-foreground">
                  Master the skills to build modern web applications from scratch.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">$199</span>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Enroll
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Course"
                  className="rounded-t-md object-cover" />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-lg font-bold">Machine Learning for Beginners</h3>
                <p className="text-muted-foreground">
                  Dive into the world of machine learning and build your own models.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">$149</span>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Enroll
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Student Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our students about their experiences and how Scaler has helped them achieve their goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold">John Doe</h4>
                    <p className="text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Scaler's courses have been a game-changer for me. The\n content is top-notch, and the instructors are
                  incredibly\n knowledgeable. I've been able to apply what I've learned\n directly to my work, and it's
                  made a huge difference in my\n career."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold">Jane Smith</h4>
                    <p className="text-muted-foreground">Data Analyst</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I was hesitant to take an online course at first, but Scaler\n has exceeded all my expectations. The
                  interactive lessons and\n hands-on projects have really helped me develop the skills I\n need to
                  advance in my career. I highly recommend Scaler to\n anyone looking to upskill."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold">Michael Johnson</h4>
                    <p className="text-muted-foreground">Product Manager</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Scaler's courses have been instrumental in my career\n development. The curriculum is comprehensive,
                  and the\n instructors are experts in their fields. I've gained\n invaluable skills and knowledge that
                  I've been able to apply\n directly to my work. Highly recommended!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="px-4 lg:px-6 h-14 flex items-center justify-between bg-background border-t">
        <div className="text-xs text-muted-foreground">&copy; 2024 Scaler. All rights reserved.</div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
