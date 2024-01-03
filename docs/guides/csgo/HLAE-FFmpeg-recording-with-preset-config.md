---
title: AfxRgbaLut---Color-Lookup-Table-format
order: 23
---

This tutorial is based on a config file (ffmpeg.cfg) along with some presets written and tested by [Purple-CSGO](https://twitter.com/Purp1eCSGO).

> For specifically learning these commands, check our Wiki and other tutorials, or analyze the config file.

## Related Tutorials

- Video tutorial: https://b23.tv/av56424646 [English subtitles available]

- Written tutorial: https://upup.cool/pages/620156/ [[zh-CN](https://upup.cool/pages/00d111/)]

## Steps

1. Download and install **ffmpeg**  to `hlae/ffmpeg/` Folder [[Link](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-full.7z)]. **Be sure** that `hlae/ffmpeg/bin/ffmpeg.exe` exists.
2. Download [ffmpeg.cfg](https://github.com/Purple-CSGO/CSGO-Config-Presets/blob/En-US/ffmpeg.cfg) [[zh-CN](https://github.com/Purple-CSGO/CSGO-Config-Presets/blob/master/ffmpeg.cfg)] to your cfg folder.
3. Open `ffmpeg.cfg` and look through all the instructions. Modify default record setting if you want.
4. Launch CS:GO with HLAE.
5. Use `exec ffmpeg` to load presets. `p2` is used by default.
6. Change setting with a single command like `p0` (for higher quality)

> Settings are applied to all streams. Do other things as usual.

## Which preset to use

- `p1` and `p2` are recommended for common uses.
- Presets like `p1pro` set up **YUV422 10BIT**. More space for color grading is given but they are not compatible with some softwares like Vegas ~14 and Premiere ~2019.
- `p4444` and `p422` use **ProRes** codec and are recommended for smoother editing experience.

## FAQ

Issues (such as stuttering) with the output video file?

- Your media player probably doesn't have the required codecs.
- Use an alternative media player such as VLC, potplayer or mpv instead.