---
title: mirv_camimport_load
---

# mirv_camimport_load

<tt>mirv_camimport_load _&lt;bvhfile&gt;_ _\[&lt;basetime&gt;\]_</tt>

Overrides the game camera with motion data from _&lt;bvhfile&gt;_.

You can _optionally_ specify a time offset with _&lt;basetime&gt;_ (see <tt>[[mirv_camimport_basetime|GoldSrc:mirv_camimport_basetime]]</tt>),
otherwise the current time will be used.

**Note: Recording needs to be started at least once** before the import works.

The imported frames are not interpolated, HLAE will choose the nearest neighbouring frame,
so make sure the framerate of the BVH is high enough.

# See Also

* [[Camera Motion Data]]
* [[mirv_camimport_basetime|GoldSrc:mirv_camimport_basetime]]
* [[mirv_camimport_end|GoldSrc:mirv_camimport_end]]
* [[GoldSrc:Commands]]
