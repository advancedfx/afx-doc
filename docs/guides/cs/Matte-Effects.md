all together | entity stream | world stream | depth export
--- | --- | --- | ---
[<img alt="full" src="https://user-images.githubusercontent.com/3610128/63041568-76f4c480-bec8-11e9-84c7-c0cf0ca9d4ee.jpg" width="120" height="80">](https://user-images.githubusercontent.com/3610128/63041568-76f4c480-bec8-11e9-84c7-c0cf0ca9d4ee.jpg)) | [<img alt="entity" src="https://user-images.githubusercontent.com/3610128/63041567-76f4c480-bec8-11e9-8bfd-335e98fd1435.jpg" width="120" height="80">](https://user-images.githubusercontent.com/3610128/63041567-76f4c480-bec8-11e9-8bfd-335e98fd1435.jpg) | [<img alt="world" src="https://user-images.githubusercontent.com/3610128/63041570-778d5b00-bec8-11e9-8180-98384856cd28.jpg" width="120" height="80">](https://user-images.githubusercontent.com/3610128/63041570-778d5b00-bec8-11e9-8180-98384856cd28.jpg) | [<img alt="depth" src="https://user-images.githubusercontent.com/3610128/63041566-76f4c480-bec8-11e9-9166-61c980178b82.jpg" width="120" height="80">](https://user-images.githubusercontent.com/3610128/63041566-76f4c480-bec8-11e9-9166-61c980178b82.jpg)

You want a cool matte effect with maybe a player running in front of a house and then that house turns into a chicken and then maybe into de_dust2 or 2fort, before the player fades out, all with the camera spinning round that player and zooming in and out. Yep, we've all been there and it was this kind of thing that I first made this plugin.


Lets start however, by choosing your matte colour. What colour you want will depend on personal preference or the video editor you will be using.

```
] mirv_matte_setcolor 0 255 0
```

The <tt>[[mirv_matte_setcolor|GoldSrc:mirv_matte_setcolor]]</tt> command takes 3 arguments for red, green and blue, from 0 to 255.
If you prefer floating point values have a look at <tt>[[mirv_matte_setcolorf|GoldSrc:mirv_matte_setcolorf]]</tt>.
So our matte now is a perfect green, or #00FF00 as you might say if you were a pro web designer. Or possibly not.


Now you choose what you are recording, using <tt>[[mirv_movie_splitstreams|GoldSrc:mirv_movie_splitstreams]]</tt>, which has 3 possible values.

```
] mirv_movie_splitstreams 1
```
This only shows the world, entities are invisible.

```
] mirv_movie_splitstreams 2
```
This only shows the entities, and the rest is the matte colour you specified.

```
] mirv_movie_splitstreams 3
```
This alternates between the world and entities, and is probably the one you'll be using more often (but maybe not).


By default MDT will do image dumping itself, so you don't need to faff around with startmovie. MDT will automatically name your images (you can specify filenames) as well as take numbers and stuff like that. See [[GoldSrc:First Steps]] for more information. Plus it can do snazzy effects like depth dumping.


What, did somebody mention depth? Oh yeah, using <tt>[[mirv_movie_depthdump|GoldSrc:mirv_movie_depthdump]] 1</tt> you can also dump the depth buffer to tgas too. This is a representation of the depths of the image, the nearer to the observer something is the darker it'll be. You can use this for cool effects such as depth blurring or colouring.


Right where were we? We'll set the filename in order to keep things nice and organised.

```
] mirv_movie_filename "that_scene_with_chicken"
```


There's a few more cvars and commands you might want to mess around with:

* <tt>[[mirv_matte_entities|GoldSrc:mirv_matte_entities]]</tt> : allows to enter entity numbers that will be the only entities in the entity stream and the only entities not in the world steam.
* <tt>[[mirv_matte_worldmodels|GoldSrc:mirv_matte_worldmodels]]</tt> : use this to pick whether doors are in the world (1) or the entity streams (2)
* <tt>[[mirv_matte_viewmodel|GoldSrc:mirv_matte_viewmodel]]</tt> : same as above but with your player's viewmodel (the gun coming out your screen) instead

For even more commands just have a look at [[GoldSrc:Commands]].


Finally use <tt>[[+mirv_recordmovie|GoldSrc:+mirv_recordmovie]]</tt> or <tt>[[mirv_recordmovie_start|GoldSrc:mirv_recordmovie_start]]</tt> / <tt>[[mirv_recordmovie_stop|GoldSrc:mirv_recordmovie_stop]]</tt> to start the effects going (and the custom tga dumping if set).


A tutorial on chromatography would be handy really for post-plugin trickery, but beyond the scope of the plugin manual really!


# See also

* [[Home]]
* [[mirv_matte_method|GoldSrc:mirv_matte_method]] - allows to switch to a visibility matte instead, useful
* [[Tutorials]]