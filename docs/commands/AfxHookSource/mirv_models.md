---
title: mirv_models
---

# mirv_models

This command allows you to swap out and replace specific player models.

# Supported Games

Counter-Strike: Global Offensive

# Usage

`mirv_models replace byWcName add <OriginalPlayerModel> <NewPlayerModel>`

The original player model is the model you want to replace, and the second parameter is the model you want to replace it with. You need to either reload the demo, or enter these commands _before_ loading a demo for the changes to happen.

**Note**: The file names are case-sensitive.

### Example:

```
mirv_models replace byWcName clear
mirv_models replace byWcName add "models/player/custom_player/legacy/ctm_sas\*.mdl" "models/player/custom_player/legacy/tm_leet_variantA.mdl"
mirv_models replace byWcName add "models/player/custom_player/legacy/tm_leet\*.mdl" "models/player/custom_player/legacy/ctm_sas.mdl"
```

### Print out all models the engine requests for a demo (enter before loading a demo):
```
mirv_models replace byWcName debug 1
```

### Finding the model names with GCFScape

Open `pak01_dir.vpk` in the `csgo` folder with GCFScape and browse to: `models/player/custom_player/legacy/`