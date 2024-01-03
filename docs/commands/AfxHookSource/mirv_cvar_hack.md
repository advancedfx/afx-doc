---
title: mirv_cvar_hack
---

# mirv_cvar_hack

<tt>mirv_cvar_hack &lt;cvarName&gt; &lt;dValue&gt;</tt>

This command allows forcing a floating point value _&lt;dValue&gt;_ for a cvar named _&lt;cvarName&gt;_. This will only work for a subset of the cvars (console variables) and not cmds (console commands).

This is useful if you want to force values outside of the allowed range of the cvar.

Please use with caution!

# Supported games

Games with the VEngineCvar007 interface are supported, currently that is CS:GO. AfxHookSource prints the used interface into the console when the game is started.

# Examples

<tt>mirv_cvar_hack viewmodel_fov 90.0</tt>

# See also

* [[Source:Commands]]