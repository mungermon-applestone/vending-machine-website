"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import contentData from "@/data/content.json"

export default function AdminPage() {
  const [content, setContent] = useState(contentData)
  const [section, setSection] = useState<string>("heroSection")
  const [message, setMessage] = useState<string>("")

  // Function to handle saving content
  const saveContent = async () => {
    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      })

      if (response.ok) {
        setMessage("Content saved successfully!")
      } else {
        setMessage("Error saving content")
      }

      setTimeout(() => setMessage(""), 3000)
    } catch (error) {
      setMessage("Error saving content")
      setTimeout(() => setMessage(""), 3000)
    }
  }

  // Function to update hero section
  const updateHeroSection = (field: string, value: string) => {
    setContent({
      ...content,
      heroSection: {
        ...content.heroSection,
        [field]: value,
      },
    })
  }

  // Function to update a product type
  const updateProductType = (index: number, field: string, value: string) => {
    const updatedProducts = [...content.productTypes]
    updatedProducts[index] = {
      ...updatedProducts[index],
      [field]: value,
    }

    setContent({
      ...content,
      productTypes: updatedProducts,
    })
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Content Admin</h1>

      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{message}</div>
      )}

      <div className="flex gap-4 mb-6">
        <Button variant={section === "heroSection" ? "default" : "outline"} onClick={() => setSection("heroSection")}>
          Hero Section
        </Button>
        <Button variant={section === "productTypes" ? "default" : "outline"} onClick={() => setSection("productTypes")}>
          Product Types
        </Button>
        <Button
          variant={section === "businessGoals" ? "default" : "outline"}
          onClick={() => setSection("businessGoals")}
        >
          Business Goals
        </Button>
      </div>

      {section === "heroSection" && (
        <div className="space-y-4 border p-6 rounded-lg">
          <h2 className="text-xl font-bold">Edit Hero Section</h2>

          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              value={content.heroSection.title}
              onChange={(e) => updateHeroSection("title", e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Subtitle</label>
            <textarea
              value={content.heroSection.subtitle}
              onChange={(e) => updateHeroSection("subtitle", e.target.value)}
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Primary CTA</label>
              <input
                type="text"
                value={content.heroSection.ctaPrimary}
                onChange={(e) => updateHeroSection("ctaPrimary", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Secondary CTA</label>
              <input
                type="text"
                value={content.heroSection.ctaSecondary}
                onChange={(e) => updateHeroSection("ctaSecondary", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Image Path</label>
            <input
              type="text"
              value={content.heroSection.image}
              onChange={(e) => updateHeroSection("image", e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>
      )}

      {section === "productTypes" && (
        <div className="space-y-6 border p-6 rounded-lg">
          <h2 className="text-xl font-bold">Edit Product Types</h2>

          {content.productTypes.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg space-y-4">
              <h3 className="font-medium">
                Product {index + 1}: {product.title}
              </h3>

              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <input
                  type="text"
                  value={product.title}
                  onChange={(e) => updateProductType(index, "title", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <textarea
                  value={product.description}
                  onChange={(e) => updateProductType(index, "description", e.target.value)}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Image Path</label>
                <input
                  type="text"
                  value={product.image}
                  onChange={(e) => updateProductType(index, "image", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Similar sections for business goals, etc. would go here */}

      <div className="mt-6">
        <Button onClick={saveContent}>Save Changes</Button>
      </div>
    </div>
  )
}

