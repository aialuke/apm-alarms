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
   - Taking it off and putting it back on the mount
   - Pairing
   - Troubleshooting
3. **Setup at the site.** Tap one:
   - Wired only
   - Wireless only
   - Wired and wireless together

Notes:

- The job comes before the setup on purpose. Sites often have both wired and wireless alarms, and that changes the steps, for example pairing a wired alarm to a wireless one of the same brand.
- You don't pick a model number. Brand plus wired or wireless is enough.
- You identify the brand by reading or checking the alarm itself on site.
- These three setups cover every site (confirmed).

## What each instructions page shows

- Simple written steps with photos.
- Tips and gotchas that techs have learned from experience.
- Videos, where the manufacturer has them.

## Where the content comes from

- **Main source:** PDFs from the company, one for each brand or alarm. These get turned into simple steps.
- **Extra photos and videos:** taken from the manufacturers' websites or elsewhere online, where they exist.
- **Your own tips and photos:** added later.

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

- It opens straight to the brand list, with no sign-in or welcome screen.
- **Needs your call:** Should it reopen on the last page you were on, for example after you answer a text mid-job? The recommendation is yes, with an easy way back to the start.

### Brand screen

- Big buttons with the brand logo and a photo of a typical alarm, so you can match it by eye.
- Recently used brands go at the top.
- A search box only if the brand list gets long. The number of brands will be counted from the PDFs.

### Job screen

- Three large buttons.
- The brand you picked stays at the top, so you always know where you are.

### Setup screen

- Wired only, wireless only, or both, each with a small picture.
- This screen is skipped when the setup doesn't change the steps. For example, if taking an alarm off the mount is the same for wired and wireless, you won't be asked.

### Instructions page

- A line at the top shows what you picked, like "Kidde, Pairing, Both". Tap any part to change just that, without starting over.
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

- Should the app reopen where you left off? (see above)
- One step per screen, or all steps on one page? (see above)
- How should troubleshooting be organised? (asked next)
