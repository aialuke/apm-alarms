# Product brief revision decisions

This is the temporary, current record of the owner's answers after the blind review. It contains decisions to carry into the next rewrite of `docs/product-brief.md`, not a history of rejected ideas.

When the questioning is complete:

1. Rewrite the product brief by replacing conflicting or outdated text rather than appending corrections.
2. Check the rewritten brief with the owner.
3. Remove this temporary file once every decision is represented clearly in the brief.

## Purpose and boundaries

- The app is a personal, quick-reference cheat sheet for a smoke alarm technician.
- It is about the selected brand and unit, not the property or job site.
- A **unit** choice is Wired alarm, Wireless alarm, RF module, or Remote. Show only the choices that exist for the selected brand.
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

- Version 1 is complete only when all twelve initial brands have owner-approved content. A brand, unit, or topic appears in the app only after its content is approved.
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

- Show **Brand → Unit → Setup or Troubleshooting → Topic** as context labels at the top. Brand opens that brand's unit choices, Unit opens its Setup or Troubleshooting choice, and Setup or Troubleshooting opens that section's topic list. Topic names the current instruction page.
- Size all tap areas for one-handed use on an iPhone SE (3rd generation).
- Technicians do not wear gloves, so there are no glove-specific design requirements.
- The fixed bottom navigation on individual instruction pages contains only **Back** and **Home**. Tappable context labels at the top and useful in-content links such as **View fix →** are still allowed.
- Back returns to the actual previous page and its previous scroll position, including the Setup or Troubleshooting list that opened a shared topic.
- Home returns to the brand grid.
- Instruction pages do not have same-topic buttons for other units.
- When a topic's instructions are genuinely identical under Setup and Troubleshooting, both routes open one shared instruction page.
- When the instructions differ by section, use separate Setup and Troubleshooting pages even when they have the same topic name.

On a Setup or Troubleshooting topic-list page, show no more than these two shortcuts when applicable:

- Switch section for the current unit.
- Switch between Wired and Wireless for the current brand while staying in the current Setup or Troubleshooting section.

Do not show generic Remote or RF-module switching shortcuts.

The final shortcut wording is not decided. Examples such as **Troubleshoot this alarm**, **Set up this alarm**, **View Wired alarm**, and **View Wireless alarm** must be reviewed during design rather than treated as final labels.

## Reopening the app

- Start a 15-minute timer when the app is no longer visible, including when the phone locks or the technician switches to another app. Moving between pages inside the app does not start the timer.
- Returning within 15 minutes reopens the same page and scroll position and stops the timer.
- Leaving again starts a fresh 15-minute timer.
- Returning after 15 minutes opens the brand grid.

## Phone behaviour and presentation

- Use normal iPhone screen locking. Do not keep the screen awake.
- The app is dark only. It does not follow the iPhone’s light or dark setting, and it does not add an in-app theme switch.
- Use the phone's normal image viewing initially. Custom full-screen and zoom controls are a possible later improvement.
- A step may be text-only when an image adds no value.
- A clear diagram from a manual may be used when no real photo is available.
- For a flashing light, show a short visual demonstration and write the real interval clearly in large text. Do not make the user wait through a 40- or 48-second animation.
- Important brand-specific practical notes belong in the relevant step and may use a highlighted **Tip** treatment. Review the exact visual format during design.

## Offline behaviour

- On the first opening with Wi-Fi or mobile data, show the approved live content immediately and download every approved page and image in the background. Do not wait for the technician to open each page individually or block first use behind a download or setup screen.
- If the first download is interrupted, resume it automatically the next time the app is online. If a requested page has not been saved and there is no connection, say that a connection is needed for that page and keep Back and Home available.
- Once a complete offline copy exists, keep using it while each later content version downloads in the background.
- Do not show a visible **Ready offline** status.
- Switch to a new content version only after every required page and image has downloaded. If an update is interrupted, incomplete, or missing a required file, keep using the previous complete version.

## Content and approval

- Sources, manual links, and source records stay out of the app.
- Nothing goes live until the owner approves it, including AI-prepared additions and changes.
- Version 1 uses text, photos, and diagrams. Videos may be considered later.
- Include only information useful to a technician. Leave out basic consumer advice and routine test frequency.

## Pairing and interconnection

- Pairing appears under both Setup and Troubleshooting.
- Setup Pairing covers connecting alarms and links to the shared Testing page to confirm the new setup.
- Troubleshooting Pairing begins with a link to the shared Testing page to test one alarm and confirm every interconnected alarm sounds. Back from Testing returns to Pairing. If all alarms do not sound, Pairing continues to the appropriate brand-specific re-pairing steps and then links to Testing again.
- Setup and Troubleshooting therefore use separate Pairing pages, while sharing common steps where appropriate.
- Pairing procedures differ by brand and by unit choice—Wired, Wireless, or Remote—but not by model for the alarms covered by the app. Do not add a model-selection screen.
- Emerald wireless pairing used in the field starts by pressing TEST three times quickly within 2 seconds.
- Emerald wireless instructions keep only the owner-confirmed behaviour. They do not name a Ranger model or include the earlier Ranger manual discussion.
- On a mixed Emerald system, every wired alarm gets an RF module if it needs to connect to wireless alarms. Most modules are already fitted.
- Pairing a wired alarm through its RF module belongs under the Wired alarm's Pairing topic, not under the RF-module choice.
- Some brands do not allow one replacement or added alarm to be paired by itself. For those brands, both Pairing pages explain putting one alarm into pairing mode and pairing every alarm again.
- Do not include clear-all-pairings instructions.
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
- Diagnosing, reporting, or replacing a faulty RF module is out of scope for now.

