"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Button from "@/components/ui/Button"
import { CLASS_TYPES, AGE_GROUPS, LOCATION_NAME } from "@/lib/constants"
import type { RegistrationFormData } from "@/lib/types"

const EMPTY: RegistrationFormData = {
  studentFirstName: "", studentLastName: "", studentAge: "", ageGroup: "", classType: "",
  parentFirstName: "", parentLastName: "", email: "", phone: "",
  medicalNotes: "", hearAboutUs: "",
}

type State = "idle" | "loading" | "success" | "error"

export default function RegistrationForm() {
  const [form, setForm] = useState<RegistrationFormData>(EMPTY)
  const [state, setState] = useState<State>("idle")
  const [errMsg, setErrMsg] = useState("")

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState("loading")
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error((await res.json()).error ?? "Error")
      setState("success")
      setForm(EMPTY)
    } catch (err) {
      setState("error")
      setErrMsg(err instanceof Error ? err.message : "Unexpected error")
    }
  }

  if (state === "success") {
    return (
      <motion.div className="flex flex-col items-center text-center gap-6 py-24"
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="w-14 h-14 rounded-full border border-gold flex items-center justify-center">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-serif text-3xl text-ivory">Registration Received</h2>
        <p className="text-ivory/60 max-w-sm text-sm leading-relaxed">
          Thank you — we&apos;ll be in touch within 2 working days to confirm your place at our {LOCATION_NAME} studio.
        </p>
        <Button onClick={() => setState("idle")} variant="outline">Register Another</Button>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 md:px-0 py-20">
      <div className="flex flex-col gap-3 mb-12">
        <span className="text-gold tracking-[0.25em] uppercase text-xs">Enrol Today</span>
        <h1 className="font-serif text-4xl md:text-5xl text-ivory font-light">Register for Classes</h1>
        <div className="w-10 h-px bg-gold" />
        <p className="text-ivory/50 text-sm leading-relaxed mt-1">
          Fill in the form and we&apos;ll confirm your place within 2 working days.
        </p>
      </div>

      <form onSubmit={submit} className="flex flex-col gap-10">

        <fieldset className="flex flex-col gap-5">
          <legend className="text-gold text-xs tracking-widest uppercase mb-1">Student Details</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="First Name" name="studentFirstName" value={form.studentFirstName} onChange={set} required />
            <Field label="Last Name"  name="studentLastName"  value={form.studentLastName}  onChange={set} required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Age" name="studentAge" type="number" min="1" max="99" value={form.studentAge} onChange={set} required />
            <Select label="Age Group" name="ageGroup" value={form.ageGroup} onChange={set} required>
              <option value="">Select age group</option>
              {AGE_GROUPS.map(a => <option key={a} value={a}>{a}</option>)}
            </Select>
          </div>
          <Select label="Preferred Class" name="classType" value={form.classType} onChange={set} required>
            <option value="">Select a class</option>
            {CLASS_TYPES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
          </Select>
        </fieldset>

        <fieldset className="flex flex-col gap-5">
          <legend className="text-gold text-xs tracking-widest uppercase mb-1">Parent / Guardian</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="First Name" name="parentFirstName" value={form.parentFirstName} onChange={set} required />
            <Field label="Last Name"  name="parentLastName"  value={form.parentLastName}  onChange={set} required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Email"  name="email" type="email" value={form.email} onChange={set} required />
            <Field label="Phone"  name="phone" type="tel"   value={form.phone} onChange={set} required />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-5">
          <legend className="text-gold text-xs tracking-widest uppercase mb-1">Additional Info</legend>
          <Textarea label="Medical Notes / Additional Needs (optional)" name="medicalNotes" value={form.medicalNotes} onChange={set} />
          <Select label="How did you hear about us? (optional)" name="hearAboutUs" value={form.hearAboutUs} onChange={set}>
            <option value="">Please select</option>
            <option value="word-of-mouth">Word of mouth</option>
            <option value="google">Google search</option>
            <option value="social-media">Social media</option>
            <option value="existing-student">Existing student / family</option>
            <option value="other">Other</option>
          </Select>
        </fieldset>

        {state === "error" && <p className="text-red-400 text-sm">{errMsg}</p>}

        <Button type="submit" size="lg" disabled={state === "loading"} className="self-start">
          {state === "loading" ? "Submitting…" : "Submit Registration"}
        </Button>
      </form>
    </div>
  )
}

function Field({ label, ...p }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs tracking-wide text-ivory/60 uppercase">{label}</span>
      <input {...p} className="bg-transparent border border-ivory/20 text-ivory px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
    </label>
  )
}

function Select({ label, children, ...p }: { label: string; children: React.ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs tracking-wide text-ivory/60 uppercase">{label}</span>
      <select {...p} className="bg-charcoal border border-ivory/20 text-ivory px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors">{children}</select>
    </label>
  )
}

function Textarea({ label, ...p }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs tracking-wide text-ivory/60 uppercase">{label}</span>
      <textarea {...p} rows={4} className="bg-transparent border border-ivory/20 text-ivory px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
    </label>
  )
}
