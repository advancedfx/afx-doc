---
title: mirv_fov
---

# mirv_fov

## <tt>mirv_fov _**default**|&lt;f&gt;_</tt>

This command allows to set the Field Of View in degrees, where the argument either is a floating point value _&lt;f&gt;_ between 1.0 and 179.0 degrees or the special value _default_ for restoring the game's default behaviour.

The field of view value will be picked up by the campath features ([[mirv_campath|GoldSrc:mirv_campath]]). However for technical reasons it will be ignored by the camera import / export features ([[mirv_camexport_mode|GoldSrc:mirv_camexport_mode]] / [[mirv_camimport_load|GoldSrc:mirv_camimport_load]]).

## <tt>mirv_fov handleZoom enabled _**0**|1_</tt>

Default: 0

Whether to enable zoom handling (if enabled mirv_fov is only active if it's not below minUnzoomedFov (not zoomed)).

## <tt>mirv_fov handleZoom minUnzoomedFov _&lt;f&gt;_</tt>

Default: 90.0

Lower zoom detection threshold.

# See also

* [[GoldSrc:Commands]]
