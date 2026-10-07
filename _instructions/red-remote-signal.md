---
brand: red
unit: remote
topic: signal
signals:
  - means: 'All lights flash once when the battery tab is removed. The remote has turned on.'
  - light: { lamp: green }
    sound: { tick: live, words: 'paired alarms' }
    means: 'Test. The test signal runs for about <span class="figure">150</span> seconds, and the paired alarms sound.'
  - light: { lamp: green, figure: 4 }
    means: 'Remote battery is low. Report faulty.'
  - light: { lamp: red, words: 'and orange', label: 'Red and orange' }
    means: 'Red alarm light and the orange locate light flash quickly. A paired alarm detects smoke.'
  - light: { lamp: yellow, words: 'and red', label: 'Orange and red' }
    means: 'Orange hush light and the red alarm light stay on. Triggered alarms stay quiet for <span class="figure">10</span> minutes.'
  - means: 'All lights go off. No smoke is detected after <span class="figure">48</span> seconds.'
  - light: { lamp: yellow, label: 'Orange' }
    means: 'Orange hush light. A paired alarm''s single chirp or double chirp is quiet for <span class="figure">10</span> hours.'
  - light: { lamp: yellow, label: 'Orange' }
    means: 'Orange memory light for <span class="figure">150</span> seconds. Memory check.'
  - means: 'No sound from a paired alarm. No past event on the memory check.'
  - sound: { tick: static, count: 1 }
    means: 'Low battery on the memory check.'
  - sound: { tick: static, count: 2 }
    means: 'Fault on the memory check.'
  - sound: { tick: static, count: 3 }
    means: 'An alarm was triggered on the memory check.'
  - light: { lamp: yellow, figure: 4, label: 'Orange' }
    means: 'Orange memory light for <span class="figure">72</span> hours. A paired alarm has reported a low battery, a fault, or an alarm.'
---

{% include signal-table.html %}
