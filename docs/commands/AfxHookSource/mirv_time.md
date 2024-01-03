---
title: mirv_time
---

# mirv_time

This command affects the time in advanced ways. Not recommended for beginners!

# Supported Games

Counter-Strike: Global Offensive

## mirv_time mode

Allows stopping the time without affecting campaths or other HLAE features that rely on demo time.

`mirv_time mode curTime` // default behaviour, pauses when demo is paused

`mirv_time mode resumePaused` // resumes when paused

`mirv_time pausedTime` // Print/set currently used paused time (added to curTime)

**Be aware that time travel may have side effects**: examples are campath keyframes that move to a different time, stateful features like mirv_aim and some mirv_calcs.

**Tip**: You can use `mirv_cmd add` to schedule the pausing / un-pausing (and mirv_cmd save / load to save / load it to / from an XML file), one should also combine it with setting `mirv_time pausedTime` e.g. to 0.

## mirv_time drive

This drives the host_framerate when it's not 0 or the demo_timescale otherwise (so it will work in demos live and when recording).

### mirv_time at specific speed

```
mirv_time drive <fValue>
```

Value should be greater than 0, otherwise it will force it that way. Replace `<fValue>` with the value you want. Example: `mirv_time drive 0.5`

### mirv_time drive restore game speed

```
mirv_time drive default
```

### Driving mirv_time with <tt>[[mirv_cmd|Source:mirv_cmd]]</tt> curves

```
// Example config for driving time with mirv_cmd curves:
mirv_cmd clear
mirv_cmd addCurves tick 1000 4000 - interp=cubic space=abs 1000 1 1300 2 1600 0.5 1900 2 2100 0.5 2500 2 2800 1 3100 2 3400 0.5 3700 2 4000 1 - interp=linear 0 0 1 100 -- "mirv_time drive {0}; echo {1}% finished: driving: {0}"
mirv_cmd addAtTick 4000 "mirv_time drive default"
```

# See also

* [[Source:Commands]]