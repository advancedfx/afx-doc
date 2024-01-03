---
title: mirv_camexport_mode
---

# mirv_camexport_mode

<tt>mirv_camexport_mode _**0**|1|2|3_</tt>

* **Default:** 0

On the advancedfx.org download page you can find several plugins / scripts that assist you with importing in 3ds Max, Cinema4D and so on.

The file will contain a skeleton with only one single bone.
The bone origin (head) is the view origin and the bone's end site (tip) points 1 Unit into the forward direction.

* **0 :** no camera motion data is exported
* **1 :** the current view (center) is exported
* **2 :** for [[mirv_movie_stereomode|GoldSrc:mirv_movie_stereomode]] only: export left and right views
* **3 :** for [[mirv_movie_stereomode|GoldSrc:mirv_movie_stereomode]] only: export center, left and right views


# See also

* [[Camera Motion Data]]
* [[GoldSrc:Commands]]
