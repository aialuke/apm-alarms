---
brand: clipsal
unit: wired
topic: signal
signals:
  - light: { lamp: red, label: 'Blinking red' }
    means: 'Every operating mode.'
  - light: { figure: 48 }
    means: 'Standby light, no alarm sound. Normal use.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { figure: 8 }
    means: 'For <span class="figure">10</span> minutes. Standby light, no alarm sound. Hush. Smoke sensing is paused. On a standby hush, heat sensing stays active.'
  - light: { figure: 48 }
    sound: { tick: once, figure: 48 }
    means: 'Standby light, with <span class="figure">1</span> chirp. Low battery.'
    fix: low-battery
  - light: { count: 2, figure: 48 }
    sound: { tick: once, count: 2, figure: 48 }
    means: 'Standby light. Fault. Report faulty.'
  - light: { figure: 24 }
    means: 'For <span class="figure">10</span> hours. Standby light, no sound. Hushed low battery.'
  - light: { count: 2, figure: 24 }
    means: 'For <span class="figure">10</span> hours. Standby light, no sound. Hushed fault.'
  - light: { figure: 48 }
    means: 'For <span class="figure">10</span> hours. Standby light, no sound. Hushed alarm memory.'
  - light: { figure: 2 }
    means: 'For <span class="figure">72</span> hours. Standby light. After the alarm has stopped, on the alarm that started it. A short press of Test/Hush hushes that blink for <span class="figure">10</span> hours.'
---

{% include signal-table.html %}

{% include low-battery.html %}
