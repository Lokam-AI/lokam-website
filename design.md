# Lokam Landing Page — Design System

Extracted from Figma: `zaY8tsCteUtACyHZc9LlsF`  
Stack: Next.js + Tailwind v4 (`@import "tailwindcss"` / `@theme inline`)

---

## Colors

### Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-brand` | `#00B4A4` | Primary CTA, links, icons, highlights |
| `--color-brand-dark` | `#009B8D` | Hover state on brand elements |
| `--color-brand-muted` | `rgba(0,180,164,0.12)` | Badge backgrounds, tinted surfaces |
| `--color-bg-base` | `#0A0A0F` | Page background (dark hero, footer) |
| `--color-bg-surface` | `#111520` | Card backgrounds on dark sections |
| `--color-bg-light` | `#FFFFFF` | Light section backgrounds |
| `--color-bg-subtle` | `#F5F7FA` | Alternate light section tint |
| `--color-text-primary` | `#FFFFFF` | Headings on dark |
| `--color-text-body` | `#E2E8F0` | Body copy on dark |
| `--color-text-muted` | `#94A3B8` | Secondary/supporting text |
| `--color-text-dark` | `#0F172A` | Headings on light sections |
| `--color-text-dark-body` | `#374151` | Body copy on light sections |
| `--color-border` | `rgba(255,255,255,0.08)` | Borders on dark surfaces |
| `--color-border-light` | `#E5E7EB` | Borders on light surfaces |
| `--color-divider` | `rgba(255,255,255,0.06)` | Subtle separators (e.g. table rows) |

### Semantic mapping (Tailwind `@theme inline`)

```css
@theme inline {
  --color-brand:        #00B4A4;
  --color-brand-dark:   #009B8D;
  --color-brand-muted:  rgba(0, 180, 164, 0.12);

  /* Backgrounds */
  --color-bg-base:      #0A0A0F;
  --color-bg-surface:   #111520;
  --color-bg-light:     #FFFFFF;
  --color-bg-subtle:    #F5F7FA;

  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-body:    #E2E8F0;
  --color-text-muted:   #94A3B8;
  --color-text-dark:    #0F172A;
  --color-text-dark-body: #374151;

  /* Borders */
  --color-border:       rgba(255, 255, 255, 0.08);
  --color-border-light: #E5E7EB;
  --color-divider:      rgba(255, 255, 255, 0.06);
}
```

---

## Typography

### Font Family

| Role | Family | Tailwind |
|------|--------|---------|
| Primary (headings + body) | `Inter` | `font-sans` |
| Monospace (code/data) | `Geist Mono` | `font-mono` |

Add to `globals.css`:
```css
@theme inline {
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
}
```

### Type Scale

Maps to Tailwind's default scale. Use `font-sans` throughout.

| Role | Size | Line Height | Weight | Tailwind classes |
|------|------|-------------|--------|-----------------|
| Display / H1 | 64px | 1.1 | 700 | `text-6xl font-bold leading-tight` |
| H2 / Section title | 48px | 1.15 | 700 | `text-5xl font-bold leading-tight` |
| H3 / Card title | 32px | 1.25 | 600 | `text-3xl font-semibold` |
| H4 / Feature label | 20px | 1.4 | 600 | `text-xl font-semibold` |
| Body large | 18px | 1.6 | 400 | `text-lg leading-relaxed` |
| Body base | 16px | 1.6 | 400 | `text-base leading-relaxed` |
| Body small | 14px | 1.5 | 400 | `text-sm` |
| Caption / Legal | 12px | 1.5 | 400 | `text-xs` |
| Nav link | 15px | — | 500 | `text-[15px] font-medium` |
| CTA button | 15px | — | 600 | `text-[15px] font-semibold` |
| Badge / Label | 12px | — | 600 | `text-xs font-semibold tracking-wide uppercase` |

### Letter spacing

- Headings: default (`tracking-normal`) or slightly tight (`tracking-tight` at display sizes)
- Badges/labels: `tracking-widest` (0.1em)
- Body: default

---

## Spacing System

8px base grid. All spacing values are multiples of 8.

