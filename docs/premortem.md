# Premortem: six weeks after APM Alarms

It is six weeks after the app was finished. The technician it was built for has stopped opening it. The other techs at work never started. This note is the story of how that happened, told from ordinary workdays.

It judges the product brief as written in `docs/product-brief.md`. The owner decisions in `docs/brief-revision-decisions.md` are already in that brief. This note does not reopen those wording choices, and it does not change the brief. The small changes below are recommendations only.

The person on the ladder is the user. A page can be correct and still fail, if ringing someone is faster. A page can sound right and still fail, if nobody has done those steps on a real unit.

## The assumptions

Each line below is one assumption the brief is built on. The stories further down stand or fall with these.

1. **Lookup beats asking.** Brand, then unit, then Setup or Troubleshooting, then topic, is quicker than remembering or ringing someone.
2. **One procedure per brand and unit.** Every wired Emerald works the same way, and the same for each other brand and unit. No model choice is needed.
3. **You will keep it true.** After the build, you will ask the agent when a page is wrong, approve the change, and that is enough.
4. **The phone is the tool.** A website on the home screen beats a laminated card, a folder of PDFs, and the group chat.
5. **Twelve brands is the job.** The app is done only when all twelve are approved, and that completeness is why you open it.
6. **Silence means ready.** Hiding any "saved on this phone" sign is better than showing one.

### Who holds what

The same few people and things carry the load on every story. That is the skew. It is not an accident of one bad page.

| Who | What they hold | What they do not hold |
|---|---|---|
| You | What is true in the field, every approval, every request for a change, and the only habit of opening the app | A free evening after a day on ladders |
| The other techs | The daily questions, and the corrections when a page is wrong | Any way to send a correction except texting you |
| The agent | The writing, and only when you sit down and ask | The unit in your hand |
| The unit in your hand | The real steps, the real button name, the real light | A required check before a page can be shown |
| The group chat | The fast answer, already, in one message | A place in the design. The app is built as if the chat is not the rival |
| The phone | A copy of the pages, which may be unfinished or old | Any sign you can read before you climb into a roof |

You hold approval and every update, on every story. The unit holds the truth, and the brief never says a page must be matched to a real unit before it can be shown. The chat holds the habit. Those three facts are why the top stories keep coming back to the same places.

Stories 1, 8, and 9 depend most on assumptions 1 and 4. Stories 2, 3, and 4 depend most on assumptions 2 and 5. Stories 6 and 7 depend most on assumption 3. Story 5 depends on assumption 6. Story 10 depends on assumption 4 as well: a phone that locks and makes you scroll is a worse object than a card or a screenshot.

If assumption 1 or 4 is wrong, more screens will not save the app.

## The stories

### 1. The call is faster

You are on a ladder in a rental, one hand on an Emerald wireless alarm, the other on the phone. It will not join the others in the house. You half remember that it is something about the test button.

Opening the app means the brand grid, then Wireless, then Troubleshooting, then Pairing, then scrolling to the step you need. By the time you are there you have already rung another tech, or you have tried the three presses you half remember. The tenant is in the hallway. The app is for the days you do not remember. Six weeks later you only think of it for brands you rarely see, and those are the thin pages.

The brief's path is brand, unit, Setup or Troubleshooting, topic, then the steps. That is four choices before the words. On a ladder, one-handed, that is the whole product.

- **How likely:** High. This happens even when the page is right.
- **How bad:** It kills the habit. The safety risk is low on this story alone. The app dies because it lost a race it did not know it was in.
- **Earliest warning, weeks 1 to 2:** You still ring someone for a brand that already has a page.
- **Smallest change to the brief:** From seeing the brand on the alarm to the first useful step is two taps or fewer, for Pairing and for What's that light or sound? If a path cannot beat a phone call, cut the path. Do not add another screen.

This story depends most on assumptions 1 and 4.

### 2. The button on the alarm is not the button on the page

The Emerald page says press TEST three times, quickly. The unit in your hand says TEST/HUSH, or it is a different Emerald that does not pair that way. You follow the page. The alarms go off, or pairing fails and you have to start again with the tenant watching.

