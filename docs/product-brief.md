# APM Alarms: Product Brief

This file records everything decided in the product interview. It is updated after each answer, so nothing gets lost.

## Who it's for

- A smoke alarm technician (the owner of this project) who works on site with many alarm brands.
- It's built for one person first, but it should be easy to share with other techs at work later.
- Work phones are iPhones.

## What it does

A quick reference for job sites. You pick the alarm you're working on and get clear instructions with photos.

## How you find what you need

1. **Brand.** Tap the brand of alarm.
2. **Job.** Tap what you need to do:
   - Installing and removing from the mount
   - Pairing
   - Troubleshooting
   - Lights: what each light colour and flash pattern means
   - Sounds: what each chirp and alarm sound means, including how to silence it and clear a false alarm
   - Possibly battery and testing. Still to confirm.
3. **Wired or wireless.** Tap one.

- **Decided:** No factory reset. Techs never do it, so it isn't an option.
- Lights and Sounds are read here as their own buttons on the job screen. Still to confirm.

At the bottom of every instructions page, a button switches to the other type. For example, on wired pairing, a "Wireless" button takes you to the wireless pairing steps, and the wireless page has a "Wired" button.

Notes:

- The job comes before wired or wireless on purpose. Sites often have both wired and wireless alarms, and that changes the steps, for example pairing a wired alarm to a wireless one of the same brand.
- You don't pick a model number. Brand plus wired or wireless is enough.
- You identify the brand by reading or checking the alarm itself on site.
- **Decided:** You choose wired or wireless based on the alarm in your hand right now, not the whole site. There's no "Both" option. If the next alarm is the other type, you tap the switch button at the bottom of the steps.
- Steps for linking a wired alarm with a wireless one go inside the pairing steps for each type, so you'll find them wherever you start.

## What each instructions page shows

- Simple written steps with photos.
- Tips and gotchas that techs have learned from experience.
- Videos, where the manufacturer has them.

## Where the content comes from

- **Main source:** PDFs from the company, one for each brand or alarm. These get turned into simple steps.
- **Extra photos and videos:** taken from the manufacturers' websites or elsewhere online, where they exist.
- **Your own tips and photos:** added later.

### What a sample manual showed

The [Emerald EP-VC-240-10 manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-VC-240-10-User-Manual.pdf) (2 pages, dated November 2024) was reviewed. Findings:

- **Lights and Sounds overlap.** Several meanings depend on a light and a sound together. For example, a chirp every 40 seconds means a fault, but a chirp every 40 seconds *with* a red flash at the same time means a low battery. **Recommendation:** list these combinations on both the Lights page and the Sounds page.
- **What the lights and sounds mean on this model:**
  - Steady green light: mains power is on.
  - Red flash every 40 seconds: working normally.
  - Red flash every second, plus a loud alarm: smoke detected.
  - Red flash every 8 seconds: silenced, for about 8 minutes after the hush button is pressed.
  - Chirp every 40 seconds: fault.
  - Chirp and red flash together every 40 seconds: low battery.
- **Silencing:** press and release the Test/Hush button. The alarm stays quieter for about 8 minutes, then goes back to normal.
- **Testing:** press the Test/Hush button. Holding it for 5 seconds tests every alarm linked to it. A test after installing is required before the job is complete.
- **Battery:** 10-year replaceable 9V lithium (EVE CR9V-P). Test the alarm after replacing it. Handy to know which battery to carry.
- **Gotchas for the mount section:**
  - The alarm won't clip onto its mounting plate without a battery in it.
  - Ceiling mount only, not walls.
  - At least 30 cm from the wall.
- **Wired install details:** wire colours and terminals, strip lengths, up to 40 alarms on one circuit, and up to 150 m of wire between alarms. Must be done by a licensed electrician.
- **Placement rules:** where to put alarms in a home, and places to avoid, like near bathrooms, kitchens, vents and air conditioners.
- **Wireless isn't covered in this manual.** This alarm is wired. It becomes wireless with a separate plug-in module (EP-VC-RF-MOD), which has its own manual. So one brand may need more than one PDF, and the pairing steps will come from the module's manual.
- **Model differences.** Manuals are written for one model. If a brand has two wired models that behave differently, brand plus wired or wireless might not be enough. To check when all the PDFs are in.

## Adding or changing content

- **Decided:** No editing inside the app for now. When something needs adding or changing, an AI agent updates it.
- **Why:** Editing inside the app would need sign-ins, rules about who can change what, and screens for uploading photos. That's a lot of extra work to build and look after, when new content will only be added now and then.
- **Revisit if:** lots of techs want to add their own tips regularly.

## Phone and signal

- It's a website you save to your iPhone home screen. It looks and works like a normal app.
- You almost always have signal, but it should still work without signal.
- **Decided:** Steps and photos are saved on the phone, so they work with no signal. Videos only play when you have signal, because they take up a lot of space.
- The first time you open the app with signal, it saves everything. After that, it picks up updates whenever you're online.

## Making it feel easy to use (recommendations)

These are suggestions from the design review. Items marked **Needs your call** are still open.

### Opening the app

- **Agreed:** It opens straight to the brand list, with no sign-in or welcome screen.
- **Needs your call:** Should it reopen on the last page you were on, for example after you answer a text mid-job? The recommendation is yes, with an easy way back to the start.

### Brand screen

- **Decided:** Square buttons, each showing the brand's logo, laid out in a grid. Big squares instead of a long list, because a list is too fiddly one-handed on a ladder.
- **Decided:** Brands go in alphabetical order. About 12 squares fit on one iPhone screen at a comfortable size. If there are more brands than that, you scroll down to see the rest.

### Job screen

- Large buttons, one for each job.
- The brand you picked stays at the top, so you always know where you are.

### Wired or wireless screen

- Two big buttons, wired and wireless, each with a small picture.
- This screen is skipped when wired and wireless use the same steps. For example, if taking an alarm off the mount is the same for both, you won't be asked.

### Instructions page

- A line at the top shows what you picked, like "Kidde, Pairing, Wired". Tap any part to change just that, without starting over.
- **Decided:** A clear button at the bottom switches between the wired and wireless steps.
- **Needs your call:** One step per screen (big photo, big Next button near your thumb, plus a "see all steps" option), or all steps on one page. Both will be mocked up so you can try them on your phone.
- Tips and gotchas sit inside the step they belong to, in a bright warning box, so you see them before you make the mistake.
- Tap a photo to make it fill the screen and zoom in.
- The screen stays on while you're reading steps.
- Without signal, videos show a clear "needs signal" label instead of loading forever.

### Getting around

- A back button at the bottom, plus the usual iPhone swipe to go back.
- A "next alarm" button on every page that goes straight back to the brand list.

### On the job site

- Big buttons with space between them, for gloves and shaky hands.
- Dark text on a light background, plus a dark version for dim attics that follows your phone's setting.
- Text big enough to read at arm's length.

### Offline

- A small note like "Saved on your phone. Updated 3 days ago", so you know it'll work before you lose signal.

## Open questions

- Should battery and testing get their own buttons? (asked next)
- Are Lights and Sounds their own buttons on the job screen, or inside Troubleshooting?
- Should the app include where to place alarms and places to avoid?
- Does any brand have models that behave differently enough to need separate pages?
- Should the app reopen where you left off? (see above)
- One step per screen, or all steps on one page? (see above)
- How should troubleshooting be organised: by the problem you see, by the lights and beeps, or by following the manufacturer's checklist?
