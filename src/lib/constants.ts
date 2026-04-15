// ── Location constants — edit this file to create a new location site ──

export const LOCATION_NAME     = "Fulwood"
export const SCHOOL_NAME       = "Fitchett Proll Dance"
export const SCHOOL_FULL_NAME  = "Sandham Fitchett Performing Arts"
export const SITE_TITLE        = `${SCHOOL_NAME} ${LOCATION_NAME}`

export const ADDRESS_LINE_1    = "St Cuthberts Church"
export const ADDRESS_LINE_2    = "Lytham Road"
export const ADDRESS_TOWN      = "Fulwood"
export const ADDRESS_POSTCODE  = "PR2 3AR"
export const FULL_ADDRESS      = `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}, ${ADDRESS_TOWN}, ${ADDRESS_POSTCODE}`

export const PHONE             = "01772 682019"
export const MOBILE            = "07770 233007"
export const EMAIL             = "info@fitchettproll.co.uk"

// Google Maps embed — replace with real embed URL from maps.google.com → Share → Embed
export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.4!2d-2.691!3d53.775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDQ2JzMwLjAiTiAywrA0MSczNi4wIlc!5e0!3m2!1sen!2suk!4v1"

export const CLASS_TYPES = [
  { name: "Baby Ballet",            age: "18 months – 3 yrs", description: "First steps in movement, rhythm, and imagination." },
  { name: "Primary Ballet",         age: "3 – 10 years",      description: "Classical technique built on RAD syllabus foundations." },
  { name: "Tap",                    age: "All ages",           description: "Rhythm, coordination, and that unmistakeable sound." },
  { name: "Modern Jazz / Street",   age: "5 years+",           description: "Contemporary movement, performance energy, and style." },
  { name: "Pointés",                age: "Advanced students",  description: "Pointe work under expert guidance." },
  { name: "Contemporary Dance",     age: "10 years+",          description: "Expressive, technically demanding floor work." },
  { name: "Adult Classical Dance",  age: "Adults",             description: "Classical ballet for beginners and returners." },
  { name: "Adult Tap",              age: "Adults",             description: "Fun, social, and surprisingly good exercise." },
] as const

export const AGE_GROUPS = [
  "18 months – 3 years",
  "3 – 5 years",
  "5 – 7 years",
  "7 – 10 years",
  "10 – 13 years",
  "13 – 16 years",
  "16+ / Adult",
] as const

export const MAIN_SITE_URL = "https://www.fitchettproll.co.uk"
