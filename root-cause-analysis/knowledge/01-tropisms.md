# 01 — Tropisms: The Input Channels

> **Prerequisites:** Read `00-foundations.md` first. It defines the Cholodny-Went model, PIN proteins, auxin transport, statoliths, and other core concepts used throughout this file.

Tropisms are directional growth responses to environmental stimuli. When a root tip senses a stimulus coming from a specific direction, it bends toward it (positive tropism) or away from it (negative tropism). The bending is caused by **differential cell elongation** — cells on one side of the root elongate faster than cells on the other side. Because plant cells are fused together by their cell walls and can't slide past each other, faster growth on one side forces the whole structure to curve toward the slower-growing side [Gilroy2008_CurrentBio].

Roots respond to at least eleven identified tropisms [Lucini2021]. Three are well understood at the molecular level (gravitropism, phototropism, hydrotropism). Two more are partially characterized (thigmotropism, halotropism). The remaining six are poorly understood or controversial — it's debated whether some of them are true tropisms or just damage-avoidance responses [Vandenbrink2020].

**How fast does this happen?** When a root's orientation is suddenly changed (e.g., the plant tips over), visible bending begins within about 30 minutes and a full course correction takes roughly 3-5 hours. See `00-foundations.md`, "Timing" section for a step-by-step breakdown of what's happening during those 30 minutes. Root growth is continuous, not stepwise — the root is always growing, always sensing, always adjusting. The 30-minute figure is how long it takes for a course correction to become visible after a sudden change, not the interval between "decisions" [Vaia_Gravitropism, EBSCO_Tropisms].

---

## 1. Gravitropism (response to gravity)

**Direction:** Positive — roots grow toward gravity (downward).

**What you need to know first:** This section assumes you've read about statoliths, PIN proteins, and the Cholodny-Went model in `00-foundations.md`. Here we go deeper into the mechanism.

### The step-by-step mechanism

Here's what happens when a root is displaced from vertical — say, a seedling tips over:

**Step 1: Statolith settling (0-2 minutes)**
In the columella cells of the root cap (see `00-foundations.md` for anatomy), dense starch-filled granules called statoliths are sitting at the bottom of each cell. When the root tips sideways, these granules physically slide to the *new* bottom — whichever side is now facing down. This is purely mechanical, like sand shifting in a tilted hourglass [Vandenbrink2020].

**Step 2: LAZY protein relocalization (2-10 minutes)**
A protein called LAZY (also known as NGR) is normally distributed along the cell membrane. After statoliths settle to one side, LAZY protein relocates to *that same side* — the gravitationally lowest membrane. How statolith settling causes LAZY to move is still not fully understood — this is one of the key gaps in the gravitropism story. LAZY then recruits another protein (RLD) to form a complex [Han2021].

**Step 3: PIN protein relocalization (5-15 minutes)**
The LAZY-RLD complex guides the repositioning of PIN3 and PIN7 transporter proteins (the "auxin exit doors" — see `00-foundations.md`) to the lower membrane of the columella cells. With PIN3/PIN7 now pointing downward, auxin gets pumped preferentially out the bottom of these cells [Han2021].

**Step 4: Auxin accumulates on the lower side (10-25 minutes)**
The redirected PIN3/PIN7 proteins create an asymmetric auxin flow. More auxin now flows to the lower side of the root. This auxin is then transported upward (away from the tip) through the outer cell layers by PIN2, reaching the elongation zone — the region where cells are actively stretching to make the root longer [Vandenbrink2020].

**Step 5: Differential cell elongation (20-30+ minutes)**
Here's the key: in roots, **high auxin concentration inhibits cell elongation.** (This is the opposite of stems, where auxin promotes elongation — see `00-foundations.md`, Cholodny-Went section for why.) So the cells on the lower side, now flooded with extra auxin, slow their elongation. The cells on the upper side, with less auxin, continue elongating at the normal rate. Faster growth on top + slower growth on bottom = the root curves downward [Vandenbrink2020, Han2021].

**Step 6: Self-correction (30 minutes - 5 hours)**
As the root bends, its angle relative to gravity changes. This changes the direction of statolith settling, which updates the PIN positioning, which updates the auxin gradient. It's a continuous feedback loop. Interestingly, there's a "tipping point": auxin redistribution is fast and strong when the root is more than ~50° from vertical, but once it gets within about 40° of vertical, auxin distribution quickly shifts back toward symmetrical. This prevents overshoot — the root doesn't curve past vertical and start oscillating [Vandenbrink2020]. [confidence: established]

