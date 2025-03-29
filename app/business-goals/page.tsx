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
  {
    id: "employee-engagement",
    title: "Employee Engagement",
    description: "Provide convenient access to snacks, meals, and essentials for your employees.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "customer-loyalty",
    title: "Customer Loyalty",
    description: "Build repeat business with loyalty programs and personalized offers.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Gain insights into customer behavior and preferences to optimize your product mix.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "contactless-retail",
    title: "Contactless Retail",
    description: "Provide safe, touchless shopping experiences with mobile payments and QR codes.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description: "Reduce environmental impact with energy-efficient machines and sustainable packaging.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function BusinessGoalsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Business Goals</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our vending software can help you meet many different kinds of business goals and use cases.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Request a Demo</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Business goals illustration"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Goals Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
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
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our customers have achieved their business goals with our vending management software.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Case study"
                  width={400}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Metro Vending Co.</h3>
                <p className="mt-2 text-muted-foreground">
                  Increased revenue by 28% and reduced service costs by 35% in just one year.
                </p>
                <Link
                  href="/case-studies/metro-vending"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  Read case study <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Case study"
                  width={400}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Pacific Refreshments</h3>
                <p className="mt-2 text-muted-foreground">
                  Streamlined operations across 500+ machines with unified management software.
                </p>
                <Link
                  href="/case-studies/pacific-refreshments"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  Read case study <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Case study"
                  width={400}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">TechCorp Campus</h3>
                <p className="mt-2 text-muted-foreground">
                  Improved employee satisfaction by 45% with smart vending solutions in their offices.
                </p>
                <Link
                  href="/case-studies/techcorp"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  Read case study <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Achieve Your Business Goals?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Contact us to learn more about how our software can help you meet your specific business objectives.
                </p>
              </div>
              <div className="space-y-4">
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
                    htmlFor="business-goal"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Primary Business Goal
                  </label>
                  <select
                    id="business-goal"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a business goal</option>
                    {businessGoals.map((goal) => (
                      <option key={goal.id} value={goal.id}>
                        {goal.title}
                      </option>
                    ))}
                  </select>
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
                  Submit Request
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Contact us"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

