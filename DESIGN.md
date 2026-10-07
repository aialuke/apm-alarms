---
name: APM Alarms
description: A dark iPhone cheat sheet for a smoke alarm technician on a job.
colors:
  night-black: "#000000"
  card: "#141418"
  card-deep: "#101014"
  paper-white: "#f5f7fb"
  paper-muted: "rgba(245, 247, 251, 0.74)"
  action-blue: "#0a63ff"
  action-blue-bright: "#2d7dff"
  rim-ice: "#d7e8ff"
  rim-bright: "#4d9bff"
  rim-pale: "#8ec0ff"
  rim-press: "#7eb6ff"
  reading-blue: "#9cc4ff"
  figure-gold: "#f2c14d"
  row-line: "rgba(245, 247, 251, 0.16)"
  lamp-green: "#32d74b"
  lamp-red: "#ff453a"
  lamp-amber: "#ff9f0a"
  lamp-blue: "#409cff"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  choice:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.01em"
  brand:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "normal"
  diagram:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  table-figure:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0"
  table-label:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
  table-meaning:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.4
  control:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "normal"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  note: "14px"
  table: "20px"
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
    backgroundColor: "{colors.action-blue}"
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
  signal-table:
    backgroundColor: "{colors.card}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.table}"
    padding: "16px 12px"
  bottom-bar:
    backgroundColor: "{colors.card}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.bar}"
    height: "56px"
  figure:
    textColor: "{colors.figure-gold}"
    typography: "{typography.body}"
  sketch-label:
    textColor: "{colors.figure-gold}"
    typography: "{typography.diagram}"
---

# Design System: APM Alarms

## Overview

**Creative North Star: "The night-job phone"**

A technician uses this on a job, often in a dim roof space or a bright hallway, with the phone in one hand. The screen stays dark so it never flashes white. It should feel like a modern iPhone app the technician already knows how to use.

The first screen is a field of large rounded brand buttons, three across. Unit, Setup or Troubleshooting, and Topics are tall rows on the black page, separated only by a grey line. An instruction page reads like Notes. Brand buttons, notes, the signal table, and the Back / Home bar have a dark face and a tight blue edge. The lists do not.

**Key Characteristics:**

- Near-black ground. Brand buttons, notes, the signal table, and the Back / Home bar have a tight blue edge. Lists do not.
- The iPhone system font, because that is the face on the technician's phone.
- A blue icon marks a unit, Setup, Troubleshooting, and a shortcut. Topic rows stay words only.
- Large hit targets. Brand buttons stay close to square. Rows stay tall.
- Back on the left and Home on the right, in the same bar, on every screen after Brands.
- Figure Gold marks the number you opened the page to get. The words around it stay white.

## Colors

The palette is a near-black field. White is for reading. A bright blue edge is what makes a control stand off the page. Figure Gold is the number you opened the page to get.

### Primary

- **Action Blue** (`#0a63ff`): The press fill of a brand button, and the deep stop in the tight blue edge.
- **Rim Ice** (`#d7e8ff`): The light start of that edge.
- **Rim Bright** (`#4d9bff`): The strong blue in the edge.
- **Rim Pale** (`#8ec0ff`): The far stop of the edge, after Action Blue.
- **Rim Press** (`#7eb6ff`): The pressed edge, between white and Action Blue.
- **Reading Blue** (`#9cc4ff`): Icons on list rows, shortcut labels, step numbers, and links inside an instruction.

The tight edge on a brand button, a note, and the Back / Home bar runs Rim Ice, Rim Bright, Action Blue, then Rim Pale. A press fills the face with Action Blue. The pressed edge runs from white through Rim Press into Action Blue.

### Secondary

- **Figure Gold** (`#f2c14d`): A clearance, a wait, a press count, or a confirmed flash interval. The figure only. The words around it stay Paper White.

**The Figure Rule.** Figure Gold is the number you opened the page to get. On Placement that is 300 mm and 400 mm, in the list and on the ceiling sketch. The same gold is a wait, such as 2 minutes or within 2 seconds, a press count, such as three times, and a confirmed flash interval written large. 300 mm and 400 mm stay the same gold. The digits tell them apart. Step numbers, icons, shortcuts, and links stay Reading Blue. A red light on an alarm stays described as red.

### Neutral

- **Night Black** (`#000000`): The ground of every screen, and the theme colour of the home-screen icon.
- **Card** (`#141418`): The top of the face on a brand button, a note, and the Back / Home bar.
- **Card Deep** (`#101014`): The bottom of that same face. The face falls from Card to Card Deep.
- **Paper White** (`#f5f7fb`): Titles, row labels, and instruction text.
- **Muted Paper** (`rgba(245, 247, 251, 0.74)`): The earlier steps of the route, and secondary labels.
- **Row Line** (`rgba(245, 247, 251, 0.16)`): The grey line between list rows.

The brand screen adds a soft blue light behind the title. Other screens stay flat black.

## Typography

