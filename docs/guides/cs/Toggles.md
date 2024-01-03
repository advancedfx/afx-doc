---
title: Toggles
---

# Toggles

Toggles are special commands that, when being bound to a key, can react when the key is being pressed and when it is being released again. (Normal commands would only react when the key is being pressed).

They can be bound to a key by entering the following into the game's console:

<tt>bind &quot;keyname&quot; &quot;+togglename&quot;</tt>

This will bind the toggle _togglename_ to the key named _keyname_.
When pressing the key down it will issue the _+togglename_ command
and when releasing the key _-togglename_ will be called.

For more information see various Half-Life 1 scripting sites on the net.


**Important notice for Team Fortress Classic mod (TFC) users:**<br />
You may want to avoid binding toggles in TFC, because when resuming into the game
it will call the key release event in case you bound the toggle to any key.<br />
We suggest binding the non-toggling versions linked above instead.

# List of toggles

Just look in the [[Command reference|GoldSrc:Commands]] for commands that start with <tt>+</tt> or <tt>-</tt>.

# See also

* [[GoldSrc:Commands]]
