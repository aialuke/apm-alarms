---
brand: brooks
unit: remote
topic: signal
signals:
  - means: 'CO indicator. CO alarm.'
  - means: 'Low battery indicator. Remote battery has reached the end of its life. Report faulty.'
  - means: 'Fire, battery, and CO indicators flash. Power up.'
  - means: 'Each part lights red, then blue, then green. Power up.'
  - means: 'Every light goes off. Standby.'
  - light: { lamp: blue, words: 'test part' }
    means: 'Radio test has started.'
  - light: { lamp: blue, words: 'test part', label: 'Flashing blue' }
    means: 'Radio test has finished.'
  - light: { words: 'for 2 minutes' }
    means: 'Fire icon or the CO icon flashes rapidly. An alarm started and then returned to standby.'
  - light: { figure: 60, words: 'for 24 hours' }
    means: 'CO icon then flashes once. After a CO alarm.'
  - light: { lamp: green, words: 'memory part', label: 'Flashing green' }
    means: 'The fire indicator or the CO indicator also flashes. Alarm memory is set, in the diagnostic check.'
  - light: { lamp: blue, words: 'test part', label: 'Flashing blue' }
    means: 'During the <span class="figure">2</span> minute diagnostic test. Refresh signal is being sent.'
  - light: { lamp: green, words: 'all parts', label: 'Flashing green' }
    means: 'Diagnostic test is finished.'
---

{% include signal-table.html %}
