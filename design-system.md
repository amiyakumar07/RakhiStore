---
name: RakhiAura
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1c'
  on-surface-variant: '#5b403d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8f706c'
  outline-variant: '#e4beba'
  surface-tint: '#b91d20'
  primary: '#a20513'
  on-primary: '#ffffff'
  primary-container: '#c62828'
  on-primary-container: '#ffe0dd'
  inverse-primary: '#ffb4ac'
  secondary: '#7a5900'
  on-secondary: '#ffffff'
  secondary-container: '#fdbc13'
  on-secondary-container: '#6b4d00'
  tertiary: '#8f2d2b'
  on-tertiary: '#ffffff'
  tertiary-container: '#af4440'
  on-tertiary-container: '#ffe0dd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#93000e'
  secondary-fixed: '#ffdea3'
  secondary-fixed-dim: '#fdbc13'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#832423'
  background: '#fcf9f8'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  button-text:
    fontFamily: Poppins
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.03em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system embodies the intersection of timeless Indian heritage and contemporary luxury. It targets a discerning audience seeking premium festive products with an experience that feels curated, airy, and sophisticated. 

The visual style is **Modern Minimalist Luxury**. It avoids the clutter often associated with festive retail, instead utilizing expansive whitespace and high-end editorial layouts. The emotional response is one of warmth, exclusivity, and calm. Key influences include high-end skincare boutiques and premium lifestyle brands, characterized by soft tactile surfaces, subtle glassmorphic overlays for depth, and a refined use of gold accents to signal quality without being ostentatious.

## Colors

The palette is rooted in traditional festive hues but executed with modern restraint. 

- **Primary & Accent:** Royal Red and Maroon provide the "Rakhi" heartbeat, used for high-intent actions and brand-defining moments.
- **Lustre & Highlight:** Saffron and Luxury Gold are reserved for premium indicators, badges, and subtle decorative elements.
- **Foundation:** Warm Cream replaces pure white for the global background to provide a softer, more "premium paper" feel, while Pure White is used exclusively for interactive cards to make them "float."
- **Typography:** Dark Charcoal ensures high legibility against the warm background, while a softer grey (#666666) handles meta-information and secondary labels.

## Typography

The typographic hierarchy relies on a high-contrast pairing between an elegant serif and a systematic sans-serif.

- **Headlines:** Playfair Display is used for product titles and section headers to evoke a sense of tradition and luxury. Use "Display" sizing for hero sections with tight letter-spacing.
- **Body:** Inter provides a clean, neutral balance to the serif headers, ensuring product descriptions and technical details are easy to digest.
- **CTAs:** Poppins (SemiBold) is utilized for buttons and interactive labels, chosen for its geometric friendliness and clarity in small sizes.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous outer margins to maintain the "airy" brand promise. 

- **Desktop:** 12-column grid with a 1280px max-width. Use significant vertical padding (80px+) between homepage sections to allow products to breathe.
- **Mobile:** 4-column grid with 16px side margins. 
- **Spacing Rhythm:** Use an 8px base unit. Component internal padding should favor the "Medium" (24px) scale for card content to prevent a cramped feeling.
- **Alignment:** Centralize hero content for a cinematic feel; use left-aligned layouts for functional commerce pages like checkout and product listings.

## Elevation & Depth

This design system uses a combination of **Ambient Shadows** and **Glassmorphism** to create a multi-layered, tactile experience.

- **Level 1 (Surface):** The background is flat warm cream.
- **Level 2 (Cards):** Use soft, ultra-diffused shadows (#1F1F1F at 4-6% opacity) with a large blur radius (20px-30px) to make product cards appear as if they are floating gently above the surface.
- **Level 3 (Navigation/Search):** Sticky headers and search overlays use a glassmorphic effect: `backdrop-filter: blur(12px)` with a semi-transparent white background (`rgba(255, 255, 255, 0.8)`).
- **Interactions:** On hover, cards should lift slightly (increasing shadow spread) and scale by 1.02x for a premium physical response.

## Shapes

The shape language is consistently soft and approachable. 

- **Primary Containers:** All product cards, input fields, and main containers utilize a 16px (`rounded-lg`) corner radius.
- **Buttons:** Buttons use a slightly larger 12px or full-pill radius depending on the context to emphasize comfort.
- **Badges:** Small badges (e.g., "Best Seller") should use a 4px or fully rounded radius to differentiate from larger structural elements.
- **Iconography:** Use light-stroke, rounded-end icons to match the softness of the UI components.

## Components

### Buttons
- **Primary:** Royal Red background, White text. Semi-bold Poppins. Subtle scale-up on hover.
- **Secondary:** Transparent background, Luxury Gold border (1.5px), Luxury Gold text.
- **Tertiary/Ghost:** No border, Maroon text, underlined on hover.

### Cards
- **Product Card:** Pure White background, 16px radius, soft ambient shadow. Images should have a subtle 5% darken overlay to help white Rakhis pop against white card backgrounds.
- **Content Card:** Used for blog or "Tradition" stories, featuring Playfair Display titles and larger padding (32px).

### Glassmorphic Navigation
- Sticky header with 80% white opacity and 12px blur.
- Thin 1px border at the bottom (#ECECEC) to define the edge during scroll.

### Badges & Labels
- **'Limited Edition':** Maroon background, Luxury Gold text, 12px Poppins.
- **'Best Seller':** Saffron Gold background, Charcoal text.
- **'New Arrival':** Luxury Gold background, White text.

### Inputs
- 16px rounded corners, #ECECEC border.
- On focus, the border transitions to Luxury Gold (#D4AF37) with a soft 4px gold outer glow.
