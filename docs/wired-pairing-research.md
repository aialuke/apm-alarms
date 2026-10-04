# Wired pairing research

Source notes for the technician. One mains model per brand. Sources are manuals and official pages opened during this pass. This file is not a page on the phone. The wired steps for six brands are in the app. Anka, Brooks, Detector Inspector, GT, Lifesaver, and Red are not.

A wired alarm here is a mains alarm with a backup battery. Pairing means the radio learn steps. A three-core hard-wire link is not pairing. A plug-in RF module or a wireless base is not pairing for this pass.

Shared rules that already stand in the product brief stay as they are. You pair the whole set again. You cannot add one alarm to alarms that are already up. Factory reset and clearing all pairings stay out of the app. Your field notes win if a manual disagrees. No wired field notes were supplied for this pass.

Remotes, RF modules, battery wireless alarms, and cross-brand pairing are out of this pass.

## Status

| Brand | Result | Model checked | In the app |
|---|---|---|---|
| Anka | Not found | AJ-710MR-9 | No |
| Brooks | Not found | EIB3016 | No. Radio is the EIB3000MRF module, sold separately. |
| Cavius | Found in a manual | 2203 CAVMP | Yes. Learned off the base, before mains power. The hold is until the beep. |
| Clipsal | Found in a manual | 755WSA | Yes. Primary and Secondary. The Standby light, not the blue network light. |
| Detector Inspector | Not found | Generic mains sheet | No |
| Emerald | Found in a manual | EP-HYB-240-RF-10 | Yes. The 5 second turn-on hold, the 90 second mode, and one press to leave early are on the page. The clear path is not. |
| GT | Not found | GT240 | No. Radio is the optional GT wireless module. |
| Legrand | Found in a manual | 643088 | Yes. Same Network button counts as the wireless page, plus the 9 minute join on each other alarm. |
| Lifesaver | Not found | LIF6800 | No. Radio is the optional 6000WB base. |
| Matelec | Found in a manual | DET-SMK/RF/AC/10 | Yes. The remote section is left out. |
| Red | Not found | R240P | No. Radio is the optional RFMOD. The pairing sentences did not extract from the official PDF. |
| Siterwell | Found in a manual | GS519 | Yes. The sheet is not hosted on an Australian site. The presses are on the page. |

## Anka

**Result.** Not found.

**Model.** AJ-710MR-9. 220-240 V photoelectric alarm with a replaceable 9 V backup. The maker table marks RF433 as fitted. AJ-710MR-3 is the same radio family with a sealed 3 V backup. The plain AJ-710M models are marked without RF433.

