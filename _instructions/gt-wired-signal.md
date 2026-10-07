---
brand: gt
unit: wired
topic: signal
signals:
  - light: { lamp: red, words: 'at power on', label: 'Red flash' }
    means: 'Once. The alarm has turned on.'
  - light: { lamp: green, words: 'stays on' }
    means: 'Standby.'
  - light: { lamp: red, words: 'keeps flashing', label: 'Flashing red' }
    sound: { tick: static, words: 'while it flashes' }
    means: 'The alarm that starts an interconnected alarm.'
  - light: { lamp: red, label: 'Flashing red' }
    sound: { tick: static }
    means: 'The other alarms, after several seconds.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: yellow, count: 2, figure: 1, unit: minute }
    means: 'Sensor fault. Report faulty.'
  - light: { lamp: yellow, figure: 1, unit: minute }
    means: 'Low backup battery.'
    fix: low-battery
  - light: { lamp: red, figure: 60 }
    sound: { tick: once, figure: 60 }
    means: 'Low battery until the battery is depleted.'
    fix: low-battery
  - light: { lamp: red, count: 3 }
    sound: { tick: static, count: 3 }
    means: 'Red light once with a short chirp first, then this, for <span class="figure">2</span> cycles. Single test.'
  - light: { lamp: red, label: 'Flashing red' }
    sound: { tick: static, words: 'the whole time' }
    means: 'The alarm you hold, on an interconnected test.'
  - sound: { tick: static }
    means: 'The lights flash red and yellow in turn. The other alarms, on an interconnected test.'
  - sound: { tick: static, words: 'on and off' }
    means: 'Clean the outside vents.'
---

{% include signal-table.html %}

{% include low-battery.html %}
