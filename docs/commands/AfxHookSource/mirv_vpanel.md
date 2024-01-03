---
title: mirv_vpanel
---

# mirv_vpanel

* For old VGUI (Valve GUI) panels only (there's plenty of them, panorama runs inside one)
* Can show / hide a panel (be aware some panels are updated by code and reset next frame if you don't force with attach commands of a stream or similar)
* Can run "commands" on a panel, which are usually used by the buttons of a panel (see the example of DemoUI panel below)

# Supported Games
Counter-Strike: Global Offensive

# mirv_vpanel
`mirv_vpanel command <panelName> <sModule> <command>` - Execute \<command\> on panel with name \<panelName\> in module \<sModule\> (options are case-sensitive, \<sModule\> can e.g. be BaseUI or ClientDLL).

# Example
`mirv_vpanel command DemoUIPanel BaseUI play`

Possible command values for `DemoUIPanel` in `BaseUI`:
* uireload
* gotostart
* prevframe
* play
* nextframe
* gotoend
* timescale_quarter
* timescale_half
* timescale_one
* timescale_2x
* timescale_4x
* nextround
* previousround
* nextdeath
* prevdeath
* load
* edit
* smooth
* drive
* stop