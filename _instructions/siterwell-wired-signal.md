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
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: red, figure: 8 }
    means: 'Hush. That quiet period is about <span class="figure">8</span> minutes.'
  - light: { lamp: red, figure: 8 }
    means: 'Hush for <span class="figure">8</span> minutes after that test.'
  - light: { lamp: red, figure: 32 }
    means: 'Standby after that hush.'
  - light: { lamp: red, figure: 32 }
    sound: { tick: once, figure: 32 }
    means: 'Low battery.'
    fix: low-battery
  - light: { figure: 10 }
    means: 'Base battery is low.'
    fix: low-battery
  - sound: { tick: once, figure: 32 }
    means: 'With the alarm in fault. Fault. Clean the outside vents. If it keeps chirping, report faulty.'
---

{% include signal-table.html %}

{% include low-battery.html %}
