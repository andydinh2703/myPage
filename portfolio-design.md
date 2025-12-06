# Andy's Portfolio Design System

Complete design specifications for building the portfolio in Figma and SvelteKit + Tailwind CSS.

---

## Color Palette

### Primary Colors
| Color Name | Hex Code | Tailwind Class | Usage |
|------------|----------|----------------|-------|
| Background | `#F5F1E8` | `bg-[#F5F1E8]` | Main page background, card backgrounds |
| White | `#FFFFFF` | `bg-white` | Section backgrounds, cards |
| Primary Text | `#1F2937` | `text-gray-900` | Headings, primary content |
| Secondary Text | `#4B5563` | `text-gray-600` | Descriptors, body text |
| Accent Orange | `#D97946` | `bg-[#D97946]` or `text-[#D97946]` | Links, buttons, underlines, hover states |
| Light Gray | `#E5E7EB` | `bg-gray-200` | Placeholder backgrounds, borders |
| Border Gray | `#D1D5DB` | `border-gray-300` | Dividers, borders |
| Muted Text | `#9CA3AF` | `text-gray-400` | Icons, less important text |

### Usage Guidelines
- **Background**: Use `#F5F1E8` for warmth and reduced eye strain
- **Accent Orange**: Reserve for interactive elements and important highlights
- **Text Hierarchy**: Gray-900 → Gray-600 → Gray-400 for decreasing importance

---

## Typography

### Font Families
```css
Primary Font: 'Inter', sans-serif
Monospace Font: 'JetBrains Mono', monospace
```

**Import (Google Fonts):**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Font Sizes & Scale

| Element | Mobile Size | Desktop Size | Tailwind Class | Line Height |
|---------|-------------|--------------|----------------|-------------|
| Hero Name | 60px (3.75rem) | 96px (6rem) | `text-6xl lg:text-8xl` | 1 |
| Section Heading | 30px (1.875rem) | 36px (2.25rem) | `text-3xl lg:text-4xl` | 1.1 |
| Subsection Heading | 20px (1.25rem) | 24px (1.5rem) | `text-xl lg:text-2xl` | 1.2 |
| Card Title | 18px (1.125rem) | 20px (1.25rem) | `text-lg lg:text-xl` | 1.3 |
| Descriptor Text | 18px (1.125rem) | 20px (1.25rem) | `text-lg lg:text-xl` | 1.5 |
| Body Text | 16px (1rem) | 16px (1rem) | `text-base` | 1.6 |
| Small/Meta Text | 14px (0.875rem) | 14px (0.875rem) | `text-sm` | 1.5 |

### Font Weights

| Weight | Value | Tailwind Class | Usage |
|--------|-------|----------------|-------|
| Regular | 400 | `font-normal` | Body text, descriptions |
| Semibold | 600 | `font-semibold` | Links, emphasized text |
| Bold | 700 | `font-bold` | Card titles, section headings |
| Extrabold | 800 | `font-extrabold` | Hero name |

### Typography Usage

**Hero Name:**
```
Font: Inter Extrabold
Size: 60px → 96px
Color: Gray-900
Letter spacing: -0.02em (tight)
```

**Descriptors (CS + Data Analytics, etc.):**
```
Font: JetBrains Mono Regular
Size: 18px → 20px
Color: Gray-600
Line height: 1.5
```

**Section Headings:**
```
Font: Inter Bold
Size: 30px → 36px
Color: Gray-900
```

**Body Text:**
```
Font: Inter Regular
Size: 16px
Color: Gray-600
Line height: 1.6 (relaxed)
```

---

## Spacing System

Based on Tailwind's 4px base unit (`0.25rem = 4px`)

### Spacing Scale
| Size | Pixels | Rem | Tailwind Class |
|------|--------|-----|----------------|
| 0.5 | 2px | 0.125rem | `0.5` |
| 1 | 4px | 0.25rem | `1` |
| 2 | 8px | 0.5rem | `2` |
| 3 | 12px | 0.75rem | `3` |
| 4 | 16px | 1rem | `4` |
| 6 | 24px | 1.5rem | `6` |
| 8 | 32px | 2rem | `8` |
| 12 | 48px | 3rem | `12` |
| 16 | 64px | 4rem | `16` |
| 20 | 80px | 5rem | `20` |
| 24 | 96px | 6rem | `24` |

### Spacing Applications

**Section Padding (Vertical):**
- Mobile: `py-16` (64px)
- Desktop: `py-24` (96px)

**Section Padding (Horizontal):**
- All sizes: `px-6` (24px)

**Container Max Width:**
- Small content: `max-w-4xl` (896px)
- Regular content: `max-w-6xl` (1152px)
- Wide content: `max-w-7xl` (1280px)

**Element Spacing:**
- Between stacked elements: `space-y-4` (16px)
- Between grid cards: `gap-8` (32px)
- Hero elements spacing: `mb-6` (24px), `mt-8` (32px)

**Card Internal Padding:**
- Card padding: `p-6` (24px) or `p-8` (32px) for larger cards

