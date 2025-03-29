import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getHeroSection } from "@/lib/data"

export function HeroSection() {
  const heroContent = getHeroSection()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{heroContent.title}</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">{heroContent.subtitle}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                {heroContent.ctaPrimary} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                {heroContent.ctaSecondary}
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={heroContent.image || "/placeholder.svg?height=550&width=550"}
              width={550}
              height={550}
              alt="Vending machine software dashboard"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

