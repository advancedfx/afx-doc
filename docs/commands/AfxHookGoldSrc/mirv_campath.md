---
title: mirv_campath
---

# mirv_campath

This command allows to make campaths easily.

# Add camera points to the path

<tt>mirv_campath add</tt>

Adds the current time and view to the path. (If you happen to exactly hit a time already set in the path (which is unlikely), then it will be overwritten).

Currently you need to add at least 4 points before you can enable the camera path.

# Enable the current path

<tt>mirv_campath enable 0|1</tt>

If you enter 1 the path is enabled (or enter 0 to disable).

You might want to use <tt>[[mirv_fx_xtendvis|GoldSrc:mirv_fx_xtendvis]]</tt> in order to avoid player models not showing up, because the original camera position is different from the campath one.

Currently you need to add at least 4 points before you can enable the camera path.

# Clearing all points in the path

<tt>mirv_campath clear</tt>

# Printing points in the path

<tt>mirv_campath print</tt>

Prints all points in the path (if point has been already passed, id, time, position and rotation) and current time.

# Removing a point

<tt>mirv_campath remove _&lt;id&gt;_</tt>

Removes point with the number _&lt;id&gt;_, which you can get from <tt>mirv_campath print</tt> (See _Printing points in the path_ above).

# Saving a path

<tt>mirv_campath save _&lt;filename&gt;_</tt>

Saves a campath to file _&lt;filename&gt;_ in XML format.

If no file path is specified, the file we be saved to where the game .exe file is located.

# Loading a path

<tt>mirv_campath load _&lt;filename&gt;_</tt>

Loads a campath from file _&lt;filename&gt;_ which has to be in the XML format like saved from <tt>mirv_campath save</tt> (see _Saving a path_ above). For the format have a look at the file and the comments in it from a saved file.

If no file path is specified, the file we be loaded from where the game .exe file is located.

Currently the path needs to be enabled again after loading it:

<tt>mirv_campath enable 1</tt>

# Path editing tools

## Setting the path to start at a new time

<tt>mirv_campath edit start</tt>

Offsets the whole current path to start at the current time.

## Scaling the duration of the path

<tt>mirv_campath edit duration _&lt;dValue&gt;_</tt>

Sets a new duration for the path in seconds using the floating point value _&lt;dValue&gt;_. In the unlikely event that due to rescaling several points land on the same time, the value of the last point will be used (no interpolation is done),

# See also
* [[GoldSrc:Commands]]
