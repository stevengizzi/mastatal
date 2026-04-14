# Spec 03 — "The Root Algorithm" — A Live L-System Demo

**Priority:** Stretch goal (only if Deliverables 1 and 2 are complete)
**Format:** Interactive web app projected from laptop
**Estimated time:** 4-8 hours development; could be significantly less with Claude Code
**Audience:** PDC classmates (non-technical; needs to be visually intuitive)

---

## Concept

A simple interactive root growth simulator that runs in a browser. The audience watches roots grow in real time as the presenter adjusts parameters. The goal is to viscerally demonstrate two things:

1. **The same rules produce different shapes every time** (stochasticity)
2. **Changing the environment changes the growth pattern** (tropism response)

This is the "wow" deliverable — seeing roots grow and respond live is more compelling than any diagram.

---

## Core Features (Minimum Viable Demo)

### The Simulation

A 2D root system growing downward from a seed point at the top of the canvas.

**Growth rules (simplified L-System):**
- Primary root grows downward with stochastic wobble
- At intervals, lateral roots branch off at angles
- Each root tip grows at a rate that decreases with root order (primary fastest, secondary slower, etc.)
- Growth direction at each step = weighted sum of:
  - Previous direction (momentum/inertia)
  - Gravitropism bias (toward bottom of screen)
  - Random perturbation (stochastic noise)
  - Hydrotropism bias (toward water source, if present)

**Visual:**
- Roots drawn as lines that thicken near the base (older = thicker)
- Growth animated in real time (not instant)
- Background represents soil (could be plain or have texture)

### Interactive Controls

Sliders or knobs (keeping the mixing console metaphor):

1. **Gravitropism strength** (0 to 1): How strongly roots bias downward. At 0, growth is random. At 1, roots go straight down.
2. **Stochastic noise** (0 to 1): How much random wobble at each growth step. At 0, perfectly smooth paths. At 1, very erratic.
3. **Branching frequency** (low / medium / high): How often lateral roots emerge.
4. **Branching angle** (narrow / medium / wide): Angle of lateral roots relative to parent.

### Key Interactions to Demonstrate

1. **Run twice with same settings:** Show that different random seeds produce different architectures but the same statistical character (family resemblance).
2. **Gravitropism slider:** Drag from high to low — watch roots go from orderly vertical to chaotic random walk.
3. **Noise slider:** Show the continuum between "too regular" (deterministic) and "too random" (no structure).

---

## Stretch Features (If Time Allows)

### Water Source
- Click to place a water source (blue circle) on the canvas
- Roots bias toward it (hydrotropism)
- Shows how environmental gradients shape root architecture
- Slider for hydrotropism strength

### Obstacle
- Click to place a rock (gray rectangle)
- Roots deflect around it (thigmotropism)
- Roots return to original growth direction after passing (the maple tree observation)

### Multiple Plants
- Place two seeds
- Roots from different plants shown in different colors
- When roots approach each other, they slow down or deflect (spatial segregation)
- Demonstrates root-root interaction without any explicit communication — just local rules

### Mycorrhizal Network
- After roots grow, draw thin connecting lines (fungal hyphae) between nearby root tips of different plants
- Purely visual (no simulation of resource flow)
- Makes the "Wood Wide Web" concept concrete

---

## Technical Approach

### Option A: React/JSX Artifact (recommended)

Build as a single React component that can render in a Claude artifact or be saved as a standalone HTML file. Uses:
- HTML5 Canvas or SVG for drawing
- `requestAnimationFrame` for animation
- React state for slider values
- No external dependencies beyond what's available in Claude artifacts (Tailwind for styling)

**Advantages:** Can be prototyped directly in this Claude project. Single file. Runs in any browser.

### Option B: Python + Pygame/Matplotlib

Build as a Python script. Uses:
- Pygame for real-time rendering, OR
- Matplotlib with animation

**Advantages:** Easier to implement L-System grammar formally. Better for Steven to iterate on with Claude Code.
**Disadvantages:** Requires Python environment. Less portable for presentation.

### Recommendation

Start with Option A (React artifact) for the presentation demo. If Steven wants to develop the L-System grammar more formally later, port to Python.

---

## Algorithm Pseudocode

```
initialize root_tips = [{x: center, y: top, angle: 90°, order: 0, age: 0}]

each frame:
  for each tip in root_tips:
    # Calculate growth direction
    gravity_vector = (0, 1) * gravitropism_strength
    noise_vector = random_unit_vector() * noise_strength
    momentum_vector = current_direction * 0.7
    
    if water_source exists:
      water_vector = normalize(water_pos - tip_pos) * hydrotropism_strength
    
    new_direction = normalize(momentum + gravity + noise + water)
    
    # Grow
    tip.x += new_direction.x * growth_rate
    tip.y += new_direction.y * growth_rate
    tip.age += 1
    
    # Branch?
    if tip.age % branch_interval == 0 and tip.order < max_order:
      new_tip = {
        x: tip.x, y: tip.y,
        angle: tip.angle + branch_angle * random_sign(),
        order: tip.order + 1,
        age: 0
      }
      root_tips.append(new_tip)
    
    # Die? (older, higher-order roots stop growing)
    if tip.age > max_age_for_order[tip.order]:
      tip.active = false

  draw all root segments
```

---

## Presentation Script

1. **"This is a simplified simulation of root growth using an L-System — a formal grammar for biological form."**
2. Start with default settings. Let roots grow for 10 seconds. "Watch — each root tip is making its own local decision. There's no central plan."
3. Reset. Run again. "Same rules, different result. This is what stochastic search looks like."
4. Drag gravitropism to zero. "Without gravity, the roots have no directional bias. They wander randomly."
5. Drag gravitropism back up, add a water source. "Now watch what happens when there's water over here..."
6. "This is a toy model. Real roots have eleven input channels, not two. But the principle is the same: local rules + environmental sensing + noise = emergent architecture."

---

## Content Sources

- L-System fundamentals: `07-computational-models.md`
- Tropism implementation: `01-tropisms.md`, `04-decision-system.md`
- Stochastic parameters: `08-stochasticity.md`
- Root-root interaction (stretch): `05-root-root-interactions.md`
