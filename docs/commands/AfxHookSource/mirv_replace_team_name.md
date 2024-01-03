---
title: mirv_replace_team_name
---

# mirv_replace_team_name

The command allows you to replace the team names shown in the GOTV spectator top bar and scoreboard.

# Supported games

Counter-Strike: Global Offensive

# Examples
### Team Numbers
1 = Spectator, 2 = TERRORIST, 3 = COUNTER-TERRORIST

### Simple Usage
`mirv_replace_team_name add 2 "clanName=Example Teamname"`

Enter `mirv_replace_team_name` in the console to get more help.

### Remove clan name (use default), team logo and flag:
`mirv_replace_team_name add 2 "clanName=" "flagImageString=" "logoImageString="`

### Set team logo

Available logos (filename.svg) can be found in "root\materials\panorama\images\tournaments\teams" of pak01_dir.vpk or add your own ones in "csgo\materials\panorama\images\tournaments\teams" folder on disk.

The name is the filename without extension, example:  
`mirv_replace_team_name add 2 "logoImageString=astr"`

Currently available names:
```
3dm, ad, astr, avg, big, bravg, c9, c9g, clg, cm, col, cr4z, cw, dat, dh13aa, dh13ab, dig, drea, e6ten, ebet, ence, eps, esc, faze, flg, flip, fntc, forz, furi, g2, gamb, god, gray, hlr, ibp, im, imt, indw, intz, keyd, king, lc, ldlc, lgb, liq, lumi, lumik, mfg, mibr, mss, myxmg, navi, nf, nip, nipta, niptb, nologo, nor, nosticker, nrg, nv, optc, orbit, penta, pkd, qb, r, ren, rgg, rog, sk, spc, spir, splc, spr, steu, stus, syma, thv, tit, tsm, tsolo, tyl, us, v, v2, ve, vega, vex, vg, vici, vita, vp, wgg, wins, xapso
```

### Set team flag

The logoImageString must be empty for this to work.

Available flags (filename.png) can be found in "root\materials\panorama\images\flags" of pak01_dir.vpk or add your own ones in "csgo\materials\panorama\images\flags" folder on disk.

The name is the filename without extension, example:  
`mirv_replace_team_name add 3 "flagImageString=nz" "logoImageString="`

Currently available names:
```
ae, ar, at, au, be, bg, br, by, ca, cc, ch, cl, cn, cz, de, dk, dz, ee, es, eu, fi, fr, gb, gp, gr, hk, hr, hu, id, ie, il, in, ir, is, it, jp, kr, kz, lt, lu, lv, ly, mk, mo, mx, my, nl, no, nz, pe, ph, pk, pl, pt, re, ro, rs, ru, sa, se, sg, si, sk, sq, th, tr, tw, ua, us, ve, vn, za
```

# See also

* [[Source:mirv_replace_name]]
* [[Source:Commands]]