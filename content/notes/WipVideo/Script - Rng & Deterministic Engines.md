---
title: "Script - Rng & Deterministic Engines"
enableToc: false
tags:
- wipvideo
---
----
"deterministic engines & when games play themselves"

A VERY rough draft.

This video is mostly just a vehicle to talk about some vaguely related topics: pf and trackmania being deterministic, mc bedrock redstone weirdness, fighting games being weird and forcing 60fps, and the card game bit at the end, in a way that is somewhat cohesive.

There is more I want to add that I forgot, and the whole section about how the engines work is a complete disaster at the moment due to information I found regarding unreal and unity physics being contradictory.

As a note, anything in {curly brackets} is a note and not part of the script.

----
We often take for granted that when we do the same thing multiple times, we’ll get the same result each time. 

If I flick this lever the contraption will do the same thing very time. You might say it is a deterministic system, the same initial state will always lead to the same outcome. Unfortunately, in video games this is not always the case.

This is a simple piston setup in minecraft bedrock edition, and as you can see, it doesn't always work the same way. If we hop back over to java minecraft, it's predictable. Even if we power the pistons at exactly the same time, 
Bedrock redstone is non deterministic, it is... random. This is obviously quite horrible for what is essentially a logic simulation, as a wise mustachioed man once said, it's basically like if 2+2 equaled 4, most of the time, but occasionally added up to five. While this doesn't always cause problems, when combined with other differences it has caused the vast majority of the technical minecraft community to exist almost exclusively on the java version of the game, where things are predictable, consistent, and deterministic.

When there is 100% order and nothing is left to luck, incredible things are possible.

{autolevel montage, pf, mc circuits, mario maker, geometry dash} some kind of classical music maybe Tchaikovsky or swan lake or smth

In my last video I mentioned trackmania press forward maps, custom levels designed to finish themselves, all you need to do as the player is hold the forward button. The concept of a level playing itself is pretty old, I was unable to determine the earliest instance of one, but they've been built often by players in level editors for decades now. Geometry dash and the super mario maker games are also good examples.

There is a real craft to making these maps, and the difference between one made by someone who has made 100 or zero is immediately obvious. While driving the maps doesn't take any skill, the ability to create interesting tricks and smooth landings definitely does. There's all kinds of these automatic levels, ones where you have to press left or right, or even nothing at all. As I mentioned in the other video, player made press forward tracks have gotten an insane number of views on youtube and tiktok over the years, and it's possible that more people have seen them than actually know what trackmania is. No matter the variety, they are only possible because the trackmania physics engine is deterministic.

If you drive a time in tm, if you do the same inputs again, the exact same thing will happen. This obviously leads to the conclusion that the game has no rng, which in the traditional sense of the word. You will however, find a certain subset of players and viewers saying that because of this, no map is random and calling anything on a track random is wrong, but reality is a bit more complicated than that.

- This is a double pendulum. 
- it demonstrates chaos. 
- trackmania is chaotic. 
{I need to expand on the above points, they are just there as placeholders since I wanted to keep writing other stuff}

even if you don't buy into that and still want to get out your nerd emoji and say actually it's technically not random, there are still external factors. Even if you move your thumb the same way on the analog stick of your controller, you'll probably get a slightly different result, because it's not a perfect instrument, and then that uncontrollable variable will have a butterfly effect on the chaotic system and create what is essentially a random outcome. 
{resprit end of video thing}

Obviously these are all just technicalities, almost every map in trackmania is relatively consistent, at least in the newer games. The engine being deterministic doesn't really impact normal gameplay very much, even though it can be fun to use technicalities to point out to your favorite streamer that it's all just skill issue and they need to git gud.

There is another practical use for the game being deterministic, however. Back in tmnf and tm2, before there were official online leaderboards, replay files collected on player made websites and servers were how you kept track of who had the best times. The input data for these replays was unencrypted, and the game actually had a feature to verify the legitimacy of a given replay. This is possible because you can just play back those inputs, and if it matches the time on the replay, then you know the replay wasn't driven using speed hacks for example.

