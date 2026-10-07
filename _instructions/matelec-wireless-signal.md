---
brand: matelec
unit: wireless
topic: signal
signals:
  - light: { lamp: red, figure: 40 }
    means: 'Normal running.'
  - light: { lamp: red, figure: 40 }
    sound: { tick: once, count: 1, figure: 40 }
    means: 'Low battery.'
    fix: low-battery
  - sound: { tick: once, count: 1, figure: 40 }
    means: 'Internal fault. Report faulty.'
  - light: { lamp: red, figure: 8 }
    means: 'Hush for about <span class="figure">10</span> minutes.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - sound: { tick: live, count: 2, words: 'then a 1 second pause' }
    means: 'A paired alarm that did not detect the smoke.'
  - light: { count: 2, figure: 20 }
    means: 'The alarm that was triggered. One timing is up to <span class="figure">168</span> hours. The other is <span class="figure">72</span> hours.'
  - light: { lamp: red, label: 'Red network' }
    means: 'Network light at the back. No network yet.'
  - light: { lamp: blue, label: 'Blue network' }
    means: 'Network light at the back. That alarm is sending a pair request.'
  - light: { lamp: green, words: 'for 3 seconds', label: 'Green network' }
    means: 'Network light at the back. The pair worked.'
  - light: { lamp: blue, words: 'stays on', label: 'Blue network' }
    means: 'Network light stays on until another pair request. After a good pair, on the alarm you started with.'
  - means: 'Blue light turns off. Pairing has ended.'
---

{% include signal-table.html %}

{% include low-battery.html %}
