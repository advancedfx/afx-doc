---
title: mirv_decalfilter
---

# mirv_decalfilter

<tt>mirv_decalfilter _&lt;command&gt;_</tt>

You need to join the game (play the demo) before this command works.

This command allows to replace decal textures in the game with other decals from the mod's decals.wad.

# Examples

This will replace all bullet holes in Counter-Strike with a blood graphic:<br/>
<tt>mirv_decalfilter add &quot;}shot\\*&quot; &quot;{blood1&quot;</tt>

This will remove all decalfilters again:<br />
<tt>mirv_decalfilter clearall</tt>

# Commands

## add

<tt>mirv_decalfilter add _&lt;mask&gt;_ _&lt;decalname&gt;_</tt>

This replaces all decal textures whose name matches _&lt;mask&gt;_ with a decal from _decals.wad_ that has the name _&lt;decalname&gt;_.

If there are several filters in the list, then the first filter that matches always wins.

For a description how the mask works see _Mask_ bellow, for more info about which decal names are available see _Decal Names_ bellow.

## remove

<tt>mirv_decalfilter remove _&lt;mask&gt;_</tt>

Removes a entry identified by _&lt;mask&gt;_ from the decal filter list again.


## list

<tt>mirv_decalfilter list</tt>

Lists the filters currently active.

If there are several filters in the list, then the first filter that matches always wins.


## debug

<tt>mirv_decalfilter debug _0|1_</tt>

If enabled the decal filter will print all the decal texture names the game is processing at the moment to the console. This can be helpful in case you want to replace specific decals.


## clearall

<tt>mirv_decalfilter clearall</tt>

Removes all filters from the list.

# Mask

The mask is a case sensitive string that must be matched, it has the following special codes:

* <tt>\\\*</tt> : is the wildcard code, it means it will match any text
* <tt>\\\\</tt> : use this instead if you want to match a <tt>\\</tt> (backslash) character

You can use <tt>mirv_decalfilter debug</tt> (see above) to find string / decals to replace.
(You'll notice that <tt>{</tt> and <tt>}</tt> of decal names often have to be swapped for the mask to match.)

Also see _Examples_ above.

# Decal Names

The actual decal names you can use depend on the decals.wad of your modification.

You can use [GCFScape](http://nemesis.thewavelength.net/index.php?p=25) to view the available decals:
* open the _decals.wad_ of your modification with GCFScape

Editing decals.wad may also allow to use more and other decals.

## Counter-Strike 1.6

The following decal names are available from _decals.wad_ in Counter-Strike 1.6:

<tt>reflect1
{247
{64#0
{64#1
{64#2
{64#3
{64#4
{64#5
{64#6
{64#7
{64#8
{64#9
{ammo
{arrow2a
{arrow2b
{arrow2c
{arrow2d
{arrow_l
{arrow_r
{bigblood1
{bigblood2
{bigshot1
{bigshot2
{bigshot3
{bigshot4
{bigshot5
{biohaz
{blood1
{blood2
{blood3
{blood4
{blood5
{blood6
{blood7
{blood8
{bloodhand1
{bloodhand2
{bloodhand3
{bloodhand4
{bloodhand5
{bloodhand6
{bproof1
{break
{break1
{break2
{break3
{c1a1b
{c1a3_grn1
{c1a3_org1
{c1a3_org2
{c1a3_org3
{c1a3_red1
{c1a3_red2
{c1a3_red3
{c2a2_a
{c2a2_b
{c2a5g
{capsa
{capsb
{capsc
{capsd
{capse
{capsf
{capsg
{capsh
{capsi
{capsj
{capsk
{capsl
{capsm
{capsn
{capso
{capsp
{capsq
{capsr
{capss
{capst
{capsu
{capsv
{capsw
{capsx
{capsy
{capsz
{crack1
{crack2
{crack3
{crack4
{crouch
{dent1
{dent2
[dent3
{dent4
{dent5
{dent6
{ding1
{ding10
{ding11
{ding2
{ding3
{ding4
{ding5
{ding6
{ding7
{ding8
{ding9
{drip2
{drip3
{drip4
{drips1
{explos
{fault01
{fault02
{fault03
{fault04
{fault05
{fault06
{foot_l
{foot_r
{gragstomp
{gausshot1
{graf001
{graf002
{graf003
{graf004
{graf005
{hand1
{hrpoint
{lambda01
{lambda02
{lambda03
{lambda04
{lambda05
{lambda06
{large#s-
{large#s0
{large#s1
{large#s2
{large#s3
{large#s4
{large#s5
{large#s6
{large#s7
{large#s8
{large#s9
{lime001
{lime002
{lime003
{lime004
{littleman
{marker
{med#s0
{med#s1
{med#s2
{med#s3
{med#s4
{med#s5
{med#s6
{med#s7
{med#s8
{med#s9
{mommablob
{moss001
{moss002
{moss003
{moss004
{moustache
{oil1
{oil2
{pstripe1
{pstripe2
{pstripe3
{pstripe4
{rotatescrape
{rust001
{rust002
{rust003
{rust004
{scorch1
{scorch2
{scorch3
{shot1
{shot2
{shot3
{shot4
{shot5
{siteA
{siteB
{small#s0
{small#s1
{small#s2
{small#s3
{small#s4
{small#s5
{small#s6
{small#s7
{small#s8
{small#s9
{smscorch1
{smscorch2
{smscorch3
{spit1
{spit2
{stripeh
{stripev
{target
{target2
{tire1
{tire2
{turn1a
{turn1b
{turn1c
{turn1d
{turn2a
{turn2b
{turn2c
{turn2d
{water1
{water2
{water3
{yblood1
{yblood2
{yblood3
{yblood4
{yblood5
{yblood6</tt>

# See also

* [[mirv_noadverts|GoldSrc:mirv_noadverts]]
* [[GoldSrc:Commands]]
