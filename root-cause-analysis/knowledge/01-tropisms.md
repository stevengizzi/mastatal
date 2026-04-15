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

# 01 — Tropisms: The Input Channels

Tropisms are directional growth responses to environmental stimuli. A root tip senses a stimulus and grows toward it (positive tropism) or away from it (negative tropism). The growth response is caused by differential cell elongation — one side of the root grows faster than the other, causing the root to curve [Gilroy2008].

Roots respond to at least eleven identified tropisms [Lucini2021]. Three are well understood (gravitropism, phototropism, hydrotropism). Several more are partially characterized. A few remain controversial — it's debated whether they're true tropisms or just damage-avoidance responses [Vandenbrink2020].

Tropisms typically begin within 30 minutes of stimulus exposure and can be completed within 5 hours [EBSCO_Tropisms].

---

## 1. Gravitropism (response to gravity)

**Direction:** Positive — roots grow toward gravity (downward).

**Sensor:** Statocytes (specialized cells) in the columella region of the root cap. These contain starch-filled amyloplasts called statoliths that physically settle to the bottom of the cell under gravity, like internal plumb bobs [Wikipedia_Gravitropism].

**Mechanism:** The settling of statoliths triggers a signaling cascade (still not fully understood) involving inositol trisphosphate (InsP3) and calcium (Ca2+) that leads to asymmetric redistribution of the hormone auxin. Auxin accumulates on the lower side of the root via polar auxin transport mediated by PIN transporter proteins. In roots, high auxin concentration *inhibits* cell elongation, so the lower side grows more slowly, and the root curves downward [Wikipedia_Gravitropism].

**Key detail:** Auxin redistribution shows a "tipping point" — fast movement to the lower side in response to displacement greater than 90° from vertical, but once the root reaches about 40° from horizontal, auxin distribution quickly shifts back toward symmetrical [Wikipedia_Gravitropism].

**Status:** Best understood tropism. However, how statolith settling is transduced to InsP3/Ca2+ signals remains largely elusive. The roles of secondary signals (pH, reactive oxygen species, nitric oxide, gibberellic acid) that are also asymmetrically altered in gravistimulated roots are poorly understood [Vandenbrink2020].

**Confidence:** [confidence: established]

---

## 2. Phototropism (response to light)

**Direction:** Negative — roots generally grow away from light.

**Sensor:** Phototropins (blue light receptors) and phytochromes (red light receptors). Only blue light with wavelength below 500nm induces phototropism [EBSCO_Tropisms].

**Mechanism:** Light perception leads to redistribution of PIN auxin transporter proteins, creating an auxin gradient. Follows the Cholodny-Went model [Wikipedia_Tropism].

**Key detail:** Darwin identified that the apex of the plant organ was required for phototropic sensitivity [Gilroy2008_CurrentBio]. Phytochrome is involved in regulating both gravitropism and phototropism, meaning these systems share sensory components [Lucini2021].

**Status:** Well characterized in general terms. Pronounced differences exist between species — this was noted almost a century ago but remains underexplored [Vandenbrink2020].

**Confidence:** [confidence: established]

---

## 3. Hydrotropism (response to water/moisture gradients)

**Direction:** Positive — roots grow toward higher water potential.

**Sensor:** Receptor-like kinases (RLKs) in root cap cell membranes that interact with aquaporin water channels called plasma membrane intrinsic proteins (PIPs) [Wikipedia_Hydrotropism].

**Mechanism:** This is the big surprise — hydrotropism does NOT follow the classical Cholodny-Went model. No apparent changes in auxin distribution were observed in roots exhibiting hydrotropism [Vandenbrink2020, Shkolnik2016]. Instead, it works through abscisic acid (ABA) signaling. ABA mutants that can't produce ABA show no hydrotropic response; applying ABA restores it [Wikipedia_Hydrotropism].

Cytokinins also play a role: asymmetrical cytokinin distribution leads to higher cell production toward lower water potential. Cytokinins cause degradation of PIN1 auxin transport proteins, which *suppresses* gravitropism to allow hydrotropism to take over [Wikipedia_Hydrotropism].

**Key detail:** Both the sensor and the response zone appear to be in the elongation zone (EZ), not the root cap — a major structural difference from gravitropism [Vandenbrink2020].

**Key detail:** Gravitropism is often dominant over hydrotropism. Under severe drought, the plant actively degrades the starch-filled amyloplasts used for gravity sensing, effectively disabling gravitropism to prioritize water-finding [Gilroy2008_CurrentBio].

**Status:** Described since 1887 but mechanisms are not fully elucidated. One of the main reasons is that gravitropism typically masks the hydrotropic response [Vandenbrink2020].

**Confidence:** [confidence: established] for ABA involvement; [confidence: inferred] for the full mechanistic picture.

---

## 4. Thigmotropism (response to touch/mechanical contact)

**Direction:** Variable — roots grow around obstacles, then often return to their original growth direction.

**Sensor:** Likely a mechanically sensitive ion channel (specific identity unknown). Triggers a Ca2+-related signaling network [Gilroy2008_CurrentBio].