| Token | Value | Tailwind |
|-------|-------|---------|
| `space-1` | 4px | `p-1`, `gap-1` |
| `space-2` | 8px | `p-2`, `gap-2` |
| `space-3` | 12px | `p-3`, `gap-3` |
| `space-4` | 16px | `p-4`, `gap-4` |
| `space-6` | 24px | `p-6`, `gap-6` |
| `space-8` | 32px | `p-8`, `gap-8` |
| `space-10` | 40px | `p-10`, `gap-10` |
| `space-12` | 48px | `p-12`, `gap-12` |
| `space-16` | 64px | `p-16`, `gap-16` |
| `space-20` | 80px | `py-20` (section top/bottom) |
| `space-24` | 96px | `py-24` (hero padding) |
| `space-30` | 120px | `px-[120px]` (container side padding at 1440) |

### Section vertical rhythm

| Section type | Padding |
|-------------|---------|
| Hero | `py-24` (96px) |
| Standard section | `py-20` (80px) |
| Compact section | `py-12` (48px) |
| Footer | `py-16` (64px) |

### Component internal spacing

| Component | Padding |
|-----------|---------|
| Card | `p-6` (24px) |
| Button (md) | `px-6 py-3` |
| Button (lg) | `px-8 py-4` |
| Input | `px-4 py-3` |
| Badge | `px-3 py-1` |
| Nav bar | `px-[120px] py-5` |

---

## Layout

### Container

```css
/* Max content width: 1188px inside 1430px canvas */
.container {
  max-width: 1188px;   /* ~74rem */
  margin-inline: auto;
  padding-inline: 120px; /* collapses on smaller screens */
}
```

Tailwind:
```html
<div class="max-w-[1188px] mx-auto px-[120px] lg:px-16 md:px-8 px-4">
```

### Breakpoints (Tailwind defaults, all apply)

| Name | Min width | Use |
|------|-----------|-----|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Small desktop |
| `xl` | 1280px | Standard desktop |
| `2xl` | 1536px | Wide desktop |

### Grid patterns

- **2-column feature split**: `grid grid-cols-1 lg:grid-cols-2 gap-16`
- **3-column feature cards**: `grid grid-cols-1 md:grid-cols-3 gap-8`
- **4-column footer**: `grid grid-cols-2 md:grid-cols-4 gap-8`
- **Full-bleed section with centered content**: `flex flex-col items-center text-center max-w-[656px] mx-auto`

---

## Border Radius

| Token | Value | Tailwind | Use |
|-------|-------|---------|-----|
| `rounded-sm` | 4px | `rounded` | Badges, tags |
| `rounded-md` | 8px | `rounded-lg` | Buttons, inputs |
| `rounded-lg` | 12px | `rounded-xl` | Cards |
| `rounded-xl` | 16px | `rounded-2xl` | Image containers, feature cards |
| `rounded-2xl` | 24px | `rounded-3xl` | Hero card, large modal |
| `rounded-full` | 9999px | `rounded-full` | Pill buttons, avatar, icon badges |

---

## Shadows

| Token | Value | Tailwind | Use |
|-------|-------|---------|-----|
| `shadow-card` | `0 1px 3px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)` | `shadow-md` | Light section cards |
| `shadow-card-dark` | `0 2px 8px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.24)` | `shadow-xl` | Dark section cards |
| `shadow-brand` | `0 4px 24px rgba(0,180,164,0.24)` | custom | Brand-colored glow on CTA buttons |
| `shadow-inset` | `inset 0 1px 0 rgba(255,255,255,0.06)` | custom | Top highlight on dark surfaces |

Add to `globals.css`:
```css
@theme inline {
  --shadow-brand: 0 4px 24px rgba(0, 180, 164, 0.24);
  --shadow-card:  0 1px 3px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08);
}
```

---

## Component Patterns

### Button

```html
<!-- Primary (brand) -->
<button class="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg text-[15px] font-semibold hover:bg-brand-dark transition-colors shadow-[var(--shadow-brand)]">
  Get Started
</button>

<!-- Secondary / outline (on dark) -->
<button class="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg text-[15px] font-semibold hover:bg-white/8 transition-colors">
  Learn More
</button>

<!-- Ghost (on light) -->
<button class="inline-flex items-center gap-2 text-brand px-6 py-3 rounded-lg text-[15px] font-semibold hover:bg-brand-muted transition-colors">
  View Demo
</button>
```

