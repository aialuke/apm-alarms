---
name: APM Alarms
description: A dark iPhone cheat sheet for a smoke alarm technician on a job.
colors:
  night-black: "#000000"
  card: "#141418"
  paper-white: "#f5f7fb"
  paper-muted: "rgba(245, 247, 251, 0.74)"
  action-blue: "#0a63ff"
  action-blue-bright: "#2d7dff"
  reading-blue: "#9cc4ff"
  row-line: "rgba(245, 247, 251, 0.16)"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.022em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  note: "14px"
  bar: "22px"
  brand: "26px"
spacing:
  inset: "16px"
  after-title: "12px"
  between-groups: "22px"
components:
  brand-button:
    backgroundColor: "{colors.card}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.brand}"
    padding: "8px"
  brand-button-active:
    backgroundColor: "{colors.action-blue-bright}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.brand}"
    padding: "8px"
  choice-row:
    backgroundColor: "{colors.night-black}"
    textColor: "{colors.paper-white}"
    padding: "12px 20px"
    height: "76px"
  shortcut-row:
    backgroundColor: "{colors.night-black}"
    textColor: "{colors.reading-blue}"
    padding: "12px 20px"
    height: "76px"
  note:
    backgroundColor: "{colors.card}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.note}"
    padding: "14px 16px"
  bottom-bar:
    backgroundColor: "{colors.card}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.bar}"
    height: "56px"
---

# Design System: APM Alarms

## Overview

**Creative North Star: "The night-job phone"**

A technician uses this on a job, often in a dim roof space or a bright hallway, with the phone in one hand. The screen stays dark so it never flashes white. It should feel like a modern iPhone app the technician already knows how to use.

The first screen is a field of large rounded brand buttons, three across. Unit, Setup or Troubleshooting, and Topics are tall rows on the black page, separated only by a grey line. An instruction page reads like Notes. Brand buttons, notes, and the Back / Home bar have a dark face and a tight blue edge. The lists do not.

**Key Characteristics:**

- Near-black ground. Brand buttons, notes, and the Back / Home bar have a tight blue edge. Lists do not.
- The iPhone system font, because that is the face on the technician's phone.
- A blue icon marks a unit, Setup, Troubleshooting, and a shortcut. Topic rows stay words only.
- Large hit targets. Brand buttons stay close to square. Rows stay tall.
- Back on the left and Home on the right, in the same bar, on every screen after Brands.

## Colors

The palette is a near-black field. White is for reading. A bright blue edge is what makes a control stand off the page.

### Primary

- **Action Blue** (`#0a63ff`): The press fill of a brand button. The resting button uses a bright blue rim instead.
- **Reading Blue** (`#9cc4ff`): Icons on list rows, shortcut labels, step numbers, measurement callouts, and links inside an instruction.

### Neutral

- **Night Black** (`#000000`): The ground of every screen, and the theme colour of the home-screen icon.
- **Card** (`#141418`): The face of a brand button, a note, and the Back / Home bar.
- **Paper White** (`#f5f7fb`): Titles, row labels, and instruction text.
- **Muted Paper** (`rgba(245, 247, 251, 0.74)`): The route line and secondary labels.
- **Row Line** (`rgba(245, 247, 251, 0.16)`): The grey line between list rows.

The brand screen adds a soft blue light behind the title. Other screens stay flat black.

## Typography

**The Phone Face Rule.** Type is the iPhone system font: `-apple-system`, then San Francisco, then `system-ui`. A font file is not shipped. On the technician's iPhone this is San Francisco.

- **Display** (34px, weight 700): The Brands title only.
- **Headline** (28px, weight 700): The screen title after Brands, including the topic name.
- **Body** (19px, weight 400): Instruction steps, so they stay readable at arm's length.
- **Label** (15px, weight 500): The route line. The current step of the route is Paper White and heavier.

Row labels are 22px and weight 650. Bottom-bar words are 17px and weight 650.

