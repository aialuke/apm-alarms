---
brand: lifesaver
unit: wireless
topic: signal
signals:
  - light: { lamp: red, figure: 0.5 }
    means: 'Alarm, only on the alarm that detected the smoke.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - means: 'No light and no sound. Standby.'
  - light: { figure: 10 }
    means: 'No sound. Hush for up to <span class="figure">10</span> minutes. Dense smoke overrides hush and the alarm sounds the whole time.'
  - means: 'No sound on every alarm except the one that started the event. Hush on an alarm that did not start it, for <span class="figure">2</span> minutes.'
  - light: { figure: 0.5 }
    sound: { tick: static, words: '2 sets of 3 long chirps' }
    means: 'Test. The first pattern is quieter. Holding longer than <span class="figure">5</span> seconds gives the full sound. The other alarms can take up to <span class="figure">20</span> seconds to start. If nothing sounds, report faulty.'
  - light: { figure: 30 }
    sound: { tick: once, figure: 60 }
    means: 'Low battery for at least <span class="figure">30</span> days. The button can silence that chirp for <span class="figure">24</span> hours, for up to <span class="figure">7</span> days.'
    fix: low-battery
  - light: { count: 2, figure: 30 }
    means: 'No chirp. Before the end of life.'
  - light: { count: 2, figure: 30 }
    sound: { tick: once, count: 2, figure: 30 }
    means: 'End of life. Report faulty.'
  - light: { figure: 10 }
    sound: { tick: once, figure: 30 }
    means: 'Alarm fault. Report faulty.'
  - light: { figure: 30 }
    sound: { tick: once, figure: 30 }
    means: 'Flash <span class="figure">1</span> second on and <span class="figure">1</span> second off for <span class="figure">15</span> minutes, then once every <span class="figure">30</span> seconds. Network fault. Report faulty.'
  - light: { count: 5, words: 'before test' }
    means: 'Quick flashes before the test pattern. Less than <span class="figure">15</span> months of life are left.'
  - means: 'No flashes on that check. The alarm is still good.'
  - light: { lamp: red, count: 7 }
    sound: { tick: once, figure: 30 }
    means: 'When the button is pressed. Test fault. Report faulty.'
  - light: { lamp: red, count: 8 }
    sound: { tick: once, figure: 30 }
    means: 'Memory fault. Report faulty.'
  - light: { lamp: red, count: 9 }
    sound: { tick: once, count: 2, figure: 30 }
    means: 'End of life. Report faulty.'
  - light: { lamp: red, count: 10 }
    sound: { tick: once, figure: 30 }
    means: 'Chamber fault. Report faulty.'
  - sound: { tick: live, words: 'constant tone' }
    means: 'No light. The alarm is not operating. Report faulty.'
  - light: { lamp: red, count: 3, figure: 40 }
    means: 'Until Test is pressed. After an alarm, this alarm started it.'
  - light: { lamp: red, figure: 1, unit: second }
    sound: { tick: static, count: 1 }
    means: 'The red light is <span class="figure">1</span> second on and <span class="figure">1</span> second off, after the chirp. Turning on.'

---

{% include signal-table.html %}

{% include low-battery.html %}
