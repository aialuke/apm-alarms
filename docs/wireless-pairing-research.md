# Wireless pairing research

Review document for the technician. One wireless model per brand. Sources are manuals, official pages opened during research, and your confirmed field notes. Nothing here is copied into the app until you approve a brand's steps.

Shared rules that already stand in the product brief stay as they are. Pairing does not differ by model. You pair the whole set again. You cannot add one alarm to alarms that are already up. Factory reset and clearing all pairings stay out of the app. Your field notes win if a manual disagrees.

Remotes, wired alarms, RF modules, and cross-brand pairing are out of this pass.

## Status

| Brand | Result | Model checked |
|---|---|---|
| Anka | Found in a manual | AJ-765 |
| Brooks | Found in a manual | EIB650iRF |
| Cavius | Found in a manual | 2107 CAV10WF |
| Clipsal | Found in a manual | 755LPSMA4 |
| Detector Inspector | Owner field notes | Wireless alarm (no model named) |
| Emerald | Found in a manual, field method stands | EVO10RF |
| GT | Found in a manual | GT10RF+ |
| Legrand | Found in a manual | 643091 |
| Lifesaver | Found in a manual | LIF6000DCW |
| Matelec | Found in a manual | DET-SMK/RF/AC/10 |
| Red | Found in a manual | R10RF |
| Siterwell | Owner field notes | Wireless alarm (no model named) |

## Anka

**Result.** Found in a manual.

**Model.** AJ-765. Wireless interconnected smoke alarm on the Anka site. Pairing text is from the AJ-765 user manual republished with Arrowhead Alarm Products (NZ) contact details.

