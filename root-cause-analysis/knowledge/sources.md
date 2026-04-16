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

### [Lee2020_NewPhyt]
- **Title:** Auxin guides roots to avoid obstacles during gravitropic growth
- **Authors:** Lee HJ, et al.
- **Published:** New Phytologist, 2020
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC6972528/
- **Notes:** Key paper showing thigmotropism is active signal transduction (not passive deformation). PIN-mediated auxin redistribution during obstacle avoidance. Compares gravitropism and thigmotropism mechanisms. Notes it's still unknown which part of root senses touch.

### [MassaGilroy2003]
- **Title:** Touch modulates gravity sensing to regulate the growth of primary roots of Arabidopsis thaliana
- **Published:** ResearchGate / Plant Physiology (original), 2003
- **URL:** https://www.researchgate.net/publication/10905852
- **Notes:** Shows touch stimulation of root cap cells inhibits amyloplast sedimentation in columella. Gravitropic re-setting after touch. Touch and gravity signaling interact to direct growth around obstacles while maintaining downward trajectory.

### [GalvanAmpudia2013]
- **Title:** Halotropism is a response of plant roots to avoid a saline environment
- **Authors:** Galvan-Ampudia CS, Julkowska MM, et al.
- **Published:** Current Biology, 2013
- **URL:** https://www.sciencedirect.com/science/article/pii/S0960982213010488
- **Notes:** Foundational halotropism paper. Demonstrated in Arabidopsis, tomato, and sorghum. Sodium-specific (not K+, Li+, or osmotic). PIN2 internalization via phospholipase D / clathrin-mediated endocytosis. PIN2 is internalized but NOT degraded.

### [NatComms_SMB2024]
- **Title:** A root cap-localized NAC transcription factor controls root halotropic response to salt stress in Arabidopsis
- **Published:** Nature Communications, 2024
- **URL:** https://www.nature.com/articles/s41467-024-46482-7
- **Notes:** Identified SOMBRERO (SMB) transcription factor in root cap as required for halotropism. SMB controls AUX1 expression in lateral root cap. Spatiotemporally modulates auxin redistribution.

### [PNAS_ABA_Halotropism2025]
- **Title:** Abscisic acid signaling gates salt-induced responses of plant roots
- **Published:** PNAS, February 2025
- **URL:** https://www.pnas.org/doi/10.1073/pnas.2406373122
- **Notes:** Shows core ABA signaling is essential for halotropism. ABA biosynthesis and signaling mutants had significantly reduced halotropic response. Sodium-induced gene expression is repressed by endogenous ABA. Halotropism requires both auxin AND ABA pathways.

### [Frontiers_Halotropism2020]
- **Title:** Halotropism: Phytohormonal Aspects and Potential Applications
- **Published:** Frontiers in Plant Science, 2020
- **URL:** https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2020.571025/full
- **Notes:** Halotropism review. SOS pathway role. Halophytes may need optimal salt for growth. Sodium-specific tropism. Exact sodium concentration ranges differ between glycophytes and halophytes. Polyamines and phosphatidic acid as mediators.

### [VanDenBerg2016_model]
- **Title:** Modeling halotropism: a key role for root tip architecture and reflux loop remodeling in redistributing auxin
- **Published:** Development, 2016
- **Notes:** Computational model showing PIN2 localization change plays dominant role in auxin asymmetry during halotropism, enhanced by AUX1 and transient PIN1 upregulation.

### [Yu2022_via_Insights2023]
- **Title:** (Referenced in) Insights into plant salt stress signaling and tolerance
- **Published:** Journal of Integrative Plant Biology / ScienceDirect, 2023
- **URL:** https://www.sciencedirect.com/science/article/pii/S1673852723001790
- **Notes:** ABA-activated SnRK2.6 phosphorylates SP2L → cortical microtubule reorientation → cellulose microfibril pattern changes → root twisting determines halotropism direction.

### [Wang2025_NatPlants]
- **Title:** The apoplastic pH is a key determinant in the hypocotyl growth response to auxin dosage and light
- **Published:** Nature Plants, February 2025
- **URL:** https://www.nature.com/articles/s41477-025-01910-4
- **Notes:** Shows biphasic auxin effect is caused by biphasic response of cells to decreasing apoplastic pH. Moderate acidification promotes growth; excessive acidification inhibits it. Explains why auxin dose-response is bell-shaped.