**Margins:**
- Section title to content: `mb-12` (48px)
- Paragraph spacing: `mb-4` (16px) or `mb-6` (24px)

---

## Layout & Grid

### Breakpoints
| Breakpoint | Min Width | Tailwind Prefix | Usage |
|------------|-----------|-----------------|-------|
| Mobile | 0px | (default) | Mobile-first base styles |
| Tablet | 768px | `md:` | Tablet and small desktop |
| Desktop | 1024px | `lg:` | Large desktop |
| Wide | 1280px | `xl:` | Extra wide screens |

### Grid Systems

**Blog/Project Cards Grid:**
```
Mobile: 1 column (default)
Tablet: 2 columns (md:grid-cols-2)
Desktop: 3 columns (md:grid-cols-3)
Gap: gap-8 (32px)
```

**Featured Project (2-column layout):**
```
Mobile: 1 column (stack)
Desktop: 2 columns (md:grid-cols-2)
Gap: gap-0 (no gap, seamless)
```

### Container Structure
```
<div class="max-w-6xl mx-auto px-6">
  <!-- Content -->
</div>
```
- Centers content
- Adds horizontal padding
- Constrains max width

---

## Components

### Navigation Bar

**Dimensions:**
- Height: Auto (based on padding)
- Padding: `py-4 px-6` (16px vertical, 24px horizontal)

**Styling:**
```
Background: bg-[#F5F1E8]/80 (80% opacity)
Backdrop: backdrop-blur-sm
Border: border-b border-gray-200
Position: fixed top-0 left-0 right-0
Z-index: z-50
```

**Logo:**
```
Font: JetBrains Mono Bold
Size: text-xl (20px)
Color: text-gray-900
```

**Nav Links:**
```
Font: Inter Regular
Size: text-base (16px)
Color: text-gray-600
Hover: text-[#D97946]
Gap: gap-8 (32px between links)
```

---

### Hero Section

**Container:**
```
Min height: min-h-screen
Alignment: flex items-center justify-center
Padding: px-6 pt-20
Max width: max-w-4xl
Text align: text-center
```

**Name (H1):**
```
Size: text-6xl lg:text-8xl
Weight: font-extrabold
Color: text-gray-900
Margin bottom: mb-6
```

**Accent Underline:**
```
Width: 96px
Height: 3px
Background: #D97946
Margin: 1rem auto (center aligned)
```

**Descriptors:**
```
Font: JetBrains Mono
Size: text-lg lg:text-xl
Color: text-gray-600
Spacing: space-y-3 (12px between lines)
Margin top: mt-8
```

**Social Icons:**
```
Container margin top: mt-12
Icon container size: w-12 h-12 (48px)
Border radius: rounded-full
Background: bg-gray-900
Icon color: text-[#F5F1E8]
Hover: hover:bg-[#D97946]
Gap between icons: gap-6 (24px)
Icon size: w-5 h-5 (20px)
```

**Scroll Indicator:**
```
Margin top: mt-20
Icon size: w-6 h-6 (24px)
Color: text-gray-400
Animation: animate-bounce
```

---

### Card Component (Projects & Blog)

**Container:**
```
Background: bg-white or bg-[#F5F1E8]
Border radius: rounded-2xl (16px)
Shadow: shadow-lg
Hover shadow: hover:shadow-2xl
Transition: transition-shadow
```

**Image Placeholder:**
```
Height: h-48 (192px) or h-64 (256px)
Background: bg-gray-200
Icon size: w-16 h-16 or w-20 h-20
Icon color: text-gray-400
```

**Content Padding:**
```
Padding: p-6 (24px) or p-8 (32px)
```

**Meta Text (Date):**
```
Font: JetBrains Mono
Size: text-sm (14px)
Color: text-gray-500
Margin bottom: mb-2
```

**Card Title:**
```
Size: text-xl (20px) or text-3xl (30px for featured)
Weight: font-bold
Color: text-gray-900
Margin bottom: mb-3 or mb-4
```

**Card Description:**
```
Size: text-base (16px)
Color: text-gray-600
Line height: leading-relaxed (1.625)
Margin bottom: mb-4 or mb-6
```

**Tags/Tech Stack:**
```
Container: flex flex-wrap gap-2
Tag padding: px-3 py-1
Tag background: bg-white
Tag text: text-gray-700
Tag border radius: rounded-full
Tag font: text-sm mono
```

**Link/CTA:**
```
Color: text-[#D97946]
Weight: font-semibold
Hover: hover:underline
```

---

### Buttons

**Primary Button:**
```
Padding: px-8 py-3
Background: bg-[#D97946]
Text color: text-white
Border radius: rounded-full
Font weight: font-semibold
Font size: text-base or text-lg
Hover: hover:bg-gray-900
Transition: transition-colors
```

**Secondary Button:**
```
Padding: px-8 py-3
Background: bg-gray-900
Text color: text-[#F5F1E8]
Border radius: rounded-full
Font weight: font-semibold
Hover: hover:bg-[#D97946]
Transition: transition-colors
```

---

### Footer

**Container:**
```
Padding: py-12 px-6
Background: bg-[#F5F1E8]
Border: border-t border-gray-200
```

