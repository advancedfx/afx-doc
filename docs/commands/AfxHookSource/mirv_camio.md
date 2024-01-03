---
title: mirv_camio
---

# mirv_camio

This command can import and export camera motion data (.cam files) to be used from / by third-party software such as Blender, After Effects and Cinema 4D.

Plug-ins for these can be found here: https://www.advancedfx.org/download/#tools-hlae-camio

# Supported Games

All Source games supported by AfxHookSource.

# Exporting camera data

`mirv_camio export start <fileName> <fovScaling>` // fovScaling can be `none` or `alienSwarm` (CS:GO uses the latter). Both should work with most of the plugins, since it's noted in the file header which one is used.

`mirv_camio export end` // to stop exporting

# Importing camera data

`mirv_camio import start <fileName>`

`mirv_camio import end` // stop / finish importing
# See also

* [[mirv_camexport|Source:mirv_camexport]]
* [[mirv_camimport|Source:mirv_camimport]]
* [[mirv_campath|Source:mirv_campath]]
* [[mirv_cfg|Source:mirv_cfg]] fovScaling