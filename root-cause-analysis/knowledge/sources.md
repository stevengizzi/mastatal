# Sources

Citation keys used throughout the `knowledge/` files. Format: `[AuthorYear]` or `[ShortName]`.

---

## Primary Research Papers

### [Vandenbrink2020]
- **Title:** Root Tropisms: Investigations on Earth and in Space to Unravel Plant Growth Direction
- **Authors:** Vandenbrink JP, Kiss JZ, et al.
- **Published:** Frontiers in Plant Science, 2020
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC7047216/
- **Notes:** Comprehensive review of all root tropisms in Arabidopsis. Detailed on gravitropism signaling gaps. Includes table of sensor regions, signaling mechanisms, and action regions. Cautions about electro/magneto/phonotropism legitimacy. Key source for tropism catalog.

### [Lucini2021]
- **Title:** Root Tropisms: New Insights Leading the Growth Direction of the Hidden Half
- **Authors:** Lucini et al.
- **Published:** PMC, 2021
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC7912432/
- **Notes:** Lists all 11 tropisms. Discusses vector hypothesis for tropism interaction. Notes open questions about relative tropism strengths and masking thresholds. Good summary of research frontiers.

### [Leitner2010]
- **Title:** A dynamic root system growth model based on L-Systems
- **Authors:** Leitner D, Klepsch S, Bodner G, Schnepf A
- **Published:** Plant and Soil, 2010
- **URL:** https://link.springer.com/article/10.1007/s11104-010-0284-7
- **Notes:** Core L-System root modeling paper. Implements tropisms as stochastic processes. Couples root growth to soil phosphate uptake model. Demonstrates effects of gravitropism and chemotropism on nutrient acquisition.

### [Schnepf2010]
- **Title:** The algorithmic beauty of plant roots – an L-System model for dynamic root growth simulation
- **Authors:** Schnepf A, Leitner D, et al.
- **Published:** Mathematical and Computer Modelling of Dynamical Systems, 2010
- **URL:** https://www.tandfonline.com/doi/full/10.1080/13873954.2010.491360
- **Notes:** Reproduces Kutschera's 1960s hand drawings of excavated root systems using parametric L-Systems. Details how gravitropism and plagiotropism are implemented via stochastic angle selection. Key source for the "N candidate rotations" mechanism.

### [Pound2019]
- **Title:** RootNav 2.0: Deep learning for automatic navigation of complex plant root architectures
- **Authors:** Pound MP, et al.
- **Published:** PMC, 2019
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC6839032/
- **Notes:** Uses deep learning CNN for root segmentation plus Dijkstra's shortest-path algorithm for root architecture reconstruction. Interesting because it literally uses pathfinding algorithms to trace roots.

### [CNN_AStar2021]
- **Title:** CNN based Heuristic Function for A* Pathfinding Algorithm: Using Spatial Vector Data to Reconstruct Smooth and Natural Looking Plant Roots
- **Published:** bioRxiv, 2021
- **URL:** https://www.biorxiv.org/content/10.1101/2021.08.17.456626v1.full
- **Notes:** Extends RootNav with angle-based A* heuristics for better root reconstruction where roots grow in close proximity.

### [Goriely2020]
- **Title:** Multiscale integration of environmental stimuli in plant tropism produces complex behaviors
- **Authors:** Goriely A, et al.
- **Published:** PNAS, 2020
- **URL:** https://www.pnas.org/doi/10.1073/pnas.2016025117
- **Notes:** Formal multiscale model linking hormone transport → tissue deformation → mechanical forces → organ shape change → new stimulus. Captures gravitropic, phototropic, nutational, and thigmotropic responses in one framework.

### [Depuydt2014]
- **Title:** Arguments for and against self and non-self root recognition in plants
- **Authors:** Depuydt S
- **Published:** Frontiers in Plant Science, 2014
- **URL:** https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2014.00614/full
- **Notes:** Mini-review of root identity recognition. Covers four proposed mechanisms. Notes the field is controversial and species-specific. Describes overproliferation, segregation, attraction responses.

### [Biedrzycki2010]
- **Title:** Root exudates mediate kin recognition in plants
- **Authors:** Biedrzycki ML, et al.
- **Published:** PMC, 2010
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC2881236/
- **Notes:** Demonstrates root exudates as kin recognition signals in Arabidopsis under sterile conditions (eliminating microbial involvement). Key evidence that recognition is direct chemical signaling.

### [Crepy2015]
- **Title:** Self-plant perception via long-distance signaling
- **Authors:** Crepy MA, Casal JJ
- **Published:** PMC, 2015 (approx)
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC5792132/
- **Notes:** Shows Arabidopsis can perceive population density via volatile compounds at distance. High density suppresses root growth through antagonistic effects on auxin signaling.

