# 07 — Computational Models: L-Systems and Simulation Approaches

Scientists have been modeling root growth computationally since the early 1970s. The field has evolved from simple statistical descriptions of root length distribution to complex 3D architectural models that couple root growth to soil physics.

---

## L-Systems (Lindenmayer Systems)

### What They Are

L-Systems are formal grammars invented in 1968 by biologist Aristid Lindenmayer to model biological growth. They consist of:

1. **An alphabet** — a set of symbols (e.g., A, B, F, +, -, [, ])
2. **An axiom** — a starting string (e.g., "A")
3. **Production rules** — replacement rules applied simultaneously at each time step

**The key feature:** all rules are applied in parallel at each step, mirroring how cells in an organism all divide and grow simultaneously. This distinguishes L-Systems from regular grammars (which apply rules sequentially) [ABOP_Ch1].

### Simple Example

```
Axiom: A
Rules: A → AB, B → A

Step 0: A
Step 1: AB
Step 2: ABA
Step 3: ABAAB
Step 4: ABAABABA
```

The string lengths (1, 2, 3, 5, 8...) follow the Fibonacci sequence — already capturing a biological pattern from a trivial grammar.

### Branching

Bracket symbols create branches:
- `[` = push current position/direction onto a stack (start a branch)
- `]` = pop back to saved position (end branch, return to main axis)

Example: `F[+F]F[-F]F` means "grow forward, branch right and grow, return, grow forward, branch left and grow, return, grow forward." This produces tree-like structures.

### Extensions for Root Modeling

**Parametric L-Systems:** Each symbol carries numeric values (growth rate, diameter, angle). Example: `A(length, diameter, age)` [Leitner2010].

**Stochastic L-Systems:** Multiple production rules can be assigned to each symbol with probability weights. This means the same starting axiom can produce different structures each time, capturing the natural variation between individual plants of the same species [AllenPike_LSystems]. "Adding randomization to the system rules is more effective than randomizing the interpretation" [ABOP_Ch1].

**Context-Sensitive L-Systems:** Rules that depend on neighboring symbols, modeling how a cell's behavior depends on its neighbors [ABOP_Ch1].

**Environmentally-Sensitive L-Systems:** Rules that respond to external data (soil moisture, nutrient concentration, obstacles), allowing the simulated root to interact with its environment.

### Tropisms in L-Systems

In root models, tropisms are implemented as stochastic processes that bias growth direction [Leitner2010]:

1. At each growth step, generate multiple candidate growth directions (random angles drawn from a probability distribution)
2. Evaluate each candidate against tropism criteria
3. Select the best candidate

For gravitropism: compute N random rotations, select the one closest to the downward direction. The parameter N controls how strongly gravitropism influences direction — high N means the root almost always finds a near-vertical option; low N means more random wandering [Schnepf2010].

The standard deviation of the random angle distribution depends on soil conditions — more heterogeneous soil → wider angle distribution → more random-looking root paths. This is calibrated so that the expected direction change per centimeter of growth is independent of the spatial resolution of the simulation [Schnepf2010].

### The Music Composition Parallel

For a composer, L-Systems map directly to familiar concepts:
- The axiom is a **motif**
- Production rules are **development techniques** (augmentation, diminution, inversion)
- Branching is **counterpoint** (independent voices emerging from a shared source)
- Stochastic rules are **controlled improvisation** (constraints that permit variation)
- The resulting structure has **self-similar, fractal character** — like a fugue, where the same pattern recurs at different scales

The book *The Algorithmic Beauty of Plants* (Prusinkiewicz & Lindenmayer, 1990) is the foundational reference for this connection between formal grammars and biological form [ABOP_Ch1]. [confidence: established]

---

## Major Root Architecture Simulators

Several software tools implement L-System and related approaches for root modeling:

| Tool | Approach | Key Feature |
|---|---|---|
| **RootBox** | L-System based | Modular, couples to soil models, used for urban tree root prediction [Leitner2010] |
| **SimRoot / OpenSimRoot** | Functional-structural | Estimates value of root traits for water/nutrient acquisition, can model MRI/CT images [OpenSimRoot_via_Leitner] |
| **RootTyp** | Architectural | Simulates root architecture, combinable with soil models [Pages2004_via_Leitner] |
| **ArchiSimple** | Simplified architectural | Generates contrasting root systems for trait quantification [GLO_Roots2015] |
| **RootNav 2.0** | Deep learning + pathfinding | Uses CNN for segmentation, then Dijkstra's/A* algorithm for reconstruction [Pound2019] |
| **L-Py** | Python L-System framework | General plant architecture modeling with stochastic and modular components [Boudon2012] |

### RootNav 2.0 — The Pathfinding Connection

RootNav 2.0 is particularly interesting for this project because it literally uses pathfinding algorithms (Dijkstra's algorithm, A*) to reconstruct root architectures from images. After a neural network segments the root image, the software finds shortest paths between root tips and seed locations through the segmented foreground [Pound2019].

A recent extension adds angle-based heuristics to the A* search, using a CNN to predict the angle of root material at each position, improving reconstruction where roots grow in close proximity [CNN_AStar2021].

This closes the metaphorical loop: roots are navigating their environment like pathfinding agents, and scientists are using pathfinding algorithms to reconstruct root paths from images.

---

## Continuum Models

An alternative to discrete L-System models: continuous descriptions of root density as a function of space and time. These describe the dynamics of root density distributions using parameters like rates of lateral root initiation, elongation, mortality, and gravitropism [Leitner2010]. More computationally efficient for large-scale simulations but lose individual root architecture detail.

---

## Multiscale Models

The frontier: models that couple root architecture (individual root tips) with soil physics (water flow, nutrient diffusion) and plant physiology (carbon allocation, hormone signaling). The PNAS 2020 paper by Goriely et al. represents this approach — explicitly linking hormone transport to local tissue deformation to mechanical forces to organ-level shape change [Goriely2020].

This is computationally intensive and an active area of development. No existing model captures the full system (all tropisms + all hormones + root-root interactions + mycorrhizal networks + soil physics) simultaneously. [confidence: established]
