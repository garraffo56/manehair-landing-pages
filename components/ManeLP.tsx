'use client'
import { Suspense } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// ── DESIGN TOKENS (from live start.manehair.com capture 2026-07-17) ────────
const NAVY  = '#002E94'
const INK   = '#000000'
const TEXT  = '#333333'
const MIST  = '#F4F6FA'
const GREY  = '#F7F7F7'
const WHITE = '#ffffff'
const GOLD  = '#f0b429'

const H_FONT = "'Rubik', sans-serif"
const B_FONT = "'Roboto', sans-serif"

const PHONE_DISPLAY = '(240) 290-8335'
const PHONE_TEL = '+12402908335'

// ── SMALL PARTS ────────────────────────────────────────────────────────────

function CtaButton({ label, href = '#consult-form' }: { label: string; href?: string }) {
  return (
    <a href={href} style={{
      display: 'inline-block', background: NAVY, color: WHITE, fontFamily: B_FONT,
      fontWeight: 700, fontSize: 15, letterSpacing: '0.4px', textTransform: 'uppercase',
      padding: '15px 30px', borderRadius: 15, textDecoration: 'none',
    }}>{label}</a>
  )
}

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3 }} aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map(i => (
        <svg key={i} width="17" height="17" viewBox="0 0 20 20" fill={GOLD} aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function BlueCircle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 96, height: 96, borderRadius: '50%', background: NAVY,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>{children}</div>
  )
}

