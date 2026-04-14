# 09 — Open Questions: What We Don't Know

This file catalogs the major unanswered questions in root growth biology, roughly organized by topic. These represent both research frontiers and potential conversation starters for the PDC presentation.

---

## Tropism Arbitration

**Q: How does a root tip integrate multiple competing tropisms into a single growth direction?**
This is the central open question. We know individual tropisms can suppress each other (e.g., hydrotropism disabling gravitropism under drought), but we don't have a unified model for how all tropisms combine. Is it vector addition? Priority queuing? Dynamic reweighting? Some combination? [Lucini2021]

**Q: What are the relative strengths of different tropisms, and what are the masking thresholds?**
At what drought severity does hydrotropism override gravitropism? How does a nutrient gradient compare in strength to a moisture gradient? These quantitative relationships are largely unmeasured [Lucini2021].

**Q: Is tropism interaction additive, competitive, or hierarchical?**
Current evidence suggests contextual and competitive elements, but no comprehensive model exists [confidence: inferred from Vandenbrink2020, Lucini2021].

---

## Sensing Mechanisms

**Q: How is statolith settling transduced to a chemical signal?**
The most fundamental step in gravitropism — how physical displacement of starch granules becomes an InsP3/Ca2+ signal — remains largely elusive despite intensive research [Vandenbrink2020].

**Q: Can roots sense electric fields and sound?**
Electrotropism and phonotropism remain unconfirmed as true tropisms. The sensing mechanisms, if they exist, are completely unknown [Lucini2021].

**Q: Are there tropisms we haven't identified yet?**
The recent proposal of phonotropism suggests the list may not be complete [Lucini2021].

---

## Hydrotropism

**Q: Why does hydrotropism use a completely different signaling pathway than gravitropism?**
Gravitropism works through auxin/PIN; hydrotropism works through ABA/cytokinin. Both produce the same output (root bending). Why different machinery? Is this an accident of evolution, or is there a functional advantage? [Vandenbrink2020]

**Q: Where exactly is the hydrotropic sensor?**
Both the sensor and response zone appear to be in the elongation zone, not the root cap. But the details are disputed [Vandenbrink2020].

---

## Root-Root Interactions

**Q: What is the chemical vocabulary of root exudates?**
Roots produce 100,000+ chemical compounds. We've barely begun decoding which compounds signal what. Understanding this vocabulary would be "a gigantic leap forward" [Depuydt2014, Karban_UCDavis].

**Q: How does root identity recognition actually work at the molecular level?**
We know roots can distinguish self/non-self/kin, but the specific molecular mechanism is unknown. Root exudates are the leading candidate, but the exact signal molecules haven't been identified for most species [Depuydt2014].

**Q: Do recognition signals interact with tropism signals?**
Does the presence of a competitor change the weighting of tropisms? Does kin recognition alter the hydrotropic response? Completely unexplored territory [confidence: speculative].

---

## Mycorrhizal Networks

**Q: How much resource actually flows through mycorrhizal networks, and is it biologically significant?**
The quantities transferred and their ecological importance are debated. Some meta-analyses question the strength of evidence [confidence: inferred].

**Q: Is inter-plant transfer "altruism" or fungal self-optimization?**
The fungus is an organism with its own interests. Whether trees are "helping" each other or whether the fungus is optimizing its own resource network is an open question [confidence: inferred].

**Q: How does information (vs. resources) propagate through mycorrhizal networks?**
Defense signaling through networks has been observed, but the signal molecules and propagation mechanisms are poorly characterized [NatGeo_PlantsTalk].

---

## Stochasticity and Prediction

**Q: Is the residual variability in root architecture genuine randomness or unmeasured determinism?**
See detailed discussion in `08-stochasticity.md`. This has practical implications: if deterministic, better measurement could improve prediction; if stochastic, prediction has fundamental limits.

**Q: Do plants use noise strategically in root growth?**
Bet-hedging via noise is documented in seed germination. Does a similar strategy operate in root branching decisions? [CambridgeQPB2021]

---

## Species Generalization

**Q: How universal are the mechanisms discovered in Arabidopsis?**
Most molecular-level knowledge comes from one model species. Root tropism mechanisms show pronounced differences between species, and the field argues these need more investigation [Vandenbrink2020]. What's true for a small mustard plant may not hold for a tropical fruit tree.

---

## Computational Modeling

**Q: Can we build a full-system model that captures all tropisms + hormones + root-root interactions + mycorrhizae + soil physics simultaneously?**
No existing model does this. It's the grand challenge of computational root biology [confidence: established].

**Q: What is the right level of abstraction for useful root models?**
Molecular-level models are too complex to scale. Population-level models lose individual architecture. The sweet spot is somewhere in between, and finding it is an active area of research [Leitner2010].

---

## The Big Philosophical Question

**Q: Is there a "root algorithm" — a compact description of the rules that generate root architecture?**
If yes, it would be something like: "a stochastic L-System grammar with environmentally-sensitive production rules, hormone-mediated feedback between grammar levels, and an emergent priority system for tropism arbitration." Whether such a description is *sufficient* (i.e., whether it captures all the relevant dynamics) or merely *approximate* is the deepest version of the determinism-vs-stochasticity question.

This connects directly to the question of whether biological form can be generated from rules (the L-System/Alexander perspective) or whether it requires something more — history, context, irreducible complexity. For the PDC audience, the permaculture version of this question is: **can you design a food forest, or can you only design the conditions under which a food forest grows itself?** [confidence: speculative]
