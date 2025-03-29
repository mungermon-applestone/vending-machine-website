import Image from "next/image"
import { Button } from "@/components/ui/button"

// This would normally come from a CMS or database
const machineData = {
  "ambient-vending": {
    title: "Ambient Vending Machine",
    description: "Standard vending machine for non-perishable items at room temperature.",
    category: "Vending Machines",
    subcategory: "Ambient",
    specs: {
      dimensions: '72" H x 39" W x 36" D',
      weight: "800 lbs",
      powerSupply: "110-120V, 60Hz, 3A",
      temperature: "Ambient (Room Temperature)",
      cost: "$3,500 - $5,000",
      manufacturer: "Various Manufacturers",
    },
    examples: [
      {
        title: "Office Snack Station",
        description: "Providing convenient snacks and beverages in corporate environments.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Campus Retail Point",
        description: "Offering essentials and snacks across university campuses.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    additionalImages: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    heroImage: "/placeholder.svg?height=600&width=800",
  },
}

export default function MachinePage({ params }: { params: { machineId: string } }) {
  const { machineId } = params
  const machine = machineData[machineId as keyof typeof machineData] || {
    title: machineId.charAt(0).toUpperCase() + machineId.slice(1).replace(/-/g, " "),
    description: "This machine integrates seamlessly with our vending management software.",
    category: machineId.includes("locker") ? "Lockers" : "Vending Machines",
    subcategory: "Standard",
    specs: {
      dimensions: "Varies by model",
      weight: "Varies by model",
      powerSupply: "Standard electrical connection",
      temperature: "Varies by model",
      cost: "Contact for pricing",
      manufacturer: "Various Manufacturers",
    },
    examples: [],
    heroImage: "/placeholder.svg?height=600&width=800",
  }

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  {machine.category}
                </span>
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-medium">
                  {machine.subcategory}
                </span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{machine.title}</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">{machine.description}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Request a Quote</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={machine.heroImage || "/placeholder.svg"}
                width={800}
                height={600}
                alt={`${machine.title}`}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Specifications</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Technical details and requirements for the {machine.title}.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <dt className="text-sm font-medium text-muted-foreground">Dimensions</dt>
                    <dd className="text-base font-semibold">{machine.specs.dimensions}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm font-medium text-muted-foreground">Weight</dt>
                    <dd className="text-base font-semibold">{machine.specs.weight}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm font-medium text-muted-foreground">Power Supply</dt>
                    <dd className="text-base font-semibold">{machine.specs.powerSupply}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm font-medium text-muted-foreground">Temperature</dt>
                    <dd className="text-base font-semibold">{machine.specs.temperature}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm font-medium text-muted-foreground">Cost</dt>
                    <dd className="text-base font-semibold">{machine.specs.cost}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm font-medium text-muted-foreground">Manufacturer</dt>
                    <dd className="text-base font-semibold">{machine.specs.manufacturer}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section (if available) */}
      {machine.examples && machine.examples.length > 0 && (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Deployment Examples</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how our customers are using the {machine.title} in real-world settings.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {machine.examples.map((example, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border bg-background">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={example.image || "/placeholder.svg"}
                      alt={example.title}
                      width={400}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{example.title}</h3>
                    <p className="mt-2 text-muted-foreground">{example.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Images Section (if available) */}
      {machine.additionalImages && machine.additionalImages.length > 0 && (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Additional Views</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the {machine.title} from different angles.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {machine.additionalImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg border">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${machine.title} view ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Request Information</h2>
              <p className="text-muted-foreground md:text-xl">
                Interested in the {machine.title}? Fill out the form below to learn more.
              </p>
            </div>
            <div className="space-y-4 bg-background p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    First name
                  </label>
                  <input
                    id="first-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Last name
                  </label>
                  <input
                    id="last-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Company
                </label>
                <input
                  id="company"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about your specific needs"
                ></textarea>
              </div>
              <Button size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

