# Blind review of the product brief

## Verdict

The brief is not ready to build from yet. Its basic browsing flow is clear, but the content rules are not safe enough to choose the right instructions. The largest problem is that **Wired** or **Wireless** is sometimes not enough: the exact model, whether an RF module is fitted, and what kind of alarm network is on site can change the procedure.

The Emerald manuals also expose several specific conflicts. Most importantly, the supplied EP-RANG-10 manual calls that alarm a stand-alone unit with no interconnection, while the brief gives it pairing instructions borrowed from other products.

### Scope and method

- Examined 2 of 2 requested repository files in full: `docs/product-brief.md` and `mockups/steps-layout.html`.
- Rendered and examined all 8 pages from all 4 linked Emerald manuals:
  - EP-VC-240-10, pages 1–2
  - EP-RANG-10, pages 1–2
  - EP-VC-RF-MOD, pages 1–2
  - EP-SA-CONT-RF, pages 1–2
- Two independent reviewers used the same six-area rubric:
  - GPT-5.6 Sol High: 31 findings
  - Grok 4.7 High: 22 findings
- No code-quality lens was used; this was a document and domain review.
- Every finding kept below was checked against the brief, mockup, or rendered manual page. The review did not test a real alarm.

**Confidence:** High for contradictions and manual mismatches because they are stated directly in the sources. Medium for job-site recommendations and scope cuts because they still need testing with the owner's phone, gloves, and normal work.

## Act on

### 1. Do not give EP-RANG-10 pairing instructions

**Areas:** 2, 3

