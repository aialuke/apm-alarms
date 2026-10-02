# Next sessions before building

Two checks happen before any building starts. Run them in order, each in a new session.

## 1. Blind review

- **Lead model:** GPT-5.6 Sol (OpenAI), high effort.
- **Reviewers:** Claude Opus 5.5, GPT-5.6 Sol and Grok 4.7, picked by the interrogate skill.
- **Skills:** `/interrogate`, `/principle-model-the-domain`.
- **Why:** The brief was written by Claude in the interview session. A lead from a different family is less likely to share its blind spots, and three model families looking independently is the point of a blind-spot hunt.

Prompt:

```
/interrogate /principle-model-the-domain

Blind review of a product brief. You haven't seen the conversation that produced it, on purpose: judge only what's written.

Repo: aialuke/apm-alarms, branch cursor/product-brief-f965 (draft PR #2). Read:
- docs/product-brief.md: the brief.
- mockups/steps-layout.html: a throwaway phone mockup of one topic page.
- The Emerald manuals linked in the brief. They're PDFs made mostly of images, so render the pages to images to read them.

Context: The owner is a smoke alarm technician in Queensland, Australia, and isn't technical. The app is a web app saved to the iPhone home screen, for quick reference on job sites: brand, then unit, then Setup or Troubleshooting, then topic. Nothing is built yet apart from the mockup.

Goal: find issues, blind spots and conflicts before building starts, in six areas:
1. Contradictions inside the brief: sections that disagree, leftovers from earlier versions, rules that clash with the "Which topics apply to which unit" table, and words used differently from the word list.
2. Gaps in "How the pieces fit together": missing pieces, rules or "must never allow" items, and real cases it can't represent. For example, a brand whose wired alarms work differently by model, or a site with units from two brands.
3. Facts in the brief that don't match the manuals.
4. Job-site blind spots: one hand, gloves, ladders, glare, dim roof spaces, no signal.
5. Anything a builder would have to guess at.
6. Scope that could be cut.

Run /interrogate with reviewers from the Claude, GPT and Grok families. This is a document review, not a code review, so skip the code-quality lens and use the six areas above as the rubric. Use /principle-model-the-domain when judging area 2.

Rules:
- Don't edit docs/product-brief.md.
- Write the verdict to docs/blind-review.md, sorted into Act on, Consider, Noted and Dismissed. For each finding, give the brief section it's in, why it matters on a job site, a suggested fix, and whether it needs the owner's input.
- Commit it and open a draft PR.

Then report to me in plain, non-technical language (use /bro if you start sounding technical). Give me the top findings first, then ask me the questions that need my input, one at a time.
```

## 2. Premortem

- **Model:** Claude Opus 5.5, high effort.
- **Skills:** `/principle-experience-first`, `/principle-attack-the-premise`.
- **Why a new session:** The interview session made and defended every decision, so it's anchored to them. A fresh session judges the brief as written. Running it after the blind review means it focuses on real-world use, instead of finding the same document problems again.
- **Why this model:** It's about imagining one person's workday and writing plainly for a non-technical reader. The fresh session gives the independence, so it doesn't need a panel of models.

Prompt:

```
/principle-experience-first /principle-attack-the-premise

Premortem. It's six weeks after APM Alarms was finished. The technician it was built for has stopped opening it, and the other techs at work never started. Work out what went wrong.

Repo: aialuke/apm-alarms, branch cursor/product-brief-f965 (draft PR #2). Read docs/product-brief.md, docs/blind-review.md (an earlier review; assume its "Act on" items were fixed), and mockups/steps-layout.html.

Context: The owner is a smoke alarm technician in Queensland, Australia, and isn't technical. They work across many alarm brands, on ladders, often one-handed. The app is a web app saved to the iPhone home screen, for quick reference on job sites. An AI agent adds and updates content when asked; there's no editing inside the app.

Do this:
1. Write 8 to 12 specific failure stories, each told from a real workday. Cover at least: content (wrong, out of date, a missing brand, the PDFs themselves), the moment of use on site (is it faster than remembering or calling a colleague?), trust (what happens after one wrong step), offline and updates, the AI-agent update process (who asks for it, and does it actually happen), sharing with other techs, and the premise itself (is an app the right tool, compared with a laminated card, a shared folder of PDFs, or a group chat?).
2. For each story, give how likely it is, how bad it would be, the earliest warning sign in weeks 1 to 2, and the smallest change to the brief that would prevent it.
3. Use /principle-attack-the-premise on the brief's biggest assumptions, and say which ones the stories depend on most.
4. Rank the stories and pick the top five.

Rules:
- Don't edit docs/product-brief.md.
- Write the result to docs/premortem.md, commit it and open a draft PR.

Then report to me in plain, non-technical language (use /bro if you start sounding technical). Give me the top five first, then ask me one question at a time to check the assumptions only I can confirm.
```
