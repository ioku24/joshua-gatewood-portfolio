# 2026 Design Vision & Best Practices

Based on research into emerging frontend trends, this document outlines the aesthetic and functional standards we are targeting.

## Key Trends for 2026

### 1. The "Bento" Era
Gone are the days of simple list views. The "Bento Grid" (inspired by Apple's promotional materials and Bento boxes) is the standard for organizing disparate content types (maps, stats, text, images) into a cohesive, rectangular grid.
*   **Application:** We will convert the `Expertise.tsx` section from a standard grid into a Bento layout where some cells span 2 columns or 2 rows to create visual hierarchy.

### 2. Glassmorphism 2.0 (The "Deep" Glass)
While 2023 was about frosted glass, 2026 leans into "deep" glass—very subtle borders, extremely high blur values, and noise textures to emulate high-end physical materials.
*   **Application:** Our cards currently use `backdrop-blur-xl`. We will add subtle `noise` overlays and refined `border-white/5` strokes to mimic premium hardware interfaces.

### 3. Immersive "Scrollytelling"
Static pages are out. The user's scroll action should drive the narrative.
*   **Application:** The `Hero` section already fades out on scroll. We will add scroll-driven distinct scale effects to the `Work` images, making them feel like they are "entering" the viewport from depth.

### 4. Fluid Typography & "Editorial" Layouts
Mixing strict geometric sans-serifs (Inter/Geist) with characterful serifs (Playfair Display) for headlines to create an "Editorial" feel.
*   **Application:** We are already using *Playfair Display* for headers and *Inter/Space Grotesk* for UI text. We will push the contrast further—making headers larger and body text cleaner.

## Mobile Considerations (State-of-the-Art)
*   **Bottom Navigation:** On mobile, critical actions should be within thumb reach.
*   **Gesture Driven:** Swiping between projects instead of just clicking.
*   **Haptic Feedback:** (Where supported via Web APIs) providing subtle feedback on interaction.
