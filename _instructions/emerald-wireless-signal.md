---
brand: emerald
unit: wireless
topic: signal
signals:
  - light: { lamp: red, figure: 48 }
    means: 'Standby. The alarm is working.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: yellow, figure: 48 }
    sound: { tick: once, figure: 48 }
    means: 'Low battery.'
    fix: low-battery
  - light: { lamp: yellow, count: 2, figure: 48 }
    sound: { tick: once, count: 2, figure: 48 }
    means: 'Fault. Report faulty.'
  - light: { lamp: red, figure: 8 }
    means: 'Hush for about <span class="figure">8</span> minutes.'
  - light: { lamp: red, count: 3, figure: 48 }
    means: 'This alarm was triggered within <span class="figure">72</span> hours.'
---

{% include signal-table.html %}

{% include low-battery.html %}
