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
      <td class="light"><span class="cue">Light Green</span><span class="lamp is-green is-steady" aria-hidden="true"></span></td>
      <td class="sound is-empty"><span class="cue">Sound None</span><span class="cue-words" aria-hidden="true">-</span></td>
      <td class="means"><span class="cue">Means</span> Connected to power.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light Red</span><span class="lamp is-red blinks-1" aria-hidden="true"></span><span class="cue-words"><span class="wait"><span class="figure">8</span> seconds</span></span></td>
      <td class="sound is-empty"><span class="cue">Sound None</span><span class="cue-words" aria-hidden="true">-</span></td>
      <td class="means"><span class="cue">Means</span> Silent mode.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light Red</span><span class="lamp is-red blinks-1" aria-hidden="true"></span><span class="cue-words"><span class="wait"><span class="figure">48</span> seconds</span></span></td>
      <td class="sound is-empty"><span class="cue">Sound None</span><span class="cue-words" aria-hidden="true">-</span></td>
      <td class="means"><span class="cue">Means</span> Alarm is active.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light Red 3 times</span><span class="lamp is-red blinks-3" aria-hidden="true"></span><span class="cue-words"><span class="figure" aria-hidden="true">3x</span> <span class="wait"><span class="figure">48</span> seconds</span></span></td>
      <td class="sound is-empty"><span class="cue">Sound None</span><span class="cue-words" aria-hidden="true">-</span></td>
      <td class="means"><span class="cue">Means</span> Triggered in the last <span class="figure">72</span> hours.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light Yellow</span><span class="lamp is-yellow blinks-1" aria-hidden="true"></span><span class="cue-words"><span class="wait"><span class="figure">48</span> seconds</span></span></td>
      <td class="sound"><span class="cue">Sound</span><span class="tick ticks-once" aria-hidden="true"></span><span class="cue-words"><span class="wait"><span class="figure">48</span> seconds</span></span></td>
      <td class="means"><span class="cue">Means</span> Low battery. <a href="#low-battery">View fix →</a></td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light Yellow twice</span><span class="lamp is-yellow blinks-2" aria-hidden="true"></span><span class="cue-words"><span class="figure" aria-hidden="true">2x</span> <span class="wait"><span class="figure">48</span> seconds</span></span></td>
      <td class="sound"><span class="cue">Sound</span><span class="tick ticks-once" aria-hidden="true"></span><span class="cue-words"><span class="wait"><span class="figure">48</span> seconds</span></span></td>
      <td class="means"><span class="cue">Means</span> Fault.</td>
    </tr>
    <tr>
      <td class="light"><span class="cue">Light Flashing red</span><span class="lamp is-red is-steady" aria-hidden="true"></span><span class="cue-words">after an alarm</span></td>
      <td class="sound is-empty"><span class="cue">Sound None</span><span class="cue-words" aria-hidden="true">-</span></td>
      <td class="means"><span class="cue">Means</span> This alarm set the others off.</td>
    </tr>
    <tr>
      <td class="light is-empty"><span class="cue">Light None</span><span class="cue-words" aria-hidden="true">-</span></td>
      <td class="sound"><span class="cue">Sound</span><span class="tick ticks-live" aria-hidden="true"></span><span class="cue-words"><span class="wait"><span class="figure">2</span> seconds</span></span></td>
      <td class="means"><span class="cue">Means</span> Wiring is wrong. Report faulty.</td>
    </tr>
  </tbody>
</table>

{% include low-battery.html %}
