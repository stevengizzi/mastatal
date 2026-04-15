# 00 — Foundations: Key Concepts You'll Need for Everything That Follows

This file defines terms and concepts that come up repeatedly across the other knowledge files. Read this first. Everything else builds on it.

---

## Who Does This Apply To? (Scope)

A critical caveat up front: **most of what we know about root tropism mechanisms comes from one plant — Arabidopsis thaliana**, a small, fast-growing member of the mustard family. Scientists use it as a "model organism" because it has a small genome, grows quickly, and is easy to manipulate genetically. It's the lab rat of plant biology.

This creates a problem for us. The mango tree outside the classroom at Rancho Mastatal is not Arabidopsis. Neither is a coconut palm, a banana plant, or a mahogany tree. How much of the Arabidopsis research applies to them?

Here's what we know:

- **The basic tropism mechanisms (gravitropism, phototropism) appear to be universal across flowering plants.** Gravity sensing via starch-filled granules, auxin-mediated bending, and PIN-protein-driven transport have been confirmed in rice, maize, pea, cucumber, wheat, soybean, and many other species [Vandenbrink2020, Lucini2021]. These are ancient mechanisms shared across the plant kingdom.

- **The details vary significantly between species.** Hydrotropism, for example, works through auxin in rice and pea but appears to be auxin-independent in Lotus japonicus (a legume). The relative strength of gravitropism vs. hydrotropism differs between wheat/corn and cucumber/pea [Takahashi2009, Nakajima2017]. The same tropism can use different molecular pathways in different species [confidence: established].

- **Trees are understudied.** Most tropism research uses seedlings of small, fast-growing species. Mature tree roots are enormously difficult to study — they're deep underground, grow slowly, and can't be genetically manipulated. We can reasonably assume the basic mechanisms are conserved (trees have auxin, PIN proteins, and statoliths), but the quantitative details (how strong is gravitropism vs. hydrotropism in a tropical hardwood?) are largely unknown [confidence: inferred].

- **Different root types on the same plant may behave differently.** A single plant can have taproots, lateral roots, adventitious roots, and fine root hairs, each with different growth behaviors. Lateral roots, for instance, don't grow straight down — they have a "gravitropic set-point angle" that differs from the primary root [Han2021]. The tropism machinery is the same, but its calibration differs by root type.

**Bottom line for this project:** The general architecture we're describing — tropism inputs, hormone processing, stochastic output — is almost certainly universal. The specific molecular details may differ from species to species. When this matters, we'll flag it.

---

## The Cholodny-Went Model

This is the foundational theory of plant tropisms, proposed independently by Nikolai Cholodny (1927) and Frits Went (1928). It's referenced constantly in the literature, so understanding it is essential.

**The core claim:** Tropisms (directional growth responses) are caused by the asymmetric redistribution of the plant hormone auxin across the responding organ. When more auxin accumulates on one side than the other, the two sides grow at different rates, and the organ bends.

**How it works in stems (positive phototropism):**
1. Light hits a stem from one side
2. Auxin is redistributed from the lit side to the shaded side
3. In stems, auxin *promotes* cell elongation — so the shaded side (with more auxin) elongates faster
4. Faster growth on the shaded side → the stem bends toward the light

**How it works in roots (positive gravitropism):**
1. The root is displaced from vertical (e.g., the plant tips over)
2. Gravity sensing in the root cap causes auxin to accumulate on the lower side
3. In roots, high auxin concentration *inhibits* cell elongation — so the lower side (with more auxin) elongates more slowly
4. Slower growth on the lower side → the root bends downward

**The crucial insight:** Auxin has *opposite effects* in stems vs. roots. In stems, more auxin = more growth. In roots, more auxin = less growth (at high concentrations). This is because root cells are much more sensitive to auxin than stem cells — concentrations that stimulate stem growth are high enough to inhibit root growth.

**Status:** The Cholodny-Went model has held up remarkably well for nearly 100 years and remains the central framework for understanding most tropisms. However, it's now clear that it doesn't apply to ALL tropisms — notably, hydrotropism appears to work through a different mechanism entirely (see `01-tropisms.md`, Section 3) [Vandenbrink2020, Lucini2021].

---

## Auxin and How It Moves: Polar Auxin Transport

Auxin (full chemical name: indole-3-acetic acid, or IAA) is the primary growth-direction hormone in plants. Understanding how it moves through the plant is essential for understanding tropisms.

### The acid trap mechanism

Auxin transport relies on a clever chemistry trick based on pH:

