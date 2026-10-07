# Lights and sounds research

Source notes for the technician. One model per unit. Sources are manuals and official pages opened during this pass. This file is not a page on the phone. The signal list is not in the app.

The phone writes each signal as the table in `docs/product-brief.md`. This file keeps what the sheet said.

The brief already sets two meanings. A chirp means low battery. The light cell for the alarm that set the others off says Flashing red after an alarm. The red-flash interval stays unconfirmed. Where a sheet prints a timing, the section copies it and marks it unconfirmed. Do not treat that timing as the interval to show.

Locate stays off. A locate light in these notes is not a request to show that button.

Factory reset and clearing a network stay in Flag. They are not signals to put on the phone.

## Status

| Brand | Unit | Result | Model checked | In the app |
|---|---|---|---|---|
| Anka | Wired | Not found | AJ-710MR-9 | No |
| Anka | Wireless | Found in a manual | AJ-765 | Yes |
| Anka | Remote | Found in a manual | AJ-R1065 | Yes |
| Brooks | Wired | Found in a manual | EIB3016 | Yes |
| Brooks | Wireless | Found in a manual | EIB650iRF | Yes |
| Brooks | Remote | Found in a manual | EIB450 | Yes |
| Cavius | Wired | Found in a manual | 2203 CAVMP | Yes |
| Cavius | Wireless | Found in a manual | 2107 CAV10WF | Yes |
| Cavius | Remote | Found in a manual | 9002 CAVSR | Yes |
| Clipsal | Wired | Found in a manual | 755WSA | Yes |
| Clipsal | Wireless | Found in a manual | 755LPSMA4 | Yes |
| Detector Inspector | Wired | Found in a manual | Generic mains sheet | Yes |
| Detector Inspector | Wireless | Not found | No model named | No |
| Emerald | Wired | Found in a manual | EP-HYB-240-RF-10 | Yes |
| Emerald | Wireless | Found in a manual | EVO10RF | Yes |
| Emerald | Remote | Found in a manual | EP-SA-CONT-RF | Yes |
| GT | Wired | Found in a manual | GT240 | Yes |
| GT | Wireless | Found in a manual | GT10RF+ | Yes |
| GT | Remote | Not found | GT-REMOTE, no manual | No |
| Legrand | Wired | Found in a manual | 643088 | Yes |
| Legrand | Wireless | Found in a manual | 643091 | Yes |
| Lifesaver | Wired | Found in a manual | LIF6800 | Yes |
| Lifesaver | Wireless | Found in a manual | LIF6000DCW | Yes |
| Matelec | Wired | Found in a manual | DET-SMK/RF/AC/10 | Yes |
| Matelec | Wireless | Found in a manual | FSA-30000 | Yes |
| Matelec | Remote | Found in a manual | FSA-90000 | Yes |
| Red | Wired | Found in a manual | R240P | Yes |
| Red | Wireless | Found in a manual | R10RF | Yes |
| Red | Remote | Found in a manual | RACP | Yes |
| Siterwell | Wired | Found in a manual | GS519 | Yes |
| Siterwell | Wireless | Not found | No interconnected battery model | No |

## Anka, wired alarm

**Result.** Not found.

**Model.** AJ-710MR-9. The named product page does not say what a light or a sound means. No user manual for this model was linked on that page, so no other model was used.

**Source.** https://www.anka-security.com/product/wireless-mains-powered-photoelectric-smoke-alarm-aj710mr-9/ The contract link https://www.anka-security.com/wp-json/wp/v2/product/16761 is the same product text.

**Sheet line.** "Alamm mode：LED & Buzzer"

**Signals.** Not found.

**Manual is silent on.** The page names an LED and a buzzer, and a sound level above 85 dB, and it does not say what the light or the sound means.

## Anka, wireless alarm

**Result.** Found in a manual.

**Model.** AJ-765. This is the battery alarm with wireless interconnect named for this job.

**Source.** https://www.aap.co.nz/site/aap/AJ-765%20Smoke.pdf The same indication lines are on https://manuals.plus/anka/aj-765-auto-resetting-smoke-detector-manual

**Sheet line.** "Red Flashing with No beeping, in Hush mode for 9 minutes"

**Signals.** A green flash every 60 seconds means the detector is performing correctly. A red flash every 8 seconds plus a beep means the detector is faulty and needs cleaning or replacement. A red flash every 50 seconds plus a beep means the battery is low and the detector needs replacement. A red flash with no beep means hush mode, and the sheet says that state lasts 9 minutes. After the green light has flashed 3 times on the master, a flashing red light means pairing mode, for 60 seconds at most. A green light that flashes 3 times means the detector has paired. After the green light has flashed 2 times on a slave, a flashing red light means that detector is trying to learn.

**Manual is silent on.** The sheet does not give a red flash rate while the sounder is in alarm for smoke, and it does not mention a yellow light.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

## Anka, remote

**Result.** Found in a manual.

**Model.** AJ-R1065. The AJ-765 sheet names an AJ-R106 remote, and the AJ-R106 product page does not say what any light means. This section uses the maker manual for the AJ-R1065. That manual says the remote is for the AJ-76XSI series, with X as 0, 1, 2, 3, or 5.

**Source.** https://www.anka-security.com/wp-content/uploads/2026/05/AJ-R1065-Interconnected-Remote-Controller-Product-Manual.pdf

**Sheet line.** "only the first activated alarm will keep beeping, other alarms are silenced."

**Signals.** After the third green flash on the remote, the red light keeps flashing for about 1 minute while it is the main device for pairing. A device that pairs beeps once and shows a long green light. A device already in another group beeps quickly and flashes green, which asks whether to join the current group. A beep after one green flash means that device has joined the current group. When group pairing is finished, the other device beeps once and the green light turns off. After the locate button is pressed, only the first alarm that activated keeps beeping, and the other alarms are silenced. The first smoke alarm that activated has a memory function of 3 beeps a minute. Pressing hush after an alarm mutes all of the devices. A test makes the alarm sound for 10 to 15 seconds, and then the alarm stops.

**Manual is silent on.** The remote manual does not describe a light on the remote for fire, fault, or a low battery.

## Brooks, wired alarm

**Result.** Found in a manual.

**Model.** EIB3016. The opened manual also covers the EIB3024 and the EIB3014. The notes below are the lines that apply to the EIB3016 photoelectric smoke alarm.

**Source.** https://www.brooks.com.au/index.cfm/_api/render/file/?method=inline&fileID=C45BB859-1433-4F6D-A84890FA10D63F9B

**Sheet line.** "For 24 hours after alarming, the red LED will flash twice every 48 seconds (approx)"

**Signals.** A steady green light means mains power is on. One green flash every 48 seconds means the alarm is on its backup battery because the mains is off. The green light is off when both the mains and the backup battery are off. In standby the alarm does not sound, beep, chirp, or flash, and the only light is the green power light. While the test button is held, the green light flickers about every second. All linked alarms sound, and only an alarm that is detecting the event flashes its red light. In hush the red light keeps flashing while the alarm still senses smoke or heat, and the silence lasts 10 minutes. For 24 hours after an alarm, the red light flashes twice every 48 seconds, and the manual marks that spacing as approximate. Holding the test button makes the red light flash twice if an alarm event is in memory. A red flash that lasts 1 second means the memory has been cleared. A short chirp and one yellow flash every 48 seconds mean the backup battery is depleted. If the green light is off or flashing every 48 seconds at the same time, the alarm is not receiving 230V mains. Two short chirps with two yellow flashes every 48 seconds mean a sensor fault, and the alarm must be replaced. Three short chirps with three yellow flashes every 48 seconds mean the alarm is past its 10th year and must be replaced. Four short chirps with four yellow flashes when the test button is pressed mean the EIB3016 has reached maximum dust compensation. If a fault is present, pressing the test button spaces the yellow flashes 8 seconds apart so they can be counted. In fault hush the yellow light keeps flashing, which means the fault is still present, and the chirps stay off for 12 hours.

