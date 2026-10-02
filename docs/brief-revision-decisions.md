# Product brief revision decisions

This is the temporary, current record of the owner's answers after the blind review. It contains decisions to carry into the next rewrite of `docs/product-brief.md`, not a history of rejected ideas.

When the questioning is complete:

1. Rewrite the product brief by replacing conflicting or outdated text rather than appending corrections.
2. Check the rewritten brief with the owner.
3. Remove this temporary file once every decision is represented clearly in the brief.

## Purpose and boundaries

- The app is a personal, quick-reference cheat sheet for a smoke alarm technician.
- It is about the selected brand and unit, not the property or job site.
- Do not add site records, site types, job tracking, completion checklists, or booking workflows.
- The alarms encountered in this work are interconnected. Pairing and testing are essential, but the app does not model the whole network.
- The technician's two job outcomes are that every alarm works and testing confirms that every alarm is interconnected. Their existing work system records completion.

## Initial brand coverage

Version 1 must support several brands:

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

The owner may add more later.

- The owner may supply manuals and field information.
- Find official manuals only when the owner explicitly asks during the build.
- Treat the owner's confirmed field information as the final decision when it differs from a manual.

## Navigation

The main path remains:

1. Brand
2. Unit
3. Setup or Troubleshooting
4. Topic
5. Instructions

- Keep the context labels at the top as tappable shortcuts.
- Size all tap areas for one-handed use on an iPhone SE (3rd generation).
- Technicians do not wear gloves. Remove glove-specific requirements.
- Individual instruction pages have fixed **Back** and **Home** navigation only.
- Back returns to the actual previous page, including the Setup or Troubleshooting list that opened a shared topic.
- Home returns to the brand grid.
- Remove same-topic buttons for other units from instruction pages.
- When a topic's instructions are genuinely identical under Setup and Troubleshooting, both routes open one shared instruction page.
- When the purpose or instructions differ by section, use separate Setup and Troubleshooting pages even when they have the same topic name.
- Back always returns to the Setup or Troubleshooting list that opened the page.

On a Setup or Troubleshooting topic-list page, show no more than these two shortcuts when applicable:

- Switch section for the current unit.
- Switch between Wired and Wireless for the current brand while staying in the current Setup or Troubleshooting section.

Do not show generic Remote or RF-module switching shortcuts.

The final shortcut wording is not decided. Examples such as **Troubleshoot this alarm**, **Set up this alarm**, **View Wired alarm**, and **View Wireless alarm** must be reviewed during design rather than treated as final labels.

## Reopening the app

- Start a 15-minute timer whenever the app leaves the screen.
- Returning within 15 minutes reopens the same page and scroll position and stops the timer.
- Leaving again starts a fresh 15-minute timer.
- Returning after 15 minutes opens the brand grid.
- Home always opens the brand grid.

## Phone behaviour and presentation

- Use normal iPhone screen locking. Do not keep the screen awake.
- Follow the iPhone's light or dark system setting. Prefer a strong dark-mode design, but do not add an in-app theme switch now.
- Use the phone's normal image viewing initially. Custom full-screen and zoom controls are a possible later improvement.
- A step may be text-only when an image adds no value.
- A clear diagram from a manual may be used when no real photo is available.
- For a flashing light, show a short visual demonstration and write the real interval clearly in large text. Do not make the user wait through a 40- or 48-second animation.
- Important brand-specific practical notes belong in the relevant step and may use a highlighted **Tip** treatment. Review the exact visual format during design.

## Offline behaviour

- Save content and images for offline use in the background.
- Do not show a visible **Ready offline** status.
- Download a complete new content version before switching to it.
- If an update is interrupted, incomplete, or missing a required file, keep using the previous complete version.
- Videos are not part of version 1.

## Content and approval

- Sources and manual links stay out of the app.
- Individual instructions do not need source records.
- The owner personally confirms content.
- Any AI-prepared addition or change must wait for the owner's approval before going live.
- Version 1 uses text, photos, and diagrams. Videos may be considered later.
- Include only information useful to a technician. Leave out basic consumer advice and routine test frequency.

