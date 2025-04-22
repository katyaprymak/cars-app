"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define form validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Nieprawidłowy adres email" }),
  cardNumber: z
    .string()
    .min(16, { message: "Numer karty musi mieć co najmniej 16 znaków" })
    .max(19, { message: "Numer karty nie może przekraczać 19 znaków" }),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, {
    message: "Format MM/RR (np. 05/25)",
  }),
  cvc: z
    .string()
    .min(3, { message: "CVC musi mieć co najmniej 3 znaki" })
    .max(4, { message: "CVC nie może przekraczać 4 znaków" }),
  cardholderName: z.string().min(3, { message: "Wprowadź imię i nazwisko" }),
  country: z.string({ required_error: "Wybierz kraj" }),
  zipCode: z.string().min(1, { message: "Wprowadź kod pocztowy" }),
});

type FormValues = z.infer<typeof formSchema>;

export function PaymentForm() {
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      cardholderName: "",
      country: "pl",
      zipCode: "",
    },
  });

  // Handle form submission
  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data);
    // Here you would typically process the payment
    // For example, send the data to your payment processor API
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center items-center">
      <Card className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-lg">
        {/* Left: Product Info */}
        <div className="bg-white p-6 flex flex-col justify-between border-r">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Elitescards</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                TEST MODE
              </span>
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
            Pay
          </Button>

          <div className="text-center text-sm text-gray-500">
            Lub zapłać kartą
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="E-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Label>Informacje o karcie</Label>
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="1234 1234 1234 1234"
                          className="mb-2"
                          {...field}
                          onChange={(e) => {
                            // Format card number with spaces
                            const value = e.target.value.replace(/\s/g, "");
                            const formattedValue = value
                              .replace(/\D/g, "")
                              .replace(/(.{4})/g, "$1 ")
                              .trim();
                            field.onChange(formattedValue);
                          }}
                          maxLength={19}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <FormField
                    control={form.control}
                    name="expiry"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="MM / RR"
                            {...field}
                            onChange={(e) => {
                              // Format expiry date
                              const value = e.target.value
                                .replace(/\s/g, "")
                                .replace(/\//g, "");
                              if (value.length <= 4) {
                                let formattedValue = value;
                                if (value.length > 2) {
                                  formattedValue =
                                    value.slice(0, 2) + "/" + value.slice(2);
                                }
                                field.onChange(formattedValue);
                              }
                            }}
                            maxLength={5}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cvc"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Kod CVC"
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, "");
                              field.onChange(value);
                            }}
                            maxLength={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="cardholderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imię i nazwisko posiadacza karty</FormLabel>
                    <FormControl>
                      <Input placeholder="Imię i nazwisko" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kraj lub region</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Wybierz kraj" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="us">Stany Zjednoczone</SelectItem>
                        <SelectItem value="pl">Polska</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kod pocztowy (ZIP)</FormLabel>
                    <FormControl>
                      <Input placeholder="Kod pocztowy" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-6"
              >
                Zapłać
              </Button>
            </form>
          </Form>

          <div className="text-xs text-center text-gray-400 pt-4">
            Obsługiwane przez <span className="font-semibold">stripe</span> •{" "}
            <a href="#" className="underline">
              Warunki
            </a>{" "}
            •{" "}
            <a href="#" className="underline">
              Prywatność
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
} /*}

/* "use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PaymentForm() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center items-center">
      <Card className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-lg">
        {/* Left: Product Info */
        <div className="bg-white p-6 flex flex-col justify-between border-r">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Elitescards</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                TEST MODE
              </span>
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

        {/* Right: Payment Form */ /*}
        <div className="bg-white p-6 space-y-6">
          <Button className="w-full bg-black text-white hover:bg-gray-900 text-base py-6">
             Pay
          </Button>

          <div className="text-center text-sm text-gray-500">
            Lub zapłać kartą
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="E-mail" />
            </div>

            <div>
              <Label>Informacje o karcie</Label>
              <Input
                type="text"
                placeholder="1234 1234 1234 1234"
                className="mb-2"
              />
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
            <a href="#" className="underline">
              Warunki
            </a>{" "}
            •{" "}
            <a href="#" className="underline">
              Prywatność
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}*/
