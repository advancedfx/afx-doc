---
title: mirv_matte_particles
---

# mirv_matte_particles

<tt>mirv_matte_particles _0|1|**2**|3_</tt>

* **Default:** 2

Controls the drawing of particle effects.

Part of player blood effects can be made of particle effects too, thus you may want to set [[mirv_matte_entityquads|GoldSrc:mirv_matte_entityquads]] the same.

* **0:** Hide if not using matte.<br />Otherwise hide from world stream and mask from entity stream (hide if [[mirv_matte_xray|GoldSrc:mirv_matte_xray]] is enabled).
* **1:** Draw if not using matte.<br />Otherwise draw in world stream, mask from entity stream (hide if [[mirv_matte_xray|GoldSrc:mirv_matte_xray]] is enabled).
* **2:** Draw if not using matte.<br />Otherwise draw in entity stream, hide from world stream
* **3:** Always draw.

# See also

* [[GoldSrc:Matte Effects]]
* [[mirv_movie_splitstreams|GoldSrc:mirv_movie_splitstreams]]
* [[mirv_matte_entityquads|GoldSrc:mirv_matte_entityquads]]
* [[GoldSrc:Commands]]