const ic = { width: 44, height: 44, viewBox: '0 0 24 24', fill: 'none' as const, stroke: WHITE, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

function CalendarGlyph() {
  return (
    <svg {...ic} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  )
}
function PatientGlyph() {
  return (
    <svg {...ic} aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-3.9 3.6-7 8-7s8 3.1 8 7" />
      <path d="M15.5 11.5l1.5 1.5 3-3" />
    </svg>
  )
}
function DoctorGlyph() {
  return (
    <svg {...ic} aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21v-2a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v2" />
      <path d="M12 13v4M10 15h4" />
    </svg>
  )
}
function HandshakeGlyph() {
  return (
    <svg {...ic} aria-hidden="true">
      <path d="M3 11l4-4 5 1 5-1 4 4" />
      <path d="M7 7v7a2 2 0 0 0 2 2l3 3 3-3a2 2 0 0 0 2-2V7" />
      <path d="M12 8v6" />
    </svg>
  )
}

function CheckBadge() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill={NAVY} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M12 1l2.4 2 3.1-.4 1.2 2.9 2.9 1.2-.4 3.1 2 2.4-2 2.4.4 3.1-2.9 1.2-1.2 2.9-3.1-.4-2.4 2-2.4-2-3.1.4-1.2-2.9L2.4 17l.4-3.1-2-2.4 2-2.4L2.4 6l2.9-1.2L6.5 1.9l3.1.4L12 1z" />
      <path d="M8.2 12.2l2.5 2.5 5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────

export interface ManeLPProps {
  heroFormId: string
  bottomFormId: string
  h1?: string
  heroSub?: string
  formHeading?: string
}

export default function ManeLP({
  heroFormId,
  bottomFormId,
  h1 = 'MEDICAL EVALUATION FOR THINNING HAIR & HAIR LOSS CONDITIONS',
  heroSub = 'Discover what causes hair loss and learn which treatment options fit each patient’s goals and hair biology.',
  formHeading = 'REQUEST YOUR HAIR CONSULTATION',
}: ManeLPProps) {
  return (
    <main style={{ fontFamily: B_FONT, color: TEXT, background: WHITE }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* ── NAV ── */}
      <nav className="mane-nav" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 48px', background: WHITE, borderBottom: '1px solid #e8ebf2',
      }}>
        <img src="/images/mane-logo.png" alt="Mane Center for Hair Restoration" className="mane-nav-logo" style={{ height: 52, width: 'auto' }} />
        <div className="mane-nav-btns" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <a href="#consult-form" className="mane-nav-btn" style={{
            background: NAVY, color: WHITE, fontWeight: 700, fontSize: 14, textTransform: 'uppercase',
            letterSpacing: '0.4px', padding: '12px 22px', borderRadius: 15, textDecoration: 'none',
          }}>Request Your Consultation</a>
          <a href={`tel:${PHONE_TEL}`} className="mane-nav-btn" style={{
            border: `2px solid ${NAVY}`, color: NAVY, fontWeight: 700, fontSize: 14,
            padding: '10px 20px', borderRadius: 999, textDecoration: 'none',
          }}>{PHONE_DISPLAY}</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: MIST }}>
        <div className="mane-hero-grid mane-pad" style={{
          display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 44, alignItems: 'stretch',
          maxWidth: 1200, margin: '0 auto', padding: '44px 48px 52px',
        }}>
          <div>
            <h1 className="mane-hero-h1" style={{
              fontFamily: H_FONT, fontWeight: 600, fontSize: 40, lineHeight: 1.16,
              color: INK, textTransform: 'uppercase', maxWidth: 560,
            }}>{h1}</h1>
            <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.55, maxWidth: 520 }}>{heroSub}</p>
            <p style={{ marginTop: 10, fontSize: 16, lineHeight: 1.55, maxWidth: 520 }}>
              Request a consultation to discuss hair loss concerns with a licensed medical professional.
            </p>
            <div className="mane-hero-photo" style={{ position: 'relative', marginTop: 26, borderRadius: 12, overflow: 'hidden', minHeight: 330 }}>
              <img src="/images/hero-clinic.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src="/images/dr-burka.png" alt="Dr. Douglas Burka" style={{
                position: 'absolute', left: 0, bottom: 0, height: '100%', width: 'auto', objectFit: 'contain', objectPosition: 'bottom left',
              }} />
              <div className="mane-hero-trust" style={{
                position: 'absolute', right: 16, bottom: 16, background: WHITE, borderRadius: 10,
                boxShadow: '0 8px 26px rgba(4,17,49,0.18)', padding: '14px 16px', maxWidth: 280,
              }}>
                <Stars />
                <div style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 13.5, color: INK, marginTop: 8, textTransform: 'uppercase' }}>Patient-Centered Care</div>
                <div style={{ fontSize: 13, lineHeight: 1.45, marginTop: 4 }}>Patients appreciate our personalized, doctor-led approach.</div>
              </div>
            </div>
          </div>

          <div id="consult-form" style={{
            background: WHITE, borderRadius: 12, boxShadow: '0 10px 34px rgba(4,17,49,0.10)',
            padding: '26px 24px', alignSelf: 'start',
          }}>
            <h2 style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 20, color: INK, textTransform: 'uppercase', textAlign: 'center', marginBottom: 14 }}>
              {formHeading}
            </h2>
            <GhlForm formId={heroFormId} height={400} formName="Request Your Hair Consultation - Mane" />
          </div>
        </div>
      </section>

      {/* ── ICON ROW ── */}
      <section className="mane-pad" style={{ padding: '54px 48px' }}>
        <div className="mane-icon-row" style={{ display: 'flex', gap: 56, justifyContent: 'center', flexWrap: 'wrap' }}>
          <BlueCircle><CalendarGlyph /></BlueCircle>
          <BlueCircle><PatientGlyph /></BlueCircle>
          <BlueCircle><DoctorGlyph /></BlueCircle>
          <BlueCircle><HandshakeGlyph /></BlueCircle>
        </div>
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <h2 className="mane-h2" style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 26, color: INK, textTransform: 'uppercase' }}>Patient-Centered Care</h2>
          <p style={{ marginTop: 8, fontSize: 16 }}>Patients appreciate our personalized, doctor-led approach.</p>
          <img src="/images/reviews-strip.png" alt="Patient review ratings" style={{ margin: '18px auto 0', height: 48, width: 'auto' }} />
        </div>
      </section>

      {/* ── THREE STEPS ── */}
      <section style={{ background: MIST }}>
        <div className="mane-pad" style={{ maxWidth: 1100, margin: '0 auto', padding: '58px 48px 64px', textAlign: 'center' }}>
          <h2 className="mane-h2" style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 30, color: INK, textTransform: 'uppercase' }}>
            A Personalized Hair Loss Plan Is Just Three Steps Away
          </h2>
          <p style={{ marginTop: 10, fontSize: 17 }}>It&rsquo;s simpler than you think, and it all starts with a conversation.</p>

          <div className="mane-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginTop: 40 }}>
            {[
              { t: 'SCHEDULE YOUR EVALUATION', d: 'Pick a time that works best for you.', icon: <CalendarGlyph /> },
              { t: 'SHARE YOUR GOALS', d: 'Tell us what you want to improve.', icon: <PatientGlyph /> },
              { t: 'HAIR LOSS ASSESSMENT', d: 'A provider examines thinning patterns.', icon: <DoctorGlyph /> },
              { t: 'PERSONALIZED ASSESSMENT', d: 'No pressure. No sales pitch. Just answers.', icon: <HandshakeGlyph /> },
            ].map((s) => (
              <div key={s.t} style={{ background: WHITE, borderRadius: 12, padding: '26px 18px', boxShadow: '0 4px 18px rgba(4,17,49,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}><BlueCircle>{s.icon}</BlueCircle></div>
                <div style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 15, color: INK, textTransform: 'uppercase', marginTop: 16 }}>{s.t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.5, marginTop: 8 }}>{s.d}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 44 }}>
            <div style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 20, color: INK, textTransform: 'uppercase' }}>
              No Pressure. No Obligation. Just Honest Answers About Your Options.
            </div>
            <p style={{ marginTop: 8, fontSize: 16 }}>You&rsquo;re in the right place.</p>
            <div style={{ marginTop: 18 }}><CtaButton label="Request Your Evaluation" /></div>
            <p style={{ marginTop: 10, fontSize: 13.5, color: '#5a6272' }}>Fast. Private. No obligation.</p>
          </div>
        </div>
      </section>

      {/* ── CONFIDENCE CARDS ── */}
      <section className="mane-pad" style={{ maxWidth: 1100, margin: '0 auto', padding: '58px 48px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 className="mane-h2" style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 28, color: INK, textTransform: 'uppercase' }}>
            Why Patients Feel Confident Choosing Our Team &mdash; And Why You Can Too
          </h2>
          <p style={{ marginTop: 8, fontSize: 16 }}>Real care. Real support. Real patient-first focus.</p>
        </div>
        <div className="mane-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 36 }}>
          {[
            { t: 'DESIGNED AROUND EACH PATIENT’S PATTERN', d: 'Personalized plans based on stage, evaluation findings, and goals.' },
            { t: 'GUIDANCE FOCUSED ON HEALTHY-LOOKING HAIR OVER TIME', d: 'Recommendations based on proven medical and appearance-supporting approaches.' },
            { t: 'TAILORED TO YOU', d: 'Your plan is based on your evaluation, goals, and long-term hair needs.' },
            { t: 'STEP-BY-STEP GUIDANCE', d: 'Know what to expect during your evaluation and throughout your care plan.' },
            { t: 'SUPPORT WHEN YOU NEED IT MOST', d: 'Real guidance through your evaluation, recommendations, and every step of your journey.' },
            { t: 'VISIBLE, MEASURABLE PROGRESS', d: 'Track changes over time through follow-up assessments.' },
            { t: 'SAFE CARE. PROVEN PROTOCOLS.', d: 'Strict standards for consistent, high-quality patient care.' },
            { t: 'TRUSTED BY THOUSANDS', d: 'Real patients. Real reviews. Real experiences.' },
          ].map((c) => (
            <div key={c.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: MIST, borderRadius: 12, padding: '20px 20px' }}>
              <CheckBadge />
              <div>
                <div style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 15, color: INK, textTransform: 'uppercase' }}>{c.t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.5, marginTop: 6 }}>{c.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DR. BURKA ── */}
      <section className="mane-pad" style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 48px 64px' }}>
        <div className="mane-bio-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 44, alignItems: 'center' }}>
          <img src="/images/dr-burka.png" alt="Dr. Douglas Burka, Mane Center for Hair Restoration" style={{ borderRadius: 12, width: '100%', height: 'auto', background: MIST }} />
          <div>
            <h2 className="mane-h2" style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 28, color: INK, textTransform: 'uppercase' }}>
              Dr. Burka: Specialist in Hair Loss Evaluation &amp; Treatment Planning
            </h2>
            <div style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 13, color: NAVY, textTransform: 'uppercase', marginTop: 10 }}>
              Verified patient experiences from real consultations and care.
            </div>
            <p style={{ marginTop: 14, fontSize: 15.5, lineHeight: 1.6 }}>
              Dr. Douglas Burka is a licensed physician with a clinical focus on the medical evaluation and management of hair loss conditions, including alopecia. He founded Mane Center to provide medically appropriate, patient-focused care for individuals experiencing hair loss in a professional clinical setting.
            </p>
            <p style={{ marginTop: 12, fontSize: 15.5, lineHeight: 1.6 }}>
              Dr. Burka completed his undergraduate education at Washington University in St. Louis and earned his medical degree from the George Washington University School of Medicine and Health Sciences. His postgraduate training includes an internship at St. Barnabas Medical Center, residency training at Vanderbilt University, and a fellowship with the National Institutes of Health.
            </p>
            <p style={{ marginTop: 12, fontSize: 15.5, lineHeight: 1.6 }}>
              Dr. Burka is board certified and maintains active medical licensure. In his current practice, he oversees patient care and remains directly involved in the evaluation and management of hair loss concerns. His work follows recognized medical standards, applicable regulations, and ethical guidelines related to hair loss evaluation and non-surgical treatment. Mane Center operates in accordance with state medical licensing requirements and applicable healthcare advertising policies.
            </p>
            <div style={{ marginTop: 20 }}><CtaButton label="Request Your Evaluation" /></div>
          </div>
        </div>
      </section>

      {/* ── FINANCING ── */}
      <section style={{ background: GREY }}>
        <div className="mane-fin-grid mane-pad" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 44, alignItems: 'center',
          maxWidth: 1100, margin: '0 auto', padding: '58px 48px',
        }}>
          <div>
            <h2 className="mane-h2" style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 28, color: INK, textTransform: 'uppercase' }}>
              Getting Help for Hair Loss Can Be More Affordable Than You Think
            </h2>
            <p style={{ marginTop: 10, fontSize: 16 }}>Flexible monthly plans built for real patients.</p>
            <div style={{ marginTop: 22, fontSize: 15 }}>As low as</div>
            <div style={{ fontFamily: H_FONT, fontWeight: 700, fontSize: 44, color: NAVY }}>$188/MO</div>
            <div style={{ borderTop: `2px solid ${NAVY}`, maxWidth: 320, margin: '14px 0' }} />
            <div style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 16, color: INK, textTransform: 'uppercase' }}>Fast, Simple Payment Plans</div>
            <p style={{ marginTop: 10, fontSize: 12.5, lineHeight: 1.5, color: '#5a6272', maxWidth: 520 }}>
              The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility.
            </p>
            <div style={{ marginTop: 20 }}><CtaButton label="Request Your Evaluation" /></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/images/hero-clinic.png" alt="" style={{ borderRadius: 12, width: '100%', maxWidth: 440, height: 'auto', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ── BOTTOM FORM ── */}
      <section className="mane-pad" style={{ maxWidth: 760, margin: '0 auto', padding: '58px 48px 66px', textAlign: 'center' }}>
        <h2 className="mane-h2" style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 28, color: INK, textTransform: 'uppercase' }}>
          Why Patients Feel Confident Choosing Our Team
        </h2>
        <p style={{ marginTop: 8, fontSize: 16 }}>Real capabilities. Real safety. Real patient-first care.</p>
        <div style={{
          background: WHITE, borderRadius: 12, boxShadow: '0 10px 34px rgba(4,17,49,0.10)',
          padding: '26px 24px', marginTop: 28, textAlign: 'left',
        }}>
          <h3 style={{ fontFamily: H_FONT, fontWeight: 600, fontSize: 19, color: INK, textTransform: 'uppercase', textAlign: 'center', marginBottom: 14 }}>
            Request Your Hair Consultation
          </h3>
          <GhlForm formId={bottomFormId} height={496} formName="Footer Form - Mane" />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: MIST }}>
        <div className="mane-footer-row mane-pad" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          maxWidth: 1100, margin: '0 auto', padding: '26px 48px', gap: 24,
        }}>
          <img src="/images/mane-logo.png" alt="Mane Center for Hair Restoration" style={{ height: 40, width: 'auto' }} />
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: NAVY, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>{PHONE_DISPLAY}</a>
            <a href="/privacy-policy" style={{ color: TEXT, textDecoration: 'none', fontSize: 13 }}>Privacy Policy</a>
            <a href="/cookie-policy" style={{ color: TEXT, textDecoration: 'none', fontSize: 13 }}>Cookie Policy</a>
          </div>
          <div style={{ fontSize: 12.5, color: '#5a6272' }}>&copy; 2026 Mane Center for Hair Restoration</div>
        </div>
      </footer>
    </main>
  )
}
