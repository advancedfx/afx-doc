---
title: Spectator-smooth
---

# Spectator-smooth

## mirv_input cfg smooth

- AfxHookGoldSrc / AfxHookSource / AfxHookSource2

```
// Example for mirv_input cfg smooth:
// For key assignment see: https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_input#mirv_input-camera (New mouse buttons (left / right) + mousemove and mousewheel are not documented there yet.)

mirv_input cfg ksens 1
mirv_input cfg msens 0.05

mirv_input cfg smooth halfTime 0.5 // sets all half life time for vec (position), and (rotation), fov (field of view) to same value in seconds.

// Uncomment to set independently:
//mirv_input cfg smooth halfTimeVec 0.5
//mirv_input cfg smooth halfTimeAng 0.5 // Tip: Use 0 value to disable smoothing, or use e.g. 0.1 value for lower delay and less smoothing.
//mirv_input cfg smooth halfTimeFov 0.5

//mirv_input cfg smooth rotShortestPath 0 // Uncomment / try this on 0 when bored, default 1 is cooler, but already snaps at 180°.

alias "afx_smooth_on" "mirv_input cfg smooth enabled 1; mirv_input cfg offsetMode ownLast; mirv_input cfg mouseMoveSupport 1; mirv_input camera"
alias "afx_smooth_off" "mirv_input end; mirv_input cfg offsetMode last; mirv_input cfg mouseMoveSupport 0; mirv_input cfg smooth enabled 0"

afx_smooth_on

echo "enter afx_smooth_off to turn smooth off"
```

## mirv_calcs

- AfxHookSource / CS:GO only.

```
// Bonus config for smoothing the camera:
// For key assignment see: https://github.com/advancedfx/advancedfx/wiki/Source%3Amirv_input#mirv_input-camera (New mouse buttons (left / right) + mousemove and mousewheel are not documented there yet.)

mirv_input cfg ksens 1
mirv_input cfg msens 0.05

// The smooth uses a trackhandle that when changes resets the smoothing, since we want to always smooth we use a constant handle value (-1):
mirv_calcs handle add value invalid -1
mirv_calcs cam add current game
mirv_calcs cam add smooth smooth game invalid

mirv_calcs cam edit smooth halfTime 0.5 // sets all half life time for vec (position), and (rotation), fov (field of view) to same value in seconds.

// Uncomment to set independently:
// mirv_calcs cam edit smooth halfTimeVec 0.5
// mirv_calcs cam edit smooth halfTimeAng 0.5 // Tip: Use 0 value to disable smoothing, or use e.g. 0.1 value for lower delay and less smoothing.
// mirv_calcs cam edit smooth halfTimeFov 0.5
mirv_calcs vecAng add cam smooth smooth
mirv_calcs fov add cam smooth smooth

alias "afx_smooth_on" "mirv_cam order move input 0; mirv_cam source calcVecAng smooth; mirv_cam fov calc smooth; mirv_input camera; mirv_input cfg offsetMode ownLast; mirv_input cfg mouseMoveSupport 1"
alias "afx_smooth_off" "mirv_input end; mirv_cam source calcVecAngClear; mirv_cam fov calcClear; mirv_cam order default; mirv_input cfg offsetMode last; mirv_input cfg mouseMoveSupport 0"

afx_smooth_on

echo "enter afx_smooth_off to turn smooth off"
```

## See also
- [[mirv_input|Source:mirv_input]]