---
title: __mirv_demozoom
---

# __mirv_demozoom

# __mirv_demozoom

This command allows to block or override DemoZoom / FOV (field of view) settings from in-eye demos.
This is i.e. used in [[GoldSrc:Mod:cstrike]] when weapons are zoomed, thus this command can be useful when there is a problem with the zoom in a demo.

## block

Syntax:
```
__mirv_demozoom block
```

Enter this command to block any updates from the demo stream.

## set

Syntax:
```
__mirv_demozoom set <fov>
```

Replace `<fov>` with a value (filed of view in degrees) that shall override values from the demo stream.

## default

Syntax:
```
__mirv_demozoom default
```

Restores the game's standard behaviour.

# See also

* [[GoldSrc:Commands]]