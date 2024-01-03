---
title: mirv_force_spectatortools
---

# mirv_force_spectatortools

## Supported Games
- Counter-Strike: Global Offensive

## mirv_force_spectatortools

`mirv_force_spectatortools 0|1`
Enable(1) / Disable(0) allowing spectator tools.

- e.g. makes spec_show_xray 1 work
- and also enables scoreboard (TAB) work
- drawoverviewmap command in POV demos (most useful in fake mirv_pov POV demos). By default the overview map will show enemies (at least in mirv_pov fake POV demos). If you don't want that set `mirv_cfg mirvForceSpectatorToolsMapOverviewShowAll 0`, however toggling this during the demo can have unwanted side effects on the visibility of enemies (untested)

## See also
- [[Source:Commands]]