**Manual is silent on.** The manual does not give a spacing for the red flash while the alarm is sounding or while it is in hush.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

## Brooks, wireless alarm

**Result.** Found in a manual.

**Model.** EiB650iRF. The file the Brooks data sheets page labels as the EIB650iRF owner's manual is an older EIB650i leaflet whose model chart lists EIB650iC and EIB650iW and does not name EiB650iRF, so those timings were not used. These notes use the EiB600 series instruction manual, whose model chart names EiB650iRF.

**Source.** https://www.brooks.com.au/index.cfm/_api/render/file/?method=inline&fileID=FA22A3D1-EEB5-4D63-86E266BCE0943C22

**Sheet line.** "The red LED will flash at a rate of 1 flash every 0.5 seconds."

**Signals.** On power up the table shows one yellow flash, one red flash, and one sound, and the sound mark is for EiB650i and EiB660i models. In standby the alarm does not sound, beep, chirp, or flash. During the monthly test the alarm sounds and the red light flashes once every 0.5 seconds. The indicator table shows the same red flash, one every 0.5 seconds, while the alarm is detecting fire. All linked alarms sound, and only an alarm that is detecting the event flashes its red light. In hush the red light keeps flashing while the alarm still senses smoke or heat, and the silence lasts 10 minutes. A short chirp about every 48 seconds with a yellow flash at the same time means the lithium battery is partly depleted and the alarm needs replacement. Two short chirps with two yellow flashes every 48 seconds mean a sensor or piezo fault, and the alarm must be replaced. Three short chirps with three yellow flashes every 48 seconds mean the alarm is past its 10th year and must be replaced. Four short chirps with four yellow flashes when the button is pressed mean maximum dust compensation on a smoke alarm. If a fault is present, pressing the button spaces the yellow flashes 8 seconds apart so they can be counted. In fault hush the yellow light keeps flashing, which means the fault is still present, and the chirps return after 12 hours. For 24 hours after an alarm, the red light flashes twice every 48 seconds. After those 24 hours, holding the test button makes the red light flash twice every 8 seconds if an older alarm is in memory.

**Manual is silent on.** The manual tells you to hold the test button until the blue light comes on when the alarms use RF modules, and it does not say what that blue light means. It also does not give a spacing for the red flash during hush.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

## Brooks, remote

**Result.** Found in a manual.

**Model.** EIB450. This is the wall mount test, locate, silence, and memory control on the Brooks manuals page.

**Source.** https://www.brooks.com.au/index.cfm/_api/render/file/?method=inline&fileID=6505463F-8387-4065-880DBD6E7112367E

**Sheet line.** "Fire Indicator Indicates that a Fire Alarm has been activated"

**Signals.** The fire indicator means a fire alarm has been activated. The CO indicator means a CO alarm has been activated. The low battery indicator means the controller battery has reached the end of its life. On power up the fire, battery, and CO indicators flash, then each segment lights red, then blue, then green, and then every light goes off, which means standby. In house code the number of blue flashes equals the number of RadioLINK alarms and devices, and that pattern repeats every 5 to 10 seconds. The test segment lighting blue means a RadioLINK test signal has been activated. The test segment flashing blue means the test has been completed. The locate segment changes from red to blue when locate is used, and after 10 to 40 seconds every alarm stops except the source alarm. The silence segment flashes red while the source alarm can still be silenced, and it then turns blue. All segments flashing green for a moment means the controller is back in standby. If an alarm starts and then returns to standby, the fire icon or the CO icon flashes rapidly for two minutes. After a CO alarm, the CO icon then flashes once every 60 seconds for 24 hours. In diagnostic mode a green flash on the memory segment, with the fire or CO indicator also flashing, means an alarm memory is set. The test segment flashing blue during the two minute diagnostic test means a refresh signal is being sent. All segments flashing green means that diagnostic test is finished.

**Manual is silent on.** The manual does not say what the low battery indicator looks like, and it does not call the two minute fire or CO icon flash red.

## Cavius, wired alarm

**Result.** Found in a manual.

**Model.** The sheet prints model 2203-002 and part code 2901 CAVMPRK. This is the mains guide named for 2203 CAVMP.

**Source.** Sections 6 to 9 and 11, and the learn setup on the first page, in the mains user guide. https://www.cavius.com.au/wp-content/uploads/2026/02/2203-CAVMP-User-Guide-With-recess-kit.pdf

**Sheet line.** "In normal mode the LED will flash every 48 seconds to show correct operation."

**Signals.** In normal mode the LED flashes every 48 seconds to show correct operation. The green LED is on when the alarm is connected to mains power, and it may take up to 1 minute to show that mains is connected. When smoke is detected the alarm sounds the alarm signal and the red LED flashes. The alarm also sends that signal to the other connected alarms, and those alarms sound the alarm signal after a short delay. The sheet says this family has two different alarm signals. Alarm signal 1, printed as three groups of dashes, means a life threatening alarm such as a smoke alarm. A flashing LED marks the originating alarm, and that alarm can be hushed for 10 minutes. When the backup battery is starting its end of life, a short beep sounds every 48 seconds for 30 days, and only the alarm with the low battery beeps. After a test signal, one beep every 8 seconds means the alarms are connected and functioning. Three short beeps every 8 seconds mean a smoke sensor fault. During that test the alarms also give a short beep and the LED flashes every 8 seconds for 2 minutes. The red LED lights to show Learn Mode is selected. The master beeps and the LED flashes while it sends the house code, the other alarms flash the LED as they receive that code, and a red LED flash on all of them means they are connected. The last line of the sheet says the alarm sound pattern follows ISO 8201.

**Manual is silent on.** How fast the red LED flashes in alarm mode. Whether the other alarms flash when they sound. What the second alarm signal means. The colour of the LED that flashes every 48 seconds in normal mode. The colour of the LED that flashes every 8 seconds during a test.

## Cavius, wireless alarm

**Result.** Found in a manual.

**Model.** The sheet prints model 2107-001 or 2117-001. The part line prints 2107-002, 10022, 10050, and 2117-002. This is the battery guide named for 2107 CAV10WF and 2117 CAV10WF.

**Source.** Sections 7 to 10, the low battery lines, the functional information, and the learn pages, in the battery user guide. https://www.cavius.com.au/wp-content/uploads/2026/02/2107-CAV10WF-2117-CAV10WF-User-Guide.pdf

**Sheet line.** "It will sound the alarm signal and the LED will flash."

**Signals.** In normal mode the LED flashes every 48 seconds to show the alarm is functioning. When smoke is detected the alarm sounds the alarm signal and the LED flashes, and only the source alarm's LED flashes so that alarm can be picked out. The other connected alarms sound the alarm signal after a short delay. A fire alarm is a series of repeated tones, and the minimum sound level is 85 dB at 3 metres. The front page says the alarm sound pattern follows ISO 8201. The originating alarm is the one with the flashing LED, and a press on that alarm pauses the alarms for 10 minutes. The source alarm keeps sounding until it is hushed. A short beep and an LED flash every 48 seconds mean the battery is near the end of its life, and this continues for a minimum of 30 days. After a test signal, one beep every 8 seconds means the alarms are connected and functioning. Three short beeps every 8 seconds mean a smoke sensor fault. During that test the alarms also give a short beep and the LED flashes every 8 seconds for 2 minutes. In learn mode the master red LED flashes while it sends the house code, the other alarms flash the LED as they receive that code, and a red LED flash on all of them means they are connected.

**Manual is silent on.** The colour of the LED in normal mode, in alarm mode, in a test, and on a low battery. How fast the LED flashes in alarm mode. Whether the other alarms flash when they sound.

## Cavius, remote

**Result.** Found in a manual.

**Model.** The guide title is CAVIUS Smart Remote. The guide does not print a model number. The Cavius support page names it the 9002 Wireless Family Smart Remote, and the same page lists 9002 CAVSR (9002-001). https://www.cavius.com.au/support/

