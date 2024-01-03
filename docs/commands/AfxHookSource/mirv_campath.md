---
title: mirv_campath
order: 20
---

# mirv_campath

This command allows to make campaths easily.

**Table of Contents**

* [Demo type specific requirements](#demo-type-specific-requirements)
  * [GOTV](#gotv)
  * [POV](#pov-in-eye-demos)
* [Adding camera keyframes](#add-camera-keyframes-to-the-path)
* [Enabling the campath](#enable-the-current-path)
* [Draw the campath on screen](#draw-the-current-path-on-screen)
  * [Changing the visuals](#change-the-visualization-of-the-campath-keyframes)
  * [Supported modifications](#supported-modifications-for-mirv_campath-draw)
  * [System requirements](#system-requirements-for-drawing-the-path)
* [Printing info about the campath](#printing-info-about-the-path)
* [Removing keyframes](#removing-keyframes)
* [Saving a campath to a local file](#saving-a-path-to-a-local-file)
* [Loading a campath from a local file](#loading-a-path-from-a-local-file)
* [Path editing tools](#path-editing-tools)
  * [Setting a new time](#setting-the-path-to-start-at-a-new-time)
  * [Scaling the duration](#scaling-the-duration-of-the-path)
  * [Further editing tools](#further-editing-tools)
* [Selecting keyframes](#keyframe-selection-tools)
* [Workflow examples](#workflow-examples)
  * [#1: Adding keyframes in slowed demo time](#1-adding-keyframes-in-slowed-demo-time)
  * [#2: Using mirv_input camera in a paused demo](#2-using-mirv_input-camera-in-a-paused-demo)
  * [#3: Campath with only 2 keyframes](#3-campath-with-only-2-keyframes-requires-linear-interpolation)
  * [#4: Saving, editing and loading a campath from a file](#4-saving-editing-and-loading-a-campath-from-a-file)
* [Related wiki pages](#related-wiki-pages)

# Demo type specific requirements

## GOTV

None, switching to free camera mode is recommended.

## POV (in-eye) demos

For POV demos you should switch to thirdperson mode and enable <tt>mirv_input camera</tt> mode as described  here:<br />
[[mirv_input - Third person camera|Source:mirv_input#third-person-camera]]

# Add camera keyframes to the path

<tt>mirv_campath add</tt>

Adds the current time and view to the path. If you happen to exactly hit a time already set in the path, then it will be overwritten.

Currently you need to add at least 4 keyframes before you can enable the camera path.

# Enable the current path

<tt>mirv_campath enabled _0|1_</tt>

If you enter 1 the path is enabled (or enter 0 to disable).

Currently you need to add at least 4 keyframes before you can enable the camera path.

# Draw the current path on screen

<tt>mirv_campath draw enabled _0|1_</tt>

If you enter <tt>mirv_campath draw enabled 1</tt> the path will be drawn on screen, assuming that your modification is supported.

## Change the visualization of the campath keyframes

<tt>mirv_campath draw keyAxis 0|1</tt> (default 0)

<tt>mirv_campath draw keyCam 0|1</tt> (default 1)

`mirv_campath draw keyIndex <value>` // draws the id of each keyframe, a higher value will increase the size. 0 to disable it.

## Supported modifications for mirv_campath draw

* Counter-Strike: Global Offensive
* Modifications similar to the Source SDK 2013, e.g. Counter-Strike: Source

## System requirements for drawing the path

* PixelShader version 2.0 must be supported
* VertexShader version 2.0 must be supported

# Printing info about the path

<tt>mirv_campath print</tt>

Prints all information you need to know about the campath keyframes (such as; keyframe id, time, position, rotation, fov etc) and the current demo time you are at.

# Removing keyframes

<tt>mirv_campath remove _&lt;id&gt;_</tt>

Removes the keyframe with the number _&lt;id&gt;_, which you can get from <tt>mirv_campath print</tt>

<tt>mirv_campath clear</tt> // removes **all** keyframes, unless you have [selected](#keyframe-selection-tools) a keyframe(s)

# Saving a path to a local file

<tt>mirv_campath save _&lt;filename&gt;_</tt>

Saves the campath to file _&lt;filename&gt;_ in XML format, if specified. The information in this file will basically be the same info as `mirv_campath print` and you should be able to open it with Notepad or similar software.

If no file path is specified, the file will be saved to where the game .exe file is located.

# Loading a path from a local file

<tt>mirv_campath load _&lt;filename&gt;_</tt>

Loads a campath from file _&lt;filename&gt;_ which was saved from <tt>mirv_campath save</tt> (see above).

If no file path is specified, the file will be loaded from where the game .exe file is located.

Currently the path needs to be enabled again after loading it:

<tt>mirv_campath enabled 1</tt>

# Path editing tools

## Setting the path to start at a new time

<tt>mirv_campath edit start</tt>

Offsets the whole current path to start at the current time.

## Scaling the duration of the path

<tt>mirv_campath edit duration _&lt;dValue&gt;_</tt>

Sets a new duration for the path in seconds using the floating point value _&lt;dValue&gt;_. In the unlikely event that due to rescaling several keyframes land on the same time, the value of the last keyframe will be used (no interpolation is done).

## Further editing tools

There are further editing tools available (edit position / fov / angles of all or selected keyframes etc).

To get a list and help for those enter <tt>mirv_campath edit</tt> into the console.

# Keyframe selection tools

Keyframes can be selected with <tt>mirv_campath select</tt>

Please enter it without further options in the console to list all available sub-commands and a few handy examples in the console.

When keyframes are selected, then the <tt>mirv_campath clear</tt> and <tt>mirv_campath edit</tt> functions will only be applied to the selected keyframes. If none are selected they are applied to all keyframes. (So after clearing the selected keyframes, no keyframes will be selected and thus you probably don't want to clear them again, since that would clear the whole path then).

Selected keyframes / path parts will be shown in inverted colour if <tt>mirv_campath draw</tt> is enabled.

# Workflow examples

With what we have learned from the commands above, listed below are some example workflows using the campath feature.

## #1: Adding keyframes in slowed demo time

1. Fly to a location (and time) where you want the campath to start
2. Set the demo speed to 1/4x (25%) (to follow the action more easily)
3. `mirv_campath add` (or use a key bind for that command)
4. As the demo plays slowly, fly the camera to another nearby location and do `mirv_campath add`
5. Repeat the previous step (4) until you have added at least 4 campath keyframes
6. Pause the demo (bind a key to `demo_togglepause` if you don't want to use the demo player)
7. `mirv_campath print` to make sure that you have added >=4 keyframes
8. `mirv_campath enabled 1` // to activate the campath
9. Now you need to go back in time, which there are several ways to do:<br>
   a. `demo_gototick <tick>` // enter a tick that takes place before the first keyframe<br>
   b. `mirv_skip time -x` // _x_ is how many seconds to go back in time
10. Once you have gone back far enough in time, the campath will start when you play the demo and it reaches the tick/time of the first campath keyframe

## #2: Using mirv_input camera in a paused demo

1. Go into the free camera mode if you haven't already
2. Go to a time where you want the campath to start
3. Pause the demo
4. `mirv_input camera` // to be able to fly around while the demo is paused<br>
   _Note that some of your binds may not work while in this mode_<br>
   _and you can only move around while the console is closed_
5. Fly to a location where you want the campath to start and do `mirv_campath add`
6. `mirv_skip time 1.5` // to go forwards in time by 1.5 seconds
7. Fly to another nearby location and do `mirv_campath add`
8. Repeat steps 6 + 7 until you have added at least 4 keyframes
9. `mirv_campath print` to make sure you have added >=4 keyframes
10. Exit the camera mode by either pressing `ESC` or typing `mirv_input end`
11. `mirv_campath enabled 1` // to activate the campath
12. Now you need to go back in time, use one of these commands:<br>
    a. `demo_gototick <tick>` // enter a tick that takes place before the campath<br>
    b. `mirv_skip time -x` // _x_ is how many seconds to go back in time
13. The campath will start once you play the demo and it reaches the tick/time of the first campath keyframe

## #3: Campath with only 2 keyframes (requires linear interpolation)

1. Fly to a location (and time) where you want the campath to _start_
2. `mirv_campath add`
3. Fly to another location (and different time) where you want the campath to _end_
4. `mirv_campath add`
5. `mirv_campath print` to make sure you added both keyframes
6. `mirv_campath edit interp position linear`<br>
   `mirv_campath edit interp rotation sLinear`<br>
   `mirv_campath edit interp fov linear` // these commands change the interpolation to linear
7. `mirv_campath enabled 1`
8. Go back in time before the first keyframe and play the demo

## #4: Saving, editing and loading a campath from a file

1. Create a campath, either with your own method or using one of the examples above
2. `mirv_campath save name.xml` // the file will be created in the game .exe folder
3. `Alt`+`Tab` from the game and open the file with Notepad++ (recommended) or similar software<br>
   _The information inside the file will be similar to `mirv_campath print`
     and you can make changes directly to the file, rather than editing the campath in-game with commands_
4. Save the file when you have made changes to it
5. Go in-game and load the file: `mirv_campath load name.xml`
6. `mirv_campath enabled 1` // only needs to be typed once if you stay in-game
7. Go to a time just before the first keyframe and play the demo
8. (Optional) Repeat the process starting from step 3 to make further changes

# Related wiki pages

* [[Source:mirv_input]]
* [[Source:Order of camera overrides]]