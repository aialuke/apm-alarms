---
brand: emerald
unit: wired
topic: signal
signals:
  - light: { lamp: green }
    means: 'Connected to power.'
  - light: { lamp: red, figure: 8 }
    means: 'Silent mode.'
  - light: { lamp: red, figure: 48 }
    means: 'Alarm is active.'
  - light: { lamp: red, count: 3, figure: 48 }
    means: 'Triggered in the last <span class="figure">72</span> hours.'
  - light: { lamp: yellow, figure: 48 }
    sound: { tick: once, figure: 48 }
    means: 'Low battery.'
    fix: low-battery
  - light: { lamp: yellow, count: 2, figure: 48 }
    sound: { tick: once, figure: 48 }
    means: 'Fault.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - sound: { tick: live, figure: 2 }
    means: 'Wiring is wrong. Report faulty.'
---

{% include signal-table.html %}

{% include low-battery.html %}