Next job you do not open the app. At smoko you tell the others it got Emerald wrong. They never start.

The brief already says a step must use the name printed on the unit, and that your confirmed field notes win over a manual. Approval is still "you said the words are all right," not "you just did this on a real unit." The confirmation after pairing a wired Emerald through an RF module is still unknown, and the brief leaves it for later. A page can ship with a hole, or with a guess filling that hole.

The early layout try in `mockups/steps-layout.html` shows the trap. Its Emerald pairing steps say Test/Hush, they were taken from manuals, and the page says they are not yet checked on a real unit. The brief says to follow the brief where the mockup disagrees. The habit of approving words you have not done is the failure, whether or not that mockup is what got built.

- **How likely:** Medium-high. One unchecked page is enough.
- **How bad:** Very high. A wrong step on a live alarm, and trust dies for every brand, including the ones that were right.
- **Earliest warning, weeks 1 to 2:** The first time you compare a page to a unit in the van, a button name or a light does not match.
- **Smallest change to the brief:** A page cannot be approved until you have done that procedure on a real unit, and the words match what you just did. An unknown step stays unknown. It does not get a guess. The wired Emerald confirmation stays unwritten until you have seen it.

This story depends most on assumption 2. Assumption 5 makes it more likely, because twelve brands is a lot of evenings.

### 3. The rare brand is the one you needed, and it is a guess

A job has a GT, or an Anka, a brand you see a few times a year. That is why you wanted it in the app. The page exists because version 1 is not done until all twelve brands have approved content. The steps were approved from a thin recollection, not from a unit in your hand. The page is a few generic steps and then Report as faulty.

You follow it. It does not match. You ring someone anyway. The page you most needed is the one that was wrong, and that is the one you remember.

- **How likely:** High, if the finish line is twelve approvals and some brands have thin notes.
- **How bad:** High. You cannot check a rare brand from memory, so a wrong rare-brand page is the one that burns trust.
- **Earliest warning, weeks 1 to 2:** You hesitate before approving a brand, or an approved page is only a few generic steps ending in Report as faulty.
- **Smallest change to the brief:** Version 1 is done when the brands you actually freeze on are checked on real units. A brand with no checked procedure does not appear. Drop the rule that all twelve must be approved before version 1 is complete.

This story depends most on assumptions 2 and 5.

### 4. The PDF was a photo, and a step came out backwards

You ask for Brooks from the manual. The manual is a scanned PDF, pages that are pictures. The agent writes which way the RF module goes, from a diagram. In the evening you approve the words. There is no module in your hand. On the job the module does not sit the way the page says. You force it, or you give up and ring someone.

The brief says an official manual is looked up only when you ask, and that your field notes win when they disagree with a manual. It does not say a diagram has to be matched to a real unit. The agent's reading of a scan is not the same thing as something you have confirmed in the field.

- **How likely:** Medium. It needs a scanned manual and an approval done away from the unit.
- **How bad:** High on that job. A module the wrong way round, or a flash timing that sends you to the wrong fix.
- **Earliest warning, weeks 1 to 2:** An approved page describes a shape, a direction, or a timing you have not held in your hand.
- **Smallest change to the brief:** A diagram is not approved until you have matched it to a real unit, or to a photo you took of one. The agent's reading of a scanned manual is not field information.

This story depends most on assumption 2.

### 5. The roof has no signal, and the phone never said it was not ready

Monday morning you open the app on the Wi-Fi at home. It shows the brands straight away and saves the pages in the background. The brief says not to put a download screen in the way, and not to show a "Ready offline" sign. You leave for the first job before the save finishes. You have no way to tell.

In a roof there is no signal. You tap the brand, the wireless alarm, Troubleshooting, and What's that light or sound? The phone says a connection is needed for that page. You are already up there. You never trust it in a roof again, which is where you needed it.

