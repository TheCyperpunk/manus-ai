# Design Brainstorm — Sangeeth Karunakaran Portfolio

## Three possible directions

### Theme Name: Proof in Motion
**Very Brief Intro:** A dense, near-black developer journal where hard evidence—projects, GitHub activity, and hackathon wins—moves through an editorial sequence. The interaction language mixes restrained terminal energy with carefully staged kinetic components.
**Probability:** 0.07

### Theme Name: Signal / Surface
**Very Brief Intro:** A pale technical workspace shaped by paper texture, data cards, and wireframe marks. It would make Sangeeth’s portfolio feel like a living product notebook rather than a conventional personal site.
**Probability:** 0.04

### Theme Name: Workshop Atlas
**Very Brief Intro:** A warm, workshop-inspired landscape of technical artifacts, composed as an exploratory map of skills and projects. It would favor crafted materiality and discovery over high-contrast digital drama.
**Probability:** 0.09

---

## Chosen Direction: Proof in Motion

### Design Movement
**Contemporary technical editorialism** meets a refined developer-tool interface: the essay-like pacing and proof-first credibility of a personal journal are fused with the high-contrast visual confidence of modern developer products. This direction intentionally samples the supplied component references by assigning each family a clear role, rather than imitating any one source.

### Core Principles
1. **Proof is the ornament.** Real project outcomes, GitHub activity, experience, and awards are elevated through scale, contrast, and rhythm instead of decorative claims.
2. **Motion has a job.** Hero typography, section entrances, count-up statistics, hover states, and the terminal panel each use a different but compatible interaction treatment.
3. **Layered, not cluttered.** Soft atmospheric art lives far behind the copy; sharp data and editorial type live on the surface.
4. **Designed exploration.** The page flows as a nonlinear field of evidence—broad hero, project panels, proof band, open-source signal, personal method—rather than a generic stack of equal cards.

### Color Philosophy
The near-black canvas (`#0A0A0B`) establishes focus and makes luminous information feel consequential rather than decorative. A single acidic **Signal Lime** (`#B8FF3B`) is reserved for action, active states, key numerals, and system status. Cloud white and warm gray make reading calm over long sections; washed indigo, ember, and emerald light leaks stay low-opacity and atmospheric only.

### Layout Paradigm
The page behaves like a **vertical evidence tape**: a sticky navigation edge leads into a two-column hero, then into alternating full-bleed proof bands and offset content slabs. Section indices become wayfinding pins; projects are intentionally staggered rather than arranged as a symmetrical card grid. The content keeps one primary reading lane with adjacent signal modules that pull attention sideways.

### Signature Elements
- **Signal rails:** thin lime-and-gray lines, numeric indexes, and micro labels that connect distant sections.
- **Glass terminal artifact:** an elevated code/command module with a soft phosphor glow, used as a real visual proof point rather than a generic decoration.
- **Orbital wash:** slow, blurred, low-contrast colored fields behind the hero and proof bands, inspired by developer-tool landing pages but kept subordinate to content.

### Interaction Philosophy
Interactions should feel like a finely tuned tool: direct, tactile, and briefly rewarding. Large project panels tilt and surface on hover, small links draw an underline and nudge their arrow, skills stream in a controlled marquee, and counters advance only when evidence arrives in view. Nothing loops merely to request attention.

### Animation
Hero text reveals once using masked lines over 650–800ms with a crisp custom ease; the ambient wash drifts slowly only when reduced motion is not requested. Major sections rise 14–20px and fade in on view, with an 60ms item stagger. Statistic values count up when visible. Project cards react to pointer position with shallow 3D depth, but settle immediately on touch devices. Button presses use 0.97 scale over 140–160ms. All nonessential animation is removed for `prefers-reduced-motion`.

### Typography System
**Space Grotesk** serves as the compact geometric display face for headlines, numerals, and project titles; it carries the confident, technical voice. **DM Sans** supports long-form reading, labels, and controls at generous line heights. **IBM Plex Mono** appears only for system labels, terminal text, and compact metadata. Headlines use tight tracking and bold 600–700 weights; body copy stays at 400–500 with relaxed measure; data labels are uppercase mono with deliberate letterspacing.

### Brand Essence
**A proof-first portfolio for teams looking for a full-stack builder who turns AI and Web3 systems into usable products.**

Personality: **precise, restless, grounded.**

### Brand Voice
Headlines are short, declarative, and artifact-led. Calls to action are active and specific; microcopy speaks like a system status rather than marketing filler.

> “I build the part that still needs to work after the demo.”

> “Trace the build →”

### Wordmark & Logo
The mark is an asymmetric, split-frame **S**: two offset signal brackets joined by a single diagonal circuit stroke. It suggests source code, movement, and a personal initial without relying on a default letterform. The wordmark pairs the mark with a custom-tracked `SANGEETH//K` treatment in Space Grotesk.

### Signature Brand Color
**Signal Lime — #B8FF3B.**

## Reference Integration Map

| Source | Role in the portfolio |
| --- | --- |
| React Bits | One-time hero reveal, ambient background atmosphere, magnetic primary action |
| Aceternity UI | Depth-aware featured project cards and border-gradient skill chips |
| Magic UI | In-view animated GitHub stat numbers and controlled skill marquees |
| Aninmate | Uniform on-view choreography for major editorial sections |
| OGBlocks | Full-width recognition and contact band composition |
| Hover.dev | Underline draws, arrow nudges, icon reactions, and nav feedback |

## Style Decisions

- Proof modules must always show meaningful evidence. The GitHub proof panel uses live public repository metadata when available and a named, credible source-project fallback rather than decorative placeholder data.
