# APM Alarms: Product Brief

This is the brief for version 1. It is the description to build from.

## What it is

A personal quick-reference cheat sheet for a smoke alarm technician. It answers questions about the brand and the unit in the technician's hand. It is not about the property, and it is not about the job.

The alarms in this work are interconnected. Pairing and testing matter. The app does not model the whole network of alarms.

On a job, the technician needs two outcomes: every alarm works, and testing shows that every alarm is interconnected. Their existing work system records that the job is done. The app does not.

The owner is a smoke alarm technician in Queensland, Australia. One person first. It should be easy to share with other technicians later. Work phones are iPhones.

It is a website saved to the iPhone home screen. It opens like an app, with no sign-in and no welcome screen.

The app does not include:

- Site records, site types, job tracking, completion checklists, or booking workflows
- A way to pick a model or a series
- Sources, manual links, or source records
- Editing inside the app

## Brands in version 1

Version 1 covers these brands:

- Anka
- Brooks
- Cavius
- Clipsal
- Detector Inspector
- Emerald
- GT
- Legrand
- Lifesaver
- Matelec
- Red
- Siterwell

Version 1 is complete only when all twelve have owner-approved content. The owner may add more brands later. That is in [Left for later](#left-for-later).

Every brand has a Wired alarm and a Wireless alarm. These brands also have a Remote:

- Anka
- Brooks
- Cavius
- Emerald
- GT
- Matelec
- Red

Brooks and Emerald also have an RF module. On an Emerald system, a wired alarm that must connect to wireless alarms uses that module. That fact is under [Fitting](#fitting).

Clipsal, Detector Inspector, Legrand, Lifesaver, and Siterwell have the two alarms only.

Locate stays off. No brand has been named whose remote can do it. Show Locate only after one is named.

## Getting around

The path is:

1. Brand
2. Unit
3. Setup or Troubleshooting
4. Topic
5. The instruction page

After the unit, the technician picks Setup or Troubleshooting.

- **Setup** is for putting in a new alarm, remote, or RF module. The topics are the jobs, such as Pairing.
- **Troubleshooting** is for an alarm or remote that is already up. The topics are the problems, such as Won't power on. It is a lookup. The technician opens the problem that matches what is in front of them. Inside that topic, the steps are in order. The app does not force a path through every topic, track progress, or ask them to name the alarm inside the app before it will help.

### Brand screen

The home screen. The brand names sit in a grid, three across, in alphabetical order. Large rounded buttons, because a long list is awkward in one hand. If the brands do not fit on one screen, the rest are reached by scrolling. There are no logos.

The technician picks the brand by looking at the alarm.

### Unit screen

Full-width rows, one name on each row. No small picture. The brand stays visible at the top. The rows are Wired alarm, Wireless alarm, and Remote or RF module where that brand has them.

There is no "both" choice. The technician picks the unit in hand right now.

### Setup or Troubleshooting screen

Full-width rows, not a side-by-side pair. An RF module has no Troubleshooting. This screen shows Setup only. The path is Brand, then RF module, then Setup, then Fitting.

### Topic screen

Tall rows, one per topic, in the list order under the [topic map](#topic-map). The table does not set that order. Only topics that apply to this unit are shown. A grey line separates the rows. There is no box around the list.

This is the only screen with shortcuts. Show at most these two, and only when they apply. Each one opens the other topic list. Neither one opens an instruction page.

- Switch between Setup and Troubleshooting for the current unit. Show it only when that unit has both.
- Switch between Wired alarm and Wireless alarm for the current brand, staying in the current Setup or Troubleshooting. Show it only when the brand has both and the current unit is one of those two.

Do not show a shortcut to Remote or to RF module.

Until the final wording is chosen, build these labels: **Troubleshoot this alarm**, **Set up this alarm**, **View Wired alarm**, and **View Wireless alarm**. They may change later. That change does not block version 1. The final wording is in [Left for later](#left-for-later).

### Instruction screen

The technician reads one brand, one unit, and one topic. The steps scroll on one page.

A line at the top shows the route: **Brand → Unit → Setup or Troubleshooting → Topic**.

- **Brand** opens that brand's units.
- **Unit** opens Setup or Troubleshooting for that unit.
- **Setup or Troubleshooting** opens that topic list.
- **Topic** is the name of the current page. It is not a button.

The third label is the path taken, including when a page is opened from the other list. A Setup topic opened from Troubleshooting still shows Troubleshooting. Opening and Testing are both that case. A page that is not a list button, such as the low-battery steps, uses its own name in the Topic place.

Instruction pages do not have buttons that jump to the same topic for another unit.

### Back and Home

Back and Home sit in a bar fixed to the bottom of every screen except the brand screen. They are hidden there because the technician is already home. The bar stays put while the page scrolls. On an instruction page the bar contains only Back and Home. Links inside the page, such as **View fix →**, are still allowed.

- **Back**, on the left, returns to the previous page and the scroll position the technician left.
- **Home**, on the right, returns to the brand screen.

Both always sit in the same place.

The app needs its own Back button. Saved to the home screen, the iPhone hides Safari's back button, and swiping back is not reliable.

When a step opens another page and then has more to do, the next open stays on the first page.

### If you leave and come back

Start a 15-minute timer when the app is no longer visible. That includes the phone locking, and the technician switching to another app. Moving between pages inside the app does not start the timer.

- Coming back within 15 minutes restores the same page, the same scroll position, the route line that was showing, and the page Back opens. The timer stops.
- Leaving again starts a fresh 15-minute timer.
- Coming back after 15 minutes opens the brand screen.
- The first time the app is opened, there is nothing to restore, so it opens the brand screen.

## Units and the topic map

Which units a brand shows, and which topics a unit has, follow the [topic map](#topic-map). A topic button appears when the map allows that topic. When the words are not in yet, the page says the words are not written yet. Approval of the words does not add a unit or a topic the map does not allow.

Each unit belongs to one brand. The four units are:

- **Wired alarm.** An alarm on mains power, with a backup battery. Some newer wired alarms have a sealed battery. Others have a battery that comes out. The technician can see which, on the unit.
- **Wireless alarm.** An alarm that runs on its own battery, with no mains wires, and interconnects by radio. The battery is sealed.
- **RF module.** A radio unit that slots into a wired alarm. Show this choice only for a brand that uses a separate module. Fitting one is rare.
- **Remote.** Show this choice only for a brand that has a remote.

### Topic map

A dash means that topic is not a button for that unit. The map decides what is allowed. A remote has no mounting topic. Mounting one is too simple to include.

The title in this map is the button and the page heading. The name of the file that holds the words is not a title.

Placement has two pages, with different words. [Setup Placement](#setup-placement) is where a new alarm can go. [Troubleshooting Placement](#troubleshooting-placement) is what nearby thing is setting off an alarm that is already up.

| Topic | Wired alarm | Wireless alarm | RF module | Remote |
|---|---|---|---|---|
| Placement | Setup and Troubleshooting, separate pages | Setup and Troubleshooting, separate pages | — | — |
| Opening | Setup | — | — | — |
| Mounting | — | Setup | — | — |
| Activation | — | Setup | — | Setup |
| Fitting | — | — | Setup | — |
| Pairing | Setup and Troubleshooting, one shared page | Setup and Troubleshooting, one shared page | — | Setup and Troubleshooting, one shared page |
| Testing | Setup. Other pages open it | Setup. Other pages open it | — | — |
| What's that light or sound? | Troubleshooting, shown first | Troubleshooting, shown first | — | Troubleshooting, shown first |
| Won't power on. | Troubleshooting | Troubleshooting | — | — |
| Not going off when other alarms go off. | Troubleshooting | Troubleshooting | — | — |
| Customer reports false alarms. | Troubleshooting | Troubleshooting | — | — |
| Remote won't work. | — | — | — | Troubleshooting |
| Use | — | — | — | Setup |
| Locate | — | — | — | Troubleshooting, where the brand supports it |

The map decides whether a topic exists. The lists below only give the order.

**Setup**

- Wired alarm: Placement, Opening, Pairing, Testing
- Wireless alarm: Placement, Mounting, Activation, Pairing, Testing
- RF module: Fitting
- Remote: Activation, Pairing, Use

**Troubleshooting**

- Wired alarm: What's that light or sound?, Won't power on., Not going off when other alarms go off., Customer reports false alarms., Placement, Pairing
- Wireless alarm: What's that light or sound?, Won't power on., Not going off when other alarms go off., Customer reports false alarms., Placement, Pairing
- Remote: What's that light or sound?, Remote won't work., Pairing, then Locate where the brand supports it

The lists above are the topic buttons, in that order. The table does not set the order.

The low-battery steps are a page for a wired or wireless alarm. They are not a button on those lists. The sealed power check and the cleaning method are steps on the page that needs them. They are not buttons and they are not screens.

## Setup pages

### Setup Placement

Where a new smoke alarm can go. The same instructions are used for every brand. This page does not mention a kitchen, steam, or moisture. Those are on [Troubleshooting Placement](#troubleshooting-placement).

Where practical, a smoke alarm goes on the ceiling. Do not place one:

1. within 300 mm of a corner where the ceiling meets a wall
2. within 300 mm of a light fitting
3. within 400 mm of an air-conditioning vent
4. within 400 mm of the blades of a ceiling fan

### Opening

Attaching a wired alarm to its existing base, and taking it off that base.

Installing a wired base is electrician work, so the app does not include it. A wired alarm has no Mounting topic.

Battery testing and replacement are in the [low-battery steps](#low-battery-steps).

### Mounting

How to install a wireless mount. A technician may install one when it is needed.

Where the owner has confirmed a light or other signal that shows the alarm is attached and switched on correctly, include it. Do not invent one.

### Activation

Getting a new unit ready.

- **Wireless alarm.** Turning it on for the first time. When attaching the alarm to its mount is what switches it on, this page opens [Mounting](#mounting) instead of repeating those steps.
- **Remote.** Getting a new or replacement remote ready to pair.

Activation is for a unit that has never been turned on. An alarm that is already up and will not turn on is [Won't power on.](#wont-power-on)

### Fitting

How to fit an RF module, and which way round it goes.

On an Emerald system, a wired alarm that must connect to wireless alarms uses an RF module. Most of those modules are already fitted. The confirmation after that pairing is not known. It is in [Left for later](#left-for-later).

### Use

What a remote's controls do and how to use them.

The meanings of the remote's lights and sounds are in [What's that light or sound?](#whats-that-light-or-sound). They are not on this page.

## Pages opened from more than one place

Some pages are opened from more than one place. The steps are written once. Two topics must not carry two copies of the same words.

[Back and Home](#back-and-home) is the return. These sections name who opens the page and what the page contains.

### Pairing

Connecting units by radio. One page for the selected brand and unit. Setup and Troubleshooting both open it. The button presses are the same in both. They differ by brand and by unit: Wired alarm, Wireless alarm, or Remote. They do not differ by model.

This page does not mention the RF module.

**Wired alarm and wireless alarm**

Every brand the owner has worked on is the same. You cannot add one alarm to alarms that are already up. You pair all of them again. There is no brand where only the extra alarm is paired.

The page does not say which alarm goes into pairing mode first. The brand steps name the first alarm, the master, or the alarm you start with.

Put that alarm into pairing mode, pair every other alarm to it, and open [Testing](#testing). This page owns those presses. [Testing](#testing) owns how to run the test and how to confirm every interconnected alarm sounds. Another topic does not repeat those presses or that test.

Emerald wireless pairing uses the confirmed difference for that brand.

The words for one brand and one unit live in one file, `_instructions/<brand>-<unit>-pairing.md`. Setup and Troubleshooting both open that file. There is no shared opening. The last step opens that brand's Setup Testing page for the same unit. Testing still owns the test.

**Wireless alarm, written**

These brands are written: Anka, Cavius, Clipsal, Detector Inspector, Emerald, GT, Legrand, Lifesaver, Red, Siterwell.

Anka does not include the memory-clear hold from the sheet. The first Anka press is the hold until the green light has flashed 3 times.

Emerald uses only the confirmed field method: press TEST 3 times quickly, within 2 seconds, on the alarm you started with, then the same press on every other alarm. The manual's 3 second window, 90 second pairing mode, and 25 second hold are not on the page.

**Wired alarm, written**

These brands are written: Cavius, Clipsal, Emerald, Legrand, Matelec, Siterwell.

Legrand wired uses the same Network button counts as the wireless page. The wired page also says the join on each other alarm ends after 9 minutes.

Matelec uses the mains sheet. Press TEST 3 times within 2 seconds. The light stays solid red for 50 seconds, and each join starts that 50 seconds again. Both alarms give 1 short chirp. Hold TEST on the first alarm until the red light turns off. The remote section of that sheet is not on the page.

Emerald wired uses the mains sheet. Hold TEST for 5 seconds to turn the alarm on, then press TEST 3 times within 2 seconds. The red light flashes quickly for 90 seconds. Press TEST once to leave early. Each further alarm starts with those 3 presses on the first alarm again. The clear path is not on the page.

Cavius wired is learned off the base, before mains power, with the Learn Mode switch. Hold the test button on one alarm until it beeps.

Clipsal wired uses a Primary and Secondary. Press Test/Hush 3 times within 2 seconds. The Standby light stays on for 30 seconds, then blinks 3 times when a Secondary joins.

Siterwell wired uses the GS519 sheet. The wireless test button is on the base. Press it 3 times within 2 seconds. The red light stays on for 2 minutes. That sheet is not hosted on an Australian site.

These stay on "These words are not written yet."

- Brooks wireless. The opened sheet is House Code on the radio module, not the battery wireless alarm.
- Matelec wireless. No battery wireless sheet was opened. The mains sheet is on the wired page.
- Anka, Brooks, Detector Inspector, GT, Lifesaver, and Red wired. No radio learn presses were found for the mains alarm. Brooks, GT, Lifesaver, and Red only show radio through a module or a base.
- Remote pairing, and any pairing that mentions an RF module.

Sources, model names, add-one paths, and factory reset stay in `docs/wireless-pairing-research.md` and `docs/wired-pairing-research.md`. They are not on the phone.

Do not build a general compatibility list. A note on this page is added only for a combination the owner confirms later.

**Remote**

The presses for that brand's remote. This page does not open Testing.

### Testing

How to run the test for the selected brand and unit, and how to confirm during the test that every interconnected alarm sounds. Include the sounds and the waiting periods that belong to that brand.

One page for a wired or wireless alarm. It is a Setup topic. Troubleshooting pages open it and do not list it as their own button. A remote never opens it. Pairing is not a button on this page.

This page includes the Cavius wait in [Confirmed differences between brands](#confirmed-differences-between-brands), including when another page opened Testing.

### Sealed power check

Not its own screen. The page that needs it shows these steps. The battery cannot be tested with a meter, and it cannot be changed. The page that shows the steps says what to do with the result.

1. Turn it off. On a wireless alarm, many power on as they twist onto the mount, so off means off the mount. On a sealed wired alarm, the brief does not add another off or on method.
2. Hold the test button to drain any power left in it.
3. Turn it back on.
4. Wait 2 to 3 minutes.

### Low-battery steps

Not a topic button. [What's that light or sound?](#whats-that-light-or-sound) opens these steps from Chirping. [Customer reports false alarms.](#customer-reports-false-alarms) opens them when the customer heard a chirp.

A Cavius alarm chirping on its own uses these steps. The Cavius chirp after a test the technician has just run does not. That wait is on [Testing](#testing).

Both blocks below are on this one page. There is no extra choice. The technician follows the block that matches the battery they can see on the unit.

Clean first, using the [cleaning method](#cleaning-method). If a wireless alarm was taken off its mount to clean it, put it back before the power check or the test. Then check the power or the battery, as below.

**Wireless alarm, or a wired alarm with a sealed battery**

Show the [sealed power check](#sealed-power-check) on this page. If it chirps, or it does not turn back on, end at [report faulty](#report-faulty). If it turns on and stays quiet, open [Testing](#testing). If that test shows an alarm was taken down, switched off, or put into pairing mode, Back returns to this page, and this page then opens [Pairing](#pairing).

**Wired alarm whose battery comes out**

The power is on.

1. Take the alarm off its base.
2. Test the battery with a battery tester.
3. Press the test button while the battery is out, to drain any power left in it.
4. If the tester says the battery is flat, put a new battery in. If it is not flat, put the same battery back.
5. Put the alarm back on its base.
6. Wait the same 2 to 3 minutes as the sealed power check.
7. If it chirps, end at [report faulty](#report-faulty).
8. If it stays quiet, use the same Testing and Pairing return as the sealed block above.

A remote has no battery steps. A low-battery meaning on a remote ends at report faulty.

### Cleaning method

Not its own screen. The page that needs it shows these steps. Vacuum or blow the outside vents. The same method is used for every brand.

- A wired alarm stays on its base while it is cleaned.
- A wireless alarm may come off its mount when that is easier. Put it back on the mount before any later test or power check.

Do not include a step for isolating mains power. This is only cleaning of the outside vents.

### report faulty

The last step when the fix is not the technician's to do. It is not its own topic. The words on the page are **report faulty**. The app stops. The page that opened it does not continue.

The app does not say to replace the unit, and it does not say to book an electrician. That organising stays in the existing work system, outside the app.

## Troubleshooting pages

### What's that light or sound?

The full list of signals for the selected unit, in the style of a manual. Each light or sound, and what it means.

The page is a table. Light and Sound sit side by side. What it means is the next line, across the width of the phone. A faint line marks each cell. Emerald wired is the first page written this way. The other signal pages still use one sentence per line until they are rewritten.

The light cell names the color. It does not repeat the word light. When the cell gives an interval, it does not say flash. A count stays in the cell, such as 3 times or twice. When there is no interval, the cell can still say flashing or comes on.

The sound cell gives the timing. It does not say chirp. A sound that happens once, with the light, says when it happens. It does not gain an invented every.

A side with no cue says None.

Pairing flashes and pairing success stay on the Pairing page. They are not rows on this list.

The list is Troubleshooting only, and it is the first topic there. Setup has no copy of the list. Setup steps still show the particular light or sound expected at that step.

Each brand's wired alarm, wireless alarm, and remote has its own list. Each signal is written on that list once. The steps use that same list, so they cannot disagree.

A meaning can be tapped when there is a useful page to open. The action reads **View fix →**. When there is no useful page to open, the entry is plain text.

Two meanings are already set:

- **Chirping** means low battery, and opens the [low-battery steps](#low-battery-steps). On a remote, it ends at report faulty. The row's words also say that the Cavius chirp after a test the technician has just run is normal, and that wait is on [Testing](#testing). The row always offers the same action. It does not appear or disappear because a test was just run.
- **Flashing red after an alarm** means this alarm is the one that set the others off. [Customer reports false alarms.](#customer-reports-false-alarms) uses these same words. The interval is not confirmed. It is in [Left for later](#left-for-later). Until then, this entry is words only. Do not show a demonstration or a timing. Pages still written as one sentence keep their current line until that page is rewritten as this table.

### Won't power on.

**Wireless alarm**

1. Check that the alarm is clicked onto its mount. If clicking it on makes it turn on, these steps are done.
2. If it still will not turn on, show the [sealed power check](#sealed-power-check) on this page.
3. If it still will not turn on, or it chirps, end at report faulty. If it turns on and stays quiet, these steps are done. Back returns to the page that opened this one only when the alarm turns on and stays quiet.

**Wired alarm**

1. Check that the alarm is connected correctly to its base. If it is not, connect it, using the steps on [Opening](#opening). If connecting it makes it turn on, these steps are done. If it still will not turn on after it is connected, end at report faulty.
2. If it was already connected correctly, and the power is on, and it still will not turn on, end at report faulty.

### Not going off when other alarms go off.

For a wired or wireless alarm.

1. Listen for the alarms that are not going off.
2. Make sure the quiet one is powered on. If it is not, open [Won't power on.](#wont-power-on) If that page ends at report faulty, stop. If the alarm turns on, Back returns here.
3. If the quiet alarm is on, open [Pairing](#pairing). Do not repeat the presses or the test.

### Customer reports false alarms.

For a wired or wireless alarm. This page does not use Locate.

1. Ask the customer whether it was an alarm sound or a chirp.
2. If it was a chirp, open the [low-battery steps](#low-battery-steps). A customer does not cause the Cavius chirp that follows a test, because customers do not test the alarms.
3. If it was an alarm sound, ask whether they know which alarm set the others off.
4. If they know, check that alarm first, then every alarm. If they do not know, check every alarm. Either way, look for dust buildup and insect activity, and clean with the [cleaning method](#cleaning-method). Open [Troubleshooting Placement](#troubleshooting-placement). When those steps are done, Back returns here. Then open Testing.
5. If they did not know which alarm it was, tell the customer what to watch for next time. Use the flashing-red wording in [What's that light or sound?](#whats-that-light-or-sound) The technician does not hunt for that flash on arrival. Arriving while it is still flashing is rare. Do not add that hunt to the path where the customer already knows which alarm it was.

Telling the customer about that flash is a step on this page. It is not the household advice left out under [Leave out](#leave-out).

Testing stays available on this page. It is not hidden until Placement is finished.

### Troubleshooting Placement

What nearby thing is setting off an alarm that is already up. The same instructions are used for every brand.

Look for:

- A kitchen that is too close. This is rare. Do not invent a distance.
- Moisture or steam nearby. Do not invent a distance.
- An air-conditioning vent closer than [Setup Placement](#setup-placement) allows.
- Ceiling-fan blades closer than Setup Placement allows.

The dust, insect, and clean steps stay on [Customer reports false alarms.](#customer-reports-false-alarms). They are not copied here.

### Remote won't work.

The technician picks which of these is true. The app does not add a test for it.

1. The remote has lost its connection. Open [Pairing](#pairing).
2. The remote itself is faulty. End at report faulty.

### Locate

For a remote, and only for a brand whose remote can do this. How to identify the alarm that triggered.

## Rules for every instruction

### Steps, photos, and tips

- All steps for a topic sit on one scrolling page.
- Each step is a large step number with the words. Not a card. Add the light or sound to expect, a tip, and a photo or diagram only when that step has one.
- A step does not need all of those.
- When a step names a button, it uses the name printed on the unit.
- A clear diagram from a manual may be used when no real photo exists. Photos open with the iPhone's normal image viewing.
- A practical note that is specific to the brand sits inside the step it belongs to, as a highlighted **Tip**. A Tip is a rounded inset note in the reading flow, with the same tight blue edge as a brand button. It is not a step, and it has no number.

### Flashing lights

Wherever a flashing light with a confirmed interval is shown, including on a step and in What's that light or sound?, show a short visual demonstration and write the real interval in large text. Do not make the technician wait through a long cycle. A 40-second or 48-second flash is an example of a long cycle, not a stored interval for a brand.

### Chirp waits

The 2 to 3 minute wait is the one in the [sealed power check](#sealed-power-check). The removable-battery block uses that same wait. This section does not state the number again.

That wait is separate from the Cavius wait after a test. The Cavius wait does not replace it or add to it. Do not run both as two extra waits stacked on the end of the low-battery steps.

### Leave out

- Basic consumer advice, and how often a household should test an alarm. The red-flash sentence on [Customer reports false alarms.](#customer-reports-false-alarms) stays.
- Factory reset.
- Clearing all pairings.
- Battery replacement as its own topic. The only battery steps in the app are the ones in the [low-battery steps](#low-battery-steps).
- Remote battery replacement.
- A power-outage visit.
- The names Power Cycle, Reset, factory reset, and restart for the drain steps.
- Anything in [Left for later](#left-for-later).

## Confirmed differences between brands

Wireless pairing presses differ by brand. The written set, and the brands still waiting, are in [Pairing](#pairing). This section keeps the differences where the field method and a manual disagree, or where a sound is easy to misread.

**Emerald wireless pairing.** The pairing used in the field starts by pressing TEST three times quickly, within 2 seconds. Emerald wireless instructions include only behaviour the owner has confirmed. They do not name a Ranger model, and they do not carry the earlier Ranger manual discussion.

**Cavius, after a test.** After the technician runs a test, every Cavius alarm chirps for about 2 minutes. That chirp is normal. Wait for it to finish, then wait another 2 minutes for any further chirp. [Testing](#testing) includes this wait. One Cavius alarm chirping on its own is a low battery, and uses the [low-battery steps](#low-battery-steps).

## How the phone behaves

- Use the iPhone's normal screen locking. Do not keep the screen awake.
- The app is dark only. It does not follow the iPhone’s light or dark setting.
- Use the iPhone's normal image viewing.

## How content is added

An AI agent prepares additions and changes. Sign-ins, permissions, and upload screens are a lot to build and look after when content changes only now and then. Revisit in-app editing only if many technicians want to add their own tips regularly.

The owner may supply manuals and field information. Look up an official manual only when the owner explicitly asks during the build. When the owner's confirmed field information disagrees with a manual, the owner's version is the one to use.

Version 1 uses text, photos, and diagrams. A change appears only after the owner has approved it. That includes a change prepared by the AI agent.

One topic is one file under `_instructions/`. The file names the brand, the unit, and the topic. It does not name the page. The [topic map](#topic-map) does. Setup and Troubleshooting share a file when the map says they share a page. Leave the list off the file, and both lists open it.

## Words

Each word below means one thing in the app. The "Not" column lists names the app must not use for that thing. This brief may still use an ordinary word when explaining a step. Which list a topic appears on is in the [topic map](#topic-map).

### The things in your hand

| Word | Means | Not |
|---|---|---|
| Brand | The company that makes the alarm, such as Emerald. | Manufacturer |
| Unit | The thing in the technician's hand: a Wired alarm, a Wireless alarm, a Remote, or an RF module. | Device, model |
| Alarm | A wired or wireless smoke alarm. Not a remote and not an RF module. | Detector |
| Wired alarm | An alarm on mains power, with a backup battery. | Hard-wired, 240V |
| Wireless alarm | An alarm that runs on its battery alone, with no mains wires, and interconnects by radio. | Battery alarm |
| RF module | The radio unit that slots into a wired alarm. "RF" on its own means this module. | Add-on |
| Remote | The wall-mounted unit used with a brand's alarms. | Controller |
| Base | The part of a wired alarm that stays fixed and is wired to mains. The alarm attaches to it and comes off it. | Mount, bracket |
| Mount | The plate a wireless alarm attaches to. A technician may install it. | Base |

### How alarms work together

| Word | Means | Not |
|---|---|---|
| Interconnected | If one alarm sounds, the alarms interconnected with it sound too. By wire or by radio. | Linked |
| Pairing | Connecting units by radio. | |

### Names for the screens

| Word | Means | Not |
|---|---|---|
| Setup | The choice for putting in a new alarm, remote, or RF module. | Installing, installation |
| Troubleshooting | The choice for a problem on an alarm or remote that is already up. | |
| Topic | One item under Setup or Troubleshooting. | Job, option |
| Instruction page | The page for one brand, one unit, and one topic. | |
| Step | One instruction on that page. | |
| Tip | A practical note inside the step it belongs to. | Gotcha |
| Signal | A light, a sound, or both together, and what it means. | Indication |

### The topics

| Word | Means | Not |
|---|---|---|
| Placement | Setup: where a new smoke alarm can go. Troubleshooting: what nearby thing is setting off an alarm already up. | Position, location |
| Opening | Taking a wired alarm off its base and putting it back. | Mounting |
| Mounting | Installing a wireless mount. | Installing |
| Activation | Getting a new wireless alarm or remote ready. | Turn on |
| Fitting | Putting an RF module into a wired alarm, the right way round. | Installing |
| Testing | Setting an alarm off and checking that the interconnected alarms sound too. | |
| Use | What a remote's controls do and how to use them. | |
| Locate | Using a remote to identify the alarm that triggered. | Finding the false alarm |
| What's that light or sound? | The full list of signals for one unit. | |
| Won't power on. | The alarm will not turn on. | |
| Not going off when other alarms go off. | One or more alarms stay quiet when the others sound. | |
| Customer reports false alarms. | The customer reports an alarm sound or a chirp when there was no fire. | Finding the false alarm |
| Remote won't work. | The remote is not doing its job. | |
| report faulty | The last step when the fix is not the technician's to do. | |

### Lights and sounds

| Word | Means | Not |
|---|---|---|
| Light | A light on the unit, described by its colour and how it flashes. | LED |
| Chirp | A short sound that repeats on a timer. A chirp a customer reports means low battery. | |
| View fix → | The action on a signal that opens the page for it. | |

## Left for later

None of these block version 1. Do not invent alarm facts to fill them.

- **Emerald wired pairing confirmation.** After pairing a wired Emerald alarm that uses an RF module, the confirmation is not known. Do not write it, and do not write that the alarm chirps.
- **Red flash interval.** The real interval for the flashing-red meaning is not confirmed. Do not invent one.
- **Shortcut wording.** Version 1 uses the labels under [Topic screen](#topic-screen). The final wording may change later.
- **Photo viewing.** A custom full-screen view and zoom is a possible later improvement. Version 1 uses the iPhone's own image viewing.
- **Videos.** Not in version 1. They may be considered later.
- **Theme switch.** No in-app theme switch. The app is dark only. It does not follow the iPhone setting.
- **Faulty RF modules.** Diagnosing, reporting, or replacing a faulty RF module is out of scope for now.
- **Cross-brand pairing.** Detector Inspector and Matelec were mentioned only as a possible example, not as a confirmed combination. The rule is in [Pairing](#pairing).
- **More brands.** The owner may add brands beyond the twelve.
- **Editing inside the app.** Not in version 1. The condition for revisiting it is in [How content is added](#how-content-is-added).
