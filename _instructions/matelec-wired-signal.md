---
brand: matelec
unit: wired
topic: signal
---

<ul class="signals">
<li>Green light stays on. Mains power is on.</li>
<li>Faint red flash every <span class="figure">48</span> seconds. Standby. The alarm is working.</li>
<li>Loud alarm, and the red light flashes every second until the smoke clears. This alarm detected smoke.</li>
<li>Flashing red light during a false alarm, or just after it. This alarm set the others off.</li>
<li>Alarm sounding, and the red light does not flash. This interconnected alarm did not detect the smoke.</li>
<li>Red light flashes once a second for <span class="figure">3</span> minutes. That interconnected alarm has stopped.</li>
<li>Red light flashes twice every <span class="figure">24</span> seconds for <span class="figure">7</span> days. This alarm started it. Taking the battery out pauses that memory and does not delete it.</li>
<li>Red light flashes every <span class="figure">8</span> seconds. Hush for <span class="figure">10</span> minutes. It works only on the alarm that was triggered.</li>
<li>Red light flashes once a second while the alarm is sounding, until you let go. Test on this alarm.</li>
<li>Sound for <span class="figure">10</span> seconds, after a short delay. Other paired alarms in that test. When you let go they stop.</li>
<li>Red light flashes for <span class="figure">3</span> minutes. After you let go of that test.</li>
<li>Chirp, and the red light flashes once every <span class="figure">48</span> seconds. Low battery. <a href="#low-battery">View fix →</a></li>
<li><span class="figure">1</span> chirp every <span class="figure">30</span> to <span class="figure">40</span> seconds. Low battery. That chirp cannot be hushed. <a href="#low-battery">View fix →</a></li>
<li><span class="figure">2</span> chirps and <span class="figure">2</span> red flashes every <span class="figure">48</span> seconds. Fault. Report faulty.</li>
<li>Red light flashes twice every <span class="figure">8</span> seconds for <span class="figure">5</span> minutes after power up. No radio link.</li>
<li>Chirp and <span class="figure">2</span> red flashes every <span class="figure">48</span> seconds. End of life. That starts after <span class="figure">10</span> years. Report faulty.</li>
<li>Red light flashes once every <span class="figure">48</span> seconds. Low battery hush for <span class="figure">10</span> hours. The alarm stays quiet.</li>
<li>Red light flashes twice every <span class="figure">48</span> seconds. Fault hush for <span class="figure">10</span> hours. The alarm stays quiet.</li>
<li>Solid red light for <span class="figure">50</span> seconds from the last alarm that joined. Pairing. <a href="{{ '/' | append: page.brand | append: '/' | append: page.unit | append: '/troubleshooting/pairing/' | relative_url }}">Open Pairing</a></li>
<li>Red light flashes, and the alarm may chirp on and off, for about <span class="figure">10</span> minutes. Settling after a new battery. That is normal.</li>
</ul>

{% include low-battery.html %}
