import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProductTypes } from "@/lib/data"

export function ProductTypesPreview() {
  const productTypes = getProductTypes()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Types of Products You Can Sell
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our vending software can sell many types of products and can be used by vending operators, enterprises,
              SMBs, and brands.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-8">
          {productTypes.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg?height=300&width=400"}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-2 text-muted-foreground">{product.description}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button size="lg" asChild>
            <Link href="/products">View All Product Types</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

