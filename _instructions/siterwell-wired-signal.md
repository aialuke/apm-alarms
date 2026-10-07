---
brand: siterwell
unit: wired
topic: signal
signals:
  - light: { lamp: green, words: 'on' }
    means: 'The alarm is receiving mains power.'
  - means: 'Green light stays off when mains is on. The power connection needs a check. Report faulty.'
  - light: { lamp: red, figure: 32 }
    means: 'Standby. The alarm is working.'
  - light: { lamp: red, figure: 1, unit: second }
    sound: { tick: live, words: 'until you let go' }
    means: 'Test.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: red, figure: 8 }
    means: 'Hush. That quiet period is about <span class="figure">8</span> minutes.'
  - sound: { tick: live, count: 3, figure: 1.5 }
    means: 'Short chirps, then a pause, until you let go. Test after a battery change.'
  - light: { lamp: red, figure: 8 }
    means: 'Hush for <span class="figure">8</span> minutes after that test.'
  - light: { lamp: red, figure: 32 }
    means: 'Standby after that hush.'
  - light: { lamp: red, figure: 32 }
    sound: { tick: once, figure: 32 }
    means: 'At the same time as the red flash, for at least <span class="figure">30</span> days. Low battery.'
    fix: low-battery
  - light: { figure: 10 }
    means: 'Base light, for at least <span class="figure">30</span> days. The base battery is low.'
    fix: low-battery
  - sound: { tick: once, figure: 32 }
    means: 'With the alarm in fault. Fault. Clean the outside vents. If it keeps chirping, report faulty.'
---

{% include signal-table.html %}

{% include low-battery.html %}
