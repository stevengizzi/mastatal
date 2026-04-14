# Root Cause Analysis

**How do roots decide where to grow — and what can we learn from them?**

This project investigates the mechanisms by which plant roots navigate their environment: the sensory inputs (tropisms), the chemical processing layer (hormones), the stochastic and deterministic elements of growth direction, and the inter-plant communication networks that coordinate root behavior across a landscape.

It pursues two directions simultaneously:
1. **Toward permaculture** — understanding root decision-making as a foundation for more intelligent land stewardship
2. **Toward engineering** — extracting biomimetic principles for algorithms, network design, and distributed systems

## Origin

This project emerged from Steven Gizzi's Permaculture Design Course (PDC) at Rancho Mastatal, Costa Rica, April 2026. The core question — *is there a pathfinding algorithm that roots follow?* — sits at the intersection of biology, computer science, and design philosophy.

## Deliverables

Three potential outputs, in priority order:

1. **"Root Cause Analysis: A Field Guide to How Roots Think"** — An illustrated poster/infographic mapping the root tip's decision architecture. All tropisms as inputs, hormones as the processing layer, growth direction as output. Visual metaphor: a mixing console.

2. **"From Root Tip to Wood Wide Web: Scales of Underground Intelligence"** — A three-panel diagram showing nested scales of underground decision-making: single root tip → whole root system → mycorrhizal network.

3. **"The Root Algorithm" — A Live L-System Demo** — An interactive root growth simulator with tunable parameters for tropism strength, branching, and stochastic noise.

See `specs/` for detailed specifications of each deliverable.

## Repository Structure

```
root-cause-analysis/
├── README.md                        # This file
├── CLAUDE.md                        # Context file for Claude Code
├── knowledge/                       # Reference material, organized by topic
│   ├── 01-tropisms.md               # All 11 tropisms, mechanisms, sensors
│   ├── 02-hormones.md               # Auxin, cytokinin, ABA, ethylene, etc.
│   ├── 03-root-tip-architecture.md  # Root cap zones, cell types, sensing
│   ├── 04-decision-system.md        # Multi-input arbitration, feedback loops
│   ├── 05-root-root-interactions.md # Self/non-self, kin recognition, exudates
│   ├── 06-mycorrhizal-networks.md   # Wood wide web, inter-plant layer
│   ├── 07-computational-models.md   # L-Systems, RootBox, simulation approaches
│   ├── 08-stochasticity.md          # Determinism debate, noise, quantum biology
│   ├── 09-open-questions.md         # Research frontiers, gaps
│   └── sources.md                   # Bibliography with citation keys
├── specs/                           # Deliverable specifications
│   ├── 01-poster-field-guide.md     # Spec for the mixing console poster
│   ├── 02-scale-diagram.md          # Spec for the three-scale zoom-out
│   └── 03-l-system-demo.md          # Spec for the interactive simulator
└── artifacts/                       # Generated files, images, code
    └── .gitkeep
```

## Knowledge Files — Reading Order

The knowledge files are numbered to follow a natural learning progression:

1. **Tropisms** — What are the inputs to the root's decision system?
2. **Hormones** — What chemical machinery processes those inputs?
3. **Root Tip Architecture** — Where does the processing physically happen?
4. **Decision System** — How does the root integrate competing signals?
5. **Root-Root Interactions** — What happens when multiple plants share soil?
6. **Mycorrhizal Networks** — How does the inter-plant communication layer work?
7. **Computational Models** — How do scientists simulate all of this?
8. **Stochasticity** — Is root growth deterministic, random, or something else?
9. **Open Questions** — What don't we know yet?

## Status

- [x] Initial research and knowledge capture
- [ ] Knowledge files: review, expand, fact-check
- [ ] Deliverable 1: poster design and production
- [ ] Deliverable 2: scale diagram design
- [ ] Deliverable 3: L-System demo prototype
- [ ] Presentation to PDC group

## Connections

- **Christopher Alexander** — The "quality without a name" as emergent property of rules interacting with context
- **L-Systems as formal grammars** — Structural parallel to music composition (motivic development, counterpoint, controlled improvisation)
- **Distributed computation** — Root systems as swarm intelligence / decentralized search algorithms
- **Permaculture design principles** — Tropism-aware planting design as "tuning the gradient landscape"
