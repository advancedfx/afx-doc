---
title: Render-Settings
---

# Render-Settings

This page mainly focuses on the possible rendering related selections in the HLAE launcher.

# Graphic Resolution

This is covered in [[GoldSrc:First Steps]]


# Advanced Settings

Special rendering settings, which are mostly located in the Advanced Settings section in the HLAE launcher window.

## Optimize window visibility on capture

When this option is ticked, HLAE will undock the game window upon capture and maximize it on the screen.

This is in order to make sure that the maximum number of pixels of the game are visible on-screen during capture, which works around the problem of missing image content on some setups when parts are not visible on-screen.

Choosing a different _Render mode_ (see bellow) is also a possible option to overcome this problem.

### Technical background

**Q:** Why are there those problems with missing image content?

**A:** A so called pixel ownership test is part of the default OpenGL window buffer operation. The implementation of this test depends on the graphic card and OpenGL driver implementation. If the pixel ownership test fails incoming fragment data for those pixels may be dropped and their content is per definition undefined. While many ATI cards choose to render pixels that are covered by other windows or are not within the screen range, and thus the pixel ownership test passes for those too, many NVIDIA cards choose to not care about those potentially not visible pixels and drop them (pixel ownership test does not pass). While this is fine as long as the image is displayed on-screen only, this causes of course problem when HLAE wants to capture content in order to save a image to the disk. Off-screen or hidden pixels may contain undefined data (i.e. be black).
For more information on this problem see _10. The Viewport Does Not Clip or Scissor_ in [Avoiding 16 Common OpenGL Pitfalls](http://www.opengl.org/resources/features/KilgardTechniques/oglpitfall).
For more information on off-screen rendering look up GL_EXT_FRAMEBUFFER_OBJECT on the web.


## Render mode

The headings are titled according to the possible selections in the launcher dialogue.

The various render modes are mainly to overcome the problem described in _Optimize window visibility on capture_ (see above).
The Standard mode is recommended in case you don't experience problems with it.

### Standard

HLAE doesn't use any special render target and uses the game window's default system buffers instead.

In case you don't have trouble with the captured content this setting is fine.

However dependent on your card's implementation this may cause missing areas in the captures in case those window parts were not visible during recording.

### Frame Buffer Object

This requires the GL_EXT_FRAMEBUFFER_OBJECT and not all cards support it.

Frame Buffer Objects allow some sort of off-screen rendering and thus do not suffer from the potential troubles normal system window buffers may cause when capturing images.

But they suffer from other issues: HLAE currently can't offer any multi-sampling for this target (means no proper antialiasing), because the extension doesn't support it natively. Apart from that it should work fine.

In case an error box pops up or the game exits with an error, this target is not supported by your card or the resolution you choose is not supported (try choosing a lower resolution i.e.).

### Memory DC

This tries to render directly into system memory instead of rendering to a window.
For this mode the OpenGL driver will usually switch to the Microsoft GDI Generic (software) renderer, which is ''very slow'' and also doesn't have some extensions required by Half-Life for detail textures and required by HLAE for the alpha matte, meaning those features won't work.

## Force 8 bit alpha channel

The game usually doesn't explicitly request alpha bit planes for the rendering window. However these may be required by some special functions like [[mirv_movie_separate_hud|GoldSrc:mirv_movie_separate_hud]]. Ticking this option tells HLAE to force a request for such alpha bit planes.
