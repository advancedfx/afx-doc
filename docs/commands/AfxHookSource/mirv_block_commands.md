---
title: mirv_block_commands
---

# mirv_block_commands

Allows to block commands recorded in demos for example, but can also be used to block commands from other sources.

## Supported Games

Only Counter-Strike: Global Offensive is supported.

# Usage

`mirv_block_commands add 0|1|2|3|4|5 "command"` where each value represents which part of the game will be blocked.

### What do the values mean?

* 0 = Engine code
* 1 = Engine interface "ClientCommand"
* 2 = User input
* 3 = Net client (client.dll)
* 4 = Net server (server.dll)
* 5 = Demo file

# Example
`mirv_block_commands add 5 "volume\*"`<br>
Blocks all commands in demos starting with "volume" (e.g. volume change scripts).

## Built-in Help

Enter `mirv_block_commands` in the console for built-in command help.

# See also
* [[Source:Commands]]