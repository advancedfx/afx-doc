# Motivation

The example test images show a scene from a Counter-Strike 1.6 mod match where the player we are watching in-eye is turning to the left:

no sampling | sps 180 -&gt; fps 30 |  sps 1200 -&gt; fps 30
--- | --- | ---
[<img alt="no sampling" src="https://user-images.githubusercontent.com/3610128/63041899-2a5db900-bec9-11e9-936c-a1de04ee92cc.jpg" width="120" height="90">](https://user-images.githubusercontent.com/3610128/63041899-2a5db900-bec9-11e9-936c-a1de04ee92cc.jpg) | [<img alt="sampling x6" src="https://user-images.githubusercontent.com/3610128/63041897-29c52280-bec9-11e9-8f5e-4335c9860d26.jpg" width="120" height="90">](https://user-images.githubusercontent.com/3610128/63041897-29c52280-bec9-11e9-8f5e-4335c9860d26.jpg) | [<img alt="sampling x40" src="https://user-images.githubusercontent.com/3610128/63041898-29c52280-bec9-11e9-96e7-92f7353094d2.jpg" width="120" height="90">](https://user-images.githubusercontent.com/3610128/63041898-29c52280-bec9-11e9-96e7-92f7353094d2.jpg)

The human eye is good at spotting things that don't seem to be continuous motion. For a real movie camera the [Shutter speed](http://en.wikipedia.org/wiki/Shutter_speed) allows to control motion blur, or in other words the time a frame is exposed to the scene.

Now a single image we get from the Half-Life engine is as if no time had passed at all when it was taken. This would result in a animation looking much more jittery than what you'd expect from a real camera.

The sampling systems allows to approximate what you'd get from a real camera by taking more images from the engine and using several of those to calculate a single frame outputted in the end. This of course comes at the cost of increased render time.

# Quickstart

The default settings allow getting started instantly, so just enter <tt>[[mirv_sample_enable|GoldSrc:mirv_sample_enable]] 1</tt> to enable the sampling system and then you can proceed working as usual, except that you are currently limited to the mainstream (see _Limitations_ bellow).


# Limitations

Not all streams support sampling, those streams will be outputted unsampled, this applies i.e. to camera motion data, and HUD streams.

# Mattes and sampling

Obviously color matte keying is no good for sampling, thus we recommend the alpha matte instead, see <tt>[[mirv_matte_method|GoldSrc:mirv_matte_method]]</tt>.


# Command Summary

* <tt>[[mirv_movie_fps|GoldSrc:mirv_movie_fps]]</tt> : output frame rate in frames per second
* <tt>[[mirv_sample_enable|GoldSrc:mirv_sample_enable]]</tt> : enable / disable sampling system
* <tt>[[mirv_sample_sps|GoldSrc:mirv_sample_sps]]</tt> : frame rate the game is run at in samples per second; higher values can increase quality and will increase rendering time

## Advanced

* <tt>[[mirv_sample_exposure|GoldSrc:mirv_sample_exposure]]</tt> : controls exposure time / simulates a camera shutter
* <tt>[[__mirv_sample_smethod|GoldSrc:__mirv_sample_smethod]]</tt> : approximation method (quality vs. speed)
* <tt>[[__mirv_sample_frame_strength|GoldSrc:__mirv_sample_frame_strength]]</tt> : allows extra motion blur



# Pros and Cons

## Cons
* Slow: Probably not as slow as when writing all frames unsampled to disk, but still slow.
* Lossy: Down-sampling is of course a lossy process, information get lost upon down-sampling. Ideally you would want to compose your video at the sampling rate instead and do the down-sampling upon the final render. This especially could get a problem with alpha compositing (A over B).
* Inaccurate: HLAE currently does not apply band-with limiters before down-sampling. This can cause artefacts.
* Artefacts: Especially alpha compositing ([A over B](http://en.wikipedia.org/wiki/File:Alpha_compositing.svg)) could become a problem, because the result is not independent from the background (keep in mind the clamped RGB space is neither distributive nor commutative).

## Pros
* It's cool: You even have a [[virtual shutter / exposure control|GoldSrc:mirv_sample_exposure]].
* It's not that bad, especially if you only capture one image stream, give it a try and judge yourself.