---
brand: matelec
unit: remote
topic: signal
signals:
  - light: { figure: 40 }
    means: 'Standby.'
  - light: { words: 'for 8 seconds' }
    sound: { tick: live, figure: 10 }
    means: 'Light flashes while the alarms start, and the smoke alarms sound for <span class="figure">10</span> seconds. After a test press.'
  - light: { words: 'for 5 minutes' }
    means: 'Light flashes. That test worked.'
  - light: { words: 'for 10 seconds' }
    means: 'Light flashes. Hush. The smoke alarms stay quiet for <span class="figure">10</span> minutes.'
  - sound: { tick: live, figure: 5, unit: minutes }
    means: 'Light flashes, and the smoke alarms sound. SOS for <span class="figure">5</span> minutes.'
  - means: 'Light does not flash when test is pressed. Report faulty.'
---

{% include signal-table.html %}
