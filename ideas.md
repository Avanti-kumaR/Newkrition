# Nukrition — Premium Nutrition Consultation | Design Brainstorm

## Three Candidate Directions

### 1. The Quiet Table
Warm editorial minimalism inspired by boutique wellness studios and Kinfolk magazine — earthy neutrals, oversized serif headlines, generous air. Feels like a private consultation over coffee.
Probability: 0.07

### 2. Clinical Luxe
Dark, moody spa-clinic aesthetic — deep forest greens, gold hairlines, glassy panels. Feels like a five-star medical retreat.
Probability: 0.03

### 3. Botanical Modernist
Bright Bauhaus-meets-botany — bold geometry, olive and terracotta blocks, playful grid breaks. Feels energetic and design-forward.
Probability: 0.02

---

## CHOSEN: The Quiet Table (warm editorial minimalism)

The provided photo (warm wooden fence, brown blazer, olive green top, coffee, soft daylight) is itself a "quiet table" image. The design must feel like it was art-directed around this exact photo.

- **Design Movement**: Contemporary editorial minimalism — Kinfolk / Cereal magazine meets high-end wellness branding (think Sakara Life, The Nue Co.).
- **Core Principles**:
  1. The photograph is the hero — everything else frames it, never competes with it.
  2. Air is luxury — oversized whitespace, slow rhythm, nothing crowded.
  3. Editorial asymmetry — text column offset left, portrait anchored right, overlapping planes.
  4. Quiet confidence — no shouting gradients, no glassmorphism; restraint signals price.
- **Color Philosophy**: Pulled directly from the photo. Warm ivory/cream canvas (like the wooden fence bleached out), deep olive green (her top) as the primary brand ink, espresso brown (her blazer) for text, and a single warm terracotta-clay accent for CTAs. The palette says "organic, grounded, expensive" — no clinical blues, no purple.
- **Layout Paradigm**: Asymmetric split hero. Left ~55%: eyebrow, giant serif headline, supporting line, dual CTAs, trust strip. Right ~45%: the portrait in a tall arched frame (arch = organic + gallery-like), overlapped by a floating credential card and a decorative outlined arch echo behind it. Headline slightly overlaps the image plane on large screens.
- **Signature Elements**:
  1. The arch — arched image mask + thin outlined arch echoes, recurring motif.
  2. Hairline rules with small-caps micro-labels (editorial magazine furniture).
  3. Hand-drawn-feeling star/leaf accent marks in olive.
- **Interaction Philosophy**: Calm and tactile — slow fades and rises on load (staggered 60–80ms), gentle image scale-on-hover (1.02), buttons that press down subtly. Nothing bounces.
- **Animation**: Entrance: opacity 0 → 1 + translateY(24px → 0), 700ms cubic-bezier(0.23,1,0.32,1), staggered. Floating card: slow 6s ease-in-out vertical drift (4px). Respect prefers-reduced-motion.
- **Typography System**: Display — "Fraunces" (soft, warm, high-contrast serif with character; optical sizing, italic accents for one word in the headline). Body/UI — "Outfit" (geometric humanist sans, light-to-medium weights). Micro-labels in Outfit, uppercase, letter-spacing 0.2em.
- **Brand Essence**: Nukrition — bespoke 1:1 nutrition consultation for people who invest in themselves. Personality: warm, precise, discerning.
- **Brand Voice**: Assured, intimate, editorial. Examples: "Nutrition, tailored like a suit." / "Your body deserves a second opinion — a better one." CTAs: "Book a Private Consultation", "Explore the Method". Never "Get started today".
- **Wordmark & Logo**: Wordmark "Nukrition" set in Fraunces with a lowered-dot "u" feel; mark = an olive leaf inside an arch (generated PNG, transparent).
- **Signature Brand Color**: Deep olive `oklch(0.42 0.07 130)` — unmistakably Nukrition.
