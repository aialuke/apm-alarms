# Remote research

Source notes for the technician. Brooks and Emerald only. The other brands' remotes are not in the app, so their notes were removed. Sources are manuals and official pages opened during this pass. This file is not a page on the phone. The phone shows a short Activation, Pairing and Use page for each.

Locate stays off. If a sheet describes a locate control, the note says so under Flag. That is not a request to show the Locate button.

Factory reset and clearing all pairings stay in Flag. They are not the pairing steps.

## Status

| Brand | Result | Model checked | In the app |
|---|---|---|---|
| Brooks | Found in a manual | EIB450 | Yes |
| Emerald | Found in a manual | EP-SA-CONT-RF | Yes |

## Brooks, remote

**Result.** Found in a manual.

**Model.** EIB450. The cover names model EIB450. The booklet is the single button Alarm Controller for RadioLINK fire and CO systems.

**Source.** Pages 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 21, 22, and 23 of the EIB450 instruction manual. https://www.brooks.com.au/index.cfm/_api/render/file/?method=inline&fileID=6505463F-8387-4065-880DBD6E7112367E

**Sheet line.** "The units will automatically exit house code after 30 minutes."

**Enter pairing mode.** Slide the switch on the back to the on position. The fire, battery, and CO indicators flash, then each segment lights red, then blue, then green, and then the lights go off. Press and hold the House Code button on the back until all segments light up blue, then release. The segments flash rapidly for a moment as house code starts.

**Join the alarm.** House code every other RadioLINK alarm and device in the system. The booklet does not give the button presses on those alarms. It says to use each unit's own manual, and to put each unit into house code in the place where it is installed. The specification table says 12 RF alarms per house code group.

**Confirmation.** Go back to the controller and check that all segments are flashing blue. The number of flashes equals the number of RadioLINK alarms and devices in the system. The booklet's example is 3 smoke alarms, 1 CO alarm, and the controller, which is 5 blue flashes. It can take up to 10 minutes before all of those flashes show. The pattern repeats every 5 to 10 seconds while the controller stays in house code. Walk the house and check that the other units flash the same count. To leave house code, press the House Code button, and release it when all the segments light up blue. The controller then sends an exit signal to the other units. The blue light goes off and the system returns to standby. That return can take 5 to 20 seconds, depending on how many units are in the system. After coding, the system will not communicate with RadioLINK alarms and devices outside the group. The page says not to remove the tamper pip until house coding is finished. After the controller is slid onto the mounting base, press the button until the TEST segment lights blue. All the alarms sound for a short period and then stop.

**Time limit.** The units leave house code by themselves after 30 minutes. The full blue flash count can take up to 10 minutes to appear. After a manual exit, the return to standby can take 5 to 20 seconds.

**What the controls do.** The overview lists the functions Test, Locate, and Silence. Press and hold the front button until the TEST segment lights blue. Release it when every alarm is sounding. The alarms stop after a period, and the TEST segment flashes blue when the test is complete. A walk round test takes the controller off its cradle and holds the button while each alarm is checked. The page says to test after installation, once a week, after a long time away, and after repair or electrical work. Locate silences every alarm in the system except the one sensing fire or CO. The timing for that press is under Flag. Silence is for the source alarm. Wait until the SILENCE segment is flashing red, then press the button. The segment turns blue. After a delay the alarms stop, and all segments flash green for a moment, which means standby. The fire indicator means a fire alarm has been activated. The CO indicator means a CO alarm has been activated. If the CO indicator is flashing, the page says to open doors and windows while leaving and to contact the authorities. The low battery indicator means the controller battery has reached the end of its life. If an alarm starts and then returns to standby unnoticed, the EIB450 flashes the fire icon or the CO icon rapidly for two minutes. After a CO alarm, the CO icon then flashes once every 60 seconds for 24 hours. Memory is only in the system diagnostic mode, and the page says it is not visible to the end user. It works with some RadioLINK alarms only. Press and release the MODE button on the back with a small screwdriver. All segments flash green and diagnostic mode starts. The long test in that mode sounds every alarm for 2 minutes. Wait 2 minutes before another test. The memory check in that mode sounds the alarm that was activated before. Hold the MODE button until the green segments start flashing, release it, and press the front button. The page says the locate alarm memory is then cleared. The page says diagnostic mode is for professional installation and maintenance staff, and not for the home owner or tenant.

**Manual is silent on.** The booklet does not give the house code button presses for the smoke alarms. It does not say how long the alarms sound on the normal controller test. It says a short period, or that they stop after a period. It does not describe an app.

**Flag.** The page has a locate control. Locate silences every alarm except the one sensing fire or CO. If the fire indicator is lit and there is no obvious fire, a press of the button changes the LOCATE segment from red to blue. After 10 to 40 seconds, every alarm stops except the source alarm. To reset the controller house code, press and hold the house code button. The segments flash blue briefly and then stay lit. After about 5 seconds they start flashing blue. Release the button then. The page says the controller has now been reset. Reset of the other RadioLINK units is left to their own manuals. The troubleshooting page says that if alarms are moved, return them to the factory settings and house code the system again. It points to each alarm's own instructions for that reset. Those reset presses are not written in the pairing lines above.

## Emerald, remote

**Result.** Found in a manual.

**Model.** EP-SA-CONT-RF. This is the 2022.11 smoke alarm controller user manual. The controller uses a CR2450 battery and connects by radio to Ranger and Vulcan alarms that have an RF module.

**Source.** Installation and activation, wireless interconnection, and the controller function panel in https://emeraldalarms.com.au/wp-content/uploads/2024/09/EP-SA-CONT-RF-User-Manual_2022.11.pdf

**Sheet line.** "Press the SILENCE button on the middle of the Smoke Alarm Controller 3 times within 2 seconds"

**Enter pairing mode.** Press and hold Silence for 5 seconds until the red LED and the yellow LED flash at the same time, then release. The controller is then ready for pairing. The controller only needs this the first time it is used. On the smoke alarm, press Push to test 3 times within 2 seconds until the red LED flashes. That flash means the smoke alarm is in pairing mode.

**Join the alarm.** Press Silence on the middle of the controller 3 times within 2 seconds. The sheet says that pairs the controller to the alarm network. Repeat that process for any other alarm or controller that should join this network.

**Confirmation.** Not found.

**Time limit.** Not found.

**What the controls do.** One press of Test makes every interconnected alarm beep for 7 seconds. One press of Silence turns that test off. One press of Silence silences every interconnected alarm for 8 minutes. The sheet says there may be a slight delay if the alarm is mid way through the alarming sequence. The Locate button is the control that silences every alarm except the activated one. In a fire the alarm indicator flashes twice per second. A low battery makes the yellow LED flash once every 8 seconds.

**Manual is silent on.** A sound or light that means the controller has joined. How long pairing mode stays open. A distance limit for the controller.

**Flag.** The sheet has a Locate button. That button silences every alarm except the activated one. Do not turn Locate on. The sheet also says the connected smoke alarms clear from the controller when Test and Locate are held together for 10 seconds, until the red LED flashes once, then released. That clear is not a pairing step.

