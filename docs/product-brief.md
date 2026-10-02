# APM Alarms: Product Brief

This file records everything decided in the product interview. It is updated after each answer, so nothing gets lost.

## Who it's for

- A smoke alarm technician (the owner of this project) who works on site with many alarm brands.
- It's built for one person first, but it should be easy to share with other techs at work later.
- Work phones are iPhones.
- Works in Queensland, Australia.

## What it does

A quick reference for job sites. You pick the alarm you're working on and get clear instructions with photos.

## How you find what you need

The latest structure (replaces earlier versions):

1. **Brand.** Tap the brand of alarm.
2. **What's in your hand.** Tap one:
   - Wired
   - Wireless
   - Remote (only for brands that have one)
   - RF module, the radio add-on that slots into a wired alarm (only for brands that have one)
3. **Setup or Troubleshooting.** Tap one.
4. **Topic.** Tap what you need.

Topics under **Setup** (putting in a new alarm):

- Placement: where the alarm can go, with key distances from walls, fans and lights.
- Mounting: fitting the alarm onto its mounting plate and removing it, including the light or sound that tells you it's seated correctly.
- Opening wired alarms: releasing the front plate to get to the battery and the label with the installed date and replace-by date. **Decided:** no extra photo or explanation of the label dates.
- Turning wireless alarms on and off, including power cycling: turning it off and back on to check it's working, and the light that confirms it's back on.
- Fitting an RF module into a wired alarm. (RF module only.)
- Pairing, including the lights and sounds you'll see and hear along the way.
- Testing: setting the alarm off, checking every interconnected alarm goes off too, and how long to wait afterwards for any other sounds.

