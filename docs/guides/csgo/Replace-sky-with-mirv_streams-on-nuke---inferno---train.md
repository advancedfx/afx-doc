## HLAE, without mirv_streams

### nuke / inferno / train / cobblestone / vertigo

**To use a different sky on current version of nuke / inferno / train / cobblestone do this:**

```
mirv_cvar_unhide_all
mat_suppress "models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_skydome_001"
sv_skyname <skyName>
```

#### To hide clouds on cobblestone / vertigo
```
mat_suppress "models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_clouds_001"
mat_suppress "models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_clouds_002"
```

#### To hide mountains on cobblestone / vertigo
```
mat_suppress "models\props\de_cbble\dist_mountain_a\dist_mountain_a.mdl"
```

### dust2
```
mirv_cvar_unhide_all
mat_suppress "models/props/de_dust/hr_dust/dust_skybox/sky_dust2"
sv_skyname <skyName>
```

#### To hide clouds as well:

```
mat_suppress "models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_clouds_002"
```

## HLAE + mirv_streams

### nuke / inferno / train / cobblestone / vertigo

**To use a different sky on current version of nuke / inferno / train / cobblestone do this:**

```
mirv_streams add baseFx <streamName>
mirv_streams edit <streamName> actionFilter add "models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_skydome_001" noDraw
mirv_streams preview <streamName>
sv_skyname <skyName>
```

**Hint: if you want to hide the additional clouds too, use the mirv_streams picker as in the tutorial below to find the material name.**

#### To hide clouds on cobblestone / vertigo
```
mirv_streams edit <streamName> actionFilter add "models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_clouds_001" noDraw
mirv_streams edit <streamName> actionFilter add "models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_clouds_002" noDraw
```

#### To hide mountains on cobblestone
```
mirv_streams edit <streamName> actionFilter add "models\props\de_cbble\dist_mountain_a\dist_mountain_a.mdl" noDraw
```

### dust2

Replace `<streamName>` with a name of your choice that's not used yet.

```
mirv_streams add baseFx <streamName>
mirv_streams edit <streamName> actionFilter add "models/props/de_dust/hr_dust/dust_skybox/sky_dust2" noDraw
mirv_streams preview <streamName>
sv_skyname <skyName>
```

#### To hide clouds as well:
```
mirv_streams edit <streamName> actionFilter add "models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_clouds_002" noDraw
```

## Background info

The problem is that the sky dome used on train / inferno / nuke looks very similar to the sky behind, meaning with mirv_streams picker you won't notice much of a difference whether it's not drawn / drawn, which results that it's hard to find in picker (you might give the picker a "wrong" answer due to that).

If you knew that problem, you could have made skyBoxTexturesAction temporarily "mask" (green), so that you can detect it more easily, that way we could have found that the material path / name is "models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_skydome_001".

## See also

* [mirv_streams picker tool - Hiding materials, entities and more](https://github.com/advancedfx/advancedfx/wiki/Tutorials#mirv_streams-picker-tool---hiding-materials-entities-and-more)