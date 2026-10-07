---
brand: red
unit: wired
topic: signal
signals:
  - light: { lamp: red, figure: 48 }
    means: 'Green light stays off. Standing by on the backup battery only. Still needs live mains.'
  - light: { lamp: red, figure: 48 }
    means: 'Green light stays on. Mains is on. The alarm and the backup battery are standing by.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: red, count: 1, figure: 48 }
    sound: { tick: once, count: 1, figure: 48 }
    means: 'Low battery. Short chirp in time with the flash.'
    fix: low-battery
  - light: { lamp: red, figure: 4 }
    means: 'For <span class="figure">72</span> hours. That alarm has been activated. It then returns to standby on its own.'
  - light: { lamp: red, count: 2, figure: 48 }
    sound: { tick: once, count: 2, figure: 48 }
    means: 'Fault. Report faulty.'
  - light: { lamp: red, count: 3, figure: 1, unit: second }
    means: 'Wiring is wrong. Report faulty.'
  - light: { lamp: red, words: 'for 2.5 minutes' }
    means: 'Solid red light on the front. Pairing.'
  - light: { lamp: red, count: 5, words: 'joining alarm' }
    means: 'The radio link succeeded.'
  - means: 'Low battery chirp or fault chirp stops for <span class="figure">10</span> hours after Test/Hush is held for <span class="figure">1</span> second. The light keeps working during that time.'
  - light: { lamp: red, words: 'quickly' }
    sound: { tick: live, words: 'with the flashes' }
    means: 'Smoke is sensed during the quiet time after Test/Hush.'
---

{% include signal-table.html %}

{% include low-battery.html %}
