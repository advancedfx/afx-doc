---
title: Your-first-recording-in-CS:GO
---

# Your-first-recording-in-CS:GO

This tutorial will go through the process of making your first basic recording in CS:GO with HLAE. If you haven't yet downloaded HLAE, [[see this page for instructions|FAQ#how-to-install--uninstall-hlae]].

**Table of Contents**
* [Launching CS:GO with HLAE](#hlae-launch-settings-for-csgo)
* [How to load a demo](#loading-a-demo)
* [Useful commands](#useful-commands)
* [Setting up a stream and a recording path](#setting-up-a-stream-and-a-recording-path)
* [Advanced: Recording with FFmpeg (Optional)](#advanced-recording-with-ffmpeg-optional)
* [Recording sound](#enabledisable-sound-recording)
* [Starting the recording](#starting-the-recording)
* [What to do with the images](#what-to-do-with-the-images)
* [Related wiki pages](#related-wiki-pages)

# HLAE launch settings for CS:GO

1. Start HLAE.exe
2. `File` -> `Launch CS:GO`

![HLAELauncher](https://user-images.githubusercontent.com/40070135/216405421-5ce699b9-c6d2-47bd-aecf-8a6d6cffabe0.png)

3. Browse to the location of the CS:GO executable file (csgo.exe)
`...Steam\SteamApps\common\Counter-Strike Global Offensive\csgo.exe`
4. **(Optional, but recommended)** This creates a fresh config folder for your custom config(s) and video settings.
If the folder doesn't already exist, HLAE will create it for you when you launch the game. After the folder (and files) have been created, you can add your custom config(s) in the cfg folder (the same place as the config.cfg).<br>
**Note**: If you don't use this feature, HLAE will use the same settings as your regular gaming config and video settings, and if you make any config, command, or graphics changes, those may carry over to your gaming config, and vice versa.

5. **(Optional)** Setting a custom resolution
6. **(Optional)** Custom command line options<br>
Note that _-insecure_ will be forced, in order to prevent joining VAC servers, since HLAE is technically a cheat.
7. **(Optional, but recommended)** These settings will be stored in `[...]\AppData\Roaming\HLAE` when remembered.

8. Make sure Steam is running and that you are logged into your Steam account before you click `Launch`

If you are having issues with launching the game, check the [[FAQ]] for common causes. Once you have managed to launch CS:GO with HLAE, it's time to load a demo to start setting up some necessary commands and record our demo footage.

# Loading a demo

Enter `demoui` in the console to bring up the demo player. Click `Load...` and open your demo.

Alternatively, you can load a demo straight away by typing: `playdemo <demo>` <br>*\<demo\>* can be an absolute path to a demo, or a path relative to the `...\Counter-Strike Global Offensive\csgo` folder. 

Once a demo has been loaded, you can toggle the demo player (demoui) with `Shift+F2`. From the demoui menu, you can control things like demo speed, rewinding, fast-forwarding, pausing, etc. Advanced users may choose to create binds (keyboard shortcuts) for these controls, however, that will not be covered here.

# Useful commands

`sv_cheats 1` // gives us access to more commands basically<br>
`mirv_cvar_unhide_all` // unlocks even more "hidden" CS:GO commands<br>
`host_timescale 0` // this will disable the in-game sound and may help with reducing demo stutter<br>
`mirv_snd_timescale 1` // enables the in-game sound again, in normal speed<br>
`cl_clock_correction 0` // can remove or reduce potential demo stutter<br>
`mirv_fix playerAnimState 1` // attempts to remove potential stutter in player models<br>
`cl_draw_only_deathnotices 1` // gets rid of the HUD and will only show the crosshair and deathnotices

**Tip**: You might want to put those commands in your custom movie making config (see [#4](#hlae-launch-settings-for-csgo)) and you would need to execute that config after loading a demo for the first time after starting the game: `exec name.cfg`

You could also place the rest of the commands this tutorial covers, seen below.

# Setting up a stream and a recording path

A stream is what HLAE will record and dump to your drive in the form of an uncompressed image sequence. For advanced users, there is also FFmpeg, which allows you to record directly to video files instead, and the next (optional) section explains how to set it up and use it.

First, we should set a folder where we want the footage to be written to, the folder can be an absolute path, or a path relative to the `...\Counter-Strike Global Offensive\` folder. If the folder (or any folder in the path) doesn't exist, it will be created by HLAE:

`mirv_streams record name "C:\FolderPathExample"`

**Tip**: It's highly recommended to record to an SSD if you have one. **And make sure you have enough space**! For example, if you record in 1920x1080 at 120 FPS, you are looking at ~712MB of data to be written each second of footage! This amount of data increases if you use a higher resolution, frame rate, or add more streams. HLAE has a file size calculator you can use to see the total data: `Tools -> Calculators -> File size`. Keep in mind that it only calculates the size for one stream, adding a second stream would double the size, and so on for any more streams you add. Additionally, the calculator isn't always applicable to users using FFmpeg to encode video.

**How to add a normal stream**:

`mirv_streams add normal name` <br>
*name* will be used to manage the stream and will be the name of the folder containing the footage for that stream. Giving the stream a memorable and easy to type name is recommended.

A normal stream will generally look exactly the same as the original game. If you type `mirv_streams add` you will get a list of all stream "presets"; streams that offer pre-determined settings for specific effects, such as depth, matte (greenscreen), and more. After you have added a stream, you can preview it by typing:

`mirv_streams preview name` // where *name* is whatever you named the stream <br>
`mirv_streams previewEnd` or `mirv_streams preview ""` // to stop previewing

**Tip**: HLAE supports recording multiple streams at once, if you want to add more than one stream, you can simply do so by using the `mirv_streams add` sub-command, each stream will be recorded into separate sub-folders of the folder you specified with `mirv_streams record name`.

# Advanced: Recording with FFmpeg (Optional)

_[!] This section can be skipped if you aren't interested in recording straight to video._<br>
_[!] Some codecs, formats and/or FFmpeg parameters may not be supported in all programs._

### Installing FFmpeg

There are two ways to install/extract FFmpeg:<br>
1. The easiest way is through the [HLAE installer](https://github.com/advancedfx/advancedfx/wiki/FAQ#how-to-install--uninstall-hlae) (HLAE_Setup.exe)<br>
2. If you use the .zip version of HLAE, you need to follow the instructions in `HLAE/ffmpeg/readme.advancedfx.txt`

You have installed it correctly if `ffmpeg.exe` exists in the `HLAE/ffmpeg/bin` folder afterwards.


### FFmpeg presets and settings

A great thing about FFmpeg is that you can customize the video encoding settings to almost anything you want. HLAE also has a few built-in presets that you can use. You can get a list of those if you enter this in the console:
```
mirv_streams settings print
```
You can look up the FFmpeg preset settings by using:
```
mirv_streams settings edit <presetName> options
```
For example, the `afxFfmpegRaw` preset will record to an uncompressed (raw) .avi video.

If you make your own preset, you can set any options that you wish:
```
mirv_streams settings add ffmpeg <yourPresetName> <Options>
```
Check out [Purp1e's FFmpeg tutorial](https://github.com/advancedfx/advancedfx/wiki/HLAE-FFmpeg-recording-with-preset-config) for more custom-made presets.

### Applying FFmpeg presets to the streams

To apply a preset on a global level (meaning it will apply to **all** streams):
```
mirv_streams settings edit afxDefault settings <presetName>
```
You can also set multiple presets to different streams by instead editing the individual stream settings:
```
mirv_streams edit <streamName> settings <presetName>
mirv_streams edit <streamName2> settings <presetName2>
```

# Enable/disable sound recording

Sound will be recorded by default, as long as `mirv_snd_timescale` is set to **1**!<br>
The audio file (.wav) will be saved to [the path you recorded](#setting-up-a-stream-and-a-recording-path) to.

If you want to disable sound recording, there are two ways:
1) `mirv_streams record startMovieWav 0`<br>
or<br>
2) `mirv_snd_timescale 0` (which will also mute everything in the demo)

# Starting the recording

One last command before we are ready to record is to set the frame rate:

`host_framerate 120` // a higher frame rate will take more time and storage space<br>
It's generally recommended to use a value that is divisible by the final frame rate of your project, which is usually 30 or 60 FPS.

Once you have [added at least one stream](#setting-up-a-stream-and-a-recording-path), use this command to start recording:<br>
`mirv_streams record start`

When it has begun recording, the game may slow down as your drive will need to write a lot of data.
Once your scene has been recorded, it's time to stop recording:<br>
`mirv_streams record end`

It's highly recommended that you bind these commands, for example:<br>
`bind F1 "mirv_streams record start"`<br>
`bind F2 "mirv_streams record end"`

Alternatively you could also add _host_framerate_ to those binds, like this:<br>
`bind F1 "host_framerate 120; mirv_streams record start"`<br>
`bind F2 "mirv_streams record end; host_framerate 0"`

# What to do with the images?

_[!] This section can be skipped if you recorded with FFmpeg._

Once you have your scene recorded as an image sequence, you essentially have two options:

1) Use a software (i.e., VirtualDub) to convert the images into video, which you then can import into your editing software
2) Import the image sequence straight into your editing software (not all of them might have that feature)

## Related wiki pages

* [[Smoother demos|Source:Smoother-Demos]]
* [[mirv_streams|Source:mirv_streams]]
* [[AfxHookSource]]
