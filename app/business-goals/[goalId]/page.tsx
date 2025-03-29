import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would normally come from a CMS or database
const businessGoalData = {
  "expand-footprint": {
    title: "Expand Footprint",
    description: "Grow your vending business with data-driven location selection and performance tracking.",
    benefits: [
      "Identify high-potential locations based on foot traffic and demographics",
      "Track performance metrics across all locations to optimize placement",
      "Scale your operations efficiently with centralized management",
      "Reduce the risk of expansion with predictive analytics",
      "Streamline route planning for service technicians",
      "Optimize inventory based on location-specific preferences",
    ],
    features: [
      {
        title: "Location Analytics",
        description:
          "Advanced analytics to identify optimal locations for new machines based on demographic data, foot traffic, and existing performance metrics.",
      },
      {
        title: "Performance Tracking",
        description:
          "Real-time monitoring of sales, inventory levels, and machine health across all locations to identify top and underperforming sites.",
      },
      {
        title: "Route Optimization",
        description:
          "Intelligent route planning for service technicians to minimize travel time and maximize efficiency when servicing multiple locations.",
      },
    ],
    caseStudy: {
      title: "Metro Vending Co.",
      description:
        "Metro Vending used our location analytics to expand from 50 to 200 machines in just 18 months, with a 92% success rate for new locations.",
      quote:
        "The location analytics and performance tracking tools have been game-changers for our expansion strategy. We've been able to grow faster and with much less risk than we ever could have without this data.",
      author: "Sarah Johnson, CEO of Metro Vending Co.",
      image: "/placeholder.svg?height=400&width=600",
    },
    heroImage: "/placeholder.svg?height=600&width=800",
  },
  bopis: {
    title: "Buy Online, Pickup In Store",
    description: "Enable customers to purchase online and pick up from your vending machines.",
    benefits: [
      "Increase sales with pre-orders and reservations",
      "Reduce wait times at high-traffic locations",
      "Improve inventory management with predictable demand",
      "Enhance customer experience with convenient pickup options",
      "Collect valuable customer data through online ordering",
      "Create opportunities for upselling and cross-selling",
    ],
    features: [
      {
        title: "Online Ordering System",
        description:
          "User-friendly web and mobile interfaces for customers to browse products, place orders, and select pickup locations and times.",
      },
      {
        title: "Secure Pickup Authentication",
        description:
          "QR codes, PINs, or NFC authentication to ensure only the right customer can access their order at the vending machine.",
      },
      {
        title: "Inventory Reservation",
        description:
          "Automatic inventory management that reserves products when ordered online to ensure availability at pickup time.",
      },
    ],
    caseStudy: {
      title: "Campus Convenience",
      description:
        "A university campus implemented BOPIS for their vending machines, resulting in a 45% increase in sales and significantly reduced wait times during peak hours.",
      quote:
        "Students love being able to order their snacks and drinks between classes and pick them up without waiting in line. It's been a huge hit on campus.",
      author: "Michael Chen, Director of Campus Services",
      image: "/placeholder.svg?height=400&width=600",
    },
    heroImage: "/placeholder.svg?height=600&width=800",
  },
}

export default function BusinessGoalPage({ params }: { params: { goalId: string } }) {
  const { goalId } = params
  const goal = businessGoalData[goalId as keyof typeof businessGoalData] || {
    title: goalId.charAt(0).toUpperCase() + goalId.slice(1).replace(/-/g, " "),
    description: "Our software provides specialized features to help you achieve this business goal.",
    benefits: [
      "Streamline operations and reduce costs",
      "Improve customer satisfaction and loyalty",
      "Gain valuable insights through data analytics",
      "Increase revenue and profitability",
      "Scale your business more efficiently",
      "Stay ahead of the competition with innovative solutions",
    ],
    features: [],
    heroImage: "/placeholder.svg?height=600&width=800",
  }

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{goal.title}</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">{goal.description}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Request a Demo</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={goal.heroImage || "/placeholder.svg"}
                width={800}
                height={600}
                alt={`${goal.title} illustration`}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Benefits</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How our software helps you achieve your {goal.title.toLowerCase()} goals.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {goal.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 rounded-lg border p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section (if available) */}
      {goal.features && goal.features.length > 0 && (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Specialized tools and capabilities to help you {goal.title.toLowerCase()}.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {goal.features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-4 rounded-lg border bg-background p-6">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Section (if available) */}
      {goal.caseStudy && (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Story</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how our customers have achieved their {goal.title.toLowerCase()} goals.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src={goal.caseStudy.image || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={goal.caseStudy.title}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{goal.caseStudy.title}</h3>
                  <p className="text-muted-foreground">{goal.caseStudy.description}</p>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic">"{goal.caseStudy.quote}"</blockquote>
                <p className="font-medium">{goal.caseStudy.author}</p>
                <div>
                  <Button variant="outline" asChild>
                    <Link href={`/case-studies/${goal.caseStudy.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="text-muted-foreground md:text-xl">
                Contact us to learn more about how our software can help you {goal.title.toLowerCase()}.
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
                Submit Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

