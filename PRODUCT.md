# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary user is a smoke alarm technician in Queensland, Australia, on a job. One person first: the owner. It should be easy to share with other technicians later. Work phones are iPhones.

The job inside the app is to answer a question about the brand and the unit in the technician's hand. The alarms are interconnected. Pairing and testing matter. The app does not model the whole network of alarms.

On a job the technician needs two outcomes: every alarm works, and testing shows that every alarm is interconnected. Their existing work system records that the job is done. This app does not.

## Product Purpose

A personal quick-reference cheat sheet. It is not about the property, and it is not about the job.

It is a website saved to the iPhone home screen. It opens like an app, with no sign-in and no welcome screen.

Version 1 is complete only when all twelve brands have owner-approved content. The owner may add more brands later.

## Positioning

The technician looks at the alarm, picks that brand, then picks the unit in hand right now. There is no "both" choice and no way to pick a model or a series.

A fixed topic map decides which units and topics a brand may show. Owner approval of the words does not add a unit or a topic the map does not allow.

When the owner's confirmed field information disagrees with a manual, the owner's version is the one to use. Pairing does not differ by model. You cannot add one alarm to alarms that are already up. You pair all of them again.

## Operating Context

Used on a job, one-handed, from the iPhone home screen. The technician picks the brand by looking at the alarm.

The path is Brand, then Unit, then Setup or Troubleshooting, then Topic, then one scrolling instruction page.

Setup is for putting in a new alarm, remote, or RF module. Troubleshooting is for an alarm or remote that is already up. It is a lookup. The app does not force a path through every topic, track progress, or ask the technician to name the alarm before it will help.

The app has its own Back and Home. Saved to the home screen, the iPhone hides Safari's back button, and swiping back is not reliable. Back returns to the previous page and the scroll position the technician left. Home returns to the brand screen.

Leaving the app, including the phone locking or switching apps, starts a 15-minute timer. Coming back within 15 minutes restores the same page. Coming back after 15 minutes opens the brand screen. Moving between pages inside the app does not start the timer.

Installing a wired base is electrician work, so the app does not include it. When the fix is not the technician's to do, the page ends at "report faulty" and stops. The app does not say to replace the unit or book an electrician. That organising stays in the existing work system.

## Capabilities and Constraints

Version 1 brands: Anka, Brooks, Cavius, Clipsal, Detector Inspector, Emerald, GT, Legrand, Lifesaver, Matelec, Red, Siterwell.

Units: Wired alarm, Wireless alarm, RF module (only for a brand that uses a separate module), Remote (only for a brand that has one).

The app does not include site records, site types, job tracking, completion checklists, booking, a model or series picker, sources or manual links, or editing inside the app. It also leaves out factory reset, clearing all pairings, battery replacement as its own topic, remote battery replacement, a power-outage visit, videos, a theme switch, and diagnosing a faulty RF module.

On the first opening with a connection, show the approved content straight away and download every approved page and image in the background. Do not put a download or a setup screen in front of the first use. Once a complete copy is on the phone, keep using it while a later version downloads. Switch only after every required page and image has downloaded. Do not show a "Ready offline" status. If a page has not been saved yet and there is no connection, say that a connection is needed for that page.

An AI agent prepares additions and changes. A change appears only after the owner has approved it. Look up an official manual only when the owner explicitly asks. Do not invent alarm facts.

The full topic map, page rules, and word list are in `docs/product-brief.md`. That brief still stands.

Still open. Do not invent answers for these:

- Emerald wired pairing confirmation after an RF module is fitted
- The real interval for the flashing-red meaning
- Final wording of the topic-screen shortcuts (version 1 uses the labels in the brief)
- Any cross-brand pairing combination
- Brands beyond the twelve
- Editing inside the app, and only if many technicians later want to add their own tips regularly

## Brand Commitments

The name is APM Alarms.

Each word in the brief's word list means one thing. Do not use the names in its "Not" column for that thing. Examples the app must not substitute: Detector, Device, Hard-wired, LED, Installing.

The app is dark only. It does not follow the phone's light or dark setting. There is no theme switch. The brand screen has no logos.

The look is a dark iPhone screen. The type is the iPhone system font. The ground is near-black. Brand names are large rounded buttons, three across, big enough to hit with one hand. Each button has a dark face, a white name, and a tight blue edge. The top of each screen is a navigation bar. After Brands, Back and Home sit in a bar at the bottom, Back on the left and Home on the right, with the same tight blue edge. Unit, Setup or Troubleshooting, and topic choices are tall rows on the black page, with only a grey line between them. A blue icon marks each unit, Setup, Troubleshooting, and each shortcut. Topic rows have no icon. An instruction page reads like notes. A Tip is a rounded inset note with the same tight blue edge as a brand button. A clearance, a wait, a press count, or a confirmed flash interval is gold. The words around that number stay white.

## Evidence on Hand

`docs/product-brief.md` is the version 1 specification. The owner confirmed it still stands.

Wireless pairing is written for ten brands: Anka, Cavius, Clipsal, Detector Inspector, Emerald, GT, Legrand, Lifesaver, Red, and Siterwell. Brooks and Matelec wireless pairing are not written. Wired pairing is written for Cavius, Clipsal, Emerald, Legrand, Matelec, and Siterwell. Anka, Brooks, Detector Inspector, GT, Lifesaver, and Red wired pairing are not written. Remote pairing and RF module pairing are not written. The presses are in the brief. Emerald wireless pairing still uses only the confirmed field method. Emerald wired pairing uses the mains sheet, including the 5 second turn-on hold and the 90 second pairing mode. The Cavius chirp after a test is still a confirmed difference, and it belongs on Testing, which is not written yet.

Do not fabricate testimonials, customer quotes, manuals the owner did not ask for, distances, light intervals, or other brand differences.

## Product Principles

1. Answer the unit in the technician's hand. Leave the property and the job to the existing work system.
2. The topic map decides what can appear. Owner approval decides the words. Neither one invents the other.
3. The owner's confirmed field knowledge wins over a manual.
4. One topic is one scrolling page. Do not track progress or force a path through every topic.
5. When the fix is not the technician's, stop at report faulty. Do not tell them to replace the unit or book an electrician.

## Accessibility & Inclusion

Tap targets are sized for one-handed use on an iPhone SE (3rd generation). Text must be readable at arm's length. Leave clear space between buttons. Technicians do not wear gloves, so there are no glove-specific requirements. Use the iPhone's normal screen locking and its normal image viewing.