**The Phone Face Rule.** Type is the iPhone system font: `-apple-system`, then San Francisco, then `system-ui`. A font file is not shipped. On the technician's iPhone this is San Francisco. The face already tracks itself, so the screen does not add tighter tracking on top.

- **Display** (34px, weight 700): The Brands title only.
- **Headline** (28px, weight 700, line-height 1.2): The current step of the route after Brands, including a topic name that wraps onto a second line. It is the only page name.
- **Choice** (22px, weight 650, line-height 1.25): Unit, Setup, Troubleshooting, topic, and shortcut rows.
- **Body** (19px, weight 400, line-height 1.5, tracking 0.01em): Instruction steps, notes, and the placement sentence. The open leading and a little extra tracking keep light text clear on the black page. The weight stays regular so a page of steps still reads like notes.
- **Brand** (19px, weight 650): The name on a brand button. The same size as the reading text, so a long name such as Detector Inspector still fits inside the button on an iPhone SE, and heavier so it reads as a label.
- **Diagram** (24px, weight 700): The measurement on a placement sketch, in Figure Gold, with even figures.
- **Table figure** (22px, weight 700, line-height 1): The real interval in a signal table's light or sound cell, in Figure Gold. It is a little smaller than the diagram size so "48 seconds" fits its column on a 375px iPhone.
- **Table label** (14px, weight 700, tracking 0.08em, capitals): Light and Sound over the signal table, in Reading Blue.
- **Table meaning** (17px, weight 400, line-height 1.4): What a signal means, centred under its row in Paper White. A figure inside it stays Figure Gold.
- **Control** (17px, weight 650): Back and Home. The placement clearances use this size at regular weight, so the points sit under the sentence.
- **Label** (15px, weight 500): The earlier steps of the route. The current step uses the headline.

**The One Name Rule.** After Brands, the current step of the route is the only page name. It uses the headline, and a long name wraps. The earlier steps stay the label size. That name is not written again under the route. On the unit screen the brand stays visible, small, and is not a link, because that screen is already that brand's units.

A step number uses the body size in Reading Blue at weight 700. An inline figure, such as 300 mm or 3 times, uses the body size in Figure Gold at weight 700. The gold figure stays inside the sentence, on the same baseline as the words around it. The blue step number is the only thing in the first column.

## Layout

The app is a phone column. On a wide window the column is 430px wide and centred. On a phone it is the full width.

The brand screen is a three-column grid with a 10px gap and 16px side inset. Two published brands leave the third cell empty. Long names such as Detector Inspector wrap inside the button.

After Brands, the route sits in the top bar. The earlier steps sit above the page name, and a clear gap sits between that name and the first row. Choices are full-width rows on the black page. A grey line separates one row from the next. There is no box around the list. Shortcuts sit a little below the topics.

Instruction text uses the width of the phone column. The page scrolls under the top bar and the bottom bar. The last line keeps clear of the bar.

## Elevation & Depth

**The Tight Edge Rule.** A control stands off the black page with a bright blue rim, a thin white highlight on the top edge, and a short blue shadow that stays against the shape. The shadow is about 2px down and 5px of blur. A press fills a brand button solid Action Blue. The signal table is one card with the same rim and shadow. Inside it, a lamp lights its own row with a soft wash of its colour. That wash is light inside the row, not a shadow, and it never leaves the card. Instruction paragraphs sit on the flat black. The brand screen keeps a quiet blue light in the top corner only.

Motion uses `cubic-bezier(0.16, 1, 0.3, 1)` over 180ms. Reduced motion turns transitions off.

## Shapes

Corners are generous on brand buttons (26px), the signal table (20px), the bottom bar (22px), and a note (14px). List rows are not boxed, so they have no corner of their own. Chevrons and row icons are drawn strokes, about 1.7px, with round caps. The Back chevron points left. Icons are blue.

## Components

### Brand button

A near-square button, three across, the brand name centred in white. No logo. The face falls from Card to Card Deep, with a tight blue edge. A press fills it Action Blue.

### Navigation bar

Sticky at the top, inside the safe area. Near-black, with a thin blue line along the bottom. Brands uses the display title and no route. Later screens use the route. The current step is the headline, and it is not repeated.

### List row

A full-width row on the black page, at least 76px tall. A grey line separates it from the next row. There is no blue outline around the list. Setup and Troubleshooting stay stacked. They are never a side-by-side pair.

A blue icon sits on the left of a unit row, Setup, and Troubleshooting. Wired alarm, Wireless alarm, Remote, and RF module each have their own mark. Topic rows have no icon. The chevron stays on the right.

### Shortcut row

The same kind of row, set in Reading Blue, with a blue swap icon. It sits below the topics with a gap. It switches list or unit. It is not another topic.

### Bottom bar

A dark bar, 56px tall, inset from the screen edges and the home indicator, with the same tight blue edge as a brand button. Back is the left half. Home is the right half. Both words stay written out. The bar is hidden on Brands.

### Instruction

