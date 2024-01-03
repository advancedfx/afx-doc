---
title: mirv_fix
---

# mirv_fix

This command allows to access fixes to the game that are not covered by other commands.

## mirv_fix blockObserverTarget

For CS:GO only, fixes unwanted player switching (spec lag/spin) i.e. upon bomb plant (blocks C_BasePlayer::RecvProxy_ObserverTarget). 

Syntax: <tt>mirv_fix blockObserverTarget _**0**|1_</tt>
* **0**: default, don't block
* **1**: enable block

## mirv_fix oldDuckFix

For CS:GO only, can fix player stuck in duck for old demos.

Syntax: <tt>mirv_fix oldDuckFix _**0**|1_</tt>
* **0**: default, don't block (no fix)
* **1**: enable block (fix), might need round restart

## mirv_fix physicsMaxFps

For CS:GO only, allows to raise / set the FPS limit for physics (i.e. rag dolls, so they don't freeze upon high host_framerate). 

Syntax: <tt>mirv_fix physicsMaxFps _\<fValue\>_</tt>
* **_\<fValue\>_**: Floating point or integer value to set as new limit (CS:GO's default is 9999 at the moment).

## mirv_fix playerAnimState

See [[Smoother Demos|Source:Smoother Demos]]

## mirv_fix selectedPlayerGlow

Controls the white glow for the currently spectated player in spectator x-ray.

* **0**: force off
* **1**: default
* **2**: force always on

See also: [[CS:GO Changing X Ray color]]

## mirv_fix forcePostDataUpdateChanged

This breaks e.g. the player model animations of the entity index set, but in-return makes things work in case the demo contains data about that entity, but the update is not triggered. This will help for checking some older demos for coach bug abuse in case where the replay / game would disagree with other detection tools that relay only on the network origin and angles otherwise: [[Example: Coach bug verification with mirv_calcs]]

## mirv_fix suppressFileCRCCheck
Enabled by default, only relevant for spectator no-insecure version of HLAE though usually.

## mirv_fix panoramaTiming

Fix Panorama UI HUD speed / timings when host_framerate not 0 (e.g. recording) or otherwise when demo_timescale is not 1.

* **0**: off
* **1**: on

Default: 1

# See also

* [[Source:Commands]]
* [[Source:mirv_snd_timescale]]