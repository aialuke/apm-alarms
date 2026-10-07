---
brand: emerald
unit: remote
topic: signal
signals:
  - sound: { tick: live, figure: 7 }
    means: 'Test on every interconnected alarm. One silence press turns that test off.'
  - means: 'Silence. Quiet for <span class="figure">8</span> minutes on every interconnected alarm. It can be slightly late if an alarm is part way through its sound.'
  - light: { lamp: yellow, figure: 8 }
    means: 'Remote battery is low. Report faulty.'
  - means: 'No red flash on a test press. The remote did not react.'
---

{% include signal-table.html %}