**Source.** Alarm mode, hush, and low battery in the Smart Remote how to use quick guide. https://www.cavius.com.au/wp-content/uploads/2026/02/Smart-Remote-How-to-Use-Quick-Guide.pdf

**Sheet line.** "When the smoke alarms start to sound, the Smart Remote will vibrate and the LED torch will flash rapidly (stroboscopic)."

**Signals.** When the smoke alarms start to sound, the Smart Remote vibrates and the LED torch flashes rapidly, as a strobe. A press of the black side button changes that torch from a strobe to a steady light. In the first 30 seconds of an alarm, one press of the red test and hush button stops the remote sounding and stops the vibration, and the LED keeps flashing. The remote then waits and sends the hush signal by itself within 30 seconds. After 30 seconds of an alarm, one press sends a hush signal for 13 seconds. The guide says the remote can stop the alarmed device only after 30 seconds in alarm mode. The alarm that first sensed the smoke is the only one that is flashing. A low battery gives a short beep every 48 seconds. The guide calls this a 30 day low battery warning. Only the Smart Remote beeps for that warning, and the smoke alarms do not beep. The torch turns off by itself after 5 minutes.

**Manual is silent on.** The colour of the remote LED during an alarm. A timed rate for that flash, beyond the words rapidly and stroboscopic. The sound the remote makes while the alarms are sounding. The guide says a press stops the remote sounding, and it does not describe that sound.

## Clipsal, wired alarm

**Result.** Found in a manual.

**Model.** The guide prints 755WSA. The title is Smoke Alarm 240 V, works with Wiser.

**Source.** LED Indications on printed page 33, and the hush, low battery, fault, and alarm memory sections on printed pages 20 and 21. https://download.schneider-electric.com/files?p_Doc_Ref=755WSA_WH_DUG_EN&p_File_Name=755WSA_WH_DUG_EN.pdf

**Sheet line.** "For all the operating modes, LED blinks Red."

**Signals.** The sheet says that for every operating mode the LED blinks red. In normal mode the standby LED blinks every 48 seconds and there is no alarm sound. In a local alarm the standby LED blinks every 1 second and the sound is 3 beeps every 4 seconds. For a local smoke alarm all of the red LEDs blink, and for a local temperature alarm only the standby red LED blinks. In an interconnected alarm the standby LED stays off and the sound is 3 beeps every 4 seconds. In test mode the standby LED blinks once every 1 second and the sound is 3 beeps every 4 seconds, until the Test/Hush button is released. A wireless interconnection test leaves the standby LED off and gives continuous 3 beeps every 4 seconds for 25 seconds. In hush mode the standby LED blinks every 8 seconds with no alarm sound, for 10 minutes. During an alarm hush the standby LED blinks once every 8 seconds, and the device does not detect smoke or high temperature for 10 minutes. The same once every 8 seconds blink also marks a standby hush, when smoke detection is paused for 10 minutes and the temperature sensor stays active. A low battery makes the standby LED blink every 48 seconds with 1 beep every 48 seconds, until the alarm is replaced. The low battery section says to replace the device within 30 days after the first alert. A fault makes the standby LED blink twice every 48 seconds with 2 beeps every 48 seconds, until the fault is cleared. A snoozed low battery makes the standby LED blink every 24 seconds with no sound, for 10 hours. A snoozed fault makes the standby LED blink twice every 24 seconds with no sound, for 10 hours. A snoozed alarm memory makes the standby LED blink every 48 seconds with no sound, for 10 hours. After the alarm has stopped, the standby LED on the triggered device blinks once every 2 seconds for 72 hours. A short press of the Test/Hush button snoozes that blink for 10 hours. The false alarm section says the triggering device has a flashing red LED every 2 seconds. While pairing is active the status LED blinks yellow once per second, and pairing mode lasts 30 seconds. When pairing is completed the status LED glows green for some time and then turns off. In a reset the status LED starts blinking red after 10 seconds, then the device restarts and the status LED blinks green before it turns off. An identify command makes the status LED blink red, and the sheet says that blink may take up to 60 minutes to start.

**Manual is silent on.** A duration for a local alarm or an interconnected alarm. The operating table prints no duration for those two rows. Whether an interconnected alarm flashes any LED. The sheet says the standby LED is off for that row.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

## Clipsal, wireless alarm

**Result.** Found in a manual.

**Model.** The sheet prints 755LPSMA4, a lithium battery photoelectric smoke alarm with wireless interconnect. The sheet mark is PHA7373102_01.

**Source.** The Red LED and sound table, the hush and fault paragraphs, and the network LED table, on the one page installation guide. https://1300smokealarms.com.au/wp-content/uploads/2025/07/Clipsal-755LPSMA4_Lithium_Battery_alarm_with_WI_Installation_Guide-1.pdf

**Sheet line.** "When the backup battery gets low, the red LED flashes once every 40 seconds, together with a beep sound."

**Signals.** In normal mode the red LED flashes once every 40 seconds and there is no sound. In a local alarm the red LED flashes once every 1 second and the sound is 3 beeps every 4 seconds. In an interconnected alarm the red LED stays off and the sound is continuous 2 beeps every 1 second. In test mode the red LED flashes once every 1 second and the sound is 3 beeps every 4 seconds, until the Test/Hush button is released. A wireless interconnection test flashes the red LED twice every second for 5 minutes, and the sound is continuous 2 beeps every 1 second for 10 seconds. The testing paragraph says the same thing in other words. The interconnected alarms sound for 10 seconds and flash the front red LED twice a second for 5 minutes. In hush mode the red LED flashes once every 8 seconds with no sound, for 10 minutes. During that hush the alarm is not sensitive to smoke for 10 minutes. A low battery flashes the red LED once every 40 seconds with 1 beep every 40 seconds, and the sheet says to replace the smoke alarm. A snoozed low battery still flashes the red LED once every 40 seconds, with no sound, for 10 hours. Fault mode gives no LED flash and 1 beep every 40 seconds until the fault is cleared. A snoozed fault gives no LED flash and no sound for 10 hours. A label beside the alarm sounding diagram says a low battery is 1 beep, or an alarm fault is 2 beeps. The troubleshooting list says a beep with the red LED flashing once every 40 seconds means the battery is in a low voltage condition, and the sheet says to replace the smoke alarm. A beep once with no red LED flash means the alarm should be cleaned. An unexpected alarm is marked by a flashing red LED and a sound warning of three beeps every seconds. The sheet prints that last phrase with no number of seconds. The alarm with the red flashing LED is the only one that can be hushed. If more than one alarm has a flashing red LED and is sounding, each of those alarms needs the Test/Hush button. The other alarms stop sounding within 5 to 10 seconds after the first alarm is hushed. A master in pairing mode flashes the network LED blue for 30 seconds at most, or until pairing succeeds. A slave pairing for the first time flashes the network LED red for 3 seconds. A slave that was paired before flashes the network LED green for 3 seconds. A successful pair flashes the network LED green for 3 seconds. After pairing is completed the master flashes the network LED blue for 30 seconds. An unsuccessful slave pairing flashes the network LED green for 30 seconds or longer.

**Manual is silent on.** A duration for a local alarm or an interconnected alarm. The red LED table prints no duration for those two rows. Which fault description to follow. The table says 1 beep every 40 seconds with no LED, and the diagram label says an alarm fault is 2 beeps. A red flash rate after the alarm has stopped, other than the hush flash.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

## Detector Inspector, wired alarm

**Result.** Found in a manual.

**Model.** The sheet is the generic mains page. It does not name a model number. Mains power is 220-240 V AC. The backup is a non-removable long-life battery.

**Source.** Help page https://help.detectorinspector.com.au/hc/en-au/articles/4407173602959-Smoke-alarm-user-manual-Generic-Main-with-Long-life-Battery-Backup and the PDF linked on that page https://help.detectorinspector.com.au/hc/en-au/article_attachments/4407173664271

