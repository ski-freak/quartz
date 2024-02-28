---
title: TM Theory - Transitional Mapping Guide
enableToc: 
date: 2024-02-28
tags:
  - posts
  - tmtheory
---
This was an old script I wrote to try to help people with the basics of mapping transitions because its a common question, and to try to get the point across that your transitions need to be calculated to fit with the surrounding turns. Too often people build transitions that just ruin the surrounding track because you need to drive the turns badly to get the transition kind of ok but still kinda bumpy in order to drive quickly and it just sucks.

I think i even recorded the voiceover at some point, but never felt like editing it. If anyone feels like adapting this into a youtube video go ahead, just mention whatever my contribution ended up being at the beginning of the vid.

---

I often get asked about different aspects of mapping and how to do them well. The reality is there really isn’t one correct answer and there are multiple ways to do things, but I do think I can still give some insight into certain mapping topics, just don’t take it as a 100% you must do this.

The first thing to know is that you usually want your transitions to be smooth. You can have reasons you may not want to do this, such as to make your map in a specific style, but generally speaking smoother is better.

When it comes to transitions the smaller the jump the easier it is to build most of the time, so if you are new to mapping or transitional it might help to start off with smaller jumps. You’ll notice these often on other builders’ tracks, and it’s a lot easier to implement smaller jumps you find onto your own tracks as the exact speed and trajectory will have less of an affect on how well the transition works.

Speaking of other player’s maps, feel free to look at them and see for yourself how the transitions work and what blocks they use. One of the main ways mappers find new transitions is by building similar to existing ones, and then trying different blocks to find a new takeoff or landing that works. Also, transitions get reused and copied all the time, so you don’t need to feel bad about copying 2 blocks from someone else’s map. If you want to become a master of jumps and transitions you are going to need an encyclopedic knowledge of the entire blockset and how the car jumps and rotates off of the blocks, but really for starting out the best you can do is get to grips with the commonly used ones.

After you play around with transitions for a bit you’ll start to realize that even if you build the same blocks at a relatively similar speed, your jump won’t always be as smooth as the ones you may have seen on other maps. To understand why you need a basic understanding of how the car’s flight path tends to work with landings.

Obviously gravity is going to pull the car down when it jumps, so the vast majority of the time a smooth landing will be at a more downward angle than the takeoff. For the smoothest possible landing you would want to match the slope of the landing exactly with the angle the car is falling at. To visualize this we can use the editor trails openplanet plugin, {instructions on how to get it will be in the description}. This plugin is mostly useful on very big jumps, I don’t find much use out of it on small ones, but I also learned mapping without it so your mileage may vary.

Going one level deeper, when you jump off of a block the nose comes off first, so in most situations, the car will default to having the nose tip downward as it travels through the air. If the edge of the block you jumped off of was curved, the car will continue to rotate following it’s original path as it flies through the air, continuing to rotate even after it leaves the block. With this knowledge, especially on medium to large jumps, you will often want to match the landing slope so that when the car lands it is at least close to landing with all four wheels at the same time. Combining this with matching the angle of the car’s flight path is one way to get very smooth transitions, however, you can still create smooth landings even if you land on some wheels first, it mostly comes down to the specifics of the situation.

However, making your transitions smooth is only half the battle, because if they are not calculated to work well with the surrounding turns they won’t be nice to drive, and may even end up being bumpy after all. To illustrate my point imagine a transition that in a vacuum is fairly smooth, and you as a mapper build it on your map. However, the turn that came before this transition is faster to exit wide on, so the fastest line ends up not being the same as the smooth line for the transition. Now your super smooth transition is effectively not smooth anymore. The same applies if you have to slow down by releasing acceleration to drive a jump smoothly, at that point it’s effectively not smooth, and if it’s faster to release then that may be a calculation issue in and of itself. With this example I used smoothness, but this can also apply more generally to how your transition fits into the flow and calculation of your map, which is arguably more important. To avoid this you should almost always build and test your transitions with whatever the fastest line from the previous turn is. If needed you can set up a checkpoint before and after your turn so that you can respawn a few times to get it well, then have a nice save state on the exit to use to test the next part. This can be useful even if you aren’t building transitions by the way, and if you aren’t good enough to drive individual turns fairly quickly then you can always ask better players to test your map. There are usually streamers who will test finished or unfinished maps such as myself, and you can also join discords such as the trackmania mapper assembly and ask for feedback there.

If you have a good idea of map flow, you should try to ensure that you don’t break it too much with transitions. Transitions can work well with the flow of a map, but if you have to stop what you are doing to drive straight or the transition otherwise messes with the flow, that may not be ideal. This can often come up when combining multiple transitions in a row, so you may want to be careful when doing that. Your maps don’t all have to flow perfectly, but similar to smoothness and the calculation I outlined it’s a good thing to default to unless you have a good reason to not. 

One more advanced thing related to transitions and jumps is how the car reacts to shifts in momentum. When you turn or stop turning the trackmania car, especially at higher speeds, it will wobble a bit due to the suspension. This wobble can carry over onto jumps, which is often called a ride trick. This isn’t inherently good or bad, and sometimes it’s faster to zigzag right before larger jumps to reduce airtime slightly by touching the ground sooner. However, on high speed jumps with small ramps it can often be very annoying, as you may have to avoid steering for a second before the ramp to not jump too low. This doesn’t usually come up at lower speeds, but it can occasionally be relevant so it’s nice to know anyway.

By the way, boosters can also affect the way the car shifts as it takes off from jumps, and for some reason having the slope of the road curve away on a jump makes the car fly further.

You may wonder where the airbrake fits into all of this, and once again it depends. Airbrake isn’t always faster on jumps, and especially on small ones players usually won’t be pushing the brake button. For this reason, unless you think it’s faster one way or the other, I wouldn’t bank on the players of your map airbraking or not. To try to give a bit more information on this, at high speeds such as in fs airbrake is often not faster. On landings that are already fairly smooth it is often not faster. On very bumpy landings airbrake is often faster. And f you are landing in a drift whether airbrake is faster or not usually depends on how far away the turn is from the landing. If it’s further away you may be better off without airbrake, as landing smoothly makes you begin your turn sooner. As usual, if you are trying to calculate your map in a certain way or make it smooth, it’s helpful to know what the fastest way to drive it is.

To recap:
Try to make your transitions as smooth as you can, understanding the trajectories the car takes and common transitions can help with this.
It’s very important to ensure that your transitions are calculated to work with the fastest lines in your turns.
And if you are at a loss of what kind of transitions and jumps to build, there were plenty shown in this video, so maybe take some inspiration!

Thanks for watching, subscribe for more trackmania videos, and have a great day!



- I mostly used jump and transition interchangeably in this video, the definitions are a bit different depending on who you ask, and I didn’t feel like getting into the weeds of creating an exact definition just for the video, so hopefully if you are someone who is currently writing a pedantic comment you will understand.

---
More: [TM Theory](./tags/tmtheory)