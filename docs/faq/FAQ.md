---
title: Frequently Asked Questions
order: 50
---

# Frequently Asked Questions

[[toc]]

## How to install / uninstall HLAE?

There are two methods to install:

1. **Via installer (recommended)**<br>
[Download](https://github.com/advancedfx/advancedfx/releases/latest) the **HLAE_Setup.exe** file, which will run the installer for HLAE. Using the installer will help you avoid potential issues related to non-English characters in the file paths. This method can also install [FFmpeg](#what-is-ffmpeg) for you. To update an existing HLAE installation, simply run the latest HLAE_Setup.exe and install to the same location as your current HLAE version to update it. Settings won't be overwritten.

2. **Portable installation**<br>
[Download](https://github.com/advancedfx/advancedfx/releases/latest) the latest version as a **.zip** file and extract the contents to a folder of your choosing. It's recommended to extract to a folder somewhere close to the root, for example "C:\HLAE". This method doesn't actually install HLAE, and you can safely delete the folder whenever you no longer intend to use HLAE. Using HLAE this way allows for easier management of different HLAE versions, and is recommended for advanced users who want to avoid having their workflow interrupted by game updates. However, this method is more likely to result in issues (a common one being placing HLAE in a location that contains non-English characters) and also requires users to manually download and extract [FFmpeg](#what-is-ffmpeg) if they want to use that feature.

**Uninstalling HLAE**

See this guide: [[How-to-completely-uninstall-HLAE]]

## Does HLAE work on Windows Vista / Windows 7?

Yes, both 32bit and 64bit versions. Just make sure to run HLAE and Steam with the same user account and access rights!

Windows XP is the most recent OS that is no longer supported, however, older versions of HLAE could still work on XP.

## Which games does HLAE support?

List of tested Source engine games: [[AfxHookSource]]<br>
However, the game with the most amount of HLAE features is currently Counter-Strike: Global Offensive, while other games based on the Source engine may have a limited amount of features.

For the GoldSrc engine, the game with the most amount of HLAE features is Counter-Strike 1.6, while other games based on the GoldSrc engine may have slightly fewer amount of features. See the [[AfxHookGoldSrc]] page for more information.

## Can HLAE get me VAC banned?

HLAE will force `-insecure` when launching a (Source engine) game, which prevents you from joining VAC-protected servers. As long as you only watch demos with HLAE, you will **not** get banned. 

For GoldSrc games we recommend starting Steam in [offline mode](https://support.steampowered.com/kb_article.php?ref=3160-AGCB-2555).

## Can I use HLAE with NOSTEAM or cracked versions?

HLAE is developed for and tested with genuine Steam versions only.
While you might find help on sites like http://www.movienations.com/
the HLAE team does not support NOSTEAM or cracked versions.

Instead we encourage you to use a genuine Steam version in [offline mode](https://support.steampowered.com/kb_article.php?ref=3160-AGCB-2555). Also for the purpose of movie making an old VAC banned account is more than enough.

## Do I have to keep HLAE updated?

That depends. If your current version is working as intended, and you don't need any specific feature(s) or fixes from a newer version, then you don't have to update. Sometimes a game update can break HLAE, however, and in such situations you either need to wait for a new HLAE update, or you could avoid it by not updating the game at all (see the [tip](#tips) below).

## What is FFmpeg?

FFmpeg is a video transcoding library used by HLAE for recording directly to video files. Without FFmpeg, you will need to assemble the resulting images into a video file using external software such as VirtualDub. More info on how to use it in HLAE:
* For the Source engine / CS:GO: [[mirv_streams|Source:mirv_streams#ffmpeg-image-stream-encoding-to-video]] (there is also a [[tutorial|HLAE-FFmpeg-recording-with-preset-config]] for it).
* For the GoldSrc engine / CS 1.6: [[mirv_movie_ffmpeg|GoldSrc:mirv_movie_ffmpeg]]

For more information about FFmpeg, see https://ffmpeg.org/about.html

## Can I speed up the recording process?

A few factors to consider:
* A higher resolution will increase the time it takes to record
* A higher frame rate will increase the time it takes to record
* Multiple streams will increase the time it takes to record
* Recording with [FFmpeg](#what-is-ffmpeg) can drastically improve the speed
* Recording to an SSD will generally be faster than a traditional HDD
* Enabling [hardware-accelerated GPU scheduling](https://devblogs.microsoft.com/directx/hardware-accelerated-gpu-scheduling/) (on Windows 10+) may improve the recording speed
* Previewing a stream (ideally the first or last active stream) may improve the recording speed slightly

# General problems

## Error when starting HLAE.exe

If you are using the portable/zip version of HLAE, make sure to extract the archive contents and then run HLAE.exe. Trying to launch HLAE.exe without decompressing the archive will not work.

## Common error codes with possible solutions

* **12**
  * Try moving the HLAE folder closer to the root, if using the .zip version (e.g. C:\HLAE)
  * If using the custom loader and multiple .dll files, make sure AfxHook[...].dll is loaded first (being on top)
* **13**
  * Make sure HLAE has been installed/extracted properly and that antivirus hasn't quarantined anything
  * _[ReShade 5.x]_ A `ReShade.ini` file (can be empty) may be required in the game .exe folder
* **1002**
  * AfxHook.dat could be missing from the HLAE directory; re-extract the .zip contents or re-install HLAE
* **2000**
  * The injector.exe is either blocked or removed by antivirus, anti-cheat software or Windows Defender
  * The .zip contents need to be extracted (if using the .zip version of HLAE)
* **2001**
  * Anti-cheat, antivirus software or Windows Defender is blocking HLAE
  * The path to the game .exe is empty or incorrect in the HLAE launcher settings
* **2002**
  * Anti-cheat or antivirus software is blocking HLAE
  * The file extension in the path to the game .exe is incomplete or incorrect in the HLAE launcher settings
  * The path to the game .exe is incomplete or incorrect in the HLAE launcher settings
  * Make sure the game .exe is **not** running as admin
* `Problem in C:\source\advancedfx\[...]` is usually caused by an outdated HLAE version, or by a recent game update if the latest version still gives this error (in which case you would have to wait for a new HLAE update to be released)

## The game crashes / crashes upon recording / HLAE crashes / doesn't seem to hook (I see no message in the console)

* Updates to the game (when not in Steam's Offline mode) may break HLAE. Make sure you have the latest HLAE version and that your game is fully up to date
* _[zip version]_ Make sure that you have extracted all files from the download into a folder you like
* Start the game without HLAE once so that Steam has a chance to update the files, then try launching with HLAE again
* Make sure you are not signed into any beta: First, right-click the game in the Steam library, select Properties, and check the betas tab. Then do the same for any modification you have installed. Be sure to let Steam complete the updating of the game(s) in case you had to sign out of the beta(s)
* In Steam, verify that your game installation is not corrupted by clicking _Verify Integrity of Game Files_ under the _Local Files_ tab of the game's properties
* _[CS:GO]_ If you have an addons folder in the Counter-Strike Global Offensive\csgo folder, either rename, move or delete it
* Changing `mat_queue_mode` can cause demo crashes, make sure it's set to the same value in your cfg/video.txt as in-game

## Image injection failed / Launch failed

This is usually caused by anti-cheat or sometimes antivirus software.

The following programs are known to cause problems with HLAE:
- ChallengeMe.gg anti-cheat client
- Faceit anti-cheat
- ESEA Client anti-cheat
- Comodo Cloud antivirus

Please try to add an exception for HLAE / temporarily disable or uninstall the anti-cheat(s).

# Game (engine) specific problems

# Source engine

## New user

If you are new to HLAE or the AfxHookSource hook, we recommend starting here:<br> [[AfxHookSource]]

# Frequently Asked Questions

## How to fix laggy / stuttering demos, especially when recording?

See the [[smoother demos|Source:Smoother-Demos]] guide.

## How to remove flashes, smokes, or black molotov smoke?

See the [[Tutorials#beginners-section]].

## Why can't I exec afx/wh or afx/updateWorkaround?

1. _[zip version]_ Make sure there are no special characters in the file path to HLAE
2. Make sure you use the latest HLAE version

## Why is my matte stream black?

See the question / answer above (special characters in the file path)

## Is fov_cs_debug bugged with scopes?

Use `mirv_fov` instead to adjust the fov and `mirv_fov handleZoom enabled 1` to fix scopes.

## Can I change weapon skins to their default skin?

1. `mirv_cvar_unhide_all`
2. `cl_custom_material_override 0`

**Note:** If custom glove skins are present, those will turn black or glossy which is possibly a bug.

## How to make a campath?

See [[mirv_campath|Source:mirv_campath]] (there are also a few [[workflow examples|Source:mirv_campath#workflow-examples]] listed there.)

## Why does my campath make sharp turns or fly through walls?

You may have pushed the interpolation beyond its limits. Here are a few tips and tricks:
* Use `mirv_campath draw enabled 1` to see a visual representation of the path
* Create the keyframes in slowmotion rather than pausing the demo
* Add more time between the keyframes, ideally a minimum of 1-2 seconds
* If several keyframes are close to each other, try removing one of them
* Adjust the position of the keyframe(s) slightly to see if it changes the curve(s)
* The campath system is not ideal for sudden changes, such as switching directions or positions too quickly
* As a last resort you could set the [[interpolation to linear|Source:mirv_campath#3-campath-with-only-2-keyframes-requires-linear-interpolation]], but that will disable the smooth movements

## Why doesn't the fov change on my campaths?

If `mirv_fov` is set to a value, it will override the campath fov values. Use `mirv_fov default` before playing the campath.

## How to record the viewmodel only on a matte stream?

See this tutorial: [[CS:GO POV weapon only stream|CS:GO-POV-weapon-only-stream]]

## How to do a static gun camera?

You are probably referring to [[mirv_calcs|Source:mirv_calcs]] (see example #2 on that page for a video example).

## Why do I only see floating arms?

You may have used `mirv_input camera` while spectating a player's point of view. Enter `spec_mode 6` to get the player back.

## Why do firstperson sounds not follow the player?

This is a rare bug that is not quite understood, but one known fix is to remove `-tools` from your launch options if you have it.

# [[Source:Commands]]

A list of commands unique to the AfxHookSource hook.

# [[Tutorials]]

A list of tutorials covering various workflows.

# GoldSrc engine

## First steps

If you are new to AfxHookGoldSrc try to follow this tutorial first, it usually solves several questions and problems already:<br> [[GoldSrc:First Steps]]

# Errors and problems

## Random crashes with viewdemo / demoedit

In case you are using [[-demoedit|GoldSrc:DemoEdit|]] the crash might be unrelated to HLAE and instead caused by viewdemo / -demoedit. DemoEdit may simply consume too much memory and also has some bugs, which probably is why it's hidden in the game by default.

The demo should also crash when using -demoedit without HLAE then and the solution would be to not use -demoedit with these demos.

## Captured images messed up

* HLAE is incompatible with several wallhacks and cannot be used at the same time with those. Even if you uninstall those they may leave modified DLL's behind, for example OpenGL32.dll in the folder where the "hl.exe" of your game is located. Remove those files from this folder, but not from other folders of your system.
* If some areas of the record image are black, make sure that the whole game window is visible during recording. HLAE has functions that automatically take care of that, see [[GoldSrc:Render Settings]]

## MDT WARNING: Could not install all OpenGL extensions

**Symptom**:<br />
Console message: <tt>MDT WARNING: Could not install all OpenGL extensions. Some features might not work.</tt><br />Also r_detailtextures won't work.

**Cause**:<br />
You are probably using a non-standard graphics driver and or tool (e.g. Nhancer) which is probably forcing the wrong OpenGl version (3.0 is way to new for CS, you can check that using [[__mirv_info|GoldSrc:__mirv_info]])

**Solution**:<br />
* make sure you are not forcing any specific OpenGl version, CS 1.6 won't profit from anything newer than 1.3 anyway
* make sure that OpenGl extensions are not disabled (both CS 1.6 and HLAE use some extensions for multi-texturing)
* if nothing helps reinstall the official graphics driver

## r_detailtextures missing

This problem is not caused by HLAE, but a wrong OpenGl configuration, see _MDT WARNING: Could not install all OpenGL extensions_ above.

## Game bug: CS 1.6 dynamic crosshair bug with viewdemo

_This is not a HLAE bug and not related to the HLAE crosshair (cooldown) fix._

Please use the workaround described below (4).

**CS 1.6 - crosshair bug for cl_dynamiccrosshair 1 in demo playback**

This bug is most visible on pistols:

1. If you don't play on a server before playing the demo the crosshair on pistols will be very huge. [Here is an example of how it looks (very obvious here)](https://www.youtube.com/watch?v=7iujfVm0Wmc).
2. If you do, then in the demo the last dynamic state (depends on your walking / jumping before you disconnect from the server) will be used in the demo.
3. In other words, despite cl_dynamiccrosshair 1 is supposed to represent the dynamic (movement based) state, it does only represent the last game state or if there is none the default state (maximum).
4. Only **workaround is cl_dynamiccrosshair 0** for movie making / demo playback.

The issue is tracked here: https://github.com/ValveSoftware/halflife/issues/1645

# Frequently Asked Questions

## How do I use HLAE with mod X?

Please read [[GoldSrc:First Steps]] in case you haven't done so already.

First find out the sub folder for your mod, i.e.
* **ag** for Adrenaline Gamer
* **dod** for Day Of Defeat
* **czero** for Condition-Zero
* **ns** for Natural Selection

Now select **Custom** from the modification drop-down of HLAE's launcher window, which will enable the box to the right of it. Enter the folder name into the newly enabled box.

Next you have to choose the correct hl.exe game file:
It's the one which is located in the folder where you found your mod's folder.

Now you should be ready to use your mod with HLAE, apart from mod specific features.

## How to use DemoEdit with HLAE?

Just add <tt>-demoedit</tt> to the space separated list of commands in the HLAE custom launch options. For more information on this Valve tool see [[GoldSrc:DemoEdit]].
Please be aware that using DemoEdit may lead to decreased performance and crashes.

## TFC: Stuck on blackscreen

This is not a HLAE bug, it's a known TFC bug:<br>
In order to play in-eye demos (viewdemo) properly you need to either<br>
a) Create a server first and play a few seconds<br>
or b) Watch a HLTV demo first.

If you don't do this the demo will hang whether or not when using HLAE. When doing a) or b) first you can watch it fine with and without HLAE.

You can do a) with HLAE, it will ask when you join the server (CREATE SERVER) for security reasons, but since listenservers don't have VAC you can safely join it without getting banned (mean reply the HLAE window with Yes upon create server). Do not join an internet server though, this might get you VAC banned, use CREATE SERVER instead.

If you prefer b) you need a HLTV demo of course.

## TFC: How to remove hud_centerid text from screen

One way is using a high value for hud_centerid since its value is used to align it vertically (in number of lines from the center):
```
hud_centerid 100
```
should do.  
_(For example -12 would align it at the top for 640x480 with default fonts.)_

Another way is to use HLAE's hud separation feature ([[GoldSrc:mirv_movie_separate_hud]])


## TFC: Removing the prematch text / changing player names:

The easiest way without special tools / commands is probably using a hex editor and replacing that text in the demo file with spaces.

Same goes for player names, as long as you don't change their length.

XVI32 is a free hex editor:
http://www.google.com/search?hl=en&q=XVI32

For a cleaner way to change the player names (and thus their length), you'd probably need some tool to assist you with that, since you would need to update lengths and offsets in the file etc.

# [[GoldSrc:Commands]]

List of all the HLAE commands used in GoldSrc.

# Tips

## Avoid getting game updates during movie production

Since the offline mode seems to be broken in CS:GO as well, for movie production the only option is to set it to _"Only update this game when I launch it"_ in the Updates tab in the game properties and only launch using HLAE, since it should not trigger updates when launched from HLAE instead of Steam.

## Fixing broken .NET installations

### Windows 7 / Vista

1. Use Aaron Stebner's  [.NET cleanup tool](https://docs.microsoft.com/en-gb/archive/blogs/astebner/net-framework-cleanup-tool-users-guide) to remove the installation
2. The .NET framework is a system component, you need to first remove and then add it again (after reboot) from <tt>System Control -&gt; Programs and Functions (Software) -&gt; Windows components / features / functions</tt>

# Getting help

In case none of this helps, you can contact us on Discord or GitHub:<br> https://www.advancedfx.org/support/