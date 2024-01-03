---
title: mirv_fx_skyhd
---

# mirv_fx_skyhd

<tt>mirv_fx_skyhd _**0**|1|2_</tt>

* **Default:** 0

* **0 :** Off
* **1 :** load a sky from files, as outputted by the [[HLAE Sky Manager|GoldSrc:Sky Manager]]
* **2 :** for loading old HLAE skies

You can change the sky bitmap files while the game is running. Just enter <tt>mirv_fx_skyhd 1</tt> into the console to make MDT reload / update the sky with the files from disk.

# Sky files

When enabled MDT will look in the folder where the HL.exe of your game is located for the files

* mdtskyrt.bmp - right side of the skyboy
* mdtskybk.bmp - back
* mdtskylf.bmp - left
* mdtskyft.bmp - front
* mdtskyup.bmp - top (up)
* mdtskydn.bmp - bottom (down)

and use those to replace the skybox.

You can use the [[HLAE Sky Manager|GoldSrc:Sky Manager]] to assist you with migrating files from programs like Terragen.

## File Format

* 24 bit TrueColor bitmaps (BMP)
* can have higher and lower resolutions (i.e. 512x512 while CS only has 256x256)

## Resolution

Tip: Since many cards do not support or not accelerate non power of two texture sizes, it's recommended to choose width and height to be a power of two, i.e.: 64, 128, 256, 512, 1024, 2048.
(Width and height don't have to be of the same dimension, you can choose 1024x512 for example.)

# Tutorials

Some of these tutorials use the old HLAE Sky Format and thus you might need to use <tt>mirv_fx_skyhd 2</tt>.

* [Russian tutorial by Vadoskin / MovieNations.com](http://www.movienations.com/article/60)
* [English short tutorial by juGGaKNot](http://cm.cdhoom.com/?p=browse&action=tutorials&id=82) based on the Russian one
* [Video tutorial](http://mst-gaming.de/index.php?site=tutorials&action=show&tutorialsID=18) (no voice) -&gt; click video-tutorial

## Creating custom skybox textures

* **Blender 3D: Noob to Pro/Build a skyboxy**<br />http://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro/Build_a_skybox

# See also

* [[HLAE Sky Manager|GoldSrc:Sky Manager]]
* [[GoldSrc:Commands]]
