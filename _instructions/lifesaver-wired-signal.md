---
brand: lifesaver
unit: wired
topic: signal
signals:
  - light: { lamp: red, figure: 1, unit: second }
    means: 'During an alarm.'
  - light: { lamp: red, words: 'rapid flash' }
    sound: { tick: static, words: 'alarm sounds' }
    means: 'This alarm started it.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - sound: { tick: static, count: 3, words: 'long' }
    means: 'The red light stays off. This interconnected alarm did not start the alarm.'
  - light: { lamp: green }
    means: 'Mains power is on.'
  - means: 'Green light is off. Mains power is lost.'
  - light: { lamp: red, count: 1, figure: 5, unit: minutes }
    means: 'About every <span class="figure">5</span> minutes, with no sound. Normal. The self test passed.'
  - light: { lamp: red, figure: 10 }
    means: 'No sound. Hush for up to <span class="figure">9</span> minutes. Dense smoke overrides hush and the alarm sounds the whole time.'
  - light: { lamp: red, count: 3, figure: 40 }
    means: 'After an alarm, this alarm started it.'
  - light: { lamp: red, figure: 5, unit: minutes }
    sound: { tick: once, figure: 40 }
    means: 'Low battery.'
    fix: low-battery
  - sound: { tick: once, figure: 40 }
    means: 'About every <span class="figure">40</span> seconds, with mains still on. The battery is missing.'
    fix: low-battery
  - light: { lamp: red, figure: 5, unit: minutes }
    means: 'No chirp. Low battery hush for up to <span class="figure">8</span> hours.'
  - light: { lamp: red, figure: 5, unit: minutes }
    sound: { tick: once, count: 3, figure: 40 }
    means: 'Chamber fault. Report faulty.'
  - sound: { tick: once, figure: 40 }
    means: 'On the backup battery test. Faulty battery module. Report faulty.'
---

{% include signal-table.html %}

{% include low-battery.html %}
