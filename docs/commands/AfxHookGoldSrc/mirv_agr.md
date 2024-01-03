---
title: mirv_agr
---

# mirv_agr

```
mirv_agr start <sFilePath> - Start recording to file <sFilePath>, you should set a low host_framerate before (1 / FPS = host_framerate value, for example 25 FPS = host_framerate 0.04) and give the ".agr" file extension.
mirv_agr stop - Stop recording.
```

Tested with Blender Source Tools 3.1.0, afx-blender-scripts 1.14.2, Crowbar 0.71.
 
Please note when using games with high-resolution models (e.g. Half-Life single player regardless of cl_himodels, Half-Life multiplayer with cl_himodels 1), you will need to make sure to extract the right models, otherwise you will get broken results! If high-res models are used, decompile low-res version (e.g. valve/models) first and on-top of that decompile high-res models (e.g. valve_hd/models).

* [HLAE AGR Discord](https://discord.gg/wd8Rcdj)

# See also

* [[GoldSrc:Commands]]
* [[Source:mirv_agr]]