- **How likely:** Medium-high. A background save, no status, and patchy signal on site is what the brief describes.
- **How bad:** High on that job. After it happens once, you stop opening the app in the places with no signal.
- **Earliest warning, weeks 1 to 2:** Turn the phone onto airplane mode after a short open. A page you can see on the brand screen is still missing.
- **Smallest change to the brief:** Remove the ban on a ready sign. The brand screen says whether this phone has every approved page, or it names what is missing. A page that is not on the phone must not look openable when there is no connection. Keep the rule that an interrupted update does not replace a complete copy.

This story depends most on assumption 6.

### 6. You fixed it, and the phone still shows the old steps

In week 3 you get the Emerald pairing page corrected and you approve it. The brief says the phone keeps the old complete copy until every page and image of the new copy has downloaded. Between jobs, on mobile data, that download never finishes. Nothing on the page says you are still reading last month's steps.

You follow the old presses. They are the ones you thought you had fixed. It feels worse than never having asked, because you did ask, and the phone shrugged.

- **How likely:** Medium. The brief chooses the old copy on purpose when an update is incomplete, and it shows no date.
- **How bad:** High. The correction feels like it did not stick, so you stop sending corrections.
- **Earliest warning, weeks 1 to 2:** The morning after you approve a change, the phone on mobile data still shows the old wording.
- **Smallest change to the brief:** Keep the old copy until the new one is complete. On the page, one line says you are still on the previous copy, and it gives the date of the copy you are reading.

This story depends most on assumption 3. A hidden old copy makes the update path look like it failed.

### 7. You mean to tell the agent tonight

On a Cavius job you notice the testing page is missing the wait you know: it chirps for about two minutes after a test, then you wait another two minutes. You text yourself "fix Cavius." Changing the app means opening a session, explaining the wait, reading the new words, and approving them. After the run of jobs you mean to do it tonight. You do not.

Six weeks later the page is still wrong. That is why you stopped opening it. The other techs had no way to send the correction except texting you, and you did not pass it on.

The brief says content changes only now and then, so there is no editing in the app, and an agent prepares changes when asked. "When asked" is the whole maintenance plan. It assumes you will ask.

- **How likely:** High.
- **How bad:** High. It freezes the first error in place. Story 2 stays wrong forever.
- **Earliest warning, weeks 1 to 2:** A correction you noticed on the job is still not approved a few days later.
- **Smallest change to the brief:** The update path is one message you can send from the van: a sentence or a photo of the unit. The agent prepares the change. Yes or no comes later, when you have a minute. A sit-down work session is not the path.

This story depends most on assumption 3.

### 8. The other techs stay in the group chat

You send the link. One tech opens it in the browser, does not put it on the home screen, and the first page they need is not saved on the phone yet. They go back to the chat. The next Cavius question is a photo in the group: "what's this light?" Someone who did one yesterday answers in one line.

Nobody installs it. "Easy to share later" never had a step that matches how techs already pass things around, which is a photo in the chat. The app has no sign-in, which makes a link easy to send, and that is not the same as another person using it on a job.

- **How likely:** High.
- **How bad:** Fatal for the hope that the others will use it. For you alone, it is a miss, not a safety problem.
- **Earliest warning, weeks 1 to 2:** The first question after you share the link still arrives in the chat.
- **Smallest change to the brief:** Take "easy to share with other technicians later" out of version 1. Or the thing you can send is a picture of the step, because that is what already travels in the chat. A website link is not sharing.

This story depends most on assumptions 1 and 4. The chat wins the race the app was supposed to run.

### 9. A card in the glovebox would have done it

The things you actually forget are a short list. Emerald wireless starts by pressing TEST three times, quickly, within two seconds. After a Cavius test, wait out the chirping, then wait another two minutes. Some brands make you pair the whole house again, not one new alarm on its own. Placement: 300 mm from a corner or a light, 400 mm from an air vent or a fan blade.

That list fits on a laminated card in the glovebox. The card works in the sun, one-handed, with a flat battery and no signal. The app needed twelve brands, photos, and four taps to hold the same few facts. Six weeks later the icon is dead, and the card is what you wish you had made.