**Source.** [AJ-710MR-9 product data](https://www.anka-security.com/wp-json/wp/v2/product/16761). Product pages opened in the search and listed in `.audit/slices/wired-anka-brooks.md`. None of them state the radio presses. The Anka pairing blog does not name a mains model and does not give a press count.

**Enter pairing mode.** Not found.

**Join the other alarms.** Not found.

**Confirmation.** Not found.

**Time limit.** Not found.

**Add one or pair the whole set.** Not found.

**Manual is silent on.** Not found.

## Brooks

**Result.** Not found.

**Model.** EIB3016. 230 V photoelectric alarm with a 10 year rechargeable lithium backup. The same manual family covers EIB3024 and EIB3014.

**Source.** [EIB3024 / 3016 / 3014 instruction manual](https://www.brooks.com.au/index.cfm/_api/render/file/?method=inline&fileID=C45BB859-1433-4F6D-A84890FA10D63F9B), section 2.7 Interconnecting Alarms.

**Enter pairing mode.** Not found.

**Join the other alarms.** Not found.

**Confirmation.** Not found.

**Time limit.** Not found.

**Add one or pair the whole set.** Not found.

**Manual is silent on.** Not found.

**Flag.** The manual says a wireless link needs an EIB3000MRF SmartLINK module on each alarm, sold separately. That module is out of this pass. The house-code steps were not copied.

## Cavius

**Result.** Found in a manual.

**Model.** 2203 CAVMP, model 2203-002. Mains photoelectric smoke alarm. The Australian user guide says 110-230 V AC with a lithium CR2 backup, radio only, in the Wireless Family. The opened copy also prints part code 2901 CAVMPRK because it includes the recess kit. This is not the battery alarm 2107 CAV10WF.

**Source.** [2203 CAVMP user guide](https://www.cavius.com.au/wp-content/uploads/2026/02/2203-CAVMP-User-Guide-With-recess-kit.pdf). How to set up and connect alarms, and section 10, Add extra device. The later check is the test function.

**Enter pairing mode.** Learn on the backup battery. You do not connect the mains supply for this step. With the head off the power supply, slide the switch on the back to the Learn Mode position. The red light comes on. Put every alarm that should link into Learn Mode. Do not take the battery out during Learn Mode.

**Join the other alarms.** Press and hold the test button on one alarm only, until it beeps and the light flashes. That alarm is the master and sends a house code. Each other alarm flashes its light as it receives the code.

**Confirmation.** When every alarm flashes the red light, they are connected. Switch them out of Learn Mode and install them. After they are installed, press the test button on any alarm for at least 10 seconds. Connected alarms give a short beep and the light flashes every 8 seconds for 2 minutes.

**Time limit.** Silent.

**Add one or pair the whole set.** Section 10 says place all alarms into Learn Mode and repeat the learn steps. The sheet puts the whole set back into Learn Mode.

**Manual is silent on.** A time limit for Learn Mode. How long to keep holding the test button after the beep and the flash. The sound pattern of that learn beep.

## Clipsal

**Result.** Found in a manual.

**Model.** 755WSA. Clipsal Wiser smoke alarm, 240 V, with a backup battery. Alarm-to-alarm radio is 433 MHz. The presses below are that radio link. They are not the Wiser hub setup, and they are not the battery alarm 755LPSMA4. The ordinary 755PSMA5 head was not used. Its wireless path is the separate 755RFB2 base.

**Source.** [755WSA device user guide](https://download.schneider-electric.com/files?p_Doc_Ref=755WSA_WH_DUG_EN&p_File_Name=755WSA_WH_DUG_EN.pdf), document 755WSA_WH_DUG_EN. Section "Interconnecting devices without Wiser Hub". The all-alarm check is "Testing the interconnected device(s)".

**Enter pairing mode.** Turn the power switch to the I position on every alarm. Mark one alarm Primary with the label supplied. The others are Secondary. On the Primary, short press the Test/Hush button 3 times within 2 seconds. The Standby light stays on for 30 seconds. That is pairing mode. To leave early, short press Test/Hush 3 times on the Primary. Each of those presses is under 0.5 seconds. The Standby light turns off.

**Join the other alarms.** While the Primary Standby light is on, short press Test/Hush 3 times within 2 seconds on one Secondary. Repeat that on every other Secondary.

**Confirmation.** The Standby light blinks 3 times on the Primary and on that Secondary. The Primary Standby light then stays on again for 30 seconds. After setup, press and hold Test/Hush on any linked alarm for more than 10 seconds, until an alarm sounds on all the interconnected alarms.

**Time limit.** 30 seconds. The Primary Standby light stays on for 30 seconds, and it comes on again for 30 seconds after each Secondary joins.

**Add one or pair the whole set.** Each Secondary joins with the same 3 presses while the marked Primary is in pairing mode. The sheet has no separate add-one section. A later section shows how to disconnect one Secondary, and it says to leave the Primary in place. That disconnect stays a note.

**Manual is silent on.** A beep at the moment the 3 pairing presses succeed.

**Flag.** The same guide also shows how a 755WSA Primary can learn a 755LPSMA4 or a 755RFB2. Those are other units. They are not the wired-to-wired steps above.

## Detector Inspector

**Result.** Not found.

**Model.** The public help page is the unnamed Generic Main with long-life battery backup, 220-240 V AC. No model name is on that page.

**Source.** [Smoke alarm user manual, Generic Main with Long-life Battery Backup](https://help.detectorinspector.com.au/hc/en-au/articles/4407173602959-Smoke-alarm-user-manual-Generic-Main-with-Long-life-Battery-Backup). The page covers test and hush. It does not give radio learn presses. A hosted DI240I sheet was opened in the search. That sheet sends wireless to an optional plug-in DI240WI. No DI240WI pairing manual was opened.

**Enter pairing mode.** Not found.

**Join the other alarms.** Not found.

**Confirmation.** Not found.

**Time limit.** Not found.

**Add one or pair the whole set.** Not found.

**Manual is silent on.** Not found.

## Emerald

**Result.** Found in a manual.

**Model.** EP-HYB-240-RF-10. Hybrid smoke alarm, 220-240 V AC, with a 10 year non-replaceable 3 V lithium backup. The radio is built in. The pack is the alarm, the manual, screws, and the mounting plate. This is not EVO10RF, and it is not the slot-in module used on other Emerald mains alarms.

**Source.** [EP-HYB-240-RF-10 user manual](https://emeraldalarms.com.au/wp-content/uploads/2024/09/EP-HYB-240-RF-10-User-Manual_2023.11.pdf), footer 2023.11. Activation, then "SETTING UP WIRELESS CONNECTION".

**Enter pairing mode.** Activate each alarm first. Press and hold the Push to Test button for 5 seconds until the red light comes on, then release within 2 seconds. A beep means it is activated. On the central alarm, press the TEST button three times within two seconds. The red light flashes quickly. That is pairing mode for 90 seconds. Press the button once to leave pairing mode.

**Join the other alarms.** While the central alarm is in pairing mode, press the TEST button three times within two seconds on the other alarm. The sheet then says to repeat those two steps for each further alarm.

**Confirmation.** Pairing is successful when you hear a beep and see one light flash. The sheet does not say which alarm beeps, or what colour that flash is.

**Time limit.** 90 seconds. Press the button once to leave sooner.

**Add one or pair the whole set.** The written steps repeat the central press and the other-alarm press, up to the set you are pairing. The sheet does not say you can add one alarm later on its own.

**Manual is silent on.** Which unit beeps when a join succeeds. What colour the success flash is. Whether one 90 second window can take several alarms without repeating the central three-press. The written steps say to repeat both presses.

**Flag.** The same manual has a "DEACTIVATING WIRELESS CONNECTION" path. That is a clear. It stays out of the app. The three-press window in this mains manual is two seconds. The battery EVO10RF manual used three seconds. Your wireless page already uses two seconds. This file does not change that page.

## GT

**Result.** Not found.

**Model.** GT240. 240 V photoelectric alarm with a replaceable 9 V backup. GT240L is the same family with a rechargeable backup.

**Source.** [GT240 data sheet](https://gtsmokealarms.com.au/wp-content/uploads/2024/02/Data-Sheet-GT240.pdf). It says hard-wire interconnection, and wireless only with the optional GT wireless module. The GT240 user manual URL was opened in the search. This pass could not read pairing presses from it. [GT240 manual](https://gtsmokealarms.com.au/wp-content/uploads/2025/05/GT240-MANUAL.pdf).

**Enter pairing mode.** Not found.

**Join the other alarms.** Not found.

**Confirmation.** Not found.

**Time limit.** Not found.

**Add one or pair the whole set.** Not found.

**Manual is silent on.** Not found.

**Flag.** The data sheet's wireless path is the optional module. That module is out of this pass.

## Legrand

**Result.** Found in a manual.

**Model.** Cat. No. 643088. Surface mount photoelectric smoke alarm, 230-240 V, non-replaceable 10 year lithium backup, radio at 434.2 MHz. It can interconnect by wire or by radio, up to 20 units. The flush-mount 643089 sheet uses the same Table 4. 643091 was not used. It is the battery wireless alarm.

**Source.** [643088 instruction sheet](https://assets.legrand.com/pim/NP-FT-GT/INST%20SMOKE%20643088%20LE13408AE.pdf). Internal RF network setup, Table 4.

**Enter pairing mode.** Attach the brackets so the battery turns on. The red light flashes once, then 3 fast flashes. Choose one alarm as the master. Hold the Network button and count 6 to 8 flashes of the blue light, then release. The blue light stays solid. Master mode times out in 9 minutes.

**Join the other alarms.** On each other alarm, hold the Network button and count 3 to 4 flashes of the blue light, then release. Fast blue flashes mean it is scanning. Slow blue flashes mean it is connected. A slave join also times out in 9 minutes. If that happens, go back to the same master, or pick a unit already on the network as the new master.

**Confirmation.** To close, go back to the master, hold the Network button, and count 2 to 3 flashes of the blue light, then release. Fast blue flashes on the master mean the network is closing. Blue flashes on the other alarms turn off. Do not use the alarm until the master stops flashing. Closing can take up to 90 seconds. Then clip the alarm to the base and turn the 240 V circuit on. The green light stays on for mains power.

**Time limit.** Master mode times out in 9 minutes. A slave join times out in 9 minutes. Closing pairing can take up to 90 seconds.

**Add one or pair the whole set.** The sheet says to pair the RF units on the bench before the bases go on the ceiling. The heading "ADDING A SMOKE ALARM TO AN EXISTING RF NETWORK" says to follow Table 4 again to add a unit or replace an old one. That stays a note. It does not replace your rule that the whole set is paired again.

**Manual is silent on.** A beep for the learn presses. How long to wait between each other alarm, aside from the 9 minute time-out.

**Flag.** The sheet also has a factory reset. Hold the Network button for 20 flashes of the blue light, then release. That stays out of the app.

## Lifesaver

**Result.** Not found.

**Model.** LIF6800. 240 V alarm with a backup battery. LIF5800RF was also opened. It is a 240 V interconnectable alarm. Its opened pages describe terminal interconnection with other Lifesaver mains models. They do not state radio learn presses.

**Source.** [LIF6800 user guide](https://www.psaproducts.com.au/wp-content/uploads/2016/08/1398-7216-03_UG_LIF6800_AUS_2026_SAI_V4.pdf). Wireless interlink is listed as an optional wireless baseplate. [LIF5800RF manual](https://www.psaproducts.com.au/wp-content/uploads/2016/08/LIF5800RF-manual.pdf), interconnect section.

**Enter pairing mode.** Not found.

**Join the other alarms.** Not found.

**Confirmation.** Not found.

**Time limit.** Not found.

**Add one or pair the whole set.** Not found.

**Manual is silent on.** Not found.

**Flag.** The LIF6800 guide says wireless interconnection uses optional baseplate model 6000WB. That base is out of this pass. LIF6000DCW was not used. It is the battery wireless alarm.

## Matelec

**Result.** Found in a manual.

**Model.** DET-SMK/RF/AC/10. 240 V photoelectric alarm with a 10 year lithium backup and built-in radio. The same user's manual also covers DET-SMK/RF/AC/1, which has a 1 year alkaline backup. The pairing presses in the alarm-to-alarm section are the same for both.

**Source.** [User manual, Smoke Detector Photoelectric 240Vac](https://cdn.sanity.io/files/1uk9rgzk/production/afb1ace1b2e24c23157a940dddca07893ef1a391.pdf). "Pairing Wirelessly" under "System Interconnection". The PDF was opened again for this pass.

**Enter pairing mode.** Turn the alarms on. Pairing on battery, before they go on the ceiling, is what the sheet recommends. Pick one alarm as the only master. Press its TEST button 3 times within 2 seconds. The alarm light stays solid red. That master stays in pairing mode for 50 seconds, and for 50 seconds from the last successful join. Mark the master. The sheet does not state a sound for this press.

**Join the other alarms.** While the master light is still on, press TEST on the next alarm 3 times within 2 seconds. Do one alarm at a time. If the red light has gone out, do not start the next alarm.

**Confirmation.** The master and the other alarm each give 1 short chirp, and the other alarm's light goes out. When every alarm is in, hold TEST on the master until the red light turns off. A later test is separate. Hold TEST for at least 5 seconds. After a short delay, the paired alarms sound for 10 seconds.

**Time limit.** 50 seconds from the last successful pairing.

**Add one or pair the whole set.** Pair the set in one session while the master light stays on. The alarm-to-alarm section does not give a separate add-one procedure.

**Manual is silent on.** A sound when pairing mode starts. A named way to add one alarm after the master has left pairing mode.

**Flag.** "Pairing wireless remote" is a later section for remote FSA-90000. That section is out of this pass. Its exit is 3 TEST presses. The alarm-to-alarm exit above is the hold until the red light turns off. Use the alarm section.

## Red

**Result.** Not found.

**Model.** R240P. 240 V photoelectric alarm with a 9 V alkaline backup. The cover says the RF module is optional.

**Source.** [R240P user manual](https://redsmokealarms.com.au/wp-content/uploads/2025/03/20241114-R240P-Manual-web1.pdf). The opened text says to add RFMOD for a wireless link, and a diagram label reads RF-Pairing button. The pairing sentences, press counts, and the time limit did not extract from that PDF.

**Enter pairing mode.** Not found.

**Join the other alarms.** Not found.

**Confirmation.** Not found.

**Time limit.** Not found.

**Add one or pair the whole set.** Not found.

**Manual is silent on.** Not found.

**Flag.** Other web copies describe pairing presses for R240P with RFMOD. Those pages were not opened, so no press count is written here. RFMOD is a module. Those presses would stay out of the step lines even if the official PDF had given them as text.

## Siterwell

**Result.** Found in a manual.

**Model.** GS519, also marked ST519. 220-240 V photoelectric alarm with a 9 V backup. The radio is in the mounting base, which has its own sealed 3 V CR123A cell. The learn control is the wireless test button on that base. The sheet says AS3786:2014 and AS/NZS 4268. No copy hosted on an Australian site was found.

**Source.** Maker sheet RD-519-39-001, Version A, 2018.04.20. Opened on [ManualsLib, page 3](https://www.manualslib.com/manual/2015367/Siterwell-Gs519.html?page=3) and [page 4](https://www.manualslib.com/manual/2015367/Siterwell-Gs519.html?page=4). The same wording was also opened from [Avantco, Singapore](https://www.avantco.com.sg/GS519%20Smoke%20Alarm%20User%20Manual%20.pdf). The ManualsLib pages are the cleaner copy.

**Enter pairing mode.** The alarm must already be in normal working mode. On one base, press the wireless test button 3 times within 2 seconds. That is learning mode. The red light stays on for 2 minutes. The sheet does not state a sound for this press.

**Join the other alarms.** While that first base light is on, press the wireless test button on the next base 3 times within 2 seconds. Repeat on each other base. Every unit learns to that same first unit.

**Confirmation.** The joining light flashes 3 times. The sheet does not state a beep for that flash. When the set is paired, press and hold the Test/Hush button for at least 10 seconds. The other radio-linked alarms should sound. The sheet says the radio link is not finished until that check is done on each unit.

**Time limit.** About 2 minutes. You can leave sooner by pressing the base button 3 times within 2 seconds. The sheet does not say the 2 minutes starts again after each alarm joins.

**Add one or pair the whole set.** Pair the set while the first unit's light is on. The sheet says the products can be learned again, and every unit must learn to the same first product. It does not give a separate add-one procedure.

**Manual is silent on.** A beep when a base joins. Whether the 2 minute light restarts after each join. The colour of the light on the joining base. It only says the light flashes 3 times.

**Flag.** This is not an Australian-hosted PDF. The learn button is on the base that comes with the GS519. That base is part of this alarm. It is not an optional base you buy on its own. Lifesaver stays Not found because its radio base, model 6000WB, is the optional kind. Confirm GS519 is the mains alarm you see on jobs before these presses are trusted.

## Decisions

1. Cavius, Clipsal, and Legrand describe a way to bring another alarm onto a master that is already chosen. Cavius puts every alarm back into Learn Mode. The shared rule still stands. Pair the whole set again. Those paths are notes in this file. They are not app steps.
2. Emerald's mains sheet uses three TEST presses within two seconds, then a 90 second pairing mode. The wireless page stays the field method only. The wired page has the 5 second turn-on hold, the 90 second mode, and one press to leave early. The clear path is not on the page.
3. Emerald's clear path and Legrand's 20-flash factory reset stay out, the same way clearing all pairings stays out of the wireless pages.
4. Matelec's alarm-to-alarm section is the one written above. The remote section in the same PDF is not.
5. Anka, Brooks, Detector Inspector, GT, Lifesaver, and Red are Not found for this pass. Brooks, GT, Lifesaver, and Red only show radio through a module or a base. Anka and Detector Inspector do not state the presses.
6. Siterwell is the one found sheet that is not on an Australian site. It waits on you before it is treated as a job manual.