**Content Layout:**
```
Max width: max-w-6xl mx-auto
Flex: flex-col md:flex-row
Justify: justify-between items-center
Gap: gap-6
```

**Copyright Text:**
```
Font: JetBrains Mono
Size: text-sm (14px)
Color: text-gray-600
```

**Footer Links:**
```
Size: text-base (16px)
Color: text-gray-600
Hover: hover:text-[#D97946]
Gap: gap-6 (24px)
Transition: transition-colors
```

---

## Shadows

| Name | Tailwind Class | CSS Value | Usage |
|------|----------------|-----------|-------|
| Default | `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | Cards default state |
| Hover | `shadow-2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | Cards on hover |

---

## Border Radius

| Size | Pixels | Tailwind Class | Usage |
|------|--------|----------------|-------|
| Small | 4px | `rounded` | Small elements |
| Medium | 8px | `rounded-lg` | Buttons, small cards |
| Large | 16px | `rounded-2xl` | Large cards, sections |
| Full | 9999px | `rounded-full` | Circles, pills (buttons, tags) |

---

## Transitions

**Default Transition:**
```
Duration: 200ms
Easing: ease-in-out
Properties: colors, background-color, shadow
```

**Tailwind Classes:**
- `transition-colors` - For color changes
- `transition-shadow` - For shadow changes
- `transition-all` - For multiple properties

---

## Responsive Behavior

### Mobile First Approach
1. Design for mobile (375px) first
2. Add `md:` breakpoint adjustments for tablet (768px+)
3. Add `lg:` breakpoint adjustments for desktop (1024px+)

### Key Responsive Changes

**Navigation:**
- Mobile: Hamburger menu
- Desktop: Full nav links visible

**Typography:**
- Mobile: Smaller font sizes
- Desktop: Scale up hero and headings

**Grid:**
- Mobile: Single column (stack)
- Tablet: 2 columns
- Desktop: 3 columns

**Spacing:**
- Mobile: Reduced padding (py-16)
- Desktop: Increased padding (py-24)

**Hero Social Icons:**
- All sizes: Same size (centered)
- Touch-friendly minimum: 44x44px (48px used for comfort)

---

## Accessibility Considerations

### Color Contrast
- Gray-900 on #F5F1E8: Passes WCAG AA
- Gray-600 on white: Passes WCAG AA
- Orange (#D97946) on white: Passes WCAG AA for large text

### Touch Targets
- Minimum size: 44x44px (WCAG 2.1 Level AAA)
- Used: 48x48px for all interactive elements

### Focus States
Add focus rings to all interactive elements:
```
focus:outline-none focus:ring-2 focus:ring-[#D97946] focus:ring-offset-2
```

---

## Animation

**Scroll Indicator Bounce:**
```
Animation: animate-bounce (Tailwind built-in)
```

**Hover Transitions:**
- Duration: 200ms
- Properties: color, background-color, shadow
- Easing: ease-in-out (default)

---

## Z-Index Scale

| Element | Z-Index | Tailwind Class |
|---------|---------|----------------|
| Base content | 0 | `z-0` |
| Elevated cards | 10 | `z-10` |
| Fixed navigation | 50 | `z-50` |

---

## File Organization for SvelteKit

Suggested component structure:
```
src/
├── routes/
│   ├── +page.svelte (Homepage)
│   ├── projects/
│   │   └── +page.svelte
│   └── training/
│       ├── +page.svelte
│       └── [slug]/
│           └── +page.svelte
├── lib/
│   └── components/
│       ├── Nav.svelte
│       ├── Hero.svelte
│       ├── ProjectCard.svelte
│       ├── BlogCard.svelte
│       ├── Button.svelte
│       └── Footer.svelte
└── app.css (Tailwind imports)
```

---

## Figma Setup Instructions

1. **Create Frames:**
   - Desktop: 1440 x 1024 (scrollable)
   - Tablet: 768 x 1024 (scrollable)
   - Mobile: 375 x 812 (scrollable)

2. **Setup Color Styles:**
   - Add all colors from palette as local styles
   - Name them clearly (e.g., "Background/Warm", "Text/Primary")

3. **Setup Text Styles:**
   - Create text styles for each typography size
   - Include font family, size, weight, line height
   - Name using hierarchy (e.g., "Heading/Hero", "Body/Regular")

4. **Create Components:**
   - Nav bar (with variants: desktop/mobile)
   - Project card
   - Blog card
   - Button (with variants: primary/secondary)
   - Footer
   - Social icon button

5. **Use Auto Layout:**
   - Enable auto layout for all components
   - Set proper spacing and padding
   - Makes responsive design easier

6. **Export Assets:**
   - Logo at 1x, 2x, 3x for retina displays
   - Icons as SVGs
   - Placeholder images as needed

---

## Notes

- All measurements use rem units based on 16px base
- Mobile-first approach throughout
- Consistent spacing using 4px grid
- Limited color palette for cohesion
- Monospace font used sparingly for technical feel
- Orange accent used strategically for calls-to-action

---

**Last Updated:** December 1, 2025
**Version:** 1.0
