---
title: Smoother-Demos
---

# Smoother-Demos

**This tutorial is aimed at CS:GO and will not work for other games.**

# Smoother Demos in CS:GO

## 1.

Don't use the game's highlight feature, always use playdemo or demoui.

## 2.

Load the demo with playdemo or demoui - if it's choppy, load it again with playdemo or demoui right away!

_(For some also letting the round end without fast forwarding and then jumping back to the round fixes it.)_

## 3.

Execute these commands _**after**_ the demo has been loaded:
```
sv_cheats 1
host_timescale 0
mirv_snd_timescale 1
cl_clock_correction 0
```

## 4.

For new demos you probably always need to do this:

```
mirv_fix playerAnimState 1
```

This attempts to fix remaining stutter in model animations.

## 5.

If there is still root (player position) jitter repeat starting from Step 2.

## 6.

Do not do **3.** and **4.** shortly before recording, since the fixes need some demo time, in order to catch up!

## 7.

The next / previous tick buttons next to resume / pause in demoui can cause cl_interpolate 0, either don't use them or make sure cl_interpolate is 1!

# See also

* [[AfxHookSource]]
* [[mirv_snd_timescale|Source:mirv_snd_timescale]]
* [[mirv_fix|Source:mirv_fix]]
