/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zyvWMnV3sSx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="flex flex-col ml-16 mr-16  items-center justify-center min-h-screen p-4 md:flex-row md:justify-between md:p-10">
      
      <div className="space-y-8">
      <div className="flex flex-col -mt-44 space-y-4">
      <h1 className="text-3xl font-bold">Mentor Traing Program</h1>
      <p className="text-lg text-gray-600">Identify, develop and execute impactful GenAI business strategies.</p>
      
    </div>
    <br/>
    <br/>
    <br/>
        <div>
          <h2 className="text-2xl font-bold text-[#4a75f4]">Orient - 6 - 12</h2>
          <p className="mt-2 text-lg text-gray-700">
            Choose a career for yourself with all options laid out in front of you!
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#4a75f4]">Emerge - College Students</h2>
          <p className="mt-2 text-lg text-gray-700">
            Get help from industry professionals to decide the best career for yourself.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#4a75f4]">Elevate - Working Professionals</h2>
          <p className="mt-2 text-lg text-gray-700">
            Discuss your career problems over a quick 15 min phone call with an Industry expert.
          </p>
        </div>
      </div>
      <div className="w-full mt-8 md:mt-0 md:w-1/2">
        <div className="grid grid-cols-3 gap-4 w-full h-96">
          <img
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Image 1"
            className="object-cover rounded-lg h-full"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
          <img
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Image 1"
            className="object-cover rounded-lg h-full"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
          <img
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Image 1"
            className="object-cover rounded-lg h-full"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  )
}