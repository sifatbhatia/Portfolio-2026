import { permanentRedirect } from 'next/navigation'

/** Legacy path; canonical feed lives at `/signals`. */
export default function JournalRedirect() {
  permanentRedirect('/signals')
}
