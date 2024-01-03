---
title: Command Line Interfaces
order: 25
---

# Command Line Interfaces

Attention: Command line parameters are totally **case sensitive**!

## Examples

### CS:GO Launcher

```
hlae.exe -csgoLauncher -noGui -autoStart -csgoExe "C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\csgo.exe" -mmcfgEnabled true -mmcfg "C:\Users\Username\Desktop\mmcfg" -gfxEnabled true -gfxWidth 1280 -gfxHeight 720 -gfxFull false -customLaunchOptions "-console +echo \"Hello World\""
```


### AfxHookGoldSrc (Half-Life 1 / Counter-Strike 1.6 / ...)

```
hlae.exe -afxHookGoldSrc -noGui -autoStart -gamePath "C:\Program Files\Steam\steamapps\common\Half-Life\hl.exe" -modification cstrike -gfxWidth 640 -gfxHeight 480 -customCmdLine "+toggleconsole +echo \"Hello World\""
```

### CustomLoader

```
hlae.exe -customLoader -noGui -autoStart -hookDllPath "C:\path-to-hlae-folder\AfxHookSource.dll" -programPath "C:\Program Files\Steam\SteamApps\common\Counter-Strike Global Offensive\csgo.exe" -cmdLine "-steam -insecure +sv_lan 1 -window -console -game csgo +echo \"Hello World\""
```

## <tt>-csgoLauncher</tt>

This command-line parameter enables the following command line parameters, which are _optional_, meaning if not set, the default value is used (which is either the user's saved setting or if the user made no changes to the factory setting).
Specifying a parameter will overwrite the user's own settings in her/his config file.

The parameters pretty much reflect the available options in the Launch CS:GO dialog.

* **<tt>-autoStart</tt>** : If set HLAE will automatically launch CS:GO with the specified settings.
* **<tt>-noGui</tt>**: If set, HLAE will only carry out the requested operation(s) and exit without showing the HLAE GUI. The process exit code 0 indicates no failure so far, any other exit code means a failure happened.
* **<tt>-csgoExe &lt;String&gt;</tt>** : Sets the following string as path to use for the csgo.exe to be launched.
* **<tt>-mmcfgEnabled &lt;Boolean&gt;</tt>** : Whether to enable usage of <tt>mmCfg</tt> or not.
* **<tt>-mmcfg &lt;String&gt;</tt>** : location of the movie making config parent folder
* **<tt>-gfxEnabled &lt;Boolean&gt;</tt>** : Whether to enable usage of <tt>-gfxWidth</tt>, <tt>-gfxHeight</tt>, <tt>-gfxFull</tt> or not.
* **<tt>-gfxWidth &lt;UInt16&gt;</tt>** : Width of the resolution.
* **<tt>-gfxHeight &lt;UInt16&gt;</tt>** : Height of the resolution.
* **<tt>-gfxFull &lt;Boolean&gt;</tt>** : Whether to use fullscreen (true) or windowed mode (false).
* **<tt>-avoidVac &lt;Boolean&gt;</tt>** : Whether to add launch options that help avoiding VAC bans (true) or not (false). **You should not specify this option at all** or if you really want to then set it to true, otherwise you might risk VAC bans.
* **<tt>-customLaunchOptions &lt;String&gt;</tt>** : the following string is added to the custom launch options which are passed to the game executable (csgo.exe).

## <tt>-afxHookGoldSrc</tt>

This command-line parameter enables the following command line parameters, which are _optional_, meaning if not set, the default value is used (which is either the user's saved setting or if the user made no changes to the factory setting).
Specifying a parameter will overwrite the user's own settings in her/his config file.

The meaning of these parameters is covered in [[GoldSrc:Render Settings]] and [[GoldSrc:First Steps]]

* **<tt>-autoStart</tt>** : If set HLAE will automatically launch AfxHookGoldSrc with the specified settings.
* **<tt>-noGui</tt>**: If set, HLAE will only carry out the requested operation(s) and exit without showing the HLAE GUI. The process exit code 0 indicates no failure so far, any other exit code means a failure happened.
* **<tt>-gamePath &lt;String&gt;</tt>** : Sets the following string as path to use for the hl.exe to be launched.
* **<tt>-modification &lt;String&gt;</tt>** : modification to use, e.g. cstrike
* **<tt>-customCmdLine &lt;String&gt;</tt>** : the following string is added to the custom launch options which are passed to the game executable (hl.exe).
* **<tt>-gfxForce &lt;Boolean&gt;</tt>** : Whether to force resolution or not (can be true/false).
* **<tt>-gfxWidth &lt;UInt16&gt;</tt>** : Width of the resolution.
* **<tt>-gfxHeight &lt;UInt16&gt;</tt>** : Height of the resolution.
* **<tt>-gfxBpp &lt;Byte&gt;</tt>** : Bit depth, can be 16/24/32.
* **<tt>-forceAlpha &lt;Boolean&gt;</tt>** : Whether to force support of 8-bit alpha channel or not.
* **<tt>-optimizeDesktopRes &lt;Boolean&gt;</tt>** : This doesn't have any effect atm.
* **<tt>-optimizeVisibilty &lt;Boolean&gt;</tt>** : Whether the game window visibility shall be optimized or not during recording (TOPMOST window if true and stuff like that), can be true/false).
* **<tt>-fullScreen &lt;Boolean&gt;</tt>** : Whether to launch the game in fullscreen or not.
* **<tt>-renderMode &lt;Byte&gt;</tt>** : 0 - Standard, 1 - FrameBuffer Object, 2 - Memory DC

## <tt>-customLoader</tt>

This command-line parameter enables the following command line parameters, which are _optional_, meaning if not set, the default value is used (which is either the user's saved setting or if the user made no changes to the factory setting).
Specifying a parameter will overwrite the user's own settings in her/his config file.

* **<tt>-autoStart</tt>** : If set HLAE will automatically launch the CustomLoader with the specified settings.
* **<tt>-noGui</tt>**: If set, HLAE will only carry out the requested operation(s) and exit without showing the HLAE GUI. The process exit code 0 indicates no failure so far, any other exit code means a failure happened.
* **<tt>-hookDllPath &lt;String&gt;</tt>** : Sets the following string as path to use for the DLL to be injected into the process. It is possible to use this switch multiple times, the injection will happen in left to right (reading direction) order.
* **<tt>-programPath &lt;String&gt;</tt>** : Sets the following string as path to use for the program (e.g. csgo.exe) to be launched.
* **<tt>-cmdLine &lt;String&gt;</tt>** : the following string is added to the launch options which are passed to the program executable (e.g. csgo.exe).
* **<tt>-addEnv &lt;String&gt;</tt>**: The following string is added to the environment variables passed to the program executable (e.g. csgo.exe). Can be used multiple times.