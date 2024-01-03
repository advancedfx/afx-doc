---
title: mirv_agr
---

# mirv_agr

# mirv_agr

This article is focused on Source engine, for GoldSrc additionally see [[GoldSrc:mirv_agr]].

## Table of contents

* [Supported Games](#Supported-Games)
* [What does it do?](#what-does-it-do)
* [Things you should know](#things-you-should-know)
* [Commands](#Commands)
* [Import](#Import-Scripts)
* [Example (CSGO)](#example-csgo)
  * [Choose your commands](#1-choose-your-commands)
  * [Recording](#2-recording)
  * [Decompiling Models](#3-decompiling-models)
* [Setting up Blender and importing AGR](#4-setting-up-blender-and-importing-agr)
* [Export](#5-export)
  * [single FBX for C4D, Maya etc.](#51-single-fbx)
  * [multiple FBX for UE etc.](#52-multiple-fbx)
* [Importing maps in Blender](#6-importing-maps-in-blender)
* [See also](#see-also)

# Supported Games

* Counter-Strike: Global Offensive
* Counter-Strike: Source
* Counter-Strike: Source v34
* Team Fortress 2

# What does it do?

* AdvancedFX Game Recording (AGR) is a recording method which allows you to import recorded motion data into the 3D software [Blender](https://www.blender.org/).


# Things you should know
* 30 fps is a must have! Higher framerates can work, but will mostly end up in stuttering PoV animations.
* To get smoother recordings in CS:GO make sure to follow the [[Smoother Demos guide|https://github.com/advancedfx/advancedfx/wiki/Source%3ASmoother-Demos]]
* The size of your AGR depends on length, recorded [features](#commands) and animations.


# Commands

## Counter-Strike: Global Offensive ONLY with [[mirv_streams|Source:mirv_streams]]
```
host_timescale 0
host_framerate 30
mirv_streams record agr enabled 0|1
mirv_streams record agr recordPlayers 0|1
mirv_streams record agr recordInvisible 0|1
mirv_streams record agr recordWeapons 0|1
mirv_streams record agr recordProjectiles 0|1
mirv_streams record agr recordCamera 0|1
mirv_streams record agr recordPlayerCameras -1|0|<PlayerIndex> - should be used in freecam view
mirv_streams record agr recordViewmodels -1|0|<PlayerIndex> - should be used in freecam view
```

## CS:GO, CS:S, CS:S v34, TF2
```
host_timescale 0 
host_framerate 30

mirv_agr debug 0|1|2 - Debug level
mirv_agr enabled 0|1 - Enable / disable recording (Has to be enabled before loading the demo if you want to use AGR!).

mirv_agr recordCamera 0|1
mirv_agr recordPlayers 0|1
mirv_agr recordWeapons 0|1
mirv_agr recordProjectiles 0|1
mirv_agr recordInvisible 0|1
mirv_agr recordViewmodel 0|1
mirv_agr recordPlayerCameras -1|0|<PlayerIndex> - CSGO exclusive, should be used in freecam view
mirv_agr recordViewmodels -1|0|<PlayerIndex> - CSGO exclusive, should be used in freecam view

mirv_agr start <FilePath\Name.agr>
mirv_agr stop - Stop recording.
```

# Import Scripts


In order to import an AGR file to [Blender](https://www.blender.org), you have to download and install the [AFX-Blender-Scripts](https://github.com/advancedfx/afx-blender-scripts) and [Blender Source Tools](https://github.com/Artfunkel/BlenderSourceTools).

Requires Blender 2.8 or later:
- [AFX-Blender-Scripts](https://github.com/advancedfx/afx-blender-scripts/releases/)
- [Blender Source Tools](http://steamreview.org/BlenderSourceTools)
or
- [Blender Source Tools 3.1.1 AGR Edition](https://github.com/Devostated/BlenderSourceTools/releases/) - Disables collection creation for cleaner project files.

# Example (CSGO)

## 1. Choose your commands

```
host_timescale 0
host_framerate 30
mirv_streams record agr enabled 1
mirv_streams record agr recordPlayers 1
mirv_streams record agr recordInvisible 0
mirv_streams record agr recordWeapons 1
mirv_streams record agr recordProjectiles 0
mirv_streams record agr recordCamera 0
mirv_streams record agr recordPlayerCameras <PlayerIndex>
mirv_streams record agr recordViewmodels <PlayerIndex>
```

To get the Playerindex use the command:
```
mirv_listentities isPlayer=1
```

With these commands you will record the character, viewmodel and weapon models. Grenades(Projectiles) are disabled in this example for better performance, but can be enabled for sure!


### Pros and Cons for **not** recording Viewmodels and Weapons
Pros:
+ Smaller file size
+ Decreasing import time
+ More flexibility in terms of Animations (e.g. custom death animations)
+ Changing Weapon (e.g. using a M4A4 instead of AK-47)

Cons:
- You have to do the PoV and PoV-bobbing manually (How the weapon bounces while running)
- Weapon drop animations (dropping and dying) have to be done manually


## 2. Recording
* Make sure that you record in free camera. Do not spectate in first or third person, if you record PlayerCameras and Viewmodels!
* The default save path is <tt>Counter-Strike Global Offensive\untitled_rec\takexxxx</tt>.
* Follow the [[Source:Smoother-Demos]] before recording, which prevents your demo from lagging.
* Commands for the [CS:GO mirv_stream](https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_agr#counter-strike-global-offensive-only-with-mirv_streams) method:
```
mirv_streams record start
mirv_streams record end
```

## 3. Decompiling Models

Method 1:
* 1: Download [GCFScape](https://valvedev.info/tools/gcfscape/) and [Crowbar](https://steamcommunity.com/groups/CrowbarTool)
* 2: Open the <tt>pak01_dir.vpk</tt> with GCFScape inside your <tt>Counter-Strike Global Offensive\csgo</tt> folder
* 3: Go to <tt>Root > Models > Players / Weapons</tt> and right-click extract the folders.
* 4: Open Crowbar, enable the option <tt>Folder for each model</tt> and decompile the Player / Weapons folder, recommended to enable "Bone animation SMD files".
* 5: Create a new folder called e.g.  <tt>CSGO</tt>, create another folder inside called <tt>models</tt> and move the decompiled Players and Weapons folders inside there.

Method 2:
Download [Devostated's Decompiled Models](http://thatnwp.com/3D/CSGO%20Models%20Decompiled%20with%200.56.rar) with fixed .SMDs for fewer errors and extra models and animations.


## 4. Setting up Blender and importing AGR

* 1: After installing and enabling both Blender scripts, delete the *Default Scene* (Cube, Light and Camera) change the frame rate to 30 fps and go to <tt>File > Save Startup File</tt>.
* 2: Enable the console <tt>(Window > Toggle System Console)</tt> to see any errors and progress.
* 3: Go to <tt>File > Import > HLAE afxGameRecord (.agr) </tt>
* 4: Open the folder of your AGR <tt>(Default: Counter-Strike Global Offensive\untitled_rec\takexxxx)</tt>. 
* 5: Add the path of your Decompiled Models folder (e.g. <tt>C:Users\%USERNAME%\Desktop\CSGO)</tt> and get your import settings. 

![Import settings](https://user-images.githubusercontent.com/30211694/81882376-e5b79900-9592-11ea-99e4-ed13a4acd267.png)
* 5.1: You can change different options such as:
  * `Asset Path` (Path to decompiled models)
  * `Add interpolated key frames` (Creates interpolated key frames for frames in-between the original key frames)
  * `Scale` (Scales everything by this value. 0.01 is default, cause it works with most map importers. A value of 2.54 would be correct size.)
  * `Scale invisible to zero` (*recordInvisible 1* will be hidden if it's not supposed to be, e.g. Running Players after death)
  * `Skip Physic and Shared_Player_Skeleton meshes` (Skips collision boxes, so you don't have to remove them manually and leads to faster import time)
  * `Skip Stattrack and Stickers` (Skips Stattrack and Stickers of weapons)
  * `Bones (skeleton) only` (This will decrease the time to import. I recommend to you use it, if you plan to export your AGR to another program like UE4, Maya or C4D)
  * `Model instancing` (Instances Models instead of reimporting the same models again.
  * `Keyframe interpolation` (Changes the interpolation, which can result into a significantly import time decrease, but also possible animation errors. Needs more testing)
* 6: Double click the AGR file or click `Import` to import the AGR file.
* 7: Enjoy your AGR.

# 5 Export
You have two ways of exporting your AGR as FBX.

#### [5.1](#51-single-fbx) As a single FBX file. Recommended for Cinema 4D, Maya etc.

#### [5.2](#52-multiple-fbx) As a multiple FBX files. Recommended for Unreal Engine

## 5.1 Single FBX
For the export of your AGR to other 3D programs you need following settings:

* 1: Select everything (Shortcut: A)
* 2: Go to: Object -> Relations -> Make single user -> Object & data

![MakeSingleUser](https://user-images.githubusercontent.com/30211694/85177810-2c2ca180-b27d-11ea-80d3-07ce4fa36f41.png)
* 3: Export with the recommended settings

![Export](https://user-images.githubusercontent.com/30211694/71773950-8bfced80-2f66-11ea-9ab2-717e866e9df5.png)

## 5.2 Multiple FBX
* 1: Go to File -> Export -> HLAE AGR Batch Export (.fbx)
* 2: Export with settings that fit your needs

![Export settings](https://user-images.githubusercontent.com/30211694/145111323-71834f44-38b2-4449-bb0a-a3340079f6a7.png)


# 6. Importing maps in Blender
[lasa01's map importer](https://github.com/lasa01/io_import_vmf#usage)

# See also

* [[Source:Commands]]
* [[Source:mirv_streams]]
* [[Source:Smoother-Demos]]
* [[GoldSrc:mirv_agr]]