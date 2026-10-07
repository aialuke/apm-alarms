---
brand: cavius
unit: remote
topic: signal
signals:
  - means: 'Torch changes from a flash to a steady light. Press the black side button.'
  - means: 'Remote stops sounding and stops vibrating. One press of the red test and hush button in the first <span class="figure">30</span> seconds of an alarm.'
  - means: 'Light keeps flashing. After that press.'
  - means: 'Remote sends hush by itself within <span class="figure">30</span> seconds. After that press.'
  - means: 'Hush signal for <span class="figure">13</span> seconds. One press after <span class="figure">30</span> seconds of an alarm. The remote can stop the alarm that started it only after those <span class="figure">30</span> seconds.'
  - means: 'Flashing only on the alarm that first sensed the smoke.'
  - sound: { tick: once, figure: 48 }
    means: 'Low battery. Only the remote chirps. The smoke alarms do not chirp. Report faulty.'
  - means: 'Torch off after <span class="figure">5</span> minutes. Turns off by itself.'
---

{% include signal-table.html %}
