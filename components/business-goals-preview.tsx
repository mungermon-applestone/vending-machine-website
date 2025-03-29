import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const businessGoals = [
  {
    id: "expand-footprint",
    title: "Expand Footprint",
    description: "Grow your vending business with data-driven location selection and performance tracking.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "bopis",
    title: "Buy Online, Pickup In Store",
    description: "Enable customers to purchase online and pick up from your vending machines.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "loss-prevention",
    title: "Loss Prevention",
    description: "Reduce theft and inventory shrinkage with real-time monitoring and alerts.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function BusinessGoalsPreview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Business Goals</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our vending software can help you meet many different kinds of business goals and use cases.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-8">
          {businessGoals.map((goal) => (
            <div key={goal.id} className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={goal.image || "/placeholder.svg"}
                  alt={goal.title}
                  width={400}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{goal.title}</h3>
                <p className="mt-2 text-muted-foreground">{goal.description}</p>
                <Link
                  href={`/business-goals/${goal.id}`}
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
            <Link href="/business-goals">View All Business Goals</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

