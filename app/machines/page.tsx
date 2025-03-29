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
    id: "frozen-vending",
    title: "Frozen Vending Machine",
    description: "Specialized vending machine for frozen products with temperature monitoring.",
    category: "Vending Machines",
    subcategory: "Frozen",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "wall-hanging-vending",
    title: "Wall-Hanging Vending Machine",
    description: "Space-saving vending machine that mounts to walls for compact spaces.",
    category: "Vending Machines",
    subcategory: "Wall Hanging",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "large-capacity-vending",
    title: "Large Capacity Vending Machine",
    description: "High-volume vending machine for locations with heavy traffic.",
    category: "Vending Machines",
    subcategory: "Large Capacity",
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
  {
    id: "refrigerated-locker",
    title: "Refrigerated Locker System",
    description: "Temperature-controlled locker system for perishable items.",
    category: "Lockers",
    subcategory: "Refrigerated",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "frozen-locker",
    title: "Frozen Locker System",
    description: "Specialized locker system for frozen products with temperature monitoring.",
    category: "Lockers",
    subcategory: "Frozen",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function MachinesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Machine Form Factors</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our software integrates with a wide array of machines from all major manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Button variant="outline" className="rounded-full">
              All Machines
            </Button>
            <Button variant="outline" className="rounded-full">
              Vending Machines
            </Button>
            <Button variant="outline" className="rounded-full">
              Lockers
            </Button>
            <Button variant="outline" className="rounded-full">
              Ambient
            </Button>
            <Button variant="outline" className="rounded-full">
              Refrigerated
            </Button>
            <Button variant="outline" className="rounded-full">
              Frozen
            </Button>
          </div>
        </div>
      </section>

      {/* Vending Machines Section */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Vending Machines</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {machines
              .filter((machine) => machine.category === "Vending Machines")
              .map((machine) => (
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
        </div>
      </section>

      {/* Lockers Section */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Lockers</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {machines
              .filter((machine) => machine.category === "Lockers")
              .map((machine) => (
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Need a Custom Solution?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our software can be customized to work with specialized machines and unique form factors.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Contact Our Team</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

