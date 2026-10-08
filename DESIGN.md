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
  step-number:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0"
  table-figure-compact:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0"
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
  between-groups: "24px"
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
    height: "64px"
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
  step-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.table}"
    padding: "13px 16px"
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

The first screen is a field of large rounded brand buttons, three across. Unit, Setup or Troubleshooting, and Topics are tall rows on the black page, separated only by a grey line. An instruction page is a stack of step cards under the route. Brand buttons, step cards, notes, the signal table, and the Back / Home bar have a dark face and a tight blue edge. The lists do not.

**Key Characteristics:**

- Near-black ground. Brand buttons, step cards, notes, the signal table, and the Back / Home bar have a tight blue edge. Lists do not.
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

The tight edge on a brand button, a note, and the Back / Home bar runs Rim Ice, Rim Bright, Action Blue, then Rim Pale. One short blue shadow anchors the edge. A press fills the face with Action Blue. The pressed edge runs from white through Rim Press into Action Blue.

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
- **Choice** (22px, weight 650, line-height 1.25): Unit, Setup, Troubleshooting, and topic rows. A shortcut row is a step smaller (19px, weight 600).
- **Body** (19px, weight 400, line-height 1.5, tracking 0.01em): Instruction steps, notes, and the placement sentence. The open leading and a little extra tracking keep light text clear on the black page. The weight stays regular so a card of steps still reads easily.
- **Brand** (19px, weight 650): The name on a brand button. The same size as the reading text, so a long name such as Detector Inspector still fits inside the button on an iPhone SE, and heavier so it reads as a label.
- **Diagram** (24px, weight 700): The measurement on a placement sketch, in Figure Gold, with even figures.
- **Table figure** (22px, weight 700, line-height 1): The real interval in a signal table's light or sound cell, in Figure Gold. It is a little smaller than the diagram size so "48 seconds" fits its column on a 375px iPhone.
- **Table label** (14px, weight 700, tracking 0.08em, capitals): Light and Sound over the signal table, and the heading of a step card, in Reading Blue.
- **Table meaning** (17px, weight 400, line-height 1.4): What a signal means, centred under its row in Paper White. A figure inside it stays Figure Gold.
- **Control** (17px, weight 650): Back and Home. The placement clearances use this size at regular weight, so the points sit under the sentence.
- **Label** (15px, weight 500): The earlier steps of the route. The current step uses the headline.

**The One Name Rule.** After Brands, the current step of the route is the only page name. It uses the headline, and a long name wraps. The earlier steps stay the label size. That name is not written again under the route. On the unit screen the brand stays visible, small, and is not a link, because that screen is already that brand's units.

A step number is 16px in Reading Blue at weight 700, inside a 28px round badge. An inline figure, such as 300 mm or 3 times, uses the body size in Figure Gold at weight 700, a touch larger inside a step card (1.08em). The gold figure stays inside the sentence, on the same baseline as the words around it. The blue step number is the only thing in the first column.

## Layout

The app is a phone column. On a wide window the column is 430px wide and centred. On a phone it is the full width.

Every screen shares one 16px side edge. The breadcrumb, the page title, list row words, row chevrons and cards all sit on it. A group of rows is set apart by a 24px gap, such as Lights & Sounds from the problem rows, and the shortcut rows from the topics.

The brand screen is a three-column grid with a 10px gap and 16px side inset. Two published brands leave the third cell empty. Long names such as Detector Inspector wrap inside the button.

After Brands, the route sits in the top bar. The earlier steps sit above the page name, and a clear gap sits between that name and the first row. Choices are full-width rows on the black page. A grey line separates one row from the next. There is no box around the list. Shortcuts sit a little below the topics.

Instruction text uses the width of the phone column. Step cards sit in the 16px side inset with 18px between cards, and fill the column width. The page scrolls under the top bar and the bottom bar. The last line keeps clear of the bar.

## Elevation & Depth