**Source.** [ANKA AJ-765 Auto Resetting Smoke Detector User Manual](https://manuals.plus/anka/aj-765-auto-resetting-smoke-detector-manual) (Manuals+ copy of the AAP-branded sheet). Anka product page: [AJ-765 Wireless Interconnected smoke alarm](https://www.anka-security.com/product/aj-765-wireless-interconnected-smoke-alarm/).

**Enter pairing mode.** Turn each alarm on. On every alarm first, press and hold the test button until the green light has flashed 4 times, then wait for 3 slow green flashes. That clears memory before pairing. On the master, press and hold the test button until the green light has flashed 3 times. The red light then flashes. That is pairing mode for up to 60 seconds.

**Join the other alarms.** On each other alarm, press and hold the test button until the green light has flashed 2 times. The red light flashes while it learns. The green light flashes 3 times when it has paired. Repeat for every other alarm.

**Confirmation.** Green light flashes 3 times on the joining alarm. Wait 60 seconds before testing. Then press the test button for less than 1 second on one alarm. The others should sound within 20 seconds.

**Time limit.** Pairing mode on the master is 60 seconds maximum.

**Add one or pair the whole set.** The sheet pairs the set from a cleared memory. It does not say you can add one alarm without clearing memory first.

**Flag.** The manual's path starts by clearing memory on every alarm. That is a clear-pairings step. The app still leaves clearing all pairings out. Anka's own blog also says orders before June 2024 may use an older protocol that does not match the newer tap-to-pair story. Confirm which protocol your units use before trusting either sheet.

**Manual is silent on.** A short tap count without a hold. Chirp wording for a successful join beyond the green flashes.

## Brooks

**Result.** Found in a manual.

**Model.** EIB650iRF. Photoelectric smoke alarm with RadioLINK+, sold by Brooks Australia. Pairing is on the pre-fitted EIB600MRF module.

**Source.** [RadioLINK+ Module EIB600MRF Instructions](https://www.brooks.com.au/index.cfm/_api/render/file/?method=inline&fileID=B2FF8F17-7130-404D-B25C1A0292B939FE). House Coding, pages 5–8.

**Enter pairing mode.** Press and hold the House Code button on the module until the blue light on the cover comes on, then release at once. The blue light flashes quickly, then stops. Attach the alarm to its mount. The blue light then flashes every 5 seconds.

**Join the other alarms.** Repeat the House Code button steps on every other alarm in the set.

**Confirmation.** Count the blue flashes on each module. The number of flashes matches the number of alarms in the set. After you leave house code, press the test button on any alarm. After a few seconds all the alarms should sound.

**Time limit.** House code ends by itself after 30 minutes. To end sooner, press and hold the House Code button on one alarm until the blue light stays on solid, then release.

**Add one or pair the whole set.** First setup house-codes every alarm. The manual also describes Remote House Coding to add one alarm later. That stays a note. It does not replace your rule that the whole set is paired again.

**Manual is silent on.** A counted number of presses. A hold time in seconds other than “until the blue light illuminates”. A chirp for house code.

## Cavius

**Result.** Found in a manual.

**Model.** 2107 CAV10WF. Wireless Family product on the Australian Cavius site. User guide model 2107-001.

**Source.** [CAVIUS Photoelectric Smoke Alarm user guide](https://www.cavius.com.au/wp-content/uploads/2026/02/2107-CAV10WF-2117-CAV10WF-User-Guide.pdf). Section 5, How to set up and connect alarms. Adding one alarm is section 11.

**Enter pairing mode.** Slide the switch on the back of each alarm to the Learn Mode position.

**Join the other alarms.** Press the button on the top of one alarm only. That alarm becomes the Master and sends a house code. The other alarms stay in Learn Mode and receive that code. The pairing section does not give the top button another name.

**Confirmation.** The Master’s red light flashes. Each other alarm flashes its light when it receives the house code. When every alarm is flashing the red light, they are connected. Switch them out of Learn Mode.

**Time limit.** Silent.

**Add one or pair the whole set.** You can add one alarm. Put the existing Master and the new alarm into Learn Mode. The guide says to repeat Section 4. In this guide, section 4 is “To access the smoke alarm,” and the pairing steps are in section 5. Flag that section pointer.

**Manual is silent on.** How many times to press the top button. How long to hold it. Any time limit. Any chirp when pairing works. How fast the light flashes.

## Clipsal

**Result.** Found in a manual.

**Model.** 755LPSMA4. Lithium battery photoelectric smoke alarm with wireless interconnect.

**Source.** Clipsal / Schneider Electric installation guide text as printed on the sheet ending `PHA7373102_01`, opened from a hosted copy of that guide: [755LPSMA4 installation guide PDF](https://1300smokealarms.com.au/wp-content/uploads/2025/07/Clipsal-755LPSMA4_Lithium_Battery_alarm_with_WI_Installation_Guide-1.pdf). Official Schneider pairing sheet title also exists as [GDE1349101](https://www.se.com/au/en/download/document/GDE1349101/) for the 755RFB2 base path. Direct clipsal.com PDF fetch was blocked in this session.

**Enter pairing mode.** Before mounting, choose one alarm as MASTER and apply the Master label. Treat the others as SLAVE. Use a flat-bladed screwdriver to switch the Master and all Slave alarms ON. Press the MASTER Test/Hush button 3 times in 2 seconds. The network light flashes blue for 30 seconds.

**Join the other alarms.** While the Master blue light is on, press each SLAVE Test/Hush button 3 times in 2 seconds. Repeat on every Slave.

**Confirmation.** The Slave network light flashes red or green for 3 seconds. Then both Master and Slave network lights flash green for a further 3 seconds.

**Time limit.** Master pairing window is 30 seconds, or until pairing succeeds.

**Add one or pair the whole set.** The sheet has a separate “Adding SLAVE alarms” path. That stays a note. It does not replace your rule that the whole set is paired again.

**Manual is silent on.** A chirp at the moment of a successful pair, beyond the network light colours.

## Detector Inspector

**Result.** Owner field notes. These stand for the app. No pairing sheet under the Detector Inspector name was found in the earlier lookup.

**Model.** Wireless alarm. No model name was given with the field notes.

**Source.** Owner field notes, supplied for this review document.

**Enter pairing mode.** Pick a master alarm. Press the test button 3 times within 2 seconds. The red light on the master stays on until pairing is finished.

**Join the other alarms.** On each additional alarm, press the test button 3 times within 2 seconds.

**Confirmation.** On each joining alarm, the red light turns green with one chirp. Then press the test button on the alarms to check they are connected.

**Time limit.** Silent in the field notes.

**Add one or pair the whole set.** Silent in the field notes. Your shared rule still stands. Pair the whole set again.

**Earlier lookup.** Detector Inspector help centre manuals are generic and do not give these presses. Keep the field notes.

## Emerald

**Result.** Found in a manual. Your confirmed field method stands.

**Confirmed field method.** Press TEST three times quickly, within 2 seconds. Emerald wireless instructions in the app use only what you have confirmed. Do not name older product names from earlier manuals.

**Model checked for the manual.** EVO10RF. Current Emerald wireless RF alarm on emeraldalarms.com.au.

**Source.** [EVO10RF User Manual](https://emeraldalarms.com.au/wp-content/uploads/2026/07/EVO10RF-User-Manual.pdf). Wireless Interconnecting Function.

**Enter pairing mode (manual).** Activate all alarms. Choose one as the Master. On the Master, press the TEST button three times within three seconds. The red light flashes quickly. That is pairing mode for 90 seconds. Press the button once to leave pairing mode.

**Join the other alarms (manual).** While the Master is in pairing mode, press the TEST button three times within three seconds on each other alarm. Pairing is successful when you hear a beep and see one red light flash. Repeat for the other alarms. Then press and hold the Master TEST button for up to 25 seconds to check the set.

**Confirmation (manual).** Beep and one red light flash on the joining alarm.

**Time limit (manual).** 90 seconds in pairing mode.

**Add one or pair the whole set (manual).** The manual describes pairing from a chosen Master. It does not clearly say you must pair the whole set again when adding one.

**Manual differs from field method.** The three TEST presses match. The time window does not. The manual says within three seconds. Your confirmed method is within 2 seconds. Your field method stands.

**Manual is silent on.** Re-pressing alarms that are already paired.

## GT

**Result.** Found in a manual.

**Model.** GT10RF+. Wireless interconnected smoke alarm on gtsmokealarms.com.au. Manual title uses GT10RF+.

**Source.** [User Manual GT10RF](https://gtsmokealarms.com.au/wp-content/uploads/2026/04/User-Manual_GT10RF.pdf). Section 4, Interconnection Instructions.

**Enter pairing mode.** On the first alarm, press the Test/Silence button four times, with about 1 second between presses. The red light flashes slowly. That is receiving mode.

**Join the other alarms.** On the next alarm, press the Test/Silence button twice. The red light flashes quickly. That is transmission mode. To add more, put a connected alarm into receiving mode again and put the new alarm into transmission mode.

**Confirmation.** The joining alarm’s red light turns off, it beeps once, and the green light flashes continuously.

**Time limit.** Silent in the opened pages.

**Add one or pair the whole set.** The manual describes adding more alarms to a set that is already connected. That stays a note. It does not replace your rule that the whole set is paired again.

**Manual is silent on.** An exact countdown window for receiving mode. A maximum wait before the four-press window fails.

## Legrand

**Result.** Found in a manual.

**Model.** Cat. No. 643091. Surface mount photoelectric smoke alarm, 10 year lithium, wireless interconnectable. Official Legrand instruction sheet.

**Source.** [INST SMOKE 643091 LE13570AE.pdf](https://assets.legrand.com/pim/NP-FT-GT/INST%20SMOKE%20643091%20LE13570AE.pdf). Internal RF Network Setup.

**Enter pairing mode.** Attach brackets so the alarms power on. Choose one alarm as the MASTER. Hold down the Network button and count 6 to 8 flashes of the blue light, then release. Solid blue light. Master mode times out in 9 minutes.

**Join the other alarms.** On each Slave, hold the Network button and count 3 to 4 flashes of the blue light, then release. Fast blue flashes mean it is scanning. Slow blue flashes mean it is connected. To leave pairing, go to the Master, hold the Network button, count 2 to 3 blue flashes, then release.

**Confirmation.** Slow blue flashes on a Slave when connected. When closing, the Master flashes blue quickly and Slave blue lights turn off. Closing can take up to 90 seconds. Do not use the alarm until the Master stops flashing.

**Time limit.** Master mode times out in 9 minutes. Closing pairing can take up to 90 seconds.

**Add one or pair the whole set.** The sheet has a table for adding a smoke alarm to an existing RF network. That stays a note. It does not replace your rule that the whole set is paired again. The sheet also has a factory reset path. That stays out of the app.

**Manual is silent on.** A chirp when a Slave joins. A printed button name other than Network button for pairing.

## Lifesaver

**Result.** Found in a manual.

**Model.** LIF6000DCW. PSA Lifesaver wireless RF interlink smoke alarm.

**Source.** [Smoke Alarm with RF Interlink User Guide, Model 6000DCW](https://www.psaproducts.com.au/wp-content/uploads/2016/08/0319-7203-02_6000DCW_manual_V3.pdf). Sections 6.1 and 6.2.

**Enter pairing mode.** The cover button is printed TEST AND HUSH. On a new set, mount the first alarm, then press the button twice. On a set already paired, press the button twice on any alarm in the network. FAQ wording is “two quick button presses”.

**Join the other alarms.** Mount each other alarm. A new alarm that was reset may need two button presses so it enters Join Mode. Close Join Mode with two button presses on the last alarm, or on any alarm when adding.

**Confirmation.** Join Mode open: two soft beeps, red light flashes twice quickly every 2 seconds, and a sonar ping. Each joining alarm makes a Tweedle, then the red light flashes three times every 2 seconds.

**Time limit.** Join Mode times out in 15 minutes.

**Add one or pair the whole set.** Section 6.2 says you can add another 6000DCW to an existing network. That stays a note. It does not replace your rule that the whole set is paired again.

**Manual is silent on.** Seconds between the two presses. How long the sonar ping lasts.

## Matelec

**Result.** Found in a manual.

**Model.** DET-SMK/RF/AC/10. Mains photoelectric alarm that pairs by radio with other Matelec RF alarms. The same Pairing Wirelessly section also names DET-SMK/RF/AC/1. Say if this is not the battery wireless unit you use on jobs.

**Source.** [User Manual, Smoke Detector Photoelectric 240Vac c/w Back-Up Battery](https://cdn.sanity.io/files/1uk9rgzk/production/afb1ace1b2e24c23157a940dddca07893ef1a391.pdf). Page 4, Pairing Wirelessly.

**Enter pairing mode.** Turn the alarms on. Choose one as the master. Press the TEST button on that alarm 3 times within 2 seconds. The alarm light stays solid red.

**Join the other alarms.** While the master pairing light is still on, press the TEST button on each other alarm 3 times within 2 seconds. When done, hold the TEST button on the master until the red light turns off.

**Confirmation.** The master and the other alarm each give 1 short chirp, and the other alarm’s light goes out.

**Time limit.** 50 seconds from the last successful pairing.

**Add one or pair the whole set.** Silent.

**Manual is silent on.** Adding one alarm to alarms already paired. Pairing the whole set again. A failed pairing.

## Red

**Result.** Found in a manual.

**Model.** R10RF. Wireless interconnected photoelectric smoke alarm on Red Smoke Alarms’ Australian site.

**Source.** [R10RF Product Manual](https://redsmokealarms.com.au/wp-content/uploads/2024/08/20241107-R10RF-Manual-A4-web.pdf). Wireless Connection Setup Guide.

**Enter pairing mode.** Fit the mount and turn the alarm on. On the rear of the alarm you choose as the master, press and hold the RF Pairing button for at least 5 seconds until the red light on the front stays on. That is self-learn pairing mode. Press the RF Pairing button once to leave pairing mode.

**Join the other alarms.** While the master’s red light is on, press the RF Pairing button on the next alarm 2 times quickly. Do the same for each other alarm within 2.5 minutes. If the window has closed, put the master into pairing mode again.

**Confirmation.** The joining alarm’s red light flashes 5 times. After pairing, press and hold the master’s Test/Hush button for up to 30 seconds. The interconnected alarms sound.

**Time limit.** The light stays on for a 30 second window. Join the other alarms within 2.5 minutes.

**Add one or pair the whole set.** The manual says to use an existing alarm as the master and the new alarm as the one that joins. That stays a note. It does not replace your rule that the whole set is paired again.

**Manual is silent on.** A chirp when an alarm enters pairing mode or joins. Any gap between the two presses other than “quickly”.

## Siterwell

**Result.** Owner field notes. These stand for the app. No official Australian pairing manual was found in the earlier lookup.

**Model.** Wireless alarm. No model name was given with the field notes.

**Source.** Owner field notes, supplied for this review document.

**Enter pairing mode.** Press the test button 3 times on the front. Turn the alarm over. A green light on the back means it is in pairing mode. That light then changes to blue while it searches for other alarms.

**Join the other alarms.** On each additional alarm, press the test button 3 times.

**Confirmation.** When the master connects, its light turns green. Each additional alarm also shows a green light on the back when connected. Then press the TEST button on the alarms to check they are connected.

**Time limit.** Silent in the field notes.

**Add one or pair the whole set.** Silent in the field notes. Your shared rule still stands. Pair the whole set again.

**Earlier lookup.** Manufacturer and store pages were opened. No official Australian pairing sheet was found. Keep the field notes.

## Notes for your review

1. Several manuals say you can add one alarm later. Brooks, Cavius, Clipsal, GT, Legrand, Lifesaver, and Red. Your field rule still stands. Pair the whole set again.
2. Emerald’s manual window is 3 seconds. Your confirmed method is 2 seconds. Keep your method.
3. Anka’s sheet clears memory before pairing. Do not put that clear step into the app unless you decide otherwise later.
4. Matelec’s opened manual is a mains RF model. Confirm it is the right unit shape for your wireless jobs.
5. Detector Inspector and Siterwell now have your field notes. No model name was given for either. Say if a model name should sit on those pages.