## Pairing and interconnection

- Pairing appears under both Setup and Troubleshooting.
- Setup Pairing covers connecting alarms.
- Troubleshooting Pairing begins by testing one alarm and confirming every interconnected alarm sounds. If they do not, it continues to the appropriate brand-specific re-pairing steps.
- Setup and Troubleshooting therefore use separate Pairing pages, while sharing common steps where appropriate.
- Pairing procedures differ by brand, not by model, for the alarms covered by the app. Do not add a model-selection screen.
- Emerald wireless pairing used in the field starts by pressing TEST three times quickly within 2 seconds.
- The current brief confuses two Ranger manuals. EP-RANG-10 is the non-RF manual; the pairing procedure reviewed in the follow-up is from the official EP-RANG-RF-10 manual. Remove the brief's current “resolved” explanation when rewriting it. This correction does not add model selection to the app.
- On a mixed Emerald system, every wired alarm gets an RF module if it needs to connect to wireless alarms. Most modules are already fitted.
- Pairing a wired alarm through its RF module belongs under the Wired alarm's Pairing topic, not under the RF-module choice.
- For a brand that requires the whole network to be paired again, put one alarm into pairing mode and pair every alarm again.
- Do not include clear-all-pairings instructions.
- Some brands do not allow one replacement or added alarm to be paired by itself; the whole group must be paired again. Explain the correct approach on that brand's Pairing page.
- Detector Inspector and Matelec were given as a possible cross-brand example, not a confirmed rule. Do not build a general compatibility list. Add a note inside Setup/Pairing only for combinations the owner confirms later.

### Pairing fact still to confirm

- The confirmation after pairing an Emerald wired alarm through an RF module is not confirmed. Do not state that it chirps. The owner's current recollection is that confirmation may be a light signal; check this on a real unit during content preparation.

## RF module

- Keep **RF module** as a separate unit choice after selecting a brand.
- Show the choice only for brands that use a separate RF module.
- Installing these modules is rare. This choice contains fitting and orientation instructions only.
- Fitting appears under Setup only.
- The path is **Brand → RF module → Setup → Fitting**.
- Do not show Troubleshooting for the RF-module choice because it has no troubleshooting content.

## Remote

- Keep **Remote** as a separate unit choice after selecting a brand.
- Show the choice only for brands that have a remote.
- Do not include physical remote-mounting instructions; mounting is too simple to warrant a topic.
- Include remote activation, connection, pairing, controls, use, light meanings, sound meanings, and troubleshooting.
- Remote activation/setup appears under both Setup and Troubleshooting because replacing a faulty remote requires setting up the new one.
- Both routes open one identical shared Remote activation/setup instruction page.
- Remote-use instructions appear under both Setup and Troubleshooting.
- Both routes open one identical shared Remote Use instruction page.
- Remote Pairing appears under both Setup and Troubleshooting.
- Setup Pairing connects a new remote.
- Troubleshooting determines the problem; if the remote has lost its connection but still works, pair it again, and if the remote itself is faulty, replace it.
- Setup and Troubleshooting use separate Remote Pairing pages while reusing the same pairing steps where appropriate.
- Include Locate inside Remote troubleshooting for compatible systems as a way to identify the triggering alarm.
- Never include remote battery-replacement instructions.
- A low-battery remote is replaced as a complete unit.

## Placement

Placement applies to all smoke alarms, including wired and wireless alarms.

- Placement appears under Setup only, not Troubleshooting.
- Where practical, smoke alarms must be placed on the ceiling.
- Do not place a smoke alarm:
  1. within 300 mm of a corner where the ceiling meets a wall;
  2. within 300 mm of a light fitting;
  3. within 400 mm of an air-conditioning vent; or
  4. within 400 mm of the blades of a ceiling fan.

## Wired opening and mounting

- Wired alarms do not have a separate Mounting topic.
- Installing a wired mounting base is electrician-only work.
- Attaching an alarm to its existing base and removing it from that base belong under **Opening**.
- Opening appears under both Setup and Troubleshooting.
- Both routes open one identical shared Opening instruction page.

