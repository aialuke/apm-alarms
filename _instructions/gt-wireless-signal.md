---
brand: gt
unit: wireless
topic: signal
signals:
  - light: { lamp: green, figure: 1, unit: minute }
    means: 'Standby.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: red, count: 2, figure: 1, unit: minute }
    means: 'Fault. Report faulty.'
  - sound: { tick: static, words: 'again after 9 minutes' }
    means: 'Smoke is still present.'
  - light: { lamp: red, figure: 60 }
    sound: { tick: once, figure: 60 }
    means: 'Low battery until the battery is depleted.'
    fix: low-battery
  - sound: { tick: static, words: 'on and off' }
    means: 'Clean the outside vents.'
---

{% include signal-table.html %}

{% include low-battery.html %}
