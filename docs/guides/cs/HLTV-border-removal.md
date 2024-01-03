---
title: HLTV-border-removal
---

# HLTV-border-removal

The old HLTV border [removal packs are broken since the steam update](https://github.com/ValveSoftware/halflife/issues/760). Fortunately HLAE is coming to the rescue.

# [[Counter-Strike 1.6|GoldSrc:Mod:cstrike]]

To remove HLTV borders, execute the following HLAE commands in the console:
* <tt>[[mirv_movie_hidepanels|GoldSrc:mirv_movie_hidepanels]] 1</tt> (Alternatively you can use [[mirv_movie_separate_hud|GoldSrc:mirv_movie_separate_hud]])
* <tt>[[mirv_deathmsg|GoldSrc:mirv_deathmsg]] offset 40</tt>

Please be aware that this will remove the borders from the images captured with HLAE, but they will still be displayed on the screen.
