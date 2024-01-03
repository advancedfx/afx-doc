---
title: mirv_deathmsg
---

# mirv_deathmsg

This command allows blocking , faking and **showing more frags** / death messages in the HUD in cstrike.

# Supported modifications

* [[cstrike|GoldSrc:Mod:cstrike]] (Counter-Strike 1.6)
* [[tfc|GoldSrc:Mod:tfc]] (Team Fortress Classic)

# mirv_deathmsg block

This command allows to block all or certain death notices from the game.

## Block death notices

<tt>mirv_deathmsg block _&lt;attackerId&gt;_ _&lt;victimId&gt;_</tt>

Where _&lt;attackerId&gt;_ and _&lt;victimId&gt;_ can be each:
* either a player id (see [[mirv_listplayers|GoldSrc:mirv_listplayers]])
* or <tt>*</tt> which means to match any id
* or a player id preceded by an <tt>!</tt> which means to match any id except the given one.

## List blocked death notices

<tt>mirv_deathmsg block list</tt>

## Clear all blocks

<tt>mirv_deathmsg block clear</tt>

## Examples

Block all frags:<br />
<tt>mirv_deathmsg block * *</tt>

Release block again:<br />
<tt>mirv_deathmsg block clear</tt>

Block all kills except those affecting player 8 (so if he get killed for some reason you will see that too):
<tt>mirv_deathmsg block !8 !8</tt>

Block all kills except those by player 8 (won't block suicides by weapon (i.e. grenade suicides), will block suicides with worldspawn (i.e. falldamage) though):<br />
<tt>mirv_deathmsg block !8 *</tt>

Block player 8 killing himself with a weapon (i.e. grenade):<br />
<tt>mirv_deathmsg block 8 8</tt>

Block all kills by player 2:<br />
<tt>mirv_deathmsg block 2 *</tt>

Block player 2 getting killed:<br />
<tt>mirv_deathmsg block * 2</tt>

Block all suicides with worldspawn (i.e. falldamage):<br />
<tt>mirv_deathmsg block 0 *</tt>

# mirv_deathmsg fake

<tt>mirv_deathmsg fake _&lt;attackerId&gt;_ _&lt;victimId&gt;_ _&lt;0|1&gt;_ _&lt;weaponString&gt;_</tt>

Where
* _&lt;attackerId&gt;_ and _&lt;victimId&gt;_ has to be a player Id or -1.
* _&lt;weaponString&gt;_ can be i.e. one of the strings headed with <tt>d_</tt> in <tt>sprites/hud.txt</tt> (i.e. "ak47" or "deagle" or "knife"), you may as well try other strings etc. for fun.

Do not report bugs for this command, it's there for fun, use it or lose it, thanks.

# mirv_deathmsg max

Show up to 10 frags in the HUD:

<tt>mirv_deathmsg max 10</tt>

(You can set more than 10 if you want.)

# mirv_deathmsg offset

<tt>mirv_deathmsg offset _default|&lt;value&gt;_</tt>

Allows to set the screen offset of death messages.

## Examples

Make death messages for Counter-Strike 1.6 HLTV demos the same height as for in-eye demos:<br />
<tt>mirv_deathmsg offset 40</tt>

Restore game's default behaviour:<br />
<tt>mirv_deathmsg offset default</tt>

# See also
* [[GoldSrc:Mod:cstrike]]
* [[GoldSrc:Mod:tfc]]
* [[GoldSrc:Commands]]