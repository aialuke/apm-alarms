---
brand: detector-inspector
unit: wired
topic: signal
signals:
  - sound: { tick: static, words: 'as though smoke is present' }
    means: 'The alarm you test. Test press. The alarm is working.'
  - sound: { tick: static, words: 'a few moments after the alarm you test' }
    means: 'The other interconnected alarms.'
  - means: 'Silence for <span class="figure">10</span> minutes. Then the alarm goes back to normal use.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
---

{% include signal-table.html %}
