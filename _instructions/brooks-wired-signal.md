---
brand: brooks
unit: wired
topic: signal
signals:
  - light: { lamp: green }
    means: 'Mains power is on.'
  - light: { lamp: green, figure: 48 }
    means: 'On its backup battery because the mains is off.'
  - means: 'Green light off. Both the mains and the backup battery are off.'
  - light: { lamp: green }
    means: 'No sound and no flash, and the only light is the power light. Standby.'
  - light: { lamp: red, label: 'Flashing red' }
    means: 'Only on the alarm that is detecting the event.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: red, words: 'keeps flashing', label: 'Flashing red' }
    means: 'Keeps flashing while the alarm still senses smoke or heat. Hush. The silence lasts <span class="figure">10</span> minutes.'
  - light: { lamp: red, count: 2, figure: 48 }
    means: 'For <span class="figure">24</span> hours after an alarm. That spacing is approximate.'
  - light: { lamp: yellow, figure: 48 }
    sound: { tick: once, figure: 48 }
    means: 'Backup battery is depleted.'
    fix: low-battery
  - sound: { tick: static }
    means: 'Green light off at the same time as the battery chirp. Not receiving mains power. Report faulty.'
  - light: { lamp: green, figure: 48 }
    sound: { tick: static }
    means: 'At the same time as the battery chirp. Not receiving mains power. Report faulty.'
  - light: { lamp: yellow, count: 2, figure: 48 }
    sound: { tick: once, count: 2, figure: 48 }
    means: 'Sensor fault. Report faulty.'
  - light: { lamp: yellow, count: 3, figure: 48 }
    sound: { tick: once, count: 3, figure: 48 }
    means: 'Past its tenth year. Report faulty.'
  - light: { lamp: yellow, count: 4 }
    sound: { tick: static, count: 4 }
    means: 'When Test is pressed. This alarm has reached maximum dust compensation. Report faulty.'
  - light: { lamp: yellow, figure: 8 }
    means: 'Press Test if a fault is present, so the flashes can be counted.'
  - light: { lamp: yellow, words: 'keeps flashing', label: 'Flashing yellow' }
    means: 'Fault hush. The chirps stay off for <span class="figure">12</span> hours. The fault is still present.'
---

{% include signal-table.html %}

{% include low-battery.html %}
