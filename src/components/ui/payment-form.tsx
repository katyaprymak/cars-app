"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PaymentForm() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 flex justify-center items-center">
            <Card className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-lg">
                {/* Left: Product Info */}
                <div className="bg-white p-6 flex flex-col justify-between border-r">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Elitescards</span>
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">TEST MODE</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">250,00 zł</h2>
                            <p className="text-gray-600">Opis Twojego produktu/usługi</p>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1589542425426-2460d8243b58?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Product"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Right: Payment Form */}
                <div className="bg-white p-6 space-y-6">
                    <Button className="w-full bg-black text-white hover:bg-gray-900 text-base py-6">
                         Pay
                    </Button>

                    <div className="text-center text-sm text-gray-500">Lub zapłać kartą</div>

                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" type="email" placeholder="E-mail" />
                        </div>

                        <div>
                            <Label>Informacje o karcie</Label>
                            <Input type="text" placeholder="1234 1234 1234 1234" className="mb-2" />
                            <div className="flex gap-2">
                                <Input type="text" placeholder="MM / RR" />
                                <Input type="text" placeholder="Kod CVC" />
                            </div>
                        </div>

                        <div>
                            <Label>Imię i nazwisko posiadacza karty</Label>
                            <Input type="text" placeholder="Imię i nazwisko" />
                        </div>

                        <div>
                            <Label>Kraj lub region</Label>
                            <Select defaultValue="us">
                                <SelectTrigger>
                                    <SelectValue placeholder="Wybierz kraj" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="us">Stany Zjednoczone</SelectItem>
                                    <SelectItem value="pl">Polska</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label>Kod pocztowy (ZIP)</Label>
                            <Input type="text" placeholder="Kod pocztowy" />
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-6">
                            Zapłać
                        </Button>
                    </div>

                    <div className="text-xs text-center text-gray-400 pt-4">
                        Obsługiwane przez <span className="font-semibold">stripe</span> •{" "}
                        <a href="#" className="underline">Warunki</a> •{" "}
                        <a href="#" className="underline">Prywatność</a>
                    </div>
                </div>
            </Card>
        </div>
    )
}



/*"use client"

import { useState } from "react"
import { X, ChevronDown, ChevronUp, Smartphone, Monitor, MoreVertical } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PaymentForm() {
    const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
    const [previewMode, setPreviewMode] = useState<"mobile" | "desktop">("mobile")

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="flex items-center justify-between px-4 py-3 bg-white border-b">
                <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                </Button>
                <h1 className="text-lg font-medium">Create a payment link</h1>
                <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700">
                    Create link
                </Button>
            </header>

            <main className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Label>Select type</Label>
                            <Select defaultValue="products">
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
                                        <p>Your product/service</p>
                                        <p className="text-gray-500">250.00 PLN</p>
                                    </div>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div>
                                    <Label>Quantity</Label>
                                    <Input type="number" defaultValue="1" className="w-24" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="adjust-quantity" />
                                    <Label htmlFor="adjust-quantity">Let customers adjust quantity</Label>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-lg font-medium">Options</h2>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="tax" />
                                        <Label htmlFor="tax">Collect tax automatically</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="address" />
                                        <Label htmlFor="address">Collect customers' addresses</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="phone" />
                                        <Label htmlFor="phone">Require customers to provide a phone number</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="limit" />
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
                                            <h3 className="font-medium">Your product/service</h3>
                                            <p className="text-2xl font-bold">250,00 zł</p>
                                            <p className="text-sm text-gray-500">Price of your product/service</p>
                                        </div>

                                        <img
                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-02%20at%2021.24.39-eObXE4ZjemEDQakCWlFIz6ARtaXbUR.png"
                                            alt="Preview"
                                            className="w-full h-48 object-cover rounded-lg"
                                        />

                                        <div className="space-y-2">
                                            <Button className="w-full bg-black text-white hover:bg-gray-900">Pay with Apple Pay</Button>
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
*/
