# APM Alarms: Product Brief

This is the brief for version 1. It is the description to build from.

## What it is

A personal quick-reference cheat sheet for a smoke alarm technician. It answers questions about the brand and the unit in the technician's hand. It is not about the property, and it is not about the job.

The alarms in this work are interconnected. Pairing and testing matter. The app does not model the whole network of alarms.

On a job, the technician needs two outcomes: every alarm works, and testing shows that every alarm is interconnected. The existing work system records that the job is done. The app does not.

The app does not include:

- Site records, site types, job tracking, completion checklists, or booking workflows
- A way to pick a model or a series
- Sources, manual links, or source records
- Editing inside the app

## Who it's for

- The owner, a smoke alarm technician in Queensland, Australia.
- One person first. It should be easy to share with other technicians later.
- Work phones are iPhones.

It is a website saved to the iPhone home screen. It opens like an app, with no sign-in and no welcome screen.

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

The owner may add more brands later. Version 1 is complete only when all twelve have owner-approved content.

## How the app is organised

Everything on screen follows from these pieces. A button is shown only when the owner has approved the content behind it. Which units a brand has, and which topics a unit has, come from the unit list and the [topic map](#topic-map). Approval alone does not add a unit or a topic the map does not allow.

### Brand

The company that makes the alarm, such as Emerald. The technician picks the brand by looking at the alarm.

### Unit

The thing in the technician's hand. Each unit belongs to one brand. The four units are:

- **Wired alarm.** On mains power, with a backup battery. [Power Cycle](#power-cycle) treats a removable backup battery and a built-in lithium backup battery differently.
- **Wireless alarm.** Runs on its own battery, with no mains wires, and interconnects by radio.
- **RF module.** A radio unit that slots into a wired alarm. Show this choice only for a brand that uses a separate module. Fitting one is rare.
- **Remote.** Show this choice only for a brand that has a remote.

There is no "both" choice. The technician picks the unit in hand right now.

### Setup and Troubleshooting

After the unit, the technician picks one:

- **Setup**, for putting in a new alarm, remote, or RF module.
- **Troubleshooting**, for looking something up on an alarm or remote that is already up.

Troubleshooting is a lookup. The technician opens whichever topic helps with the problem in front of them. The app does not force a fixed sequence, track progress, or ask them to identify the alarm inside the app first. Do not describe Troubleshooting as stopping a faulty alarm.

The RF module choice has no Troubleshooting, because it has no troubleshooting content.

### Topic

One item under Setup or Troubleshooting, such as Pairing. The [topic map](#topic-map) is the list of which topics exist for which unit.

### Instruction page

What the technician reads: one brand, one unit, and one topic.

A page is one of two kinds:

- **Shared.** Setup and Troubleshooting both open the same page, because the instructions are the same.
- **Separate.** Setup and Troubleshooting each have their own page, even when the topic name is the same. The two pages may reuse common steps. They must not be two drifting copies of the same words.

### Step

One instruction on a page. It has the instruction text and, only where they help, a photo or diagram, the light or sound to expect, and a tip. A step does not need all of those.

When a step names a button, it uses the name printed on the unit.

### Signal

A light, a sound, or both together, and what it means. Each brand's wired alarm, wireless alarm, and remote has its own list, and each signal is written on that list once. What's that light or sound? and the steps both use that list, so they cannot disagree.

## Topic map

A dash means that topic is not used for that unit. The map decides what is allowed. A remote has no mounting topic: mounting one is too simple to include.

| Topic | Wired alarm | Wireless alarm | RF module | Remote |
|---|---|---|---|---|
| Placement | Setup | Setup | — | — |
| Opening | Setup and Troubleshooting, one shared page | — | — | — |
| Mounting | — | Setup and Troubleshooting, separate pages | — | — |
| Activation | — | Setup | — | Setup and Troubleshooting, one shared page |
| Fitting | — | — | Setup | — |
| Pairing | Setup and Troubleshooting, separate pages | Setup and Troubleshooting, separate pages | — | Setup and Troubleshooting, separate pages |
| Testing | Setup and Troubleshooting, one shared page | Setup and Troubleshooting, one shared page | — | — |
| What's that light or sound? | Troubleshooting, shown first | Troubleshooting, shown first | — | Troubleshooting, shown first |
| Power Cycle | Troubleshooting | Troubleshooting | — | — |
| Cleaning | Troubleshooting | Troubleshooting | — | — |
| Use | — | — | — | Setup and Troubleshooting, one shared page |
| Locate | — | — | — | Troubleshooting, where the brand supports it |

There is no separate "Won't turn on" topic. A unit that will not start is covered inside the other troubleshooting pages, including Power Cycle.

Wired alarms and wireless alarms have no "Finding the false alarm" topic. The technician uses the other troubleshooting topics to work out which alarm it is. Locate, on a remote, is the only exception.

The map decides whether a topic exists. The lists below only give the order.

**Setup**

- Wired alarm: Placement, Opening, Pairing, Testing
- Wireless alarm: Placement, Mounting, Activation, Pairing, Testing
- RF module: Fitting
- Remote: Activation, Pairing, Use

**Troubleshooting**

- Wired alarm: What's that light or sound?, Opening, Pairing, Testing, Power Cycle, Cleaning
- Wireless alarm: What's that light or sound?, Mounting, Pairing, Testing, Power Cycle, Cleaning
- Remote: What's that light or sound?, Activation, Pairing, Use, then Locate where the brand supports it

The path for an RF module is Brand, then RF module, then Setup, then Fitting. That screen shows Setup only.

## Topics

### Placement

Where a smoke alarm can go. The same instructions are used for every brand.

Where practical, a smoke alarm goes on the ceiling. Do not place one:

1. within 300 mm of a corner where the ceiling meets a wall
2. within 300 mm of a light fitting
3. within 400 mm of an air-conditioning vent
4. within 400 mm of the blades of a ceiling fan

### Opening

For a wired alarm: attaching it to its existing base, and taking it off that base.

Installing a wired base is electrician work, so the app does not include it. That is why a wired alarm has no Mounting topic.

Battery testing and replacement are not part of Opening. They sit inside [Wired Power Cycle](#wired-power-cycle).

### Mounting

For a wireless alarm. A technician may install a wireless mounting plate when it is needed.

- **Setup** covers installing the mount.
- **Troubleshooting** covers checking that the mount is fixed to the ceiling properly and that the alarm attaches to it properly.

Where the owner has confirmed a light or other signal that shows the alarm is attached and switched on correctly, include it. Do not invent one.

### Activation

Getting a new unit ready.

- **Wireless alarm.** Turning it on for the first time. When attaching the alarm to its mount is what switches it on, Activation points the technician to the Setup Mounting instructions instead of repeating them.
- **Remote.** Getting a new or replacement remote ready to pair. One shared page under Setup and Troubleshooting.

Setup Activation and Troubleshooting Power Cycle are different topics. Do not merge them.

### Fitting

For an RF module only. How to fit the module and which way round it goes. Setup only.

### Pairing

Connecting units by radio. The steps differ by brand and by unit: Wired alarm, Wireless alarm, or Remote. They do not differ by model.

Setup and Troubleshooting each have their own Pairing page. The two pages share steps where the steps are actually the same.

**Wired alarm and wireless alarm**

- **Setup** covers connecting the alarms, then links to the shared Testing page to confirm the new setup.
- **Troubleshooting** starts with a link to the shared Testing page, to test one alarm and confirm that every interconnected alarm sounds. Back from Testing returns to Pairing. If they do not all sound, Pairing continues with the re-pairing steps for that brand, then links to Testing again.

Pairing a wired alarm through its RF module belongs to the wired alarm's Pairing topic: the Setup page when connecting, and the Troubleshooting page when re-pairing. It does not belong under the RF module choice.

Some brands do not let one replacement or added alarm be paired on its own. For those brands, both Pairing pages explain putting one alarm into pairing mode and pairing every alarm again.

Do not build a general compatibility list. A note inside Setup Pairing is added only for a combination the owner confirms later.

**Remote**

- **Setup** covers connecting a new remote to the alarms.
- **Troubleshooting** is a separate page. If the remote has lost its connection but still works, pair it again. If the remote itself is faulty, the page ends at [Report as faulty](#report-as-faulty).

A remote has no Testing topic, so remote Pairing does not link to Testing.

### Testing

How to run the test for the selected brand and unit, and how to confirm during the test that every interconnected alarm sounds. Include the sounds and the waiting periods that belong to that brand.

One shared page. Setup uses it to confirm a unit just set up. Troubleshooting uses it to test a unit already up. The Cavius wait in [Confirmed differences between brands](#confirmed-differences-between-brands) belongs on this page.

### Power Cycle

A Troubleshooting topic for a wired alarm or a wireless alarm that is chirping, not responding, or not behaving correctly. Wired and wireless alarms use different steps. Each brand has its own page, because the button names and any confirmation light belong to that brand.

Battery testing and replacement stay inside Wired Power Cycle. They are not their own topic.

#### Wired Power Cycle

**Removable backup battery**

1. Remove the alarm from its base.
2. Test the battery and replace it if required.
3. With the battery removed, hold TEST to drain residual power.
4. Reinsert the battery and attach the alarm to its base.
5. Wait at least 2 minutes for another chirp.
6. If the chirp returns or the original problem remains, end at [Report as faulty](#report-as-faulty).

**Built-in lithium backup battery**

Do not attempt the removable-battery steps. End at [Report as faulty](#report-as-faulty).

#### Wireless Power Cycle

1. Remove it from the mount.
2. Make sure it is off.
3. Press TEST to drain residual power.
4. Refit it to the mount. Many alarms power on as they twist on.
5. Where the alarm has a power-on light, confirm the correct one.
6. Wait at least 2 minutes for another chirp.
7. If the chirp returns or the original problem remains, end at [Report as faulty](#report-as-faulty), because the sealed lithium battery cannot be replaced.

On the page, TEST is written as the name printed on that unit.

### Cleaning

The same method for wired and wireless alarms: vacuum or blow the outside vents. The same instructions are used for every brand.

- A wired alarm stays on its base while it is cleaned.
- A wireless alarm may come off its mount when that is easier.

Do not include a step for isolating mains power. This is only cleaning of the outside vents.

### Use

For a remote. What its controls do and how to use them. One shared page under Setup and Troubleshooting.

The meanings of the remote's lights and sounds live in What's that light or sound?, not on this page.

### Locate

For a remote, and only for a brand whose remote can do this. How to identify the alarm that triggered. This is the only topic whose job is finding that alarm.

### What's that light or sound?

The full list of signals for the selected unit, in the style of a manual: each light or sound, and what it means.

The list is Troubleshooting only, and it is the first topic there. Setup has no copy of the list. Setup steps still show the particular light or sound expected at that step.

In version 1, a meaning can be tapped when there is a useful troubleshooting page to open. The action reads **View fix →**, and Back returns to the same place in the list. When there is no useful page to open, the entry is plain text.

## Rules for every instruction

### Steps, photos, and tips

- All steps for a topic sit on one scrolling page.
- Each step is a card: a large step number and the instruction. Add the light or sound to expect, a tip, and a photo or diagram only when that step has one.
- A clear diagram from a manual may be used when no real photo exists.
- A practical note that is specific to the brand sits inside the step it belongs to, as a highlighted **Tip**. The exact look of a Tip is settled during design.
- An early layout try is in [mockups/steps-layout.html](../mockups/steps-layout.html). It only shows how a step card could look. Where it disagrees with this brief, follow this brief.

### Flashing lights

Wherever a flashing light is shown, including on a step and in What's that light or sound?, show a short visual demonstration and write the real interval in large text. Do not make the technician wait through a 40-second or 48-second animation.

### Chirp waits

Any Troubleshooting instruction meant to resolve chirping ends with a wait of at least 2 minutes, to confirm the chirp does not come back. Wired and Wireless Power Cycle already include this wait.

That wait is separate from the extra Cavius wait after a test. The Cavius wait does not replace it or add to it.

### Report as faulty

The last step on a Troubleshooting page when the fix is not the technician's to do. It is not its own topic.

What gets arranged depends on the unit, and it is arranged through the existing work system:

- **Wireless alarm or remote:** replace the unit. A remote with a low battery is replaced as a whole unit.
- **Wired alarm:** arrange a replacement and an electrician.

### Leave out

- Basic consumer advice, and how often a household should test an alarm.
- Factory reset.
- Clearing all pairings.
- Battery replacement as its own topic. The only battery steps in the app are the ones inside Wired Power Cycle.
- Remote battery replacement. Never include those steps.
- Anything in [Left for later](#left-for-later).

## Confirmed differences between brands

**Emerald wireless pairing.** The pairing used in the field starts by pressing TEST three times quickly, within 2 seconds. Emerald wireless instructions include only behaviour the owner has confirmed. They do not name a Ranger model, and they do not carry the earlier Ranger manual discussion.

**Emerald, wired and wireless together.** On a mixed Emerald system, every wired alarm gets an RF module if it needs to connect to wireless alarms. Most of those modules are already fitted. The confirmation after that pairing is not confirmed yet. It is in [Left for later](#left-for-later).

**Cavius, after a test.** Cavius alarms normally chirp for about 2 minutes after a test. Wait for that chirping to finish, then wait another 2 minutes for any further chirp. This belongs to the shared Testing page, including when Pairing links to Testing.

## Getting around

The path is:

1. Brand
2. Unit
3. Setup or Troubleshooting
4. Topic
5. The instruction page

Size every tap target for one-handed use on an iPhone SE (3rd generation). Technicians do not wear gloves, so there are no glove-specific requirements. Text must be readable at arm's length. Leave clear space between buttons.

### Brand screen

The home screen. Square buttons in a grid, each showing the brand's logo, in alphabetical order. Large squares, because a long list is awkward in one hand. If the brands do not fit on one screen, the rest are reached by scrolling.

### Unit screen

Large buttons with a small picture: Wired alarm, Wireless alarm, and Remote or RF module where that brand has them. The brand stays visible at the top.

### Setup or Troubleshooting screen

Two large buttons. For an RF module, this screen shows Setup only.

### Topic screen

Large buttons, one per topic, in the [topic map](#topic-map) order. Only topics that apply to this unit are shown.

This is the only screen with shortcuts. Show at most these two, and only when they apply. Each one opens the other topic list. Neither one jumps straight to an instruction page.

- Switch between Setup and Troubleshooting for the current unit. Show it only when that unit has both.
- Switch between Wired alarm and Wireless alarm for the current brand, staying in the current Setup or Troubleshooting. Show it only when the brand has both and the current unit is one of those two.

Do not show a shortcut that jumps to Remote or to RF module.

The final wording of these shortcuts is not decided. Examples such as **Troubleshoot this alarm**, **Set up this alarm**, **View Wired alarm**, and **View Wireless alarm** are for design review. They are not the labels to build.

### Instruction screen

A line at the top shows the route: **Brand → Unit → Setup or Troubleshooting → Topic**.

- **Brand** opens that brand's units.
- **Unit** opens Setup or Troubleshooting for that unit.
- **Setup or Troubleshooting** opens that topic list.
- **Topic** is the name of the current page. It is not a button.

The labels show the route taken, including on a shared page.

The steps scroll on one page. Photos open with the iPhone's normal image viewing, as described under [How the phone behaves](#how-the-phone-behaves).

Instruction pages do not have buttons that jump to the same topic for another unit.

### Back and Home

Back and Home sit in a bar fixed to the bottom of every screen except the brand screen, where they are hidden because the technician is already home. The bar stays put while the page scrolls. On an instruction page the bar contains only Back and Home. Links inside the page, such as **View fix →**, are still allowed.

- **Back**, on the left, returns to the actual previous page and the scroll position the technician left it at. When that previous page was the topic list that opened a shared page, Back returns to that list.
- **Home**, on the right, returns to the brand screen.

Both are large enough to hit without looking, and they always sit in the same place.

The app needs its own Back button. Saved to the home screen, the iPhone hides Safari's back button, and swiping back is not reliable.

## If you leave and come back

Start a 15-minute timer when the app is no longer visible. That includes the phone locking, and the technician switching to another app. Moving between pages inside the app does not start the timer.

- Coming back within 15 minutes reopens the same page and the same scroll position, and stops the timer.
- Leaving again starts a fresh 15-minute timer.
- Coming back after 15 minutes opens the brand screen.
- The first time the app is opened, there is nothing to restore, so it opens the brand screen.

## How the phone behaves

- Use the iPhone's normal screen locking. Do not keep the screen awake.
- Follow the iPhone's light or dark setting. When the phone is in dark mode, use a strong dark design. Do not add an in-app theme switch now.
- Use the iPhone's normal image viewing.

## Working without a connection

On the first opening with Wi-Fi or mobile data, show the approved content straight away and download every approved page and image in the background. Do not wait for the technician to open each page. Do not put a download or a setup screen in front of the first use.

If that first download is interrupted, resume it automatically the next time the app is online. If a page has not been saved yet and there is no connection, say that a connection is needed for that page. On the brand screen, Back and Home stay hidden. On every other screen, keep them available.

Once a complete copy is on the phone, keep using it while each later version downloads in the background. Switch to the new version only after every required page and image has downloaded. If an update is interrupted, incomplete, or missing a required file, keep using the previous complete version.

Do not show a "Ready offline" status.

## How content is added

There is no editing inside the app. Sign-ins, permissions, and upload screens are a lot to build and look after when content changes only now and then. An AI agent prepares additions and changes. Revisit in-app editing only if many technicians want to add their own tips regularly.

The owner may supply manuals and field information. Look up an official manual only when the owner explicitly asks during the build. When the owner's confirmed field information disagrees with a manual, the owner's version is the one to use.

Version 1 uses text, photos, and diagrams.

Nothing is shown until the owner has approved it. That includes changes prepared by the AI agent.

## Words

Each word below means one thing in the app. The "Not" column lists names the app must not use for that thing. This brief may still use an ordinary word when explaining a step.

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
| Troubleshooting | The choice for looking up a problem. A lookup, not a guided workflow. | |
| Topic | One item under Setup or Troubleshooting, such as Pairing. | Job, option |
| Instruction page | The page for one brand, one unit, and one topic. | |
| Step | One instruction on that page. | |
| Tip | A practical note inside the step it belongs to. | Gotcha |
| Signal | A light, a sound, or both together, and what it means. | Indication |

### The topics

| Word | Means | Not |
|---|---|---|
| Placement | Where a smoke alarm can go. | Position, location |
| Opening | Taking a wired alarm off its base and putting it back. | Mounting |
| Mounting | Installing a wireless mount, or checking that mount and how the alarm sits on it. | Installing |
| Activation | Getting a new wireless alarm or remote ready. | Turn on |
| Fitting | Putting an RF module into a wired alarm, the right way round. | Installing |
| Power Cycle | The troubleshooting topic for an alarm that is chirping or not behaving correctly. With a removable backup battery, the steps take the power off and bring it back. With a built-in lithium backup battery, the page ends at Report as faulty. | Reset, factory reset, restart |
| Testing | Setting an alarm off and checking that the interconnected alarms sound too. | |
| Cleaning | Cleaning the outside vents of an alarm. | Maintenance |
| Use | What a remote's controls do and how to use them. | |
| Locate | Using a remote to identify the alarm that triggered. | Finding the false alarm |
| What's that light or sound? | The full list of signals for one unit. | |
| Report as faulty | The last step on a troubleshooting page when the fix is not the technician's to do. | |
| Faulty | A unit that needs replacing. | Defective |

### Lights and sounds

| Word | Means | Not |
|---|---|---|
| Light | A light on the unit, described by its colour and how it flashes. | LED |
| Chirp | A short sound that repeats on a timer. | |
| View fix → | The action on a signal that opens the troubleshooting page for it. | |

## Left for later

None of these block version 1.

- **Emerald wired pairing confirmation.** After pairing a wired Emerald alarm through an RF module, the confirmation is not known yet. The owner's recollection is that it may be a light. Check it on a real unit while preparing that content. Do not write that it chirps.
- **Shortcut wording.** The topic-screen shortcuts still need their final labels. The examples under [Topic screen](#topic-screen) are not those labels.
- **Tip appearance.** The exact look of a highlighted Tip is settled during design.
- **Photo viewing.** A custom full-screen view and zoom is a possible later improvement. Version 1 uses the iPhone's own image viewing.
- **Videos.** Not in version 1. They may be considered later.
- **Theme switch.** No in-app theme switch is added now. The app follows the iPhone setting.
- **Faulty RF modules.** Diagnosing, reporting, or replacing a faulty RF module is out of scope for now.
- **Cross-brand pairing.** Detector Inspector and Matelec were mentioned only as a possible example, not as a confirmed combination. The rule for this is in [Pairing](#pairing).
- **More brands.** The owner may add brands beyond the twelve.
- **Editing inside the app.** Not in version 1. The condition for revisiting it is in [How content is added](#how-content-is-added).
