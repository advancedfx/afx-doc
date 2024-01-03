---
title: mirv_matte_entityquads
---

# mirv_matte_entityquads

<tt>mirv_matte_entityquads _0|1|**2**|3_</tt>

* **Default:** 2

Controls the drawing of dynamic entity quads, such as blood sprites and other sprites for example.<br />
Usually you will want to set [[mirv_matte_particles|GoldSrc:mirv_matte_particles]] the same.

* **0:** Always hide.
* **1:** Draw if not using matte.<br />Otherwise draw in world stream, hide from entity stream.
* **2:** Draw if not using matte.<br />Otherwise draw in entity stream, hide from world stream.
* **3:** Always draw.

# See also

* [[GoldSrc:Matte Effects]]
* [[mirv_movie_splitstreams|GoldSrc:mirv_movie_splitstreams]]
* [[mirv_matte_particles|GoldSrc:mirv_matte_particles]]
* [[GoldSrc:Commands]]

