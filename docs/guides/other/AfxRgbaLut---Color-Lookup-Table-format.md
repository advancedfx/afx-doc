---
title: AfxRgbaLut---Color-Lookup-Table-format
order: 11
---

## Example file

```
String magic: 'AfxRgbaLut\0'
LE int32 version: 1
LE unsigned int32 resolutionRed: 1
LE unsigned int32 resolutionGreen: 2
LE unsigned int32 resolutionBlue: 2
LE unsigned int32 resolutionAlpha: 2
unsigned int8 red(red=0.5,green=0,blue=0,alpha=0)
unsigned int8 green(red=0.5,green=0,blue=0,alpha=0)
unsigned int8 blue(red=0.5,green=0,blue=0,alpha=0)
unsigned int8 alpha(red=0.5,green=0,blue=0,alpha=0)
unsigned int8 red(red=0.5,green=0,blue=0,alpha=1)
unsigned int8 green(red=0.5,green=0,blue=0,alpha=1)
unsigned int8 blue(red=0.5,green=0,blue=0,alpha=1)
unsigned int8 alpha(red=0.5,green=0,blue=0,alpha=1)
unsigned int8 red(red=0.5,green=0,blue=0,alpha=0)
unsigned int8 green(red=0.5,green=0,blue=0,alpha=0)
unsigned int8 blue(red=0.5,green=0,blue=0,alpha=0)
unsigned int8 alpha(red=0.5,green=0,blue=0,alpha=0)
unsigned int8 red(red=0.5,green=0,blue=1,alpha=1)
unsigned int8 green(red=0.5,green=0,blue=1,alpha=1)
unsigned int8 blue(red=0.5,green=0,blue=1,alpha=1)
unsigned int8 alpha(red=0.5,green=0,blue=1,alpha=1)
unsigned int8 red(red=0.5,green=1,blue=0,alpha=0)
unsigned int8 green(red=0.5,green=1,blue=0,alpha=0)
unsigned int8 blue(red=0.5,green=1,blue=0,alpha=0)
unsigned int8 alpha(red=0.5,green=1,blue=0,alpha=0)
unsigned int8 red(red=0.5,green=1,blue=0,alpha=1)
unsigned int8 green(red=0.5,green=1,blue=0,alpha=1)
unsigned int8 blue(red=0.5,green=1,blue=0,alpha=1)
unsigned int8 alpha(red=0.5,green=1,blue=0,alpha=1)
unsigned int8 red(red=0.5,green=1,blue=0,alpha=0)
unsigned int8 green(red=0.5,green=1,blue=0,alpha=0)
unsigned int8 blue(red=0.5,green=1,blue=0,alpha=0)
unsigned int8 alpha(red=0.5,green=1,blue=0,alpha=0)
unsigned int8 red(red=0.5,green=1,blue=1,alpha=1)
unsigned int8 green(red=0.5,green=1,blue=1,alpha=1)
unsigned int8 blue(red=0.5,green=1,blue=1,alpha=1)
unsigned int8 alpha(red=0.5,green=1,blue=1,alpha=1)
```

- LE = Little Endian (Intel) byte order
- if you have odd number per dimensions, e.g. 3 then the input is ofc [0, 0.5, 1]
- by definition 1 resolution is at [0.5]

## Interpolation

- 4D / Quadlinear interpolation (3D case is explained here: https://en.wikipedia.org/wiki/Trilinear_interpolation)