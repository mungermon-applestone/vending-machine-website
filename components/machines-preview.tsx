import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const machines = [
  {
    id: "ambient-vending",
    title: "Ambient Vending Machine",
    description: "Standard vending machine for non-perishable items at room temperature.",
    category: "Vending Machines",
    subcategory: "Ambient",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "refrigerated-vending",
    title: "Refrigerated Vending Machine",
    description: "Temperature-controlled vending for perishable items requiring refrigeration.",
    category: "Vending Machines",
    subcategory: "Refrigerated",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "ambient-locker",
    title: "Ambient Locker System",
    description: "Secure locker system for package pickup and delivery at room temperature.",
    category: "Lockers",
    subcategory: "Ambient",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function MachinesPreview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Machine Form Factors</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our software integrates with a wide array of vending machines and locker systems.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-8">
          {machines.map((machine) => (
            <div key={machine.id} className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={machine.image || "/placeholder.svg"}
                  alt={machine.title}
                  width={400}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {machine.category}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    {machine.subcategory}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{machine.title}</h3>
                <p className="mt-2 text-muted-foreground">{machine.description}</p>
                <Link
                  href={`/machines/${machine.id}`}
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
            <Link href="/machines">View All Machines</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