Topics under **Troubleshooting** (an alarm that's already up and has a problem):

- What's that light or sound? Every light and sound for that alarm in one list, each pointing to the topic that deals with it. **Decided.** Shown first, because a chirp or a light is usually why you're troubleshooting.
- Cleaning.
- Finding which alarm is causing false alarms.
- Wireless alarms that won't turn on.
- Mounting, opening wired alarms, turning wireless alarms on and off, pairing and testing, the same pages as under Setup.

Rules:

- **Decided:** Lights and sounds don't get their own pages. They're mixed into every topic where they matter. For example, the mounting page says which light or sound confirms it's seated correctly.
- Only topics that apply to what's in your hand are shown. For example, "Opening wired alarms" only appears for wired, and "Turning on and off" only for wireless.
- At the bottom of every topic page, buttons switch to the same topic for the other types. For example, on wired pairing, a "Wireless" button takes you to the wireless pairing steps.
- **Decided:** No factory reset. Techs never do it, so it isn't an option.
- **Decided:** No battery-swap steps. Techs do swap wired alarm batteries when they find a faulty one, but that's already on their job list. Remote batteries are never replaced; a faulty remote is replaced with a new one.
- You choose by the thing in your hand right now, not the whole site. There's no "Both" option.
- **Decided: the three kinds of site.**
  1. **All wired.** Interconnected by wire already. No pairing.
  2. **Wired and wireless.** Every wired alarm has an RF module (already in, or fitted on the day), and every alarm gets paired.
  3. **All wireless.** No RF modules. Every alarm gets paired.
- The Wired pairing page is only used on the second kind of site. **Decided:** the page doesn't say so, because every tech already knows. The "Wireless" switch button at the bottom takes you to the wireless pairing page.
- **Rule of thumb:** leave out anything every tech already knows. The app is for what's different between brands and units.
- You don't pick a model number. You identify the brand by checking the alarm itself on site.
- **Decided:** When chasing a chirp or a light, you find which alarm is causing it before opening the app. So you'll always know whether it's wired or wireless, and that step stays.

### Which topics apply to which unit

**Decided:** Techs never do electrical work. Wired alarms can't be turned off, and anything involving mains wiring needs an electrician. For wired alarms, techs only troubleshoot, pair and replace batteries.

Proposed table (**Check**: still to be confirmed; items marked "?" are guesses):

| Topic | Wired | Wireless | Remote | RF module |
|---|---|---|---|---|
| Placement | No, electrician's work | Yes | Yes, on a wall at 1.4 m | No |
| Mounting | Yes, to get to the battery or fit an RF module ? | Yes | Yes ? | No |
| Opening | Yes | No | No | No |
| Turning on and off | No, can't be turned off | Yes | Yes, turning it on the first time ? | No |
| Fitting | No | No | No | Yes |
| Pairing | Yes, through its RF module | Yes | Yes | No, lives under Wired |
| Testing | Yes | Yes | Yes | No |
| Cleaning | Yes | Yes | No ? | No |
| Finding the false alarm | Yes | Yes | No ? | No |
| Won't turn on | No | Yes | Yes ? | No |
| What's that light or sound? | Yes | Yes | Yes | No ? |

### How the structure changed

- First version: brand, then job, then wired or wireless. The job came first because sites often mix wired and wireless.
- Then Lights and Sounds were added as their own jobs, and Remote and RF module were added next to wired and wireless.
- **Current version:** brand, then what's in your hand, then Setup or Troubleshooting, then the topic. Lights and sounds are now part of each topic instead of separate pages.
- Testing was earlier left out as its own button, but it's now a topic.
- **Decided:** The top-level choice is called "Setup", not "Installing", because "installing" was also used for fitting an alarm onto its mounting plate. That's now called "Mounting". See the word list below.
- **Decided:** Remote and RF module sit next to wired and wireless, because you choose by the thing in your hand, and only for brands that have them.

## How the pieces fit together

This is the map of everything the app knows about, how the pieces connect, and what it must never allow. Every screen and rule in this file should follow from it.

### The pieces

- **Brand.** Emerald, for example. Each brand has one or more units.
- **Unit.** The thing in your hand: a wired alarm, a wireless alarm, a remote, or an RF module. Each unit belongs to one brand and has a few facts about it:
  - How it's powered: mains with a backup battery, or battery only.
  - How it's interconnected: wired alarms by wire, and also by radio once an RF module is fitted. Wireless alarms by radio.
  - Which other units it can pair with. For example, the Emerald remote pairs with Emerald wireless alarms and with wired alarms that have an RF module.
- **Every wired alarm has a backup battery.** The law requires alarms to keep working in a power outage.
- **Every alarm is interconnected.** Queensland law requires every alarm in a home to be interconnected: if one alarm goes off, they all go off. Some alarms *can* work on their own, but on your jobs they're always interconnected.
- **Topic.** A fixed list: placement, mounting, opening, turning on and off, pairing, testing, cleaning, finding the false alarm, won't turn on, and what's that light or sound. Each topic is marked as Setup, Troubleshooting, or both.
- **Page.** One brand, plus one unit, plus one topic. For example, "Emerald, Wired, Pairing". This is what you actually read.
- **Step.** One instruction on a page, with its photo, any tips and warnings, and the light or sound you should see or hear at that point.
- **Signal.** A light, a sound, or both together that means something. For example, "a chirp every 40 seconds *and* a red flash at the same time means low battery". Each signal belongs to one unit and says what it means and which topic deals with it.
- **Source.** The manual, web page or tech a page came from, with its date, so it's clear where every instruction came from and when it needs updating.

### Rules that fall out of the map

- **A page only exists if there's something to say.** The app shows a button only when there's a page behind it. So the Remote button only appears for brands with a remote, "Opening" only appears for wired, and "Turning on and off" only for wireless. These aren't separate rules to remember; they all come from that one rule.
- **A page is written once.** Mounting, pairing and testing appear under both Setup and Troubleshooting, but there's one copy of each page. Two copies would drift apart.
- **A signal is written once.** "What's that light or sound?" is the full list for that unit, and each topic page shows the signals that matter to it, pulled from the same list. Because the timing differs between units (every 40 seconds on the wired Emerald, every 48 on the wireless one), one list per unit keeps them from ever disagreeing.
- **The switch buttons at the bottom of a page** go to the same topic for the brand's other units, but only where that page exists.
- **Pairing a wired alarm means pairing it through its RF module.** On a wired-and-wireless site, every wired alarm has an RF module, so pairing lives under Wired. The RF module's own page covers fitting it. On an all-wired site, nothing is paired.

### Things the app must never allow

- A button that leads to an empty page.
- The same instruction or signal written two different ways in two places.
- Pairing steps for a unit that can't pair.
- An instruction without a source.

### A gap the map exposed

The EP-RANG-10 manual says "stand alone unit", which looked like an alarm that can't be interconnected.

**Resolved:** It *can* work on its own, but on your jobs it's always interconnected, because Queensland law requires it. So "Wireless" always means an alarm interconnected by radio, and there's no look-alike problem. The EP-RANG-10 manual has no pairing steps, so those will come from the RF module and remote manuals, which both describe pairing Emerald alarms, and should be checked on a real alarm.

## Word list

Every word below means one thing only, in this file and in the app. Words in the "Not" column are what the manuals or earlier answers used for the same thing; the app won't use them, so nothing gets mixed up. Items marked **Check** are open for review.

One rule sits above the list: **when a step names a button, it uses the name printed on the unit.** If the Emerald alarm's button says "Test/Hush", the step says "press the Test/Hush button", even though the action is called Silence.

### The things you work with

| Word | Means | Not |
|---|---|---|
| Brand | The company that makes the alarm, like Emerald. | Manufacturer |
| Series | A family of alarms within a brand, like Emerald's Vulcan (wired) or Ranger (wireless). Not picked in the app, but mentioned where it matters. | |
| Model | One exact alarm, like EP-VC-240-10. Not picked in the app. | |
| Unit | The thing in your hand: a wired alarm, a wireless alarm, a remote, or an RF module. Rarely on screen, because the buttons say Wired, Wireless, Remote and RF module. Used in step wording, like "release the unit from the mounting plate", and in this file. | Device, type |
| Alarm | A wired or wireless smoke alarm. Not a remote or an RF module. | Detector, smoke alarm |
| Wired | An alarm connected to mains power, with a backup battery. Every wired alarm has one, because the law requires alarms to keep working in a power outage. | Hard-wired, 240V |
| Wireless | An alarm that runs on its battery alone, with no mains wires, and is interconnected with other alarms by radio. | Battery alarm, RF alarm |
| RF module | The small radio add-on that slots into a wired alarm so it can be interconnected by radio. "RF" on its own always means this module. | RF, add-on, radio module |
| Remote | The wall-mounted unit that tests, silences and locates interconnected alarms. | Controller |
| Mounting plate | The part screwed to the ceiling that the alarm attaches to. | Base, bracket, backing plate, mount |
| Front plate | The front cover of a wired alarm, which releases to show the battery and the label. | Cover, lid |
| Label | The sticker behind the front plate with the installed date and replace-by date. | |
| Installed date | The date the alarm was put in. | |
| Replace-by date | The date the alarm must be replaced. | Expiry date |

### How alarms work together

| Word | Means | Not |
|---|---|---|
| Interconnected | If one alarm goes off, they all go off. By wire or by radio. Required by Queensland law, so every alarm is interconnected. | Linked |
| Pairing | Interconnecting units by radio: wireless alarms with each other, wired alarms (through their RF module) with wireless alarms, or a remote with alarms. On an all-wired site, nothing is paired; the wire interconnects them. | |
| Master | The unit you put into pairing mode first. Any unit can be the master; every unit after it connects to it. On Emerald, you press the master once more at the end to finish. | First alarm, main alarm |
| Pairing mode | The state a unit is put in so it's ready to pair, usually by pressing the test button a set number of times. | |

### How the app is organised

| Word | Means | Not |
|---|---|---|
| Setup | The top-level choice for putting in a new alarm or RF module: placement, mounting, opening, fitting, turning on, pairing and testing. | Installing, installation |
| Troubleshooting | The top-level choice for an alarm that's already up and has a problem. | |
| Topic | One item you tap under Setup or Troubleshooting, like Pairing. | Option, job |
| Page | What you read: one brand, one unit and one topic, like "Emerald, Wireless, Pairing". | Instructions |
| Step | One instruction on a page, with its photo, tips, warnings, and the light or sound to expect. | |
| Tip | Advice from techs' experience, shown in a bright box inside the step it belongs to. | Gotcha |
| Warning | A safety warning from the manufacturer. | Caution |
| Source | Where a page came from, like a manual or a tech, with its date. | |
| Job | A site visit. Never used for anything inside the app. | |

### The topics

| Word | Means | Not |
|---|---|---|
| Placement | Where on the ceiling an alarm can go, and how far from walls, fans, lights and vents. Setup only. | Position, location |
| Mounting | Fitting an alarm onto its mounting plate or removing it, and the light or sound that confirms it's seated. | Installing, securing |
| Opening | Releasing the front plate of a wired alarm to get to the battery and the label. Wired only. | |
| Turn on | Starting a wireless alarm for the first time, usually by holding the test button. | Activate |
| Turn off | Switching a wireless alarm off, usually as part of a power cycle. Wired alarms can't be turned off. | Deactivate |
| Power cycle | Turning a unit off and back on to check it's working, watching the light as it comes back on. Part of the "Turning on and off" topic. | Reset, restart |
| Fitting | Putting an RF module into a wired alarm. RF module only, Setup only. | Installing |
| Testing | Setting the alarm off, checking every interconnected alarm goes off too, and waiting for any other sounds afterwards. | |
| Cleaning | Cleaning an alarm. Troubleshooting only. | Maintenance |
| Finding the false alarm | Working out which alarm is causing false alarms. Troubleshooting only. | |
| Won't turn on | A wireless alarm that won't start. Troubleshooting only. | |
| What's that light or sound? | Every signal for that unit in one list. Troubleshooting only, shown first. | Lights, Sounds |

### Lights and sounds

| Word | Means | Not |
|---|---|---|
| Signal | A light, a sound, or both together that means something. | Indication |
| Light | A coloured light on the unit, described by its colour and how often it flashes. | LED |
| Chirp | A short sound that repeats on a timer, like every 40 seconds. | |
| Beep | One short sound that confirms something worked, like turning on or pairing. | |
| Alarm sound | The full, loud, continuous sound. | Siren |
| Silence | Quieting a sounding alarm for about 8 minutes. | Hush |
| Test | Pressing the test button so the alarm, and every alarm interconnected with it, sound. | |
| False alarm | An alarm going off with no fire, for example from cooking. | Nuisance alarm |
| Fault | The alarm reporting a problem with itself, usually with a chirp. | Fault mode |
| Low battery | The alarm reporting its battery is running out, usually with a chirp and a light together. | |
| Faulty | A unit that needs replacing. | Defective |

### A clash the map exposed (resolved)

Pairing a wired alarm to wireless ones could have lived under RF module or under Wired. **Resolved:** on a wired-and-wireless site, every wired alarm has an RF module, so the pairing steps live under **Wired**. The **RF module** covers fitting the module. See "the three kinds of site" above.

## What each instructions page shows

- Simple written steps with photos.
- Tips that techs have learned from experience.
- Videos, where the manufacturer has them.

## Where the content comes from

- **Main source:** PDFs from the company, one for each brand or alarm. These get turned into simple steps.
- **Extra photos and videos:** taken from the manufacturers' websites or elsewhere online, where they exist.
- **Your own tips and photos:** added later.

### What a sample manual showed

The [Emerald EP-VC-240-10 manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-VC-240-10-User-Manual.pdf) (2 pages, dated November 2024) was reviewed. Findings:

- **Lights and Sounds overlap.** Several meanings depend on a light and a sound together. For example, a chirp every 40 seconds means a fault, but a chirp every 40 seconds *with* a red flash at the same time means a low battery. Lights and sounds are now mixed into each topic, so each combination is explained wherever it shows up.
- **What the lights and sounds mean on this model:**
  - Steady green light: mains power is on.
  - Red flash every 40 seconds: working normally.
  - Red flash every second, plus a loud alarm: smoke detected.
  - Red flash every 8 seconds: silenced, for about 8 minutes after the hush button is pressed.
  - Chirp every 40 seconds: fault.
  - Chirp and red flash together every 40 seconds: low battery.
- **Silencing:** press and release the Test/Hush button. The alarm stays quieter for about 8 minutes, then goes back to normal.
- **Testing:** press the Test/Hush button. Holding it for 5 seconds tests every alarm interconnected with it. A test after installing is required before the job is complete.
- **Battery:** 10-year replaceable 9V lithium (EVE CR9V-P). Battery-swap steps aren't needed in the app, because they're covered by the techs' job list.
- **Gotchas for the mount section:**
  - The alarm won't clip onto its mounting plate without a battery in it.
  - Ceiling mount only, not walls.
  - At least 30 cm from the wall.
- **Wired install details:** wire colours and terminals, strip lengths, up to 40 alarms on one circuit, and up to 150 m of wire between alarms. Must be done by a licensed electrician.
- **Placement rules:** where to put alarms in a home, and places to avoid, like near bathrooms, kitchens, vents and air conditioners.
- **Wireless isn't covered in this manual.** This alarm is wired. It can be interconnected by radio with a separate plug-in module (EP-VC-RF-MOD), which has its own manual. So one brand may need more than one PDF.
- **Model differences.** Manuals are written for one model. If a brand has two wired models that behave differently, brand plus wired or wireless might not be enough. To check when all the PDFs are in. See the wireless manual below for a real example.

### What the Emerald wireless manual showed

The [Emerald EP-RANG-10 manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-RANG-10-User-Manual.pdf) (2 pages, dated February 2025) was reviewed. You gave this one as Emerald's wireless alarm. Findings:

- **The manual calls it a "stand alone unit".** It can work on its own, but on your jobs it's always interconnected, as Queensland law requires. The manual has no pairing steps.
- **The battery can't be replaced.** It's a 10-year built-in battery. When the battery runs low, the whole alarm gets replaced. That's different from the wired Emerald, where you swap the battery.
- **Same brand, different timing.** On this model the red light flashes and the low-battery chirp happens every 48 seconds. On the wired Emerald it's every 40 seconds. There's also no green light, because there's no mains power. So the light and sound details need to be separate for wired and wireless.
- **Turning it on:** hold the test button for 3 seconds until the light comes on, then let go within 2 seconds. It beeps to show it's working.
- **Turning it off for good:** press the test button 6 times within 3 seconds, and it chirps once. This is only for throwing the alarm away, or stopping a faulty alarm that keeps going off. Worth including, because a faulty alarm sounding on site is a real job.
- **Mount:** it twists onto the mounting plate to secure it and twists the other way to remove it. Screws, or an optional magnetic mount with 3M sticky pads. Ceiling only.
- **Silencing:** the same as the wired Emerald. Press and release the hush button, and it's quieter for about 8 minutes while the red light flashes every 8 seconds.

### What the Emerald radio add-on manual showed

The [Emerald EP-VC-RF-MOD manual](https://emeraldalarms.com.au/wp-content/uploads/2024/09/EP-VC-RF-MOD-User-Manual.pdf) is for a small radio add-on that slots into Emerald's wired Vulcan alarms (like the EP-VC-240-10), so they can be interconnected without wires. Findings:

- **"Wireless" means one thing.** A battery alarm interconnected by radio. Every alarm on your jobs is interconnected, as Queensland law requires.
- **Fitting the add-on:** use a screwdriver to lift off the empty cover, slot the add-on in the right way round (the manual has a right and wrong photo), then put the battery in.
- **Gotcha:** the add-on must go in *before* the battery.
- **Pairing:**
  1. Press the test/hush button 3 times. A flashing red light means it's ready to pair.
  2. Do the same on each other alarm. A chirp means it paired.
  3. When they're all paired, press the first alarm (the "master") once to finish.
- **If pairing won't start:** take the battery out, hold the test button for more than 2 seconds to drain leftover power, put the battery back and try again. A good troubleshooting tip.
- **Mixed wired and wireless sites:** when wired alarms need to be interconnected with wireless alarms, at least one of the wired alarms must have the add-on. It acts as the bridge. This is the "pairing wired to wireless" case from earlier.
- **"RF Ranger".** The remote manual says it works with "RF Ranger" alarms. This looked like a separate non-pairing version of the Ranger, but it's resolved: the Ranger can work on its own, and on your jobs it's always interconnected.

### What the Emerald remote manual showed

The [Emerald EP-SA-CONT-RF manual](https://emeraldalarms.com.au/wp-content/uploads/2025/02/20250205-EP-SA-CONT-RF-User-Manual.pdf) is for a remote that lets you test, silence and find alarms from the ground. Findings:

- **It's a separate unit with its own topics.** It needs to be mounted, turned on and paired, and it has its own lights and troubleshooting.
- **Buttons:** Test (all interconnected alarms beep for 7 seconds), Silence (all interconnected alarms quiet for 8 minutes), and Locate (silences every alarm except the one that went off, so you can find it).
- **Lights:**
  - Red light flashing twice a second: an alarm has gone off.
  - Yellow light flashing every 8 seconds: the remote's battery is low.
- **Mounting:** on a wall, 1.4 m above the floor, for the best signal.
- **Turning it on:** hold Silence for 5 seconds until the red and yellow lights flash together. Only needed the first time.
- **Pairing:**
  1. On the alarm, press the test button 3 times within 2 seconds, until the red light flashes.
  2. On the remote, press Silence 3 times within 2 seconds.
  3. Repeat for each alarm.
- **Clearing all pairings:** hold Test and Locate together for 10 seconds, until the red light flashes once.
- **Battery:** CR2450 coin battery, lasts about 3 years. Not needed in the app, because techs replace a faulty remote instead of changing its battery.
- **It has a ready-made troubleshooting table.** For example: if the alarm's light flashes but it won't sound when tested from the remote, check the connection, then pair and test again. If it still fails, check the alarm has a radio add-on, or move closer. Manufacturer tables like this can be used directly for the Troubleshooting pages.

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

### "What's in your hand" screen

- Big buttons, each with a small picture: wired and wireless, plus remote and RF module where the brand has them.
- The brand you picked stays at the top, so you always know where you are.

### Setup or Troubleshooting screen

- Two big buttons.

### Topic screen

- Large buttons, one for each topic. Only topics that apply to what's in your hand are shown.

### Instructions page

- A line at the top shows what you picked, like "Emerald, Wired, Setup, Pairing". Tap any part to change just that, without starting over.
- **Decided:** Clear buttons at the bottom switch to the same topic for the other types (wired, wireless, remote, RF module).
- The lights and sounds that matter for the topic appear right in the steps.
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

- Does the table of which topics apply to which unit look right? (asked next)
- Does any brand have models that behave differently enough to need separate pages?
- Should the app reopen where you left off? (see above)
- One step per screen, or all steps on one page? (asked next)
