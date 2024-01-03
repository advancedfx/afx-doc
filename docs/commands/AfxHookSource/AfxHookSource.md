---
title: AfxHookSource
---

# AfxHookSource

[<img alt="AfxHookGoldSrc features image" src="https://user-images.githubusercontent.com/3610128/63039368-6ee65600-bec3-11e9-9fa0-ada88a9643e0.jpg" width="400" height="225">](https://user-images.githubusercontent.com/3610128/63039368-6ee65600-bec3-11e9-9fa0-ada88a9643e0.jpg)

[[toc]]

# About

One of the hooks for HLAE is AfxHookSource, which is targeted at Source (1) engine (mainly CS:GO) movie making. The supported Source engine games are listed on this page, however, you can try any Source engine game not listed here and tell us the results.

# Features

* [[Making smooth camera paths|Source:mirv_campath]]
* [[Moving around freely when a demo is paused|Source:mirv_input]]
* [[Blocking specific deathnotices and more|Source:mirv_deathmsg]]
* [[Advanced stream recording system|Source:mirv_streams]]
* [[Blocking specific sounds|Source:mirv_snd_filter]]
* [[Various demo fixes|Source:mirv_fix]]
* And more: see the command list below.

# Commands

The command reference / list for AfxHookSource can be found [[here|Source:Commands]].

# Tutorials

* Recommended guide if you are new to HLAE:<br>
[[Your first recording in CS:GO]]
* You can find more tutorials on the [[Tutorials page|Tutorials]]


## Launching Alien Swarm

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the swarm.exe in the <tt>..\Steam\steamapps\common\Alien Swarm</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -game swarm -w 1280 -h 720</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Launching Black Mesa

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the bms.exe in the <tt>..\Steam\steamapps\common\Black Mesa</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -console -game bms</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Launching Counter-Strike: Global Offensive

This is also available as a YouTube tutorial by proutounz: [https://youtu.be/NvOxxii8J88](https://youtu.be/NvOxxii8J88)<br />
[![thumbnail](https://img.youtube.com/vi/NvOxxii8J88/mqdefault.jpg)](https://youtu.be/NvOxxii8J88)

Start HLAE.exe.

Open the CS:GO launcher: <tt>HLAE -&gt; Menu -&gt; File -&gt; Launch CS:GO</tt>

* Game: select the csgo.exe in the <tt>..\Steam\steamapps\common\Counter-Strike Global Offensive</tt> folder here.
* Movie making config parent folder: allows to select the parent folder where your <tt>cfg</tt> folder will be created / located. Click the <tt>What's this?</tt> button for more help.
* Graphic Resolution: allows to set resolution easily (this will just be added as command-line arguments to the game, so the actual results depend on the game).
* Custom command line options: allows to set custom command line options to be passed to the game

Click Launch.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Launching Counter-Strike: Source

**For the old CSSV34 version see [Loading CSSV34 (old Counter-Strike Source)](#launching-cssv34-old-counter-strike-source) below.**

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe in the <tt>..\Steam\steamapps\common\Counter-Strike Source</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -console -game cstrike</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Launching CSSV34 (old Counter-Strike: Source)

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe of CSSV34.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -console -game cstrike -afxV34</tt>

Attention: the -afxV34 parameter is case sensitive!

Click okay.
If launching was successful you should see a console message by advancedfx.org.

## Launching Day of Defeat: Source

Start HLAE.exe.

Open the custom loader: <tt>HLAE -&gt; Menu -&gt; Tools -&gt; Developer -&gt; Customloader </tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe in the <tt>..\Steam\steamapps\common\Day of Defeat Source</tt> folder.
* CommandLine: <code><nowiki>-steam -insecure +sv_lan 1 -window -console -game dod</nowiki></code>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Launching Garry's Mod

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe in the <tt>..\Steam\steamapps\common\GarrysMod</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -console -game garrysmod</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Launching Half-Life 2

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe in the <tt>..\Steam\steamapps\common\Half-Life 2</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -console</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Launching Half-Life 2: Deathmatch

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe in the <tt>..\Steam\steamapps\common\Half-Life 2 Deathmatch</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -game hl2mp -window -w 1280 -h 720 -console</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Launching Insurgency (stand-alone game) 32bit version

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the insurgency.exe in the <tt>..\Steam\steamapps\common\insurgency2</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -w 1280 -h 720</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

**It is not known if -insecure is enough, SO DO NOT JOIN ANY SERVERS, also might be a good idea to turn off the Battle Eye client or even uninstall it first.**

## Launching Left 4 Dead 2

First make sure you launched the game at least once without HLAE.

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the left4dead2.exe in the <tt>..\Steam\steamapps\common\Left 4 Dead 2</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -w 1280 -h 720 -console</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.

## Launching Team Fortress 2

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Customloader</tt>

* HookDLL: select the <tt>AfxHookSource.dll</tt>
* ProgramPath: select the hl2.exe in the <tt>..\Steam\steamapps\common\Team Fortress 2</tt> folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -window -console -game tf</tt>

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.