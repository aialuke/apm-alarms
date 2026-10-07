---
brand: brooks
unit: wireless
topic: signal
signals:
  - means: '<span class="figure">1</span> yellow flash, <span class="figure">1</span> red flash, and <span class="figure">1</span> sound. Power up.'
  - means: 'No sound and no flash. Standby.'
  - light: { lamp: red, label: 'Flashing red' }
    means: 'Only on the alarm that is detecting the event.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: red, words: 'keeps flashing', label: 'Flashing red' }
    means: 'Keeps flashing while the alarm still senses smoke or heat. Hush. The silence lasts <span class="figure">10</span> minutes.'
  - light: { lamp: yellow, figure: 48 }
    sound: { tick: once, figure: 48 }
    means: 'Battery is partly depleted.'
    fix: low-battery
  - light: { lamp: yellow, count: 2, figure: 48 }
    sound: { tick: once, count: 2, figure: 48 }
    means: 'Sensor or sounder fault. Report faulty.'
  - light: { lamp: yellow, count: 3, figure: 48 }
    sound: { tick: once, count: 3, figure: 48 }
    means: 'Past its tenth year. Report faulty.'
  - light: { lamp: yellow, count: 4 }
    sound: { tick: static, count: 4 }
    means: 'When the button is pressed. Maximum dust compensation. Report faulty.'
  - light: { lamp: yellow, figure: 8 }
    means: 'Press the button if a fault is present, so the flashes can be counted.'
  - light: { lamp: yellow, words: 'keeps flashing', label: 'Flashing yellow' }
    means: 'Fault hush. The chirps return after <span class="figure">12</span> hours. The fault is still present.'
  - light: { lamp: red, count: 2, figure: 48 }
    means: 'For <span class="figure">24</span> hours after an alarm.'
---

{% include signal-table.html %}

{% include low-battery.html %}
