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

Every brand has a Wired alarm and a Wireless alarm. Only Emerald has a Remote.

Brooks and Emerald have an RF module. On an Emerald system, a wired alarm that must connect to wireless alarms uses that module. That fact is under [Fitting](#fitting).

Anka, Cavius, Clipsal, Detector Inspector, GT, Legrand, Lifesaver, Matelec, Red, and Siterwell have the two alarms only. Brooks has the two alarms and an RF module. The owner never meets a remote on any brand but Emerald, so none is shown.


## Getting around

The path is:

1. Brand
2. Unit
3. Setup or Troubleshooting
4. Topic
5. The instruction page

After the unit, the technician picks Setup or Troubleshooting.

- **Setup** is for putting in a new alarm. The topics are the jobs, such as Pairing. A remote and an RF module have no Setup list. See Remote and RF module below.
- **Troubleshooting** is for an alarm that is already up. The topics are Lights & Sounds, Placement, and Pairing. It is a lookup. The technician opens the problem that matches what is in front of them. Inside that topic, the steps are in order. The app does not force a path through every topic, track progress, or ask them to name the alarm inside the app before it will help.

### Brand screen

The home screen. The brand names sit in a grid, three across, in alphabetical order. Large rounded buttons, because a long list is awkward in one hand. If the brands do not fit on one screen, the rest are reached by scrolling. There are no logos.

The technician picks the brand by looking at the alarm.

### Unit screen

Full-width rows, one name on each row, with one short grey line under the name that says what the unit is. The lines come from the word list: Wired alarm "On mains power, with a backup battery", Wireless alarm "Battery only, no mains wires. Links by radio", RF module "Radio unit that slots into a wired alarm", Remote "Wall-mounted unit used with the brand's alarms". No small picture. The brand stays visible at the top, small, and it is not a link, because this screen is already that brand's units. Unit is the page name. It is not written a second time. The rows are Wired alarm, Wireless alarm, and Remote or RF module where that brand has them.

There is no "both" choice. The technician picks the unit in hand right now.

### Setup or Troubleshooting screen

Full-width rows, not a side-by-side pair. A Remote and an RF module skip this screen. Each opens its own one page straight from the units.

### Topic screen

Tall rows, one per topic, in the list order under the [topic map](#topic-map). The table does not set that order. Only topics that apply to this unit are shown. A grey line separates the rows. There is no box around the list.

This is the only screen with shortcuts. Show at most these two, and only when they apply. Each one opens the other topic list. Neither one opens an instruction page.

- Switch between Setup and Troubleshooting for the current unit. Show it only when that unit has both.
- Switch between Wired alarm and Wireless alarm for the current brand, staying in the current Setup or Troubleshooting. Show it only when the brand has both and the current unit is one of those two.

Do not show a shortcut to Remote or to RF module.

Until the final wording is chosen, build these labels: **Troubleshoot this alarm**, **Set up this alarm**, **View Wired alarm**, and **View Wireless alarm**. They may change later. That change does not block version 1. The final wording is in [Left for later](#left-for-later).

### Instruction screen

The technician reads one brand, one unit, and one topic. The steps scroll on one page.

The route sits at the top: **Brand → Unit → Setup or Troubleshooting → Topic**. The earlier steps stay small. The current step is the page name, large, and it is not written a second time.

- **Brand** opens that brand's units.
- **Unit** opens Setup or Troubleshooting for that unit.
- **Setup or Troubleshooting** opens that topic list.
- **Topic** is the name of the current page. It is not a button.

The third label is the path taken, including when a page is opened from the other list. A Setup topic opened from Troubleshooting still shows Troubleshooting. Testing is that case: the topic map lists it as also reachable from Troubleshooting, so a Troubleshooting page that opens Testing opens it under Troubleshooting. A page that is not a list button, such as the low-battery steps, uses its own name in the Topic place.

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
- A link opened on purpose from outside the app, such as a bookmark, a shared link, or a typed address, opens the page it points to. It is not sent to the saved page or the brand screen. Back from it goes to the page before, or Home.

## Units and the topic map

Which units a brand shows, and which topics a unit has, follow the [topic map](#topic-map). A topic button appears when the map allows that topic. When the words are not in yet, the page says the words are not written yet. Approval of the words does not add a unit or a topic the map does not allow.

Each unit belongs to one brand. The four units are:

- **Wired alarm.** An alarm on mains power, with a backup battery. Some newer wired alarms have a sealed battery. Others have a removable battery. The technician can see which, on the unit.
- **Wireless alarm.** An alarm that runs on its own battery, with no mains wires, and interconnects by radio. The battery is sealed.
- **RF module.** A radio unit that slots into a wired alarm. Show this choice only for a brand that uses a separate module. Fitting one is rare. Tapping it opens one page that is only the fitting diagram, with no Setup choice and no list. Back goes to the brand's units.
- **Remote.** Show this choice only for a brand that has a remote. Tapping it opens one page, with no Setup or Troubleshooting choice and no list of topics. That page has a card for Activation, a card for Pairing, and a card for Use. Each is a few short steps. A remote has no light and sound table and no Troubleshooting. A section with no written words shows a card that says "These words are not written yet." Back goes to the brand's units.

### Topic map

A dash means that topic is not a button for that unit. The map decides what is allowed. A remote has no mounting topic. Mounting one is too simple to include.

The title in this map is the button and the page heading. The name of the file that holds the words is not a title.

Placement has two pages, and both use the same diagram and instructions. [Setup Placement](#setup-placement) appears under Setup. [Troubleshooting Placement](#troubleshooting-placement) appears under Troubleshooting.

| Topic | Wired alarm | Wireless alarm | RF module | Remote |
|---|---|---|---|---|
| Placement | Setup and Troubleshooting, separate pages | Setup and Troubleshooting, separate pages | — | — |
| Opening | Setup | — | — | — |
| Mounting | — | Setup | — | — |
| Activation | — | Setup | — | Remote page |
| Fitting | — | — | RF module page | — |
| Pairing | Setup and Troubleshooting, one shared page | Setup and Troubleshooting, one shared page | — | Remote page |
| Testing | Setup. Troubleshooting pages open it under Troubleshooting | Setup. Other pages open it | — | — |
| Lights & Sounds | Troubleshooting, shown first | Troubleshooting, shown first | — | — |
| Use | — | — | — | Remote page |

The map decides whether a topic exists. The lists below only give the order.

**Setup**

- Wired alarm: Placement, Opening, Pairing, Testing
- Wireless alarm: Placement, Mounting, Activation, Pairing, Testing
- RF module: no list. One page, the fitting diagram
- Remote: no list. One page, in this order: Activation, Pairing, Use

**Troubleshooting**

- Wired alarm: Lights & Sounds, Placement, Pairing
- Wireless alarm: Lights & Sounds, Placement, Pairing

The lists above are the topic buttons, in that order. The table does not set the order.

The low-battery steps are a page for a wired or wireless alarm. They are not a button on those lists. The sealed power check and the cleaning method are steps on the page that needs them. They are not buttons and they are not screens.

## Setup pages

### Setup Placement

Where a new smoke alarm can go. Every Setup and Troubleshooting Placement page uses this same diagram and these instructions.

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

Activation is for a unit that has never been turned on.

### Fitting

How to fit an RF module, and which way round it goes. The page is one diagram on the black page, with no card around it, no steps and no words. It is redrawn from the manual pictures: the back of the alarm, the module bay, the module with its pins on the end that meets the connector, and an arrow for the way it goes in. Brooks also shows its flexible antenna going into the hole at the rim first. Emerald shows the antenna standing up.

On an Emerald system, a wired alarm that must connect to wireless alarms uses an RF module. Most of those modules are already fitted. The confirmation after that pairing is not known. It is in [Left for later](#left-for-later).

### Use

What a remote's controls do and how to use them.

A remote has no light and sound table.

## Pages opened from more than one place

Some pages are opened from more than one place. The steps are written once. Two topics must not carry two copies of the same words.

[Back and Home](#back-and-home) is the return. These sections name who opens the page and what the page contains.

### Pairing

Connecting units by radio. One page for the selected brand and unit. Setup and Troubleshooting both open it. A remote's Pairing is a section of its Remote page. The button presses are the same in both. They differ by brand and by unit: Wired alarm, Wireless alarm, or Remote. They do not differ by model.

This page does not mention the RF module.

**Wired alarm and wireless alarm**

Every brand the owner has worked on is the same. You cannot add one alarm to alarms that are already up. You pair all of them again. There is no brand where only the extra alarm is paired.

The page does not say which alarm goes into pairing mode first. The brand steps name the first alarm, the master, or the alarm you start with.

Put that alarm into pairing mode, pair every other alarm to it, and open [Testing](#testing). This page owns those presses. [Testing](#testing) owns how to run the test and how to confirm every interconnected alarm sounds. Another topic does not repeat those presses or that test.

Emerald wired and wireless pairing use the same owner-confirmed method, written once and identical on both pages.

The words for one brand and one unit live in one file, `_instructions/<brand>-<unit>-pairing.md`. Setup and Troubleshooting both open that file. There is no shared opening. The last step opens that brand's Setup Testing page for the same unit. Testing still owns the test.

**Wireless alarm, written**

These brands are written: Anka, Cavius, Clipsal, Detector Inspector, Emerald, GT, Legrand, Lifesaver, Red, Siterwell.

Anka does not include the memory-clear hold from the sheet. The first Anka press is the hold until the green light has flashed 3 times.

Emerald, wired and wireless, uses the owner's field method: make sure all alarms are on. Press TEST 3 times within 2 seconds on the master alarm, and the red light flashes quickly for 90 seconds. Then press TEST 3 times within 2 seconds on every other alarm. A red flash and a chirp show it has paired. The manual's 3 second window and 25 second hold are not on the page.

**Wired alarm, written**

These brands are written: Cavius, Clipsal, Emerald, Legrand, Matelec, Siterwell.

Legrand wired uses the same Network button counts as the wireless page. The wired page also says the join on each other alarm ends after 9 minutes.

Matelec uses the mains sheet. Press TEST 3 times within 2 seconds. The light stays solid red for 50 seconds, and each join starts that 50 seconds again. Both alarms give 1 short chirp. Hold TEST on the first alarm until the red light turns off. The remote section of that sheet is not on the page.

Emerald wired uses the same field method as Emerald wireless, above. The mains sheet's 5 second turn-on hold, leave-early press and further-alarm repeat are not on the page.

Cavius wired is learned off the base, before mains power, with the Learn Mode switch. Hold the test button on one alarm until it beeps.

Clipsal wired uses a Primary and Secondary. Press Test/Hush 3 times within 2 seconds. The Standby light stays on for 30 seconds, then blinks 3 times when a Secondary joins.

Siterwell wired uses the GS519 sheet. The wireless test button is on the base. Press it 3 times within 2 seconds. The red light stays on for 2 minutes. That sheet is not hosted on an Australian site.

These stay on "These words are not written yet."

- Brooks wireless. The opened sheet is House Code on the radio module, not the battery wireless alarm.
- Matelec wireless. No battery wireless sheet was opened. The mains sheet is on the wired page.
- Anka, Brooks, Detector Inspector, GT, Lifesaver, and Red wired. No radio learn presses were found for the mains alarm. Brooks, GT, Lifesaver, and Red only show radio through a module or a base.
- Any pairing that mentions an RF module.

Sources, model names, add-one paths, and factory reset stay in `docs/wireless-pairing-research.md` and `docs/wired-pairing-research.md`. They are not on the phone.

Do not build a general compatibility list. A note on this page is added only for a combination the owner confirms later.

**Remote**

The presses for that brand's remote. This page does not open Testing.

### Testing

How to run the test for the selected brand and unit, and how to confirm during the test that every interconnected alarm sounds. Include the sounds and the waiting periods that belong to that brand.

Every test on every brand is the same hold: "Hold test button for 3 cycles of the alarm sound." The 3 is gold. The brand's own button name replaces "test button" where the unit prints a different one, such as Test/Hush. This is the owner's field rule and wins over a manual's hold time. The sounds and results after the hold stay as the manual gives them.

One page for a wired or wireless alarm. It is a Setup topic. Troubleshooting pages open it and do not list it as their own button. A remote never opens it. Pairing is not a button on this page.

This page includes the Cavius wait in [Confirmed differences between brands](#confirmed-differences-between-brands), including when another page opened Testing.

### Sealed power check

Not its own screen. The page that needs it shows these steps. The battery cannot be tested with a meter, and it cannot be changed. The page that shows the steps says what to do with the result.

1. Turn it off. A wired alarm says only "Turn it off." A wireless alarm adds "Off means off the mount." The Emerald wireless alarm is the exception: it adds "Press test button 6 times." (the 6 is gold), because that is how it turns off.
2. Hold test button to discharge remaining power.
3. Turn it back on.
4. Wait 2 to 3 minutes.

### Low-battery steps

Not a topic button. [Lights & Sounds](#lights--sounds) opens these steps from Chirping.

A Cavius alarm chirping on its own uses these steps. The Cavius chirp after a test the technician has just run does not. That wait is on [Testing](#testing).

A wireless alarm shows only the first block, because no wireless alarm has a removable battery. A wired alarm shows both blocks on this one page. There is no extra choice. The technician follows the block that matches the battery they can see on the unit.

The first card is Low battery: "Vacuum or blow the outside vents." Then check the power or the battery, as below.

**Wireless alarm, or a wired alarm with a sealed battery**

Show the [sealed power check](#sealed-power-check) on this page. If it chirps, or won't turn back on, end at [report faulty](#report-faulty). If it turns on and stays quiet, open [Testing](#testing). This card has no Pairing line.

**Wired alarm with a removable battery**

The power is on.

1. Take the alarm off its base.
2. Test the battery.
3. Hold test button with battery removed to discharge remaining power.
4. Put the alarm back on its base.
5. Wait the same 2 to 3 minutes as the sealed power check.
6. If it chirps, end at [report faulty](#report-faulty).
7. If it stays quiet, open [Testing](#testing). If an alarm doesn't activate with the others during the test, open [Pairing](#pairing). That line shows only where the brand and unit have a Pairing page written.

A remote has no battery steps and no light and sound table.

### Cleaning method

Not its own screen. The page that needs it shows these steps. Vacuum or blow the outside vents. The same method is used for every brand.

- A wired alarm stays on its base while it is cleaned.
- A wireless alarm may come off its mount when that is easier. Put it back on the mount before any later test or power check.

Do not include a step for isolating mains power. This is only cleaning of the outside vents.

### report faulty

The last step when the fix is not the technician's to do. It is not its own topic. The words on the page are **report faulty**. The app stops. The page that opened it does not continue.

The app does not say to replace the unit, and it does not say to book an electrician. That organising stays in the existing work system, outside the app.

## Troubleshooting pages

### Lights & Sounds

The full list of signals for the selected unit, in the style of a manual. Each light or sound, and what it means.

The page is a table. Light and Sound sit side by side. What it means is the next line, across the width of the phone. A faint line marks each cell. The table is one rounded card with the tight blue edge. The Light and Sound labels are centred, and the meaning is centred in white under each row. The header stays pinned while the rows scroll, and each lamp lights its own row softly. Every signal page is written this way. A page lists its rows as `signals:` in its front matter, and `_includes/signal-table.html` draws the table, so no page writes table markup by hand. Every written wired, wireless, and remote signal page is written this way. A unit with no signal words yet shows the note "These words are not written yet."

When the colour is confirmed, the light cell draws that colour as a lamp. When the interval is confirmed, the lamp plays a short blink and the real interval is written large. The short blink is not the real wait. The cell does not write every. The repeat is assumed.

When a lamp shows the colour, the cell does not write that colour again. The colour stays in the hidden label, so a screen reader still hears it. The cell does not repeat the word light. When the cell gives an interval, it does not say flash. A count is written 3x or 2x. The screen reader still hears 3 times or twice. The light that comes on as the alarm is turned on is not listed. That moment is assumed.

The sound cell gives the timing. It does not say chirp. It does not write every.

When the colour is not stated, the light cell shows the count, the wait, or the short words with no lamp. A colour is never guessed. A row that carries two colours names the second in its words, because a cell draws one lamp. A side with no cue shows a white dash, centred in the cell. The screen reader still hears None. A flash count with no timing, such as the memory check, shows the count (1x, 2x, 3x) beside a steady lamp and still bars, because there is no real wait to blink. A blue light is drawn as a blue lamp. A sound cell may wrap its count and its wait onto two lines.

Pairing flashes and pairing success stay on the Pairing page. They are not rows on this list.

The list is Troubleshooting only, and it is the first topic there. Setup has no copy of the list. Setup steps still show the particular light or sound expected at that step.

Each brand's wired alarm and wireless alarm has its own list. Each signal is written on that list once. The steps use that same list, so they cannot disagree.

A meaning can be tapped when there is a useful page to open. The action reads **View fix →**. When there is no useful page to open, the entry is plain text.

Two meanings are already set:

- **Chirping** means low battery, and opens the [low-battery steps](#low-battery-steps). The row's words also say that the Cavius chirp after a test the technician has just run is normal, and that wait is on [Testing](#testing). The row always offers the same action. It does not appear or disappear because a test was just run.
- **Flashing red after an alarm** means this alarm is the one that set the others off. The interval is not confirmed. It is in [Left for later](#left-for-later). The light cell shows a steady red lamp and the words **after an alarm**. It does not play a blink and it does not show a timing.

### Troubleshooting Placement

The page body is the diagram and instructions in [Setup Placement](#setup-placement). It has no troubleshooting-specific text.

## Rules for every instruction

### Steps, photos, and tips

- All steps for a topic sit on one scrolling page.
- Each step is a blue step number with the words, in a row of a card. A section heading starts a card, and a page with no heading is one card. Numbers restart in each card. Add the light or sound to expect, a tip, and a photo or diagram only when that step has one.
- A step does not need all of those.
- When a step names a button, it uses the name printed on the unit.
- A clear diagram from a manual may be used when no real photo exists. Photos open with the iPhone's normal image viewing.
- A practical note that is specific to the brand sits inside the step it belongs to, as a highlighted **Tip**. A Tip is a rounded inset note in the reading flow, with the same tight blue edge as a brand button. It is not a step, and it has no number.

### Flashing lights

Wherever a flashing light with a confirmed interval is shown, including on a step and in Lights & Sounds, show a short visual demonstration and write the real interval in large text. Do not make the technician wait through a long cycle. A 40-second or 48-second flash is an example of a long cycle, not a stored interval for a brand.

### Chirp waits

The 2 to 3 minute wait is the one in the [sealed power check](#sealed-power-check). The removable-battery block uses that same wait. This section does not state the number again.

That wait is separate from the Cavius wait after a test. The Cavius wait does not replace it or add to it. Do not run both as two extra waits stacked on the end of the low-battery steps.

### Not topics

Won't power on, quiet alarms, false alarms, and a dead remote are not topics, because the light and sound table covers them. Locate stays off.

### Words not written yet

A page the map allows but that has no file in `_instructions/` shows "These words are not written yet." as a plain muted line, with no blue edge, so it cannot be taken for a Tip. Its row in the topic list carries a small muted "Not written yet" under the name. The files in `_instructions/` are the record of what is written. Do not keep a second list of them in another document. Do not fabricate testimonials, customer quotes, manuals the owner did not ask for, distances, light intervals, or other brand differences.

### Leave out

- Basic consumer advice, and how often a household should test an alarm.
- Factory reset.
- Clearing all pairings.
- Battery replacement as its own topic. The only battery steps in the app are the ones in the [low-battery steps](#low-battery-steps).
- Remote battery replacement.
- A power-outage visit.
- The names Power Cycle, Reset, factory reset, and restart for the discharge steps.
- Anything in [Left for later](#left-for-later).

## Confirmed differences between brands

Wireless pairing presses differ by brand. The written set, and the brands still waiting, are in [Pairing](#pairing). This section keeps the differences where the field method and a manual disagree, or where a sound is easy to misread.

**Emerald pairing.** The pairing used in the field is: all alarms on, TEST three times within 2 seconds on the master alarm, then the same on every other alarm. It is identical for wired and wireless. Emerald instructions include only behaviour the owner has confirmed. They do not name a Ranger model, and they do not carry the earlier Ranger manual discussion.

**Cavius, after a test.** After the technician runs a test, every Cavius alarm chirps for about 2 minutes. That chirp is normal. Wait for it to finish, then wait another 2 minutes for any further chirp. [Testing](#testing) includes this wait. One Cavius alarm chirping on its own is a low battery, and uses the [low-battery steps](#low-battery-steps).

## How the phone behaves

- Use the iPhone's normal screen locking. Do not keep the screen awake.
- The app is dark only. It does not follow the iPhone’s light or dark setting.
- Use the iPhone's normal image viewing.
- Tap targets are sized for one-handed use on an iPhone SE (3rd generation). Text is readable at arm's length, with clear space between buttons. There are no glove-specific requirements.

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
| Setup | The choice for putting in a new alarm. | Installing, installation |
| Troubleshooting | The choice for a problem on an alarm that is already up. | |
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
| Lights & Sounds | The full list of signals for one unit. | |
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
