---
brand: anka
unit: wireless
topic: signal
---

<ul class="signals">
<li>Green flash every <span class="figure">60</span> seconds. Alarm is working.</li>
<li>Red flash every <span class="figure">8</span> seconds and a chirp. Alarm is faulty. Report faulty.</li>
<li>Red flash every <span class="figure">50</span> seconds and a chirp. Low battery. <a href="#low-battery">View fix →</a></li>
<li>Red flash and no chirp. Hush for <span class="figure">9</span> minutes.</li>
<li>Flashing red light during a false alarm, or just after it. This alarm set the others off.</li>
<li>Flashing red light after <span class="figure">3</span> green flashes on the alarm you started with. Pairing for <span class="figure">60</span> seconds at most. <a href="{{ '/' | append: page.brand | append: '/' | append: page.unit | append: '/troubleshooting/pairing/' | relative_url }}">Open Pairing</a></li>
<li>Green flash <span class="figure">3</span> times. Alarm has paired.</li>
<li>Flashing red light after <span class="figure">2</span> green flashes on another alarm. That alarm is trying to learn.</li>
</ul>

{% include low-battery.html %}
