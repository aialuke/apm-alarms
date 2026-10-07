---
brand: legrand
unit: wired
topic: signal
---

<ul class="signals">
<li>Green light stays on. Mains power is on.</li>
<li>Green light is off. Mains power is off.</li>
<li>Flashing red light. Only the alarm that started the event.</li>
<li>Flashing red light during a false alarm, or just after it. This alarm set the others off.</li>
<li>Blue light flashes once every <span class="figure">4</span> seconds, and <span class="figure">3</span> chirps every <span class="figure">2</span> seconds. Interconnect started by a radio alarm.</li>
<li><span class="figure">3</span> chirps every <span class="figure">2</span> seconds, and no light. Interconnect started by a wired alarm.</li>
<li>Red light flashes once every <span class="figure">300</span> seconds. Normal standby.</li>
<li>Red flash and <span class="figure">1</span> chirp every minute. Low battery and end of life. <a href="#low-battery">View fix →</a></li>
<li>Chirp once a minute. Battery is flat.</li>
<li>Single red flash followed by <span class="figure">3</span> red flashes. The battery is turned on.</li>
<li>Solid blue light. This alarm is the one you started pairing with.</li>
<li>Blue light flashes twice a second. Another alarm is searching.</li>
<li>Blue light flashes once a second. That alarm has joined.</li>
<li>Blue light flashes fast for <span class="figure">90</span> seconds. The first alarm is leaving pairing. <a href="{{ '/' | append: page.brand | append: '/' | append: page.unit | append: '/troubleshooting/pairing/' | relative_url }}">Open Pairing</a></li>
<li>Red light flashes <span class="figure">3</span> times every <span class="figure">4</span> seconds, and <span class="figure">3</span> chirps in <span class="figure">4</span> seconds, until you let go. Test on the alarm you are testing.</li>
<li>Blue light flashes once every <span class="figure">4</span> seconds and stays on for <span class="figure">3</span> minutes, with <span class="figure">3</span> chirps in <span class="figure">2</span> seconds until you let go. Another radio alarm in that test.</li>
<li><span class="figure">3</span> chirps in <span class="figure">2</span> seconds until you let go. Another wired alarm in that test. Those lights are not used.</li>
<li>Solid blue light on the radio range test. The alarm you started with. That ends after <span class="figure">9</span> minutes.</li>
<li>Slow blue flash on the other radio alarms, after <span class="figure">30</span> seconds. That also ends after <span class="figure">9</span> minutes.</li>
<li>First blue light flashes fast, and the other blue lights turn off. The radio range test is closing. Closing can take up to <span class="figure">90</span> seconds.</li>
<li>Hush on the alarm that started it. That alarm is less sensitive for <span class="figure">20</span> minutes.</li>
</ul>

{% include low-battery.html %}
