---
brand: red
unit: wireless
topic: signal
signals:
  - light: { lamp: red, figure: 1, unit: minute }
    means: 'No smoke is present. The alarm is working.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: red, figure: 10 }
    means: 'Hush. Sensitivity is reduced. The quiet period is <span class="figure">10</span> minutes.'
  - sound: { tick: static, count: 2, words: 'at the end of hush' }
    means: 'Short chirps. The alarm returns to normal.'
  - sound: { tick: once, figure: 48 }
    means: 'Low battery.'
    fix: low-battery
---

{% include signal-table.html %}

{% include low-battery.html %}
