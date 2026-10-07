---
brand: red
unit: wireless
topic: signal
---

<ul class="signals">
<li>Red flash once a minute, when no smoke is present. The alarm is working.</li>
<li>Flashing red light during a false alarm, or just after it. This alarm set the others off.</li>
<li>Red light flashes every <span class="figure">10</span> seconds. Hush. Sensitivity is reduced. The quiet period is <span class="figure">10</span> minutes.</li>
<li><span class="figure">2</span> short chirps at the end of hush. The alarm returns to normal.</li>
<li>Short chirp once every <span class="figure">48</span> seconds. The battery is at the end of its life. That warning lasts at least <span class="figure">30</span> days. <a href="#low-battery">View fix →</a></li>
<li>Solid red light for <span class="figure">30</span> seconds. The alarm you started with is in pairing.</li>
<li><span class="figure">5</span> red flashes on a joining alarm. The radio link succeeded. <a href="{{ '/' | append: page.brand | append: '/' | append: page.unit | append: '/troubleshooting/pairing/' | relative_url }}">Open Pairing</a></li>
<li>Loud chirp while the test button is held. Test. The chirp stops when you let go.</li>
</ul>

{% include low-battery.html %}
