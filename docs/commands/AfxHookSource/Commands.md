This page lists most of the HLAE ([[AfxHookSource]]) console commands for Source games.

# Command list

Command | Source 1 game support | Purpose
--- | --- | ---
[[afx_interop\|Source:afx_interop]] | CS:GO | Allows advanced interoperation between the game and own programs (more complex / complete than mirv_pgl) with emphasis on synchronized graphic / drawing related features
[[mirv_aim\|Source:mirv_aim]] | CS:GO | aiming the camera
[[mirv_agr\|Source:mirv_agr]] | CS:GO, CS:S, CS:SV34, TF2 | 3D motion data export
[[mirv_block_commands \|Source:mirv_block_commands ]] | CS:GO | Block commands from being executed (e.g. commands recorded in demos).
[[mirv_calcs\|Source:mirv_calcs]] | CS:GO | Re-usable function snippets mostly for advanced camera control
[[mirv_cam\|Source:mirv_cam]] | CS:GO + ? | Advanced camera control, mostly with mirv_calcs
[[mirv_camexport\|Source:mirv_camexport]] | several | old HLAE BVH camera motion data export
[[mirv_camimport\|Source:mirv_camimport]] | several | old HLAE BVH camera motion data import
[[mirv_camio\|Source:mirv_camio]] | several | new HLAE camera motion data export/import
[[mirv_campath\|Source:mirv_campath]] | several | Camera paths
[[mirv_cfg\|Source:mirv_cfg]] | several | Change various HLAE defaults
[[mirv_cmd\|Source:mirv_cmd]] | several | Schedule execution of commands and animate them with curves
[[mirv_cvar_hack\|Source:mirv_cvar_hack]] | CS:GO + ? | Allows to force console variables (including hidden ones) to values outside the allowed range
[[mirv_cvar_unhide_all\|Source:mirv_cvar_unhide_all]] | CS:GO + ? | Make hidden console commands and variables accessible
[[mirv_exec\|Source:mirv_exec]] | CS:GO | Execute commands with quote characters
[[mirv_deathmsg\|Source:mirv_deathmsg]] | CS:GO | Death notification related features
[[mirv_fix\|Source:mirv_fix]] | CS:GO | Various fixes
[[mirv_force_spectatortools \|Source:mirv_force_spectatortools ]] | CS:GO | Force enable spectator tools inside POV / mirv_pov demos
[[mirv_fov\|Source:mirv_fov]] | several | Field Of View related features
[[mirv_gameoverlay\|Source:mirv_gameoverlay]] | several | Control the Steam overlay
[[mirv_guides\|Source:mirv_guides]] | CS:GO | Controls drawing of guide overlays on-screen
[[mirv_input\|Source:mirv_input]] | several | Override game camera and control
[[mirv_listentities\|Source:mirv_listentities]] | CS:GO | Information about entities (objects) in the game engine
[[mirv_loadlibrary\|Source:mirv_loadlibrary]] | several | Load a DLL into CS:GO
[[mirv_models\|Source:mirv_models]] | CS:GO | Replace models
[[mirv_pgl\|Source:mirv_pgl]] | CS:GO | Connect / control the game via websocket to your own program and transfer data such as game events and more
[[mirv_pov\|Source:mirv_pov]] | CS:GO | Turn a GOTV demo into a fake POV (in-eye) demo
[[mirv_replace_name\|Source:mirv_replace_name]] | CS:GO | Override player names
[[mirv_replace_team_name\|Source:mirv_replace_team_name]] | CS:GO | Override team names
[[mirv_skip\|Source:mirv_skip]] | CS:GO + ? | Adjust the demo time with more precision
[[mirv_snd_filter\|Source:mirv_snd_filter]] | CS:GO | Filter (block) sounds
[[mirv_snd_timescale\|Source:mirv_snd_timescale]] | CS:GO | Control sound time scale independently
[[mirv_spec_player_key \|Source:mirv_spec_player_key ]] | CS:GO | Spectate player with given spectator key number
[[mirv_streams\|Source:mirv_streams]] | full: CS:GO;<br />screen only: Alien Swarm, TF2, CSS, CSSV34, Insurgency2 | Control one or multiple image streams to be recorded with special effects
[[mirv_time\|Source:mirv_time]] | CS:GO | Advanced time control. Beginners avoid it please!
[[mirv_traceentity\|Source:mirv_traceentity]] | CS:GO | Finding / tracing the entity under the crosshair to get info about it
[[mirv_voice\|Source:mirv_voice]] | CS:GO | Allows to filter out output player / caster voice separately
[[mirv_vpanel\|Source:mirv_vpanel]] | CS:GO | Features related to old VGUI2 panels of the game

# Built in command help / navigation

The manual doesn't cover all the options available through the commands. Basically enter the command into console without options to get help for that command. If the help console text displays a sub-command with [...] behind it, then you can enter everything in-front to get more help for that sub-command.