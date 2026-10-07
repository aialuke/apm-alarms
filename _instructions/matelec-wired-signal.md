---
brand: matelec
unit: wired
topic: signal
signals:
  - light: { lamp: green }
    means: 'Mains power is on.'
  - light: { lamp: red, figure: 48 }
    means: 'Standby. The alarm is working.'
  - light: { lamp: red, figure: 1, unit: second }
    sound: { tick: live, words: 'loud alarm' }
    means: 'Until the smoke clears. This alarm detected smoke.'
  - light: { lamp: red, words: 'after an alarm', label: 'Flashing red' }
    means: 'This alarm set the others off.'
  - sound: { tick: live, words: 'alarm sounding' }
    means: 'The red light does not flash. This interconnected alarm did not detect the smoke.'
  - light: { lamp: red, figure: 1, unit: second }
    means: 'For <span class="figure">3</span> minutes. That interconnected alarm has stopped.'
  - light: { lamp: red, count: 2, figure: 24 }
    means: 'For <span class="figure">7</span> days. This alarm started it. Taking the battery out pauses that memory and does not delete it.'
  - light: { lamp: red, figure: 8 }
    means: 'Hush for <span class="figure">10</span> minutes. It works only on the alarm that was triggered.'
  - light: { lamp: red, figure: 1, unit: second }
    sound: { tick: live, words: 'alarm sounding' }
    means: 'Test on this alarm, until you let go.'
  - sound: { tick: live, figure: 10, words: 'after a short delay' }
    means: 'Other paired alarms in that test. When you let go they stop.'
  - light: { lamp: red, words: 'for 3 minutes' }
    means: 'After you let go of that test.'
  - light: { lamp: red, figure: 48 }
    sound: { tick: once, figure: 48 }
    means: 'Low battery.'
    fix: low-battery
  - sound: { tick: once, count: 1, words: '30 to 40 seconds' }
    means: 'Low battery. That chirp cannot be hushed.'
    fix: low-battery
  - light: { lamp: red, count: 2, figure: 48 }
    sound: { tick: once, count: 2, figure: 48 }
    means: 'Fault. Report faulty.'
  - light: { lamp: red, count: 2, figure: 8 }
    means: 'For <span class="figure">5</span> minutes after power up. No radio link.'
  - light: { lamp: red, count: 2, figure: 48 }
    sound: { tick: once, figure: 48 }
    means: 'End of life. That starts after <span class="figure">10</span> years. Report faulty.'
  - light: { lamp: red, figure: 48 }
    means: 'Low battery hush for <span class="figure">10</span> hours. The alarm stays quiet.'
  - light: { lamp: red, count: 2, figure: 48 }
    means: 'Fault hush for <span class="figure">10</span> hours. The alarm stays quiet.'
  - light: { lamp: red, words: 'for 10 minutes' }
    sound: { tick: live, words: 'on and off' }
    means: 'About <span class="figure">10</span> minutes. Settling after a new battery. That is normal.'
---

{% include signal-table.html %}

{% include low-battery.html %}
