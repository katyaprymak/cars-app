"use client"

import { useState } from "react"
import { X, ChevronDown, ChevronUp, Smartphone, Monitor, MoreVertical } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
    type: string
    productName: string
    price: string
    quantity: number
    adjustQuantity: boolean
    collectTax: boolean
    collectAddress: boolean
    requirePhone: boolean
    limitPayments: boolean
}

export function PaymentForm() {
    const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
    const [previewMode, setPreviewMode] = useState<"mobile" | "desktop">("mobile")
    const [formData, setFormData] = useState<FormData>({
        type: "products",
        productName: "Your product/service",
        price: "250.00",
        quantity: 1,
        adjustQuantity: false,
        collectTax: false,
        collectAddress: false,
        requirePhone: false,
        limitPayments: false,
    })

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="flex items-center justify-between px-4 py-3 bg-white border-b">
                <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                </Button>
                <h1 className="text-lg font-medium">Create a payment link</h1>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Create link</Button>
            </header>

            <main className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Panel - Form */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Label>Select type</Label>
                            <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Products or subscriptions" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="products">Products or subscriptions</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Tabs defaultValue="payment" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="payment">Payment page</TabsTrigger>
                                <TabsTrigger value="after">After payment</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div className="space-y-6 bg-white rounded-lg border p-4">
                            <div className="space-y-4">
                                <h2 className="text-lg font-medium">Product</h2>
                                <div className="flex gap-4">
                                    <div className="h-16 w-16 bg-gray-100 rounded flex items-center justify-center">
                                        <img src="/placeholder.svg?height=64&width=64" alt="Product" className="h-12 w-12" />
                                    </div>
                                    <div className="flex-1">
                                        <Input
                                            value={formData.productName}
                                            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                                            className="border-0 p-0 text-base font-medium"
                                        />
                                        <Input
                                            type="number"
                                            value={formData.price}
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            className="border-0 p-0 text-gray-500"
                                        />
                                    </div>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div>
                                    <Label>Quantity</Label>
                                    <Input
                                        type="number"
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({ ...formData, quantity: Number.parseInt(e.target.value) })}
                                        min={1}
                                        className="w-24"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="adjust-quantity"
                                        checked={formData.adjustQuantity}
                                        onCheckedChange={(checked) => setFormData({ ...formData, adjustQuantity: checked as boolean })}
                                    />
                                    <Label htmlFor="adjust-quantity">Let customers adjust quantity</Label>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-lg font-medium">Options</h2>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="tax"
                                            checked={formData.collectTax}
                                            onCheckedChange={(checked) => setFormData({ ...formData, collectTax: checked as boolean })}
                                        />
                                        <Label htmlFor="tax">Collect tax automatically</Label>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="address"
                                            checked={formData.collectAddress}
                                            onCheckedChange={(checked) => setFormData({ ...formData, collectAddress: checked as boolean })}
                                        />
                                        <Label htmlFor="address">Collect customers' addresses</Label>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="phone"
                                            checked={formData.requirePhone}
                                            onCheckedChange={(checked) => setFormData({ ...formData, requirePhone: checked as boolean })}
                                        />
                                        <Label htmlFor="phone">Require customers to provide a phone number</Label>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="limit"
                                            checked={formData.limitPayments}
                                            onCheckedChange={(checked) => setFormData({ ...formData, limitPayments: checked as boolean })}
                                        />
                                        <Label htmlFor="limit">Limit the number of payments</Label>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                                className="flex items-center gap-2 text-sm text-gray-600"
                            >
                                Advanced options
                                {isAdvancedOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </button>

                            {isAdvancedOpen && (
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="custom-fields" />
                                        <Label htmlFor="custom-fields">Add custom fields</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="promo" />
                                        <Label htmlFor="promo">Allow promotion codes</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="tax-id" />
                                        <Label htmlFor="tax-id">Allow business customers to provide tax IDs</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="save-details" />
                                        <Label htmlFor="save-details">Save payment details for future use</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" />
                                        <Label htmlFor="terms">Require customers to accept your terms of service</Label>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label>Select the call to action</Label>
                                <Select defaultValue="pay">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pay" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pay">Pay</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Preview */}
                    <div className="space-y-4">
                        <div className="flex justify-end gap-2">
                            <Button
                                variant={previewMode === "mobile" ? "default" : "ghost"}
                                size="icon"
                                onClick={() => setPreviewMode("mobile")}
                            >
                                <Smartphone className="h-4 w-4" />
                            </Button>
                            <Button
                                variant={previewMode === "desktop" ? "default" : "ghost"}
                                size="icon"
                                onClick={() => setPreviewMode("desktop")}
                            >
                                <Monitor className="h-4 w-4" />
                            </Button>
                        </div>

                        <Card className="p-6">
                            <div className={`border rounded-lg ${previewMode === "mobile" ? "max-w-sm mx-auto" : ""}`}>
                                <div className="p-4 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                                                Test mode
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500">buy.stripe.com</div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-medium">{formData.productName}</h3>
                                            <p className="text-2xl font-bold">{formData.price} zł</p>
                                            <p className="text-sm text-gray-500">Price of your product/service</p>
                                        </div>

                                        <img
                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-02%20at%2021.24.39-eObXE4ZjemEDQakCWlFIz6ARtaXbUR.png"
                                            alt="Preview"
                                            className="w-full h-48 object-cover rounded-lg"
                                        />

                                        <div className="space-y-2">
                                            <Button className="w-full bg-black text-white hover:bg-gray-900">Pay with Apple Pay</Button>
                                            <Button className="w-full" variant="outline">
                                                Pay with card
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

