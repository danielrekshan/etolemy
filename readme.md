[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)


# ETolemy - A Demonstration of Geometry with the Pulsations of a UAP

![Alt text](/ETolemy.PNG?raw=true "Screenshot of ETolemy Visualization")

* Full demonstration of geometry in Monroe UAP: https://youtu.be/Z4SDEHk9T6Y
* Video walkthrough of this repo: https://youtu.be/memN6-zlDpc
* Video documentation of analysis technique: https://youtu.be/Mu4-SgFFYlQ
* Presentation of 7 UAP analyses: https://youtu.be/4n0RHaEz39g

This repository contains prototype code for geometry analysis and visualization software that is focused upon the analysis of UAP footage. 

The footage was captured by Rob Freeman in May 2022 at the Monroe Institute as part of the first annual UAP Consciousness Conference, which involved CE-5 events with notable experiencers and researchers of the phenomenon.

The footage was analyzed by MUFON Canada director Dave Palachik that concludes the UAP is truly a UAP, not a satellite, space trash, and so on.

This software was designed to test the hypothesis that the UAP pulsation is a geometric signal that is discernible through simple ruler-and-compass geometric analysis.

## Links

Original video by Rob Freeman: https://www.youtube.com/watch?v=alloPQFcoLw

Dave Palachik discussing MUFON Case #122866: https://www.youtube.com/watch?v=9BDwSa57EyM&t=175s

For a video demonstration, see: https://youtu.be/Z4SDEHk9T6Y

For more context on this analysis and ruler and compass geometry, please view the Universal Language video series: https://youtube.com/playlist?list=PLc1xaLwy4Qv5unOPOuEubZXDTqdjgwuut


## Geometric Hypothesis Testing Method
Geometric analysis involves discernment of regular intervals and description of proportions.  It involves simple techniques like bisection or division in ratios.  The proportion of values is more important than the numeric values (associated with measurement units), therefore much of the work is simply scaling up or down various dimensions of meaning within the signal so that the eye and brain can recognize patterns.

### Obvious pulsation pattern
The pulsation of the UAP over time is obviously regular.  Initial analysis involved manual frame-by-frame annotation of brightness, which rendered a discernable pattern of intervals within approximate golden ratio and the whole number ratio 2:1.  The manual analysis looked at only 1000 frames, which is about 30 seconds of video.

The publically available footage is around 6 minutes, with about 4.5 minutes of highly stable footage (requiring no stabilization correction at all).  Therefore, in order to prove the hypothesis that it is a geometric communication, all frames must exhibit the geometric pattern.

### Analysis strategy
The analysis strategy is relatively simple: get a value for the pulsation brightness for each frame.  This was accomplished by cropping the original video, converting it to black and white, then applying a mask to various parts of the video such as the UAP, a torus around the UAP, and a star that moves across the frame.

The analysis was performed in Python and focused on two measures.  First, it looked at the average brightness of the pixels within the masked area.  Second, it looked at the distance from the lowest pixel brightness to the highest.  

### Pulse detection
Pulse detection was based on a combination of the brightness and valence measures, which was manually calibrated by checking againsts the original frames.  This process described pulsations that were undetected in the manual analysis but fit within the geometric pattern.

### Atmosphere and intensity
While the interval pattern is clearly discernible and precise, the intensity of the pulse is less clear due to atmospheric effects.  Two stars move across the frame and were similarly analyzed to provide a measure of atmospheric variance, which was proportionally applied to the variation of the UAP pulsations.

### Geometric congruence of pulsation of intensity
The intensity of the pulsations was visually observed to exhibit similar proportions as the interval pattern (2:1:0.78...).  The proportion of the y- and x- axis of the visualization was established through manual calibration of a single coefficient that proportionally scaled the y-axis such that the average intensities aligned with the proportions of the interval patterns, which are described through its ruler-and-compass construction.

The ruler and compass method of construction involves:
1. drawing unity circle
2. bisection of unity circle
3. golden section of unity circle radius
4. reflection of golden section to generate interval pattern

Geometric key
![Alt text](/key.jpg?raw=true "Geometric key")

