---
brand: emerald
unit: wireless
topic: signal
signals:
  - light: { lamp: red, figure: 48 }
    means: 'Standby. The alarm is working.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - light: { lamp: red, figure: 1, unit: second }
    sound: { tick: live, figure: 1, unit: second }
    means: 'Test, until you let go.'
  - light: { lamp: yellow, figure: 48 }
    sound: { tick: once, figure: 48 }
    means: 'Low battery. That warning lasts at least <span class="figure">30</span> days.'
    fix: low-battery
  - light: { lamp: yellow, count: 2, figure: 48 }
    sound: { tick: once, count: 2, figure: 48 }
    means: 'Fault. Report faulty.'
  - light: { lamp: red, figure: 8 }
    means: 'Hush for about <span class="figure">8</span> minutes.'
  - light: { lamp: red, figure: 48 }
    means: 'The chirp is paused for about <span class="figure">10</span> hours during a low battery or a fault. The chirp comes back after that.'
  - sound: { tick: live, count: 2, words: 'a second' }
    means: 'Another alarm started this one by radio.'
  - light: { lamp: red, count: 3, figure: 48 }
    means: 'This alarm was triggered within <span class="figure">72</span> hours.'
  - light: { lamp: red, words: 'each flash' }
    sound: { tick: static, words: 'each chirp' }
    means: 'One past alarm. Event memory holds up to <span class="figure">20</span> and clears after <span class="figure">14</span> days.'
  - means: 'No previous event.'
  - light: { lamp: red, count: 1 }
    sound: { tick: static, count: 1 }
    means: 'Previous low battery.'
  - light: { lamp: red, count: 2 }
    sound: { tick: static, count: 2 }
    means: 'Previous fault.'
  - light: { lamp: red, count: 3 }
    sound: { tick: static, count: 3 }
    means: 'An alarm was triggered.'
---

{% include signal-table.html %}

{% include low-battery.html %}