## Remote

- Keep **Remote** as a separate unit choice after selecting a brand.
- Show the choice only for brands that have a remote.
- Do not include physical remote-mounting instructions; mounting is too simple to warrant a topic.
- Remote Setup contains **Activation**, **Pairing**, and **Use**.
- Remote Troubleshooting starts with **What's that light or sound?**, followed by **Activation**, **Pairing**, **Use**, and **Locate** where the selected brand supports it.
- Activation covers getting a new or replacement remote ready to pair. It is one identical shared page under Setup and Troubleshooting.
- Pairing covers connecting the remote to alarms. Setup Pairing connects a new remote. Troubleshooting Pairing is a separate page: if the remote has lost its connection but still works, pair it again; if the remote itself is faulty, end at **Report as faulty**.
- Use covers the controls and how to use them. It is one identical shared page under Setup and Troubleshooting.
- Remote light and sound meanings live in **What's that light or sound?**, under the common Lights and sounds rules.
- Locate is a Remote Troubleshooting topic for compatible systems and explains how to identify the triggering alarm. It is the only exception to the rule against a separate false-alarm-finding topic.
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
- Include any owner-confirmed light or other signal that shows the alarm is attached and switched on correctly.

## Troubleshooting purpose

Troubleshooting is a lookup, not a workflow.

- Do not force the technician through a fixed sequence, track progress, or require them to identify the alarm inside the app first.
- Provide direct reference topics for lights, sounds, pairing, mounting, common issues, relevant fixes, and faulty outcomes.
- Do not add a separate **Won't turn on** topic; include those checks inside other relevant troubleshooting pages.
- Wired and Wireless alarms do not have a separate **Finding the false alarm** topic; technicians use the other Troubleshooting references to identify it. Remote **Locate** is the only exception.
- The technician chooses whichever topic helps diagnose the reported problem.
- Do not describe Troubleshooting as “stopping a faulty alarm.”

## Turning alarms on and off

- Wireless Setup has an **Activation** topic for turning on and initial activation. When attaching the alarm to its mount switches it on, Activation may direct the technician to the relevant Mounting instructions rather than repeating them.
- **Power Cycle** is a Troubleshooting topic for both Wired and Wireless.
- Wired and Wireless use separate brand-specific Power Cycle instructions.
- Setup activation and Troubleshooting Power Cycle are separate context-specific topics.

## Wired Power Cycle

For a wired alarm that is chirping or does not respond:

- **Removable backup battery**
  1. Remove the alarm from its base.
  2. Test the battery and replace it if required.
  3. With the battery removed, hold TEST to drain residual power.
  4. Reinsert the battery and attach the alarm to its base.
  5. Wait at least 2 minutes for another chirp.
  6. If the chirp returns or the original problem remains, end at **Report as faulty**.
- **Built-in lithium backup battery**
  - Do not attempt the removable-battery recovery.
  - End at **Report as faulty**.

Battery testing and replacement remain steps inside Wired Power Cycle, not separate topics.

## Wireless Power Cycle

For a wireless alarm that is chirping or not behaving correctly:

1. Remove it from the mount.
2. Make sure it is off.
3. Press TEST to drain residual power.
4. Refit it to the mount; many alarms power on with the twist action.
5. Where the alarm provides one, confirm the correct power-on light.
6. Wait at least 2 minutes for another chirp.
7. If the chirp returns or the original problem remains, end at **Report as faulty** because the sealed lithium battery is not replaceable.

## Chirp timing

- Any Troubleshooting instruction intended to resolve chirping ends with a wait of at least 2 minutes to confirm that the chirp does not return.
- Wired and Wireless Power Cycle already include this ordinary 2-minute wait.
- After an alarm test, Cavius alarms normally chirp for about 2 minutes. Wait for that normal chirping to finish, then wait an additional 2 minutes for any further chirp.
- The Cavius extra wait belongs to the shared Testing instructions and is triggered whenever that test is performed, including when Pairing links to Testing. It does not replace or extend the separate Power Cycle wait.

## Cleaning

- Cleaning appears under Troubleshooting only, not Setup.
- Wired and wireless alarms use the same cleaning method: vacuum or blow the external vents.
- A wired alarm remains attached to its base while cleaning.
- A wireless alarm may be removed from its mount when that is easier.
- Do not include an AC-mains-isolation step for this limited external cleaning procedure.

## Testing

- One identical shared Testing page appears under Setup to confirm a newly set-up unit and under Troubleshooting to test an existing unit.
- Explain how to perform the test for the selected brand and unit.
- Confirm during the test that all interconnected alarms sound.
- Include any brand-specific sounds and waiting periods.

## Lights and sounds

- **What's that light or sound?** is a complete, manual-style list for the selected unit.
- The complete list appears only under Troubleshooting and is the first topic in that list.
- Setup pages still show the specific light or sound expected inside each relevant step.
- Show each light or sound and its meaning.
- Version 1 makes a meaning tappable when there is a useful troubleshooting destination.
- Use a clear action such as **View fix →**.
- **View fix →** follows the Back rule in Navigation and returns to the same position in the light-and-sound list.
- Leave an entry as plain text when there is no useful troubleshooting destination.

## Faulty outcomes

- **Report as faulty** is the final step on the relevant Troubleshooting page, not a separate topic.
- Wireless alarm or remote: replace the unit through the existing work system.
- Wired alarm: arrange replacement and an electrician through the existing work system.