### [Evans1994]
- **Title:** (Referenced in) Cellular Responses to Auxin: Division versus Expansion
- **Published:** PMC, various
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC2857164/
- **Notes:** Auxin dose-response curve: response-maxima varies by organ. Shoots and roots differ in sensitivity by several orders of magnitude. Application of >10⁻⁹ to 10⁻⁸ M auxin inhibits root cell elongation.

### [Thimann1939]
- **Title:** Auxins and the Inhibition of Plant Growth
- **Authors:** Thimann KV
- **Published:** Biological Reviews, 1939
- **URL:** https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1469-185X.1939.tb00937.x
- **Notes:** Classic paper establishing auxin's inhibitory role at high concentrations. Root response to auxin is an optimum curve with peak at very low concentration. Historical foundation for understanding auxin dose-response.

### [Han2021]
- **Title:** PIN-mediated polar auxin transport regulations in plant tropic responses
- **Published:** New Phytologist, 2021
- **URL:** https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.17617
- **Notes:** LAZY/NGR proteins bridge gap between statolith sedimentation and PIN polarization. LAZY-RLD complex guides PIN3/PIN7 to lower membrane. Lateral root gravitropic set-point angles.

### [NatCommsPIN2024]
- **Title:** Over 25 years of decrypting PIN-mediated plant development
- **Published:** Nature Communications, November 2024
- **URL:** https://www.nature.com/articles/s41467-024-54240-y
- **Notes:** 25-year perspective on PIN research. Acid trap mechanism. PIN polarity establishment. Comprehensive overview of PIN roles in development and tropisms.

### [Liscum2014]
- **Title:** Phototropism: Growing towards an Understanding of Plant Movement
- **Published:** PMC / Plant Cell, 2014
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC3963583/
- **Notes:** Comprehensive phototropism review. Cholodny-Went hypothesis history. Six photoreceptors linked to phototropic responses. Flavin in phototropins absorbs blue light.

### [Pang2023_JXB]
- **Title:** Link between hydrotropism and phototropism in Arabidopsis roots
- **Published:** Journal of Experimental Botany, 2023
- **URL:** https://academic.oup.com/jxb/article/74/17/4892/7272512
- **Notes:** MIZ1 and GNOM required for BOTH hydrotropism and phototropism. Same tissues (EZ cortex) control both tropisms. Mutations eliminating hydrotropism also dramatically reduce phototropism.

### [PMC_TouchResponse2025]
- **Title:** Response of Plants to Touch Stress at Morphological, Physiological and Molecular Levels
- **Published:** PMC, 2025
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC12652795/
- **Notes:** Comprehensive thigmomorphogenesis review. TCH gene family. Prolonged mechanical stress suppresses auxin biosynthesis (not just transport). Interdependencies between thigmostimulation, gibberellin biosynthesis, and flowering.

### [Nakajima2017]
- **Title:** Auxin transport and response requirements for root hydrotropism differ between plant species
- **Published:** Journal of Experimental Botany, 2017
- **URL:** https://academic.oup.com/jxb/article/68/13/3441/3868380
- **Notes:** Hydrotropism mechanism differs between species. Rice and pea: auxin-dependent. Lotus japonicus: auxin-independent. Key evidence against a universal hydrotropism mechanism.

### [GalvanAmpudia2013]
- **Title:** Halotropism is a response of plant roots to avoid a saline environment
- **Authors:** Galvan-Ampudia CS, Julkowska MM, et al.
- **Published:** Current Biology, 2013
- **URL:** https://www.sciencedirect.com/science/article/pii/S0960982213010488
- **Notes:** Foundational halotropism paper. Demonstrated in Arabidopsis, tomato, and sorghum. PIN2 internalization via phospholipase D / clathrin-mediated endocytosis. Sodium-specific (not K+, Li+, or osmotic). PIN2 internalized but NOT degraded.