## Layout

The app is a phone column. On a wide window the column is 430px wide and centred. On a phone it is the full width.

The brand screen is a three-column grid with a 10px gap and 16px side inset. Two published brands leave the third cell empty. Long names such as Detector Inspector wrap inside the button.

After Brands, the route sits in the top bar. Choices are full-width rows on the black page. A grey line separates one row from the next. There is no box around the list. Shortcuts sit a little below the topics. There is more space above a title than between the title and the first row.

Instruction text uses the width of the phone column. The page scrolls under the top bar and the bottom bar. The last line keeps clear of the bar.

## Elevation & Depth

**The Tight Edge Rule.** A control stands off the black page with a bright blue rim, a thin white highlight on the top edge, and a short blue shadow that stays against the shape. The shadow is about 2px down and 5px of blur. A press fills a brand button solid Action Blue. Instruction paragraphs sit on the flat black. The brand screen keeps a quiet blue light in the top corner only.

Motion uses `cubic-bezier(0.16, 1, 0.3, 1)` over 180ms. Reduced motion turns transitions off.

## Shapes

Corners are generous on brand buttons (26px), the bottom bar (22px), and a note (14px). List rows are not boxed, so they have no corner of their own. Chevrons and row icons are drawn strokes, about 1.7px, with round caps. The Back chevron points left. Icons are blue.

## Components

### Brand button

A near-square button, three across, the brand name centred in white. No logo. The face is dark, with a tight blue edge. A press fills it Action Blue.

### Navigation bar

Sticky at the top, inside the safe area. Near-black, with a thin blue line along the bottom. Brands uses the display title and no route. Later screens use the route plus the headline.

### List row

A full-width row on the black page, at least 76px tall. A grey line separates it from the next row. There is no blue outline around the list. Setup and Troubleshooting stay stacked. They are never a side-by-side pair.

A blue icon sits on the left of a unit row, Setup, and Troubleshooting. Wired alarm, Wireless alarm, Remote, and RF module each have their own mark. Topic rows have no icon. The chevron stays on the right.

### Shortcut row

The same kind of row, set in Reading Blue, with a blue swap icon. It sits below the topics with a gap. It switches list or unit. It is not another topic.

### Bottom bar

A dark bar, 56px tall, inset from the screen edges and the home indicator, with the same tight blue edge as a brand button. Back is the left half. Home is the right half. Both words stay written out. The bar is hidden on Brands.

### Instruction

Numbered steps in a two-column rhythm: the number, then the words. A note, including a Tip, is a rounded inset in the reading flow. It has no thick coloured stripe.

### Placement sketch

Line work in Muted Paper, measurement labels in Reading Blue, on the black field.

## Do's and Don'ts

### Do:

- **Do** keep the screen near-black, including the home-screen theme colour `#000000`.
- **Do** keep brand names as large rounded buttons, three across, with a tight blue edge.
- **Do** keep Back on the left and Home on the right, in the same places, after Brands.
- **Do** keep Unit, Setup or Troubleshooting, and Topics as rows on the black page, with only a grey line between them.
- **Do** keep a blue icon on unit rows, Setup, Troubleshooting, and shortcuts. Leave topic rows as words.
- **Do** keep instruction text at 19px so it can be read at arm's length.
- **Do** use Reading Blue for a shortcut, a step number, a measurement, an icon, and an instruction link.

### Don't:

- **Don't** follow the iPhone light setting or add a theme switch.
- **Don't** turn the brand screen into a list, or put logos on the brand buttons.
- **Don't** show Back or Home on the brand screen.
- **Don't** replace Back and Home with a tab bar of extra sections.
- **Don't** put a thick coloured side stripe on a Tip or a note.
- **Don't** put a blue outline around a list of rows.
- **Don't** let a blue edge bloom into a wide glow. On a brand button, a note, and the Back / Home bar, it stays tight against the shape.
