---
brand: clipsal
unit: wireless
topic: signal
signals:
  - light: { lamp: red, figure: 40 }
    means: 'No sound. Normal use.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: red, figure: 8 }
    means: 'For <span class="figure">10</span> minutes, no sound. Hush. The alarm is not sensitive to smoke during that time.'
  - light: { lamp: red, figure: 40 }
    sound: { tick: once, figure: 40 }
    means: 'Low battery.'
    fix: low-battery
  - light: { lamp: red, figure: 40 }
    means: 'For <span class="figure">10</span> hours, no sound. Hushed low battery.'
  - sound: { tick: once, figure: 40 }
    means: 'No light flash. Fault. Report faulty.'
  - sound: { tick: static, count: 2 }
    means: 'Alarm fault. Report faulty.'
  - sound: { tick: static, count: 1 }
    means: 'No red flash. The alarm should be cleaned.'
  - light: { lamp: red, label: 'Flashing red' }
    means: 'This alarm can be hushed.'
  - means: 'Flashing and sounding on more than one alarm. Each of those needs Test/Hush.'
  - means: 'The other alarms stop within <span class="figure">5</span> to <span class="figure">10</span> seconds. After the first alarm is hushed.'
---

{% include signal-table.html %}

{% include low-battery.html %}