## Wireless mounting

- Wireless alarms have a separate **Mounting** topic.
- Technicians may install wireless mounting plates when needed.
- Setup Mounting covers installing the wireless mount.
- Troubleshooting Mounting covers checking that the mount is secured correctly to the ceiling and that the alarm attaches to it correctly.
- Include any light or other confirmation that the alarm switched on correctly where relevant.

## Troubleshooting purpose

Troubleshooting is a lookup, not a workflow.

- Do not force the technician through a fixed sequence, track progress, or require them to identify the alarm inside the app first.
- Provide direct reference topics for lights, sounds, pairing, mounting, common issues, relevant fixes, and faulty outcomes.
- Do not add a separate **Won't turn on** topic; include those checks inside other relevant troubleshooting pages.
- Do not add a separate **Finding the false alarm** topic; technicians use the other Troubleshooting references to identify it.
- The technician chooses whichever topic helps diagnose the reported problem.
- Do not describe Troubleshooting as “stopping a faulty alarm.”

## Turning alarms on and off

- Wireless Setup contains turning on and initial activation.
- Wireless Troubleshooting contains the brand-specific steps for turning a unit off and back on when power-cycling it.
- Setup and Troubleshooting use separate context-specific instructions.

## Wired troubleshooting

For a wired alarm that does not respond:

- **Removable backup battery**
  1. Remove the alarm from its base.
  2. Test the battery and replace it if required.
  3. With the battery removed, hold TEST to drain residual power.
  4. Reinsert the battery and attach the alarm to its base.
  5. Wait at least 2 minutes for another chirp.
  6. If the problem remains, end at **Report as faulty**.
- **Built-in lithium backup battery**
  - Do not attempt the removable-battery recovery.
  - End at **Report as faulty**.

Battery replacement belongs only inside relevant wired troubleshooting, not as a separate topic.

## Wireless troubleshooting

For a wireless alarm that is chirping or not behaving correctly:

1. Remove it from the mount.
2. Make sure it is off.
3. Press TEST to drain residual power.
4. Refit it to the mount; many models power on with the twist action.
5. Where the model provides one, confirm the correct power-on light.
6. Wait at least 2 minutes for another chirp.
7. If the chirp returns, end at **Report as faulty** because the sealed lithium battery is not replaceable.

## Chirp timing

- After troubleshooting either a wired or wireless alarm, wait at least 2 minutes to confirm that it does not chirp again.
- Cavius alarms normally chirp for about 2 minutes after testing. Wait for that normal chirping to finish, then wait an additional 2 minutes for any further chirp.

## Cleaning

- Cleaning appears under Troubleshooting only, not Setup.
- Wired and wireless alarms use the same cleaning method: vacuum or blow the external vents.
- A wired alarm remains attached to its base while cleaning.
- A wireless alarm may be removed from its mount when that is easier.
- Do not include an AC-mains-isolation step for this limited external cleaning procedure.

## Testing

- Testing appears under both Setup and Troubleshooting.
- Both routes open one identical shared Testing instruction page.
- Explain how to perform the test for the selected brand and unit.
- Confirm during the test that all interconnected alarms sound.
- Include any brand-specific sounds and waiting periods.
- Do not include routine test frequency.
- Do not add a final job-completion checklist; the existing work system handles it.

## Lights and sounds

- **What's that light or sound?** is a complete, manual-style list for the selected unit.
- The complete list appears only under Troubleshooting and is the first topic in that list.
- Setup pages still show the specific light or sound expected inside each relevant step.
- Show each light or sound and its meaning.
- Version 1 makes a meaning tappable when there is a useful troubleshooting destination.
- Use a clear action such as **View fix →**.
- Back returns to the same position in the light-and-sound list.
- Leave an entry as plain text when there is no useful troubleshooting destination.

## Faulty outcomes

- The app ends at **Report as faulty**.
- Wireless alarm or remote: replace the unit through the existing work system.
- Wired alarm: arrange replacement and an electrician through the existing work system.
- Do not add booking or replacement workflow to the app.
