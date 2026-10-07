---
brand: cavius
unit: wired
topic: signal
---

<ul class="signals">
<li>Light flash every <span class="figure">48</span> seconds in normal use. Alarm is working.</li>
<li>Green light on. Connected to mains power. It may take up to <span class="figure">1</span> minute to show that.</li>
<li>Other interconnected alarms sound after a short delay. The alarm that sensed the smoke.</li>
<li>Flashing light on the alarm that started it. That alarm can be hushed for <span class="figure">10</span> minutes.</li>
<li>Flashing red light during a false alarm, or just after it. This alarm set the others off.</li>
<li>Short chirp every <span class="figure">48</span> seconds for <span class="figure">30</span> days. Backup battery is nearing the end of its life. Only the alarm with the low battery chirps. <a href="#low-battery">View fix →</a></li>
<li><span class="figure">1</span> chirp every <span class="figure">8</span> seconds after a test. Alarms are connected and working.</li>
<li>Light flash every <span class="figure">8</span> seconds for <span class="figure">2</span> minutes after a test. Alarms are connected and working.</li>
<li><span class="figure">3</span> short chirps every <span class="figure">8</span> seconds. Smoke sensor fault. Report faulty.</li>
<li>Red light on. Learn Mode is selected. <a href="{{ '/' | append: page.brand | append: '/' | append: page.unit | append: '/troubleshooting/pairing/' | relative_url }}">Open Pairing</a></li>
<li>Chirp and a light flash on the alarm you started with. Sending the pairing code.</li>
<li>Other alarms flash. Receiving the pairing code.</li>
<li>Red flash on all of them. Connected.</li>
</ul>

{% include low-battery.html %}
