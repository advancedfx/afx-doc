---
title: __mirv_sample_frame_strength
---

# __mirv_sample_frame_strength

# Syntax

<tt>__mirv_sample_frame_strength _&lt;0.0 - **1.0**&gt;_</tt>

* **Default:** 1.0
* **Type**:  floating point, 0.0 - 1.0 (recommended range)

# Description

Controls clearing of the sampling buffer upon framing. The lower the value the more cross-frame motion blur.

# Speed considerations

* **0.0 :** is fastest
* **1.0 :** is fast
* **any other value :** is slower

# Example video

Shows the values 1.0, 0.5 and 0.0: http://youtu.be/v4TK5GInRrg

# See also

* [[GoldSrc:Sampling System]]
* [[GoldSrc:Commands]]
