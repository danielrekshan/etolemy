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

# Technical Steps
## Step 1. Use video editing software to isolate UAP