**Sheet line.** "If the alarm sounds, and it is not being tested, it means the unit detected smoke."

**Signals.** The alarm sound means the unit detected smoke when nobody is testing it.

The sheet says that sound needs immediate attention and action.

The alarm sound means a dangerous situation when the test button has not been pushed.

During a test, the tested alarm sounds as though smoke is present.

A press of the test button should make an audible alarm, and the sheet says that sound confirms proper operation.

The sheet says the unit resumes normal operation after a 10 minute silence.

The help page says slave alarms sound a few moments after the tested alarm during a test.

The PDF on that page says any interconnected alarms sound after those few moments.

**Manual is silent on.** The sheet does not name a light colour. The sheet does not give a flash rate. The sheet does not give a chirp rate. The sheet does not give a separate light for silence or for the other alarms.

## Detector Inspector, wireless alarm

**Result.** Not found.

**Model.** No wireless manual on the Detector Inspector help site names a model. The user manual list has four generic sheets, and none is titled as a wireless alarm. The detachable 10 year lithium sheet does not name a model and does not say the alarm is wireless.

**Source.** User manuals list https://help.detectorinspector.com.au/hc/en-au/sections/4406874527631-User-manuals and help search https://help.detectorinspector.com.au/hc/en-au/search?query=wireless%20user%20manual and the detachable sheet https://help.detectorinspector.com.au/hc/en-au/articles/4407149271311-Smoke-alarm-user-manual-Generic-Detachable-10yr-Lithium

**Sheet line.** No line extracted.

**Signals.** Not found.

**Manual is silent on.** Not found.

## Emerald, wired alarm

**Result.** Found in a manual.

**Model.** EP-HYB-240-RF-10. The radio is built in. This is the 2023.11 user manual from the maker site. The same sheet covers battery power and 220 to 240 V AC mains.

**Source.** https://emeraldalarms.com.au/wp-content/uploads/2024/09/EP-HYB-240-RF-10-User-Manual_2023.11.pdf section OPERATION AND TESTING, ALARM MEMORY FUNCTION, and WRONG WIRING REMINDER.

**Sheet line.** "When the alarm detects smoke, the red LED will flash once per second"

**Signals.** The green light stays on when there is no smoke.

The red light flashes every 48 seconds when there is no smoke.

The sheet says that red flash means the alarm is active.

The red light flashes once per second when the alarm detects smoke.

The alarm sounds loudly at the same time.

The flashing light and the sound continue until the air is cleared.

The alarm chirps every 48 seconds with no light flash when there is a fault.

The alarm chirps once every 48 seconds, and the yellow light flashes once at the same time, when the battery is low.

The sheet says that low-battery warning continues for at least 30 days.

The red light flashes every 8 seconds during the reduced sensitivity silence cycle.

The sheet says that cycle lasts about 8 minutes.

The red light then goes back to one flash every 48 seconds.

The red light flashes 3 times every 48 seconds for 48 hours after the alarm has been triggered.

If the alarm is hardwired, that memory light is yellow.

The sheet says this memory flash means the alarm remembers a trigger.

The alarm chirps once every 2 seconds when the wiring is wrong.

A beep when the red light comes on means the alarm has been activated.

A fast red flash means the alarm is in pairing mode.

A beep and one light flash mean pairing succeeded.

The sheet says the triggered alarm is the one that starts alarming when locate is used on the separate Emerald Smoke Alarm Controller.

**Manual is silent on.** The sheet does not give a separate sound for the other alarms during a monthly test. The sheet does not name a colour for the single light flash that means pairing succeeded.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show. The sheet also says this alarm cannot communicate with other manufacturers' alarms. The sheet prints a six-press deactivation and a sequence that clears the wireless connection.

## Emerald, wireless alarm

**Result.** Found in a manual.

**Model.** EVO10RF. It is the battery alarm with built-in radio. The named sheet answered the signals job, so no other model was used.

**Source.** https://emeraldalarms.com.au/wp-content/uploads/2026/07/EVO10RF-User-Manual.pdf indication table and the operation, alarm memory, and E memory sections. The PDF did not give text. The words were read from the page pictures.

**Sheet line.** "Red LED flashes together with the Pulse alarm sound every 1 second"

**Signals.** The red light flashes once every 48 seconds in standby, and the sheet says the alarm is operating normally.

The sheet says standby makes no sound.

In fire alarm mode the red light flashes with the pulse alarm sound every 1 second.

The sheet says that means smoke was detected, and the sound is the pulse alarm sound.

The operation section also says the red light flashes once per second and the alarm sounds loudly until the air is cleared.

In test mode the red light flashes with the pulse alarm sound every 1 second until the button is released.

A yellow light once every 48 seconds and one beep mean the battery voltage is below the threshold.

The sheet says that low-battery warning lasts at least 30 days.

A yellow light twice every 48 seconds and two beeps mean a fault in the alarm signal.

A red light once every 8 seconds, with no sound, means silence mode for about 8 minutes.

A red light once every 48 seconds, with no sound, means no disturb mode for about 10 hours during a low-battery warning or a fault.

The sheet says the warning chirp resumes after that period.

No light, with two quick beeps per second, means another alarm triggered this one by radio.

The red light flashes 3 times every 48 seconds, with no sound, when the alarm was triggered within 72 hours.

The sheet says that memory lasts 72 hours, and that turning the alarm off during those 72 hours returns it to standby once it is activated again.

Each red flash and each beep in the lifetime history means one past alarm trigger.

The sheet says that history can hold up to 20 triggers.

No red flash and no beep in the E memory check mean no previous event.

One red flash and one beep mean a previous low battery.

Two red flashes and two beeps mean a previous fault.

Three red flashes and three beeps mean an alarm was triggered.

The sheet says that E memory clears after 14 days, or after the alarm is deactivated and activated again, and that the memory resets an hour after it is activated again.

The troubleshooting guide says the red flashing light identifies the triggered alarm when the other alarms are sounding and there is no fire.

**Manual is silent on.** The sheet does not name a green light. The sheet does not say the memory light changes colour on mains power. The sheet does not give one press timing for the E memory check. The indication table says two presses within 1 second. The E memory section says twice within two seconds.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show. The sheet also says this alarm cannot communicate with other manufacturers' alarms. The sheet prints a deactivation with no alarm functions, and a sequence that clears the wireless connection.

## Emerald, remote

**Result.** Found in a manual.

**Model.** EP-SA-CONT-RF, the Emerald Smoke Alarm Controller. The maker site has a 2022.05 file and a 2022.11 file for this model. This note uses the 2022.11 file because it is the later sheet. The controller uses a CR2450 battery and connects by radio to Ranger and Vulcan alarms that have an RF module.

**Source.** https://emeraldalarms.com.au/wp-content/uploads/2024/09/EP-SA-CONT-RF-User-Manual_2022.11.pdf sections SMOKE ALARM CONTROLLER FUNCTIONALITY, INSTALLATION AND ACTIVATION, and TROUBLESHOOTING.

**Sheet line.** "In the event of a fire, the ALARM INDICATOR will flash twice per second."

**Signals.** The alarm indicator flashes twice per second in a fire.

Every interconnected alarm beeps for 7 seconds when the controller runs a test.

The sheet says one silence press turns that test off.

Locate silences every alarm except the activated one.

Silence stops every interconnected alarm for 8 minutes.

The sheet says that silence can be slightly late if the alarm is part way through its sound.

The yellow light flashes once every 8 seconds when the controller battery is low.

The troubleshooting table says that same yellow flash means the controller battery should be changed.

The red light and the yellow light flash together when the controller is activated and ready for pairing.

The sheet treats a test press with no red flash as no reaction.

**Manual is silent on.** The 2022.11 sheet does not name a light for locate. It does not name a light for the end of test mode. It does not name a light that means pairing succeeded.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show. The sheet has a locate control. Locate silences every alarm except the activated one. The sheet also tells you to clear every alarm stored on the controller.

## GT, wired alarm

**Result.** Found in a manual.

