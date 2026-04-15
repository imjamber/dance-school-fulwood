import RegistrationForm from "@/components/register/RegistrationForm"

export const metadata = {
  title: "Register | Fitchett Proll Dance Fulwood",
  description: "Register for dance classes at our Fulwood studio.",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-charcoal pt-20">
      <RegistrationForm />
    </div>
  )
}