1. The space between plant cells (called the **apoplast**) is slightly acidic (around pH 5.5)
2. At this pH, some auxin molecules pick up a hydrogen ion, becoming electrically neutral (protonated form: IAAH)
3. Neutral IAAH can slip across cell membranes by passive diffusion — it just drifts in
4. But inside the cell, the pH is higher (around 7.0, nearly neutral)
5. At this higher pH, auxin loses that hydrogen ion, becoming negatively charged (ionic form: IAA⁻)
6. The charged IAA⁻ **cannot** cross the cell membrane on its own — it's trapped inside the cell

This is called the "acid trap": auxin can get INTO cells easily but can't get OUT without help. The only way out is through specific transporter proteins in the cell membrane [NatCommsPIN2024].

### PIN proteins: the auxin exit doors

**PIN proteins** (named "PIN-FORMED" because mutants lacking them produce pin-shaped stems with no flowers) are transporter proteins embedded in cell membranes. They pump the charged form of auxin (IAA⁻) out of the cell.

The critical feature: **PIN proteins are not distributed evenly around the cell membrane.** They cluster on one specific side (face) of the cell. This is called **polar localization**. If PIN proteins are concentrated on the bottom face of a cell, auxin gets pumped out the bottom. If they're on the left face, auxin gets pumped out to the left [NatCommsPIN2024].

**Polar auxin transport** is the result of this asymmetry. When many cells in a row all have their PIN proteins on the same face (say, the bottom), auxin flows directionally through the tissue from top to bottom — like a bucket brigade, with each cell receiving auxin at the top and exporting it at the bottom.

In the Arabidopsis root, at least seven different PIN proteins (PIN1 through PIN7) have been identified, each with specific locations and roles:
- **PIN1:** In the vascular tissue (inner cells), transporting auxin downward toward the root tip
- **PIN2:** In the outer cell layers (epidermis and cortex), transporting auxin upward from the root cap into the elongation zone — this is the key player in gravitropism
- **PIN3, PIN7:** In the root cap columella cells, where they redirect auxin laterally in response to gravity
- **PIN4:** At the root tip, maintaining the auxin maximum there

During gravitropism, PIN3 and PIN7 in the columella cells relocate to the *lower* side of their cells (guided by statolith settling — see below). This redirects auxin flow to the lower side of the root, creating the asymmetry that drives bending [Han2021, Vandenbrink2020].

### AUX1: the auxin entrance door

While PIN proteins handle auxin *export*, the **AUX1** protein (and related LAX proteins) handles auxin *import* — actively pulling auxin into cells. Together, the PINs and AUX1 create a directed transport system.

---

## Statoliths: The Gravity Sensors

