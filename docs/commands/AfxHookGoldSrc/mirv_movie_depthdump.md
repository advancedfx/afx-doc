# Syntax

<tt>mirv_movie_depthdump _**0**|1|2|3_</tt>

* **Default:** 0

Allows to enable output of images containing depth information:

value | function | image | speed normal | speed sampled
--- | --- | --- | --- | ----
0 | none | n/a | n/a | n/a
1 | linear | [<img alt="linear depth dump" src="https://user-images.githubusercontent.com/3610128/63042721-e7044a00-beca-11e9-89a1-d1da20f4a6a2.jpg" width="300" height="169">](https://user-images.githubusercontent.com/3610128/63042721-e7044a00-beca-11e9-89a1-d1da20f4a6a2.jpg) | fast | fastest
2 | logarithmic | [<img alt="logarithmic depth dump" src="https://user-images.githubusercontent.com/3610128/63042722-e7044a00-beca-11e9-870f-6f252c30b0c9.jpg" width="300" height="169">](https://user-images.githubusercontent.com/3610128/63042722-e7044a00-beca-11e9-870f-6f252c30b0c9.jpg) | slow | slow
3 | Inverse (OpenGl) | [<img alt="inverse depth dump" src="https://user-images.githubusercontent.com/3610128/63042720-e66bb380-beca-11e9-8b59-43dba7b49e01.jpg" width="300" height="169">](https://user-images.githubusercontent.com/3610128/63042720-e66bb380-beca-11e9-8b59-43dba7b49e01.jpg) | fastest | fast

# Split Streams

When using the [[mirv_movie_splitstreams|GoldSrc:mirv_movie_splitstreams]] ([[matte effects|GoldSrc:Matte Effects|]]) have a look at [[mirv_depth_streams|GoldSrc:mirv_depth_streams]].

# Tip: 23 Bit precision OpenEXR streams

See [[mirv_depth_exr|GoldSrc:mirv_depth_exr]]

# Tip: Depth slicing

The debug commands [[__mirv_depth_slice_lo|GoldSrc:__mirv_depth_slice_lo]] and [[__mirv_depth_slice_hi|GoldSrc:__mirv_depth_slice_hi]] allow to output only a slice of the depth buffer. This is useful in case your output format has way lower precision than your graphic card buffer, which is usually the case in the default settings ([[__mirv_depth_bpp|GoldSrc:__mirv_depth_bpp]]).

This can be useful especially with function 3 (Inverse (OpenGl)).

# Tip: Calculating actual distances with linear depthdump

You can use the linear depthdump to calculate actual distances for a specific pixel in the dump very easily.

The following information is required:

* **p:** The index value in the linear depth dump of the pixel (in 0 - 255) we want to calculate the distance for
* **N:** The zNear value, which tells us how far black pixels (index 0) are away. It depends on the map you used, to get the value load that map and execute [[__mirv_depth_info|GoldSrc:__mirv_depth_info]].
* **F:** The zFar value, which tells us how far white pixels (index 255) are away. It depends on the map you used, to get the value load that map and execute [[__mirv_depth_info|GoldSrc:__mirv_depth_info]].

Now you can calculate the distance d as follows:
<tt>d = (p/255)*(F-N) +N</tt>

Since one unit in Half-Life is said to be about 1 inch the result will be in inches. 1 inch is about 2.54 cm.

Please be aware of the limited accuracy, the maximum distance error for linear 8bit depthdump is about 2 to 3 foot on most maps, [[__mirv_depth_info|GoldSrc:__mirv_depth_info]] will display a more accurate estimation for the maximum error based on the current map.

# Technical details

When [[sampling|GoldSrc:Sampling System]] is enabled, HLAE will internally linearise the depth buffer before sampling (and do further conversion after sampling). The sampling itself is averaging by integration, which happens with two-point approximation in the default sampling settings. So it's similar to what happens with opaque colour images upon sampling, but unlike those not based on a theoretical camera (well you can imagine collecting depth-rays if you want, I don't know haha).

# See also

* [[GoldSrc:Commands]] for related debug commands
* [[GoldSrc:Matte Effects]] for a manual entry about streams, matte and depthdump

# External links

* [Andre Kramer - After Effects Depth of Field](http://library.creativecow.net/articles/kramer_andrew/dof.php) - you can use the depth stream in place of the gradient in this tutorial (you don't need to pre-compose then).
* [msthavoc - HLAE Cam 2 AE Tutorial](http://www.youtube.com/view_play_list?p=CE8192FD6342179D) - in part 3 the tutorial covers how to use depth for masking
* (German) [msthavoc - Tiefenunsch&auml;rfe in CS mit Sony Vegas Tutorial](http://www.youtube.com/view_play_list?p=FF93E4E6717D0377)
