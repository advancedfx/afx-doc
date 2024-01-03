---
title: HLAE cameramotion and Blender
order: 22
---

# Prerequisites

Mandatory:
* You should know some HLAE basics, see [[GoldSrc:First Steps]] tutorial

Recommended:
* Some basic Blender knowledge would be handy, finishing the [[Importing maps in Blender]] tutorial might be a good exercise.

# Objective

In this tutorial we will explore one of the many possibilities to play around with the HLAE camera motion data export / import and Blender.

We will outline the basic steps from exporting a camera path from the game with HLAE, importing it into Blender, exporting it and importing it into the game again.

# Export with HLAE

At first we need to launch the game with HLAE and load up the demo we want to recam.

Next we will enter the following commands into the game's console:

<tt>[[mirv_movie_splitstreams|GoldSrc:mirv_movie_splitstreams]] 4</tt><br />
<tt>[[mirv_camexport_mode|GoldSrc:mirv_camexport_mode]] 1</tt><br />
<tt>[[mirv_movie_fps|GoldSrc:mirv_movie_fps]] 90</tt>

<tt>[[mirv_movie_splitstreams|GoldSrc:mirv_movie_splitstreams]] 4</tt> tells HLAE to disable the standard streams, so it will export the enabled camera motion data stream (<tt>[[mirv_camexport_mode|GoldSrc:mirv_camexport_mode]] 1</tt>) only.

You should set the <tt>[[mirv_movie_fps|GoldSrc:mirv_movie_fps]]</tt> setting to the FPS/SPS you are planning to record your final game footage at.


Now start recording with HLAE as usual, fly around with your camera to get the draft, and then finish recording again (or simply watch a player in-eye, so you get the exact path he/she moved).

In case everything went right you should have a <tt>.bvh</tt>-file in the folder HLAE was set to record to.


# Setting up Blender

Before starting to work with Blender we need to install the **Blender HLAE Camera motion data Import** and **Blender HLAE Camera motion data Export** plugins.

Obtain a copy of each from the advancedfx.org download page and extract the <tt>hlae_camexport.py</tt> and <tt>hlae_camimport.py</tt> into your Blender scripts folder.

For Windows XP you should put them into the <tt>C:\Program Files\Blender Foundation\Blender\.blender\scripts</tt> folder.

If you put them in the right folder you should see a &quot;HLAE camera motion (.bvh)&quot; entry in the Export and Import sub-menus of the Blender File menu.


# Importing camera motion data into Blender

* Now the obligatory [[Importing maps in Blender]] tutorial would come in handy, cause in case you import the right map, the camera path import will fit perfectly into it :)

First set the Blender project render settings to the frame rate you recorded your path at, since the HLAE import and export plug-in will import / export frame-wise.

To import the camera use the HLAE camera motion import plug-in we set-up in the previous step:

<tt>Blender menu -&gt; File -&gt; Import -&gt; HLAE camera motion (.bvh)</tt>

The default import settings should be fine, so you can just confirm the box that pops up.

In case everything went fine, you should have a new camera object and if you check it's IPO curve editor you will see the keyframes that the import plugin imported from the bvh file:

[<img alt="Blender motion data and map" src="https://user-images.githubusercontent.com/3610128/63039905-9ab60b80-bec4-11e9-994c-eda3b75dcf1d.jpg" width="300" height="203">](https://user-images.githubusercontent.com/3610128/63039905-9ab60b80-bec4-11e9-994c-eda3b75dcf1d.jpg)


# Manipulation in Blender

This is truly beyond the scope of the notes, you could either use the path you imported for setting up a own camera (path) inside blender or manipulate and smooth it directly using the IPO curves editor.


# Exporting from Blender

The HLAE Camera Motion Export plugin can export the motion of any Blender object you like.

Simply select a single object (i.e. the camera we imported) inside Blender by right clicking it and then use the plugin:

<tt>Blender menu -&gt; File -&gt; Export -&gt; HLAE Camera motion (.bvh)</tt>

In the box that pops up you might want to check if the starting frame and the end frame fit the start and the end of your path in Blender:

![Blender HLAE camera motion export dialogue](https://user-images.githubusercontent.com/3610128/63040027-d9e45c80-bec4-11e9-9d50-de986c6477bc.gif)

The FPS setting only controls the frame rate of the output file, the export plug-in will simply export each frame in the range you set.


# Importing in HLAE

Copy the newly created .bvh file (I named it test.bvh) to your counter-strike directory.

Launch the game again, load up the demo and switch to 3rd person view / in-eye.

Since we only want to test our path and not record yet enter the following commands into the console:

<tt>[[mirv_movie_splitstreams|GoldSrc:mirv_movie_splitstreams]] 4</tt><br />
<tt>[[mirv_recordmovie_start|GoldSrc:mirv_recordmovie_start]]</tt>

Enter the following command to load and instantly play the camera path:

<tt>[[mirv_camimport_load|GoldSrc:mirv_camimport_load]] &quot;test.bvh&quot;</tt>

In case everything works HLAE should override the current camera with the frames from the file.
Now it will be important that you exported the file with a high enough framerate, since HLAE doesn't do any interpolation between the frames.

# See also

* [msthavoc's YouTube account](http://www.youtube.com/msthavoc), he has many video tutorials related to camera motion data import and export (also showing how to get specific timings using [[DemoEdit|GoldSrc:DemoEdit]] stufftext commands and so on) - while those are for other 3D programs like c4d / 3ds, the steps related to HLAE remain the same. There is even a tutorial how to do it with Counter-Strike Source, which should work similar for Blender.
* [[Camera Motion Data]]
* [[mirv_camexport_mode|GoldSrc:mirv_camexport_mode]]
* [[mirv_camimport_load|GoldSrc:mirv_camimport_load]]

