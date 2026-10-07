---
brand: clipsal
unit: wireless
topic: signal
---

<ul class="signals">
<li>Red light once every <span class="figure">40</span> seconds, no sound. Normal use.</li>
<li>Flashing red during a false alarm, or just after it. This alarm set the others off.</li>
<li>Red light once every <span class="figure">1</span> second, <span class="figure">3</span> chirps every <span class="figure">4</span> seconds, until you let go of Test/Hush. Test.</li>
<li>Red light twice a second for <span class="figure">5</span> minutes. Radio test.</li>
<li><span class="figure">2</span> chirps every <span class="figure">1</span> second for <span class="figure">10</span> seconds. Radio test.</li>
<li>Red light once every <span class="figure">8</span> seconds, no sound, for <span class="figure">10</span> minutes. Hush. The alarm is not sensitive to smoke during that time.</li>
<li>Red light once and <span class="figure">1</span> chirp every <span class="figure">40</span> seconds. Low battery. <a href="#low-battery">View fix →</a></li>
<li>Red light once every <span class="figure">40</span> seconds, no sound, for <span class="figure">10</span> hours. Hushed low battery.</li>
<li>No light flash and <span class="figure">1</span> chirp every <span class="figure">40</span> seconds. Fault. Report faulty.</li>
<li><span class="figure">2</span> chirps. Alarm fault. Report faulty.</li>
<li><span class="figure">1</span> chirp, no red flash. The alarm should be cleaned.</li>
<li>Flashing red light. This alarm can be hushed.</li>
<li>Flashing and sounding on more than one alarm. Each of those needs Test/Hush.</li>
<li>The other alarms stop within <span class="figure">5</span> to <span class="figure">10</span> seconds. After the first alarm is hushed.</li>
<li>Network light blue for <span class="figure">30</span> seconds at most, or until pairing succeeds. The alarm you started with. <a href="{{ '/' | append: page.brand | append: '/' | append: page.unit | append: '/troubleshooting/pairing/' | relative_url }}">Open Pairing</a></li>
<li>Network light red for <span class="figure">3</span> seconds. An alarm pairing for the first time.</li>
<li>Network light green for <span class="figure">3</span> seconds. An alarm that was paired before.</li>
<li>Network light green for <span class="figure">3</span> seconds. A successful pair.</li>
<li>Network light blue for <span class="figure">30</span> seconds. After pairing, the alarm you started with.</li>
<li>Network light green for <span class="figure">30</span> seconds or longer. An unsuccessful pair.</li>
</ul>

{% include low-battery.html %}
