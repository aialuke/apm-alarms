---
brand: legrand
unit: wireless
topic: signal
signals:
  - light: { lamp: red, label: 'Flashing red' }
    means: 'Only the alarm that started the event.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: blue, figure: 4 }
    sound: { tick: live, count: 3, figure: 2 }
    means: 'Interconnect started by another radio alarm.'
  - light: { lamp: red, figure: 300 }
    means: 'Normal standby.'
  - light: { lamp: red, figure: 1, unit: minute }
    sound: { tick: once, figure: 1, unit: minute }
    means: 'Low battery and end of life.'
    fix: low-battery
  - sound: { tick: once, figure: 1, unit: minute }
    means: 'Battery is flat.'
  - light: { lamp: red, count: 3 }
    means: 'The alarm is turned on. The alarm must also be on its mount.'
  - light: { lamp: red, count: 3, words: 'after a flash' }
    means: 'Single red flash followed by <span class="figure">3</span> red flashes. The battery is turned on. The alarm must also be on its mount.'
  - light: { lamp: red, count: 3, figure: 4 }
    sound: { tick: live, count: 3, figure: 4 }
    means: 'Test, until you let go. Test on the alarm you are testing.'
  - light: { lamp: blue, figure: 4 }
    sound: { tick: live, count: 3, figure: 2 }
    means: 'The blue light stays on for <span class="figure">3</span> minutes. Chirps until you let go. Another radio alarm in that test.'
  - light: { lamp: blue, label: 'Solid blue' }
    means: 'On the radio range test. The alarm you started with. That ends after <span class="figure">9</span> minutes.'
  - light: { lamp: blue, words: 'slow flash', label: 'Slow blue' }
    means: 'On the other radio alarms. That also ends after <span class="figure">9</span> minutes.'
  - light: { lamp: blue, words: 'flashes fast' }
    means: 'First blue light flashes fast, and the other blue lights turn off. The radio range test is closing. Closing can take up to <span class="figure">90</span> seconds.'
  - means: 'Hush on the alarm that started it. That alarm is less sensitive for <span class="figure">20</span> minutes.'
---

{% include signal-table.html %}

{% include low-battery.html %}
