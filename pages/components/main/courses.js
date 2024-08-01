
import Link from "next/link"
import { Button } from "../../../public/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../../public/ui/carousel"
import { Card, CardContent } from "../../../public/ui/card"

export default function Courses() {
  return (
    (<div className="flex flex-col  items-center justify-center">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">Top Selling Products</h2>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                View All
              </Link>
            </div>
            <Carousel className="rounded-lg overflow-hidden">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Product"
                        width={400}
                        height={400}
                        className="rounded-t-lg w-full h-60 object-cover" />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold">Stylish Sunglasses</h3>
                        <p className="text-muted-foreground text-sm">UV protection</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-base font-semibold">$29.99</span>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Product"
                        width={400}
                        height={400}
                        className="rounded-t-lg w-full h-60 object-cover" />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold">Leather Crossbody Bag</h3>
                        <p className="text-muted-foreground text-sm">Stylish and practical</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-base font-semibold">$49.99</span>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Product"
                        width={400}
                        height={400}
                        className="rounded-t-lg w-full h-60 object-cover" />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold">Wireless Headphones</h3>
                        <p className="text-muted-foreground text-sm">High-quality sound</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-base font-semibold">$79.99</span>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
      
    </div>)
  );
}
