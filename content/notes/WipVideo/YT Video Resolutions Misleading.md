---
title: YT Video Resolutions Misleading
enableToc: 
date: 2024-03-11
tags:
  - wipvideo
---
Over the last few years, I've been uploading videos of my Trackmania maps in 1440p ultrawide resolution. Specifically, 1440 pixels vertically and 3440 pixels horizontally, for a 21:9 aspect ratio, wider than the typical 16:9. However, the way youtube handles the quality options on these videos is strange, to say the least. The options given go beyond 1440p, all the way up to 4k resolution. If this doesn't seem strange to you, here's some background on video resolutions.

Most videos, and in fact all videos on youtube, are made of a certain number of pixels, individual dots of color that combine to create entire images, called frames. The still frames are displayed one after another at a constant rate to create the illusion of movement, a video. The number of pixels in each frame is the resolution. The most common video resolution contains 2,073,600 pixels, 1920 pixels horizontally and 1080 vertically. For brevity we refer to it as 1080p, or 1080p followed by the number of frames per second, referencing the vertical pixel resolution and the way the frames are displayed.

All other resolutions are named in the same way, 720p is 1280 pixels horizontally and 720 vertically, 2160p is 3840 pixels horizontally and 2160 vertically. If you haven't heard of 2160p, you may recognize it by it's more popular name, 4k. The term 4k was originally created for a standard film resolution, 4096 x 1716, named after the roughly 4000 pixels of horizontal resolution. Years later, when consumer displays and video were reaching 3840 by 2160 resolution, companies decided to also brand this resolution as 4k for marketing purposes, and the name stuck.

As a reminder, my trackmania videos are uploaded in 3440 by 1440 resolution, a wider version of 1440p, but I am being given the 2160p, or 4k quality option. You may have noticed that unlike all the other video resolutions, 4k is named after the horizontal pixel count rather than the vertical one. This led me to wonder if my 3440 by 1440 resolution videos were being rounded up to be named 4k, however, that leaves us with more questions than answers.

1440p is referring to the vertical resolution, so if youtube is giving me a choice between 1440p and 4k, then are both resolutions exactly the same despite being different quality options, are more pixels being created from thin air in the 4k option, or is youtube lying and the 1440p option isn’t 1440 pixels in height?

Well it turns out, it's the latter. If you right-click on a youtube video you gain access to the stats for nerds button. Seeing as we have spent the last few minutes talking about the semantics of video resolutions, I'd say we're qualified to click it. This gives us a bunch of technical information about the video as it is currently being displayed, including the actual resolution that it is being played at. Selecting the highest quality option, 4k, the stats for nerds confirm that the video is playing in its original resolution.

However, dropping down to the 1440p quality option, we can see that nothing about the video currently being displayed is 1440, it's actually playing in 2560x1072. Checking the 1080p option confirms the same trend, the video plays in 1920x804. You may notice that 1920 is the horizontal pixel resolution of 1080p, and at this point what is really going on becomes clear: The youtube quality options, despite being named in vertical resolutions, are allowing you to select the horizontal resolution of the video you're watching. When you pick the 1080p quality option, what you are really doing is selecting the resolution with a pixel width of 1920, not the resolution with a pixel height of 1080, and the other quality options are all done in the same way.

Why would youtube do this? At first I assumed it must just be a bug with videos in non-16:9 aspect ratios. However, youtube seems to correctly display the expected resolution if you are watching a video with an aspect ratio of 4:3. Because of this, my current theory is that it's not a bug, but rather intended behavior. 

If you assume that all youtube viewers will be watching on a 16:9 display, the most common aspect ratio for consumer electronics, and that to optimize their viewing experience users will select the resolution of their device in the quality options, things start to make some amount of sense. 

If you are watching on a monitor with a native resolution of 1080p and select the 1080p quality option, 16:9 aspect ratio videos will perfectly fill your screen without losing quality upscaling or wasting quality downscaling. 

Downscaling from a higher resolution, fitting a larger number of pixels onto a display with a smaller number of pixels, rather than using the native resolution of your display can improve picture quality, but more importantly higher quality settings on youtube have a higher bitrate, meaning more data is sent to your device. This improves the picture quality at the cost of requiring faster internet or data speeds. you will quickly reach a point of diminishing returns once you go beyond your display's native resolution as you are not actually adding more pixels to the screen anymore.

Now suppose you watch a 4:3 aspect ratio video on your 1080p monitor with the 1080p option. In that case, the sides of your monitor will be filled with black bars as it is wider than the video is, but the video will still fill the space vertically with the same amount of pixels as your 1080p screen has. On the other hand, if in the same situation you watch a 21:9 video, the black bars will be on the top and bottom of the screen. If youtube were to then give you this video with a 1080 pixel vertical resolution, it would have to be downscaled, or squished, to fit on your screen. You wouldn't be able to see the full 1080 pixels unless youtube cut off the sides of the video. By giving you a version of the video with a horizontal pixel count of 1920, which happens to be what your monitor has, no upscaling or downscaling needs to occur, although the vertical resolution won't be 1080, but rather 804, which is what you get when selecting 1080p on my 21:9 aspect ratio trackmania videos.

In most cases, the vast majority of people will not be thinking about any of this, and youtube will give them the resolution they probably would want, even if it's not exactly what they selected from the menu as written. 

---
||| If youtube didn't handle the resolutions this way, when watching on a 16:9 display, the density of pixels would change going from a 16:9 video to a 21:9 video even if you don't change the resolution option. 

---
It of course comes at the cost of it being extremely misleading if you are using a display with an aspect ratio other than 16:9, or want a specific resolution, as youtube is not actually giving you the resolution you select. If I want to watch my 1440p video in 1440p I have to select 4k, not 1440p, and then im going insane and make a youtube video with way too many fucking numbers in it.