Geometric pattern
![Alt text](/key2.jpg?raw=true "Geometric pattern")

### Geometric precision of intervals
The analysis describes the geometric precision of the intervals and signal.  Each pulse was analyzed to provide data for peak frame number, intensity, and duration.  The analysis tested for proportions between the pulsations that are derived from ruler-and-compass geometry (2, 1, 0.78, 0.32, 0.18).  

Only those intervals within 1% of geometric precision were designated in the analysis, which is a precision of 1-2 frames.  This is as precise as the frame-rate allowed.

Most pulsations exhibit 4 geometric ratios that are expressive of symmetry and golden ratio.

### Visualization
The visualization graphs pulsations over time in a variety of modes, with a frame-by-frame animation of the UAP pulsation.  The colored circles and bars represent interval proportions that have geometric precision of more than 1%.

### Analysis Inspiration
The inspiration and capacity to perform this analysis is directly derived from dreams involving ET/NHI beings.  Quite literally, in my dreams, an ET/NHI told me to learn ruler and compass geometry and then apply it to several sources of signal.  It instructed me to document my dreams and hypotheses before analysis, which I did.  I am currently exploring the implication of this anomalous dream activity.

Learn more about my story and geometric dreams in the video series The Universal Language: https://youtube.com/playlist?list=PLc1xaLwy4Qv5unOPOuEubZXDTqdjgwuut


### If not ET/NHI, then what?
This analysis and visualization demonstrates the presence of geometric, which is quite literally characteristic of the signals some SETI/METI researchers suggest is indicatory of intelligence (golden ratio and various symmetries).

The UAP moved in ways that prove it is not conventional.

The UAP appeared in synchronicity with human intention and invitation.

If it is not ET/NHI, then it may be of human origin, which is equally as interesting, although perhaps stranger.

## Analysis Steps
Written with Python3 and Jupyter Notebooks

1. Generate images from videos (ffmpeg -i ../circle.mp4 "../circle/%0d.png")
2. Run through Jupyter Notebook Analysis
3. Move data files into visualization (csvtojson 3-pulses.csv > pulses.json)
4. Run visualization

See Tableau Public workbook for interactive data: https://public.tableau.com/views/ETolemy-MonroeUAPData/Sheet1
See this Tableau I used to print out the signal to analyze with ruler and compass: https://public.tableau.com/views/MUAP-correctedbystarswithvalenceanalysisverticalandhortizontalproportionat4tohalfmeasure/Dashboard1

## Visualization Steps
Written with Nodejs and React
1. npm i
2. npm run start
3. click start button in bottom left of web browser

## UAP Cases and Definition of Analysis Technique
Video presentation of 7 cases using analysis techquie: https://youtu.be/4n0RHaEz39g

Please see the README.md file in the /uap_cases directory for information regarding the cases and the definition of UAP analysis technique.

## License
There is a non-trivial likelihood that the pulsation of light in this UAP footage is a documented, mathematical, and empathetic communication signal from an ET or non-human intelligence that responded to conscious invitation and intention.

After producing this analysis, I intuit that the signal is an invitation for peaceful and mutually respectful communication with the ET/NHI.  

It appears to be asking for attention and energy, while giving back demonstration of:
1. the physical technology required to produce the signal
2. the psychical technology required to observe and respond to human emotion and intention
3. geometry and mathematics essential to human cognition and scientific progress

If this is truly an ET/NHI signal, we could deduce that they are intelligent, intentional, respectful, peaceful, multidimensional, and patient.  

If we, as a culture, work with this and similar signals, we may directly relate with the source of the signal.  I am sharing my analysis and visualization files with the Creative Commons license because I want to live in a world where we relate to foreign cultures with respect and beauty.

This work is offered under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International.  Please see the LICENSE file for more information or visit: https://creativecommons.org/licenses/by-nc-sa/4.0/

This means you can use or adapt any part of the analysis or visualization software for non-commercial purposes, if you provide attribution, and if you distribute your contributions under the same license.

Please give credit to Rob Freeman for the original footage and Dave Palachik for the original analysis, both of which are publically available through Rob's web presence.

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