- **How likely:** Medium-high, if stories 1 and 3 are true.
- **How bad:** High. It means the app was the wrong object. Adding features keeps the wrong object.
- **Earliest warning, weeks 1 to 2:** For a brand you see every week, you can say the answer out loud before the page is in front of you.
- **Smallest change to the brief:** Write that short list down first. If it fits on a card, those facts stay that short, and they are not buried under topics. The app only holds what a card cannot hold: a long list of lights and sounds, or a photo of an odd unit.

This story depends most on assumptions 1, 4, and 5. It is the premise under stories 1 and 3. If you would rather have the card, more app will not help.

### 10. The phone locks, and the words are under the photo

The job is on the small iPhone, one hand on the ladder. The pairing steps are cards. In the early layout try, a large photo sits above the words of every step. The brief says a photo is added only when it helps, and it also says the phone may lock as usual. Do not keep the screen awake.

The step you need is below the photo. You cannot scroll and hold the alarm. The screen locks. Waking it with a dusty hand is fiddly. If you were gone under fifteen minutes, the brief puts you back at the same scroll. You still screenshot the step so you can glance at it. Next time, for that brand, you open the screenshot, not the app.

- **How likely:** Medium-high.
- **How bad:** Medium. Annoying enough that the screenshot becomes the tool, and the app becomes the thing you copy from once.
- **Earliest warning, weeks 1 to 2:** You screenshot a page.
- **Smallest change to the brief:** The action is the first thing on the instruction page. A photo opens from the step. It does not sit above the words. On an instruction page, the screen stays awake until you leave that page. The rest of the app can keep the normal lock.

This story depends most on assumption 4. A phone you have to fight is a worse cheat sheet than a card.

## Ranking

Ranked by how well they explain both halves of the headline: you stopped opening it, and the others never started. Not by how easy they are to patch.

| Rank | Story | Why it is here |
|---|---|---|
| 1 | 1. The call is faster | The habit dies even when every page is right. |
| 2 | 2. The button on the alarm is not the button on the page | One wrong step, and you tell the others not to trust it. |
| 3 | 7. You mean to tell the agent tonight | The wrong step stays, because the fix never gets asked for. |
| 4 | 5. The roof has no signal, and the phone never said it was not ready | The place you needed it is the place it fails, with no warning before you climb. |
| 5 | 8. The other techs stay in the group chat | This is why they never started. |
| 6 | 9. A card in the glovebox would have done it | The premise under 1 and 3. If the card would do, stop adding app. |
| 7 | 3. The rare brand is a guess | The pages you cannot remember are the ones that burn trust. |
| 8 | 6. The phone still shows the old steps | A fix you did ask for looks like it never happened. |
| 9 | 4. The PDF was a photo | One diagram, unchecked, on a real module. |
| 10 | 10. The phone locks, and the words are under the photo | You replace the app with your own screenshot. |

### The top five

1. **The call is faster.** Four taps and a scroll lose to ringing someone. You stop opening it because it is slower than what you already do.
2. **One wrong step and trust is gone.** The button on the page is not the button on the alarm. You follow it once. You do not follow it again, and you tell the others.
3. **The fix never gets asked for.** You notice the mistake on the job and mean to tell the agent tonight. You do not. The wrong page is still there at week six.
4. **The roof, with no sign the phone was not ready.** The pages were still saving in the background. The app is not allowed to say so. The one time you need it with no signal, it asks for a connection.
5. **The others never leave the chat.** A link is not how they pass a tip. A photo and one line in the group is. They never put it on the home screen.

Story 9 sits under the first and the third. If the facts you forget fit on a card, the top five are symptoms, and the app is the wrong tool for that list.

## What not to do next

Do not add a screen, a shortcut, or a status that still assumes the six lines at the top are true. Two of those lines do most of the damage: that the taps are faster than asking, and that the phone beats a card and the chat. If either of those is wrong, the next fix will fail the same way.

The checks that would have shown this in weeks 1 to 2 are small:

- You still ring someone for a brand that already has a page.
- A button name on a page does not match a unit in the van.
- A correction from a job is still unapproved a few days later.
- Airplane mode after a short open hides a page you can see.
- The first question after you share the link still arrives in the chat.
- You can say the answer out loud before the page is in front of you.
- You screenshot a page.
