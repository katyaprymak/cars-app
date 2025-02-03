'use client'

import { Smartphone, Monitor } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PaymentPreviewProps {
    previewMode: 'mobile' | 'desktop'
    setPreviewMode: (mode: 'mobile' | 'desktop') => void
}

export function PaymentPreview({ previewMode, setPreviewMode }: PaymentPreviewProps) {
    return (
        <div className="space-y-4">
            <div className="flex justify-end gap-2">
                <Button
                    variant={previewMode === 'mobile' ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setPreviewMode('mobile')}
                >
                    <Smartphone className="h-4 w-4" />
                </Button>
                <Button
                    variant={previewMode === 'desktop' ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setPreviewMode('desktop')}
                >
                    <Monitor className="h-4 w-4" />
                </Button>
            </div>

            <Card className="p-6">
                <div className={`border rounded-lg ${previewMode === 'mobile' ? 'max-w-sm mx-auto' : ''}`}>
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
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%2018.53.54-hyBVdVwTriHEKITrMAviIe4ro3AwY9.png"
                                alt="Preview"
                                className="w-full h-48 object-cover rounded-lg"
                            />

                            <div className="space-y-2">
                                <Button className="w-full bg-black text-white hover:bg-gray-900">
                                    Pay with Apple Pay
                                </Button>
                                <Button className="w-full" variant="outline">
                                    Pay with card
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

