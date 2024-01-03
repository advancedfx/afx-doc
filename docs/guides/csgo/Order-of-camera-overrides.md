---
title: Order-of-camera-overrides
---

# Order-of-camera-overrides

By default it is applied in this order of priority:
1) <tt>[[mirv_cam|Source:mirv_cam]] source</tt>
2) <tt>[[mirv_campath|Source:mirv_campath]]</tt>
3) <tt>[[mirv_camimport|Source:mirv_camimport]]</tt>
4) <tt>[[mirv_camio|Source:mirv_camio]]</tt>
5) <tt>[[mirv_fov|Source:mirv_fov]]</tt>
6) <tt>[[mirv_input|Source:mirv_input]] camera</tt>
7) <tt>[[mirv_aim|Source:mirv_aim]]</tt>
8) <tt>[[mirv_cam|Source:mirv_cam|]] offset</tt>
9) <tt>[[mirv_cam|Source:mirv_cam]] fov</tt>

Note: The order can be changed using <tt>[[mirv_input|Source:mirv_input]] order</tt>.

# See also
- [[Source:Commands]]
- [[Tutorial: Spectator smooth]]