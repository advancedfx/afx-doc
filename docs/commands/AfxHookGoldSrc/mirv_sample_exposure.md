---
title: mirv_sample_exposure
---

# mirv_sample_exposure

# Syntax

<tt>mirv_sample_exposure _&lt;0.0 - **1.0**&gt;</tt>

* **Default:** 1.0
* **Type:**  floating point, 0.0 - 1.0 (recommended range)

== Description ==

Controls the frame exposure time.
That is the fraction of time a frame is exposed to incoming samples (from the beginning of the frame). A higher value mean longer exposure than a lower value.
If you want cross-frame motion-blur see [[__mirv_sample_frame_strength|GoldSrc:__mirv_sample_frame_strength]] instead.


This is similar to a [Rotary disc shutter](http://en.wikipedia.org/wiki/Rotary_disc_shutter) where
<tt>mirv_sample_exposure = shutter_angle / 360°</tt>
Of course HLAE does not simulate a rotating disc, instead the whole frame is closed or opened ideally at once (electronic shutter).



**A lower exposure time results in less samples being used**, so you might want to compensate with a higher [[mirv_sample_sps|GoldSrc:mirv_sample_sps]] value:

HLAE tries to optimize the processing of the samples and speeds things a bit up when it determines samples can be skipped due to the shutter being closed (the actual amount depends on the sampling method set).

Consequently if you use a lower exposure value you can set [[mirv_sample_sps|GoldSrc:mirv_sample_sps]] higher in order to get about the same amount of samples during the shorter exposure time. (As a rule of thumb use <tt>mirv_sample_sps = (mirv_movie_fps / mirv_sample_exposure) * number_of_samples_you_want_during_exposure</tt>)

# Examples

The examples below are available as test video: [http://youtu.be/0Bm9kv-3t-Q](http://youtu.be/0Bm9kv-3t-Q)

## 360° shutter angle, 10 samples per exposure, 30 fps output
```
mirv_movie_fps 30
mirv_sample_enable 1
mirv_sample_exposure 1.0
mirv_sample_sps 300
```

## 90° shutter angle, 10 samples per exposure, 30 fps output
```
mirv_movie_fps 30
mirv_sample_enable 1
mirv_sample_exposure 0.25
mirv_sample_sps 1200
```

## 10° shutter angle, 10 samples per exposure, 30 fps output
```
mirv_movie_fps 30
mirv_sample_enable 1
mirv_sample_exposure 0.028
mirv_sample_sps 10800
```

# Speed considerations

Lower values are faster.

# See also

* [[GoldSrc:Sampling System]]
* [[__mirv_sample_frame_strength|GoldSrc:__mirv_sample_frame_strength]]
* [[GoldSrc:Commands]]
