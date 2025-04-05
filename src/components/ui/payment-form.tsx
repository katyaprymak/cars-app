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

