---
brand: detector-inspector
unit: wired
topic: signal
signals:
  - means: 'Silence for <span class="figure">10</span> minutes. Then the alarm goes back to normal use.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
---

{% include signal-table.html %}
