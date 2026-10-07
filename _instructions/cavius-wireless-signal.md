---
brand: cavius
unit: wireless
topic: signal
signals:
  - light: { figure: 48 }
    means: 'In normal use. Alarm is working.'
  - means: 'Only the alarm that started it flashes. That alarm can be picked out.'
  - means: 'Other interconnected alarms sound after a short delay. The alarm that started it.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - means: 'Press on that alarm. Alarms pause for <span class="figure">10</span> minutes.'
  - light: { figure: 48 }
    sound: { tick: once, figure: 48 }
    means: 'Battery is near the end of its life. This continues for at least <span class="figure">30</span> days.'
    fix: low-battery
  - sound: { tick: once, figure: 8 }
    means: 'After a test. Alarms are connected and working.'
  - light: { figure: 8, words: 'for 2 minutes' }
    means: 'After a test. Alarms are connected and working.'
  - sound: { tick: once, count: 3, figure: 8 }
    means: 'Smoke sensor fault. Report faulty.'

---

{% include signal-table.html %}

{% include low-battery.html %}
