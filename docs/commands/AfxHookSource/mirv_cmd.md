---
title: mirv_cmd
---

# mirv_cmd

This command is useful for scheduling commands to be executed at a specific (game) time.

Other option is [Valve's demoui PlayCommands](https://developer.valvesoftware.com/wiki/Demo_Recording_Tools#Demo_editor), which has a nice GUI.

## Built in command help / navigation

The manual doesn't cover all the options available through the mirv_cmd command. Basically enter the mirv_cmd command to get help for the current (sub-)command. If the help displays a subcommand with <tt>[...]</tt> behind it, then you can enter everything in-front to get more help for that sub-command.

## Save as / load from xml file

```
mirv_cmd save "test.xml"
mirv_cmd load "test.xml"
```

Files are stored relative to the game .exe folder.

## Animated commands / command curves

Example:

```
// Example config for driving time with mirv_cmd curves:
mirv_cmd clear
mirv_cmd addCurves tick 1000 4000 - interp=cubic space=abs 1000 1 1300 2 1600 0.5 1900 2 2100 0.5 2500 2 2800 1 3100 2 3400 0.5 3700 2 4000 1 - interp=linear 0 0 1 100 -- "mirv_time drive {0}; echo {1}% finished: driving: {0}"
mirv_cmd addAtTick 4000 "mirv_time drive default"
```

The example adds two commands:

The first command is executed between tick 1000 and 4000 with two curves that can be used inside the command: The first curve referred to by `{0}` is set to be interpolated cubicaly (needs at least 4 key-value pairs) and the key times are given in absolute space, the second referred to by `{1}` is interpolated linearly (needs at least 2 key-value pairs) and the key times are given in default relative space.

The second command is set to be executed at (approximately) tick 4000 in order to restore the default mirv_time drive.

# See also

* [[Source:Commands]]