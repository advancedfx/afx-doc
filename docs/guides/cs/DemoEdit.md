---
title: DemoEdit
---

# DemoEdit

This has nothing to do with HLAE / MDT but documents a hidden game feature.

# About DemoEdit

DemoEdit is a native Half-Life 1 tool that allows several special effects that can be applied to recorded demos. Probably the most interesting one among those is the CAMPATH event that allows waypointed camera movement.

# Source Engine

This is very different from the way it is done in CS 1.6 / Half-Life.
There is a tutorial for Source users at the Valve Developers Wiki: [HL2/CS: S Demo recording Tools](http://developer.valvesoftware.com/wiki/Demo_Recording_Tools)
Also there is a good [German video tutorial](http://planet-movies.com/?7990).

Additionally HLAE's [[AfxHookSource]] provides the [[mirv_campath|Source:mirv_campath]] command.

# Supported HL1 Modifications

Generally you can use DemoEdit in all Half-Life 1 mods, but sadly the most important features (CAMPATHs, ...) only work in some of the mods:

CAMPATHs are instantly available in
* Counter-Strike 1.6 (cstrike)
* Counter-Strike Condition Zero (czero)
* Half-Life (valve)
* Team Fortress Classic (tfc)

**Don't worry if your mod is not listed above:** The [[mirv_campath|GoldSrc:mirv_campath]] command is coming to the rescue :-)

Mods that seem to have no DemoEdit CAMPATH support:
* Day Of Defeat (dod)
* Natural Selection (ns)


# CamPath video tutorial

The original _HL1 / CS 1.6 - DemoEdit CAMPATH tutorial_ was released on Creative-Movies.com ([http://cm.cdhoom.com/?p=browse&action=tutorials&id=43](http://cm.cdhoom.com/?p=browse&action=tutorials&id=43), [http://cm.cdhoom.com/?p=news&action=full&id=123](http://cm.cdhoom.com/?p=news&action=full&id=123)) in 2006/2007.

(If you search the web you will find better and newer video tutorials these days.)

In case the page should be down, here are some direct mirror links:

## English

* http://youtu.be/znUPFL35au4
* all other mirrors down

## French

* all mirrors down (available on request)

## German

* all mirrors down (available on request)

# Activating DemoEdit

This is covered in the CamPath video tutorial linked above.

Short description: Add <code>-demoedit</code> to the launch options of your mod.

# CAMPATH event - waypointed camera movement

This is covered in the CamPath video tutorial linked above.

**Note: On how to avoid stuttering / lagging of CAMPATHs / get them smooth see [[Camera is lagging or stuttering|GoldSrc:DemoEdit#camera-is-lagging-or-stuttering]].**

## Flags entry

The Flags entry allows to control the interpolation between two **successive** points (the current point and the next point).

The Flags entry of the _first_ CAMPATH point controls the camera movement as follows:

* **1** : start path (as shown in the video tutorial)
* **3** : start path + slow start
* **5** : start path + slow end to next point
* **7** : start path + slow start + slow end to next point

For any other points in the series:

* **0** : continue path (as shown in the video tutorial)
* **2** : continue path + start slow from current point
* **4** : continue path + end slow to next point
* **6** : continue path + start slow from current point + slow end to next point

### Examples

If you want CAMPATHs as in the video tutorial, then:
* the first CAMPATH point Flags entry has to be 1
* the Flags entry of all other points have to be 0

So if you have several points and want to start and end the whole path slowly, then:
* the first CAMPATH point Flags entry has to be 3
* the Flags entry of the second last one has to be 4
* the Flags entry of all other points (including the last one) have to be 0

Of course other combinations are possible (i.e. if you want it to go slow in-between).

# CAMPATH FAQ

## camera doesn't start moving

Most problems regarding the CAMPATH events are covered in the video itself already.

Here is a small checklist:

* make sure you have autodirector enabled (use GUI or the <tt>spec_autodirector</tt> console command toggle)
* make sure you are in FreeLook mode (use the GUI or the <tt>spec_mode 3</tt> console command)
* do not jump directly on the first CAMPATH event, instead jump some events or seconds before it and resume into the game before the first campath event is played
* make sure that no other events are in between the CAMPATH events of a CAMPATH series
* make sure the Flags entry of the first CAMPATH event is set to 1 and for the other events in the series set to 0
* your campath might be too long (you can have up to 15 points in one path), see [[Problems when splitting CAMPATHs|GoldSrc:DemoEdit#problems-when-splitting-campaths]] below
* some Half-Life mods i.e. Day Of Defeat seem to use an older Half-Life SDK version and therefore have no support for the CAMPATH events yet, however HLAE provides other tools, see [[Supported HL1 Modifications|GoldSrc:DemoEdit#supported-hl1-modifications]] above.

## Camera is lagging or stuttering

**Symptom:** Camera movement is not smooth, instead it seem to jump/skip by small amounts.

**Cause:** This is due to interpolation / timing correction code kicking in. Most of the time it happens because you set an ex_interp values too low when viewing HTLV demos.

**Workaround:**

**Try this first:**

Make sure you are viewing your demo with an appropriate ex_interp value that is not too low in order to avoid interpolation errors.
This means not lower than what the demo was recorded at (1/cl_updaterate) plus some extra margin. (If you know the setting of the player that recorded the demo and it's not too low already, then try that one).

Typical values:
* HLTV demos: <tt>ex_interp 0.05</tt> is fine for most ones.
* In-eye demos: <tt>ex_interp 0.02</tt> fine for many, depends on player settings, you may need higher values.

This means for most in-eye demos ex_interp 0.02 or higher is fine, while you will have to use 0.05 or higher for most HLTV demos.

**If nothing helps:**
 cl_fixtimerate 0

**If still nothing helps:**
 cl_clockreset 100000  

Those cl_fixtimerate and cl_clockreset values are by no means suitable for online play and should be used as a last resort only and may have unwanted side-effects.
We recommend to **restore the game's default values whenever you can**:
```
cl_fixtimerate 7.5
cl_clockreset 0.1
```

## Problems when splitting CAMPATHs

You might want to have a look using the -demoedit launch option and the viewdemo command at the cbble.dem that is included in the rar file (it contains all the changes that I have made to do the scenes in the movie (you can save back the changes to the demo you have made by simply using the Save button)).

Let Half-Life complete the loading of the HLTV demo then the FPS will get better and there will be a message in the console telling the loading has completed:
<tt>"Demo file completely loaded. Disconnected. Automatic connection retry"</tt>
This might take one to two minutes or so.

The scene I'll be talking about is located shortly after 23:30, so use the slider to jump to it.
Make sure you have Autodirector and Freelookmode enabled:<br />
![DemoEdit How to split 1](https://user-images.githubusercontent.com/3610128/63040465-ce456580-bec5-11e9-8d54-a4c85aed565a.jpg)

there you will see a series of CAMPATHs:
Screenshot:<br />
![DemoEdit How to split 2](https://user-images.githubusercontent.com/3610128/63040467-ce456580-bec5-11e9-8415-c23212079d85.jpg)

You will notice that all CAMPATH have set their flags to 0 except the two that have set it to 1, since the whole scene has been split into two campath series.
Also notice that there are no other events between the CAMPATH events (I have removed them).

Now lets take a look at the split (selecting the campath event and using the modify button):<br />
![DemoEdit How to split 3](https://user-images.githubusercontent.com/3610128/63040468-ce456580-bec5-11e9-94da-b96027c26185.jpg)

You will notice, that the time, camera position and angle (nearly) are the same. I have done this by jumping to the Campath (click on the event and use the GOTO button) where I needed to cut (since the scene would have to many waypoints otherwise (if this happens there is a console message)). Then I clicked add and selected Campath event and clicked GetView and Gettime. This produced two Campath events that were the same but both had flags zero. So I selected the lower one of the two and made its flag to 1 to tell Half-Life this would be a new campath. You can see all this on the 3rd screenshot.

This still results in one (but only one) wrong frame for me. (If you are quick you can notice that at the beginning in the movie, when the scene is shown the second time I have cut this single frame out of the movie).

# CAMERA event - tracking objects and players

It is also possible to track grenades, players, and other spawned objects with a static fixed camera using the CAMERA event.

The value to enter in the target field can be determined using the entities console command that lists all currently spawned entities. The most left number is the number to enter in the target field, so if you want to i.e. track a HE Grenade then jump to a position in the demo where it is already and still spawned, type entities in console and search a line that has s.th. like he_grenade.mdl in it. Players can be tacked similar, you will sometimes need to do some experiments to find the correct number.

When the CAMERA event is placed, make sure that the entity (i.e. grenade) you want to track has been already spawned, otherwise it will not work.

Tracking entities (objects or players) is also supported by HLAE, see [[GoldSrc:Tracking]].

# DemoEdit FAQ

## Problems using the events list

Always let viewdemo complete the loading of the demo, before editing anything (there will be a notice in the console).

## Non-Steam versions

It is reported that DemoEdit is also included in some non-Steam versions of Counter-Strike. Depending on the version you might have to type "dem_edit" into the console to bring up a GUI. However we do not support using non-Steam versions.

## Problems with SAVE

You should always only use a copy of the original demo. When saving back the changes using the "SAVE" button it may occur, that the models of the players are mixed up. Currently only the following workarounds are known:

Either a) type cl_minmodels 1 into your console. This will cause that each team only has one player model (Ts Leet-Crew, CTs GIGN). However the models seem to be assigned correctly then.

or b) switch the models manually by extracting them from the GCFs (using i.e. GCFScape) and renaming them. It is not known how well this method works, but it could allow the usage of all the models in a demo.


# DemoEdit tricks

You might also want to check the FAQ and tricks at the specific events.

## Field Of View

This works for **true** HLTV demos only (meaning POV/in-eye demos with dem_forehltv 1 won't work, for a workaround see [this forum topic](http://forum.advancedfx.org/viewtopic.php?f=6&t=1601)).

The Field Of View can be set using the <tt>FOV</tt> field present i.e. in the CAMPATH and CAMERA events.

Usable FOV values are as follows:
10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150

Interpolation of FOV values won't be smooth for some reason, so you should use the same value for all points in a CAMPATH.

However with FOV values greater than 90 there may be problems with the visibility check of the engine (parts of the sky not drawn for example).

## Rolling your camera

This one is very easy: Just change the third value of a campath or camera‘s "View Angle" field (which is 0.0 by default and measured in degrees) like it is shown here:

![DemoEdit camera rolling](https://user-images.githubusercontent.com/3610128/63040464-cdaccf00-bec5-11e9-9446-78c61e7148ba.jpg)

## Coordinate system

See DemoEdit coordinates in the [[Half-Life coordinate system]] article.