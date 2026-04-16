# CLAUDE.md — Context for Claude Code

## Project Summary

"Root Cause Analysis" is a deep-dive project exploring how plant roots decide growth direction. It bridges plant biology, computational modeling, and permaculture design philosophy. The author (Steven) is a composer-turned-programmer attending a Permaculture Design Course in Costa Rica.

## What's Here

- `knowledge/` — Reference material organized by topic (tropisms, hormones, root anatomy, decision systems, inter-plant interactions, mycorrhizal networks, computational models, stochasticity debate, open questions). Numbered for reading order. Each file uses bracketed citation keys like `[Vandenbrink2020]` that resolve in `knowledge/sources.md`.
- `specs/` — Deliverable specifications for three outputs: a poster, a scale diagram, and an interactive L-System demo.
- `artifacts/` — Generated files (images, code, exports). Currently empty.

## Citation Convention

Claims in knowledge files use `[AuthorYear]` keys. Some claims carry a confidence tag:
- `[confidence: established]` — directly stated in cited source
- `[confidence: inferred]` — extrapolated or synthesized from multiple sources
- `[confidence: speculative]` — author's (Steven's or Claude's) interpretation, flagged for fact-checking

## Writing Protocol

See `knowledge-report-protocol.md` for detailed rules on how knowledge files should be written. Key principles:
- Every technical term defined in plain language on first use
- Every causal chain walked through step by step (no "triggers" or "leads to" bridging unexplained gaps)
- Every number given everyday context
- Every claim scoped to species/applicability
- Logical contradictions resolved immediately
- Cross-references explicit between files

## Presentation Framing

The project is framed as a **reverse-engineering exercise**: "If you were an engineering team tasked with designing an underground navigation system, what would you need?" Each design requirement maps to a tropism or system feature. Nature is the senior engineer who already shipped the product. This framing is used in the presentation script and should inform how knowledge is structured.

## Current Status

Initial knowledge capture complete from first research session. All files need:
- Expansion with additional sources
- Fact-checking (especially confidence:inferred and confidence:speculative claims)
- Cross-referencing between files where topics overlap

## Key Constraints

- Steven has very limited internet at Rancho Mastatal (~450 kbps)
- Timeline: project should be presentable by April 18, 2026
- Primary audience: PDC classmates (mixed backgrounds, not scientists)
- Deliverables should be visual, not text-heavy

## Guiding Questions

The core question: *Given perfect data capture of every environmental variable, could you predict the exact shape of a plant's root system? Is root growth deterministic or fundamentally stochastic?*

Secondary questions:
- How does a root tip arbitrate between competing tropisms?
- How do roots recognize self vs. non-self vs. kin?
- What can distributed root intelligence teach us about algorithm design?
- How does the mycorrhizal network layer change the picture?

## Style Notes

Steven prefers clear, direct language. Technical terms should be defined on first use. The knowledge files should be useful as both reference material and as source content for the deliverables (poster text, presentation talking points, etc.).