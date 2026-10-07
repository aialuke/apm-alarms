---
brand: emerald
unit: wired
topic: signal
---

<table class="signals">
  <thead>
    <tr>
      <th class="light" scope="col">Light</th>
      <th class="sound" scope="col">Sound</th>
      <th class="means" scope="col">Means</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="light"><span class="cue">Light</span> Green</td>
      <td class="sound none"><span class="cue">Sound</span> None</td>
      <td class="means"><span class="cue">Means</span> Connected to power.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light</span> Red every <span class="figure">8</span> seconds</td>
      <td class="sound none"><span class="cue">Sound</span> None</td>
      <td class="means"><span class="cue">Means</span> Silent mode.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light</span> Red every <span class="figure">48</span> seconds</td>
      <td class="sound none"><span class="cue">Sound</span> None</td>
      <td class="means"><span class="cue">Means</span> Alarm is active.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light</span> Red <span class="figure">3</span> times every <span class="figure">48</span> seconds</td>
      <td class="sound none"><span class="cue">Sound</span> None</td>
      <td class="means"><span class="cue">Means</span> Triggered in the last <span class="figure">72</span> hours.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light</span> Yellow every <span class="figure">48</span> seconds</td>
      <td class="sound"><span class="cue">Sound</span> every <span class="figure">48</span> seconds</td>
      <td class="means"><span class="cue">Means</span> Low battery. <a href="#low-battery">View fix →</a></td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light</span> Yellow twice every <span class="figure">48</span> seconds</td>
      <td class="sound"><span class="cue">Sound</span> every <span class="figure">48</span> seconds</td>
      <td class="means"><span class="cue">Means</span> Fault.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light</span> Flashing red after an alarm</td>
      <td class="sound none"><span class="cue">Sound</span> None</td>
      <td class="means"><span class="cue">Means</span> This alarm set the others off.</td>
    </tr>
    <tr>
      <td class="light none"><span class="cue">Light</span> None</td>
      <td class="sound"><span class="cue">Sound</span> every <span class="figure">2</span> seconds</td>
      <td class="means"><span class="cue">Means</span> Wiring is wrong. Report faulty.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light</span> Red comes on</td>
      <td class="sound"><span class="cue">Sound</span> as the light comes on</td>
      <td class="means"><span class="cue">Means</span> Turned on.</td>
    </tr>
  </tbody>
</table>

{% include low-battery.html %}
