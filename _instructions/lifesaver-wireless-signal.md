---
brand: lifesaver
unit: wireless
topic: signal
---

<ul class="signals">
<li>Red light flashes every <span class="figure">0.5</span> seconds. Alarm, only on the alarm that detected the smoke.</li>
<li>Flashing red light during a false alarm, or just after it. This alarm set the others off.</li>
<li>No light and no sound. Standby.</li>
<li>Flash every <span class="figure">10</span> seconds and no sound. Hush for up to <span class="figure">10</span> minutes. Dense smoke overrides hush and the alarm sounds the whole time.</li>
<li>No sound on every alarm except the one that started the event. Hush on an alarm that did not start it, for <span class="figure">2</span> minutes.</li>
<li>Light flashes every <span class="figure">0.5</span> seconds, and <span class="figure">2</span> sets of <span class="figure">3</span> long chirps. Test. The first pattern is quieter. Holding longer than <span class="figure">5</span> seconds gives the full sound. The other alarms can take up to <span class="figure">20</span> seconds to start. If nothing sounds, report faulty.</li>
<li>Flash every <span class="figure">30</span> seconds and a chirp every <span class="figure">60</span> seconds. Low battery for at least <span class="figure">30</span> days. The button can silence that chirp for <span class="figure">24</span> hours, for up to <span class="figure">7</span> days. <a href="#low-battery">View fix →</a></li>
<li><span class="figure">2</span> flashes every <span class="figure">30</span> seconds, and no chirp. Before the end of life.</li>
<li><span class="figure">2</span> flashes every <span class="figure">30</span> seconds, and <span class="figure">2</span> chirps every <span class="figure">30</span> seconds. End of life. Report faulty.</li>
<li>Flash every <span class="figure">10</span> seconds and a chirp every <span class="figure">30</span> seconds. Alarm fault. Report faulty.</li>
<li>Flash <span class="figure">1</span> second on and <span class="figure">1</span> second off for <span class="figure">15</span> minutes, then once every <span class="figure">30</span> seconds, with a chirp every <span class="figure">30</span> seconds. Network fault. Report faulty.</li>
<li><span class="figure">5</span> quick flashes before the test pattern. Less than <span class="figure">15</span> months of life are left.</li>
<li>No flashes on that check. The alarm is still good.</li>
<li><span class="figure">7</span> red flashes when the button is pressed, and a chirp every <span class="figure">30</span> seconds. Test fault. Report faulty.</li>
<li><span class="figure">8</span> red flashes, and a chirp every <span class="figure">30</span> seconds. Memory fault. Report faulty.</li>
<li><span class="figure">9</span> red flashes, and <span class="figure">2</span> chirps every <span class="figure">30</span> seconds. End of life. Report faulty.</li>
<li><span class="figure">10</span> red flashes, and a chirp every <span class="figure">30</span> seconds. Chamber fault. Report faulty.</li>
<li>No light and a constant tone. The alarm is not operating. Report faulty.</li>
<li>Red light flashes <span class="figure">3</span> times every <span class="figure">40</span> seconds until Test is pressed. After an alarm, this alarm started it.</li>
<li><span class="figure">1</span> chirp, then the red light is <span class="figure">1</span> second on and <span class="figure">1</span> second off. Turning on.</li>
<li><span class="figure">2</span> quick red flashes every <span class="figure">2</span> seconds, <span class="figure">2</span> soft chirps, and a sonar ping. This alarm is open for another alarm to join.</li>
<li>Tweedle, then <span class="figure">3</span> red flashes every <span class="figure">2</span> seconds. That alarm has joined.</li>
<li>Red light turns off on each alarm. Joining has closed. <a href="{{ '/' | append: page.brand | append: '/' | append: page.unit | append: '/troubleshooting/pairing/' | relative_url }}">Open Pairing</a></li>
</ul>

{% include low-battery.html %}