**Mechanism:** Probably follows the Cholodny-Went model via asymmetrical distribution of the auxin transporter PIN2, but the molecular connections are still being worked out [Vandenbrink2020]. Mechanical stimulation represses gravitropism, but through a different mechanism than hydrotropism — NOT through starch degradation [Gilroy2008_CurrentBio].

**Key detail:** Maple tree roots have been observed to curve back to their original growth direction after passing an obstacle [Wilson_via_Patino2020]. This suggests a "memory" of prior growth direction, possibly maintained by internal hormone gradients.

**Status:** Partially characterized. The sensor is unknown and the signaling pathway from touch to PIN2 redistribution needs clarification [Vandenbrink2020].

**Confidence:** [confidence: established] for the phenomenon; [confidence: inferred] for mechanism details.

---

## 5. Halotropism (response to salt concentration)

**Direction:** Negative — roots grow away from high salt.

**Sensor:** Unknown, but the mechanism involves degradation of amyloplasts (the same structures used for gravity sensing), which attenuates gravitropism to allow the salt-avoidance response [Vandenbrink2020].

**Mechanism:** Likely a Cholodny-Went tropism operating through the elongation zone [Vandenbrink2020].

**Status:** Relatively recently characterized. Interesting because it shares the strategy of disabling gravitropism (like hydrotropism does), but through a different molecular pathway.

**Confidence:** [confidence: established] for the phenomenon; [confidence: inferred] for mechanism.

---

## 6. Chemotropism (response to chemical gradients)

**Direction:** Variable — toward nutrients, away from toxins.

**Sensor:** Unknown.

**Mechanism:** Unknown. This is a controversial category — researchers caution that some directional responses to chemicals may be damage/avoidance responses rather than true tropisms [Vandenbrink2020].

**Status:** Listed as a possible tropism in many publications, but mechanisms are far less clear than gravitropism or phototropism [Vandenbrink2020].

**Confidence:** [confidence: inferred] for existence as a true tropism.

---

## 7. Thermotropism (response to temperature gradients)

**Direction:** Variable — generally toward optimal temperature.

**Sensor:** Unknown.

**Mechanism:** Unknown. Philippe Van Tieghem noted that plants exposed to optimal temperature on one side grew faster on that side [WorldAtlas_Tropisms].

**Status:** Poorly characterized. Needs further investigation to determine if this is a true tropism [Lucini2021].

**Confidence:** [confidence: inferred]

---

## 8. Magnetotropism (response to magnetic fields)

**Direction:** Variable.

**Sensor:** Unknown.

**Mechanism:** Unknown. Some apparent directional responses to magnetic fields may be damage responses rather than tropisms [Vandenbrink2020].

**Status:** Poorly characterized. Whether this qualifies as a bona fide tropism is debated [Lucini2021].

**Confidence:** [confidence: speculative]

---

## 9. Electrotropism (response to electric fields)

**Direction:** Variable.

**Sensor:** Unknown.

**Mechanism:** Unknown. Same concerns as magnetotropism — may be damage response rather than true directional growth [Vandenbrink2020].

**Status:** The capacity of plant roots to sense electric fields remains an open issue [Lucini2021].

**Confidence:** [confidence: speculative]

---

## 10. Oxytropism (response to oxygen gradients)

**Direction:** Variable — presumably toward higher oxygen availability.

**Sensor:** Unknown.

**Mechanism:** Unknown.

**Status:** Poorly characterized [Lucini2021].

**Confidence:** [confidence: speculative]

---

## 11. Phonotropism (response to sound)

**Direction:** Toward sound source (based on limited evidence).

**Sensor:** Unknown.

**Mechanism:** Unknown, but the phenomenon is suggestive. Young maize roots were found to make tiny clicking sounds at approximately 220 Hz, and when suspended in water so they could move freely, they leaned toward these sounds [Frontiers_KidsPlantsTalk]. Chili seedlings grow differently in the presence of different neighboring species, and researchers speculate that cellular vibrations may serve as inter-plant communication signals [Frontiers_KidsPlantsTalk].

**Status:** Recently proposed. Very preliminary evidence. Whether this qualifies as a tropism sensu stricto is uncertain [Lucini2021].

**Confidence:** [confidence: speculative]

---

## Summary: Tropism Status Table

| Tropism | Stimulus | Direction (roots) | Sensor Known? | Mechanism Known? | Follows Cholodny-Went? |
|---|---|---|---|---|---|
| Gravitropism | Gravity | Positive (toward) | Yes — statoliths | Mostly — auxin/PIN | Yes |
| Phototropism | Light | Negative (away) | Yes — phototropins | Mostly — auxin/PIN | Yes |
| Hydrotropism | Water gradient | Positive (toward) | Partially — RLKs | Partially — ABA | **No** |
| Thigmotropism | Touch | Variable | No | Partially — PIN2 | Probably |
| Halotropism | Salt | Negative (away) | No | Partially | Probably |
| Chemotropism | Chemicals | Variable | No | No | Unknown |
| Thermotropism | Temperature | Variable | No | No | Unknown |
| Magnetotropism | Magnetic field | Variable | No | No | Unknown |
| Electrotropism | Electric field | Variable | No | No | Unknown |
| Oxytropism | Oxygen | Variable | No | No | Unknown |
| Phonotropism | Sound | Toward (?) | No | No | Unknown |
