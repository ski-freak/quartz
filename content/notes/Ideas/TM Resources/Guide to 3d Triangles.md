---
title: Guide to 3d Triangles
enableToc: 
date: 
tags:
  - ideas
  - tmresources
---
- Guide by Sqweegal
- Addendum from agrabou:
	- This is really good, only thing I'd add is that you can do the color before adding it to the game. Big difference is that it's easier to keep colors perfectly consistent if you do it from the image editing program than doing it with the in-game RGB picker
- [Video tutorial](https://youtu.be/5o67Zl2Dp4k?si=gvnPiEXIyT2vg-YM)

The guide to 3d Triangles:

- Step 1: Pick a nice font and type something 
- Step 2: Change aspect ratio (I usually divide the width by 16 and multiply it by 9 after) (more info: [https://wiki.trackmania.io/en/content-creation/mediatracker](https://wiki.trackmania.io/en/content-creation/mediatracker "https://wiki.trackmania.io/en/content-creation/mediatracker")) 
- Step 3: Save as .svg -- In game -- 
- Step 4: Go to Media Tracker and add a camera. Its really important to make sure to get the correct orientation before you import your files, because they will transfer to the 3d traingles. In most cases you want the rotation (Pitch, Yaw, Roll) of your camera to be 0 (or 90, 180, 270 depending on your track) 
- Step 5: once the camera is set up, add 3d triangles. Hold alt and click the surface where you want your text to appear. You should see a green cross now. This will be the center of your 3d triangle 
- Step 6: Import svg If you see that the text is either to big or too small there is no way to rescale. You need to reposition your camera and import again (closer -> smaller, further away -> bigger) 
- Step 7: Editing: Go to Edit Vertex in the edit mode of the 3d triangle. You should now be able to select all the edges of the triangles and change the color and reposition by using the red, blue and green arrow (make sure that everything is selected before you make changes to not destroy your shape) If you cant click one of them, reposition your camera or change to free camera, select everything again and move. Once you are done, copy the start keyframe and paste it to the end keyframe. 
- Bonus: Animation of triangles: Make sure the start and end keyframes are identical. Add 2 new keyframes in between. Change the position of both new keyframes as disired and u are done. That way you can let the text fade in and out of objects. Imo this looks better than just having them suddenly appear ou of nowhere. You cannt change the opacity of 3d triangles.

![[Pasted image 20231125192722.png]]

![[Pasted image 20231125192741.png]]

![[Pasted image 20231125192759.png]]

![[Pasted image 20231125192808.png]]

![[Pasted image 20231125192813.png]]

![[Pasted image 20231125192818.png]]

![[Pasted image 20231125192827.png]]

![[Pasted image 20231125192835.png]]

![[Pasted image 20231125192842.png]]