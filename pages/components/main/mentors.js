import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../../public/ui/carousel";
import { Card, CardHeader, CardContent } from "../../../public/ui/card";

export default function Component() {
  return (
    <div><div className="flex ml-28 -mt-52  flex-col ">
    <h1 className="text-3xl font-bold">Top Mentors</h1>
    <p className="text-lg text-gray-600">Helps you to Upscale your Knowladge and skills</p>
  </div>
  <br/>
  <br/>
  <br/>
    <div className="flex justify-center ml-16 mr-16 items-center ">
      <Carousel className="relative  items-center justify-center w-full max-w-[1050px]">
        <CarouselContent className="flex gap-4 overflow-x-hidden snap-x snap-mandatory">
          <CarouselItem className="snap-center">
            <ProfileCard />
          </CarouselItem>
          <CarouselItem className="snap-center">
            <ProfileCard />
          </CarouselItem>
          <CarouselItem className="snap-center">
            <ProfileCard />
          </CarouselItem>
          <CarouselItem className="snap-center">
            <ProfileCard />
          </CarouselItem>
          <CarouselItem className="snap-center">
            <ProfileCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full">
          <ChevronLeftIcon className="w-6 h-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full">
          <ChevronRightIcon className="w-6 h-6" />
        </CarouselNext>
      </Carousel>
    </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <Card className="w-[250px] h-[340px] bg-black text-white">
      <CardHeader className="flex flex-col items-center">
        <img
          src="/placeholder.svg"
          alt="Profile"
          className="w-24 h-24 rounded-full"
          width="100"
          height="100"
          style={{ aspectRatio: "100/100", objectFit: "cover" }}
        />
        <div className="mt-4 text-lg font-bold">VASKEN MOURADIAN</div>
        <div className="text-sm">Sr. UX Designer</div>
      </CardHeader>
      <CardContent className="flex justify-center mt-14 space-x-2">
        <UserIcon className="w-6 h-6" />
        <DribbbleIcon className="w-6 h-6" />
        <LinkedinIcon className="w-6 h-6" />
      </CardContent>
    </Card>
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

function DribbbleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
