---
title: mirv_cstrike_smoke
---

# mirv_cstrike_smoke

# mirv_cstrike_smoke block

Syntax:
<tt>mirv_cstrike_smoke block _**0**|1_</tt>

* **Default:** 0

If enabled blocks the smoke creation event, thus you must enable it before the smoke is popped out. Applies to smoke grenades and other smoke puffs.

* **0 :** do not block smoke
* **1 :** enable, block all smoke creation events from the game.

# mirv_cstrike_smoke create

Syntax:
<tt>mirv_cstrike_smoke create _&lt;x&gt;_ _&lt;y&gt;_ _&lt;z&gt;_ _&lt;pitch&gt;_ _&lt;yaw&gt;_ _&lt;roll&gt;_</tt>

Allows the user to spawn custom smoke at a location he/she/it wants, supersedes <tt>mirv_cstike_smoke block</tt> (see above).

Example: <tt>mirv_cstrike_smoke create -841.2 -827.6 -156.6 0 0 0</tt>

# Tutorial: How to add missing smoke

This assumes you know how to use [[GoldSrc:DemoEdit]]'s stufftext feature to trigger commands at specific demo times.

* Pause the demo where the smoke grenade pops (sound), but no smoke is being spawned (cuz the event did not get recorded or s.th.).
* Move to the location where the smoke grenade popped and use <tt>[[mirv_whereami|GoldSrc:mirv_whereami]]</tt> to get the x, y and z coordinates of that location
* Add a stuff command to the DemoEdit event list, set the time box to the current demo time (where you paused) and use the following as command for the stufftext event: <tt>mirv_cstrike_smoke create x y z 0 0 0</tt>. Replace x,y,z with the coordinates from mirv_whereami.

Now every time the demo plays over that time the stufftext command will be executed and thus the missing smoke will be spawned from the command.

You should switch to in-eye for HLTV demos, because the smoke sprites are rotated to the in-eye viewer.

# See also

* [[GoldSrc:Mod:cstrike]]
* [[GoldSrc:Commands]]
