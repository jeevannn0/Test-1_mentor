/**
 * v0 by Vercel.
 * @see https://v0.dev/t/z8rItFBqUri
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/public/ui/button"

export default function Prt2() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <img
          src="/placeholder.svg"
          width="550"
          height="550"
          alt="Mentors"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
        />
        <div className="space-y-4 -mt-42">
          <div className="space-y-2">
            <h2 className="text-3xl text-muted-foreground  tracking-tighter md:text-xl ">Mentors</h2>
            </div>
            <br/>
            <p className=" font-bold sm:text-4xl md:text-5xl ">Join the class with your mentor via video call</p>
            <br/>
            <br/>
            <br/>
          <p className="text-muted-foreground md:text-lg">
            Our course includes personalized mentorship sessions where you'll work one-on-one with an experienced
            professional in your field. They'll provide guidance, feedback, and support to help you succeed.
          </p>
          <br/>
            <br/>
          <div className="flex flex-col gap-7 min-[400px]:flex-row">
            <Button className="inline-flex items-center justify-center gap-2">
              Book now
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button variant="secondary">Read More</Button>
          </div>
        </div>
      </div>
    </section>
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


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}