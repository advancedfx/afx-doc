---
title: mirv_movie_separate_hud
---

# mirv_movie_separate_hud

# Syntax

<tt>mirv_movie_separate_hud _**0**|1|2_</tt>

* **Default:** 0

* **0 :** no separation
* **1 :** separate HUD stream + HUD alpha stream
* **2 :** separate HUD stream only

When being separated none of the other streams should contain the HUD.

# Solving hudalpha stream problems

In some cases the _hudalpha_ stream might be empty (completely white). This is due the OpenGL window's frame buffer not having bit planes reserved for the alpha component.
There are 2 different methods than can help solving this problem:

## Method 1: launch options (recommended)

Make HLAE explicitly request alpha bit planes from the window system buffer::

Tick "Force 8 bit alpha channel" in the advanced settings in the [launch dialogue](https://github.com/ripieces/advancedfx.org/blob/gh-pages/wiki/Hale_first_steps_launchdialog.gif).

## Method 2: Render Target FBO

In case you have a card that support the EXT_framebuffer_object (see [[GoldSrc:Render Settings]]), using this target should solve the problem too.

# Compositing

## General

The hudalpha stream is used to to blend a black layer above the game footage.
The hudcolor stream is drawn additive on-top of all.

## Sony Vegas

* **1st** layer: **hudcolor**, composite mode: **Add**
* **2nd** layer: **hudalpha**, effect: **invert**, composite mode: **Multiply**
* other layers: game footage etc. goes here

Also see [Compositing in Vegas Pro](http://www.custcenter.com/cgi-bin/sonypictures.cfg/php/enduser/std_adp.php?p_faqid=470).

## Mathematical equation

(per pixel)
```
C - hudcolor
A - hudalpha
S - Source (other footage)
T - Target (composited image)

T(C,A,S) = (1-A)*S +A*0 +C
```

Evaluation from left to right. Keep in mind that operations in the clamped RGB space are neither distributive nor commutative.

# See also

* [[mirv_movie_hidepanels|GoldSrc:mirv_movie_hidepanels]]
* [[mirv_movie_clearscreen|GoldSrc:mirv_movie_clearscreen]]
* [[mirv_deathmsg offset|GoldSrc:mirv_deathmsg]] - useful for fixing the death message screen offset in HLTV demos.
* [[GoldSrc:Commands]]

