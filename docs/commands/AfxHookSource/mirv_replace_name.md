---
title: mirv_replace_name
---

# mirv_replace_name

This command allows to replace names in the death notices and bottom bar, however it won't replace GOTV player bars on the left / right side of the screen.

# Supported games

Counter-Strike: Global Offensive

# Examples

The user ID and XUID can be found with `mirv_listentities isPlayer=1`

* `mirv_replace_name filter add <userID> Name`
* `mirv_replace_name filter add x<XUID> "Example name"`

It is also possible to do it by player's the spectator key number:

* `mirv_replace_name filter add k<spectatorKeyNumber> Name`

Without knowing a player's id you can use one of these commands:

* `mirv_replace_name filter add trace Name` // traces and uses the user ID of the spectated (POV) player
* `mirv_replace_name filter add xTrace "Example name"` // traces and uses the XUID of the spectated (POV) player

Note that the XUID is tied to a player's Steam account while their user ID depends on the demo. 

Enter `mirv_replace_name filter` in the console to get more help.

## Remove matching

You can easily remove specfiic entries form the list:

* `mirv_replace_name filter removeMatching <userid>`
* `mirv_replace_name filter removeMatching trace` // remove entries matching uid of the player hit from a ray from the middle of the screen
* `mirv_replace_name filter removeMatching x<XUID>`
* `mirv_replace_name filter removeMatching xTrace` // remove entries matching XUID of the player hit from a ray from the middle of the screen
* `mirv_replace_name filter removeMatching k<spectatorKeyNumber>`


# Old method

The user ID can be found with `mirv_listentities isPlayer=1`

`mirv_replace_name <userID> Name` or `mirv_replace_name <userID> "Example name"` when using spaces in names.

# See also

* [[Source:mirv_deathmsg]]
* [[Source:Commands]]