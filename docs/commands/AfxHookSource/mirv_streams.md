---
title: mirv_streams
---

# mirv_streams

This command accesses the HLAE / AfxHookSource streams system, which will allow you to set up a stream (or several) to record, as well as making both simple and complex changes to individual streams to suit your needs.

### Beginner's section
* [Supported games](#supported-games)
* [Current limitations](#current-limitations)
* [Things you should know](#things-you-should-know)
* [Priming the scene state](#priming-the-scene-state) (brightness / tonemap / bloom / flares / ...) with a normal stream
* **Examples**
  * [Recording other games than CS:GO](#recording-other-games-than-csgo)
  * [Adding a normal stream](#1-adding-a-normal-stream)
  * [Adding a depth stream](#2-adding-a-depth-stream-previewing-it-and-editing-it-a-bit)
  * [Adding a matte entity stream](#3-adding-a-matte-entity-stream-and-previewing-it)
  * [Enable/disable recording on individual streams](#4-marking-streams-as-do-not-record-or-record)
  * [Stop previewing a stream](#5-stop-previewing-a-stream)
  * [A more complete example](#6-a-more-complete-example)
  * [Recording](#recording-example)
  * [Adding a basefx stream that looks normal](#how-to-make-basefx-look-like-a-normal-stream)

### Advanced section
* [OpenEXR depth streams](#adding-a-depth-stream-with-up-to-23bit-precision-openexr)
* [Quick viewmodel matte](#quick-viewmodel-matte)
* [FFMPEG video encoding](#ffmpeg-image-stream-encoding-to-video)
* [Sampling system](#sampling-system)
* [Stream properties reference list](#stream-properties-reference-list)
* [Related tutorials](#related-tutorials)

# Supported Games

Counter-Strike: Global Offensive supports the full extent of this feature. Other games or mods based on the Source engine (that HLAE can hook into) are limited to the [screen recording](https://github.com/advancedfx/advancedfx/wiki/Source:mirv_streams#recording-other-games-than-csgo) feature.

# Current Limitations

* Special materials with special shaders can be problematic (inaccurate)
* Due to breakage in HLAE replacement shaders with the February 17th 2016 CS:GO update, the streams are much less accurate than they used to be before (meaning on the matte / depths streams as before the big HLAE update smoke won't draw, transparent stuff will be problematic, cables/ropes won't draw and so on).
* You should only use the default preview slot (meaning only 1 stream in preview), since the multi-stream preview is bugged.


# Things you should know

* The manual doesn't cover all the options available through the mirv_streams command. Basically enter the mirv_streams command or its sub-commands to get help for the current (sub-)command. If the help displays a sub-command with <tt>[...]</tt> behind it, then you can enter everything in front to get more help for that sub-command.
If you mistype anything after mirv_streams, then it will print the most specific (sub-)command help it can find.

## CS:GO only

* You will notice that available sub-commands for <tt>mirv_streams edit</tt> are specific to the stream type you are editing. Meaning some streams have different options than others, some have only a few options.
* You should also follow the advice in the [[smoother demos guide|Source:Smoother-Demos]] to reduce jitter/lag in recordings.

# Priming the scene state

(brightness / tonemap / bloom / flares / ...) with a normal stream:
```
mirv_streams add norm norm
mirv_streams edit norm record 0
mirv_streams mainStream set norm
```

# Examples

## Recording other games than CS:GO

This is not recommended for CS:GO, we recommend using the streams system instead (see other examples).

Currently the following games are supported for this option:
- Alien Swarm
- CS:GO
- TF2
- CSS
- CSSV34
- Insurgency2

Further Source 1 games, _that alreardy work with HLAE (e.g. mirv_campath)_, can be added with reasonable effort, feel free to open a feature request and supply us with the materialsystem.dll of that Source 1 game.

For games other than CS:GO (e.g. TF2) the capturing process will only record when the console is closed (just like startmovie, because we detour startmovie for the audio).

Additionally to the `host_framerate` you will need to set `mirv_streams record fps` to the same value, because in most games we can not detect the `host_framerate` value currently.

The example below assumes that [you have installed FFMPEG](#how-to-install-ffmpeg).

```
host_framerate 1200; mirv_streams record fps 1200; mirv_streams record screen enabled 1; mirv_streams record screen settings afxFfmpegYuv420p; mirv_streams record start // start recording
// ... close console to record a bit ...
mirv_streams record end // stop recording
```

The `mirv_streams record settings` command currently allows to set any setting that you can create in CS:GO, including [FFMPEG settings](#ffmpeg-image-stream-encoding-to-video) and [Sampler / motion blur settings](#sampling-system).

## 1. Adding a normal stream

A normal stream is simply a stream that doesn't have many possible settings, you can use it to record the view without special effects.

Enter this in console to add a normal stream named _mynormal_:<br />
<tt>mirv_streams add normal mynormal</tt>

Preview that stream using:<br />
<tt>mirv_streams preview mynormal</tt><br />
Note: you probably won't see any difference because a normal stream basically looks the same as the base game.

## 2. Adding a depth stream, previewing it and editing it a bit

To add a depth stream named _mydepth_ enter this:<br />
<tt>mirv_streams add depth mydepth</tt>

Now put the stream into preview:<br />
<tt>mirv_streams preview mydepth</tt><br />
You should be able to see the depth stream now. 

Now lets edit the maximum depth value of the stream we added, since the default of 1024 is a bit low:<br />
<tt>mirv_streams edit mydepth depthValMax 4096</tt>

To check if the value has been set properly enter:<br />
<tt>mirv_streams edit mydepth depthValMax</tt><br />
It should display the _current value_.

## 3. Adding a matte entity stream and previewing it

Enter this in console to add a matteEntity stream named _mymatte_:<br />
<tt>mirv_streams add matteEntity mymatte</tt>

Preview that stream using:<br />
<tt>mirv_streams preview mymatte</tt>

## 4. Marking streams as do not record or record

Streams will be recorded by default.

Enter this in console to mark a stream named _mymatte_ as do not record:<br />
<tt>mirv_streams edit _mymatte_ record 0</tt><br />
This will cause the stream to not be recorded when using <tt>mirv_streams record</tt>

If you want to check that the setting has been applied, enter:
<tt>mirv_streams edit _mymatte_ record</tt><br />
It should display the _current value_.

## 5. Stop previewing a stream

To stop previewing a stream there are two ways:<br />
<tt>mirv_streams preview &quot;&quot;</tt> or <tt>mirv_streams previewend</tt>

## 6. A more complete example

First lets remove the streams from the previous examples (you can skip that if you didn't add them):<br >
<tt>mirv_streams remove mydepth</tt><br />
<tt>mirv_streams remove mymatte</tt><br />
<tt>mirv_streams remove mynormal</tt>

Now let's add a few streams named _ent_ (contains the entities and the world is masked), _wrld_ (contains everything masked or missing in _ent_), _dent_ (depth for _ent_) and _dwrld_ (depth for _wrld_):<br />
<tt>mirv_streams add matteEntity ent</tt><br />
<tt>mirv_streams add matteWorld wrld</tt><br />
<tt>mirv_streams add depthEntity dent</tt><br />
<tt>mirv_streams edit dent depthValMax 4096</tt><br />
<tt>mirv_streams add depthWorld dwrld</tt><br />
<tt>mirv_streams edit dwrld depthValMax 4096</tt>

Now for extra fun (let's pretend we hate weapon stickers), let's add a stream without weapon stickers, that we put into preview but don't record:<br />
<tt>mirv_streams add baseFx nostickers</tt><br />
<tt>mirv_streams edit nostickers stickerAction invisible</tt><br />
<tt>mirv_streams edit nostickers record 0</tt><br />
<tt>mirv_streams preview nostickers</tt>

### Recording example:

Here is a complete example how to record the streams set up above:

First let's set the record name to _test_rec_ (default is _untitled_):<br />
<tt>mirv_streams record name test_rec</tt>

**Hint:** Alternatively you can set a full folder path: <tt>mirv_streams record name &quot;D:\myFolderPath&quot;</tt>

Now let's record:<br />
<tt>host_framerate 60; host_timescale 0; [[mirv_snd_timescale|Source:mirv_snd_timescale]] 1; mirv_streams record start</tt>

... record a bit ...

Now stop the recording:<br />
<tt>mirv_streams record end; host_framerate 0</tt>

If everything went well, you should now have the recorded image files and audio file in the <tt>Counter-Strike Global Offensive\test_rec</tt> folder (except if you set another folder path in the steps above, then they will be there).

### How to make baseFx look like a normal stream

Will add a baseFx stream that looks the same as "normal" stream template by default.  
This is useful, since a baseFx stream supports more effects than a normal stream.

```
mirv_streams add baseFx normalBaseFx
mirv_streams edit normalBaseFx doBloomAndToneMapping default
mirv_streams edit normalBaseFx doDepthOfField default
```

## Adding a depth stream with up to 23bit precision (OpenEXR):

_The actual accuracy is about 23 bits maximum. Depending on your graphics card and drivers the accuracy can be much lower, however with modern cards and drivers you should be close to the 23 bit maximum accuracy._

The depth value of the OpenEXR files will be between the stream's depthVal and depthValMax. If it's not exactly one of these values, then the depth value can be assumed to be the actual distance in 12/16 = 0.75 inch from the camera. If the value is the minimum value (depthVal), then the distance is depthVal or less. If the value is the maximum value (depthValMax), then the distance is depthValMax or above.

There are two methods to get high precision depth / OpenEXR support:

### OpenEXR depth stream - The latest way

```
mirv_streams add depth depth
mirv_streams edit depth depthVal 7
mirv_streams edit depth depthValMax 8192 // or higher
mirv_streams edit depth drawZ rgb
mirv_streams edit depth drawZMode linear
mirv_streams edit depth captureType depth24
```

### OpenEXR depthF stream

This is broken up to current stable HLAE 2.142.1, but will be fixed in an upcoming release:

Enter the following lines into console to create a high accuracy capture of the (pyramidal) depth stream:
```
mirv_streams add depth myDepthF
mirv_streams edit myDepthF depthVal 7
mirv_streams edit myDepthF depthValMax 8192 // or higher
mirv_streams edit myDepthF drawZ gray // currently has no effect for captureType depthF
mirv_streams edit myDepthF drawZMode pyramidalLinear
mirv_streams edit myDepthF depthValMax 8192.0
mirv_streams edit myDepthF captureType depthF
```

If you want to have the OpenEXR files with ZIP compression (probably slower), then use <tt>depthFZIP</tt> instead of <tt>depthF</tt>.

## Quick viewmodel matte

```
// Quick black and white viewmodel mask:
mirv_streams add depth vmm
mirv_streams edit vmm depthVal 15 // use 7 if you want gray scale
mirv_streams edit vmm depthValMax 15 // note shells ejected are further away, because the game munges the depth of the viewmodel to have it on-top
```

# FFMPEG image stream encoding (to video):

### How to install FFMPEG

_[zip version]_ Follow the instructions in `ffmpeg/readme.advancedfx.txt` in the HLAE folder.

_[Setup version]_ The HLAE installer has an option to install ffmpeg for you.

### Example usage (CS:GO)
```
host_framerate 120
mirv_streams add normal norm
mirv_streams edit norm settings afxFfmpegYuv420p
mirv_streams add depth depth
mirv_streams edit depth settings afxFfmpegLosslessBest
mirv_streams record start
// ...
mirv_streams record end
```

Hint: You can add custom profiles / see the other default profiles by using the mirv_streams settings command.

Note: Many video programs and browsers can not decode the depth streams, because they are "monochromatic rgb". Also **we recommend afxFfmpeg over afxFfmpegYuv420p, both are lossy**, but the former has better color quality, while many programs and browsers can only handle the latter.


# Sampling System
There is a default 30 down-sampler setting named afxSampler30 in afxSettings. If you want to change settings (e.g. output fps, please add a new sampler using `mirv_streams settings add [...]` and edit that one.

### Example usage (CS:GO)
```
mirv_streams settings edit afxSampler30 settings afxClassic // if you have FFMPEG installed for HLAE, you can use one of those settings (e.g. afxFfmpegYuv420p) instead of afxClassic
mirv_streams settings edit afxDefault settings afxSampler30
mirv_streams add normal myNorm

// Start recording:
host_framerate 1200; mirv_streams record start

// End recording:
mirv_streams record end; host_framerate 0
```

# Stream properties reference list

These are all the stream properties that can be edited with `mirv_streams edit <streamName>` including their possible values / parameters. A value of `-1` or `default` uses the default engine setting.

**RenderView properties**

`attachCommands [...]` // _commands executed before the stream is rendered, some may only work with `mat_queue_mode 0`_<br>
`detachCommands [...]` // _commands executed after the stream is rendered_<br>
`drawHud -1|0|1`<br>
`drawViewModel -1|0|1`<br>
`forceBuildingCubeMaps 0|1`<br>
`captureType normal|depth24|depth24ZIP|depthF|depthFZIP`<br>
`doBloomAndToneMapping default|0|1` // _post-processing effects_<br>
`doDepthOfField default|0|1` // _lens blur DoF based on the depth buffer, however it appears to be broken in CS:GO(?)_

**Record properties**

`record 0|1` // _whether to record the stream or not_<br>
`settings [...]` // _output settings, whether to record ffmpeg, sampling or an image sequence_

**BaseFx properties** (these apply to all streams **except** normal streams!)

Tip: `<actionName>` can be `draw`, `noDraw`, `mask` or other actions set by `mirv_streams actions`

`picker [...]` // _accesses the picker tool, see [related tutorials below](#related-tutorials)_<br>
`actionFilter [...]` // _somewhat related to the picker tool_<br>
`clientEffectTexturesAction <actionName>`<br>
`worldTexturesAction <actionName>`<br>
`skyBoxTexturesAction <actionName>`<br>
`staticPropTexturesAction <actionName>`<br>
`cableAction <actionName>`<br>
`playerModelsAction <actionName>`<br>
`weaponModelsAction <actionName>`<br>
`statTrakAction <actionName>` // _the statTrak counter on weapons_<br>
`shellModelsAction <actionName>`<br>
`otherModelsAction <actionName>`<br>
`decalTexturesAction <actionName>`<br>
`effectsAction <actionName>`<br>
`shellParticleAction <actionName>`<br>
`otherParticleAction <actionName>`<br>
`stickerAction <actionName>` // _stickers on weapons_<br>
`errorMaterialAction <actionName>`<br>
`otherAction <actionName>`<br>
`writeZAction <actionName>`<br>
`devAction [...]` // _Readonly_<br>
`otherEngineAction [...]` // _Readonly_<br>
`otherSpecialAction [...]` // _Readonly_<br>
`clear 0|1`<br>
`clearBeforeHud none|black|white` // _renders the stream in the specified colour while keeping the HUD_<br>
`vguiAction <actionName>` // _affects the scope overlay and possibly other vgui elements_<br>
`depthVal <fValue>` // _adjusts the distance of the depth_<br>
`depthValMax <fValue>` // _adjusts the distance of the depth_<br>
`drawZ none|gray|rgb|dithered` // _use a special shader to draw the Z-(depth) buffer (does not support the HUD)_<br>
`drawZMode inverse|linear|logE|pyramidalLinear|pyramidalLogE` // _mode to use for drawZ_<br>
`smokeOverlayAlphaFactor <fValue>` // _multiplier of the smoke overlay effect (not the smoke itself)_<br>
`shouldForceNoVisOverride 0|1` // _overrides the engine visibility check which is useful for wallhack_<br>
`debugPrint 0|1` // _prints debug info in the console_<br>
`invalidateMap` // _invalidates the material map_

# Related tutorials

* [[Source:Smoother-Demos]]
* [[Your first recording in CS:GO]]
* [Removing Volumetric Lights from Depth Passes in HLAE (Picker Method)](https://youtu.be/7Mnbr-3RvPs) by xNWP
* [HLAE Picker Tool (Removing Players)](https://youtu.be/7gIPtqg-Gsg) by Alan Gaming
* [[Tutorial: CS:GO Separate HUD Stream]]

# See also

* [[Source:Commands]]