Numbered steps in a two-column rhythm: the blue number, then the words. A gold figure and a link sit inside the words. A note, including a Tip, is a rounded inset in the reading flow. It is not a step, and it has no number. It has no thick coloured stripe.

### Home-screen icon
A smoke alarm seen from below, drawn on Night Black. A tight blue rim ring in the same blue gradient as the buttons, a dark Card face, one thin inner ring, a small centre test button, and one small pale lamp dot at the top right. There are no words, no gold, and no brand logos. It is square and full-bleed; the iPhone rounds the corners. It ships at 180px for the iPhone and 192px and 512px for the manifest.

### Signal table

What's that light or sound? is a table. Light and Sound are the header, centred over their cells. The meaning is the full-width line under those two cells, centred, in Paper White at 17px. The table is one rounded card with the same tight blue edge as a Tip. The faint lines, in Faint Ink, stop short of the card edge. The header is small spaced Reading Blue labels on the card, with no filled band, and it stays pinned under the top bar while the rows scroll. The pinned header is a solid Card panel. It has no blur and nothing shows through it, so rows slide cleanly underneath. Each lamp lights its own row with a soft wash of its colour, and the wash pulses with the blink. A count in the light cell is written 3x or 2x, in Figure Gold. The screen reader still hears 3 times or twice. The cell does not write every. The repeat is assumed.

A confirmed colour is a small round lamp at the start of the light cell. The lamp is green `#32d74b`, red `#ff453a`, amber `#ff9f0a`, or blue `#409cff`. The colour is not written again next to the lamp. It stays in the hidden label. A confirmed interval blinks that lamp one, two, or three times, then rests, on one shared clock of about two seconds. The lamp stays its own colour the whole time. The blink is a bright pulse, so a glance still sorts green from red from amber. The real interval is the gold figure in the light or sound cell, at the table figure size (22px, weight 700). A figure in the meaning line stays body size. A sound with a cue is three pale bars that brighten with the lamp. A two-second sound ticks on that real wait. A flash count with no confirmed timing is the count in Figure Gold (1x, 2x, 3x) beside a steady lamp and still bars. A sound cell may wrap its count and its wait onto two lines. When a colour is not stated, the light cell shows its count, wait, or words with no lamp, and the text lines up with the lamp rows. A side with no cue is a Paper White dash, centred in the cell. The screen reader still hears None. Flashing red after an alarm is a steady red lamp and the words after an alarm. It does not blink, and it does not show a timing. The turn-on light is not listed. Reduced motion leaves every lamp steady and every tick still.

### Placement sketch

Line work in Muted Paper, measurement labels in Figure Gold, on the black field.

### Placement list

The sentence stays at body size. The clearances under it are a disc list, indented, at 17px and regular weight. Each point keeps its Figure Gold measurement. The points sit closer together than two instruction paragraphs.

## Do's and Don'ts

### Do:

- **Do** keep the screen near-black, including the home-screen theme colour `#000000`.
- **Do** keep brand names as large rounded buttons, three across, with a tight blue edge.
- **Do** keep Back on the left and Home on the right, in the same places, after Brands.
- **Do** keep Unit, Setup or Troubleshooting, and Topics as rows on the black page, with only a grey line between them.
- **Do** keep a blue icon on unit rows, Setup, Troubleshooting, and shortcuts. Leave topic rows as words.
- **Do** keep the placement sentence and other instruction text at 19px so it can be read at arm's length. Set the clearances under that sentence as an indented disc list at 17px.
- **Do** use Reading Blue for a shortcut, a step number, an icon, and an instruction link.
- **Do** use Figure Gold for a clearance, a wait, a press count, or a confirmed flash interval. Color the figure only, at weight 700.
- **Do** show a lamp for a confirmed signal colour, and a short blink for a confirmed interval. Write that interval large in the light or sound cell.
- **Do** say the page name once. After Brands it is the current step of the route, at the headline size.

### Don't:

- **Don't** follow the iPhone light setting or add a theme switch.
- **Don't** turn the brand screen into a list, or put logos on the brand buttons.
- **Don't** show Back or Home on the brand screen.
- **Don't** replace Back and Home with a tab bar of extra sections.
- **Don't** put a thick coloured side stripe on a Tip or a note.
- **Don't** put a blue outline around a list of rows. The signal table is one card with the blue edge around the whole table, and faint lines between its rows.
- **Don't** write the colour again next to its lamp, and don't blink an interval that is not confirmed.
- **Don't** blur or see through the pinned table header. It is a solid Card panel.
- **Don't** let a blue edge bloom into a wide glow. On a brand button, a note, the signal table, and the Back / Home bar, it stays tight against the shape.
- **Don't** use Figure Gold on a button, an icon, a step number, a shortcut, a link, a Tip, or the words report faulty.
- **Don't** give 300 mm and 400 mm different colors.
- **Don't** put a gold figure or a link in the step-number column. They belong in the words.
- **Don't** write the page name again under the route.
