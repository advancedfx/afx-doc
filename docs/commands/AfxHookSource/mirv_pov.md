---
title: mirv_pov
---

# mirv_pov

Turns a GOTV demo into a fake POV demo for the chosen player index.

## Supported Games

Counter-Strike: Global Offensive

# Usage

`mirv_pov <playerIndex>` // enter the entity index of the player you want to have the POV of **_before_** loading the GOTV demo

To find the index number, load the demo and enter `mirv_listentities isPlayer=1` once the player has joined; The index is the number in the first (left-most) column.

**Note**: [[mirv_fix forcePostDataUpdateChanged|Source:mirv_fix#mirv_fix-forcepostdataupdatechanged]] can also be used with this.

To disable set to 0 (default).

## Player Crosshair

When using mirv_pov the cl_show_observer_crosshair 0|1|2 engine command is supported (you probably want to set it to 2).