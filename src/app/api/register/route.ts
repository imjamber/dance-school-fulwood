import { NextRequest, NextResponse } from "next/server"
import type { RegistrationFormData } from "@/lib/types"
import { LOCATION_NAME } from "@/lib/constants"

export async function POST(req: NextRequest) {
  try {
    const data: RegistrationFormData = await req.json()

    const required: (keyof RegistrationFormData)[] = [
      "studentFirstName", "studentLastName", "studentAge", "ageGroup", "classType",
      "parentFirstName", "parentLastName", "email", "phone",
    ]
    for (const field of required) {
      if (!data[field]?.toString().trim()) {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 })
      }
    }

    // TODO: Wire up real delivery. Options:
    //   - Nodemailer → send to info@fitchettproll.co.uk
    //   - Google Sheets API → append row to a Fulwood registrations sheet
    //   - Supabase → INSERT into registrations table with location = LOCATION_NAME
    console.log(`[${LOCATION_NAME}] New registration:`, data)

    return NextResponse.json({ success: true }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