### What's still unknown about gravitropism

Even though gravitropism is the best-understood tropism, significant gaps remain:
- **The statolith → LAZY connection:** How does physical settling of starch granules cause a membrane protein to relocalize? This is the most fundamental unsolved step [Vandenbrink2020].
- **The roles of secondary signals:** Calcium (Ca²⁺), pH changes, reactive oxygen species (ROS), and nitric oxide (NO) are all asymmetrically altered in gravistimulated roots. Whether these are part of the primary signal chain or secondary effects is unclear [Vandenbrink2020].
- **Gibberellic acid involvement:** Asymmetric GA levels are found on the lower side of gravistimulated roots, and GA appears to help retain PIN2 at the cell membrane. But the relative contribution of GA vs. auxin to gravitropic bending hasn't been determined [Vandenbrink2020].

---

## 2. Phototropism (response to light)

**Direction:** Negative — roots generally grow *away* from light.

### What triggers it

Two families of photoreceptor proteins are involved:

**Phototropins** (phot1, phot2) detect **blue light** — wavelengths below about 500nm. This includes violet (~380-450nm) and blue (~450-500nm) light. Green, yellow, orange, and red light do NOT directly trigger phototropism. Why blue specifically? Phototropins contain a molecular component called a flavin that absorbs blue light efficiently; it's the wavelength that matches the receptor's chemistry [Liscum2014].

In practical terms: direct sunlight and artificial white/fluorescent light contain plenty of blue wavelengths and will trigger root phototropism. Pure red or infrared light sources will not.

**Phytochromes** (phyA, phyB) detect **red light** (~620-700nm) and **far-red light** (~700-800nm). Phytochromes don't directly drive phototropic bending, but they modulate how sensitive the root is to gravity. The connection between phytochromes and gravitropism is still being clarified, but here's the likely logic: in nature, light from above indicates the soil surface. Phytochromes detecting red light may signal "we're near the surface," which adjusts the gravitropic response — for instance, making lateral roots grow at a shallower angle near the surface where light penetrates. This isn't the root "assuming gravity is opposite to light" — it's more that light detection adjusts the calibration of the gravity response [Lucini2021]. [confidence: inferred]

### The mechanism

Phototropism in roots follows the Cholodny-Went model (same core mechanism as gravitropism):

1. Blue light is detected by phototropins, primarily in the root tip
2. Phototropin activation triggers relocalization of PIN proteins
3. Auxin is redistributed — more accumulates on the lit side of the root
4. In roots, higher auxin inhibits elongation, so the lit side grows more slowly
5. Slower growth on the lit side → the root bends away from the light (negative phototropism)

**How this relates to gravitropism:** The molecular machinery is partly shared. Both tropisms use PIN proteins to create auxin gradients. Both act in the elongation zone. The difference is the upstream trigger — statoliths for gravity, phototropins for light. When both stimuli are present simultaneously, the signals compete for control of the same PIN protein positions. A 2023 study found that the genes MIZ1 and GNOM, originally identified in hydrotropism, are also required for root phototropism — suggesting that the wiring between tropisms is more interconnected than previously thought [Pang2023_JXB]. [confidence: established]

---

## 3. Hydrotropism (response to water/moisture gradients)

**Direction:** Positive — roots grow toward higher water potential (toward wetter soil).

This is the most surprising tropism because it breaks the rules established by gravitropism and phototropism. It appears to use a fundamentally different signaling system.

### The sensor

The root detects moisture gradients using **receptor-like kinases (RLKs)** — proteins that span the cell membrane with a sensor on the outside and an enzyme (a kinase) on the inside (see `00-foundations.md` for kinase definition). These RLKs appear to interact with **aquaporins** (water channel proteins) called PIPs (plasma membrane intrinsic proteins) in the cell membranes of the root cap.

The working hypothesis: aquaporin PIPs are constantly transporting water molecules. When there's a moisture gradient across the root, the aquaporins on the drier side experience different water flow than those on the wetter side. This difference is detected by the associated RLKs, which activate an internal signaling cascade. But the precise molecular mechanism is still being worked out [Vandenbrink2020]. [confidence: inferred]

### The mechanism — why it's different from gravitropism

