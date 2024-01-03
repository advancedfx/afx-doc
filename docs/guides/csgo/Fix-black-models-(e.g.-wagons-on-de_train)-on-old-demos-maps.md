---
title: Fix-black-models-on-old-demos-maps
order: 14
---
## Fix black models (e.g. wagons on de_train) on old demos/maps

```
mirv_cvar_unhide_all; r_staticlight_streams 1
```

Don't forget to set back to default (usually 3) after being done.

![Before and After comparison image](https://user-images.githubusercontent.com/3610128/95822264-d9935b80-0d2b-11eb-8c0d-3491847162d8.jpg)

## Tetris boxes on mirage

This is probably not quite the same problem, but you can dampen those Tetris boxes on old mirage demos with:
```
mirv_cvar_unhide_all; r_staticlight_streams 1; mat_ambient_light_r 0.1; mat_ambient_light_g 0.1; mat_ambient_light_b 0.1
```
Not sure if it affects the rest of the level badly.

## See also
- [[Commands|Source:Commands]]