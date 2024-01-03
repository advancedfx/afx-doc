---
title: First-Steps
---

# First-Steps

This step by step guide explains how to make your first capture with sound.

# Download and Installation

You can download the latest version of Half-Life Advanced Effects from [advancedfx.org](http://advancedfx.org/).

Just create a folder in a location you like (i.e. on your Desktop) and extract all the contents of the archive you just downloaded into it:

![extracted files](https://user-images.githubusercontent.com/3610128/63040967-00a39280-bec7-11e9-8611-b299e289ff95.gif)

# Starting HLAE and launching the game

In order to be able to launch the game later on, you'll need to have the Steam client running.
We recommend using Steam's [Offline Mode](https://support.steampowered.com/kb_article.php?ref=3160-AGCB-2555) during movie production.


Now start the **hlae.exe** and select launch from the menu:

![launch](https://user-images.githubusercontent.com/3610128/63040997-16b15300-bec7-11e9-8532-42d8f045dd4d.gif)


This will bring up the game launch dialog:

![launch dialogue](https://user-images.githubusercontent.com/3610128/63041304-d9999080-bec7-11e9-92a4-4081fd5f27c6.gif)

First, you should click the &quot;Browse ...&quot; button and browse to your game's hl.exe and select it (HLAE will remember the setting next time).
In case it's Counter-Strike, you can leave the modification set to cstrike and the rest of the options is okay for now.

This dialog also allows to set various other options, including the game's resolution and the [[Render Settings|GoldSrc:Render Settings]]. You can add _-demoedit_ to the command line, which enables [[DemoEdit|GoldSrc:DemoEdit]].


Hit _Launch_ to launch the game (if everything went right the game will display) and proceed to the next section :)

# Your first capture with sound

Let's check if HLAE has been successfully hooked into the game:
Open your console in CS by pressing the console key (key above TAB) and you'll see a notice similar to this one:

![console message](https://user-images.githubusercontent.com/3610128/63041028-2b8de680-bec7-11e9-917d-2dabafc4963e.gif)


Start a demo using the command _viewdemo DEMONAME_.
In the example below the demo is named _awp.dem_:

![viewdemo command](https://user-images.githubusercontent.com/3610128/63041049-38aad580-bec7-11e9-9132-1614bcda70d1.gif)


After some seconds your demo file is completely loaded.

![demo file loaded](https://user-images.githubusercontent.com/3610128/63041064-42343d80-bec7-11e9-8355-e17618c55b75.gif)


If you type mirv_movie you can see a list of possible commands appear:

![mirv_movie commands appearing](https://user-images.githubusercontent.com/3610128/63041114-59732b00-bec7-11e9-9a16-837cc6561ee9.gif)


First, we want to change the save location and the name of the image sequence we will capture.

To do that we use the command [[mirv_movie_filename|GoldSrc:mirv_movie_filename]], which we can use to set a filename or even a full path.

In our example we want to save in the directory mdttmp on the drive g: and give the files the name FILENAME, thus we enter <tt>mirv_movie_filename &quot;g:\mdttmp\FILENAME&quot;</tt> into console:

![mirv_movie_filname command entered](https://user-images.githubusercontent.com/3610128/63041127-68f27400-bec7-11e9-8788-b45d06f04ef2.gif)


After that we can change the FramesPerSecond with which the capture is recorded using the command <tt>[[mirv_movie_fps|GoldSrc:mirv_movie_fps]] 90</tt>. In our example we want to use 90, so we can do a nice slow motion later:

![mirv_movie_fps command entered](https://user-images.githubusercontent.com/3610128/63041153-714aaf00-bec7-11e9-94c7-d523c8d05064.gif)


If we want we can also turn on the depthdump using the command <tt>[[mirv_movie_depthdump|GoldSrc:mirv_movie_depthdump]] 1</tt>:

![mirv_movie_depthdump command entered](https://user-images.githubusercontent.com/3610128/63041173-7c9dda80-bec7-11e9-9742-794985d6c550.gif)

When enabled this gives us grayscale images that contain information on how far away objects are, which can be used for effects like Depth of Field, for example.


But now to a really handy feature:

Since 1.1 HLAE supports direct export of the game sound. So you don't need to record it separately with other programs like Audacity.

Enable the sound export by typing <tt>[[GoldSrc:mirv_movie_export_sound]] 1</tt>:

![mirv_movie_export_sound command entered](https://user-images.githubusercontent.com/3610128/63041213-93dcc800-bec7-11e9-8c83-7ad90960988e.gif)


Now we can start capturing our demo scene.
Just hit the play button on the viewdemo panel to play the demo.

To start the capture type the command <tt>[[mirv_recordmovie_start|GoldSrc:mirv_recordmovie_start]]</tt> into console.

When your scene is complete, stop the recording by entering <tt>[[mirv_recordmovie_stop|GoldSrc:mirv_recordmovie_stop]]</tt>:

![start stop commands entered](https://user-images.githubusercontent.com/3610128/63041250-b242c380-bec7-11e9-8935-8cf99c2f0117.gif)


To ease your life you can also bind these functions to a key on the keyboard, here is an example:

![example how to bind to key](https://user-images.githubusercontent.com/3610128/63041229-a22ae400-bec7-11e9-9a9b-dd8bbe9e0949.gif)

Now you can easily start the capturing by pushing F4 and stop it by pushing F3.


After you finished capturing you can close the game and browse to the path, where the image sequence was saved to, in our case **G:\mdttmp**:

![recorded files](https://user-images.githubusercontent.com/3610128/63041278-c38bd000-bec7-11e9-82c6-736e4253e962.gif)

You can see the captured images **FILENAME_00_all_xxxxx.tga**
and the depth images **FILENAME_00_depthall_xxxxx.tga**.

The exported sound file **FILENAME_00_sound.wav** is located in the same folder.


_Original tutorial by msthavoc._


# See also

* [[Home]]
* [[Tutorials]]
* https://www.advancedfx.org/support/