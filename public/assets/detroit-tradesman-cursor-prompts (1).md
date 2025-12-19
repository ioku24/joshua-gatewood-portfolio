# Detroit Tradesman Rugby Website — Cursor Prompt Package

Use these prompts in Cursor's Planning Mode to build the site step-by-step. Copy and paste each section as needed.

---

## PROMPT 1: Project Setup

```
Create a new Next.js 14 project for the Detroit Tradesman Rugby Football Club website with the following setup:

TECH STACK:
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

PROJECT NAME: detroit-tradesman-rugby

After creating the project, install and configure:
1. shadcn/ui with the "slate" base color and dark mode
2. Add these shadcn components: button, card, form, input, textarea, badge, separator, sheet (for mobile nav)

Create the following folder structure:
/app
  /layout.tsx
  /page.tsx (home)
  /schedule/page.tsx
  /roster/page.tsx
  /old-boys/page.tsx
  /join/page.tsx
  /sponsors/page.tsx
/components
  /ui (shadcn components go here)
  /layout
    /Header.tsx
    /Footer.tsx
    /MobileNav.tsx
  /home
    /Hero.tsx
    /About.tsx
    /NextMatch.tsx
    /SponsorScroll.tsx
    /CTASection.tsx
  /shared
    /SectionHeading.tsx
    /PlayerCard.tsx
    /MatchCard.tsx
/lib
  /utils.ts
  /data
    /schedule.ts
    /roster.ts
    /sponsors.ts
/public
  /images
    /logos (place logo files here)
    /players
    /action

Set up the Tailwind config with these custom colors:
- navy: '#1a2a4a' (primary dark)
- navyLight: '#243656'
- accent: '#3b82f6' (blue for CTAs)
- background: '#0d1117' (near-black)
- foreground: '#ffffff'

Set the default background to the dark theme (#0d1117).
```

---

## PROMPT 2: Data Files Setup

```
Create the data files for the Detroit Tradesman Rugby website:

1. /lib/data/schedule.ts
Export an array of match objects with this structure:
{
  id: string
  date: string (format: "March 15, 2025")
  time: string (format: "1:00 PM")
  opponent: string
  location: string
  isHome: boolean
  result?: { home: number, away: number } // only for past matches
}

Include 8-10 sample matches for the 2025 Spring season, mix of home and away games. Use realistic Michigan rugby club names as opponents (e.g., "Ann Arbor RFC", "Grand Rapids Gazelles", "Chicago Lions", "Cleveland RFC", "Columbus RFC", "Indianapolis Reds").

2. /lib/data/roster.ts
Export two arrays: divisionOne and divisionThree
Each player object:
{
  id: string
  name: string
  position: string (e.g., "Prop", "Hooker", "Lock", "Flanker", "Number 8", "Scrum Half", "Fly Half", "Center", "Wing", "Fullback")
  number: number
  yearsWithClub: number
  image?: string (path to player photo, optional)
}

Include 15 players per division with realistic names.

3. /lib/data/sponsors.ts
Export an array of sponsor objects:
{
  id: string
  name: string
  logo: string (path to logo image)
  url?: string
  tier: 'game-day' | 'season' | 'legacy'
}

Include these sponsors from the current site:
- Plymouth Physical Therapy
- Uniq
- Intex
- Mavens Associates
(Use placeholder paths for logos)
```

---

## PROMPT 3: Layout Components (Header & Footer)

```
Build the Header and Footer components for Detroit Tradesman Rugby:

HEADER (/components/layout/Header.tsx):
- Fixed position, dark background (#0d1117) with slight transparency
- Left: Logo (white version for dark bg) + "TRADESMEN RFC" text in bold
- Right: Navigation links - Schedule, Roster, Old Boys, Join the Club
- Far right: "Become a Sponsor" button (accent blue #3b82f6)
- Mobile: Hamburger menu using shadcn Sheet component
- Add subtle bottom border (1px, white at 10% opacity)
- Logo should link to home page
- Current page should have underline indicator

FOOTER (/components/layout/Footer.tsx):
- Dark background, slightly lighter than body (#111827)
- Three columns on desktop, stacked on mobile:
  1. Logo + brief tagline "Michigan's Premier Men's Rugby Club | Est. 1978"
  2. Quick Links: Schedule, Roster, Join, Sponsors
  3. Connect: Social icons (Facebook, Instagram, Twitter) + email link
- Bottom bar: "© 2025 Detroit Tradesman RFC. All rights reserved." + "501(c)(3) Nonprofit"
- Use Lucide icons for social media

MOBILE NAV (/components/layout/MobileNav.tsx):
- Slide-in sheet from right
- Full list of nav items
- "Become a Sponsor" button at bottom
- Close button in top right

Make sure Header has appropriate z-index and the page content has top padding to account for fixed header.
```

