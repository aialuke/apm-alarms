---
brand: anka
unit: wireless
topic: signal
signals:
  - light: { lamp: green, figure: 60 }
    means: 'Alarm is working.'
  - light: { lamp: red, figure: 8 }
    sound: { tick: once, figure: 8 }
    means: 'Alarm is faulty. Report faulty.'
  - light: { lamp: red, figure: 50 }
    sound: { tick: once, figure: 50 }
    means: 'Low battery.'
    fix: low-battery
  - light: { lamp: red }
    means: 'Hush for <span class="figure">9</span> minutes.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
---

{% include signal-table.html %}

{% include low-battery.html %}
