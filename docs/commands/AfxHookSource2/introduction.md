---
title: Introduction
order: 0
---

[[toc]]

# Counter Strike 2

This page lists most of the HLAE ([[AfxHookSource2]]) console commands for Counter-Strike 2.

# Command list

| Command                                                | Source 2 game support | Purpose                                               |
| ------------------------------------------------------ | --------------------- | ----------------------------------------------------- |
| [[mirv_camio\|Source2:mirv_camio]]                     | CS2                   | Camera import / export with FOV.                      |
| [[mirv_campath\|Source2:mirv_campath]]                 | CS2                   | Camera paths                                          |
| [[mirv_cmd\|Source2:mirv_cmd]]                         | CS2                   | Execute commands on a specific time or tick.          |
| [[mirv_cvar_unhide_all\|Source2:mirv_cvar_unhide_all]] | CS2                   | Make hidden console commands and variables accessible |
| [[mirv_input\|Source2:mirv_input]]                     | CS2                   | Override game camera and control                      |
| [[mirv_skip\|Source2:mirv_skip]]                       | CS2                   | Adjust the demo time with more precision              |

# Built in command help / navigation

The manual doesn't cover all the options available through the commands. Basically enter the command into console without options to get help for that command. If the help console text displays a sub-command with [...] behind it, then you can enter everything in-front to get more help for that sub-command.


This page lists most of the HLAE ([[AfxHookSource2]]) console commands for Counter-Strike 2.

# Command list

| Command                                                | Source 2 game support | Purpose                                               |
| ------------------------------------------------------ | --------------------- | ----------------------------------------------------- |
| [[mirv_camio\|Source2:mirv_camio]]                     | CS2                   | Camera import / export with FOV.                      |
| [[mirv_campath\|Source2:mirv_campath]]                 | CS2                   | Camera paths                                          |
| [[mirv_cmd\|Source2:mirv_cmd]]                         | CS2                   | Execute commands on a specific time or tick.          |
| [[mirv_cvar_unhide_all\|Source2:mirv_cvar_unhide_all]] | CS2                   | Make hidden console commands and variables accessible |
| [[mirv_input\|Source2:mirv_input]]                     | CS2                   | Override game camera and control                      |
| [[mirv_skip\|Source2:mirv_skip]]                       | CS2                   | Adjust the demo time with more precision              |

# Built in command help / navigation

The manual doesn't cover all the options available through the commands. Basically enter the command into console without options to get help for that command. If the help console text displays a sub-command with [...] behind it, then you can enter everything in-front to get more help for that sub-command.

# About

One of the hooks for HLAE is AfxHookSource2, which is a tiny hook for Counter-Strike 2. It doesn't have many features and we are not sure yet if we will pursue it.

# Commands

The command reference / list for AfxHookSource2 can be found [[here|Source2:Commands]].

## Launching Counter-Strike 2

Start HLAE.exe.

Open the custom loader: <tt>HLAE -> Menu -&gt; Tools -&gt; Developer -&gt; Custom Loader</tt>

* HookDLL: select the <tt>AfxHookSource2.dll</tt> located in the <tt>x64</tt> sub-folder.
* ProgramPath: select the cs2.exe in the `..\Steam\steamapps\common\Counter-Strike Global Offensive\game\bin\win64\` folder.
* CommandLine: <tt>-steam -insecure +sv_lan 1 -console -novid -sw -w 1920 -h 1080</tt>
* Environment variables (optional): <tt>USRLOCALCSGO=C:\path\to\your\mmcfg\folder</tt> (adjust the path to your system / needs!)

Click okay.
If launching was successful you should see a console message by advancedfx.org.

Don't join any VAC protected servers, that might get you VAC banned.