---
title: mirv_cfg
---

# mirv_cfg

Gives access to fov scaling and view settings.

## fovScaling

`mirv_cfg fovScaling default|none|alienSwarm`

Sets the fov scaling. Value `default` tries to detect the game when possible (will e.g. equal alienSwarm for CS:GO, while it can be different for other games).

## forceViewOverride

`mirv_cfg forceViewOverride 0|1` // 1 is default

If to force the view override onto the local player, can fix a few bugs (CS:GO only).

## forceViewOverrideHltv 

`mirv_cfg forceViewOverrideHltv 0|1` // 0 is default

If to force the view override onto the HLTVCamera (e.g. for GOTV) (CS:GO only). 

## viewOverrideReset

`mirv_cfg viewOverrideReset 0|1` // 1 is default

If to reset roll to 0 and fov to 90 (unscaled) after ending a view override (CS:GO only).

## mirvForceSpectatorToolsMapOverviewShowAll 

`mirv_cfg mirvForceSpectatorToolsMapOverviewShowAll 0|1` // Default 1

If to extend map overview in mirv_force_spectatortools.

## mirvPov 

`mirv_cfg mirvPov [...]`

Allows to tamper with the interp to get more accurate POV view on average (or turn that behavior off).