---

## PROMPT 4: Home Page Hero Section

```
Build the Hero section for the Detroit Tradesman Rugby home page:

HERO (/components/home/Hero.tsx):
- Full viewport height (100vh) minus header height
- Background: Dark overlay (black at 60% opacity) over a rugby action photo
  - For now, use a placeholder gradient: linear-gradient from navy to black
  - Add CSS for when real image is added: background-size cover, background-position center
- Add subtle texture/noise overlay for grit (optional CSS pattern or SVG)

Content (left-aligned, max-width container):
- Small accent text above headline: "EST. 1978" with left border accent (blue #3b82f6)
- Main headline: "FORGED IN DETROIT" 
  - Use bold, italic, condensed font style
  - Very large (text-6xl on mobile, text-8xl on desktop)
  - White color
  - Each word on its own line for impact
- Subheadline below: "Michigan's Premier Men's Rugby Club. From D3 development to D1 championships, we build athletes and legacies."
  - text-xl, text-gray-300, max-width for readability
- Two CTA buttons with gap:
  1. "2025 Schedule" - outline style (white border, transparent bg, white text)
  2. "Join the Club" - filled style (accent blue bg, white text)

Add subtle scroll indicator at bottom (chevron down icon, animated bounce).

Typography: Use font-family that feels athletic/bold. If not available, use system fonts with font-weight 800+ and italic style.
```

---

## PROMPT 5: Home Page Sections (About, Next Match, Sponsors)

```
Build the remaining home page sections:

ABOUT SECTION (/components/home/About.tsx):
- Dark background with subtle gradient
- Centered content, max-width container
- Heading: "Our Legacy" or "Since 1978"
- Paragraph: Brief history (2-3 sentences about 47 years, championships, community)
- Stats row below (3 columns):
  - "47" + "Years Strong"
  - "5" + "Midwest Titles"  
  - "2" + "Divisions"
- Stats should have large numbers (text-5xl) with smaller labels below

NEXT MATCH SECTION (/components/home/NextMatch.tsx):
- Section heading: "Next Match"
- Single match card showing the next upcoming match from schedule data
- Card shows: Date, Time, Opponent, Location, Home/Away badge
- "View Full Schedule" link below the card
- If no upcoming matches, show "Season schedule coming soon"

SPONSOR SCROLL (/components/home/SponsorScroll.tsx):
- Section heading: "Our Partners" (smaller, centered)
- Horizontally scrolling logo bar (CSS animation, infinite loop)
- Logos should be grayscale by default, full color on hover
- Smooth, slow scroll animation (40s duration)
- Duplicate logos for seamless infinite scroll effect
- "Become a Sponsor" small link below

CTA SECTION (/components/home/CTASection.tsx):
- Three cards in a row (stack on mobile):
  1. "Join the Team" - icon, brief text, button linking to /join
  2. "Become a Sponsor" - icon, brief text, button linking to /sponsors
  3. "Support the Club" - icon, brief text about 501(c)(3), donate button
- Cards should have dark backgrounds with subtle borders, hover effect
- Use Lucide icons: Users, Handshake, Heart
```

---

## PROMPT 6: Schedule Page

```
Build the Schedule page for Detroit Tradesman Rugby:

PAGE (/app/schedule/page.tsx):
- Page title: "2025 Season Schedule"
- Subtitle: "Division 1 & Division 3 Matches"
- Pull data from /lib/data/schedule.ts

MATCH CARDS:
- List of match cards, each showing:
  - Date (formatted nicely, e.g., "SAT MAR 15")
  - Time
  - Opponent name (prominent)
  - Location
  - Home/Away badge (different colors: blue for home, gray for away)
  - If match has a result, show the score instead of time
- Past matches should be slightly muted (lower opacity)
- Upcoming matches should be more prominent

LAYOUT:
- Single column on mobile
- Can use a timeline or card list layout
- Add visual separator between past and upcoming matches
- "All times are Eastern" note at bottom

EMPTY STATE:
- If no matches in data, show "Schedule coming soon" message
```

