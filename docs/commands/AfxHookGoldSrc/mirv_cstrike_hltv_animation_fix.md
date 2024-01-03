---
title: mirv_cstrike_hltv_animation_fix
---

# mirv_cstrike_hltv_animation_fix

This command can restore missing weapon animations in HLTV demos.

### Supported modifications

* [[cstrike|GoldSrc:Mod:cstrike]] (Counter-Strike 1.6)

## Usage

<tt>mirv_cstrike_hltv_animation_fix enabled _**0**|1_</tt>
- <tt>0</tt>: Default, disable the fix.
- <tt>1</tt>: Enable the fix.

<tt>mirv_cstrike_hltv_animation_fix primary|secondary _**0**|1|2_</tt> // _Override primary or secondary weapon state_
- <tt>0</tt>: Default, will only remember the state the weapon was in when it previously fired.
- <tt>1</tt>: Will force the weapon state to be unsilenced.
- <tt>2</tt>: Will force the weapon state to be silenced.