Here's the big surprise: **hydrotropism does NOT appear to work through asymmetric auxin distribution.** When researchers measured auxin levels in roots exhibiting hydrotropic bending, they found no significant asymmetry — unlike in gravitropism, where the auxin gradient is clear and measurable [Vandenbrink2020, Shkolnik2016].

Instead, hydrotropism works primarily through **abscisic acid (ABA)**, a different hormone:

1. The root detects a moisture gradient (drier on one side, wetter on the other)
2. ABA signaling is activated. Plants that can't produce ABA (mutant strains) show no hydrotropic response at all. When ABA is artificially added back, the response is restored [Vandenbrink2020]
3. ABA-driven signaling causes differential cell elongation in the elongation zone, bending the root toward moisture

**Why ABA instead of auxin?** This is a genuinely open question. One hypothesis: hydrotropism and gravitropism need to be able to operate independently, and sometimes in opposition (water is to the left but gravity is down). If both used the same auxin-based machinery, they'd be locked in constant molecular conflict over the same PIN proteins. By using a separate signaling pathway (ABA), hydrotropism can operate on a "separate channel" from gravitropism. This is speculation, but it's consistent with the observation that the two systems can be independently switched on and off [confidence: speculative].

**Another difference:** In gravitropism, the sensor is in the root cap and the response is in the elongation zone — two physically separate regions. In hydrotropism, both sensing AND response appear to happen in the elongation zone. This is a major structural difference that may relate to why the mechanisms diverge [Vandenbrink2020].

### The cytokinin-gravitropism suppression trick

Now for the sentence from the original doc that caused confusion: *"Cytokinins also play a role: asymmetrical cytokinin distribution leads to higher cell production toward lower water potential."*

Let's unpack this carefully, because it sounds contradictory.

Hydrotropism means growing *toward* wetter soil (higher water potential). To bend that way, the root needs *less* growth on the wet side and *more* growth on the dry side. Or alternatively, it needs to suppress the gravitropic response that would otherwise override the hydrotropic bend.

Here's what the cytokinin system actually does:

1. Under a moisture gradient, cytokinins accumulate asymmetrically in the root
2. Cytokinins cause the degradation of **PIN1 proteins** — the auxin transporters in the root's vascular core that drive gravitropic auxin redistribution
3. With PIN1 degraded, the gravitropic auxin gradient is disrupted — essentially, *gravitropism is turned down*
4. With gravitropism attenuated, the ABA-driven hydrotropic response can take the lead

So the cytokinin role is primarily as a **gravitropism suppressor**, not as a direct driver of hydrotropic bending. It's part of the priority-switching mechanism: the plant needs to reduce gravity's "volume" so it can "hear" the water signal. Cytokinins help accomplish this by dismantling the PIN1 auxin transport system that gravitropism depends on [Vandenbrink2020].

**Why do cytokinins degrade PIN1?** Cytokinin signaling triggers a chain of events that routes PIN1 proteins to the cell's recycling system (the lytic vacuole) instead of back to the membrane. Normally, PIN proteins cycle continuously between the membrane and internal compartments — they're constantly being pulled in and put back. Cytokinin tips the balance toward degradation: more PIN1 gets sent to the vacuole for breakdown, less gets returned to the membrane. The cell ends up with fewer PIN1 proteins on its surface, weakening auxin transport. The exact mechanism involves the phosphorylation status (whether the protein has been tagged with a phosphate group) of PIN1 — this tag affects whether PIN1 gets recycled or destroyed [Jaillais2016_via_Marhavy2014]. [confidence: established for the phenomenon; inferred for the detailed mechanism]

### The amyloplast degradation backup

As if the cytokinin-PIN1 pathway weren't enough, under severe drought the plant deploys a second, more dramatic mechanism: it **actively degrades the statoliths themselves** — the starch granules used for gravity sensing. No statoliths → no gravity detection → gravitropism goes offline entirely. This is like not just turning down the volume on the gravity channel, but physically removing the microphone [Gilroy2008_CurrentBio].

