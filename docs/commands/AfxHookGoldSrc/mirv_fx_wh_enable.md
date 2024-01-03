---
title: mirv_fx_wh_enable
---

# mirv_fx_wh_enable

<tt>mirv_fx_wh_enable _**0**|1_</tt>

* **Default:** 0
  
Enable / Disable built in wh (wall hack) system. 
The wall hack system WILL ONLY WORK PROPERLY WHEN HLAE IS IN RECORDING MODE:
To preview the final result you can use [[mirv_movie_simulate|GoldSrc:mirv_movie_simulate]].
 
All transparency stuff is not applied to the entity stream, but all other
streams. So there will be problems with the world depth dump when the wh is
enabled, because the z-Buffer check on walls is disabled to make the wh work.

# See also

* [[mirv_fx_wh_additive|GoldSrc:mirv_fx_wh_additive]]
* [[mirv_fx_wh_alpha|GoldSrc:mirv_fx_wh_alpha]]
* [[mirv_fx_wh_noquads|GoldSrc:mirv_fx_wh_noquads]]
* [[mirv_fx_wh_tint_colorf|GoldSrc:mirv_fx_wh_tint_colorf]]
* [[mirv_fx_wh_tint_enable|GoldSrc:mirv_fx_wh_tint_enable]]
* [[mirv_fx_wh_xtendvis|GoldSrc:mirv_fx_wh_xtendvis]]
* [[GoldSrc:Commands]]

