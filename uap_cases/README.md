# UAP Analysis Technique
This directory contains analysis of UAP footage using the ETolemy technique.  It contains data and files sufficient to reproduce, duplicate, or extend the specific analyses or the techique itself. 

The repository include the first 100 frames of each video, but requires you to generate the frames from the each video.

**Goals**

The goals of the technique include:
1. Graphing computationally derived measures in a scale appropriate for manual ruler-and-compass analysis (analysis csv)
2. Production of graphics that demonstrate the computational and geometric analysis (countour image files and animation GIF)

**Technical Steps**

The technique is expressed through the following steps:
1. Isolation of UAP in video editing software
2. Generation of images from video frames
3. Analysis of images
    * Brightness, valence, max from PIL
    * Contour detection, area, and xy from OpenCV
    * Write CSV
4. Generation of analyzed frames for animation
5. Visualization of CSV data

## Technical Steps
These notes assume that you have a basic familiarity with computer programming.  If you do not, you can learn enough about programming to reproduce and work with these analysis in 4-8 hours.  If you would like to learn, I recommend the following course of study:
1. Python tutorial from w3 schools
2. Jupyter Notebook tutorial focused on data frames
3. PIL and OpenCV documentation

## Development Environment
The technique was developed on Windows 10 using Visual Studio Code with Ubuntu WSL and other open source tools. 

* GIMP for image creation (masks applied to videos to isolate UAPs)
* Open Shot for video editing
* ffmpeg to extract frames from video
* Jupyter Notebook classic for Python 3 programming
* PIL and OpenCV for image analysis
* Tableau Public for data visualization
* ImageMagick for GIF creation
* OBS Studio for video presentations

## Command Line Prompts
**Frames**

After installing ffmpeg, generate the frames from the videos in ../video by using this command:

<code>ffmpeg -i ./justaplane.mp4 "./frames/%0d.png"</code>

**GIF animations**

After installing ImageMagick, generate the GIF animation by navigating to the /frames/gif directory and run this command:

<code>convert -delay 5 -loop 0 *.png all5.gif</code>

# Cases
## Just a Plane - Sandy Springs, GA September 2022
Filmed by John Martin, associated with CE-5
* Video: https://youtu.be/aEQOtMxwcwE?t=99
* Data: https://public.tableau.com/views/JustaPlane-SandySpringsGASeptember2022/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link

## Navy Pyramid
Filmed by US Navy, video published by Jeremy Corbell
* Video: https://youtu.be/qQsmTKYpnoI
* Debunk: https://nypost.com/2021/04/21/ufo-expert-debunks-navy-footage-of-pyramid-shaped-objects/
* Data: https://public.tableau.com/views/NavyPyramidisaPlane/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link

## Orb Over Lake
Filmed by Reddit user Full_Intern_5507, alleged to be on-duty police footage
* Video and story: https://www.reddit.com/r/UFOs/comments/1147lxj/ufo_i_saw_while_on_patrol/
* Data: https://public.tableau.com/views/OrbOverLake/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link

## NARCAP TR 20
Filmed by commercial pilots, documented by NARCAP scientists
* Video: https://youtu.be/Gu0EemWzZpM
* Report: https://www.narcap.org/blog/narcaptr20
* Data: https://public.tableau.com/views/NARCAPTR20/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link

## Hello Beautiful - Sandy Springs, GA September 2022
Filmed by John Martin, associated with CE-5
* Video: https://youtu.be/XTwDYdApydc
* Data: https://public.tableau.com/views/HelloBeautiful-SandySpringsGASeptember2022/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link

## Cosmic Highway
Filmed by Jimmy Blanchette, associated with CE-5
* Video: https://www.youtube.com/watch?v=fWIO_nMQYIU
* Data: https://public.tableau.com/views/cosmichighway/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link

## Monroe Institute UAP
Filmed by Rob Freeman, associated with CE-5
* Video: https://www.youtube.com/watch?v=uByuadfNNGU
* Data: https://public.tableau.com/views/MUAP-correctedbystarswithvalenceanalysisverticalandhortizontalproportionat4tohalfmeasure/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link

# LICENSE
This README file defines the novel technique of UAP analysis and definitively offers this intellectual property with the Creative Commons liscence.  While the code itself is simple and modeled directly on examples from documentation of the consistuent parts, the whole process is a novel technical invention.  

The process involves a) computational analysis of UAP footage, b) production of geometrically demonstrative graphics such as the GIF animation or the charts proportioned to ruler-and-compass analysis, and c) the identification ruler-and-compass geometric constructions.

Specific novel aspects of the technique include a) frame-by-frame analysis of UAPs into brightness, valence, and area measures, b) application of ruler-and-compass geometry using charts in proportion to drawing tools, and c) production of graphics that demonstrate geometric qualities.

I, Daniel Rekshan, believe this analysis technique to be a novel invention and, as such, my intellectualy property.  I claim widest ownership of the specific techique of UAP analysis as possible so that I, here and now, publish as open-source and non-commercial in all jurisdictions possible.

This work is offered under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International.  Please see the LICENSE file for more information or visit: https://creativecommons.org/licenses/by-nc-sa/4.0/

This means you can use or adapt any part of the analysis or visualization software for non-commercial purposes, if you provide attribution, and if you distribute your contributions under the same license.


[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)