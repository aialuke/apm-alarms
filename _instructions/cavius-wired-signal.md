---
brand: cavius
unit: wired
topic: signal
signals:
  - light: { figure: 48 }
    means: 'In normal use. Alarm is working.'
  - light: { lamp: green }
    means: 'Connected to mains power. It may take up to <span class="figure">1</span> minute to show that.'
  - means: 'Other interconnected alarms sound after a short delay. The alarm that sensed the smoke.'
  - means: 'Flashing light on the alarm that started it. That alarm can be hushed for <span class="figure">10</span> minutes.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - sound: { tick: once, figure: 48 }
    means: 'Low battery.'
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