**Model.** GT240. The same sheet also covers the GT240L.

**Source.** GT240 user's manual. https://gtsmokealarms.com.au/wp-content/uploads/2025/05/GT240-MANUAL.pdf pdftotext returned no text from this PDF. The lines below are from the rendered pages of that file.

**Sheet line.** "beeps with red LED indicator flashing once per second."

**Signals.** A red flash once at power on means the alarm has powered up.
A green light that stays on means standby.
A red light that flashes once per second means alarm.
A yellow light that flashes twice per minute means a sensor fault.
A yellow light that flashes once per minute means a low battery backup fault.
When the smoke reaches the alarm point, the light flashes and the buzzer beeps at 85 dB.
On the alarm that starts an interconnected alarm, the red light flashes once per second while that alarm beeps.
After several seconds the other alarms flash red and beep.
Pressing Test/Silence mutes the sound, and the alarm stays in silence for 9 minutes.
On an interconnected alarm, pressing Test/Silence on the alarm that started it silences every alarm in the set.
Pressing Test/Silence on any other alarm silences only the alarm that was pressed.
A single test flashes the red light once with a short beep, then the buzzer beeps 3 times while the red light flashes 3 times, for two cycles.
On an interconnected test, the alarm you hold beeps continuously and its red light flashes.
The other alarms beep, and their lights flash red and yellow in turn.
When the button is released, the alarm you held stops flashing and beeping, and the other alarms stop the test soon after.
When the battery voltage is lower than a certain threshold, the light flashes and the buzzer beeps every minute until the battery is depleted.
A red flash with one beep every 60 seconds means the alarm is in a low battery condition.
If the alarm chirps intermittently, clean it.

**Manual is silent on.** The flash rate on the other alarms during a real alarm.
A red flash that stays after the alarm to mark the alarm that started it.
The light during the 9 minute silence.
Whether the alarm sounds again after silence if smoke is still there.
What light or sound an infrared remote makes.
The sheet only says silence by any working infrared remote controller is supported.
A sound for the yellow sensor fault.
Whether the yellow low battery fault and the red beep every 60 seconds are the same fault.
A separate end of life pattern.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

## GT, wireless alarm

**Result.** Found in a manual.

**Model.** GT10RF+.

**Source.** GT10RF+ user's manual. https://gtsmokealarms.com.au/wp-content/uploads/2026/04/User-Manual_GT10RF.pdf pdftotext returned no text from this PDF. The lines below are from the rendered pages of that file.

**Sheet line.** "Red LED flashes once per second"

**Signals.** A green light that flashes once per minute means standby.
A red light that flashes once per second means alarm.
A red light that flashes twice per minute means a fault.
The buzzer is 85 dB at 3 metres.
When the smoke reaches the alarm point, the light flashes and the buzzer beeps at 85 dB.
In an interconnected alarm, every alarm beeps and the red alarm lights flash.
Pressing Test/Silence mutes the sound, and the alarm stays in silence for 9 minutes.
If smoke is still present, the alarm sounds again after 9 minutes.
Any working infrared remote pauses the alarm for 9 minutes, and the alarm then leaves silence.
On an interconnected alarm, pressing Test/Silence on the alarm that started it silences every alarm.
Pressing Test/Silence on any other alarm silences only that alarm.
A single test flashes the red light once with a short beep, then the buzzer beeps 3 times while the red light flashes 3 times, for two cycles.
On an interconnected test, the alarm you hold beeps continuously and its red light flashes.
The other alarms beep, and their lights flash red and green in turn.
Those other alarms leave the test after a few seconds.
When the battery voltage falls below a certain threshold, the light flashes and the buzzer beeps every minute until the battery is depleted.
A red flash with one beep every 60 seconds means a low battery, and the alarm should be replaced.
If the alarm chirps intermittently, clean it.

**Manual is silent on.** A red flash that stays after the alarm to mark the alarm that started it.
The light during the 9 minute silence.
A sound for the fault light that flashes twice per minute.
A power on light in the indicator list.
A separate end of life pattern.
The flash rate on the other alarms, beyond the red alarm light named in the indicator list.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

## GT, remote

**Result.** Not found.

**Model.** GT-REMOTE. The maker lists it as the wireless interconnected alarm controller. The installation manuals page does not link a GT-REMOTE manual, and the site media list has no manual PDF for it.

**Source.** Product page. https://gtsmokealarms.com.au/product/gt-remote/ Installation manuals page. https://gtsmokealarms.com.au/installation-manuals/ Product picture. https://gtsmokealarms.com.au/wp-content/uploads/2026/04/GT-REMOTE.png The GT240 and GT10RF+ sheets opened above describe an infrared remote on the alarm. They do not describe this controller.

**Sheet line.** "Individual fire, CO and fault indicators"

**Signals.** Not found.
The product page names separate fire, CO, and fault indicators.
The product picture prints Fire, CO, and Fault on the face, and Test and Locate on the lower face.
The page does not say the colour, the flash, or a sound for any of them.

**Manual is silent on.** The colour and the flash of the fire, CO, and fault indicators.
Any sound from the remote.
What Test, Locate, and Silence do to those lights.
The page says Locate silences every interlinked alarm except the one that started the alarm.
The page says Silence mutes all interlinked alarms.
The page says Test tests all interlinked alarms from this one unit.

## Legrand, wired alarm

**Result.** Found in a manual.

**Model.** Cat. No. 643088. The sheet calls it a mains powered alarm with wired or wireless interconnect.

**Source.** Legrand sheet for 643088. https://assets.legrand.com/pim/NP-FT-GT/INST%20SMOKE%20643088%20LE13408AE.pdf

**Sheet line.** "Only the originating smoke alarm will have a flashing RED LED."

**Signals.** A green light that stays on means the alarm is connected to 240 V AC.
A green light that is off means the alarm is not connected to 240 V AC.
Only the alarm that started the event has a flashing red light.
Smoke on a wired unit shows a red light flashing 3 times every 4 seconds, for one cycle, and that pattern repeats, with 3 beeps every 4 seconds, for one cycle, and that pattern repeats.
Smoke on a wireless unit shows a red light flashing 3 times every 4 seconds, for one cycle, and that pattern repeats, a blue light flashing once every 4 seconds, and 3 beeps every 4 seconds, for one cycle, and that pattern repeats.
An interconnect started by a wireless unit shows a blue light flashing once every 4 seconds and 3 beeps every 2 seconds, for one cycle, and that pattern repeats.
The sheet marks no light for an interconnect started by a wired unit.
That case is 3 beeps every 2 seconds, for one cycle, and that pattern repeats.
A red light that flashes once every 300 seconds means normal standby.
A red light that flashes once every minute, with a single beep every minute, means low battery and end of life.
A chirp once every minute means the battery is flat and the unit needs to be replaced.
A single red flash followed by 3 red flashes means the battery is activated.
A solid blue light means this alarm is the master.
A blue light that flashes twice every second means a slave is searching for the network.
A blue light that flashes once every second means a slave is connected to the network.
A blue light that flashes fast for 90 seconds means the master is leaving pairing mode.
On the unit you test, the red light flashes 3 times every 4 seconds, for one cycle, and the buzzer beeps 3 times in 4 seconds, for one cycle.
The test table says that pattern repeats until the button is released.
The indication table lists those same test beeps as one cycle.
On another radio alarm in that network test, the blue light flashes once every 4 seconds and stays on for 3 minutes, and the sound is 3 beeps in 2 seconds until the button is released.
On another wired alarm in that network test, the sheet marks the lights as not used, and the sound is 3 beeps in 2 seconds until the button is released.
The indication table lists the radio unit being tested as a blue flash once in 4 seconds with 3 beeps in 4 seconds, for one cycle, and no red light.
A solid blue light means the network range test is in master mode, and that mode times out in 9 minutes.
After 30 seconds the other radio alarms show a slow blue flash, and that flash times out in 9 minutes.
When that test closes, the master blue light flashes fast and the blue lights on the other alarms turn off.
Closing can take up to 90 seconds.
The siren is louder than 85 dB at 3 metres.

