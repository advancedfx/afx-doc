---
title: mirv_matte_viewmodel
---

# mirv_matte_viewmodel

<tt>mirv_matte_viewmodel _0|1|**2**|3_</tt>

* **Default:** 2

Controls the drawing of the so called &quot;view model&quot;, which i.e. is the in-eye weapon of the player.

* **0:** Hide if not using matte.<br />Otherwise hide from world stream and mask from entity stream (hide if [[mirv_matte_xray|GoldSrc:mirv_matte_xray]] is enabled).
* **1:** Draw if not using matte.<br />Otherwise draw in world stream, mask from entity stream (hide if [[mirv_matte_xray|GoldSrc:mirv_matte_xray]] is enabled)
* **2:** Draw if not using matte.<br />Otherwise draw in entity stream, hide from world stream
* **3:** Always draw.

# See also

* [[GoldSrc:Matte Effects]]
* [[mirv_movie_splitstreams|GoldSrc:mirv_movie_splitstreams]]
* [[GoldSrc:Commands]]
