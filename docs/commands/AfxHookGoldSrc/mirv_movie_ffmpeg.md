---
title: mirv_movie_ffmpeg
---

# mirv_movie_ffmpeg

## Installing FFMPEG

_[zip version]_ See the readme.advancedfx.txt in the ffmpeg folder where HLAE was extracted.

_[Setup version]_ If you use the HLAE installer, that will allow you to install ffmpeg automatically.

# Usage

Disable/enable FFMPEG for a given group of streams:
```
mirv_movie_ffmpeg all|allColor|allMain|allWorld|allEntity|allDepth enabled 0|1
```

Gets or sets current enabled state on a given stream:
```
mirv_movie_ffmpeg main|mainRight|world|worldRight|entity|entityRight|depthMain|depthMainRight|depthWorld|depthWorldRight|hudColor|hudAlpha|debug enabled [0|1]
```

Set options for the given group of streams:
```
mirv_movie_ffmpeg all|allColor|allMain|allWorld|allEntity|allDepth options <sOptions>
```

Gets or sets options on the given stream:
```
mirv_movie_ffmpeg main|mainRight|world|worldRight|entity|entityRight|depthMain|depthMainRight|depthWorld|depthWorldRight|hudColor|hudAlpha|debug options <sOptions>
```