---
title: mirv_snd_timescale
---

# mirv_snd_timescale

This command allows controlling the sound timescale independently of host_timescale.

This is useful in example used in the [[Smoother Demos|Source:Smoother Demos]] guide.

# Supported Games

Only Counter-Strike: Global Offensive is supported.

# mirv_snd_timescale _&lt;fValue&gt;_

Forces the sound system to use the floating point value _&lt;fValue&gt;_ as time scale. Note that this command will ignore the demo speed, unlike host_timescale.

**Examples**:

<tt>mirv_snd_timescale 1.0</tt> // plays the sound in normal speed

<tt>mirv_snd_timescale 0.5</tt> // plays the sound in half (50%) speed

<tt>mirv_snd_timescale 2</tt> // plays the sound in twice the normal speed

<tt>mirv_snd_timescale 0</tt> // mutes the audio

# mirv_snd_timescale default

Makes the sound system use the default behaviour (so it will depend on host_timescale again):

<tt>mirv_snd_timescale default</tt>

# See also

* [[Source:Commands]]
* [[Smoother Demos|Source:Smoother Demos]]