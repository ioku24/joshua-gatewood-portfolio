# SOP: Creating Miro-Style Portfolio Dashboards with AI

> A step-by-step guide for designing professional visual dashboards that tell the story of your projects.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [The Design Process](#the-design-process)
4. [Providing Effective Feedback](#providing-effective-feedback)
5. [Design Principles](#design-principles)
6. [Technical Specifications](#technical-specifications)
7. [Prompt Templates](#prompt-templates)
8. [Troubleshooting](#troubleshooting)

---

## Overview

This SOP documents how to collaborate with AI (Claude/Cursor) to create Miro-style visual dashboards that showcase your projects in a professional, storytelling format.

### What You'll Create
- Visual HTML dashboards that look like Miro/Figma boards
- Automatically converted to PNG for portfolio display
- Click-to-zoom functionality for detailed viewing
- Consistent, professional design language

### Time Investment
- Initial draft: 5-10 minutes
- Feedback iterations: 2-5 minutes each
- Total per dashboard: 15-30 minutes

---

## Prerequisites

Before starting, prepare the following:

### 1. Project Information Document
Create a brief with these sections:

```markdown
## Project Name
[Your project title]

## One-Line Summary
[What did you accomplish in one sentence?]

## The Problem (BEFORE)
- Pain point 1
- Pain point 2
- Pain point 3

## Your Solution (PROCESS)
- Step/Phase 1: [Description]
- Step/Phase 2: [Description]
- Step/Phase 3: [Description]

## The Results (AFTER)
- Metric 1: [Before] → [After]
- Metric 2: [Before] → [After]
- Key outcome statement

## Quote (Optional)
"[Testimonial or stakeholder quote]"
— [Name], [Title]

## Timeline
[How long did it take?]
```

### 2. Reference Materials (Optional)
- Screenshots of existing Miro boards
- Color preferences
- Specific layout references

---

## The Design Process

### Phase 1: Initial Request

**Step 1.1: Share Your Project Brief**

Start with a clear request:

```
I need to create a Miro-style dashboard for my portfolio. Here's the project:

[Paste your project brief]

Please create an HTML dashboard with:
- A clear BEFORE → PROCESS → AFTER flow
- Key metrics at the top
- Visual hierarchy that tells the story
```

**Step 1.2: AI Creates First Draft**

The AI will:
1. Generate an HTML file with embedded CSS
2. Save it to `/public/assets/[project-name].html`
3. Convert it to PNG using Chrome headless
4. Update your `data/projects.ts` to reference it

**Step 1.3: Review Locally**

```bash
# Start local server (if not running)
npm run dev

# View at:
http://localhost:5173/work/[project-slug]
```

---

### Phase 2: Design Iteration

**Step 2.1: Take a Screenshot**

When reviewing, if something needs adjustment:
1. Take a screenshot of the current state
2. Annotate with arrows/text showing what needs to change
3. Share with the AI

**Step 2.2: Provide Specific Feedback**

Use this format for feedback:

```
Here's my design feedback:
- [Element]: [What's wrong] → [What you want instead]
- [Element]: [What's wrong] → [What you want instead]

Example:
- Title: Too long → Shorten to just "Project Name"
- Right column: Content is cut off → Make sure everything fits
- Bottom section: Too much white space → Bring elements closer together
```

**Step 2.3: AI Implements Changes**

The AI will:
1. Update the HTML file
2. Regenerate the PNG
3. Ask you to refresh and review

**Step 2.4: Repeat Until Satisfied**

Typical iterations: 2-4 rounds

---

### Phase 3: Final Approval & Deploy

**Step 3.1: Final Review**

Checklist before deploying:
- [ ] All text is readable and not cut off
- [ ] Layout is balanced (no large empty spaces)
- [ ] Colors are consistent
- [ ] Story flows logically: Problem → Solution → Results
- [ ] Metrics are prominent and clear
- [ ] Click-to-zoom works properly

**Step 3.2: Deploy**

Once approved:
```
Looks good! Deploy now.
```

The AI will:
1. Build the project
2. Commit changes to git
3. Push to deploy

---

## Providing Effective Feedback

### ✅ Good Feedback Examples

```
"The Update System section on the right is cut off. Make sure it's fully visible."

"Move the quote box to the left side, underneath the Pain Points section."

"Too much white space between the main content and the bottom section. Tighten it up."

"Change the title from 'Master Alumni Database: From Chaos to Community' to just 'Master Alumni Database'"
```

### ❌ Avoid Vague Feedback

```
"It doesn't look right" → Instead: "The right column content is cut off at the bottom"

"Make it better" → Instead: "Add more contrast between sections with borders or background colors"

"I don't like the layout" → Instead: "Move the phases to be side-by-side instead of stacked vertically"
```

### 📸 Visual Feedback is Best

When possible:
1. Screenshot the current state
2. Draw arrows pointing to problem areas
3. Add text annotations describing the change
4. Share the annotated image

---

## Design Principles

### 1. The Three-Column Story Structure

```
┌─────────────┬─────────────┬─────────────┐
│  THE CHAOS  │  THE SYSTEM │  THE VICTORY│
│  (Before)   │  (Process)  │   (After)   │
│             │             │             │
│  Problems   │   Steps     │   Results   │
│  Pain Points│   Phases    │   Metrics   │
│  Challenges │   Methods   │   Outcomes  │
└─────────────┴─────────────┴─────────────┘
```

### 2. Visual Hierarchy

**Top Level (Largest)**
- Dashboard title
- Key metrics row

**Middle Level**
- Section headers (THE CHAOS, THE SYSTEM, THE VICTORY)
- Main content cards

**Bottom Level (Smallest)**
- Supporting details
- Captions
- Timestamps

### 3. Color Coding

| Element | Color | Hex |
|---------|-------|-----|
| Problems/Chaos | Red/Orange | `#fee2e2`, `#fed7aa` |
| Process/System | Blue | `#dbeafe` |
| Results/Victory | Green | `#d1fae5` |
| Highlights | Purple | `#e9d5ff` |
| Neutral | Yellow | `#fef3c7` |

### 4. Spacing Rules

- Consistent gaps between elements (8px, 12px, or 16px)
- Adequate padding inside cards (12-16px)
- No large empty spaces
- Content should "breathe" but not float

### 5. Typography

- **Titles**: Bold, 24-32px
- **Section Headers**: Bold, 16-20px
- **Body Text**: Regular, 11-13px
- **Labels/Captions**: 9-11px

---

## Technical Specifications

### File Structure

```
public/
└── assets/
    ├── [project-name].html    # Source HTML dashboard
    └── [project-name].png     # Generated screenshot

data/
└── projects.ts                # References the PNG
```

### HTML Template Structure

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Embedded CSS for self-contained file */
  </style>
</head>
<body>
  <div class="miro-board">
    <!-- Title Section -->
    <!-- Metrics Row -->
    <!-- Main 3-Column Grid -->
    <!-- Bottom Section -->
  </div>
</body>
</html>
```

### PNG Generation

The AI uses Chrome headless to capture:
```bash
chrome --headless --screenshot="output.png" --window-size=1550,930 "file://input.html"
```

Recommended dimensions:
- Width: 1500-1600px
- Height: 850-1000px (varies by content)

### Project Data Entry

```typescript
// In data/projects.ts
{
  title: 'Project Dashboard Title',
  type: 'image',
  url: '/assets/project-name.png',
  caption: 'One-line description of what this shows',
  challenge: "• Bullet point 1\n• Bullet point 2",
  solution: "• Step 1\n• Step 2",
  outcome: 'Key result statement'
}
```

---

## Prompt Templates

### Template 1: New Dashboard from Scratch

```
Create a Miro-style dashboard for my portfolio project:

**Project:** [Name]
**Summary:** [One sentence]

**THE PROBLEM:**
- [Pain point 1]
- [Pain point 2]
- [Pain point 3]

**THE SOLUTION:**
1. [Phase 1]: [Description]
2. [Phase 2]: [Description]
3. [Phase 3]: [Description]

**THE RESULTS:**
- [Metric]: [Before] → [After]
- [Metric]: [Before] → [After]

**Quote:** "[Testimonial]" — [Name, Title]

**Timeline:** [Duration]

Design it with:
- Clean 3-column layout (Chaos → System → Victory)
- Metrics bar at top
- Professional color coding
- Everything fitting without cutoff
```

### Template 2: Iterate on Existing Design

```
Here's my feedback on the dashboard:

1. [Specific element]: [Current state] → [Desired state]
2. [Specific element]: [Current state] → [Desired state]
3. [Specific element]: [Current state] → [Desired state]

Please update and regenerate the PNG. I'll review locally before deploying.
```

### Template 3: Quick Fixes

```
Quick fixes needed:
- [Fix 1]
- [Fix 2]

Regenerate and let me know when ready to review.
```

---

## Troubleshooting

### Issue: Content is Cut Off

**Cause:** Fixed dimensions don't fit all content

**Solution:**
```
"The [section] is cut off. Please adjust the layout to ensure all content is visible. 
You may need to:
- Reduce font sizes slightly
- Adjust column widths
- Increase overall board height"
```

### Issue: Too Much White Space

**Cause:** Absolute positioning with gaps

**Solution:**
```
"There's too much white space between [section A] and [section B]. 
Please use CSS Grid or Flexbox to create a tighter, more cohesive layout."
```

### Issue: Elements Overlapping

**Cause:** Conflicting absolute positions

**Solution:**
```
"[Element A] is overlapping with [Element B]. Please adjust positions so nothing 
overlaps and there's proper spacing between elements."
```

### Issue: PNG Not Updating

**Cause:** Browser cache

**Solution:**
1. Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
2. Or open in incognito window

### Issue: Colors Look Wrong

**Cause:** Color accessibility or contrast

**Solution:**
```
"The [element] color doesn't have enough contrast. Please use a darker/lighter 
shade to improve readability."
```

---

## Quick Reference Card

```
┌────────────────────────────────────────────────────────┐
│           MIRO DASHBOARD DESIGN CHECKLIST              │
├────────────────────────────────────────────────────────┤
│ □ Clear title (short, descriptive)                     │
│ □ Metrics bar at top (3-4 key numbers)                 │
│ □ Three-column flow (Chaos → System → Victory)         │
│ □ Color-coded sections (red, blue, green)              │
│ □ No content cut off                                   │
│ □ Minimal white space                                  │
│ □ Readable text sizes                                  │
│ □ Quote or testimonial included                        │
│ □ Timeline/duration shown                              │
│ □ Click-to-zoom works                                  │
└────────────────────────────────────────────────────────┘
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2024 | Initial SOP created |

---

*This SOP was created to standardize the process of designing portfolio dashboards. Follow these guidelines for consistent, professional results.*