**The Tight Edge Rule.** A control stands off the black page with a bright blue rim, a thin white highlight on the top edge, and one short blue shadow that stays against the shape. A press fills a brand button solid Action Blue. The signal table is one card with the same rim and shadow. Inside it, a lamp lights its own row with a soft wash of its colour. That wash is light inside the row, not a shadow, and it never leaves the card. Steps sit in a card with the same rim and shadow, faint lines between rows, and the section name pinned under the top bar. A Tip inside a card is a tinted row across it, not a second card. The last "If ..." lines of a card are outcome rows (17px, 14px of space above and below, text centred on the row) with a blue icon and, when they link, a chevron. The Low battery card carries the table's amber lamp as a soft wash that stays inside the card. View fix scrolls directly to it. Instruction rows stay still as they enter view. The brand screen keeps a quiet blue light in the top corner only.

Motion is reserved for control feedback, the long-page title strip, and confirmed signal cues. Reduced motion turns transitions and signal animation off.

## Shapes

Corners are generous on brand buttons (26px), the signal table (20px), the bottom bar (22px), and a note (14px). List rows are not boxed, so they have no corner of their own. Chevrons and row icons are drawn strokes, about 1.7px, with round caps. The Back chevron points left. Icons are blue.

## Components

### Brand button

A near-square button, three across, the brand name centred in white. No logo. The face falls from Card to Card Deep, with a tight blue edge and one short blue shadow. A press fills it Action Blue.

### Navigation bar

Sticky at the top, inside the safe area. Near-black, with a thin blue line along the bottom. Brands uses the display title and no route. Later screens use the route. The current step is the headline, and it is not repeated.

On an instruction page the top bar does not stay. The route and page name scroll away with the page. Once they are out of view, a one-line strip takes their place under the status bar: the list name, a chevron, then the page name, cut short with an ellipsis if it is long. The strip is 44px tall, has the same thin blue line along the bottom, and slides in. It cannot be tapped. With reduced motion it appears without sliding. Other screens keep the top bar in place.

### List row

A full-width row on the black page, at least 76px tall. A grey line separates it from the next row. There is no blue outline around the list. Setup and Troubleshooting stay stacked. They are never a side-by-side pair.

A unit row carries one short line under its name in Muted Paper at 15px, saying what the unit is. A topic with no words written carries a small "Not written yet" in the same place. A blue icon sits on the left of a unit row, Setup, and Troubleshooting. Wired alarm, Wireless alarm, Remote, and RF module each have their own mark. A Remote or an RF module row opens its one page directly, with no Setup or Troubleshooting row after it. Topic rows have no icon. The chevron stays on the right. Lights & Sounds is a lookup, not a problem, so it sits first with a 24px gap below it and a grey line closing it, apart from the problem rows that follow. It has no icon and no colour of its own.

### Shortcut row

The same kind of row, a step smaller than a topic (at least 64px tall, 19px, weight 600, 24px icon), set in Reading Blue with a blue swap icon, so the topics read first. It sits below the topics with a gap. It switches list or unit. It is not another topic.

### Bottom bar

A dark bar, 56px tall, inset from the screen edges and the home indicator, with the same tight blue edge as a brand button. Back is the left half. Home is the right half. Both words stay written out. The bar is hidden on Brands. Above it, the page fades to black over about 40px, so rows slide under the bar through a fade and not a hard edge. The fade is not tappable.

### Instruction

Numbered steps sit in a step card, in a two-column rhythm: a blue number in a small round badge, then the words. A gold figure and a link sit inside the words. A link in a sentence keeps the size of its words. Its tap area reaches 44px tall, and the focus ring stays on the words. A Tip is a tinted row across the card. It is not a step, and it has no number. It has no thick coloured stripe. On a page with no step cards, such as the unwritten note, a Tip is a rounded inset with the tight blue edge.

### Step card