---

## PROMPT 7: Roster Page

```
Build the Roster page for Detroit Tradesman Rugby:

PAGE (/app/roster/page.tsx):
- Page title: "Meet the Team"
- Tab or toggle to switch between "Division 1" and "Division 3"
- Default to Division 1
- Pull data from /lib/data/roster.ts

PLAYER CARD (/components/shared/PlayerCard.tsx):
- Square aspect ratio card
- Player photo (or placeholder silhouette if no image)
- Overlay at bottom with:
  - Player name (bold)
  - Position
  - Jersey number (small badge in corner)
- Subtle hover effect (slight scale, border glow)
- Dark background for cards

GRID LAYOUT:
- 2 columns on mobile
- 3 columns on tablet
- 4 columns on desktop
- Consistent gap between cards

SECTION:
- Brief intro text: "From seasoned veterans to rising talent, the Tradesman are united by a love for the game."
- Training info callout: "Want to join us? Training every Tuesday & Thursday, 6:30-8:30 PM at Handy Park, Redford."
```

---

## PROMPT 8: Old Boys (Alumni) Page

```
Build the Old Boys page for Detroit Tradesman Rugby:

PAGE (/app/old-boys/page.tsx):
- Page title: "Old Boys — Our Legacy"
- Intro paragraph about the alumni network and what it means to be an Old Boy

HALL OF FAME SECTION:
- Heading: "Hall of Fame"
- Grid of Hall of Fame inductees (create 4-6 placeholder entries):
  {
    name: string
    years: string (e.g., "1985-1995")
    position: string
    achievement: string (brief, e.g., "5x Midwest All-Star")
    image?: string
  }
- Cards similar to roster but with more text
- Gold/amber accent color for Hall of Fame section (#d4a574 or similar)

LEGACY SECTION:
- Heading: "The Tradesman Spirit"
- Brief text about club values, brotherhood, community
- Could include a quote from a notable Old Boy (placeholder)

STAY CONNECTED:
- Callout box: "Once a Tradesman, Always a Tradesman"
- Text about staying involved, attending matches, mentoring current players
- Link to contact or join mailing list
```

---

## PROMPT 9: Join Page

```
Build the Join page for Detroit Tradesman Rugby:

PAGE (/app/join/page.tsx):
- Page title: "Join the Club"
- Welcoming intro: "Whether you're a seasoned player or completely new to rugby, you're welcome here."

TRAINING INFO (prominent section):
- Large, clear display:
  - "Training Schedule"
  - "Every Tuesday & Thursday"
  - "6:30 - 8:30 PM"
  - "Handy Park, Redford, MI"
- Icon for each (calendar, clock, map pin)
- Google Maps link for location
- "New players always welcome — no experience required!"

WHAT TO EXPECT SECTION:
- 3-4 cards or list items:
  - "All Skill Levels" - We'll teach you the game
  - "Gear Provided" - We have loaner gear for new players
  - "Fitness" - Come as you are, you'll get fit with us
  - "Community" - Join a brotherhood that lasts a lifetime

INTEREST FORM:
- Heading: "Ready to Get Started?"
- Form fields (using shadcn form components):
  - Name (required)
  - Email (required)
  - Phone (required)
  - "Tell us about yourself" (optional textarea) - experience level, how you heard about us
  - Submit button: "I'm In"
- Success state: Show thank you message, "We'll be in touch soon!"
- For now, form can just log to console (no backend)
```

---

## PROMPT 10: Sponsors Page

