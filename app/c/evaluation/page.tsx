import type { Metadata } from 'next'
import ManeLP from '@/components/ManeLP'

export const metadata: Metadata = {
  title: 'Hair Loss Medical Evaluation | Mane Center for Hair Restoration',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <ManeLP
      heroFormId="N1p0JWn5Pp9feg7yg39q"
      bottomFormId="0MiKixh1rGsZd36D5QIl"
      h1="MEDICAL EVALUATION FOR THINNING HAIR & HAIR LOSS CONDITIONS"
      heroSub="Discover what causes hair loss and learn which treatment options fit each patient\u2019s goals and hair biology."
    />
  )
}
