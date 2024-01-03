---
title: __mirv_depth_slice_lo
---

# __mirv_depth_slice_lo

# Description

Allows to retrieve a specific slice of the depthbuffer.

This is only useful when dumping with low precision, i.e. <tt>[[__mirv_depth_bpp|GoldSrc:__mirv_depth_bpp]] 8</tt> (which is the standard setting).

Valid values are 0.0 &lt;= __mirv_depth_slice_lo &lt; __mirv_depth_slice_hi &lt;= 1.0.


## __mirv_depth_slice_lo

<tt>__mirv_depth_slice_lo _f_</tt>

**Default:** 0.0

Sets the lower boundary of the slice.


## __mirv_depth_slice_hi

<tt>__mirv_depth_slice_hi _f_</tt>

**Default:** 1.0

Sets the upper boundary of the slice.

# See also

* [[mirv_movie_depthdump|GoldSrc:mirv_movie_depthdump]]
* [[__mirv_depth_bpp|GoldSrc:__mirv_depth_bpp]]
* [[GoldSrc:Commands]]
