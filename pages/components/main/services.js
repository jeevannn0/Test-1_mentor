/**
 * v0 by Vercel.
 * @see https://v0.dev/t/osmkpUB5m2H
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center">
      <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how we can help your business grow.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <LaptopIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>
            <p className="text-muted-foreground mt-2">
              We build custom web applications tailored to your business needs.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                <SmartphoneIcon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Mobile Development</h3>
            </div>
            <p className="text-muted-foreground mt-2">
              Develop cutting-edge mobile apps for iOS and Android platforms.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-accent rounded-md p-3 flex items-center justify-center">
                <DatabaseIcon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Database Solutions</h3>
            </div>
            <p className="text-muted-foreground mt-2">
              Implement robust and scalable database systems to power your applications.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                <CloudIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Cloud Services</h3>
            </div>
            <p className="text-muted-foreground mt-2">Leverage the power of cloud computing to scale your business.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function LaptopIcon(props) {
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
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}


function SmartphoneIcon(props) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
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