**Manual is silent on.** A light or a sound for hush.
Pressing the Hush button on the triggered alarm desensitizes it for 20 minutes.
After a Hush/Test button test, the alarm is desensitized for about 20 minutes.
A red flash that continues after the alarm has stopped.
The sheet does not give that later flash a time of its own.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

## Legrand, wireless alarm

**Result.** Found in a manual.

**Model.** Cat. No. 643091. The sheet calls it a 10 year lithium battery alarm with wireless interconnect.

**Source.** Legrand sheet for 643091. https://assets.legrand.com/pim/NP-FT-GT/INST%20SMOKE%20643091%20LE13570AE.pdf

**Sheet line.** "If the unit gives a chirping sound once every minute, it indicates that the battery is flat and the unit needs to be replaced."

**Signals.** A green light that stays on means the alarm is connected to 240 V AC.
A green light that is off means the alarm is not connected to 240 V AC.
Only the alarm that started the event has a flashing red light.
Smoke on a wired unit shows a red light flashing 3 times every 4 seconds, for one cycle, and that pattern repeats, with 3 beeps every 4 seconds, for one cycle, and that pattern repeats.
Smoke on a wireless unit shows a red light flashing 3 times every 4 seconds, for one cycle, and that pattern repeats, a blue light flashing once every 4 seconds, and 3 beeps every 4 seconds, for one cycle, and that pattern repeats.
An interconnect started by a wireless unit shows a blue light flashing once every 4 seconds and 3 beeps every 2 seconds, for one cycle, and that pattern repeats.
The sheet marks no light for an interconnect started by a wired unit.
That case is 3 beeps every 2 seconds, for one cycle, and that pattern repeats.
A red light that flashes once every 300 seconds means normal standby.
A red light that flashes once every minute, with a single beep every minute, means low battery and end of life.
A chirp once every minute means the battery is flat and the unit needs to be replaced.
A single red flash followed by 3 red flashes means the battery is activated.
Before a test, the sheet says the alarm is activated when it shows 3 red flashes and it is on the mounting base.
A solid blue light means this alarm is the master.
A blue light that flashes twice every second means a slave is searching for the network.
A blue light that flashes once every second means a slave is connected to the network.
A blue light that flashes fast for 90 seconds means the master is leaving pairing mode.
On the unit you test, the red light flashes 3 times every 4 seconds, for one cycle, and the buzzer beeps 3 times in 4 seconds, for one cycle.
The test table says that pattern repeats until the button is released.
The indication table lists those same test beeps as one cycle.
On another radio alarm in that network test, the blue light flashes once every 4 seconds and stays on for 3 minutes, and the sound is 3 beeps in 2 seconds until the button is released.
On another wired alarm in that network test, the sheet marks the lights as not used, and the sound is 3 beeps in 2 seconds until the button is released.
The indication table lists the radio unit being tested as a blue flash once in 4 seconds with 3 beeps in 4 seconds, for one cycle, and no red light.
A solid blue light means the network range test is in master mode, and that mode times out in 9 minutes.
The other radio alarms show a slow blue flash in that test, and that flash times out in 9 minutes.
When that test closes, the master blue light flashes fast and the blue lights on the other alarms turn off.
Closing can take up to 90 seconds.
The siren is louder than 85 dB at 3 metres.

**Manual is silent on.** A light or a sound for hush.
Pressing the Hush button on the triggered alarm desensitizes it for 20 minutes.
After a Hush/Test button test, the alarm is desensitized for about 20 minutes.
A red flash that continues after the alarm has stopped.
Why this battery sheet's indication table includes a 240 V green light.
A wait before the slow blue flash on the network range test.
The wired sheet prints 30 seconds before that look.
This sheet does not.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

## Lifesaver, wired alarm

**Result.** Found in a manual.

**Model.** LIF6800. The same guide also covers 6800RL. These notes use the shared indication table and the model 6800 battery section. The 6800RL-only low battery line is not copied here.

**Source.** PSA Lifesaver user guide, section 1, section 9 Visual And Audible Indications, and section 11 Hush and memory. https://www.psaproducts.com.au/wp-content/uploads/2016/08/1398-7216-03_UG_LIF6800_AUS_2026_SAI_V4.pdf

**Sheet line.** "The red LED flashes every second during alarm."

**Signals.** The alarm pattern is three long beeps, a 1.5 second pause, and three long beeps repeating. The red LED flashes every second during alarm. On the initiating alarm the red LED flashes while the alarm sounds, and the table calls that flash continuous. The same guide also says the initiating red LED flashes rapidly during an alarm. A linked alarm that did not start the alarm still sounds the three long beeps, and its red LED stays off. A steady green LED means mains power is present. A green LED that is off means mains power is lost. One red flash about every 5 minutes, with no sound, means the alarm is normal and the self test passed. In hush the red LED flashes once every 10 seconds and there is no sound. Hush lasts about 9 minutes, and the later hush section says up to 9 minutes. If the smoke is not too dense, the initiating alarm and the linked alarms go quiet. Dense smoke overrides hush and the alarm sounds continuously. After an alarm, the initiating red LED flashes three times every 40 seconds. While the test button is held on that alarm, it chirps rapidly and the red LED flashes, and letting go resets the memory. The other alarms only go into a normal test. On model 6800 a low battery is a red flash every 5 minutes and one chirp every 40 seconds. The battery section says that chirp is about every 40 seconds for at least 30 days. A missing battery with mains still on also chirps about every 40 seconds. Low battery hush keeps the red flash every 5 minutes, stops the chirp, and lasts up to 8 hours. A chamber fault is a red flash every 5 minutes and three chirps every 40 seconds. On the battery test, a faulty battery module makes the alarm chirp every 40 seconds.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

**Manual is silent on.** An end of life chirp or flash. A yellow light. A blue light. A wireless fault light on the alarm. What the 6000THL remote light does, beyond naming that remote.

## Lifesaver, wireless alarm

**Result.** Found in a manual.

**Model.** LIF6000DCW. The cover calls it model 6000DCW.

**Source.** PSA Lifesaver 6000DCW user guide, section 1, section 2, section 10 Troubleshooting, and section 11 memory. https://www.psaproducts.com.au/wp-content/uploads/2016/08/0319-7203-02_6000DCW_manual_V3.pdf

**Sheet line.** "The red LED flashes every 0.5 seconds during alarm, on the initiating unit only"

**Signals.** The alarm pattern is three long beeps, a 1.5 second pause, and three long beeps repeating. During an alarm the red LED flashes every 0.5 seconds, and only on the alarm that detected the smoke. Standby has no light and no sound. Hush is a flash every 10 seconds and no sound, and it silences the alarm for about 10 minutes. The hush section says that quiet time is up to 10 minutes. Dense smoke overrides hush and the alarm sounds continuously. On a network of these alarms, hush on an alarm that did not start the event quiets every alarm except the one that did, for 2 minutes. A test flashes the LED every 0.5 seconds and sounds two sets of three long beeps on the linked alarms. The first test pattern is quieter. Holding the button longer than 5 seconds makes the full 85 decibel sound. Linked alarms can take up to 20 seconds to start. If nothing sounds, the guide says the battery is faulty or the alarm has failed. Low battery is a flash every 30 seconds and a chirp every 60 seconds, for at least 30 days. The button can silence that chirp for 24 hours, for up to 7 days. End of life is two flashes every 30 seconds. Before the end of life that light has no chirp. At the end of life the alarm gives two chirps every 30 seconds. An alarm fault is a flash every 10 seconds and a chirp every 30 seconds. A network fault flashes 1 second on and 1 second off for 15 minutes, then once every 30 seconds, with a chirp every 30 seconds. Five quick flashes before the test pattern means less than 15 months of life are left. No flashes on that check means the alarm is still good. Seven red flashes when the button is pressed mean a test fault, with a chirp every 30 seconds. Eight red flashes mean the EEPROM memory fault in that table, with a chirp every 30 seconds. Nine red flashes mean end of life, with two chirps every 30 seconds. Ten red flashes mean a chamber fault, with a chirp every 30 seconds. The row called MCU not operating has no light and a constant tone. After an alarm, the initiating red LED flashes three times every 40 seconds until test is pressed. Powering on gives one chirp, then the red LED is one second on and one second off. Two quick red flashes every 2 seconds, two soft beeps, and a sonar ping mean that alarm is the network coordinator and join mode is open. A tweedle, then three red flashes every 2 seconds, means that alarm has joined. When join mode closes, the red LED on each alarm turns off. When a linked alarm sounds, the red LED on the 6000THL remote blinks.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