### [NatComms_SMB2024]
- **Title:** A root cap-localized NAC transcription factor controls root halotropic response to salt stress in Arabidopsis
- **Published:** Nature Communications, March 2024
- **URL:** https://www.nature.com/articles/s41467-024-46482-7
- **Notes:** Identified SOMBRERO (SMB) transcription factor in root cap as required for halotropism. Effect is through AUX1-dependent auxin redistribution in lateral root cap, not through amyloplast alteration.

### [PNAS_ABA_Halotropism2025]
- **Title:** Abscisic acid signaling gates salt-induced responses of plant roots
- **Published:** PNAS, February 2025
- **URL:** https://www.pnas.org/doi/10.1073/pnas.2406373122
- **Notes:** Core ABA signaling is essential for halotropism. ABA biosynthesis and receptor mutants showed significantly reduced halotropic response. Sodium-specific transcriptional responses are induced earlier than general osmotic responses and are negatively regulated by ABA.

### [Frontiers_Halotropism2020]
- **Title:** Halotropism: Phytohormonal Aspects and Potential Applications
- **Published:** Frontiers in Plant Science, 2020
- **URL:** https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2020.571025/full
- **Notes:** Review of halotropism mechanisms and phytohormonal involvement. SOS pathway role. Sodium-specific. Some halophytes may show positive halotropism toward moderate salt. Polyamines as potential mediators.

### [VanDenBerg2016_model]
- **Title:** Modeling halotropism: a key role for root tip architecture and reflux loop remodeling in redistributing auxin
- **Published:** Development, 2016
- **Notes:** Computational model showing PIN2 relocalization plays dominant role in auxin asymmetry during halotropism, enhanced by AUX1 and transient PIN1 upregulation.

### [Lee2020_NewPhyt]
- **Title:** Auxin guides roots to avoid obstacles during gravitropic growth (commentary on Lee et al.)
- **Published:** New Phytologist, 2020
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC6972528/
- **Notes:** Key paper showing thigmotropic bending is active signal transduction (not passive deformation). PIN-mediated auxin redistribution confirmed during obstacle avoidance. Unknown which part of root senses touch or which organelles trigger PIN redistribution.

### [MassaGilroy2003]
- **Title:** Touch modulates gravity sensing to regulate the growth of primary roots of Arabidopsis thaliana
- **Notes:** Shows touch stimulation of root cap cells inhibits gravitropic growth and amyloplast sedimentation in columella. Touch-gravity interaction directs root growth around obstacles while maintaining overall downward growth.

### [PMC_TouchResponse2025]
- **Title:** Response of Plants to Touch Stress at Morphological, Physiological and Molecular Levels
- **Published:** PMC, 2025
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC12652795/
- **Notes:** Comprehensive review. Prolonged mechanical stress suppresses auxin biosynthesis (not just transport). TCH gene family. Calmodulin-GH3.1 mechanistic link. Thigmomorphogenesis effects on hormonal balance.

### [Wikipedia_Thigmo]
- **URL:** https://en.wikipedia.org/wiki/Thigmotropism
- **Notes:** Used for ethylene role in thigmotropism (down-regulation permits bending). Calcium channel mechanism. Reference only — cross-checked against primary sources.

### [Wang2025_NatPlants]
- **Title:** The apoplastic pH is a key determinant in the hypocotyl growth response to auxin dosage and light
- **Published:** Nature Plants, February 2025
- **URL:** https://www.nature.com/articles/s41477-025-01910-4
- **Notes:** Explains the biphasic auxin dose-response. Auxin acidifies the apoplast; moderate acidification promotes growth, excessive acidification inhibits. Light-grown tissues have higher apoplastic pH, counteracting over-acidification.

### [Evans1994]
- **Notes:** Referenced for auxin dose-response curve differences between organs (roots vs. shoots differ by orders of magnitude in sensitivity). Cited in PMC2857164.

### [Thimann1939]
- **Title:** Auxins and the Inhibition of Plant Growth
- **Published:** Biological Reviews, 1939
- **URL:** https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1469-185X.1939.tb00937.x
- **Notes:** Classic paper establishing auxin bell-curve dose response in roots. Root growth represented by optimum curve with peak at very low concentration.

