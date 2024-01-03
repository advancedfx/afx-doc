---
title: Tracking
---

# Tracking

So you want to track an entity in a demo. First of all lets find out what entities are available! Use <tt>[[mirv_showentities|GoldSrc:mirv_showentities]]</tt> to get a list of all the entities that the engine knows about.

```
] mirv_showentities
Showing known entities with models:
000. maps/2fort.bsp
001. models/player/scout/scout.mdl
014. *8
015. *9
- snip! -
207. models/backpack.mdl
208. models/backpack.mdl
209. models/backpack.mdl
213. models/backpack.mdl
267. models/caltrop.mdl
268. models/backpack.mdl
```

Now we need to check what these entities are. We want to track a particular backpack (yep, it's going to be a thrilling avi), so these backpack entities look promising.

We can look at an entity using <tt>[[mirv_entity_jump|GoldSrc:mirv_entity_jump]]</tt>. So lets look at a likely entity, such as 207.

```
] mirv_entity_jump 207
```

Now you're either looking at the right backpack, the wrong backpack, or maybe into a wall in the direction of a backpack in another room or base. Try the others until you find the one you want.

There is also <tt>[[mirv_entity_prev|GoldSrc:mirv_entity_prev]]</tt> and <tt>[[mirv_entity_next|GoldSrc:mirv_entity_next]]</TT> to look at the next or previous entity on the list, if you just want to cycle through.

A quick note about this - temporary entities (such as a rocket or a grenade) are more trick to get. To get one, you need to go to the point in your demo where this entity exists and then look for it.

So we've found the backpack we want (we were right first time in this example with 207), now we have to add it to the list of things to track. This uses aimlayers, which is basically a list of entities that should be tracked. The plugin will track the highest available entity on that list, which lets you do things such as track a soldier and then instantly swap to tracking his rocket once he fires. Or something else cool in counterstrike, I dunno.

To add something to your aim layer, you use the <tt>[[mirv_aim_layers|GoldSrc:mirv_aim_layers]] add</tt> command along with the slot # for it and the entity id

```
] mirv_aim_layers add 0 207
Added entity 207 at slot 0

] mirv_aim_layers list
00. Ent #207
```

It didn't really matter which slot we put, as it could only go slot 0. If we add something else, putting slot 0 for that would bump our entity #207 down to slot 1. If both of these entities were around while we were aiming, it'd track our entity at slot 0 rather than entity #207 at slot 1. You can use <tt>[[mirv_aim_layers|GoldSrc:mirv_aim_layers]] list</tt> to view your aim layer, or <tt>[[mirv_aim_layers|GoldSrc:mirv_aim_layers]] del</tt> to remove the entity from slot 2, for example.

Now that you've added all your entities, you're almost set to go. There's a few cvars which you might want to fiddle with first.

* <tt>[[mirv_aim_onlyvisible|GoldSrc:mirv_aim_onlyvisible]]</tt> : 0: aim at any active entity, 1: aim only if it is visible
* <tt>[[mirv_aim_snapto|GoldSrc:mirv_aim_snapto]]</tt> : 1: maintain a perfect aim on the entity, 0: do its best to aim at the entity, like a camerman trying to follow something moving
* <tt>[[mirv_aim_lingertime|GoldSrc:mirv_aim_lingertime]]</tt> : how long (in frames) to watch the spot where an entity went out of view or into inactivity before swapping to the next entity down the list
* <tt>[[mirv_aim_oneway|GoldSrc:mirv_aim_oneway]]</tt> : 0: always aim at the highest possible slot entity no matter what, 1: only allowed to change aim to entities at a higher slot. if following the entity at slot 0 for example, this means that once that entity is gone then it won't follow anything else (until told to stop aiming)

Oh and finally, use <tt>[[+mirv_aim|GoldSrc:+mirv_aim]]</tt> to aim (bind to a key and hold down) or <tt>[[mirv_aim_start|GoldSrc:mirv_aim_start]]</tt> and <tt>[[mirv_aim_stop|GoldSrc:mirv_aim_stop]]</tt>.


You can find a list of all tracking related commands in [[GoldSrc:Commands]].

# See also

* [[GoldSrc:Commands]]
* [[GoldSrc:Tutorials]]