### Badge / Label

```html
<span class="inline-flex items-center gap-1.5 bg-brand-muted text-brand px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
  New
</span>
```

### Card (dark surface)

```html
<div class="bg-bg-surface border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 shadow-xl">
  <!-- content -->
</div>
```

### Card (light surface)

```html
<div class="bg-white border border-border-light rounded-2xl p-6 shadow-card">
  <!-- content -->
</div>
```

### Input / Form field

```html
<input
  class="w-full bg-bg-surface border border-[rgba(255,255,255,0.12)] text-text-body placeholder:text-text-muted rounded-lg px-4 py-3 text-base outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
  placeholder="Your email"
/>
```

### Section divider (horizontal rule)

```html
<hr class="border-0 border-t border-[rgba(255,255,255,0.06)]" />
```

### Stat / metric callout

```html
<div class="flex flex-col gap-1">
  <span class="text-4xl font-bold text-brand">94%</span>
  <span class="text-sm text-text-muted">Customer satisfaction</span>
</div>
```

### Feature list item (with vertical connector line)

```html
<div class="relative flex gap-4 pl-6 before:absolute before:left-2 before:top-6 before:bottom-0 before:w-px before:bg-white/10">
  <div class="w-4 h-4 mt-1 rounded-full bg-brand shrink-0" />
  <div>
    <h4 class="text-xl font-semibold text-text-primary">Immediate Outreach</h4>
    <p class="text-text-muted mt-1 text-base leading-relaxed">Lokam's AI calls every customer within 24 hours post-service.</p>
  </div>
</div>
```

---

## Interaction States

### Hover
- Buttons: darken by ~10% (`hover:bg-brand-dark`) or lighten bg for ghost
- Cards: subtle lift `hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200`
- Nav links: color to `text-brand`
- Table rows: `hover:bg-white/4`

### Focus
- All interactive elements: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base`

### Active
- Buttons: scale down slightly `active:scale-[0.98]`

### Disabled
- `opacity-40 cursor-not-allowed pointer-events-none`

### Transition defaults
```css
/* Use on most interactive elements */
transition-colors duration-150 ease-in-out
transition-all duration-200 ease-in-out   /* for transforms */
```

---

## Section Structure Reference

| Section | Background | Layout |
|---------|-----------|--------|
| Nav | `bg-bg-base/90 backdrop-blur` | Sticky, full-width |
| Hero | `bg-bg-base` | Centered, `py-24` |
| Logo cloud | `bg-bg-base` | Centered logos row |
| How It Works | `bg-bg-light` | 2-col split |
| Feature bullets | `bg-bg-light` | Vertical list with connector lines |
| Testimonial | `bg-bg-base` | Centered, quote card |
| Comparison table | `bg-bg-subtle` | Full-width table |
| Contact / CTA | `bg-bg-base` | 2-col (form + image) |
| Footer | `bg-bg-base` | 4-col grid + bottom bar |

---

## Tailwind `globals.css` Starter

```css
@import "tailwindcss";

@theme inline {
  /* Fonts */
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, monospace;

  /* Brand */
  --color-brand:        #00B4A4;
  --color-brand-dark:   #009B8D;
  --color-brand-muted:  rgba(0, 180, 164, 0.12);

  /* Backgrounds */
  --color-bg-base:      #0A0A0F;
  --color-bg-surface:   #111520;
  --color-bg-light:     #FFFFFF;
  --color-bg-subtle:    #F5F7FA;

  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-body:    #E2E8F0;
  --color-text-muted:   #94A3B8;
  --color-text-dark:    #0F172A;
  --color-text-dark-body: #374151;

  /* Borders */
  --color-border:       rgba(255, 255, 255, 0.08);
  --color-border-light: #E5E7EB;
  --color-divider:      rgba(255, 255, 255, 0.06);

  /* Shadows */
  --shadow-brand: 0 4px 24px rgba(0, 180, 164, 0.24);
  --shadow-card:  0 1px 3px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08);
}

body {
  background: var(--color-bg-base);
  color: var(--color-text-body);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}
```