```
Build the Sponsors page for Detroit Tradesman Rugby:

PAGE (/app/sponsors/page.tsx):
- Page title: "Our Sponsors"
- Intro: "The Detroit Tradesman RFC is proud to partner with businesses that support our mission and community."

CURRENT SPONSORS SECTION:
- Heading: "Current Partners"
- Logo grid from sponsor data
- Larger display than the scrolling footer version
- Link to sponsor websites if available

SPONSORSHIP TIERS:
- Heading: "Partnership Opportunities"
- Three tier cards:

1. "Game Day Sponsor"
   - Icon: Calendar or Flag
   - Benefits:
     - Logo on team website
     - Social media recognition on match days
     - Perfect for local businesses

2. "Season Sponsor"  
   - Icon: Trophy or Star
   - Benefits:
     - Everything in Game Day
     - Logo on training kit or jersey
     - Recognition at home matches
     - Visibility all season long

3. "Legacy Partner"
   - Icon: Shield or Crown
   - Benefits:
     - Everything in Season Sponsor
     - Banner at home field
     - Featured on Old Boys page
     - Named sponsorship opportunities
     - Premier visibility

- Do NOT show prices (say "Contact us for details" or similar)
- Cards should have visual hierarchy (Legacy most prominent)

SPONSOR INQUIRY FORM:
- Heading: "Become a Partner"
- Fields:
  - Company Name (required)
  - Contact Name (required)
  - Email (required)
  - Phone (required)
  - Message / "Tell us about your business" (optional)
  - Submit: "Start the Conversation"
- Note below form: "The Detroit Tradesman RFC is a 501(c)(3) nonprofit organization. Your sponsorship may be tax-deductible."

- Success state after submit
```

---

## PROMPT 11: Shared Components & Polish

```
Create shared components and add polish to the Detroit Tradesman site:

SECTION HEADING (/components/shared/SectionHeading.tsx):
- Reusable component for consistent section titles
- Props: title (string), subtitle (optional string), centered (boolean, default false)
- Styling: Large text, optional accent line, proper spacing

PAGE TRANSITIONS:
- Add subtle fade-in animation for page content
- Can use Framer Motion or CSS animations

LOADING STATES:
- Create a simple loading spinner component
- Skeleton loaders for cards if needed

SCROLL TO TOP:
- Button that appears when scrolling down
- Smooth scroll to top on click
- Fixed position, bottom right

SEO:
- Update metadata in layout.tsx:
  - Title: "Detroit Tradesman RFC | Michigan's Premier Men's Rugby Club"
  - Description: "Est. 1978. From D3 development to D1 championships, we build athletes and legacies. Join Michigan's premier men's rugby club."
- Add proper meta tags for social sharing (Open Graph)

404 PAGE:
- Create /app/not-found.tsx
- Friendly message with link back to home
- Keep dark theme consistent

RESPONSIVE CHECKS:
- Ensure all pages work well on:
  - Mobile (320px - 480px)
  - Tablet (768px)
  - Desktop (1024px+)
- Test navigation, forms, and grids at all sizes
```

---

## PROMPT 12: Final Integration & Testing

```
Final integration and testing for Detroit Tradesman Rugby site:

CHECKLIST:
1. All navigation links work correctly
2. Mobile menu opens/closes properly
3. Forms validate required fields
4. All buttons have hover states
5. Images have alt text for accessibility
6. Color contrast meets accessibility standards (especially text on dark bg)
7. Logo files are in /public/images/logos/ and referenced correctly
8. No console errors

PERFORMANCE:
- Optimize images (use Next.js Image component)
- Lazy load below-fold content
- Minimize bundle size

TEST EACH PAGE:
- Home: Hero, About, Next Match, Sponsors, CTAs all render
- Schedule: Matches display correctly, dates formatted
- Roster: Both divisions show, player cards render
- Old Boys: Hall of Fame and content displays
- Join: Form submits (to console for now), training info shows
- Sponsors: Tiers display, form works

FINAL TOUCHES:
- Favicon (use logo or create simple "DT" icon)
- Smooth scrolling for anchor links
- Consistent spacing throughout (use Tailwind spacing scale)
- Typography hierarchy is clear and consistent
```

---

## Logo Files

Place the logo SVG files in:
- `/public/images/logos/detroit-tradesman-blue.svg` (for light backgrounds)
- `/public/images/logos/detroit-tradesman-white.svg` (for dark backgrounds)

The logos have been provided. Use the white version in the header and dark sections, blue version if ever needed on light backgrounds.

---

## Color Reference

```css
/* Tailwind config colors */
navy: '#1a2a4a'
navyLight: '#243656'
accent: '#3b82f6'
background: '#0d1117'
foreground: '#ffffff'
muted: '#6b7280'
gold: '#d4a574' /* Hall of Fame accent */
```

---

## Notes for Building

1. **Start with Prompt 1** to set up the project
2. **Run prompts 2-3** to get data and layout in place
3. **Build home page** (prompts 4-5) to establish the design language
4. **Then build each inner page** (prompts 6-10)
5. **Polish last** (prompts 11-12)

Each prompt is designed to be self-contained. You can adjust as you go based on what Cursor generates.

Good luck with the build! 🏉