Steps sit in one rounded card (20px, the same tight blue edge as the signal table). A section heading starts a card, and a page with no heading is one card. The heading is a small spaced Reading Blue label with a drawn blue icon, a solid Card panel pinned under the top bar while its steps scroll, with a faint line under it. Steps are rows with faint lines that stop short of the card edge. The number is Reading Blue in a 28px round badge with a thin blue ring, and numbers restart in each card. A Tip is a tinted row across the card. The last "If ..." lines are outcome rows under a line: a blue icon, the words at 17px, and a chevron when the row links. The whole row opens its link. The Low battery card is the amber row of the table's fix, so its heading carries a soft amber wash and a small amber lamp dot. View fix scrolls directly to it. Instruction rows stay still as they enter view. Placement keeps its sketch and list inside a plain card with no heading. A Remote is one page of step cards, Activation, Pairing and Use with their own icons, and has no light and sound table. There is no Setup or Troubleshooting choice and no topic list before it. A section with no written words shows a card with the note "These words are not written yet."

### Home-screen icon
A smoke alarm seen from below, drawn on Night Black. A tight blue rim ring in the same blue gradient as the buttons, a dark Card face, one thin inner ring, a small centre test button, and one small pale lamp dot at the top right. There are no words, no gold, and no brand logos. It is square and full-bleed; the iPhone rounds the corners. It ships at 180px for the iPhone and 192px and 512px for the manifest.

### Signal table

Lights & Sounds is a table. Light and Sound are the header, centred over their cells. The meaning is the full-width line under those two cells, centred, in Paper White at 17px. The table is one rounded card with the same tight blue edge as a Tip. The faint lines, in Row Line, stop short of the card edge. The header is small spaced Reading Blue labels on the card, with no filled band, and it stays pinned under the top bar, or under the one-line strip on a long page, while the rows scroll. The pinned header is a solid Card panel. It has no blur and nothing shows through it, so rows slide cleanly underneath. Each lamp lights its own row with a soft wash of its colour, and the wash pulses with the blink. A count in the light cell is written 3x or 2x, in Figure Gold. The screen reader still hears 3 times or twice. The cell does not write every. The repeat is assumed.

A confirmed colour is a small round lamp at the start of the light cell. The lamp is green `#32d74b`, red `#ff453a`, amber `#ff9f0a`, or blue `#409cff`. The colour is not written again next to the lamp. It stays in the hidden label. A confirmed interval blinks that lamp one, two, or three times, then rests, on one shared clock of about two seconds. The lamp stays its own colour the whole time. The blink is a bright pulse, so a glance still sorts green from red from amber. The real interval is the gold figure in the light or sound cell, at the table figure size (22px, weight 700). A figure in the meaning line stays body size. A sound with a cue is three pale bars that brighten with the lamp. A two-second sound ticks on that real wait. A flash count with no confirmed timing is the count in Figure Gold (1x, 2x, 3x) beside a steady lamp and still bars. A sound cell keeps its count and its wait on one line. On a phone 400px wide or narrower, the unit words in both cells drop to 17px and the sound figure to 20px so 2x 48 seconds fits at 375px. When a colour is not stated, the light cell shows its count, wait, or words with no lamp, and the text lines up with the lamp rows. A side with no cue is a Paper White dash, centred in the cell. The screen reader still hears None. Flashing red after an alarm is a steady red lamp and the words after an alarm. It does not blink, and it does not show a timing. The turn-on light is not listed. Reduced motion leaves every lamp steady and every tick still.

### Placement sketch

Line work in Muted Paper, measurement labels in Figure Gold, on the black field. The RF module page is only a diagram on the black page, with no card and no words. It uses the same line work, the unit's own detail drawn fainter, and one Reading Blue arrow for the way the module goes in.

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
- **Do** put steps in a card with the tight blue edge, and keep the step number Reading Blue and the figure gold.
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
- **Don't** put a card inside a step card. A Tip in a card is a tinted row.
- **Don't** write the page name again under the route.