**Manual is silent on.** A green light. A yellow light. How fast the remote red LED blinks. A sound from the remote.

## Matelec, wired alarm

**Result.** Found in a manual.

**Model.** DET-SMK/RF/AC/10. The same sheet also covers DET-SMK/RF/AC/1. The indication table is shared. No second model was needed.

**Source.** MATelec user manual, Operation, the function description table, Alarm memory, and Testing. https://cdn.sanity.io/files/1uk9rgzk/production/afb1ace1b2e24c23157a940dddca07893ef1a391.pdf

**Sheet line.** "The Red LED flashes every second with alarm sounding."

**Signals.** A green LED that stays on means mains power is connected. In standby the red LED flashes faintly every 48 seconds, and that means the alarm is working. When this alarm detects smoke it sounds a loud alarm and the red LED flashes every second until the smoke clears. A linked alarm that did not detect the smoke still sounds, and its red LED does not flash. After that linked alarm stops, its red LED flashes once every 1 second for 3 minutes. The alarm that triggered then flashes its red LED twice every 24 seconds for one week. That memory lasts 7 days from the last trigger. Taking the battery out pauses the memory and does not delete it. In hush the red LED flashes every 8 seconds. Hush lasts 10 minutes, and it works only on the alarm that was triggered. During a test the red LED flashes once every second while the alarm is sounding, until the button is released. After a short delay the other paired alarms sound for 10 seconds. When the test button is released those other alarms stop, and the red LED flashes for 3 minutes. The alarm that started the test sounds only at the first press, not together with the others. A low battery chirps and the red LED flashes once every 48 seconds. The battery note also says one low battery beep at 30 to 40 second intervals, and that this beep cannot be hushed. A fault is two beeps and two red flashes every 48 seconds, and the guide says the alarm may be faulty. If there is no wireless link, the red LED flashes twice every 8 seconds for 5 minutes after power up. End of life is a chirp and two red flashes every 48 seconds, and the guide says this starts after 10 years of work. Hush on a low battery warning quiets it for 10 hours and the red LED flashes once every 48 seconds. Hush on an internal fault quiets it for 10 hours and the red LED flashes twice every 48 seconds. In pairing mode the alarm LED stays solid red for 50 seconds from the last successful pair. After a new battery the red light flashes, and the alarm may chirp on and off, for about 10 minutes. The guide says that settling time is normal. One chirp every 48 seconds in the troubleshooting list means the battery is low.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

**Manual is silent on.** A blue light on this alarm. A yellow light. How often the red LED flashes during the 3 minutes after the test button is released. The test note gives the 3 minutes and does not give the rate.

## Matelec, wireless alarm

**Result.** Found in a manual.

**Model.** FSA-30000. This is the battery alarm. The mains sheet was not used for these signals.

**Source.** MATelec FSA-30000 user manual, the audio-visual guide, Hush, Memory, and the network light notes. https://cdn.sanity.io/files/1uk9rgzk/production/42f93af523a0386bd0063ca05a746bda9caa380f.pdf

**Sheet line.** "The RED LED will flash once every 8 seconds to indicate the smoke alarm is running in HUSH mode."

**Signals.** Normal running is a low intensity red flash every 40 seconds and no sound. A low battery is a red flash every 40 seconds and one chirp every 40 seconds. An internal fault is one chirp every 40 seconds. The audio-visual table shows no red flash for that fault. Hush is a red flash once every 8 seconds and no sound in the table. Hush lasts about 10 minutes. When this alarm detects smoke the red LED flashes every 1 second and the sound is a continuous alarm pattern. A paired alarm that did not detect the smoke has no red flash in that table. The sound cell says alarm twice, pause 1 second. A local test, while the button is held, is one red flash and one chirp. The install test also says the sound is three short beeps, a 1.5 second pause, and the same again, until the button is released. On a paired alarm during a wireless test, the table says the red LED flashes twice every 1 second for 5 minutes, and the alarm chirps twice every 1 second for 10 seconds. The wireless test steps say the front red LED flashes twice a second for 5 minutes, or until the control button is pressed again. The memory table says the red LED flashes twice every 20 seconds for up to 168 hours. The memory paragraph says the triggered alarm flashes twice about every 20 seconds for 72 hours. On the network light at the back, red means there is no network yet. Blue means that alarm is sending a pair request. Green for 3 seconds means the pair worked. After a good pair the master network light stays blue until another pair request. The blue light turns off when pairing mode ends.

**Flag.** Unconfirmed against the brief. Do not treat this as the interval to show.

**Manual is silent on.** An end of life light or chirp. A green light on the front in normal use. A yellow light.

## Matelec, remote

**Result.** Found in a manual.

**Model.** FSA-90000. The maker product page PDF is a features sheet and does not give these light timings. The notes use the user manual PDF, which names the same code and the MATelec address.

**Source.** MATelec Smoke Detector Remote Controller user manual, Controller Function Overview and Troubleshooting. https://www.sprintintercom.com.au/content/products/MTLFSA-90000/attachments/MTLFSA-90000_ds_1.pdf The features sheet that was also opened is https://cdn.sanity.io/files/1uk9rgzk/production/0786e9547587809166b4141c672430128eee56eb.pdf

**Sheet line.** "The LED indicator will remain on for 30 seconds, indicating it's in pairing mode."

**Signals.** In standby the LED flashes once every 40 seconds. In pairing mode the LED stays on for 30 seconds. A successful pair makes the LED flash briefly and then stay on. The red LED turning off means pairing mode has ended. After a test press the LED flashes for 8 seconds while the alarms activate, and the smoke alarms sound for 10 seconds. The LED then flashes for 5 minutes when that test worked. Hush makes the LED flash for 10 seconds, and the smoke alarms then stay quiet for 10 minutes. SOS makes the LED flash, and the smoke alarms then sound for 5 minutes. The LED turns off when locate is used to stop SOS. If the LED does not flash when test is pressed, the battery is in the wrong way or it is used up.

**Manual is silent on.** A beep from the remote. A light on the remote for locate. The colour of the standby flash. How fast the test, hush, and SOS flashes are.

## Red, wired alarm

**Result.** Found in a manual.

**Model.** R240P. This is the wired alarm named for this job.

**Source.** https://redsmokealarms.com.au/wp-content/uploads/2025/03/20241114-R240P-Manual-web1.pdf The indication table is on page 2. That page is a picture. The PDF text layer did not give the table. The lines below were read off the page.

**Sheet line.** "The red LED flashes once every 48 seconds to indicate the smoke alarm and battery are functioning correctly."

**Signals.** On battery only, the green light stays off and the red light flashes once every 48 seconds, with no sound. That means the alarm is standing by on the backup battery and still needs live mains.
With mains power on, the green light stays on and the red light flashes once every 48 seconds, with no sound. That means the alarm is standing by on 220 to 240 V mains and the backup battery.
In a fire the alarm sounds at 85 dB and the red light flashes rapidly until the air is clear. The chirp continues rapidly until the smoke is clear.
In a test the red light flashes rapidly in time with a rapid chirp. Both stop when the test button is released.
A low battery is one short chirp every 48 seconds, in time with one red flash every 48 seconds.
If one alarm's red light flashes every 4 seconds for 72 hours, with no sound, that alarm has been activated. It then returns to standby on its own.
A faulty unit gives two short red flashes every 48 seconds and two short chirps every 48 seconds.
A red light that flashes 3 times a second, with no sound, means the neutral is missing or the wiring is wrong.
A solid red light on the front means self-learn pairing mode. That light stays on for 2.5 minutes.
Five flashes of the red light on a joining alarm mean the wireless link succeeded.
A low battery chirp or a fault chirp stops for 10 hours after the Test/Hush button is held for 1 second. The light keeps working during that time. If smoke is sensed then, the red light flashes rapidly and the alarm chirps.

