---
title: CS:GO-Separate-HUD-Stream
---

# CS:GO-Separate-HUD-Stream

How to separate the HUD from the game footage and composite it again.

## Video Tutorials

### Adobe After Effects:
* ENG: https://youtu.be/mnlIlwUURPg
* RU: https://youtu.be/wd4Ofgt2B5o

### Sony Vegas:  
* ENG: https://youtu.be/fpySV41IvY8
* RU: https://youtu.be/09WXbbr9hbA

### Separate HUD Config:

```
mirv_streams add normal main
mirv_streams add hudBlack hudBlack
mirv_streams add hudWhite hudWhite
```

### Mathematical details

```
Variable names / description:

game - original colour output by game on screen (with HUD)
a - original alpha used by game for HUD)

hud - original game HUD colour

bg - "main" stream, original game background (everything drawn without HUD)

hudBlack - "hudBlack" stream
hudWhite - "hudWhite" stream

vegas - Output in Sony Vegas.

aeMain - The composition with bg stream, which you probably mainly will want to edit and add effects.
aeGame - Output in Adobe After Effects.

Formulae:
Don't forget that we are in _clamped_ RGB space, so you need to take extra care when manipulating the formulae!

game = a * hud + (1-a) * bg

hudWhite = a * hud + (1-a) * 1
hudBlack = a * hud + (1-a) * 0

vegas = ((hudWhite - hudBlack)) * bg +(1-(hudWhite - hudBlack)) * 0 + hudBlack
= (1-a) * bg + a * hud
= game

aeMain = bg
aeGame = (hudWhite-hudBlack) * aeMain + (1-(hudWhite-hudBlack)) * 0 + hudBlack
= (1-a) * bg + a * hud
= game
```

## Separate scope / death notifications (Scaleform UI)

**Does not work with current CS:GO version / Panorama UI anymore!**

It is possible to have streams that either have the scope or the death notifications, example:

Try this:
```
mirv_cvar_unhide_all // required, since r_drawscaleform is hidden
mat_queue_mode 0 // required, since won't work with multi threading
cl_draw_only_deathnotices 1

// streamNoUI = everything but death notifications
mirv_streams add basefx streamNoUI 
mirv_streams edit streamNoUI drawHud -1
mirv_streams edit streamNoUI attachcommands "r_drawscaleform 0"
mirv_streams edit streamNoUI detachcommands "r_drawscaleform 1"

// streamNoScope = everything but scope
mirv_streams add basefx streamNoScope
mirv_streams edit streamNoScope drawHud -1
mirv_streams edit streamNoScope attachcommands "mirv_vpanel hide HudZoom"
mirv_streams edit streamNoScope detachcommands "mirv_vpanel show HudZoom"
```

These techniques can be combined with HUD Separation (see above).