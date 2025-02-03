"use client"

import { MoreVertical, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PaymentFormOptionsProps {
    isAdvancedOpen: boolean
    setIsAdvancedOpen: (value: boolean) => void
}

export function PaymentFormOptions({ isAdvancedOpen, setIsAdvancedOpen }: PaymentFormOptionsProps) {
    return (
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
                <div className="flex items-start gap-2">
                    <Checkbox id="adjust-quantity" />
                    <Label htmlFor="adjust-quantity">Let customers adjust quantity</Label>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-lg font-medium">Options</h2>
                <div className="space-y-2">
                    {[
                        { id: "tax", label: "Collect tax automatically" },
                        { id: "address", label: "Collect customers' addresses" },
                        { id: "phone", label: "Require customers to provide a phone number" },
                        { id: "limit", label: "Limit the number of payments" },
                    ].map(({ id, label }) => (
                        <div key={id} className="flex items-start gap-2">
                            <Checkbox id={id} />
                            <Label htmlFor={id}>{label}</Label>
                        </div>
                    ))}
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
                    {[
                        { id: "custom-fields", label: "Add custom fields" },
                        { id: "promo", label: "Allow promotion codes" },
                        { id: "tax-id", label: "Allow business customers to provide tax IDs" },
                        { id: "save-details", label: "Save payment details for future use" },
                        { id: "terms", label: "Require customers to accept your terms of service" },
                    ].map(({ id, label }) => (
                        <div key={id} className="flex items-start gap-2">
                            <Checkbox id={id} />
                            <Label htmlFor={id}>{label}</Label>
                        </div>
                    ))}
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
    )
}

