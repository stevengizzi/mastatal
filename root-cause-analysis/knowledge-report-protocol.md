# Knowledge Report Protocol

> This protocol governs how knowledge files in this project are researched and written.
> It was derived from analyzing Steven's feedback on the first draft of `01-tropisms.md` through `09-open-questions.md`.

---

## What Went Wrong with the First Draft

Steven's questions on just the first three sections of `01-tropisms.md` reveal seven systematic problems:

### 1. Jargon used without definition
**Problem:** Terms like "columella," "amyloplasts," "statoliths," "PIN transporter proteins," "kinases," "RLKs," "aquaporins," "plasma membrane intrinsic proteins" were used as if the reader already knows what they are.
**Root cause:** The docs were written at the level of a biology review paper, not for a non-biologist.
**Fix:** Every technical term must be defined in plain language on first use, *before* it appears in a mechanistic description. The definition should answer "what is this thing physically?" not just provide a synonym.

### 2. Mechanism hand-waving ("then a miracle occurs")
**Problem:** Causal chains skip critical steps. "Statoliths settle, which triggers a signaling cascade, which leads to auxin redistribution." The reader is left asking "but HOW does settling become a chemical signal?"
**Root cause:** The sources themselves often don't fully explain these steps (because they're writing for specialists). I passed along the hand-wave instead of flagging it or filling it in.
**Fix:** Walk through every step of a causal chain explicitly. Where a step is unknown or poorly understood, say so clearly: "This step is not understood — we know X happens, then Y happens, but the connection between them is an open question." Never let "triggers" or "leads to" bridge an unexplained gap.

### 3. Numbers without context
**Problem:** "30 minutes" and "5 hours" for tropism timing, "500nm wavelength" — numbers dropped without explaining what they mean in practice.
**Root cause:** Treating numbers as self-explanatory.
**Fix:** Every number needs a "which means..." follow-up. 500nm → what color is that? 30 minutes → what's physically happening during those 30 minutes? 5 hours → so how fast does a root actually grow?

### 4. Missing scope and applicability
**Problem:** The docs never address whether this applies to all plants, specific species, trees vs. grasses, different root types, etc.
**Root cause:** The research literature is heavily biased toward Arabidopsis thaliana (a small mustard plant), and I didn't flag this limitation prominently or discuss what's known about other species.
**Fix:** Every major claim should specify its scope: "This has been demonstrated in Arabidopsis" or "This appears to be universal across flowering plants" or "Tree roots may behave differently because..." The reader should never have to wonder "does this apply to the mango tree outside?"

### 5. Logical gaps and apparent contradictions
**Problem:** "Cytokinin distribution leads to higher cell production toward lower water potential" — but hydrotropism goes toward *higher* water potential. The reader is left confused.
**Root cause:** Transcribing findings without checking that the logical chain makes sense from the reader's perspective.
**Fix:** After writing any claim, re-read it from the perspective of someone who only knows what's been stated so far in the document. If it sounds contradictory or incomplete, resolve it immediately. Walk through the full logical chain: "This might sound contradictory. Here's how it works..."

### 6. Cross-reference gaps
**Problem:** The Cholodny-Went model is mentioned five times across the docs but never explained. Auxin redistribution appears in both gravitropism and phototropism but the relationship isn't spelled out.
**Root cause:** Assuming the reader will look up references or infer connections.
**Fix:** If a concept is referenced, it must be explained — either inline (if short) or with a clear pointer to where it's explained (if it has its own section). Shared mechanisms between tropisms should be explicitly connected: "This is the same PIN-mediated auxin transport used in gravitropism (see Section 1), but triggered by a different sensor."

### 7. Missing "why" behind the "what"
**Problem:** "ABA is the primary driver of hydrotropism." The reader asks: why ABA and not auxin? "Cytokinins cause degradation of PIN1." Why?
**Root cause:** Reporting findings without explaining the functional logic.
**Fix:** For every mechanism, attempt to explain the functional rationale — why does the system work this way? What advantage does it confer? If the "why" is unknown, say so. If there's a plausible hypothesis, present it as such.

---

## Writing Rules (Apply to All Knowledge Files)

### On first use of any technical term:
1. Give the plain-language name or description first
2. Then give the technical term in parentheses
3. Then explain what it physically is or does
4. Example: "The root cap contains gravity-sensing cells called statocytes. Inside these cells are tiny starch-filled granules called amyloplasts (or statoliths when we're talking about their gravity-sensing function). These are dense enough to sink to the bottom of the cell under gravity, like sand settling in a snow globe."

### On causal mechanisms:
1. Walk through each step explicitly
2. Use "→" chains to show causation: "A → B → C"
3. Where a step is unknown, write: "[mechanism unknown]" or "How this happens is an open question"
4. Never use "triggers," "leads to," or "results in" to bridge an unexplained gap — these words are red flags for hand-waving

### On numbers and measurements:
1. Always provide everyday context
2. For wavelengths: what color/type of light
3. For timescales: what's physically happening during that time
4. For distances: relatable comparisons
5. For concentrations: relative terms (trace amounts, dominant, etc.)

### On scope:
1. State which organisms the finding has been demonstrated in
2. Flag when evidence comes primarily from Arabidopsis
3. Note known species differences
4. Address whether the finding likely applies to trees, tropical plants, food crops, etc.

### On logical completeness:
1. After writing a paragraph, re-read it as a curious non-biologist
2. Ask: "What would Steven ask about this?"
3. Resolve contradictions immediately — don't leave them for the reader to puzzle over
4. Connect related concepts across sections explicitly

### On sourcing:
1. Prefer primary research papers and peer-reviewed reviews over Wikipedia
2. Wikipedia can be used for basic definitions but should not be the sole source for any mechanistic claim
3. When a claim is well-established, a review paper citation is sufficient
4. When a claim is recent or contested, cite the primary paper

### On structure:
1. Begin each section with the simplest possible statement of what it's about
2. Build complexity gradually — don't front-load jargon
3. Use the pattern: simple claim → mechanism → nuance → open questions
4. Cross-reference other files explicitly when topics overlap

---

## Anticipating Reader Questions

After writing any knowledge file section, explicitly ask:
- "What jargon did I just use without defining?"
- "Where did I skip a step in the causal chain?"
- "What number did I drop without context?"
- "Does this apply to all plants or just the ones studied?"
- "Would this sound contradictory to someone reading sequentially?"
- "Is there a 'why' question I'm not answering?"
- "What would the next question be if someone asked me this at a campfire?"