**Brief sections:** “A gap the map exposed” and “What the Emerald wireless manual showed” ([product brief lines 142–146](product-brief.md#L142-L146), [lines 270–294](product-brief.md#L270-L294))

**Raised by:** GPT and Grok

The EP-RANG-10 specification says **“INTERCONNECT: None, stand alone unit”** and contains no pairing procedure. The RF-module manual is for a module fitted to a Vulcan wired alarm. The remote manual names an “RF Ranger Series” but does not say that EP-RANG-10 is in that series. Those manuals do not prove that EP-RANG-10 can pair.

**Why it matters on a job site:** The app could tell a technician to pair hardware that has no radio, then offer a battery-removal recovery step for an alarm with a sealed battery.

**Suggested fix:** Mark EP-RANG-10 pairing as unverified and do not create that page. Obtain the exact manual for the wireless model used on jobs or written confirmation from Emerald. Never borrow a procedure from another model merely because it has the same brand.

**Owner input:** **Yes.** Is the Emerald wireless alarm used on jobs actually EP-RANG-10, or a different RF Ranger model?

**Manual evidence:** [EP-RANG-10 manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-RANG-10-User-Manual.pdf), page 1; [EP-SA-CONT-RF manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-SA-CONT-RF-User-Manual.pdf), page 1.

### 2. Add the exact product variant to the map

**Areas:** 2, 5

**Brief sections:** “You don't pick a model number,” “The pieces,” and “Open questions” ([product brief line 70](product-brief.md#L70), [lines 113–125](product-brief.md#L113-L125), [lines 396–397](product-brief.md#L396-L397))

**Raised by:** GPT and Grok

A page is currently identified only by brand, unit kind, and topic. That cannot represent two wired models from one brand that use different buttons, mounting methods, signals, or radio hardware. The brief already records **Series** and **Model** as words, but neither one selects the page.

**Why it matters on a job site:** Two alarms can both look like “Emerald, Wired” while requiring different actions. The app can confidently show the wrong procedure.

**Suggested fix:** Separate:

- **Unit kind:** Wired, Wireless, Remote, or RF module.
- **Supported product:** an exact model or a verified family of models that share the same behaviour.
- **Capabilities:** can pair, can turn off, has a replaceable battery, fits a particular module, and so on.

The technician does not necessarily need to type a model number. A model/family can be chosen by a clear product photo, printed model, or series name. Pages and signals should belong to the supported product, not just “Wired.”

**Owner input:** **Yes.** If one brand has two wired or two wireless models, what is the quickest reliable way to tell them apart on site: product photo, model printed on the alarm, or series name?

**Manual evidence:** The four Emerald manuals already describe four different products with different controls and capabilities.

### 3. Resolve the RF-module rule and represent the bridge

**Areas:** 1, 2, 5

**Brief sections:** “The three kinds of site,” “Rules that fall out of the map,” and “What the Emerald radio add-on manual showed” ([product brief lines 64–68](product-brief.md#L64-L68), [lines 133–134](product-brief.md#L133-L134), [lines 286–294](product-brief.md#L286-L294))

**Raised by:** GPT and Grok

The brief says every wired alarm on a mixed site has an RF module, then says at least one wired alarm needs a module to act as the bridge. The RF-module manual's mixed-system example says to ensure **one** wired alarm includes an RF module. The current map does not represent which wired alarm contains the module or that it bridges an already wired group to a radio group.

**Why it matters on a job site:** The app can tell the technician to pair a wired alarm that has no module, or to fit unnecessary modules to every wired alarm.

**Suggested fix:** Record that an RF module:

- fits only compatible wired products;
- is fitted to a particular wired alarm;
- gives that alarm radio capability; and
- can bridge its wired interconnect circuit to compatible radio alarms.

Show Wired Pairing only when those conditions are met. State one field rule consistently.

**Owner input:** **Yes.** On the mixed sites you work on, does every wired alarm receive an RF module, or does one wired alarm bridge the wired group to the wireless group?

**Manual evidence:** [EP-VC-RF-MOD manual](https://emeraldalarms.com.au/wp-content/uploads/2024/09/EP-VC-RF-MOD-User-Manual.pdf), page 2.

### 4. Add the remote's real setup route

**Areas:** 1, 3

**Brief sections:** “Which topics apply to which unit,” “Word list,” and “What the Emerald remote manual showed” ([product brief lines 79–91](product-brief.md#L79-L91), [line 166](product-brief.md#L166), [lines 296–310](product-brief.md#L296-L310))

**Raised by:** GPT and Grok

The topic table says a remote has no Placement or Mounting page because remotes are assumed not to be mounted. The word list calls a remote wall-mounted, and the manual says to wall-mount it 1.4 metres above the floor for best signal. The Setup list also speaks only about turning on wireless alarms, although the table and manual say the remote must be activated.

**Why it matters on a job site:** A remote can be placed at the wrong height or remain switched off, making Test, Silence, and Locate appear faulty.

**Suggested fix:** Add a Remote Setup page covering its wall location, 1.4-metre height, and first activation by holding Silence for 5 seconds until the red and yellow lights flash together. Name the topic **Mounting** or make one clear remote-specific Setup topic.

**Owner input:** **Yes.** Do technicians mount and activate these remotes, or only pair remotes that somebody else has already mounted?

**Manual evidence:** [EP-SA-CONT-RF manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-SA-CONT-RF-User-Manual.pdf), page 1.

### 5. Decide the remote battery policy explicitly

**Areas:** 1, 3

**Brief sections:** “No battery-swap steps,” “Report as faulty,” and “What the Emerald remote manual showed” ([product brief line 62](product-brief.md#L62), [lines 92–97](product-brief.md#L92-L97), [lines 304–313](product-brief.md#L304-L313))

**Raised by:** GPT and Grok

The brief says remote batteries are never replaced and a faulty remote is replaced. The remote manual gives a six-step CR2450 replacement procedure, says the battery lasts about three years, tells the technician to change it when the yellow light flashes every 8 seconds, and includes a serious coin-cell ingestion warning. The brief also says the manual's troubleshooting table can be used directly, which conflicts with the no-replacement rule.

**Why it matters on a job site:** The app can recommend replacing a whole working remote instead of its battery, or omit the safety warning if a technician follows the manual anyway.

**Suggested fix:** Choose one operating policy. If technicians change the battery, include the manufacturer's procedure and warning. If company policy is to replace the remote, make the yellow-light outcome “Replace remote” and do not copy the manual table unchanged.

**Owner input:** **Yes.** When the remote flashes yellow every 8 seconds, do you change its CR2450 battery or replace the whole remote?

**Manual evidence:** [EP-SA-CONT-RF manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-SA-CONT-RF-User-Manual.pdf), pages 1–2.

### 6. Do not call Ranger deactivation a power cycle

**Areas:** 1, 3

**Brief sections:** “Turning wireless alarms on and off” and the word-list definitions of Turn off and Power cycle ([product brief lines 42–46](product-brief.md#L42-L46), [lines 202–204](product-brief.md#L202-L204), [lines 275–277](product-brief.md#L275-L277))

**Raised by:** Grok

The Ranger manual's six-press action is a deactivation for disposal or for stopping a nuisance alarm caused by a fault. It says there are no alarm functions while deactivated. The brief places this action in a normal power cycle used to check that the alarm works.

**Why it matters on a job site:** A routine “check” could leave a home without protection if the separate activation action is missed.

**Suggested fix:** Remove **Power cycle** for this model unless a manufacturer procedure supports it. Put deactivation and reactivation together, preserve the manufacturer's warning, and describe when deactivation is allowed.

**Owner input:** No.

**Manual evidence:** [EP-RANG-10 manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-RANG-10-User-Manual.pdf), page 2.

### 7. Split pairing procedures by product and correct the mockup

**Areas:** 1, 3, 5

**Brief sections:** the word-list definition of Master and the Emerald pairing findings ([product brief lines 177–179](product-brief.md#L177-L179), [lines 288–291](product-brief.md#L288-L291), [lines 307–311](product-brief.md#L307-L311))

**Mockup:** Pairing steps and source note ([mockup lines 146–147](../mockups/steps-layout.html#L146-L147), [lines 180–201](../mockups/steps-layout.html#L180-L201))

**Raised by:** GPT and Grok

The brief says any unit can be the master. That does not fit the remote procedure: an alarm is put into pairing mode with Push to Test, then the remote uses Silence three times within 2 seconds. The remote procedure has no final master press. The RF-module procedure uses Test/Hush on module-equipped alarms and ends with one press on the master. The mockup combines the manuals, says “any unit,” adds “quickly,” and says to repeat on every wired and wireless unit at the site.

**Why it matters on a job site:** The technician can press a button that does not exist on the selected product or add a finishing action from a different procedure.

**Suggested fix:** Make separate sourced procedures for:

- a compatible alarm with the RF module; and
- the remote, including actions performed first on the alarm and then on the remote.

Remove the brand-wide statement that any unit can be master. Rewrite the mockup from one verified procedure only. Do not use “every unit at the site” unless compatibility has been established.

**Owner input:** No for the structural fix. Real-unit checking is still needed to confirm exactly when the RF-module pairing chirp occurs.

**Manual evidence:** [EP-VC-RF-MOD manual](https://emeraldalarms.com.au/wp-content/uploads/2024/09/EP-VC-RF-MOD-User-Manual.pdf), page 2; [EP-SA-CONT-RF manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-SA-CONT-RF-User-Manual.pdf), page 2.

### 8. Create one authoritative topic and applicability list

**Area:** 1

**Brief sections:** Setup, Troubleshooting, topic table, “The pieces,” and word list ([product brief lines 39–55](product-brief.md#L39-L55), [lines 76–91](product-brief.md#L76-L91), [line 121](product-brief.md#L121), [lines 197–210](product-brief.md#L197-L210))

**Raised by:** GPT and Grok

The current lists disagree:

- **Fitting** is in Setup, the table, and the word list, but missing from the map's fixed topic list.
- **Won't turn on** is defined as wireless-only, but the table enables it for Wired and Remote.
- “Turning on and off” is described as wireless-only even though Remote activation is required.
- The sentence saying wired techs only troubleshoot, pair, and replace batteries conflicts with the many Wired topics marked Yes.

**Why it matters on a job site:** A builder must choose which list to believe. That can create missing buttons, empty pages, or a misleading Wired “Won't turn on” page.

**Suggested fix:** Keep one table as the authority, at the level of supported product rather than broad unit kind. Every Yes cell must have a sourced page and outcome; every No cell must hide the button. Rename vague symptoms for the product, such as **No green mains light** or **Remote not responding**.

**Owner input:** **Yes.** For a wired alarm with no green light or no response to Test, what should the technician do before the app ends at “Report as faulty”?

### 9. Add verification and warning rules before AI-written content can be published

**Areas:** 2, 3, 5

**Brief sections:** Source, “must never allow,” content sources, and “Adding or changing content” ([product brief lines 123–140](product-brief.md#L123-L140), [lines 238–243](product-brief.md#L238-L243), [lines 315–318](product-brief.md#L315-L318))

**Mockup:** The source note says the procedure is not checked on a real unit ([mockup line 147](../mockups/steps-layout.html#L147))

**Raised by:** GPT and Grok

The map attaches a source to a page, but one page can mix manuals, web material, and technician tips. It has no reviewed or published state and no named approver. The mockup already combines two manuals and downgrades the RF manual's **CAUTION** into a **Tip**. The wired cleaning manual also requires AC mains to be disconnected before cleaning, while the brief says technicians never do electrical work.

**Why it matters on a job site:** An AI-generated or partly checked instruction can appear as finished safety guidance. A manufacturer warning can be lost or made to look optional.

**Suggested fix:** Add:

- a source and page reference on each step, signal, and warning;
- separate types and displays for manufacturer Warning/Caution and technician Tip;
- Draft, Needs owner check, Needs real-unit check, and Published states;
- a rule that only Published content appears in the app;
- a named human approval step; and
- a “must never allow” rule that manufacturer safety warnings cannot be omitted or weakened.

**Owner input:** **Yes.**

1. Who gives final approval before new or changed instructions are sent to phones?
2. For wired cleaning, does the technician isolate the circuit at the breaker, or must an electrician do that first?

**Manual evidence:** [EP-VC-RF-MOD manual](https://emeraldalarms.com.au/wp-content/uploads/2024/09/EP-VC-RF-MOD-User-Manual.pdf), page 2; [EP-VC-240-10 manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-VC-240-10-User-Manual.pdf), page 1.

### 10. Resolve the wired battery contradiction with Emerald

**Area:** 3

**Brief section:** “What a sample manual showed” ([product brief lines 247–267](product-brief.md#L247-L267))

**Raised by:** GPT and Grok

The EP-VC-240-10 manual contradicts itself. Page 1 gives battery-replacement instructions and the specification calls the 9V lithium battery replaceable. Page 2 says that on the low-battery chirp and flash the alarm must be replaced immediately, then says the battery is intended to last 10 years and cannot be replaced. The brief selects the replaceable-battery reading without recording the conflict.

**Why it matters on a job site:** The wrong answer could produce an unnecessary alarm replacement or leave a head in service against the manufacturer's low-battery instruction.

**Suggested fix:** Ask Emerald to resolve the current manual for the exact model and supplied battery. Until then, mark the low-battery outcome unpublished rather than choosing one side.

**Owner input:** **Yes.** On current EP-VC-240-10 jobs, do you replace the 9V battery, replace the alarm, or follow a separate Emerald service instruction?

**Manual evidence:** [EP-VC-240-10 manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-VC-240-10-User-Manual.pdf), pages 1–2.

### 11. Make offline readiness something the app can prove

**Areas:** 4, 5

**Brief sections:** “Phone and signal” and “Offline” ([product brief lines 321–326](product-brief.md#L321-L326), [lines 386–387](product-brief.md#L386-L387))

**Raised by:** GPT and Grok

“The first time you open the app with signal, it saves everything” does not say how the user knows saving finished, what happens after a failed update, or whether every step image is present. “Updated 3 days ago” proves age, not completeness.

**Why it matters on a job site:** The first missing page or photo may be discovered only after the technician has climbed into a no-signal roof space.

**Suggested fix:** Require one clear **Ready offline** state for a complete, checked content version. An interrupted update must keep the previous complete version. A topic button must never lead to content that is not already available offline. Test first use, partial download, update failure, and phone restart with no signal.

**Owner input:** No.

## Consider

### 12. The map needs route context even if the page content is shared

**Areas:** 2, 5

**Brief sections:** “A page is written once” and “Getting around” ([product brief lines 130–132](product-brief.md#L130-L132), [lines 366–375](product-brief.md#L366-L375))

**Mockup:** Back always returns to Setup ([mockup line 222](../mockups/steps-layout.html#L222))

**Raised by:** GPT and Grok

A page can be shared between Setup and Troubleshooting, but Back must return to the list that opened it. The current Page key omits that context, while the breadcrumb includes it.

**Why it matters on a job site:** A technician who entered Pairing from Troubleshooting can be sent into Setup after tapping Back.

**Suggested fix:** Keep one sourced procedure, but remember the route that opened it. Allow a short route-specific introduction or outcome when Setup and Troubleshooting need different context.

**Owner input:** No.

### 13. Define reopening and position recovery

**Areas:** 1, 4, 5

**Brief sections:** “What it does” and “Opening the app” ([product brief line 18](product-brief.md#L18), [lines 332–335](product-brief.md#L332-L335))

**Raised by:** GPT and Grok

The app both opens straight to brands and reopens on the last page. It does not say whether a return after a text differs from opening the app the next morning, or whether a long topic returns to the same step.

**Why it matters on a job site:** Losing step position after a call creates more one-handed scrolling; reopening yesterday's brand on a new job risks wrong context.

**Suggested fix:** State the first-launch, short-interruption, and later-launch rules. Preserve scroll position for a short interruption and show the selected brand and product clearly on return.

**Owner input:** **Yes.** After a text, the next morning, and after tapping Home, when should the app resume and when should it show the brand grid?

### 14. Test every control with gloves, not only Back and Home

**Areas:** 4, 5

**Brief sections:** Instructions page, Getting around, and On the job site ([product brief lines 353–364](product-brief.md#L353-L364), [lines 366–382](product-brief.md#L366-L382))

**Mockup:** Breadcrumb styling and unit switches ([mockup lines 51–54](../mockups/steps-layout.html#L51-L54), [lines 140–145](../mockups/steps-layout.html#L140-L145))

**Raised by:** GPT and Grok

Back and Home are large, but the proposed tappable breadcrumbs use 15-pixel text with small padding, and the other-unit switches sit after the full procedure.

**Why it matters on a job site:** The hardest controls to reach may be the ones used to correct a wrong selection while one hand is occupied.

**Suggested fix:** Set measurable tap-size, text-size, contrast, and spacing requirements for every interactive control. Test on the smallest supported work iPhone with the actual gloves, in one hand and at arm's length.

**Owner input:** **Yes.** Which iPhone model and glove type should be the minimum job-site test?

### 15. Make signal timing text authoritative

**Areas:** 3, 4

**Brief section:** “Lights and sounds” ([product brief lines 213–226](product-brief.md#L213-L226))

**Mockup:** The red dot always blinks once per second ([mockup line 77](../mockups/steps-layout.html#L77))

**Raised by:** GPT and Grok

Real meanings depend on patterns such as 8, 40, or 48 seconds. The mockup always animates at one second.

**Why it matters on a job site:** A decorative blink can look like the real cadence and lead to the wrong diagnosis.

**Suggested fix:** Always show colour, sound, interval, and whether they happen together in words. Use a static icon unless an animation reproduces the exact pattern and has been usability-tested.

**Owner input:** No.

### 16. Test glare and dim spaces before adding another permanent control

**Area:** 4

**Brief section:** “On the job site” ([product brief lines 379–382](product-brief.md#L379-L382))

**Raised by:** GPT and Grok

The brief covers dark mode but not direct sun or glare. Following the phone setting may leave the wrong theme active when moving into or out of a roof space.

**Why it matters on a job site:** A washed-out screen or a bright screen in darkness can make steps hard to read.

**Suggested fix:** Test automatic light and dark modes in sun and a dark roof space first. Add a large in-app theme control only if that test shows it is needed.

**Owner input:** No, unless testing shows a problem.

### 17. Treat the Queensland rule as dated source material, not an eternal fact

**Areas:** 2, 5

**Brief section:** “Every alarm is interconnected” ([product brief lines 119–120](product-brief.md#L119-L120))

**Raised by:** Lead review

Official Queensland guidance says the requirements were phased: sold and leased homes were already covered, while all other existing private homes must comply by 1 January 2027. The brief turns that dated legal rule and the owner's normal job type into one unconditional fact about every alarm.

**Why it matters on a job site:** A stand-alone alarm can exist when diagnosing an old or non-compliant site. The app must distinguish “required finished result” from “what is currently in front of me.”

**Suggested fix:** State that the app supports work intended to end in a compliant interconnected system. Keep **supports interconnection**, **currently interconnected**, and **required to be interconnected** as different facts. Cite and date the official guidance.

**Owner input:** No.

**External evidence:** [Queensland Fire Department smoke alarm guidance](https://www.fire.qld.gov.au/prepare/fire/smoke-alarms) and [FAQ](https://www.fire.qld.gov.au/prepare/fire/smoke-alarms/faq), checked 2 October 2026.

### 18. Decide whether clearing pairings is allowed

**Area:** 1

**Brief sections:** “No factory reset” and “What the Emerald remote manual showed” ([product brief line 61](product-brief.md#L61), [line 311](product-brief.md#L311))

**Raised by:** GPT and Grok

The brief forbids factory reset but records the remote's clear-all-pairings action without assigning or forbidding it. They are not necessarily the same operation.

**Why it matters on a job site:** A stale network may need recovery, but an unnecessary clear can disconnect every alarm.

**Suggested fix:** Explicitly allow it under a sourced troubleshooting condition or explicitly exclude it alongside factory reset.

**Owner input:** **Yes.** Do you ever clear all pairings on a remote during a job?

### 19. Start with a smaller, verified release

**Area:** 6

**Brief sections:** “Who it's for,” videos, and Open questions ([product brief lines 5–10](product-brief.md#L5-L10), [lines 234–243](product-brief.md#L234-L243), [lines 396–397](product-brief.md#L396-L397))

**Raised by:** GPT and Grok

The exact brands and models are still unknown, while the first four manuals already expose unresolved differences. Videos have no source in these manuals and are the only media that fail offline.

**Why it matters on a job site:** Broad but partly checked coverage will lose trust faster than a small set that is consistently right.

**Suggested fix:** Pilot with exact verified models, text, photos, and manual diagrams. Defer videos, general multi-brand promises, and automated publishing until the core reference is proven on real jobs.

**Owner input:** **Yes.** Can the first usable version be limited to a small list of exact, verified models and leave videos until later?

## Noted

### 20. The manual disagrees with itself about test frequency

**Area:** 3

**Brief section:** “Testing” ([product brief lines 46–47](product-brief.md#L46-L47))

**Raised by:** Grok

The Emerald alarm manuals recommend monthly testing in the testing section but at least weekly testing in a warning box.

**Why it matters on a job site:** If the app shows a frequency, the builder has to choose between two manufacturer statements.

**Suggested fix:** Leave routine frequency out of the quick procedure unless Emerald clarifies it. Keep the post-installation test requirement.

**Owner input:** No, unless routine test frequency is meant to be part of the app.

**Manual evidence:** [EP-VC-240-10 manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-VC-240-10-User-Manual.pdf), pages 1–2; [EP-RANG-10 manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-RANG-10-User-Manual.pdf), page 2.

### 21. Clarify which Step fields are optional

**Areas:** 1, 5

**Brief sections:** “What it does,” Step, and Instructions page ([product brief lines 18–23](product-brief.md#L18-L23), [line 123](product-brief.md#L123), [lines 353–364](product-brief.md#L353-L364))

**Raised by:** GPT

The summary can be read as requiring a photo, signal, and tip on every step, while the detailed Step definition makes tips and warnings optional. Some real fitting steps have no light or sound.

**Why it matters on a job site:** A builder may invent confirmation that does not exist or block a useful step because it lacks a photo.

**Suggested fix:** Require instruction text and a source. Make image, signal, tip, and warning optional only when the source does not provide one. Permit a sourced manual diagram until a real photo is available.

**Owner input:** **Yes.** Can a sourced manual diagram be used before a real job-site photo is available?

### 22. Clean up leftover words and “Check” labels

**Area:** 1

**Brief sections:** topic-table introduction, Instructions page, and word list ([product brief line 77](product-brief.md#L77), [lines 150–153](product-brief.md#L150-L153), [line 361](product-brief.md#L361))

**Raised by:** Grok

The table says open cells are marked **Check**, but none are. The word list rejects **Gotcha**, while the brief still uses it. “Caution” is rejected in favour of Warning even though that is the manufacturer's printed label.

**Why it matters on a job site:** Little directly, but these leftovers make later content changes inconsistent.

**Suggested fix:** Mark genuine unknowns consistently. Use the manufacturer's printed **Caution** when quoting it, while displaying it with the same prominence as a Warning.

**Owner input:** No.

### 23. Photo zoom needs a one-handed option

**Area:** 4

**Brief section:** Instructions page ([product brief line 362](product-brief.md#L362))

**Raised by:** GPT

“Tap a photo to make it fill the screen and zoom in” does not say whether zoom requires a two-finger pinch.

**Why it matters on a job site:** The other hand may be holding the alarm or maintaining ladder stability.

**Suggested fix:** Provide one-tap full-screen viewing and visible one-finger zoom buttons; pinch can remain as an extra.

**Owner input:** No.

### 24. “Signals point to a topic” needs completion before content entry

**Areas:** 2, 5

**Brief section:** Signal and “What's that light or sound?” ([product brief lines 124–125](product-brief.md#L124-L125), [lines 211–227](product-brief.md#L211-L227))

**Raised by:** Grok

The map says every signal points to the topic that deals with it, but many outcomes are not yet specified, including a fault chirp without the matching low-battery flash.

**Why it matters on a job site:** The technician can identify a signal but still have no next action.

**Suggested fix:** Before a signal is published, require either a next page or a clear end state such as “Report as faulty.”

**Owner input:** **Yes.** For a fault chirp with no low-battery flash, what does the technician do before reporting the alarm as faulty?

## Dismissed

### 25. Require a site-type wizard before Pairing

**Area:** 2

**Brief section:** “The three kinds of site” ([product brief lines 64–68](product-brief.md#L64-L68))

**Raised by:** GPT

The missing site context is real, but a new all-wired/mixed/all-wireless wizard is not the only solution and may add taps on a ladder.

**Why it matters on a job site:** An unnecessary question slows access; omitting the condition entirely can show the wrong pairing page.

**Suggested fix:** First try deriving Pairing availability from the selected supported product, its fitted RF module, and a short precondition on the page. Add a site question only if real procedures cannot be made safe without it.

**Owner input:** No at this stage.

### 26. Move every unit switch into the fixed bottom bar

**Area:** 4

**Brief section:** “Getting around” ([product brief lines 366–375](product-brief.md#L366-L375))

**Raised by:** Grok

The reach concern is valid, but putting Back, Home, and a changing number of unit switches into one fixed bar could crowd the smallest phone and create new wrong taps.

**Why it matters on a job site:** Both poor reach and a crowded bar are one-handed risks.

**Suggested fix:** Test the current location and one compact alternative with the actual phone and gloves before fixing the layout.

**Owner input:** No.

### 27. Cut tappable breadcrumbs now

**Areas:** 4, 6

**Brief section:** Instructions page and Getting around ([product brief lines 353–358](product-brief.md#L353-L358), [lines 373–375](product-brief.md#L373-L375))

**Raised by:** GPT

The mockup's breadcrumb targets are too small, but that does not prove level-jumping has no value. It may be the quickest way to correct a wrong brand or unit.

**Why it matters on a job site:** Keeping tiny controls is bad; removing a fast correction path may also cost taps.

**Suggested fix:** Keep the feature undecided until glove testing. If retained, make the controls genuinely glove-sized.

**Owner input:** No.

### 28. Require a manual theme switch before testing

**Area:** 4

**Brief section:** “On the job site” ([product brief lines 379–382](product-brief.md#L379-L382))

**Raised by:** GPT and Grok

A theme switch may help, but the review has no field evidence that following the phone setting fails often enough to justify another always-visible control.

**Why it matters on a job site:** A wrong theme hurts readability, while another control adds clutter.

**Suggested fix:** Run the glare and roof-space test in Consider finding 16, then decide.

**Owner input:** No.

### 29. Remove the external AI update process from scope entirely

**Areas:** 5, 6

**Brief section:** “Adding or changing content” ([product brief lines 315–318](product-brief.md#L315-L318))

**Raised by:** GPT

In-app editing is already excluded. Some way to update wrong or outdated safety content is still necessary, so removing the external process entirely would leave no maintenance path.

**Why it matters on a job site:** Stale instructions are a trust and safety problem.

**Suggested fix:** Keep a simple reviewed publishing process, but defer automation. Start with manually approved content packages and the controls in Act on finding 9.

**Owner input:** No.

## Agreement map

Both reviewers independently identified the core model problem, the unsupported EP-RANG-10 pairing assumption, the RF-module contradiction, the remote mounting and battery conflicts, the inconsistent topic lists, weak offline proof, launch/resume ambiguity, and glove-size issues. That agreement is strong evidence that these are problems in the written brief rather than matters of taste.

Grok found more manual-level safety conflicts, including Ranger deactivation, wired cleaning, and the EP-VC-240-10 battery contradiction. GPT put more weight on source tracking, approval, resumption, and measurable usability requirements. Those findings were retained where the original sources supported them.

The lead review rejected proposed solutions that jumped too quickly to extra screens or permanent controls. The brief needs stronger product and content rules first; it does not yet need a site-management system.
