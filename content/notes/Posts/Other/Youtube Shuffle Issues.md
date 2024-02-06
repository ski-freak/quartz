---
title: Youtube Shuffle Issues
enableToc: 
date: 2024-02-05
tags:
  - posts
---
This is mostly speculation, take it all with a grain of salt.

Youtube shuffle basically only shuffles and plays songs within like 50 or so songs of whichever song you are currently on. So if you have a very long playlist you will only here songs within a certain section. I believe this may be because it doesnt try to index the entire playlist all at once. That may want to do this if they are randomly selecting the song after each song is played so they dont have to index thousands of songs every time you finish one.

This can be solved by instead when the user opens up the playlist and selects shuffle, randomly ordering everything, and then leaving that as the set randomized order until the user shuffles things manually again.

This is what https://playlist-randomizer.com/ does (it's also open source bwoah) which I end up just using instead of youtube shuffle. I am less certain of what spotify is doing but it may be something similar. I know spotify mobile (at least the free one) definitely plays the same songs over and over and it seems like a very similar issue to youtube's.

Anyway the only thing that I am certain of is that youtube shuffle is/was broken, and the randomizer website fixes it.