{damn it i forgot to talk about fighting games, I'll put it here later. they are notable for this video because they also control the frame rate in order to make everything visually conistent and have everything that ever happens in the game be communitcated to to the players in the same way each time}

While rather cool and interesting, a lot of these benefits of having aspects of a game be deterministic simply don't matter for most games, so it makes sense that many aren't. You may recall hearing another fun fact however, that computers are not truly random. Why then, aren't all games deterministic by default?

----
Everything in this coming section is a complete mess due to lack of reliable information that I could find. The structure is also a mess because I kept changing it as I was going due to finding different contradictory information.

That varies depending the game, and it turns out that the old fun fact about computers never being random is only partially true. It is possible to generate random numbers by taking external inputs and using them as a basis for generating your random number. For example, you could take the movements of the user's mouse, and then do some math with that in order to get an actually random number. Many games utilize player actions and inputs to determine the seed for their rng, since it's a relatively easy way to do it. This is why it is possible for players to reverse engineer and manipulate the rng in games like minecraft. Whether this has anything to do with bedrock redstone however, I cannot know. {should I cut this entire part? and just ignore that people who think they are very smart will comment about computers not being random? probably}

That varies depending the game, and since I'm not a minecraft developer I have no clue why bedrock redstone is broken, it could be due to any number of reasons. Speaking more generally, however, there's a few things that make it rather inconvenient or difficult to ensure determinism.


the answer has to do with math, and why your calculator sometimes lies to you.
also it doesn't matter most of the time, for the same reason that the chaos in trackmania usually never matters. {this is nice but only works if you put it in place of the previous block, so instead we move onto below I guess?}

Sometimes, your calculator lies to you.
These floating point numbers will always be consistent with themselves, if you do the same floating point calculation on the same system you will get the same result. However, on different hardware the result won't always be the same. This is due to blah blah blah cpu architecture etc.

physx, the physics engine that both unity and unreal engine use, will only be deterministic if you use the enhanced determinism mode, which forces all calculations to happen in a fixed order, basically. 

In order for a physics engine to be deterministic, it needs to not use floating point numbers, only ever advance the simulation by fixed time steps, and all interactions must be resolved in a set order. If any of these aren't the case, or perhaps other factors I am not aware of as well, then it won't always be deterministic. It's understandable then


This information is impossible to turn into any statement that I can be sure is correct, I don't know what to do. Here are some links that seemed relatively useful.
- https://www.reddit.com/r/learnprogramming/comments/7h0b4f/why_isnt_the_unity_physics_engine_deterministic/
- `https://www.stevestreeting.com/2020/07/26/using-bullet-for-physics-in-ue4/#:~:text=UE%20uses%20PhysX%20(like%20Unity,in%20a%20fixed%2C%20repeatable%20order`
- https://stackoverflow.com/questions/7365790/how-can-floating-point-calculations-be-made-deterministic
- https://forum.unity.com/threads/physx-determinism.127300/

--end impossibly annoying to research and verify section--

----

Allow me to ask you a question, why, in tabletop card games like magic the gathering and pokemon, as well as similar online games, do we shuffle the decks before we start playing? The obvious answer is that it makes each game more unique, like a minecraft seed. But if you think a bit more about what the game would look like if players could order their cards, it becomes a bit more clear. When you know ahead of time what cards you will have, and there is no variance in execution as it is just a card game, there is essentially no game to play anymore. You have already determined all of your moves, and unless your opponent has a surprise for you, which basically never happens within such environments, then the game once again plays itself, just like the trackmania press forward maps. Players of these games have experimented with using unlimited numbers of a single card in their deck, or ordering cards, and each time it ceases to be a game and becomes a puzzle to find the most unbeatable pile of cards. In a way the entire point of shuffling your cards and not knowing your opponent's in pokemon, magic, or hearthstone, is to prevent the game from becoming deterministic.

Thanks for watching.



A while back a friend on discord shared with me a concept for a card game in which it is the hidden information that prevents the game from being deterministic, rather than random cards. These long running card games really weren't designed to be played in a way where you have access to all your cards, and are completely broken when you do. Perhaps, if you designed a game explicitly around the choices and interactions between hidden but always available cards, you could make it work 
{I should just cut this part as well, its kind of interesting but really doesn't fit, better to end at the end of the last block}

---
More: [Work in Progress Videos](./tags/wipvideo)
