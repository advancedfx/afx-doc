## Video tutorials

You can find mostly CS:GO related video tutorials e.g. on [Anthony Perfetto's YouTube channel](https://www.youtube.com/channel/UCKpQS61qeitDBhA-SjZZ2bA) and [Alan Gaming's YouTube channel](https://www.youtube.com/c/AlanGamingHD), some of which we have linked in the advancedfx YouTube account:
https://www.youtube.com/user/advancedfx/playlists?view=50&sort=dd&shelf_id=1

## Other tutorials

### Beginner's section
* [Your first recording in CS:GO](Tutorials#your-first-recording-in-csgo)
* [(CS:GO) Smoother demos](Tutorials#smoother-demos)
* [(CS:GO) Flash removal](#flash-removal)
* [(CS:GO) Remove smoke from smoke grenades](#remove-smoke-from-smoke-grenades)
* [(CS:GO) Disable distance fading of props](#disable-distance-fading-of-props)
* [(CS:GO) Remove graffiti](#remove-graffiti)
* [(CS:GO) Remove nametags](#remove-nametags)
* [(CS:GO) Remove black smoke from molotovs](#remove-black-smoke-from-molotovs)
* [(CS:GO) Wallhack config](#wallhack-config)
* [(CS:GO) Blood removal config](#blood-removal-config)
* [(CS:GO) Remove x-ray and caster camera / x-ray control](#remove-xray-and-caster-camera--xray-control)
* [(CS:GO) Hide endgame scoreboard](#hide-endgame-scoreboard)
* [(CS:GO) Fix black models (e.g. wagons on de_train) on old demos](#fix-black-models-eg-wagons-on-de_train-on-old-demosmaps)
* [Fix crouch height in old CS:GO demos](#fix-crouch-height-in-old-csgo-demos)
* [Fix CS:GO bomb plant brightness](#how-to-fix-csgo-bomb-plant-brightness)
* [Fix CS:GO bomb plant spec lag / spin](#fix-csgo-bomb-plant-spec-lagspin-in-128-tick-gotv-demos)
* [(CS:GO) How to record a GOTV demo on a local server](#how-to-record-a-gotv-demo-on-a-local-server)
* [(CS:GO) How to hide GOTV ads / logos](#how-to-hide-gotv-ads--logos)
* [How to completely uninstall HLAE](#how-to-completely-uninstall-hlae)

### Advanced section
* [(CS:GO) POV weapon only stream](#csgo-pov-weapon-only-stream)
* [(CS:GO) Smoke only matte stream](#csgo-smoke-only-matte-stream)
* [(CS:GO) Replace the sky](#tutorial-csgo-replace-sky-with-mirv_streams-on-nuke--inferno--train)
* [(CS:GO) How to use FFMPEG in HLAE](#hlae-ffmpeg-recording-with-preset-config)
* [(CS:GO) How to change Panorama UI](#how-to-change-panorama-ui)
* [(CS:GO) Picker tool - Hiding materials, entities and more](#mirv_streams-picker-tool---hiding-materials-entities-and-more)
* [(CS:GO) Separate HUD stream](#tutorial-csgo-separate-hud-stream)
* [(CS:GO) ReShade with HLAE](#csgo-reshade-with-hlae)
* [(CS:GO) Recording streams and depth effects in After Effects](#recording-streams-and-depth-effects-in-after-effects)
* [Using depth maps in After Effects](#using-depth-maps-in-ae)
* [(CS:GO) (SFM) How to import models, cameras, maps and attach custom models to players](#sfm-how-to-import-models-cameras-maps-and-attach-custom-models-to-players)
* [(CS:GO) Spectactor smooth](#tutorial-spectator-smooth)
* [(CS:GO) Changing x-ray colour](#csgo-changing-x-ray-color)
* [(CS:GO) How to change demos from day to night](#how-to-change-demos-from-day-to-night-as-of-early-2017)
* [(CS:GO) Calculate real FOV from engine FOV](#csgo-calculate-real-fov-from-engine-fov--mirv_fov)
* [AfxRgbaLut - Color Lookup Table format](#afxrgbalut---color-lookup-table-format)
* [[(CS:GO) mirv_calcs examples|Source:mirv_calcs#see-also]]

## [[Your first recording in CS:GO]]

Basic guide aimed at beginners, on how to use HLAE to record your first stream.

## [[Smoother demos|Source:Smoother Demos]]

A few commands and methods to use to reduce lag in demos.

## Flash Removal

```
mirv_cvar_unhide_all
sv_cheats 1
mat_suppress "effects/flashbang.vmt"
mat_suppress "effects/flashbang_white.vmt"
```

To enable flash overlay again, enter both lines with mat_suppress again (meaning it works like a toggle).

If you want to bind them to a key use this: 

```bind <key> "mirv_cvar_unhide_all; sv_cheats 1; mat_suppress effects/flashbang.vmt; mat_suppress effects/flashbang_white.vmt"```

Pressing the key will toggle flashes off/on.

## Remove smoke from smoke grenades

```
mirv_streams edit streamName actionFilter add "particle/vistasmokev1/vistasmokev1_smokegrenade" noDraw
mirv_streams edit streamName actionFilter add "particle/vistasmokev1/vistasmokev1_fire" noDraw
mirv_streams edit streamName smokeOverlayAlphaFactor 0 // hides the smoke overlay when entering the smoke
```
Optional commands, if the previous ones weren't enough:
```
mirv_streams edit streamName actionFilter add "effects/overlaysmoke" noDraw
mirv_streams edit streamName actionFilter add "particle/vistasmokev1/vistasmokev1" noDraw
mirv_streams edit streamName actionFilter add "particle/vistasmokev1/vistasmokev1_emods" noDraw
mirv_streams edit streamName actionFilter add "particle/vistasmokev1/vistasmokev1_emods_impactdust" noDraw
```

## Disable distance fading of props

```
sv_cheats 1
r_disable_distance_fade_on_big_props 1
r_disable_distance_fade_on_big_props_thresh 0
```

## Remove graffiti

```
mirv_streams edit streamName actionFilter add "decals/playerlogo\*" noDraw
```

## Remove nametags

```
mirv_streams edit streamName actionFilter addEx "name=models/weapons/uid/\*" "action=noDraw"
```

## Remove black smoke from molotovs:
```
mirv_streams edit streamName actionFilter addEx name=particle/particle_flares/particle_flare_gray action=noDraw
mirv_streams edit streamName actionFilter addEx name=particle/particle_flares/particle_flare_001_nodepth_noz action=noDraw
```

## Wallhack config

For CS:GO you can enable wallhack by using `exec afx/wh` in console and following the instructions printed in the console. Works best with GOTV demos.

## Blood removal config

https://twitter.com/MolenTV/status/1134400694335791105

## Remove xray and caster camera / xray control:

```
mirv_cvar_unhide_all
spec_autodirector 0
spec_autodirector_cameraman 0
spec_cameraman_ui 0
spec_cameraman_xray 0
spec_show_xray 0
```

## Hide endgame scoreboard

Edit the stream to not draw the hud, see example below:
```
mirv_streams add normal norm
mirv_streams edit norm drawHud 0
mirv_streams preview norm
```
Note that the deathnotices will also be hidden, and there is no easy way to keep them while also removing the scoreboard.

## [[Fix black models (e.g. wagons on de_train) on old demos/maps]]

## Fix crouch height in old CS:GO demos

See <tt>[[mirv_fix oldDuckFix|Source:mirv_fix#mirv_fix-oldduckfix]]</tt>

## How to fix CS:GO bomb plant brightness

1) Load the demo.
2) Use `mat_force_tonemap_scale` and try values between 1.0 to 2.0.

(This also fixes the brightness change / overbright when skipping through the demo.)

## Fix CS:GO bomb plant spec lag/spin in 128 tick GOTV demos

See <tt>[[mirv_fix blockObserverTarget|Source:mirv_fix#mirv_fix-blockobservertarget]]</tt>

## [[How to record a GOTV demo on a local server]]

Simple guide about how to record your own GOTV demo.

## How to hide GOTV ads / logos

These need to be set _**before**_ loading the demo in question:

```
cl_server_graphic1_enable 0
cl_server_graphic2_enable 0
```

## [[How to completely uninstall HLAE]]

Guide on how to properly uninstall HLAE and reset game settings.

## [[CS:GO POV weapon only stream]]

How to make a matte stream with only the viewmodel.

## [[CS:GO Smoke only matte stream]]

How to make a smoke only matte stream.

## [[Tutorial: CS:GO: Replace sky with mirv_streams on nuke / inferno / train]]

How to change the sky with HLAE, as well as hiding the clouds.

## [HLAE FFmpeg recording with preset config](https://github.com/advancedfx/advancedfx/wiki/HLAE-FFmpeg-recording-with-preset-config)

This tutorial is based on a ffmpeg.cfg along with some tested presets written by Purp1e.

## [[How to change Panorama UI]]

Shows how to edit the HUD (changing fonts, colours etc).

## mirv_streams picker tool - Hiding materials, entities and more

### New tutorial

[Removing Volumetric Lights from Depth Passes in HLAE (Picker Method)  
![thumbnail](http://img.youtube.com/vi/7Mnbr-3RvPs/default.jpg) https://youtu.be/7Mnbr-3RvPs](https://youtu.be/7Mnbr-3RvPs)

### Original tutorial (longer, more details)

[![thumbnail](http://img.youtube.com/vi/aLxHUIOpGcU/default.jpg) 
https://youtu.be/aLxHUIOpGcU](https://youtu.be/aLxHUIOpGcU)

1) In the first 6 minutes you will learn how to quickly find and hide unwanted objects / materials from a depth stream.

2) In the remaining 13 minutes I will show how to solve the advanced exercise of hiding a player's shadow and additionally also how to add custom actions and giving specific players a solid colour using those.

## [[Tutorial: CS:GO Separate HUD Stream]]

How to separate the HUD from the game footage and composite it again in AE/Vegas.

## CS:GO ReShade with HLAE

ReShade Setup with HLAE (2022) by Alan Gaming  
[https://youtu.be/88xcZJfMwdU](https://youtu.be/88xcZJfMwdU)

## Recording streams and depth effects in After Effects

By fuze<br>
https://www.youtube.com/watch?v=4LVBlvzurcc

## Using depth maps in AE

By fuze<br>
https://www.youtube.com/watch?v=WeWXWMgp-CA

## [[SFM: How to import models, cameras, maps, and attach custom models to players]]

## [[Tutorial: Spectator smooth]]

## [[CS:GO Changing X-Ray color]]

## [[How to change demos from day to night as of early 2017]]

## [[CS:GO Calculate real FOV from engine FOV / mirv_fov]]

## [[AfxRgbaLut - Color Lookup Table format]]