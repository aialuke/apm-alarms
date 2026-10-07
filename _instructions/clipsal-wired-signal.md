---
brand: clipsal
unit: wired
topic: signal
---

<ul class="signals">
<li>The light blinks red. Every operating mode.</li>
<li>Standby light every <span class="figure">48</span> seconds, no alarm sound. Normal use.</li>
<li>Flashing red during a false alarm, or just after it. This alarm set the others off.</li>
<li>Standby light once every <span class="figure">1</span> second, <span class="figure">3</span> chirps every <span class="figure">4</span> seconds, until you let go of Test/Hush. Test.</li>
<li>Standby light off, <span class="figure">3</span> chirps every <span class="figure">4</span> seconds for <span class="figure">25</span> seconds. Radio interconnection test.</li>
<li>Standby light every <span class="figure">8</span> seconds, no alarm sound, for <span class="figure">10</span> minutes. Hush. Smoke sensing is paused. On a standby hush, heat sensing stays active.</li>
<li>Standby light and <span class="figure">1</span> chirp every <span class="figure">48</span> seconds. Low battery. <a href="#low-battery">View fix →</a></li>
<li>Standby light twice and <span class="figure">2</span> chirps every <span class="figure">48</span> seconds. Fault. Report faulty.</li>
<li>Standby light every <span class="figure">24</span> seconds, no sound, for <span class="figure">10</span> hours. Hushed low battery.</li>
<li>Standby light twice every <span class="figure">24</span> seconds, no sound, for <span class="figure">10</span> hours. Hushed fault.</li>
<li>Standby light every <span class="figure">48</span> seconds, no sound, for <span class="figure">10</span> hours. Hushed alarm memory.</li>
<li>Standby light once every <span class="figure">2</span> seconds for <span class="figure">72</span> hours. After the alarm has stopped, on the alarm that started it. A short press of Test/Hush hushes that blink for <span class="figure">10</span> hours.</li>
<li>Status light yellow once a second for <span class="figure">30</span> seconds. Pairing. <a href="{{ '/' | append: page.brand | append: '/' | append: page.unit | append: '/troubleshooting/pairing/' | relative_url }}">Open Pairing</a></li>
<li>Status light green for a while, then off. Pairing finished.</li>
</ul>

{% include low-battery.html %}