Inside the root cap, in a region called the **columella** (Latin for "small column" — it's a central column of cells at the very tip of the root), there are specialized gravity-sensing cells called **statocytes**.

Inside each statocyte are **amyloplasts** — organelles (cellular sub-structures) whose primary job is to store starch. These amyloplasts are unusually dense because they're packed with starch granules.

When we talk about these amyloplasts in the context of gravity sensing, we call them **statoliths** (from Greek: "statos" = standing, "lithos" = stone). The name emphasizes their function: they're heavy enough to physically settle to the bottom of the cell under gravity, like stones settling in water.

**How settling becomes a signal — the LAZY connection:**

For decades, the step between "statoliths settle" and "auxin gets redistributed" was a complete mystery. Recent work has clarified at least part of the chain:

1. Statoliths settle to the gravitationally lowest side of the statocyte cell
2. A protein called LAZY (also known as NGR — Negative Gravitropic Response) is normally distributed at the cell membrane. After gravity stimulation, LAZY polarizes to the *same* side as the settled statoliths (the bottom)
3. LAZY recruits another protein called RLD to form a LAZY-RLD complex
4. This complex guides the relocalization of PIN3/PIN7 proteins to the lower cell membrane
5. PIN3/PIN7 on the lower membrane pump auxin downward/sideward → auxin accumulates on the lower side of the root [Han2021]

So the chain is: statolith settling → LAZY protein relocalization → PIN protein relocalization → asymmetric auxin flow → differential cell elongation → root bending. There are still gaps (how exactly does statolith settling cause LAZY to move?), but the picture is much clearer than it was even five years ago. [confidence: established for the LAZY-PIN connection; inferred for the statolith-LAZY connection]

---

## Kinases, Receptors, and Other Molecular Vocabulary

Some terms that appear throughout the knowledge files:

**Kinase:** An enzyme that adds a phosphate group to another protein (a process called phosphorylation). This often acts like an on/off switch — phosphorylating a protein can activate it, deactivate it, or change its location. Plant cells use kinases extensively for signal transmission. When a cell needs to respond to an external signal, a kinase cascade (kinase A activates kinase B activates kinase C...) amplifies and transmits the signal.

**Receptor-like kinase (RLK):** A protein that spans the cell membrane, with a sensor on the outside and a kinase on the inside. When the external sensor detects something (a hormone, a chemical signal, a physical stimulus), the internal kinase activates and starts a signaling cascade inside the cell. There are over 600 different RLKs in Arabidopsis — they're one of the plant's main ways of sensing its environment.

**Aquaporin:** A channel protein embedded in cell membranes that allows water molecules to pass through. Think of it as a selective water pipe in the cell wall. Cells can regulate how many aquaporins they have and whether they're open or closed, controlling how fast water moves in and out.

**Plasma membrane intrinsic protein (PIP):** A specific type of aquaporin found in the plasma membrane (the outer membrane of the cell). PIPs are the most abundant aquaporins and are the main water channels at the cell surface. In the context of hydrotropism, PIPs are thought to be part of the water-sensing mechanism — they may interact with receptor-like kinases (RLKs) in the root cap to detect moisture gradients [confidence: inferred].

---

## Timing: How Fast Do Roots Actually Grow and Respond?

The claim that "tropisms begin within 30 minutes and complete within 5 hours" needs context.

**What's happening during those 30 minutes:**
When a root is displaced from vertical (say, you lay a potted plant on its side), here's the timeline [Han2021, Vaia_Gravitropism]:

- **0-2 minutes:** Statoliths begin settling to the new "bottom" of the statocyte cells
- **2-10 minutes:** LAZY/NGR proteins relocalize; PIN3/PIN7 begin relocating to the lower membrane
- **10-20 minutes:** Auxin redistribution is underway — more auxin flowing to the lower side
- **20-30 minutes:** Differential cell elongation becomes detectable — cells on the upper side start elongating faster than cells on the lower side
- **30+ minutes:** Visible bending begins

**Why 30 minutes?** The delay is partly chemical (it takes time for auxin to be transported, accumulate, and trigger changes in gene expression and cell wall properties) and partly physical (cells don't elongate instantly — the cell wall must loosen, water must enter the cell, and the cell must physically expand).

**What "completed within 5 hours" means:** The root continues bending until it's reoriented back to vertical (or whatever angle its gravitropic set-point dictates). A full 90° correction in a corn seedling root takes roughly 3-5 hours. This isn't one discrete "decision" — it's a continuous process of sensing, auxin redistribution, and differential growth, repeated over and over as the root gradually curves.

**Root growth rates vary enormously by species:** Arabidopsis primary roots grow about 1-3 mm per day. Corn roots can grow 30-60 mm per day. Tropical tree roots vary widely.

**So is root growth "one increment every 0.5-5 hours"?** Not exactly. Root growth is continuous, not stepwise. The root tip is always growing, always sensing, always adjusting. The 30-minute/5-hour figure describes how long it takes to *complete a course correction* after a sudden change in stimulus — not the interval between "decisions." The root is making micro-adjustments constantly [confidence: established for timing; inferred for the "continuous not stepwise" characterization].

---

## What Kinds of Light? The Electromagnetic Spectrum in Context

When we say "only blue light with wavelength below 500nm induces phototropism," here's what that means in everyday terms:

The visible light spectrum runs from about 380nm (violet) to 700nm (red):
- **380-450nm:** Violet
- **450-495nm:** Blue ← **This is what triggers phototropism**
- **495-570nm:** Green
- **570-590nm:** Yellow
- **590-620nm:** Orange
- **620-700nm:** Red ← **This is what phytochromes detect (for other purposes)**

So phototropism is triggered specifically by blue and violet light — the high-energy end of the visible spectrum. Green, yellow, orange, and red light do NOT trigger phototropism directly. This is because the photoreceptors responsible (called **phototropins**) have a molecular structure that specifically absorbs blue light.

However, **phytochromes** — a separate family of photoreceptors that detect red light (and far-red light, 700-800nm) — are also involved in root growth regulation, including modulating gravitropism. Phytochromes don't directly drive phototropic bending, but they affect how sensitive the root is to other signals. More on why in `01-tropisms.md`, Section 2. [confidence: established]
