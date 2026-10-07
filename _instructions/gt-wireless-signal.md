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
  - light: { lamp: red, count: 3 }
    sound: { tick: static, count: 3 }
    means: 'Red light once with a short chirp first, then this, for <span class="figure">2</span> cycles. Single test.'
  - light: { lamp: red, label: 'Flashing red' }
    sound: { tick: static, words: 'the whole time' }
    means: 'The alarm you hold, on an interconnected test.'
  - sound: { tick: static }
    means: 'The lights flash red and green in turn. The other alarms, on an interconnected test.'
  - means: 'The other alarms leave the test after a few seconds. Interconnected test.'
  - light: { lamp: red, figure: 60 }
    sound: { tick: once, figure: 60 }
    means: 'Low battery until the battery is depleted.'
    fix: low-battery
  - sound: { tick: static, words: 'on and off' }
    means: 'Clean the outside vents.'
---

{% include signal-table.html %}

{% include low-battery.html %}
