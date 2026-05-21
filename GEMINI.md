# Project Instructions: Ultimate Tennis Statistics

## Design System
Following the 2026 redesign, the project uses a "Dark, Premium Sports Tech" aesthetic inspired by modern coaching platforms.

### Visual Standards
- **Theme**: Dark mode only.
- **Background**: Deep Charcoal/Black (`#0b0c10`).
- **Cards**: Dark Slate (`#161b22`) with subtle borders (`#ffffff14`).
- **Primary Accent**: Vibrant Blue (`#1a93fe`) for CTAs and primary headings.
- **Secondary Accent**: Mint Green (`#5eb92d`) for success states and value propositions.
- **Typography**: Inter (Sans-serif) via Google Fonts.
- **Glassmorphism**: Headers and sticky elements use `backdrop-filter: blur(10px)` with `rgba(11, 12, 16, 0.8)`.

### Development Standards
- **CSS**: Prefer Vanilla CSS with CSS Variables (defined in `styles/main.css`). Avoid heavy frameworks.
- **HTML**: Maintain semantic structure and use the `container` utility for layout consistency.
- **Assets**: App screenshots should be styled with modern borders and soft shadows as defined in `index.html`.

## Analytics
- **TelemetryDeck**: Every public-facing page must include the TelemetryDeck analytics script with the application ID `93DED850-BEDE-49A2-ADA7-52F1E526FF4A`.