### [Han2021]
- **Title:** PIN-mediated polar auxin transport regulations in plant tropic responses
- **Published:** New Phytologist, 2021
- **URL:** https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.17617
- **Notes:** LAZY/NGR protein → RLD complex → PIN3/PIN7 relocalization pathway in gravitropism. Gravitropic set-point angles in lateral roots. PIN polarity and expression temporally controlled.

### [NatCommsPIN2024]
- **Title:** Over 25 years of decrypting PIN-mediated plant development
- **Published:** Nature Communications, November 2024
- **URL:** https://www.nature.com/articles/s41467-024-54240-y
- **Notes:** 25-year retrospective on PIN protein research. Acid trap mechanism. PIN polarity establishment. PIN as first polarly localized integral membrane proteins identified in plants.

### [Liscum2014]
- **Title:** Phototropism: Growing towards an Understanding of Plant Movement
- **Published:** Plant Cell, 2014
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC3963583/
- **Notes:** Comprehensive phototropism review. Cholodny-Went history (Went 1926, Cholodny 1927). Six photoreceptors linked to phototropic responses. Flavin chromophore in phototropins explains blue-light specificity.

### [Pang2023_JXB]
- **Title:** Link between hydrotropism and phototropism in Arabidopsis roots
- **Published:** Journal of Experimental Botany, 2023
- **URL:** https://academic.oup.com/jxb/article/74/17/4892/7272512
- **Notes:** MIZ1 and GNOM required for BOTH hydrotropism AND phototropism. Same tissues in elongation zone cortex control both. Mutations that eliminate hydrotropism also dramatically reduce phototropism.

### [Nakajima2017]
- **Title:** Auxin transport and response requirements for root hydrotropism differ between plant species
- **Published:** Journal of Experimental Botany, 2017
- **URL:** https://academic.oup.com/jxb/article/68/13/3441/3868380
- **Notes:** Species differences in hydrotropism mechanisms. Auxin involved in rice and pea but NOT in Lotus japonicus. Key evidence that different plant lineages evolved different solutions to water-finding.

### [Yu2022_via_Insights2023]
- **Notes:** ABA-activated SnRK2.6 phosphorylates SP2L, inducing cortical microtubule reorientation that guides cellulose microfibril patterns. ABA-mediated root twisting determines halotropism. Referenced in ScienceDirect Insights into plant salt stress 2023.

### [Vaia_Gravitropism]
- **Title:** Gravitropism (educational resource)
- **URL:** https://www.vaia.com/en-us/explanations/biology/plant-biology/gravitropism/
- **Notes:** Corn seedling example: 20-30 minutes for visible bending after displacement. Used for timing context.

### [BotanyParul_Thigmo]
- **Title:** Responses of Plants to Touch: Thigmotropism
- **URL:** https://botanywithparul.com/responses-of-plants-to-touch-thigmotropism/
- **Notes:** Root cap columella cells as mechanosensitive cells that perceive physical barriers. Calcium ion influx mechanism.

### [SciDirect_Thigmo]
- **Title:** Thigmotropism (ScienceDirect Topics overview)
- **URL:** https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/thigmotropism
- **Notes:** Circumnutation as scanning behavior. Negative thigmotropism combined with gravitropism for obstacle avoidance. Root growth shows waving/coiling/skewing patterns on tilted surfaces.

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
- [x] Shkolnik & Fromm 2016 — hydrotropism auxin distribution findings (referenced via Vandenbrink2020)
- [ ] Dudley & File 2007 — kin recognition in plants
- [ ] Simard S — foundational mycorrhizal network papers
- [ ] Karst J — meta-analysis questioning mycorrhizal network evidence
- [ ] Wohlleben P — *The Hidden Life of Trees* (for popular framing, not primary science)
- [x] Galvan-Ampudia et al. 2013 — halotropism foundational paper (added as GalvanAmpudia2013)
- [x] Lee et al. 2020 — thigmotropism active signaling (added as Lee2020_NewPhyt)
- [x] Massa & Gilroy 2003 — touch modulates gravity sensing (added as MassaGilroy2003)
- [x] Han et al. 2021 — PIN-mediated tropism regulation (added as Han2021)
- [x] Nakajima et al. 2017 — species differences in hydrotropism (added as Nakajima2017)