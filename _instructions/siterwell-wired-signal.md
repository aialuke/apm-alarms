---
brand: siterwell
unit: wired
topic: signal
---

<ul class="signals">
<li>Green light on. The alarm is receiving mains power.</li>
<li>Green light stays off when mains is on. The power connection needs a check. Report faulty.</li>
<li>Red flash every <span class="figure">32</span> seconds in standby. The alarm is working.</li>
<li>Red light flashes once a second and the alarm sounds until you let go. Test.</li>
<li>Flashing red light during a false alarm, or just after it. This alarm set the others off.</li>
<li>Red light flashes every <span class="figure">8</span> seconds. Hush. That quiet period is about <span class="figure">8</span> minutes.</li>
<li><span class="figure">3</span> short chirps, then a <span class="figure">1.5</span> second pause, and it repeats until you let go. Test after a battery change.</li>
<li>Red light flashes once every <span class="figure">8</span> seconds. Hush for <span class="figure">8</span> minutes after that test.</li>
<li>Red light flashes once every <span class="figure">32</span> seconds. Standby after that hush.</li>
<li>Chirp at the same time as a red flash, about every <span class="figure">32</span> seconds, for at least <span class="figure">30</span> days. Low battery. <a href="#low-battery">View fix →</a></li>
<li>Base light flashes about every <span class="figure">10</span> seconds for at least <span class="figure">30</span> days. The base battery is low. <a href="#low-battery">View fix →</a></li>
<li>Chirp about every <span class="figure">32</span> seconds, with the alarm in fault. Fault. Clean the outside vents. If it keeps chirping, report faulty.</li>
<li>Red light on the base stays on for <span class="figure">2</span> minutes after the wireless button is pressed <span class="figure">3</span> times within <span class="figure">2</span> seconds. Pairing has started.</li>
<li><span class="figure">3</span> flashes of the light on the next base. That alarm has joined. <a href="{{ '/' | append: page.brand | append: '/' | append: page.unit | append: '/troubleshooting/pairing/' | relative_url }}">Open Pairing</a></li>
</ul>

{% include low-battery.html %}