### [Rowe2016]
- **Title:** Abscisic acid regulates root growth under osmotic stress conditions via an interacting hormonal network with cytokinin, ethylene and auxin
- **Authors:** Rowe JH, et al.
- **Published:** New Phytologist, 2016
- **URL:** https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.13882
- **Notes:** Shows tissue-specific hormone interplay under osmotic stress. PIN1 and PIN2 respond differently. Demonstrates that four hormones (ABA, auxin, cytokinin, ethylene) must be studied as an integrative system.

### [Leyser2018]
- **Title:** Auxin Interactions with Other Hormones in Plant Development
- **Published:** PMC, 2018 (approx)
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC8485746/
- **Notes:** Comprehensive review of auxin cross-talk with ABA, BR, CK, ET, GA, JA, SA, and SL. Organized by hormone pairs. Key source for hormone network architecture.

### [Kurepa2022]
- **Title:** Auxin/Cytokinin Antagonistic Control of the Shoot/Root Growth Ratio
- **Published:** Int. J. Mol. Sci., 2022
- **URL:** https://uknowledge.uky.edu/cgi/viewcontent.cgi?article=1174&context=pss_facpub
- **Notes:** Details auxin signaling mechanism (repression-release), cytokinin signaling (two-component), and their antagonistic interaction. Evidence that auxin is the primary regulatory component.

### [SYAC1_2020]
- **Title:** SYNERGISTIC ON AUXIN AND CYTOKININ 1 positively regulates growth and attenuates soil pathogen resistance
- **Published:** Nature Communications, 2020
- **URL:** https://www.nature.com/articles/s41467-020-15895-5
- **Notes:** Identifies a gene whose expression requires both auxin AND cytokinin (synergistic activation). Shows molecular backbone of hormone pathways is known but interaction mechanisms are largely unknown.

### [Weiss2007]
- **Title:** Mechanisms of Cross Talk between Gibberellin and Other Hormones
- **Published:** PMC, 2007
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC1914132/
- **Notes:** GA interactions with all other hormones. GA-cytokinin antagonism in root elongation.

### [Boudon2012]
- **Title:** L-Py: An L-System Simulation Framework for Modeling Plant Architecture Development Based on a Dynamic Language
- **Published:** Frontiers in Plant Science, 2012
- **URL:** https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2012.00076/full
- **Notes:** Python-based L-System framework. MAppleT apple tree model as example. Stochastic topological construction with bio-mechanical geometry.

### [Pages_Stochastic]
- **Title:** Potential and actual root growth variations in root systems: modeling them with a two-step stochastic approach
- **Notes:** Referenced in multiple papers. Two-step stochastic model for root elongation variability. Key source for "very large residual variability" claim. Need to find full citation.

### [Brody2022]
- **Title:** Open quantum dynamics for plant motions
- **Published:** Scientific Reports, 2022
- **URL:** https://www.nature.com/articles/s41598-022-07102-w
- **Notes:** Applies stochastic Schrödinger equations to model plant tropisms. Argues signal-processing models from quantum mechanics apply to biological systems. Gravitropism modeled as spin-1/2 system aligning with field.

### [Messori2023_QED]
- **Title:** Quantum Electrodynamics Coherence and Hormesis: Foundations of Quantum Biology
- **Published:** PMC, 2023
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC10530466/
- **Notes:** Argues biological processes are "deterministic, non-random, but not predeterminable." QFT perspective on biological order. Source for the third-category stochasticity argument.

### [CambridgeQPB2021]
- **Title:** What is quantitative plant biology?
- **Published:** Quantitative Plant Biology (Cambridge), 2021
- **URL:** https://www.cambridge.org/core/journals/quantitative-plant-biology/article/what-is-quantitative-plant-biology/87D480D2D4B875A6F02477F2EADBFDA1
- **Notes:** Excellent overview of noise in plant biology across scales. Bet-hedging in seeds. Stochastic resonance. Need for quantitative measures of variability.

### [Wilson_via_Patino2020]
- **Title:** Modeling root system growth around obstacles
- **Published:** Scientific Reports, 2020
- **URL:** https://www.nature.com/articles/s41598-020-72557-8
- **Notes:** Models root growth around rigid obstacles. References Wilson's discovery that maple roots curve back to original direction after passing obstacles. Couples root architecture to finite element soil models.

### [GLO_Roots2015]
- **Title:** GLO-Roots: an imaging platform enabling multidimensional characterization of soil-grown root systems
- **Published:** PMC, 2015
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC4589753/
- **Notes:** Luminescence-based root imaging platform. Shows Arabidopsis maintains classical drought response (deeper roots). Changes in root architecture were sufficient to access deep water and prevent dehydration.

### [MDPI_RootExudates2025]
- **Title:** Advances in Plant Species Recognition Mediated by Root Exudates
- **Published:** MDPI Plants, 2025
- **URL:** https://www.mdpi.com/2223-7747/14/19/3076
- **Notes:** Recent review of root exudate composition diversity and ecological functions. Oscillation hypothesis for self/non-self recognition. Dual physical/chemical signaling pathways.

