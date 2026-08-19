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
- Project panels foreground product-specific artifacts—transaction and contract states, local-model routes, and incident-report traces—above ambient technical imagery.
- The split-frame S signal recurs in numbered rails, project artifact headers, proof cards, and the contact channel as a functional identity cue.
- Evidence sections deliberately rotate between a project dossier, recognition ledger, activity panel, capability switchboard, system map, field notes, and command-log silhouette to keep the page nonlinear without breaking visual continuity.

## Expansion Plan — Evidence Interface

The next iteration keeps the existing vertical evidence tape but introduces three new interactive layers. First, a **capability matrix** will use accessible tabs to turn the resume’s expanded frontend, AI systems, and Web3 stack into a purposeful, filterable system view rather than a static logo wall. Second, an **architecture signal** panel will visualize the verified project mechanics—wallet to contract, multimodal interface to local model, and report intake to coordination flow—through orbiting nodes and animated connector beams. Third, a compact **build log** will turn the project detail from the resume into a scroll-led sequence of execution artifacts.

The interaction additions are intentionally constrained: radial progress signals, an animated beam route, lens-like card emphasis, a project mode switch, magnetic primary actions, and a bento-styled contact grid. Each reveals a concrete technical detail or action, reinforces Signal Lime as a status color, and is disabled or simplified under reduced-motion preferences.

| Reference | New integration |
| --- | --- |
| Magic UI | Orbiting node field, animated beam route, border beam, number ticker, active pattern layer |
| Annnimate | Scroll-led build-log chapters, spotlight lens emphasis, expanding project panel rhythm |
| OGBlocks | Beam-border evidence panel, floating capability chips, magnetic contact action, bento contact field |
| Hover.dev | Glare-aware technical cards, responsive hover surface, compact link feedback |
| Midhun P M | Capability filtering, practical tooling detail, impact/availability hierarchy, concise source-driven project evidence |

## GitHub-First Multi-Page Architecture

The portfolio now behaves as a **source atlas**, not a scrolling brochure. The overview is intentionally concise and sends visitors into distinct proof modes: **Projects** is a filterable repository registry; **Activity** is a contribution ledger with public-event and heatmap evidence; **Network** separates verified public organization membership from public cross-repository collaboration; **Stack** visualizes the language and system profile derived from repositories; **Open** retains the availability console; and **Contact** remains a direct channel.

Each page keeps the near-black canvas, Signal Lime as an evidence highlighter, monospaced source metadata, and subtle movement. Page silhouettes vary by proof type: repository registry cards, ledger rows, a network dossier, and a language instrument panel. GitHub data is fetched from public endpoints at visit time wherever the API supports it; derived labels must name what they measure precisely, and no unavailable activity is represented as fact.

- Persistent navigation must frame—not cover—the primary reading lane; the fixed sidebar remains a source index while the content column begins in protected visual space.
- Each route owns one dominant proof instrument. Projects begins with live-inventory-curated source dossiers before the complete archive, while activity, network, stack, open, and contact use a ledger, dossier, language instrument, availability console, and command-channel grid respectively.
- Signal rails, compact source tags, and split-frame `S//` markers are structural wayfinding, not ambient decoration.

## Dashboard Navigation Adaptation

The source atlas now exchanges its persistent side index for a **compact horizontal source bar**. It borrows the reference’s disciplined, document-like density—small brand lockup, central route links, a lime availability status, and a single GitHub action—without copying its layout or content. The visual hierarchy shifts from oversized theatrical framing to a protected, centered evidence column with a stable 1080px reading measure.

- The top navigation is a status instrument: route links retain numeric indexing only in active or hover states, the Open channel is visibly marked as live, and the GitHub action stays visually separate from internal routing.
- Repository, activity, stack, and network surfaces use compact bordered instruments, tighter metadata, two-column repository records, and factual summary rows. The public GitHub data remains the primary content source.
- At small widths, the header becomes an accessible menu control with a concise drawer, while the content keeps generous tap targets and a single-column evidence flow.

## Style Decisions

- The first visit begins with a document-level Source Atlas boot signal before React mounts; it is brief, motion-safe, and never repeats once acknowledged locally.
- The Overview hero pairs the personal dossier with a live public-source terminal that names the GitHub handle, public repository index, static build target, and current source status. The proof surface must remain factual when live data is unavailable by showing its cached or indexing state.
- Overview project cards lead with mechanism-specific implementation paths—wallet-to-contract execution, local-model retrieval, and CLI incident flow—so their silhouettes and evidence modes are visibly non-interchangeable.
- The pale Experience Trace retains its pacing contrast but carries `S//` resume-ledger framing and a source-verification stamp so it remains part of the same atlas.

- Activity must read as an authored evidence trail: dated ledger clusters, source stamps, and split-frame rail markers break longer event feeds into distinct public proof intervals.
- The `S//` identity is structural on every atlas route, appearing in header indices, source rails, and proof-card corners rather than operating only as a navigation mark.
- Signal Lime remains reserved for status and verified proof, while authored distinctiveness comes from rail geometry, source-index typography, and artifact-led microcopy.
- Projects uses authored source intervals—application surfaces, protocol work, and utilities—so the public archive is a navigable evidence tape rather than an uninterrupted card grid.
- Curated project dossiers lead with a concrete product artifact, source trace, or contract/build signal before descriptive copy; Signal Lime marks only verified statuses, counts, and proof stamps.
- Each case study keeps the shared evidence tape but begins with a **project-specific dominant proof instrument**: a contract-state lifecycle for Onchain SIP, a browser-to-native handoff trace for XMO Messenger, and a token-policy transfer manifold for SorobanVault.
- The `S//` split frame governs proof-section transitions, artifact corners, trace checkpoints, and evidence dividers. It must remain structural even when the underlying project mechanics change.
- A repeated section title is permitted only when its project-specific trace, connector geometry, and evidence mode are visibly distinct; swapping case-study copy alone must never make two dossiers interchangeable.

## Style Decisions

- Portfolio project cards retain supplied copy verbatim, but begin with a project-specific source trace before the descriptive summary: contract lifecycle for Onchain SIP, local-runtime retrieval for Auradesk, and CLI incident flow for ZeroHour.
- The Overview project band behaves as an offset evidence tape rather than a uniform card row. Subtle vertical stagger, connector traces, and split-frame corners make each surface a distinct instrument.
- `S//` geometry must frame practical proof data—source type, implementation route, and system handoff—not simply decorate card edges.

## Style Decisions

- The Stack route's language distribution must read as a custom **language instrument**, framed by public-metadata stamps, source rails, and split-frame `S//` geometry rather than a conventional dashboard chart alone.
- Long technical inventories must be divided into indexed, rail-led source intervals; profile declarations are explicitly labeled as such and remain distinct from repository-derived proof.
- On Stack, the `S//` identity recurs at proof-section boundaries, instrument corners, ledger groups, and recent-build trace markers; the compact header lockup is echoed by route-specific source framing rather than replaced.

## Contact Reference — Ground-Truth Route Spec

The supplied Contact reference defines the route’s composition: a wide, low-density collaboration field with a thin top signal rail, a large left-aligned multi-line statement, an offset right-hand context/action area, and a faint oversized `S//` watermark anchored to the lower edge. The Contact page will keep the established near-black canvas, Signal Lime status language, Space Grotesk / DM Sans / IBM Plex Mono type system, and thin evidence rules; however, it will replace the former uniform contact grid with a distinct **channel switchboard**. Verified email, phone, GitHub, and location information will become clearly labeled interaction channels beneath the primary collaboration invitation, with the email channel remaining the dominant action.
