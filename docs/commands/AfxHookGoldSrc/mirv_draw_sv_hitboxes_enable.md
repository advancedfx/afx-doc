---
title: mirv_draw_sv_hitboxes_enable
---

# mirv_draw_sv_hitboxes_enable

<tt>mirv_draw_sv_hitboxes_enable _**0**|1_</tt>

* **Default:** 0

This will draw the serve-side hitboxes (for the listenserver / New Game), when the engine offers the server DLL (mp.dll for cstrike) them through the SV_StudioSetupBones blending interface function. In order for this to work you need at least another player looking at a player. Also you will notice the hitboxes to be flashing then, this is because the server doesn't call the function before every client.dll frame (only for a share of frames). Please make sure that VAC is disabled when creating a New Game / joining the listenserver (which is usually the case), otherwise you might get VAC banned. 

In the default settings the hitboxes will be white when being updated / calculated by the engine. They will be red when the engine doesn't calculate any updates and they are drawn from cache then.
If you shoot etc. only the white colored updates will count!

# See also

* [[mirv_draw_sv_hitboxes_ignore1|GoldSrc:mirv_draw_sv_hitboxes_ignore1]]
* [[mirv_draw_sv_hitboxes_setucolor|GoldSrc:mirv_draw_sv_hitboxes_setucolor]]
* [[mirv_draw_sv_hitboxes_seticolor|GoldSrc:mirv_draw_sv_hitboxes_seticolor]]
* [[mirv_draw_sv_hitboxes_width|GoldSrc:mirv_draw_sv_hitboxes_width]]
* [[GoldSrc:Commands]]