**Manual is silent on.** A counted rate for the rapid red flash in a fire or in a test. A red flash rate during the 10 minute hush.

**Flag.** The sheet prints a red flash every 4 seconds for 72 hours after an alarm. Unconfirmed against the brief. Do not treat this as the interval to show. The sheet also says how to clear pairing memory. Press the RF pairing button 5 times. The red light flashes 10 times and the alarm leaves the network.

## Red, wireless alarm

**Result.** Found in a manual.

**Model.** R10RF. This is the battery alarm with wireless connection named for this job.

**Source.** https://redsmokealarms.com.au/wp-content/uploads/2024/08/20241107-R10RF-Manual-A4-web.pdf

**Sheet line.** "a red LED indicator will flash ONCE A MINUTE and is an indication that the unit is operating properly."

**Signals.** When no smoke is present, the red light flashes once a minute. That means the alarm is working.
When the alarm detects smoke, the red light flashes rapidly and the alarm sounds loudly until the air is clear.
During hush the red light flashes every 10 seconds. That means sensitivity is reduced. The quiet period is 10 minutes. At the end of that period the alarm gives two short beeps and returns to normal.
A short beep once every 48 seconds means the battery is at the end of its life. That warning lasts at least 30 days.
If the red light does not flash every 48 seconds, the sheet says to replace the whole alarm. That line sits in the low battery section.
A solid red light means the alarm chosen as master is in self-learn pairing mode. That light stays on for 30 seconds.
Five red flashes on a joining alarm mean the wireless link succeeded.
A weekly test sounds a loud beep while the test button is held. The beep stops when the button is released.

**Manual is silent on.** A counted rate for the rapid red flash while smoke is present. Why standby says once a minute while the low battery lines also speak of a 48 second flash. What the other alarms show during a weekly test.

**Flag.** The sheet prints a red flash every 10 seconds during hush after the alarm has sounded. Unconfirmed against the brief. Do not treat this as the interval to show. The sheet also says how to clear pairing memory. Press the RF pairing button 5 times. The red light flashes 10 times and the alarm leaves the network.

## Red, remote

**Result.** Found in a manual.

**Model.** RACP. This is the wireless controller on the maker site. The older RAC was not used.

**Source.** https://redsmokealarms.com.au/wp-content/uploads/2025/05/RACP-Manual_20250619.pdf

**Sheet line.** "the red alarm LED on the controller will flash continuously, along with the orange locate LED."

**Signals.** All lights flash once when the battery tab is removed. That means the controller has turned on.
A solid orange locate light means master pairing mode. That light stays on for 150 seconds.
Five flashes of the orange locate light mean the controller has joined a master.
A solid green light means test mode. The test signal runs for about 150 seconds, and the paired alarms sound.
A green light that flashes once every 4 seconds means the controller battery is low.
The red alarm light and the orange locate light flash rapidly when a paired wireless smoke alarm detects smoke.
In locate mode the red alarm light and the orange locate light stay on. Only the alarm that detected the smoke keeps sounding. The other alarms stop. Locate mode lasts about 120 seconds.
After 20 seconds in locate mode the orange hush light starts flashing.
In hush the orange hush light stays on, the orange locate light goes off, and the red alarm light stays on. The triggered alarms stay quiet for 10 minutes.
If no smoke is detected after 48 seconds, all lights go off.
A solid orange hush light in silence mode means a paired alarm's single beep or double beep is quiet for 10 hours.
A solid orange Memory D light means Memory D mode, and it stays on for 150 seconds. A paired alarm with no past event makes no sound. One D sound means low battery. Two D sounds mean a fault. Three D sounds mean an alarm was triggered.
An orange Memory D light that flashes once every 4 seconds for 72 hours means a paired alarm has reported a low battery, a fault, or an alarm.

**Manual is silent on.** A counted rate for the rapid red flash during a fire. A sound made by the controller itself.

**Flag.** The sheet also says how to clear pairing memory. Press the RF pairing button 5 times. The orange locate light flashes 10 times and the controller leaves the network.

## Siterwell, wired alarm

**Result.** Found in a manual.

**Model.** GS519. This is the wired alarm named for this job. The opened file is maker document RD-519-39-001, Version A, 2018.04.20. ManualsLib did not open in this run.

**Source.** https://www.avantco.com.sg/GS519%20Smoke%20Alarm%20User%20Manual%20.pdf

**Sheet line.** "The flashing LED and pulsating alarm will continue until the test button is released or the air is cleared."

**Signals.** A green light that is on means the alarm is receiving mains power.
A green light that stays off when mains is on means the power connection needs a check. The trouble table says to check the AC terminal and the power cord.
The red light flashes every 32 seconds in standby. That means the alarm is working.
When the test button is pressed, or when the alarm senses smoke, the red light flashes once per second and the alarm sounds until the button is released or the air is clear.
The alarm pattern is a beep of 0.5 seconds, a pause of 0.5 seconds, a beep of 0.5 seconds, a pause of 0.5 seconds, a beep of 0.5 seconds, then a pause of 1.5 seconds, with the red light flashing. That pattern repeats.
In hush the red light flashes every 8 seconds. That quiet period is about 8 minutes.
A test after a battery change sounds 3 short beeps, then a 1.5 second pause, and repeats until the button is released. The alarm then enters hush for 8 minutes, with the red light flashing once every 8 seconds. After that it returns to standby and the red light flashes once every 32 seconds.
A low battery makes a chirp at the same time as a red flash, about every 32 seconds, for at least 30 days.
The base light flashes about every 10 seconds for at least 30 days. That means the base battery is low.
A chirp about every 32 seconds, with the alarm in fault mode, means a fault. The trouble table says to clean the alarm.
The red light on the base stays on for 2 minutes after the wireless test button is pressed 3 times within 2 seconds. That means learning mode started.
Three flashes of the light on the next base mean that alarm has joined.

**Manual is silent on.** A counted rate for the red flash inside the repeating beep pattern, beyond the once per second line. Whether a fault chirp has its own red flash.

**Flag.** The sheet prints a red flash once per second during an alarm, and a red flash every 8 seconds in hush. Unconfirmed against the brief. Do not treat this as the interval to show. The sheet also says how to leave the wireless network. Press the wireless test button 3 times within 2 seconds, then hold it until the red light flashes 5 times and goes off.

## Siterwell, wireless alarm

**Result.** Not found.

**Model.** No interconnected battery alarm was named for this app. GS525A was not used. It is a single alarm. The maker smoke list that opened has no interconnected battery smoke alarm. GS509A is a single 9 V alarm. GS886-H04 is a mains alarm. A GS511 product page names wireless networking and is not a user manual. A GS511 reprint opened with a broken specification table, and its PDF did not open.

**Source.** https://store.siterwellhome.com/pages/user-manuals and https://cdn.shopify.com/s/files/1/0755/5501/2901/files/GS509A_Product_User_Manual.pdf?v=1749008566 and https://cdn.shopify.com/s/files/1/0755/5501/2901/files/GS886-H04_Product_User_Manual.pdf?v=1750656976 and https://www.en.siterwellhome.com/product/GS511-57.html and https://manualspro.net/38849-siterwell-gs511-b-h61-smoke-alarm-user-manual

**Sheet line.** No line extracted.

**Signals.** Not found.

**Manual is silent on.** Not found.
