import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PaymentForm } from "@/components/ui/payment-form"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PaymentForm />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Button>Button</Button>
        <Input />
      </div>
    </div>
  )
}
