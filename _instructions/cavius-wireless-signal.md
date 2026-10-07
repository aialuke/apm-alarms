---
brand: cavius
unit: wireless
topic: signal
---

<ul class="signals">
<li>Light flash every <span class="figure">48</span> seconds in normal use. Alarm is working.</li>
<li>Only the alarm that started it flashes. That alarm can be picked out.</li>
<li>Other interconnected alarms sound after a short delay. The alarm that started it.</li>
<li>Flashing red light during a false alarm, or just after it. This alarm set the others off.</li>
<li>Press on that alarm. Alarms pause for <span class="figure">10</span> minutes.</li>
<li>Short chirp and a light flash every <span class="figure">48</span> seconds. Battery is near the end of its life. This continues for at least <span class="figure">30</span> days. <a href="#low-battery">View fix →</a></li>
<li><span class="figure">1</span> chirp every <span class="figure">8</span> seconds after a test. Alarms are connected and working.</li>
<li>Light flash every <span class="figure">8</span> seconds for <span class="figure">2</span> minutes after a test. Alarms are connected and working.</li>
<li><span class="figure">3</span> short chirps every <span class="figure">8</span> seconds. Smoke sensor fault. Report faulty.</li>
<li>Red light flashes on the alarm you started with. Learn Mode. Sending the pairing code.</li>
<li>Other alarms flash. Receiving the pairing code.</li>
<li>Red flash on all of them. Connected. <a href="{{ '/' | append: page.brand | append: '/' | append: page.unit | append: '/troubleshooting/pairing/' | relative_url }}">Open Pairing</a></li>
</ul>

{% include low-battery.html %}
