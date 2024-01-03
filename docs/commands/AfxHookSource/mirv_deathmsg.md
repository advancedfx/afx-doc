---
title: mirv_deathmsg
---

# mirv_deathmsg

This command allows to filter death notifications and to control the death notification display time.

**Table of Contents**
* [Supported Games](#supported-games)
* [Script by Chet Jong](#script-by-chet-jong)
* **Examples**
  * [The display time of death notices](#the-display-time-of-death-notifications)
  * [How to block everything except a specific player](#how-to-block-everything-except-a-specific-player)
  * [How to highlight a specific player (red border)](#how-to-highlight-red-border-a-specific-player)
  * [Block everything except multiple players](#block-everything-except-specific-multiple-players)
  * [Block everything except multiple players + highlight (red border)](#block-everything-except-specific-multiple-players--highlight-red-border)
  * [Highlight multiple players without blocking](#highlight-red-border-only-specific-multiple-players-without-blocking)
  * [Hiding icons](#hiding-icons)
  * [More examples](#more-examples)
* [More options](#more-options)
* [Selection of players](#selection-of-players)
* [Match negation](#match-negation)

# Supported Games

Only Counter-Strike: Global Offensive is supported!


# Script by Chet Jong

This script toggles on/off to limit the death notices to the currently spectated player.

```
alias "localplayer" "localplayer_on"
alias "localplayer_on" "mirv_deathmsg filter add attackerMatch=!xTrace block=1 lastRule=1;alias localplayer localplayer_off;echo KILLFEED: ONLY LOCAL PLAYER"
alias "localplayer_off" "mirv_deathmsg filter clear;alias localplayer localplayer_on;echo KILLFEED: DEFAULT"

unbind h
bind "h" "localplayer" 
```

# Examples

## The display time of death notifications

`mirv_deathmsg lifetime` // allows to set the display time of normal death notices in seconds. To clear notices set `mirv_deathmsg lifeTime default` (or even 0) and rewind back to e.g. the round start.

`mirv_deathmsg lifetimeMod` // a multiplier in seconds for the localPlayer (red border), so the display time of those notices is lifetime * lifetimeMod

## How to block everything except a specific player:

1) `mirv_listentities isPlayer=1` // note down the XUID (replace <XUID> below with it)
2) `mirv_deathmsg filter clear`
3) `mirv_deathmsg filter add attackerMatch=!x<XUID> victimMatch=!x<XUID> block=1 lastRule=1`

## How to highlight (red border) a specific player:

1) `mirv_listentities isPlayer=1` // note down the XUID (replace <XUID> below with it)
2) `mirv_deathmsg localPlayer x<XUID>`

## Block everything except specific multiple players:
```
mirv_deathmsg filter clear
mirv_deathmsg filter add block=1
// Repeat these two for every player <XUID> you want to see:
mirv_deathmsg filter add attackerMatch=x<XUID> block=0
mirv_deathmsg filter add victimMatch=x<XUID> block=0
```

## Block everything except specific multiple players + highlight (red-border):
```
mirv_deathmsg filter clear
mirv_deathmsg filter add block=1
// Repeat these two for every player <XUID> you want to see:
mirv_deathmsg filter add attackerMatch=x<XUID> attackerIsLocal=1 block=0 
mirv_deathmsg filter add victimMatch=x<XUID> victimIsLocal=1 block=0
```

## Highlight (red-border) only specific multiple players, without blocking
```
mirv_deathmsg localPlayer default
mirv_deathmsg filter clear
mirv_deathmsg filter add attackerIsLocal=0 victimIsLocal=0
// Repeat these two for every player <XUID> you want to highlight:
mirv_deathmsg filter add attackerMatch=x<XUID> attackerIsLocal=1
mirv_deathmsg filter add victimMatch=x<XUID> victimIsLocal=1
```

## Hiding icons

`mirv_deathmsg filter add noscope=0 thrusmoke=0 attackerblind=0`

For a full list of options, enter `mirv_deathmsg filter add` in the console.

## More examples

* `mirv_deathmsg fake attackerId=4 victimId=5 weapon=ak47 headshot=1` // will make a death notice for the player with userID 4 killing the player with userId 5 with a headshot from ak47, will only work if one death message has been shown already.
* `mirv_deathmsg localPlayer xTrace` // sets the current POV player as localPlayer by their XUID.
* `mirv_deathmsg lifeTime 100.5` // sets the next default death notice life time to 100.5 seconds, to clear notices set `mirv_deathmsg lifeTime default` (or even 0) and rewind back to e.g. the round start.
* `mirv_deathmsg lifeTimeMod 1.0` // sets the next default death notice life time multiplier for local player times 1.
* `mirv_deathmsg lifeTimeMod default` // restores default life time multiplier.
* `mirv_deathmsg filter add attackerMatch=!xTrace victimMatch=!xTrace block=1 lastRule=1` // block all death messages except of the player by XUID in the current POV.

# More options

There are more options for the `mirv_deathmsg` command and its sub-commands, just enter the command / sub-command without parameters to get help printed in the console.

## Selection of players

In many places of the commands you can select the players as follows:
- `1234` - player with user id 1234
- `x12345678901234` - player with user XUID 12345678901234
- `k2` - player on spectator key 2
- `xTrace` - the current player's XUID hit with a trace from the middle of the screen (if any)

## Match negation

The attackerMatch, victimMatch and assisterMatch match options support negation, by prefixing the selected player with an exclamation mark, e.g. `!k2` would match every player that is not on spectator key 2.

# See also

* [[Source:Commands]]