---

## General References and Reviews

### [EBSCO_Tropisms]
- **Title:** Tropisms (Research Starters)
- **URL:** https://www.ebsco.com/research-starters/botany/tropisms
- **Notes:** General overview. Good for tropism timing (30 min to 5 hours). Root cap as 0.5mm thimble-shaped organ.

### [Wikipedia_Gravitropism]
- **URL:** https://en.wikipedia.org/wiki/Gravitropism
- **Notes:** Tipping point mechanism for auxin transport. Cholodny-Went model history. Differential auxin sensitivity in roots vs. stems.

### [Wikipedia_Hydrotropism]
- **URL:** https://en.wikipedia.org/wiki/Hydrotropism
- **Notes:** ABA mutant experiments. RLK receptors. Cytokinin-PIN1 degradation pathway. Darwin 1880 reference.

### [Wikipedia_Tropism]
- **URL:** https://en.wikipedia.org/wiki/Tropism
- **Notes:** General tropism overview. Cholodny-Went model 1927.

### [ABOP_Ch1]
- **Title:** Chapter 1: Graphical modeling using L-systems (from *The Algorithmic Beauty of Plants*)
- **Authors:** Prusinkiewicz P, Lindenmayer A
- **URL:** https://algorithmicbotany.org/papers/abop/abop-ch1.pdf
- **Notes:** Foundational reference for L-Systems. DOL-systems, stochastic L-systems, context-sensitive L-systems, branching structures. Free online.

### [AllenPike_LSystems]
- **Title:** Modeling Plants with Lindenmayer Systems
- **Author:** Allen Pike
- **URL:** https://allenpike.com/modeling-plants-with-l-systems/
- **Notes:** Accessible introduction to implementing L-Systems. 2D to 3D progression. Stochastic randomization of rules.

### [Gilroy2008_CurrentBio]
- **Title:** Plant tropisms (Primer)
- **Published:** Current Biology, 2008
- **URL:** https://www.cell.com/current-biology/fulltext/S0960-9822(08)00179-6
- **Notes:** Excellent primer. Key source for tropism sensor suppression (amyloplast degradation under drought, different suppression by thigmotropism). "While animals move through their environment, plants grow through theirs."

---

## Popular and Educational Sources

### [NatGeo_PlantsTalk]
- **Title:** Plants can talk. Yes, really. Here's how.
- **Published:** National Geographic, 2023/2025
- **URL:** https://www.nationalgeographic.com/science/article/plants-can-talk-yes-really-heres-how
- **Notes:** Accessible overview of plant communication. "More like plumbing" than nervous system. RNA exchange at root-fungus interface. Mycorrhizal resource sharing.

### [Frontiers_KidsPlantsTalk]
- **Title:** Plants Can "Speak" to Each Other
- **Published:** Frontiers for Young Minds, 2022
- **URL:** https://kids.frontiersin.org/articles/10.3389/frym.2022.658692
- **Notes:** Maize root clicking sounds at 220Hz. Inter-plant volatile communication. Accessible for non-scientists.

### [HiddenValleyHibiscus]
- **Title:** Plant Communication (Botany Made Easy)
- **URL:** https://www.hiddenvalleyhibiscus.com/botany/communication.htm
- **Notes:** Accessible overview of root exudate communication. 100,000+ chemical signals. Kin vs. stranger behavior. Mycorrhizal symbiosis.

### [WorldAtlas_Tropisms]
- **Title:** What Are The 5 Tropisms And The Plant's Response To Each?
- **URL:** https://www.worldatlas.com/articles/what-are-the-5-tropisms-and-the-plant-s-response-to-each.html
- **Notes:** Basic overview. Van Tieghem reference on thermotropism.

### [Karban_UCDavis]
- **Title:** Plant Communication Research: 'Taking Root'
- **URL:** https://ucanr.edu/blog/bug-squad/article/plant-communication-research-taking-root
- **Notes:** Richard Karban's work on sagebrush kin recognition via volatile chemotypes. ~100 volatile compounds as potential "words" in plant "language."

### [SciAdv_QuantumBio]
- **Title:** Quantum biology revisited
- **Published:** Science Advances
- **URL:** https://www.science.org/doi/10.1126/sciadv.aaz4888
- **Notes:** Cautious review of quantum coherence in photosynthesis. Warns against over-interpreting oscillatory signals as evidence of quantum effects.

---

## Sources to Find / Verify

- [ ] Pages et al. — "Potential and actual root growth variations" — full citation and URL needed
- [ ] Shkolnik & Fromm 2016 — hydrotropism auxin distribution findings
- [ ] Dudley & File 2007 — kin recognition in plants
- [ ] Simard S — foundational mycorrhizal network papers
- [ ] Karst J — meta-analysis questioning mycorrhizal network evidence
- [ ] Wohlleben P — *The Hidden Life of Trees* (for popular framing, not primary science)