This degradation appears to be triggered by ABA signaling and may involve autophagy (the cell's self-recycling mechanism) [confidence: established for phenomenon; inferred for autophagy involvement]

### Species differences in hydrotropism

This is one area where species differences are especially important:
- In **rice and pea**, auxin transport IS involved in hydrotropism — auxin transport inhibitors reduce both gravitropic and hydrotropic responses [Nakajima2017]
- In **Lotus japonicus** (a legume), hydrotropism is completely independent of auxin transport — inhibitors reduce gravitropism but don't affect (and may even enhance) hydrotropic bending [Nakajima2017]
- In **Arabidopsis**, the picture is complicated — some auxin pathway components seem involved, but the ABA pathway appears primary [Vandenbrink2020]

This means there is NOT a single universal mechanism for hydrotropism. Different plant lineages have evolved different solutions to the same problem: find water. [confidence: established]

---

## 4. Thigmotropism (response to touch/mechanical contact)

**Direction:** Negative in roots — roots grow *away* from obstacles. (Positive in climbing tendrils/vines, which grow *toward* contact surfaces.)

Thigmotropism is the root's obstacle-avoidance system. In engineering terms, it's collision detection and rerouting.

### Detection: only on contact, but with a scanning trick

Roots do NOT sense obstacles before physical contact. There's no sonar, no field detection, no "seeing ahead." The root must physically touch the obstacle before responding [Lee2020_NewPhyt].

However, roots have a workaround: most roots exhibit **circumnutation** — a natural helical/wobbling growth pattern where the root tip traces small circles as it advances. This creates a scanning motion. The root doesn't detect obstacles from afar, but its constant spiraling means it encounters obstacles from multiple angles, giving it directional information about the obstacle's shape [SciDirect_Thigmo].

### The step-by-step mechanism

**Step 1: Contact detection (milliseconds to seconds)**
When the root tip contacts a rigid obstacle, mechanosensitive ion channels in the plasma membrane are physically deformed. These stretch-activated channels open, allowing calcium ions (Ca²⁺) to rush into the cell — a rapid alarm signal [Wikipedia_Thigmo, BotanyParul_Thigmo].

**Step 2: Signal cascade (seconds to minutes)**
The calcium influx triggers secondary messengers: reactive oxygen species (ROS), membrane depolarization, and calcium-dependent protein kinase activation. Touch-responsive genes (TCH gene family) are activated, altering cell wall properties and growth patterns [PMC_TouchResponse2025].

**Step 3: Ethylene suppression and auxin redistribution (minutes)**
Under normal conditions, the hormone ethylene maintains high concentrations in the root tip, promoting straight growth. On obstacle contact, ethylene production is *down-regulated*, permitting bending [Wikipedia_Thigmo]. Simultaneously, auxin is redistributed asymmetrically via PIN proteins (likely PIN2), creating differential growth [Lee2020_NewPhyt].

**Key finding (Lee et al., 2020):** The first bending during obstacle avoidance is NOT just the root passively crumpling against a barrier — it involves *active* signal transduction through PIN-mediated auxin transport. This confirmed thigmotropism is a true tropism, not mechanical deformation [Lee2020_NewPhyt].

**Step 4: Gravitropism suppression (during obstacle engagement)**
Touch stimulation of root cap cells directly inhibits amyloplast sedimentation in the columella — the statoliths can't settle properly while the touch signal is active. This is a third distinct gravitropism-suppression mechanism: hydrotropism *degrades* statoliths, halotropism *degrades* them too, but thigmotropism temporarily *immobilizes* them without destroying them. When contact is lost, statoliths resume settling and gravitropism reasserts itself [MassaGilroy2003]. [confidence: established for phenomenon; the molecular pathway from touch → statolith immobilization is inferred]

**Step 5: Return to original trajectory (after losing contact)**
After passing the obstacle, ethylene production resumes (promoting straight growth) and gravitropism reactivates. This explains why maple tree roots curve back to their original direction after passing obstacles [Wilson_via_Patino2020].

**Is this "memory" or just gravitropism reasserting?** The return to original direction is most likely gravitropism kicking back in — not a separate memory system. The root doesn't "remember" where it was going; it defaults back to its gravitropic set-point angle. For a primary root, that's straight down. For a lateral root, it's whatever oblique angle is genetically programmed. So the "memory" IS the gravitropic set-point — a hardcoded default, not a recall of the specific pre-obstacle path. [confidence: inferred]

### What we still don't know

- Which part of the root senses touch? Root cap is plausible but unproven [Lee2020_NewPhyt]
- The full molecular pathway from "ion channel opens" to "PIN2 redistributes" is unmapped [Vandenbrink2020]
- How thigmotropism weighs against hydrotropism, halotropism, etc. is unknown
- Prolonged mechanical stress (compacted soil) suppresses auxin *biosynthesis* itself — not just transport — suggesting deeper adaptation to continuous resistance [PMC_TouchResponse2025] [confidence: established]

---

## 5. Halotropism (response to salt concentration)

**Direction:** Negative — roots grow away from high salt. (Some halophytes may grow *toward* moderate salt [Frontiers_Halotropism2020].)

### Why do roots avoid salt?

Salt (specifically sodium, Na⁺) is toxic to most plants for three compounding reasons:

1. **Osmotic stress:** High external salt pulls water OUT of root cells. The root can't absorb water in salty soil — it actually loses water. Salty environments cause drought-like symptoms even in wet soil.
2. **Ionic toxicity:** Na⁺ disrupts cellular enzymes, damages membranes, and blocks potassium uptake.
3. **Oxidative damage:** Salt stress triggers reactive oxygen species (ROS) that damage proteins and DNA.

Most crop plants suffer at sodium concentrations above 50-100 mM. Halophytes (mangroves, quinoa, saltgrass) have evolved tolerance mechanisms [Frontiers_Halotropism2020].

### The step-by-step mechanism

Characterized in 2013 by Galvan-Ampudia et al. in Arabidopsis, tomato, and sorghum:

**Step 1: Sodium detection.** The sensor is still unknown, but it's sodium-specific — K⁺, Li⁺, and osmotic stress alone don't trigger it [GalvanAmpudia2013]. The SOS (Salt Overly Sensitive) pathway is involved. A 2024 study identified a root-cap transcription factor (SOMBRERO/SMB) required for halotropism [NatComms_SMB2024].

**Step 2: PIN2 internalization on the salt-facing side.** Salt triggers phospholipase D activity → phosphatidic acid (PA) → clathrin-mediated endocytosis pulls PIN2 proteins *inside* the cell on the salt-facing side. Critically, PIN2 is NOT degraded (unlike in gravitropism) — just temporarily removed from the membrane surface [GalvanAmpudia2013].

**Step 3: Auxin accumulation on the non-salt side.** Without PIN2 on the salt-facing side, auxin builds up on the opposite side. AUX1 upregulation and transient PIN1 increases amplify the asymmetry [VanDenBerg2016_model].

**Step 4: Differential growth → bending away from salt.** Standard Cholodny-Went bending via the elongation zone.

**Step 5: Gravitropism suppression.** Salt also causes amyloplast degradation and affects PIN2 cycling. A February 2025 PNAS paper showed core ABA signaling is essential for halotropism — ABA biosynthesis mutants had significantly reduced response [PNAS_ABA_Halotropism2025]. ABA also mediates microtubule reorientation that alters cell-wall structure during bending [Yu2022_via_Insights2023].

### Where halotropism fits on the "bracket"

Halotropism is a **hybrid**: it uses PIN2/auxin machinery (like gravitropism) for execution, but requires ABA signaling (like hydrotropism) for activation. It sits between the two main groups. See `04-decision-system.md` for the full bracket model. [confidence: established]

---

## 6. Chemotropism (response to chemical gradients)

**Direction:** Variable — toward nutrients (positive), away from toxins (negative).

### True tropism vs. damage/avoidance response — what's the difference?

This distinction comes up repeatedly, so let's define it clearly:

**True tropism:** The root actively detects a *gradient* and redirects growth through hormone-mediated differential elongation. Operates at sub-damaging stimulus levels. Proportional to gradient steepness. Involves active signal transduction.

**Damage/avoidance response:** Cells on the exposed side are injured or killed. They stop growing. The undamaged side keeps growing. The root appears to "bend away," but there's no active signaling — it's just one side dying. Only operates at damaging stimulus levels.

The difference matters: a tropism can work as an early-warning system (detecting gradients before damage occurs), while a damage response only kicks in after harm has happened.

### Is chemotropism meaningfully different from halotropism?

Yes. Halotropism is sodium-specific, has an identified molecular mechanism (phospholipase D → PIN2 internalization), and is confirmed as a true tropism. General chemotropism is a catch-all category where most proposed responses haven't been proven to involve active directional signaling versus differential damage [Vandenbrink2020].

Some documented phenomena that may be chemotropic:
- Root proliferation in phosphorus-rich or nitrogen-rich soil patches — established, but is this gradient-following (tropism) or just "roots grow better where nutrients are" (differential growth)? Not fully resolved.
- Root avoidance of allelopathic chemicals from competing plants — true tropism or damage? Debated.
- Root growth toward symbiotic partners (rhizobial bacteria for legumes) — some evidence for active chemotactic signaling.

Over time, some chemotropic responses may get "promoted" to named tropisms as their mechanisms are characterized — halotropism itself was once part of chemotropism before being separated [Vandenbrink2020]. [confidence: established for distinctions; inferred for specific chemotropic mechanisms]

---

## 7-11. The Less-Characterized Tropisms

### 7. Thermotropism (response to temperature gradients)

First described by Van Tieghem in the 1800s. Roots show directional responses to temperature gradients, growing toward optimal temperature. No thermosensor identified. Temperature affects enzyme activity, membrane fluidity, and auxin metabolism — differential temperature across a root could create growth asymmetry through direct biophysical effects.

**Permaculture relevance:** Soil temperature gradients from mulch vs. bare soil (5-10°C difference) might influence root direction if thermotropism is functional. [confidence: speculative]

### 8. Magnetotropism (response to magnetic fields)

Some reports of directional root growth in magnetic fields, but evidence is weak and inconsistent. Concern: strong fields may damage cells asymmetrically (damage response, not tropism). No magnetoreceptor identified in plants. One of the most contested proposed tropisms [Vandenbrink2020]. [confidence: speculative]

### 9. Electrotropism (response to electric fields)

Roots and fungal hyphae respond to electric fields, requiring external calcium for the response [SciDirect_Thigmo]. Natural electric fields exist in soil from mineral gradients and microbial activity. But the sensing mechanism is unknown and distinguishing tropism from damage is unresolved [Vandenbrink2020]. [confidence: speculative]

### 10. Oxytropism (response to oxygen gradients)

Ecologically plausible — waterlogged soils are hypoxic and roots need oxygen. Some roots grow toward better-aerated zones. Unclear if this is active gradient-following or differential growth. Soil compaction and aeration management directly affect the oxygen landscape roots navigate. [confidence: speculative]

### 11. Phonotropism (response to sound)

The most provocative: maize roots produce clicking sounds at ~220 Hz and lean toward sounds in water [Frontiers_KidsPlantsTalk]. Plants emit ultrasonic sounds (20-150 kHz) when stressed. No mechanoreceptor for airborne sound identified in roots. If real, it would imply distance-sensing without chemical diffusion — sound propagates through soil water faster than chemical signals. Poorly replicated and highly speculative [Lucini2021]. [confidence: speculative]

### Where do tropisms 7-11 fit on the "bracket"?

We don't know — none have characterized molecular pathways, so we can't place them in the auxin-based or ABA-based competition groups. They're candidates for future bracket expansion. For the presentation: *the system might have even more input channels than we've mapped.*

---

## Summary Table

| Tropism | Stimulus | Direction (roots) | Sensor Known? | Mechanism | Follows Cholodny-Went? | Bracket Group |
|---|---|---|---|---|---|---|
| Gravitropism | Gravity | Positive (toward) | Yes — statoliths/LAZY | Auxin/PIN redistribution | Yes | Auxin-based (Tier 1) |
| Phototropism | Light (blue) | Negative (away) | Yes — phototropins | Auxin/PIN redistribution | Yes | Auxin-based (Tier 4) |
| Hydrotropism | Water gradient | Positive (toward) | Partially — RLKs/PIPs | ABA signaling (NOT auxin) | **No** | ABA-based (Tier 2) |
| Thigmotropism | Touch | Negative (away) | No — likely ion channel | Ethylene + auxin/PIN2 | Partially | Auxin-based (Tier 3) |
| Halotropism | Salt | Negative (away) | Partially — SOS/SMB | PIN2 internalization + ABA | Hybrid | Hybrid (Tier 2) |
| Chemotropism | Chemicals | Variable | No | Unknown (may be damage) | Unknown | Unplaced |
| Thermotropism | Temperature | Toward optimal | No | Unknown | Unknown | Unplaced |
| Magnetotropism | Magnetic field | Variable | No | Unknown (may be damage) | Unknown | Unplaced |
| Electrotropism | Electric field | Variable | No | Unknown | Unknown | Unplaced |
| Oxytropism | Oxygen | Toward O₂ (?) | No | Unknown | Unknown | Unplaced |
| Phonotropism | Sound | Toward (?) | No | Unknown | Unknown | Unplaced |